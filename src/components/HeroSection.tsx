import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-football.jpg";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
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
    },
    {
      category: "ACADEMY PROGRAM",
      title: "Telangana Football Academy launches new training initiative",
      image: heroImage
    }
  ];

  // Auto-rotation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-[500px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-500"
        style={{ backgroundImage: `url(${currentSlideData.image})` }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl">
            <div className="text-hero-text/80 text-sm uppercase tracking-wide mb-2 animate-fade-in">
              {currentSlideData.category}
            </div>
            <h1 className="text-hero-text text-4xl lg:text-5xl font-bold mb-6 leading-tight animate-fade-in">
              {currentSlideData.title}
            </h1>
            <Button 
              variant="outline" 
              className="bg-background/10 border-hero-text/30 text-hero-text hover:bg-background/20 animate-fade-in"
            >
              Read More
            </Button>
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <Button 
          variant="ghost" 
          size="icon"
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-hero-text hover:bg-background/20 transition-all duration-200 hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon"
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-hero-text hover:bg-background/20 transition-all duration-200 hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </Button>
      </div>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
              index === currentSlide ? 'bg-hero-text' : 'bg-hero-text/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;