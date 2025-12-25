import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const commands = [
  {
    input: "whoami",
    output: `{
  "name": "Nguyen Hong Son",
  "role": "Technical Leader",
  "experience": "7+ years",
  "location": "Hanoi, Vietnam"
}`,
  },
  {
    input: "cat skills.json",
    output: `{
  "backend": ["Python", "Node.js", "Go", "PHP"],
  "frontend": ["React", "Vue.js", "TypeScript"],
  "cloud": ["AWS", "Azure", "GCP"],
  "ai_ml": ["PyTorch", "TensorFlow", "OpenCV"]
}`,
  },
  {
    input: "ls projects/",
    output: `speech-to-text/
e-learning-platform/
ocr-extraction/
stock-prediction/
voice-meeting-notes/`,
  },
];

export const Terminal = () => {
  const [currentCommand, setCurrentCommand] = useState(0);
  const [typedInput, setTypedInput] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [history, setHistory] = useState<typeof commands>([]);
  const [hasStarted, setHasStarted] = useState(false);
  const { ref, isVisible } = useScrollReveal({ threshold: 0.3 });

  // Start animation when visible
  useEffect(() => {
    if (isVisible && !hasStarted) {
      setHasStarted(true);
    }
  }, [isVisible, hasStarted]);

  useEffect(() => {
    if (!hasStarted || currentCommand >= commands.length) return;

    const command = commands[currentCommand];
    let inputIndex = 0;

    const typeInterval = setInterval(() => {
      if (inputIndex < command.input.length) {
        setTypedInput(command.input.slice(0, inputIndex + 1));
        inputIndex++;
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setShowOutput(true);
          setTimeout(() => {
            setHistory((prev) => [...prev, command]);
            setTypedInput("");
            setShowOutput(false);
            setCurrentCommand((prev) => prev + 1);
          }, 2000);
        }, 500);
      }
    }, 80);

    return () => clearInterval(typeInterval);
  }, [currentCommand, hasStarted]);

  return (
    <section id="terminal" className="py-24 bg-secondary/30">
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
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Terminal</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          {/* Terminal window */}
          <div 
            className={cn(
              "rounded-xl overflow-hidden border border-border shadow-2xl transition-all duration-700 delay-200",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            )}
          >
            {/* Terminal header */}
            <div className="bg-secondary px-4 py-3 flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-destructive" />
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="text-xs text-muted-foreground ml-4">son@portfolio ~ zsh</span>
            </div>

            {/* Terminal body */}
            <div className="bg-terminal p-6 font-mono text-sm min-h-[400px]">
              {/* History */}
              {history.map((cmd, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-foreground">❯</span>
                    <span className="text-foreground">{cmd.input}</span>
                  </div>
                  <pre className="mt-2 text-muted-foreground whitespace-pre-wrap text-xs sm:text-sm">{cmd.output}</pre>
                </div>
              ))}

              {/* Current command */}
              {currentCommand < commands.length && hasStarted && (
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-terminal-foreground">❯</span>
                    <span className="text-foreground">{typedInput}</span>
                    {!showOutput && <span className="animate-blink text-terminal-foreground">█</span>}
                  </div>
                  {showOutput && (
                    <pre className="mt-2 text-muted-foreground whitespace-pre-wrap text-xs sm:text-sm animate-fade-in">
                      {commands[currentCommand].output}
                    </pre>
                  )}
                </div>
              )}

              {/* Initial state before animation starts */}
              {!hasStarted && (
                <div className="flex items-center gap-2">
                  <span className="text-terminal-foreground">❯</span>
                  <span className="animate-blink text-terminal-foreground">█</span>
                </div>
              )}

              {/* Completed state */}
              {currentCommand >= commands.length && hasStarted && (
                <div className="flex items-center gap-2">
                  <span className="text-terminal-foreground">❯</span>
                  <span className="animate-blink text-terminal-foreground">█</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
