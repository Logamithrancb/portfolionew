import { ParticleBackground } from "@/components/ParticleBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink, Github, Code, Smartphone, Globe, Database } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "AI Mock Interview",
      description: "Full-featured AI-mock interview with user authentication, admin dashboard, and real-time Interview Experience.",
      image: "https://i.postimg.cc/1XdfJ4PX/Whats-App-Image-2025-10-29-at-16-45-26-9e22bb89.jpg",
      technologies: ["React.js", "Node.js", "Firebase", "Express.js", "Stripe", "JWT"],
      category: "fullstack",
      demoUrl: "/NotFound",
      githubUrl: "https://github.com/Logamithrancb/ai-mock-interview.git",
      features: ["User Authentication", "Gemini API ", "Admin Panel", "User dashboard"],
      status: "completed"
    },
    {
      id: 2,
      title: "Retrorides",
      description: "A responsive web app for car enthusiasts to explore and admire classic and vintage automobiles.",
      image: "https://i.postimg.cc/8kyDLYmQ/Screenshot-2025-10-29-174018.png",
      technologies: ["React.js", "Three.js", "Gasp", "Tailwindcss", "Material-UI"],
      category: "frontend",
      demoUrl: "https://retrorides-brown.vercel.app/",
      githubUrl: "https://github.com/Logamithrancb/retrorides.git",
      features: ["grid/gallery view of retro cars", "Individual car detail pages", "Fast client-side navigation", "Easy to extend"],
      status: "completed"
    },
    {
      id: 3,
      title: "Interactive Portfolio Website",
      description: "Modern portfolio with Three.js animations, particle effects, and responsive design. Features dark/light mode and smooth page transitions.",
      image: "https://i.postimg.cc/qqCTJJhg/Screenshot-2025-10-29-174949.png",
      technologies: ["React.js", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "frontend",
      demoUrl: "https://portfolionew-ochre.vercel.app/",
      githubUrl: "https://github.com/ramprakash/portfolio-v2",
      features: ["3D Animations", "Dark/Light Mode", "Responsive Design", "Contact Form"],
      status: "completed"
    },
    {
      id: 4,
      title: "Fake News Detection",
      description: "Weather application with interactive maps, historical data analysis, and predictive weather patterns using external APIs.",
      image: "https://i.postimg.cc/X7dhVd5w/Whats-App-Image-2025-10-29-at-12-27-17-15a31e96.jpg",
      technologies: ["React.js", "Chart.js", "OpenWeather API", "Geolocation API"],
      category: "ai projects",
      demoUrl: "/NotFound",
      githubUrl: "https://github.com/Logamithrancb/fake-news-detection.git",
      features:  ["User-friendly web interface","Real-time news classification","Preprocessed text using NLP","Accurate evaluation metrics"],
      status: "completed"
    },
    {
      id: 5,
      title: "Road damage detection",
      description: "Modern AI road damage detection system using YOLOV8 for real-time analysis and reporting.",
      image: "https://i.postimg.cc/CKzYPshr/Whats-App-Image-2025-10-11-at-11-42-58-d8206543.jpg",
      technologies: ["Streamlit", "Flask", "Python", "YOLOV8", "MYSQL"],
      category: "ai projects",
      demoUrl: "https://retrorides-brown.vercel.app/",
      githubUrl: "https://github.com/Logamithrancb/Mediment.git",
      features: ["Real-time detection", "detect through image", "accurate result", "analysis and report"],
      status: "in-progress"
    },
    {
      id: 6,
      title: "API Documentation Hub",
      description: "Comprehensive API documentation platform with interactive testing, code examples, and automatic endpoint discovery.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      technologies: ["React.js", "Node.js", "Swagger", "Prism.js", "Express.js"],
      category: "fullstack",
      demoUrl: "https://github.com/Logamithrancb/hand-gesture-app-launcher.git",
      githubUrl: "https://github.com/Logamithrancb/hand-gesture-app-launcher.git",
      features: ["Interactive Testing", "Code Generation", "Auto Discovery", "Team Collaboration"],
      status: "planning"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects", icon: <Code className="w-4 h-4" /> },
    { id: "fullstack", label: "Full Stack", icon: <Database className="w-4 h-4" /> },
    { id: "frontend", label: "Frontend", icon: <Globe className="w-4 h-4" /> },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="w-4 h-4" /> },
    { id: "ai projects", label: "AI Projects", icon: <Code className="w-4 h-4" /> }
  ];

  const filteredProjects = selectedCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed": return "bg-green-500/20 text-green-500 border-green-500/30";
      case "in-progress": return "bg-blue-500/20 text-blue-500 border-blue-500/30";
      case "planning": return "bg-yellow-500/20 text-yellow-500 border-yellow-500/30";
      default: return "bg-gray-500/20 text-gray-500 border-gray-500/30";
    }
  };

  return (
    <div className="min-h-screen relative pt-20">
      <ParticleBackground />
      
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl font-bold gradient-text mb-6">Featured Projects</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A showcase of my recent work, demonstrating expertise in full-stack development, 
              modern frameworks, and creative problem-solving. Each project represents a unique 
              challenge and learning opportunity.
            </p>
          </div>

          {/* Project Filters */}
          <div className="mb-12">
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
              <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-5 glass-effect border border-primary/20">
                {categories.map((category) => (
                  <TabsTrigger 
                    key={category.id} 
                    value={category.id}
                    className="flex items-center gap-2 data-[state=active]:bg-primary/20 data-[state=active]:text-primary"
                  >
                    {category.icon}
                    <span className="hidden sm:inline">{category.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
              
              {/* Projects Content */}
              <TabsContent value={selectedCategory} className="mt-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <Card 
                      key={project.id}
                      className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow group animate-slide-up overflow-hidden"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {/* Project Image */}
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute top-4 right-4">
                          <Badge className={getStatusColor(project.status)}>
                            {project.status.replace('-', ' ')}
                          </Badge>
                        </div>
                      </div>
                      
                      <CardHeader>
                        <CardTitle className="text-xl gradient-text group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                      </CardHeader>
                      
                      <CardContent className="space-y-4">
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {project.description}
                        </p>
                        
                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.slice(0, 4).map((tech) => (
                            <Badge 
                              key={tech} 
                              variant="outline" 
                              className="text-xs border-primary/30 text-primary"
                            >
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 4 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 4}
                            </Badge>
                          )}
                        </div>
                        
                        {/* Key Features */}
                        <div className="space-y-2">
                          <h4 className="text-sm font-medium text-foreground">Key Features:</h4>
                          <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                            {project.features.map((feature) => (
                              <div key={feature} className="flex items-center">
                                <div className="w-1 h-1 rounded-full bg-primary mr-2" />
                                {feature}
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-2 pt-4">
                          <Button 
                            size="sm" 
                            className="flex-1 hero-gradient text-primary-foreground hover:shadow-glow"
                            asChild
                          >
                            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="w-3 h-3 mr-1" />
                              Demo
                            </a>
                          </Button>
                          
                          <Button 
                            size="sm" 
                            variant="outline" 
                            className="flex-1 glass-effect border-primary/30 hover:bg-primary/10"
                            asChild
                          >
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="w-3 h-3 mr-1" />
                              Code
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 animate-slide-up">
            <Card className="glass-effect border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Let's Build Something Amazing
                </h3>
                <p className="text-muted-foreground mb-6">
                  Interested in collaborating or have a project idea? I'm always excited 
                  to work on new challenges and innovative solutions.
                </p>
                <Button className="hero-gradient text-primary-foreground hover:shadow-glow" asChild>
                  <Link to="/contact">
                    Start a Conversation
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};