
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/90 backdrop-blur-md py-4" : "py-6"
      }`}
    >
      <div className="container flex items-center justify-between">
        <a href="#" className="text-lg md:text-2xl font-montserrat font-bold text-gradient">
          DarkFlow
        </a>
        
        <nav className="hidden md:flex items-center space-x-8">
          {["Home", "Projects", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-foreground/80 hover:text-primary transition-colors"
            >
              {item}
            </a>
          ))}
          <Button className="bg-primary hover:bg-primary/90 text-white">
            Download Resume
          </Button>
        </nav>
        
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>
      
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg border-b border-white/10 py-4 animate-fade-in">
          <nav className="container flex flex-col space-y-4">
            {["Home", "Projects", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-foreground/80 hover:text-primary py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <Button className="bg-primary hover:bg-primary/90 text-white w-full">
              Download Resume
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
