import { MapPin, Languages, Briefcase, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const stats = [
  { label: "Years Experience", value: "5+", icon: Calendar },
  { label: "Projects Delivered", value: "10+", icon: Briefcase },
  { label: "Cloud Platforms", value: "3", icon: Languages },
];

const info = [
  { icon: MapPin, label: "Location", value: "Hanoi, Vietnam" },
  { icon: Languages, label: "Languages", value: "Vietnamese, English, Japanese" },
  { icon: Briefcase, label: "Company", value: "AIMENEXT" },
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a <span className="text-foreground font-medium">Technical Leader</span> at AIMENEXT 
                with over 5 years of experience in software development and system architecture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in building scalable backend systems using <span className="text-primary font-medium">Python, Node.js, 
                and cloud technologies</span> (AWS, Azure, GCP). My passion lies in solving complex problems 
                and leading teams to deliver impactful AI-powered solutions.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From speech recognition systems to e-learning platforms, I've architected and 
                delivered production-grade applications that serve thousands of users.
              </p>

              {/* Info cards */}
              <div className="grid sm:grid-cols-3 gap-4 pt-4">
                {info.map((item) => (
                  <div key={item.label} className="flex items-center gap-3 p-3 rounded-lg bg-background/50 border border-border/50">
                    <item.icon className="w-5 h-5 text-primary shrink-0" />
                    <div className="min-w-0">
                      <p className="text-xs text-muted-foreground">{item.label}</p>
                      <p className="text-sm font-medium truncate">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat) => (
                <Card key={stat.label} className="text-center border-border/50 bg-background/50 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6 pb-6">
                    <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                    <p className="text-3xl sm:text-4xl font-bold text-foreground mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
