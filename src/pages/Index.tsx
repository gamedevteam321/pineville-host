
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Products from "../components/Products";
import Recipes from "../components/Recipes";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  useEffect(() => {
    // When page loads, scroll to top
    window.scrollTo(0, 0);

    // Add scroll reveal animation listeners
    const handleScrollAnimation = () => {
      const elements = document.querySelectorAll('.scroll-reveal:not(.active)');
      
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          el.classList.add('active');
        }
      });
    };

    // Run once on load to check for elements already in view
    handleScrollAnimation();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScrollAnimation);
    
    // Cleanup listener
    return () => {
      window.removeEventListener('scroll', handleScrollAnimation);
    };
  }, []);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <Recipes />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
