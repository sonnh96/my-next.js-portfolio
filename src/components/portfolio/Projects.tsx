import { Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Speech-to-Text Platform",
    description:
      "Large-scale voice-to-text transcription system handling 200,000+ audio files with automated preprocessing and PyTorch-based speech recognition.",
    tech: ["PHP", "Laravel", "Python", "PyTorch", "AWS"],
    highlights: ["200K+ audio files", "Real-time transcription", "Queue-based processing"],
  },
  {
    title: "E-Learning Platform",
    description:
      "Comprehensive educational platform with video streaming, course management, and interactive learning features built with modern full-stack technologies.",
    tech: ["Node.js", "KoaJS", "Vue.js", "NuxtJS", "PostgreSQL"],
    highlights: ["Video streaming", "Course management", "User analytics"],
  },
  {
    title: "OCR Data Extraction System",
    description:
      "AI-powered document processing system using deep learning for text extraction from images with high accuracy and automated data structuring.",
    tech: ["Python", "Flask", "TensorFlow", "OpenCV", "Azure"],
    highlights: ["Deep learning OCR", "High accuracy", "Automated processing"],
  },
  {
    title: "Stock Prediction Platform",
    description:
      "Financial analytics application with deep learning models for market prediction, real-time data integration, and visualization dashboards.",
    tech: ["Python", "FastAPI", "React", "MongoDB", "TensorFlow"],
    highlights: ["ML predictions", "Real-time data", "Interactive charts"],
  },
  {
    title: "Voice Meeting Notes",
    description:
      "Meeting transcription and summarization tool using speech recognition and NLP to generate actionable meeting notes automatically.",
    tech: ["Python", "Flask", "PyTorch", "AWS", "WebSocket"],
    highlights: ["Live transcription", "Auto-summarization", "Speaker detection"],
  },
  {
    title: "Social Network Platform",
    description:
      "Social interaction platform with real-time messaging, content sharing, and engagement features built for scalability.",
    tech: ["Node.js", "React", "PostgreSQL", "Redis", "Docker"],
    highlights: ["Real-time chat", "Content feeds", "Scalable architecture"],
  },
];

export const Projects = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="projects" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-6xl mx-auto">
          {/* Section header */}
          <div 
            className={cn(
              "text-center mb-16 transition-all duration-700",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            )}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of production-grade applications I've architected and delivered
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={cn(
                  "group border-border/50 bg-card/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-500",
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                )}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary mb-3">
                      <Layers className="w-5 h-5" />
                    </div>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-1">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="text-xs text-muted-foreground flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-primary" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs font-normal">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
