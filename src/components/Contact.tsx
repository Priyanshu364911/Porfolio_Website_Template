
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full filter blur-3xl"></div>
      
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center animate-reveal">
          <span className="text-gradient-primary">Let's Connect</span>
        </h2>
        
        <p className="mt-4 text-center text-foreground/70 max-w-2xl mx-auto animate-reveal-delay-1">
          Have a project in mind or just want to say hello? I'd love to hear from you!
        </p>
        
        <div className="mt-12 max-w-3xl mx-auto glass-morphism rounded-xl p-6 md:p-10 animate-reveal-delay-2">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="text-xl font-montserrat font-semibold flex items-center gap-2">
                <Mail size={20} className="text-primary" />
                Get in Touch
              </h3>
              
              <p className="mt-4 text-foreground/70">
                Fill out the form or reach out through social platforms.
              </p>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 glass-morphism rounded-full hover:bg-primary/20 transition"
                  >
                    <Github size={20} />
                  </a>
                  <a 
                    href="https://linkedin.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 glass-morphism rounded-full hover:bg-primary/20 transition"
                  >
                    <Linkedin size={20} />
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 glass-morphism rounded-full hover:bg-primary/20 transition"
                  >
                    <Twitter size={20} />
                  </a>
                </div>
              </div>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="space-y-4">
                <div>
                  <Input
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-secondary/50 border-secondary"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-secondary/50 border-secondary"
                    required
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Your Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-secondary/50 border-secondary min-h-[120px]"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 flex items-center gap-2"
                >
                  Send Message
                  <Send size={16} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
