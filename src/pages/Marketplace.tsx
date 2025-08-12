import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Clock, Users, Star, Search, Filter } from "lucide-react";

const Marketplace = () => {
  const skillPods = [
    {
      title: "Advanced React Patterns",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 156,
      price: 49,
      duration: "6 weeks",
      participants: 24,
      maxParticipants: 30,
      category: "Development",
      level: "Advanced",
      description: "Master advanced React patterns including render props, compound components, and state machines.",
      tags: ["React", "JavaScript", "Patterns"],
      nextSession: "Mon, Dec 18"
    },
    {
      title: "UI/UX Design Fundamentals",
      instructor: "Mike Chen",
      rating: 4.9,
      reviews: 203,
      price: 39,
      duration: "4 weeks",
      participants: 18,
      maxParticipants: 25,
      category: "Design",
      level: "Beginner",
      description: "Learn the fundamentals of user interface and user experience design.",
      tags: ["UI/UX", "Figma", "Design"],
      nextSession: "Wed, Dec 20"
    },
    {
      title: "Data Science with Python",
      instructor: "Dr. Emily Watson",
      rating: 4.7,
      reviews: 89,
      price: 59,
      duration: "8 weeks",
      participants: 12,
      maxParticipants: 20,
      category: "Data Science",
      level: "Intermediate",
      description: "Comprehensive introduction to data science using Python, pandas, and machine learning.",
      tags: ["Python", "Data Science", "ML"],
      nextSession: "Fri, Dec 22"
    },
    {
      title: "Digital Marketing Strategy",
      instructor: "Alex Rivera",
      rating: 4.6,
      reviews: 124,
      price: 29,
      duration: "3 weeks",
      participants: 35,
      maxParticipants: 40,
      category: "Marketing",
      level: "Beginner",
      description: "Build effective digital marketing strategies that drive real business results.",
      tags: ["Marketing", "SEO", "Social Media"],
      nextSession: "Tue, Dec 19"
    },
    {
      title: "Blockchain Development",
      instructor: "James Liu",
      rating: 4.5,
      reviews: 67,
      price: 79,
      duration: "10 weeks",
      participants: 8,
      maxParticipants: 15,
      category: "Development",
      level: "Advanced",
      description: "Learn to build decentralized applications using Ethereum and Solidity.",
      tags: ["Blockchain", "Solidity", "Web3"],
      nextSession: "Sat, Dec 23"
    },
    {
      title: "Product Management Essentials",
      instructor: "Lisa Park",
      rating: 4.8,
      reviews: 178,
      price: 45,
      duration: "5 weeks",
      participants: 22,
      maxParticipants: 30,
      category: "Business",
      level: "Intermediate",
      description: "Master the fundamentals of product management from ideation to launch.",
      tags: ["Product", "Strategy", "Agile"],
      nextSession: "Thu, Dec 21"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Skill Marketplace</h1>
          <p className="text-muted-foreground">Discover amazing learning opportunities and expert-led skill pods</p>
        </div>

        {/* Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search skills, instructors, or topics..." 
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="development">Development</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="data-science">Data Science</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="business">Business</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="beginner">Beginner</SelectItem>
                <SelectItem value="intermediate">Intermediate</SelectItem>
                <SelectItem value="advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillPods.map((pod, index) => (
            <Card key={index} className="skill-card">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge variant="secondary">{pod.category}</Badge>
                  <Badge variant={pod.level === 'Beginner' ? 'outline' : pod.level === 'Advanced' ? 'default' : 'secondary'}>
                    {pod.level}
                  </Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">{pod.title}</CardTitle>
                <CardDescription>by {pod.instructor}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {pod.description}
                </p>
                
                <div className="flex flex-wrap gap-1">
                  {pod.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-accent text-accent mr-1" />
                    <span>{pod.rating}</span>
                    <span className="ml-1">({pod.reviews})</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {pod.duration}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-1" />
                    {pod.participants}/{pod.maxParticipants}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Next: {pod.nextSession}
                  </div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div>
                    <span className="text-2xl font-bold">${pod.price}</span>
                    <span className="text-sm text-muted-foreground ml-1">/{pod.duration}</span>
                  </div>
                  <Button className="shadow-primary">
                    Join Pod
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Marketplace;