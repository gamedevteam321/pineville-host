import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-white/70 backdrop-blur-sm py-5"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src="./images/logo.png" alt="Pine Valley" className="h-12" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-foreground hover:text-leaf-600 font-medium transition-custom"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-leaf-600 font-medium transition-custom"
            >
              About
            </a>
            <a 
              href="#products" 
              className="text-foreground hover:text-leaf-600 font-medium transition-custom"
            >
              Our Apples
            </a>
            <a 
              href="#recipes" 
              className="text-foreground hover:text-leaf-600 font-medium transition-custom"
            >
              Recipes
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-leaf-600 font-medium transition-custom"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-white pt-20 px-6 transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <nav className="flex flex-col space-y-6">
          <a 
            href="#home" 
            className="text-foreground hover:text-leaf-600 font-medium text-lg transition-custom"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="text-foreground hover:text-leaf-600 font-medium text-lg transition-custom"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </a>
          <a 
            href="#products" 
            className="text-foreground hover:text-leaf-600 font-medium text-lg transition-custom"
            onClick={() => setIsMenuOpen(false)}
          >
            Our Apples
          </a>
          <a 
            href="#recipes" 
            className="text-foreground hover:text-leaf-600 font-medium text-lg transition-custom"
            onClick={() => setIsMenuOpen(false)}
          >
            Recipes
          </a>
          <a 
            href="#contact" 
            className="text-foreground hover:text-leaf-600 font-medium text-lg transition-custom"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
