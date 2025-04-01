import { useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [activeBackground, setActiveBackground] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (heroRef.current) {
        // Parallax effect
        heroRef.current.style.transform = `translateY(${scrollPosition * 0.2}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Background image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveBackground((prev) => (prev === 0 ? 1 : 0));
    }, 7000); // Change background every 7 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Black overlay with 50% opacity */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>
      
      {/* Video Background */}
      <div 
        ref={heroRef}
        className="absolute inset-0 -z-10"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{ height: "120%" }}
        >
          <source src="./videos/orchid-tour.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase bg-apple-600 rounded-full animate-fade-in">Nature's Perfect Snack</span>
          <h1 className="heading-xl mt-4 text-white drop-shadow-sm animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Discover the Sweet Crunch of Gala Apples
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Grown with care in our sustainable orchards, our Gala apples offer the perfect blend of sweetness, crispness, and natural goodness in every bite.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <a href="#products" className="btn-primary">
              Explore Our Apples
            </a>
            <a href="#about" className="bg-white text-apple-700 hover:bg-white/90 font-medium px-6 py-3 rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
        <div className="w-[30px] h-[50px] rounded-full border-2 border-white flex justify-center pt-2">
          <div className="w-1 h-2 bg-white rounded-full animate-float"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
