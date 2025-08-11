import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Users, Star, Zap, ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Users,
      title: "Skill Pods",
      description: "Create or join small learning groups focused on specific skills",
    },
    {
      icon: Star,
      title: "Gamified Learning",
      description: "Earn points, unlock badges, and track your learning progress",
    },
    {
      icon: Zap,
      title: "Expert Sessions",
      description: "Book one-on-one sessions with skilled professionals",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "UX Designer",
      content: "SkillKart helped me transition from graphic design to UX. The pods are amazing!",
      rating: 5,
    },
    {
      name: "Mark Rodriguez",
      role: "Full Stack Developer",
      content: "Found incredible mentors and built lasting connections. Highly recommended!",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Data Scientist",
      content: "The gamification keeps me motivated. Love earning badges for new skills!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="gradient-primary p-2 rounded-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">SkillKart</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/marketplace">
                <Button variant="ghost">Marketplace</Button>
              </Link>
              <Link to="/dashboard">
                <Button className="shadow-primary">Get Started</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">
            🚀 Join 10,000+ learners worldwide
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
            Learn, Share, Grow
            <br />
            Together
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with skilled individuals, share your expertise, and accelerate your learning 
            through collaborative skill pods and personalized sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard">
              <Button size="lg" className="shadow-primary">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="outline" size="lg">
                Browse Skills
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We believe that everyone has unique skills to share and knowledge to gain. 
              SkillKart creates a collaborative ecosystem where learning becomes social, 
              engaging, and rewarding for all participants.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="skill-card text-center">
                <CardHeader>
                  <div className="gradient-primary w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How SkillKart Works</h2>
            <p className="text-lg text-muted-foreground">
              Simple steps to start your learning journey
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Create Your Profile</h3>
              <p className="text-muted-foreground">
                List your skills and learning goals to connect with the right people
              </p>
            </div>
            <div className="text-center">
              <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Join or Create Pods</h3>
              <p className="text-muted-foreground">
                Find skill pods that match your interests or create your own learning group
              </p>
            </div>
            <div className="text-center">
              <div className="gradient-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Learn & Earn</h3>
              <p className="text-muted-foreground">
                Participate in sessions, earn points, unlock badges, and grow your skills
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Learners Say</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="skill-card">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already growing their skills and building connections.
          </p>
          <Link to="/dashboard">
            <Button size="lg" className="shadow-primary">
              Join SkillKart Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 SkillKart. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;