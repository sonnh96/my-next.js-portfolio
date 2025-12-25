import { Send, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const contactInfo = [
  {
    icon: Send,
    label: "Telegram",
    value: "@sonnh96",
    href: "https://t.me/sonnh96",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Hanoi, Vietnam",
    href: null,
  },
];

export const Contact = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="contact" className="py-24 bg-secondary/30">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={cn(
            "max-w-2xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground">
              I'm always open to discussing new projects and opportunities
            </p>
          </div>

          {/* Contact card */}
          <Card 
            className={cn(
              "border-border/50 bg-card/50 transition-all duration-700 delay-200",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            <CardContent className="p-8">
              {/* Terminal-style status */}
              <div className="mb-8 p-4 rounded-lg bg-terminal font-mono text-sm">
                <div className="flex items-center gap-2 text-terminal-foreground">
                  <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                  <span>status: available for new opportunities</span>
                </div>
              </div>

              {/* Contact methods */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((contact, index) => (
                  <div
                    key={contact.label}
                    className={cn(
                      "flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-all duration-500",
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    )}
                    style={{ transitionDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <contact.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium">{contact.value}</p>
                      </div>
                    </div>
                    {contact.href && (
                      <a
                        href={contact.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <Button asChild className="w-full gap-2" size="lg">
                <a href="https://t.me/sonnh96" target="_blank" rel="noopener noreferrer">
                  <Send className="w-5 h-5" />
                  Message on Telegram
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
