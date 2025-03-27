
import { useEffect, useRef } from "react";

const About = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    elementsRef.current.forEach(el => {
      if (el) observer.observe(el);
    });

    return () => {
      elementsRef.current.forEach(el => {
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-apple-50 leaf-pattern">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div 
              ref={el => elementsRef.current[0] = el}
              className="scroll-reveal relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl apple-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1569870499705-504209102861?q=80&w=2574&auto=format&fit=crop" 
                  alt="Apple orchard with ripe Gala apples" 
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg glass-card">
                <p className="font-serif text-lg font-medium text-apple-700">
                  Harvesting since 1952
                </p>
              </div>
            </div>
          </div>

          <div>
            <div 
              ref={el => elementsRef.current[1] = el}
              className="scroll-reveal"
              style={{ transitionDelay: "0.2s" }}
            >
              <h2 className="heading-lg text-apple-800 mb-6">
                A Family Tradition of Growing Perfect Apples
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                For over 70 years, our family-owned orchards have been dedicated to cultivating the finest Gala apples. Nestled in the heart of the fertile countryside with ideal growing conditions, we combine traditional farming wisdom with modern sustainable practices.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our Gala apples are known for their distinctive sweet flavor, crisp texture, and beautiful red striped skin. Each apple is hand-picked at the perfect moment of ripeness to ensure exceptional quality and taste.
              </p>
            </div>

            <div 
              ref={el => elementsRef.current[2] = el}
              className="scroll-reveal grid grid-cols-2 gap-6 mt-10"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-serif text-xl font-bold text-apple-700 mb-2">Naturally Sweet</h3>
                <p className="text-gray-600">Our Gala apples have a naturally high sugar content, making them perfect for snacking.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-serif text-xl font-bold text-apple-700 mb-2">Heart Healthy</h3>
                <p className="text-gray-600">Rich in dietary fiber and antioxidants that support cardiovascular health.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-serif text-xl font-bold text-apple-700 mb-2">Sustainably Grown</h3>
                <p className="text-gray-600">We use eco-friendly farming practices to protect our environment for future generations.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <h3 className="font-serif text-xl font-bold text-apple-700 mb-2">Versatile Use</h3>
                <p className="text-gray-600">Perfect for eating fresh, baking, salads, and creating delicious smoothies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
