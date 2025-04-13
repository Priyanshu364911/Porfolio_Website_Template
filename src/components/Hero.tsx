
import { ArrowDown } from "lucide-react";
import Scene from "./3D/Scene";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Scene className="w-full h-full" />
      </div>
      
      <div className="container relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-montserrat font-bold leading-tight animate-reveal">
            <span className="text-gradient">Creative Developer &</span>
            <br />
            <span className="text-gradient-primary">Digital Artist</span>
          </h1>
          
          <p className="mt-6 text-lg text-foreground/80 animate-reveal-delay-1">
            I build exceptional digital experiences with modern technologies, 
            blending code and creativity to bring ambitious ideas to life.
          </p>
          
          <div className="mt-10 animate-reveal-delay-2">
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
            >
              View My Work
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
        <a href="#projects" className="flex flex-col items-center text-foreground/60 hover:text-primary">
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
