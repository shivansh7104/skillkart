import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, Users, Star, TrendingUp, Plus, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const stats = [
    { label: "Active Pods", value: "5", icon: Users, color: "text-primary" },
    { label: "Total Sessions", value: "23", icon: CalendarDays, color: "text-success" },
    { label: "Skill Points", value: "1,240", icon: Star, color: "text-accent" },
    { label: "Growth Rate", value: "+15%", icon: TrendingUp, color: "text-success" },
  ];

  const activePods = [
    {
      title: "React Mastery Group",
      description: "Advanced React patterns and state management",
      nextSession: "Tomorrow, 3:00 PM",
      participants: 8,
      status: "active"
    },
    {
      title: "Design Thinking Workshop",
      description: "User-centered design methodology",
      nextSession: "Thursday, 7:00 PM",
      participants: 12,
      status: "pending"
    },
    {
      title: "Python for Data Science",
      description: "Pandas, NumPy, and machine learning basics",
      nextSession: "Next Monday, 6:00 PM",
      participants: 6,
      status: "active"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Welcome back, Alex!</h1>
          <p className="text-muted-foreground">Here's what's happening in your learning journey.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="skill-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Active Pods */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold">Your Active Pods</h2>
              <Link to="/create-pod">
                <Button variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Create New Pod
                </Button>
              </Link>
            </div>
            
            <div className="space-y-4">
              {activePods.map((pod, index) => (
                <Card key={index} className="skill-card">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{pod.title}</CardTitle>
                        <CardDescription>{pod.description}</CardDescription>
                      </div>
                      <Badge variant={pod.status === 'active' ? 'default' : 'secondary'}>
                        {pod.status}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2" />
                        {pod.nextSession}
                      </div>
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2" />
                        {pod.participants} participants
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Quick Actions & Progress */}
          <div className="space-y-6">
            <Card className="skill-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/create-pod" className="block">
                  <Button className="w-full shadow-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    Create Skill Pod
                  </Button>
                </Link>
                <Link to="/marketplace" className="block">
                  <Button variant="outline" className="w-full">
                    Browse Marketplace
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardHeader>
                <CardTitle>Learning Progress</CardTitle>
                <CardDescription>Your skill development this month</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>React Development</span>
                    <span>85%</span>
                  </div>
                  <Progress value={85} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Design Systems</span>
                    <span>60%</span>
                  </div>
                  <Progress value={60} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span>Data Science</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} className="h-2" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;