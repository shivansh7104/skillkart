// pages/api/create-pod.js
import { supabaseAdmin } from "../../lib/supabaseServer";
import { jwtVerify } from "@clerk/nextjs/api"; // conceptual helper, adjust per Clerk docs

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    // verify user token server-side using Clerk (pseudo)
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "Unauthorized" });

    // CHECK: replace below with Clerk server verification according to Clerk docs
    // const userId = await verifyClerkToken(authHeader) // returns clerk user id

    const { title, description, start_time, duration_minutes, points_reward, host_clerk_id } = req.body;

    const { data, error } = await supabaseAdmin
      .from("skill_pods")
      .insert([{ title, description, start_time, duration_minutes, points_reward, host_clerk_id }])
      .select()
      .single();

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ pod: data });
  } catch (err) {
    return res.status(500).json({ error: String(err) });
  }
}
