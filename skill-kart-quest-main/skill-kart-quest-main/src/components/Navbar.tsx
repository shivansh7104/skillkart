import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, User, Plus, Grid3X3 } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-smooth">
            <div className="gradient-primary p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold">SkillKart</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link 
              to="/marketplace" 
              className={`font-medium transition-smooth hover:text-primary ${
                isActive('/marketplace') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Marketplace
            </Link>
            <Link 
              to="/dashboard" 
              className={`font-medium transition-smooth hover:text-primary ${
                isActive('/dashboard') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Dashboard
            </Link>
            <Link 
              to="/profile" 
              className={`font-medium transition-smooth hover:text-primary ${
                isActive('/profile') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Profile
            </Link>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link to="/create-pod">
              <Button variant="outline" size="sm" className="hidden sm:flex">
                <Plus className="h-4 w-4 mr-2" />
                Create Pod
              </Button>
            </Link>
            <Link to="/profile">
              <Button size="sm" className="shadow-primary">
                <User className="h-4 w-4 mr-2" />
                Profile
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;