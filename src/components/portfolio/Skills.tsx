import { useState } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

type SkillCategory = "languages" | "frameworks" | "databases" | "cloud";

const skillCategories = {
  languages: {
    title: "Languages",
    skills: [
      { name: "Python", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "JavaScript", level: 90 },
      { name: "PHP", level: 85 },
      { name: "Java", level: 75 },
      { name: "Go", level: 70 },
      { name: "C/C++", level: 65 },
    ],
  },
  frameworks: {
    title: "Frameworks",
    skills: [
      { name: "Flask", level: 95 },
      { name: "FastAPI", level: 95 },
      { name: "Django", level: 85 },
      { name: "React", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "Node.js", level: 90 },
      { name: "Laravel", level: 80 },
    ],
  },
  databases: {
    title: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 90 },
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 80 },
      { name: "Elasticsearch", level: 75 },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS", level: 90 },
      { name: "Azure", level: 85 },
      { name: "Google Cloud", level: 80 },
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 75 },
      { name: "CI/CD", level: 85 },
      { name: "Linux", level: 90 },
    ],
  },
};

export const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("languages");
  const { ref, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section id="skills" className="py-24">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div 
          ref={ref}
          className={cn(
            "max-w-4xl mx-auto transition-all duration-700",
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          )}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Category tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {(Object.keys(skillCategories) as SkillCategory[]).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  activeCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:text-foreground"
                )}
              >
                {skillCategories[category].title}
              </button>
            ))}
          </div>

          {/* Skills grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div
                key={skill.name}
                className={cn(
                  "space-y-2 transition-all duration-500",
                  isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-sm text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                    style={{ width: isVisible ? `${skill.level}%` : "0%" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
