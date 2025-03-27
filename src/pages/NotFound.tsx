
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-white py-24">
        <div className="container-custom">
          <div className="text-center max-w-xl mx-auto">
            <img 
              src="https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=2670&auto=format&fit=crop" 
              alt="Apples in basket" 
              className="w-40 h-40 object-cover mx-auto rounded-full mb-8"
            />
            <h1 className="heading-lg text-apple-700 mb-4">404</h1>
            <p className="text-xl text-gray-700 mb-8">
              Oops! We couldn't find the page you're looking for.
            </p>
            <a href="/" className="btn-primary inline-flex items-center">
              Return to Home
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
