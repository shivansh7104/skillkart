import { useEffect, useState } from "react";
import { useUser, SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { supabase } from "../lib/supabaseClient";

export default function Dashboard() {
  const { user } = useUser();
  const [points, setPoints] = useState(0);
  const [pods, setPods] = useState([]);

  useEffect(() => {
    if (user) {
      fetchUserPoints();
      fetchSkillPods();
    }
  }, [user]);

  async function fetchUserPoints() {
    const { data, error } = await supabase
      .from("profiles")
      .select("points")
      .eq("clerk_id", user.id)
      .single();

    if (error) {
      console.error("Error fetching points:", error);
    } else if (data) {
      setPoints(data.points);
    }
  }

  async function fetchSkillPods() {
    const { data, error } = await supabase
      .from("skill_pods")
      .select("id, title, host_clerk_id, points_reward")
      .eq("status", "approved");

    if (error) {
      console.error("Error fetching skill pods:", error);
    } else {
      setPods(data);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <SignedIn>
        <h1 className="text-3xl font-bold mb-4">
          Welcome, {user?.firstName || "Student"} 👋
        </h1>
        <p className="mb-6">Your Skill Points: <span className="font-semibold">{points}</span></p>

        <h2 className="text-xl font-bold mb-4">Available Skill Pods</h2>
        {pods.length > 0 ? (
          <div className="grid md:grid-cols-3 gap-6">
            {pods.map((pod) => (
              <div key={pod.id} className="bg-white rounded-lg shadow p-4">
                <h3 className="font-bold text-lg mb-2">{pod.title}</h3>
                <p className="text-gray-600 text-sm">Reward: {pod.points_reward} points</p>
                <button
                  className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500"
                  onClick={() => alert(`Joining pod: ${pod.title}`)}
                >
                  Join Pod
                </button>
              </div>
            ))}
          </div>
        ) : (
          <p>No skill pods available yet.</p>
        )}
      </SignedIn>

      <SignedOut>
        <p className="text-lg">
          Please{" "}
          <Link href="/sign-in" className="text-blue-600 underline">
            sign in
          </Link>{" "}
          to view your dashboard.
        </p>
      </SignedOut>
    </div>
  );
}
