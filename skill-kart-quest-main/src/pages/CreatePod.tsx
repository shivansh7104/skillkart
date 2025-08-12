import Navbar from "@/components/Navbar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Calendar, Clock, Users, DollarSign, X } from "lucide-react";
import { useState } from "react";

const CreatePod = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [currentTag, setCurrentTag] = useState("");

  const addTag = () => {
    if (currentTag.trim() && !tags.includes(currentTag.trim())) {
      setTags([...tags, currentTag.trim()]);
      setCurrentTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleTagKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Create a Skill Pod</h1>
          <p className="text-muted-foreground">Share your expertise and help others learn through collaborative sessions</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            {/* Basic Information */}
            <Card className="skill-card">
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Tell us about your skill pod</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Pod Title *</Label>
                  <Input 
                    id="title" 
                    placeholder="e.g., Advanced React Patterns Workshop"
                    className="w-full"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="description">Description *</Label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe what participants will learn, your teaching approach, and any prerequisites..."
                    className="min-h-32"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="data-science">Data Science</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="business">Business</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="level">Skill Level *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="advanced">Advanced</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tags">Skills & Tags</Label>
                  <div className="space-y-2">
                    <Input
                      id="tags"
                      value={currentTag}
                      onChange={(e) => setCurrentTag(e.target.value)}
                      onKeyDown={handleTagKeyPress}
                      placeholder="Type skills/tags and press Enter (e.g., React, JavaScript, Web Development)"
                    />
                    <div className="flex flex-wrap gap-2">
                      {tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="flex items-center gap-1">
                          {tag}
                          <X 
                            className="h-3 w-3 cursor-pointer hover:text-destructive" 
                            onClick={() => removeTag(tag)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Session Details */}
            <Card className="skill-card">
              <CardHeader>
                <CardTitle>Session Details</CardTitle>
                <CardDescription>Configure your pod sessions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="duration">Total Duration</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="2-weeks">2 weeks</SelectItem>
                        <SelectItem value="4-weeks">4 weeks</SelectItem>
                        <SelectItem value="6-weeks">6 weeks</SelectItem>
                        <SelectItem value="8-weeks">8 weeks</SelectItem>
                        <SelectItem value="12-weeks">12 weeks</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="sessions">Sessions per Week</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select frequency" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 session</SelectItem>
                        <SelectItem value="2">2 sessions</SelectItem>
                        <SelectItem value="3">3 sessions</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="max-participants">Max Participants</Label>
                    <Input 
                      id="max-participants" 
                      type="number" 
                      min="1" 
                      max="50" 
                      placeholder="15"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="session-length">Session Length</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select length" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="60">1 hour</SelectItem>
                        <SelectItem value="90">1.5 hours</SelectItem>
                        <SelectItem value="120">2 hours</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="start-date">Start Date</Label>
                  <Input 
                    id="start-date" 
                    type="date" 
                    className="w-full sm:w-auto"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Pricing */}
            <Card className="skill-card">
              <CardHeader>
                <CardTitle>Pricing & Accessibility</CardTitle>
                <CardDescription>Set your pod pricing and accessibility options</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="free-pod">Free Pod</Label>
                    <p className="text-sm text-muted-foreground">Make this pod completely free</p>
                  </div>
                  <Switch id="free-pod" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="price">Price per Participant</Label>
                  <div className="relative">
                    <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input 
                      id="price" 
                      type="number" 
                      min="0" 
                      step="0.01"
                      placeholder="49.00"
                      className="pl-10"
                    />
                  </div>
                  <p className="text-sm text-muted-foreground">Leave empty or set to 0 for free pods</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <Label htmlFor="scholarship">Scholarship Available</Label>
                    <p className="text-sm text-muted-foreground">Offer discounted spots for students</p>
                  </div>
                  <Switch id="scholarship" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Preview & Actions */}
          <div className="space-y-6">
            <Card className="skill-card">
              <CardHeader>
                <CardTitle>Pod Preview</CardTitle>
                <CardDescription>How your pod will appear</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Pod preview will appear here</p>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>Starts when you publish</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>Duration TBD</span>
                  </div>
                  <div className="flex items-center text-muted-foreground">
                    <Users className="h-4 w-4 mr-2" />
                    <span>0/0 participants</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="skill-card">
              <CardHeader>
                <CardTitle>Publish Options</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full shadow-primary">
                  Submit for Review
                </Button>
                <Button variant="outline" className="w-full">
                  Save as Draft
                </Button>
                <p className="text-xs text-muted-foreground">
                  Your pod will be reviewed by our team before going live in the marketplace.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CreatePod;