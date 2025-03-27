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
    <section id="about" className="section-padding py-12 md:py-20 bg-gradient-to-b from-white to-apple-50 leaf-pattern">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div 
              ref={el => elementsRef.current[0] = el}
              className="scroll-reveal relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-xl apple-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1569870499705-504209102861?q=80&w=2574&auto=format&fit=crop" 
                  alt="High-density apple orchard" 
                  className="w-full h-[460px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-xl shadow-lg glass-card">
                <p className="font-serif text-base font-medium text-apple-700">
                  Revolutionizing Apple Farming
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
              <h2 className="heading-lg text-apple-800 mb-3">
                Transforming India's Apple Industry
              </h2>
              <div className="flex flex-col gap-3">
                <p className="text-base text-gray-700 leading-relaxed">
                  Pine Valley Agri is developing India's largest high-density apple orchard, revolutionizing cultivation with innovative practices for superior quality and sustainability. Our high-density orchards yield fruit within a year, reaching full productivity in just 4-5 years.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  We cultivate premium varieties including Schnico Red Gala, Dark Baron Gala, Devil Gala, Royal Gala, and Redlum Gala. With 1,500 acres under development across Northern India, we're bridging the gap between low productivity and rising demand.
                </p>
              </div>
            </div>

            <div 
              ref={el => elementsRef.current[2] = el}
              className="scroll-reveal grid grid-cols-2 gap-4 mt-6"
              style={{ transitionDelay: "0.4s" }}
            >
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-serif text-lg font-bold text-apple-700 mb-1">Early Yields</h3>
                <p className="text-sm text-gray-600">High-density orchards produce fruit within first year versus traditional decade-long wait.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-serif text-lg font-bold text-apple-700 mb-1">Global Expertise</h3>
                <p className="text-sm text-gray-600">Drawing on experience from CIS, South America, Serbia, and North Africa to pioneer in India.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-serif text-lg font-bold text-apple-700 mb-1">Strategic Growth</h3>
                <p className="text-sm text-gray-600">Our Balanced Integration Strategy enhances value and control across the entire supply chain.</p>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <h3 className="font-serif text-lg font-bold text-apple-700 mb-1">Tech-Enabled</h3>
                <p className="text-sm text-gray-600">Leveraging modern technology, research, and best global practices for sustainable orchards.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
