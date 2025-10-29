import { ParticleBackground } from "@/components/ParticleBackground";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Clock,
  Send,
  MessageSquare,
  Phone
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from 'emailjs-com';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Initialize EmailJS with public key
      emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'sL_gJX-Nk6vsjkqmR');
      
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_po7gcsh',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'template_epzog7l',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: 'logamithrancb@gmail.com',
        }
      );

      if (result.status === 200) {
        toast({
          title: "Message Sent Successfully!",
          description: "Thank you for reaching out. I'll get back to you within shortly.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: "Failed to Send Message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "logamithrancb@gmail.com",
      link: "mailto:logamithrancb@gmail.com"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "github.com/Logamithrancb",
      link: "https://github.com/Logamithrancb"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "linkedin.com/in/Logamithran Balasubramaniam",
      link: "https://www.linkedin.com/in/logamithran-balasubramaniam-6160b4283/"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Available Worldwide",
      link: null
    }
  ];

  const quickTopics = [
    "Web Development Project",
    "MERN Stack Consultation",
    "Freelance Opportunity",
    "Technical Collaboration",
    "Code Review",
    "Career Discussion"
  ];

  return (
    <div className="min-h-screen relative pt-20">
      <ParticleBackground />
      
      <div className="relative z-10 py-12">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-5xl font-bold gradient-text mb-6">Let's Connect</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Have a project idea, want to collaborate, or just want to say hello? 
              I'd love to hear from you. Let's create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="glass-effect border-primary/20 animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 gradient-text">
                    <MessageSquare className="w-6 h-6" />
                    Send Me a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and I'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium">
                          Your Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="glass-effect border-primary/20 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="glass-effect border-primary/20 focus:border-primary focus:ring-primary/20"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">
                        Subject *
                      </Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Project Discussion"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="glass-effect border-primary/20 focus:border-primary focus:ring-primary/20"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or how I can help you..."
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="glass-effect border-primary/20 focus:border-primary focus:ring-primary/20 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full hero-gradient text-primary-foreground hover:shadow-glow transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Sending Message...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send className="w-4 h-4" />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              
              {/* Contact Details */}
              <Card className="glass-effect border-primary/20 animate-slide-up">
                <CardHeader>
                  <CardTitle className="gradient-text">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="p-2 rounded-lg hero-gradient text-primary-foreground">
                        {info.icon}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-muted-foreground mb-1">
                          {info.label}
                        </p>
                        {info.link ? (
                          <a 
                            href={info.link}
                            className="text-sm text-foreground hover:text-primary transition-colors"
                            target={info.link.startsWith('http') ? '_blank' : undefined}
                            rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                          >
                            {info.value}
                          </a>
                        ) : (
                          <p className="text-sm text-foreground">{info.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Topics */}
              <Card className="glass-effect border-primary/20 animate-slide-up">
                <CardHeader>
                  <CardTitle className="gradient-text">Quick Topics</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    Common things I can help with:
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {quickTopics.map((topic) => (
                      <button
                        key={topic}
                        onClick={() => setFormData(prev => ({ ...prev, subject: topic }))}
                        className="px-3 py-2 text-xs rounded-full glass-effect border border-primary/20 hover:border-primary/40 hover:bg-primary/10 transition-all duration-200 text-foreground hover:text-primary"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Availability */}
              <Card className="glass-effect border-primary/20 animate-slide-up">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 gradient-text">
                    <Clock className="w-5 h-5" />
                    Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-sm">Currently accepting new projects</span>
                  </div>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>• Response time: Within 24 hours</p>
                    <p>• Available for: Freelance & Full-time</p>
                    <p>• Timezone: Flexible (UTC +5:30)</p>
                  </div>
                </CardContent>
              </Card>

              {/* Direct Contact */}
              <Card className="glass-effect border-primary/20 animate-slide-up">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold gradient-text mb-4">Prefer Direct Contact?</h3>
                  <Button
                    variant="outline"
                    className="w-full glass-effect border-primary/30 hover:bg-primary/10"
                    asChild
                  >
                    <a href="mailto:logamithrancb@gail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me Directly
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};