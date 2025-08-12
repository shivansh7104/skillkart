import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Star, 
  Trophy, 
  Target, 
  BookOpen, 
  Users, 
  Calendar,
  Award,
  TrendingUp,
  Edit,
  MapPin,
  Mail,
  Globe
} from "lucide-react";

const Profile = () => {
  const userStats = {
    skillPoints: 1240,
    rank: "Advanced Learner",
    completedPods: 12,
    activePods: 5,
    badgesEarned: 8,
    streakDays: 45
  };

  const badges = [
    { name: "React Master", icon: "⚛️", earned: true, description: "Completed 5 React pods" },
    { name: "Team Player", icon: "🤝", earned: true, description: "Collaborated in 10+ pods" },
    { name: "Quick Learner", icon: "⚡", earned: true, description: "Completed first pod in record time" },
    { name: "Mentor", icon: "👨‍🏫", earned: true, description: "Helped 20+ fellow learners" },
    { name: "Consistent", icon: "📅", earned: true, description: "45-day learning streak" },
    { name: "Explorer", icon: "🗺️", earned: false, description: "Try 5 different skill categories" },
    { name: "Expert", icon: "🎯", earned: false, description: "Earn 2000 skill points" },
    { name: "Innovator", icon: "💡", earned: false, description: "Create and complete your own pod" },
  ];

  const skills = [
    { name: "React Development", level: 85, points: 420 },
    { name: "UI/UX Design", level: 70, points: 280 },
    { name: "Data Science", level: 45, points: 180 },
    { name: "Digital Marketing", level: 60, points: 240 },
    { name: "Product Management", level: 30, points: 120 },
  ];

  const recentActivity = [
    { 
      type: "completed", 
      title: "React Hooks Mastery", 
      date: "2 days ago", 
      points: 50,
      icon: BookOpen 
    },
    { 
      type: "joined", 
      title: "Design Systems Workshop", 
      date: "1 week ago", 
      points: 0,
      icon: Users 
    },
    { 
      type: "badge", 
      title: "Earned 'Consistent' badge", 
      date: "1 week ago", 
      points: 100,
      icon: Award 
    },
    { 
      type: "milestone", 
      title: "Reached 1000 skill points", 
      date: "2 weeks ago", 
      points: 200,
      icon: Trophy 
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="skill-card mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/api/placeholder/150/150" alt="Alex Thompson" />
                <AvatarFallback className="text-xl">AT</AvatarFallback>
              </Avatar>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold mb-2">Alex Thompson</h1>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        San Francisco, CA
                      </div>
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        alex@example.com
                      </div>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 mr-1" />
                        alexthompson.dev
                      </div>
                    </div>
                  </div>
                  <Button variant="outline">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary">{userStats.skillPoints}</div>
                    <div className="text-sm text-muted-foreground">Skill Points</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-success">{userStats.completedPods}</div>
                    <div className="text-sm text-muted-foreground">Completed</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-accent">{userStats.badgesEarned}</div>
                    <div className="text-sm text-muted-foreground">Badges</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">{userStats.streakDays}</div>
                    <div className="text-sm text-muted-foreground">Day Streak</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="badges">Badges</TabsTrigger>
            <TabsTrigger value="activity">Activity</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Rank & Progress */}
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Trophy className="h-5 w-5 mr-2 text-accent" />
                    Current Rank
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center space-y-4">
                    <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent">
                      {userStats.rank}
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress to Expert</span>
                        <span>62%</span>
                      </div>
                      <Progress value={62} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        760 points to next rank
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-success" />
                    Recent Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {badges.filter(b => b.earned).slice(0, 3).map((badge, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="text-2xl">{badge.icon}</div>
                      <div className="flex-1">
                        <p className="font-medium">{badge.name}</p>
                        <p className="text-xs text-muted-foreground">{badge.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Learning Goals */}
              <Card className="skill-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 mr-2 text-primary" />
                    Learning Goals
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Master Advanced React</span>
                      <span>75%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Learn Data Science</span>
                      <span>45%</span>
                    </div>
                    <Progress value={45} className="h-2" />
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>UI/UX Certification</span>
                      <span>60%</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="skills" className="space-y-6">
            <Card className="skill-card">
              <CardHeader>
                <CardTitle>Skill Progression</CardTitle>
                <CardDescription>Track your development across different skill areas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline">{skill.points} pts</Badge>
                        <Badge variant={skill.level >= 80 ? 'default' : skill.level >= 50 ? 'secondary' : 'outline'}>
                          Level {Math.floor(skill.level / 20) + 1}
                        </Badge>
                      </div>
                    </div>
                    <Progress value={skill.level} className="h-3" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="badges" className="space-y-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {badges.map((badge, index) => (
                <Card key={index} className={`skill-card text-center ${!badge.earned ? 'opacity-50' : ''}`}>
                  <CardContent className="pt-6">
                    <div className="text-4xl mb-4">{badge.icon}</div>
                    <h3 className="font-semibold mb-2">{badge.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{badge.description}</p>
                    {badge.earned ? (
                      <Badge className="bg-success text-success-foreground">Earned</Badge>
                    ) : (
                      <Badge variant="outline">Locked</Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="activity" className="space-y-6">
            <Card className="skill-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Your learning journey highlights</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center space-x-4 p-4 rounded-lg bg-muted/30">
                    <div className="gradient-primary p-2 rounded-lg">
                      <activity.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{activity.title}</p>
                      <p className="text-sm text-muted-foreground">{activity.date}</p>
                    </div>
                    {activity.points > 0 && (
                      <Badge className="bg-accent text-accent-foreground">
                        +{activity.points} pts
                      </Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Profile;