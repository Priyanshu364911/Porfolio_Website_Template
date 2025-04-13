
import { Code, PenTool, Layout, Cpu } from "lucide-react";

const skills = [
  { name: "Frontend Development", icon: <Layout size={20} /> },
  { name: "Creative Coding", icon: <Code size={20} /> },
  { name: "UI/UX Design", icon: <PenTool size={20} /> },
  { name: "3D & WebGL", icon: <Cpu size={20} /> },
];

const About = () => {
  return (
    <section id="about" className="py-20 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-montserrat font-bold animate-reveal">
              <span className="text-gradient-primary">About Me</span>
            </h2>
            
            <p className="mt-6 text-foreground/80 animate-reveal-delay-1">
              I'm a creative developer with a passion for building immersive digital experiences. With over 5 years of experience in web development and interactive media, I specialize in creating engaging user interfaces and pushing the boundaries of what's possible on the web.
            </p>
            
            <p className="mt-4 text-foreground/80 animate-reveal-delay-1">
              My approach blends technical expertise with creative thinking, allowing me to deliver solutions that are both functional and visually compelling. I believe in the power of technology to create meaningful connections and memorable experiences.
            </p>
            
            <div className="mt-8 animate-reveal-delay-2">
              <h3 className="text-xl font-montserrat font-semibold">Technical Skills</h3>
              
              <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center gap-3 p-4 glass-morphism rounded-lg"
                  >
                    <div className="text-primary">
                      {skill.icon}
                    </div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="relative animate-reveal">
            <div className="aspect-square rounded-2xl overflow-hidden glass-morphism p-1">
              <img 
                src="https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?q=80&w=1000&auto=format&fit=crop" 
                alt="Developer portrait" 
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
