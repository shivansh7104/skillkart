"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, Star, User } from "lucide-react"


export default function PodCard({ pod, onJoin }) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <h3 className="text-lg font-semibold">{pod.title}</h3>
      <p className="text-sm text-gray-600">Host: {pod.hostName}</p>
      <p className="text-sm text-gray-600">Time: {new Date(pod.start_time).toLocaleString()}</p>
      <p className="mt-2">{pod.description}</p>
      <div className="flex items-center justify-between mt-4">
        <span className="font-bold">{pod.points_reward} pts</span>
        <button onClick={() => onJoin(pod.id)} className="bg-blue-600 text-white px-3 py-1 rounded">
          Join
        </button>
      </div>
    </div>
  );
}
