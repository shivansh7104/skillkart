// pages/api/ask.js
import { supabaseAdmin } from "../../lib/supabaseServer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { question } = req.body;
  if (!question) return res.status(400).json({ error: "Missing question" });

  // 1. fetch relevant pods/articles by simple title/content match
  const { data: pods } = await supabaseAdmin
    .from("skill_pods")
    .select("*")
    .ilike("title", `%${question.split(" ")[0]}%`) // very simple search for MVP
    .limit(3);

  // 2. build context
  const contextText = pods.map(p => `Title: ${p.title}\nDescription: ${p.description}`).join("\n\n");

  // 3. call OpenAI Chat completions
  const openaiResp = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-4o-mini", // pick a model you have access to
      messages: [
        { role: "system", content: "You are a helpful assistant that answers questions based on the provided context." },
        { role: "user", content: `Context:\n${contextText}\n\nQuestion: ${question}` }
      ],
      max_tokens: 400
    }),
  });

  const openaiData = await openaiResp.json();
  const answer = openaiData.choices?.[0]?.message?.content ?? "No answer";

  return res.status(200).json({ answer });
}
