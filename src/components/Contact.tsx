import { useEffect, useRef } from "react";
import { Mail, Phone, Clock } from "lucide-react";

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
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-apple-600 uppercase bg-apple-50 rounded-full">Get In Touch</span>
          <h2 className="heading-lg mt-4 mb-6">Visit Our Orchards</h2>
          <p className="text-lg text-gray-700">
            We welcome visitors to our orchards during harvest season. Come experience the beauty of our apple trees and taste the freshness straight from the source.
          </p>
        </div>

        <div className="grid md:grid-cols-10 gap-12 px-[30px]">
          <div className="md:col-span-7">
            <div 
              ref={el => elementsRef.current[1] = el}
              className="scroll-reveal"
            >
              {/* Google Calendar Appointment Scheduling */}
              <iframe 
                src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ14AUe-5tkGg9w4HfNjQn2R9T77MwZTC5m7cQxjqXkJ95SrcETQM1m5dfLkD7E9549akWhzRBHa?gv=true" 
                style={{ border: 0 }} 
                width="100%" 
                height="600" 
                frameBorder="0"
              ></iframe>
            </div>
          </div>

          <div className="md:col-span-3">
            <div 
              ref={el => elementsRef.current[2] = el}
              className="scroll-reveal space-y-8"
              style={{ transitionDelay: "0.2s" }}
            >
              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-apple-100 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-apple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-apple-700 mb-2">Email Us</h3>
                  <a href="mailto:info@pinevalleyagri.com" className="text-gray-700 hover:text-apple-600 transition-colors">
                    info@pinevalleyagri.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-apple-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-apple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-apple-700 mb-2">Call Us</h3>
                  <a href="tel:+919541099259" className="text-gray-700 hover:text-apple-600 transition-colors">
                    +91-95 41 099 259
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 mt-1">
                  <div className="bg-apple-100 p-2 rounded-full">
                    <Clock className="h-5 w-5 text-apple-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-apple-700 mb-2">Visiting Season</h3>
                  <p className="text-gray-700">
                    1st of July till 15th of September<br />
                    Sunday: Closed
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
