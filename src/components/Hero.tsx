
import { useEffect, useRef } from "react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

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

  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-apple-800/10 z-10"></div>
      <div 
        ref={heroRef}
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: "url('/lovable-uploads/c71a9737-2779-4195-9fe6-3171fd5e8616.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "120%", // Extra height for parallax
          top: "-10%"
        }}
      ></div>

      {/* Content */}
      <div className="container-custom relative z-20">
        <div className="max-w-3xl">
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-white uppercase bg-red-600 rounded-full animate-fade-in">Nature's Perfect Snack</span>
          <h1 className="heading-xl mt-4 text-white drop-shadow-sm animate-slide-up" style={{ animationDelay: "0.2s" }}>
            Discover the Sweet Crunch of Pine Valley Apples
          </h1>
          <p className="mt-6 text-lg text-white/90 leading-relaxed max-w-xl animate-slide-up" style={{ animationDelay: "0.4s" }}>
            Grown with care in our sustainable orchards, our apples offer the perfect blend of sweetness, crispness, and natural goodness in every bite.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <a href="#products" className="btn-primary">
              Explore Our Apples
            </a>
            <a href="#about" className="bg-white text-red-700 hover:bg-white/90 font-medium px-6 py-3 rounded-lg transition-all duration-300 ease-in-out shadow-sm hover:shadow-md">
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
