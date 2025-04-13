
import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#" className="text-xl font-montserrat font-bold text-gradient">
              DarkFlow
            </a>
          </div>
          
          <div className="flex items-center text-sm text-foreground/60">
            <p>
              © {new Date().getFullYear()} · Made By Priyanshu Patel
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <nav className="flex items-center space-x-6">
              {["Home", "Projects", "About", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-xs text-foreground/60 hover:text-primary transition-colors"
                >
                  {item}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
