import { useEffect } from "react";
import { ParticleBackground } from "@/components/ParticleBackground";
import { TypewriterText } from "@/components/TypewriterText";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export const Home = () => {
  const typewriterTexts = [
    "Hi, I'm Logamitran.",
    "Software Developer.",
    "Passionate to build AI projects and Engineering Solutions."
  ];

  // Load Spline Viewer script
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.51/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="space-y-4">
                <div className="space-y-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  <TypewriterText
                    texts={typewriterTexts}
                    delay={100}
                    className="block text-4xl md:text-6xl font-bold leading-tight"
                  />
                </div>

                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  Passionate about creating digital experiences that matter. Specializing in 
                  <span className="text-primary font-medium"> MERN stack</span>, 
                  <span className="text-primary font-medium"> React.js</span>, and 
                  <span className="text-primary font-medium"> modern technologies</span>.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <Link to="/projects">
                  <Button className="hero-gradient text-primary-foreground hover:shadow-glow transition-all duration-300 hover:scale-105">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Projects
                  </Button>
                </Link>

                <Button 
                  variant="outline" 
                  className="glass-effect border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:shadow-glow"
                  asChild
                >
                  <a href="/resume.pdf" download>
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </a>
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                <Button variant="outline" size="icon" className="glass-effect border-primary/20 hover:border-primary/40 hover:bg-primary/5 animate-glow" asChild>
                  <a href="https://github.com/Logamithrancb" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="glass-effect border-primary/20 hover:border-primary/40 hover:bg-primary/5 animate-glow" asChild>
                  <a href="https://www.linkedin.com/in/logamithran-balasubramaniam-6160b4283/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" className="glass-effect border-primary/20 hover:border-primary/40 hover:bg-primary/5 animate-glow" asChild>
                  <a href="mailto:logamithrancb@gmail.com">
                    <Mail className="w-4 h-4" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Right Content - Spline Viewer */}
            <div className="relative lg:order-2">
              <div className="relative w-full h-96 lg:h-[500px]  glass-effect overflow-hidden">
                <spline-viewer url="https://prod.spline.design/YiJE1RXYk0aeLkyw/scene.splinecode"></spline-viewer>

                {/* Floating Elements */}
                <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary animate-pulse" />
                <div className="absolute bottom-8 left-8 w-2 h-2 rounded-full bg-cyber-blue animate-pulse" style={{ animationDelay: '1s' }} />
                <div className="absolute top-1/3 left-4 w-4 h-4 rounded-full bg-primary-glow animate-pulse" style={{ animationDelay: '0.5s' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Skills Preview */}
      <section className="relative z-10 py-20 border-t border-primary/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold gradient-text mb-4">Core Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Building modern web applications with cutting-edge technologies and best practices.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              "React.js", "Node.js", "MongoDB", "JavaScript", "Python", "HTML/CSS"
            ].map((tech, index) => (
              <div
                key={tech}
                className="glass-effect p-4 rounded-xl text-center hover:shadow-glow transition-all duration-300 hover:scale-105 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-sm font-medium text-primary">{tech}</div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/skills">
              <Button variant="outline" className="glass-effect border-primary/30 hover:border-primary hover:bg-primary/10">
                View All Skills
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

/* eslint-disable @typescript-eslint/no-namespace */
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'spline-viewer': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & { url?: string },
        HTMLElement
      >;
    }
  }
}
/* eslint-enable @typescript-eslint/no-namespace */
