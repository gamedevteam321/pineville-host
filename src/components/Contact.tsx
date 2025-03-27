
import { useEffect, useRef } from "react";
import { MapPin, Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
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
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div 
          ref={el => elementsRef.current[0] = el}
          className="scroll-reveal text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-red-600 uppercase bg-red-50 rounded-full">Get In Touch</span>
          <h2 className="heading-lg mt-4 mb-6">Visit Our Orchards</h2>
          <p className="text-lg text-gray-700">
            We welcome visitors to our orchards during harvest season. Come experience the beauty of our apple trees and taste the freshness straight from the source.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <div 
              ref={el => elementsRef.current[1] = el}
              className="scroll-reveal"
            >
              <div className="rounded-2xl overflow-hidden h-full shadow-lg pine-shadow">
                <img 
                  src="/lovable-uploads/998e03af-57db-45ec-9ccd-cc6f63a9e7d5.png" 
                  alt="Our apple orchard location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div>
            <div 
              ref={el => elementsRef.current[2] = el}
              className="scroll-reveal space-y-8"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-red-100 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-red-700 mb-2">Our Location</h3>
                  <p className="text-gray-700">
                    1234 Orchard Lane<br />
                    Appleville, CA 95123<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-red-700 mb-2">Email Us</h3>
                  <a href="mailto:info@pinevalley.com" className="text-gray-700 hover:text-red-600 transition-colors">
                    info@pinevalley.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-red-700 mb-2">Call Us</h3>
                  <a href="tel:+15551234567" className="text-gray-700 hover:text-red-600 transition-colors">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-red-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-red-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-red-700 mb-2">Visiting Hours</h3>
                  <p className="text-gray-700">
                    Monday - Friday: 9am - 5pm<br />
                    Saturday: 10am - 4pm<br />
                    Sunday: Closed
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    * Orchard tours available during harvest season (September - October)
                  </p>
                </div>
              </div>
            </div>

            <div 
              ref={el => elementsRef.current[3] = el}
              className="scroll-reveal mt-10"
              style={{ transitionDelay: "0.4s" }}
            >
              <a href="#" className="btn-primary inline-flex items-center">
                Schedule a Visit
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
