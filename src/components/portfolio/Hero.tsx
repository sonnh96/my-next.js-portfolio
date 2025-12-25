import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown, Send, FolderOpen } from "lucide-react";

const roles = [
  "Technical Leader",
  "Full-Stack Developer",
  "Cloud Architect",
  "AI/ML Engineer",
];

export const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < role.length) {
            setDisplayText(role.slice(0, displayText.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1));
          } else {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }} />

      <div className="container relative z-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="text-muted-foreground text-lg mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            <span className="text-foreground">Nguyen Hong </span>
            <span className="text-primary">Son</span>
          </h1>
          
          {/* Typewriter role */}
          <div className="h-12 sm:h-14 flex items-center justify-center mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            <span className="text-xl sm:text-2xl md:text-3xl text-muted-foreground">
              {displayText}
              <span className="animate-blink text-primary">|</span>
            </span>
          </div>
          
          {/* Description */}
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-12 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            5+ years of experience building scalable systems, leading technical teams, 
            and delivering AI-powered solutions at AIMENEXT.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
            <Button size="lg" onClick={scrollToProjects} className="gap-2">
              <FolderOpen className="w-5 h-5" />
              View Projects
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact} className="gap-2">
              <Send className="w-5 h-5" />
              Contact Me
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
};
