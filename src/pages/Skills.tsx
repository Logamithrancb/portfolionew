import { ParticleBackground } from "@/components/ParticleBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Code, 
  Database, 
  Globe, 
  Palette, 
  Server, 
  Smartphone,
  Terminal,
  Layers
} from "lucide-react";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Globe className="w-6 h-6" />,
      description: "Creating responsive and interactive user interfaces",
      skills: [
        { name: "React.js", level: 90, category: "framework" },
        { name: "JavaScript", level: 95, category: "language" },
        { name: "HTML5", level: 98, category: "markup" },
        { name: "CSS3", level: 92, category: "styling" },
        { name: "Tailwind CSS", level: 88, category: "styling" },
      ]
        
    },
    {
      title: "Backend Development",
      icon: <Server className="w-6 h-6" />,
      description: "Building scalable server-side applications and APIs",
      skills: [
        { name: "Node.js", level: 90, category: "runtime" },
        { name: "Express.js", level: 88, category: "framework" },
        { name: "Python", level: 85, category: "language" },
        { name: "RESTful APIs", level: 92, category: "architecture" },
       
      ]
    },
    {
      title: "Database & Storage",
      icon: <Database className="w-6 h-6" />,
      description: "Managing data with modern database technologies",
      skills: [
        { name: "MongoDB", level: 90, category: "nosql" },
        { name: "supabase", level: 88, category: "cloud" },
        { name: "MySQL", level: 82, category: "sql" },
        { name: "Firebase", level: 80, category: "cloud" },
       
      ]
    },
    {
      title: "Tools & DevOps",
      icon: <Terminal className="w-6 h-6" />,
      description: "Development tools and deployment workflows",
      skills: [
        { name: "Git", level: 95, category: "version-control" },
        { name: "VS Code", level: 98, category: "editor" },
        { name: "Figma", level: 70, category: "Design" },
        { name: "Wordpress", level: 85, category: "Editor" },
        
      ]
    },
    {
      title: "Creative Frameworks",
      icon: <Palette className="w-6 h-6" />,
      description: "Interactive animations and 3D experiences",
      skills: [
        { name: "Three.js", level: 78, category: "3d" },
        { name: "Particles.js", level: 82, category: "animation" },
        { name: "Framer Motion", level: 85, category: "animation" },
        { name: "Spline 3D", level: 75, category: "3d" },
        { name: "Canvas API", level: 80, category: "graphics" }
      ]
    },
    {
      title: "Full-Stack Frameworks",
      icon: <Layers className="w-6 h-6" />,
      description: "Complete application development stacks",
      skills: [
        { name: "MERN Stack", level: 90, category: "fullstack" },
        { name: "Next.js", level: 82, category: "framework" },

      ]
    }
  ];

  const getSkillColor = (level: number) => {
    if (level >= 90) return "text-green-500";
    if (level >= 80) return "text-blue-500";
    if (level >= 70) return "text-yellow-500";
    return "text-orange-500";
  };

  return (
    <div className="min-h-screen relative pt-20">
      <ParticleBackground />
      
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl font-bold gradient-text mb-6">Technical Skills</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A comprehensive overview of my technical expertise across the full spectrum 
              of modern web development, from interactive frontend experiences to scalable 
              backend architectures.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card 
                key={category.title}
                className="glass-effect border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow animate-slide-up"
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-xl">
                    <div className="p-2 rounded-lg hero-gradient text-primary-foreground">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="gradient-text">{category.title}</h3>
                      <p className="text-sm text-muted-foreground font-normal">
                        {category.description}
                      </p>
                    </div>
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{skill.name}</span>
                          <Badge 
                            variant="outline" 
                            className="text-xs border-primary/30 text-primary"
                          >
                            {skill.category}
                          </Badge>
                        </div>
                        <span className={`text-sm font-mono ${getSkillColor(skill.level)}`}>
                          {skill.level}%
                        </span>
                      </div>
                      
                      <Progress 
                        value={skill.level} 
                        className="h-2 bg-muted/30"
                      />
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Skills Summary */}
          <div className="mt-16 text-center animate-slide-up">
            <Card className="glass-effect border-primary/20 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  Continuous Learning & Growth
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Technology evolves rapidly, and I stay ahead by continuously learning new frameworks, 
                  exploring emerging trends, and building projects that challenge my current skill set. 
                  My goal is to create innovative solutions that push the boundaries of what's possible 
                  on the web.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  {["Currently Learning", "AI Integration", "WebGL", "PWAs", "Microservices"].map((tag) => (
                    <Badge 
                      key={tag} 
                      variant="outline" 
                      className="border-primary/40 text-primary hover:bg-primary/10 transition-colors"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};