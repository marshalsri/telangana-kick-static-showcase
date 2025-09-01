import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-football.jpg";

const HeroSection = () => {
  const slides = [
    {
      category: "SENIOR STATE TEAM",
      title: "Telangana stands united in the face of Kerala challenge",
      image: heroImage
    },
    {
      category: "STATE WOMEN'S TEAM", 
      title: "Telangana women's team prepares for championship",
      image: heroImage
    },
    {
      category: "YOUTH DEVELOPMENT",
      title: "Next generation of Telangana football talent emerges",
      image: heroImage
    }
  ];

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="text-hero-text/80 text-sm uppercase tracking-wide mb-2">
              SENIOR STATE TEAM
            </div>
            <h1 className="text-hero-text text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Telangana stands united in the face of Kerala challenge
            </h1>
            <Button 
              variant="outline" 
              className="bg-background/10 border-hero-text/30 text-hero-text hover:bg-background/20"
            >
              Read More
            </Button>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-hero-text hover:bg-background/20"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 text-hero-text hover:bg-background/20"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {[0, 1, 2, 3].map((index) => (
          <div 
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === 0 ? 'bg-hero-text' : 'bg-hero-text/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;