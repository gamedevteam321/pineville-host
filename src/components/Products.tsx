import { useEffect, useRef, useState } from "react";

const Products = () => {
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [selectedTab, setSelectedTab] = useState("schnico");

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

  const tabs = [
    { id: "schnico", label: "Schnico Red" },
    { id: "darkbaron", label: "Dark Baron" },
    { id: "devil", label: "Devil Gala" },
    { id: "royal", label: "Royal Gala" }
  ];

  const products = {
    schnico: {
      title: "Schnico Red Gala",
      description: "Schnico Red Gala apples are known for their vibrant red color and exceptional sweetness. These premium apples feature a bright crisp texture and a perfectly balanced flavor profile that makes them ideal for fresh eating and gourmet recipes.",
      image: "./images/schnico.png",
      features: [
        "Vibrant red coloration",
        "Exceptionally sweet flavor",
        "Crisp, juicy texture",
        "Premium selection"
      ],
      nutrition: {
        calories: "80 per medium apple",
        fiber: "2.5g",
        vitamin_c: "15% of daily value",
        potassium: "5% of daily value"
      }
    },
    darkbaron: {
      title: "Dark Baron Gala",
      description: "Dark Baron Gala apples feature a distinctive deep burgundy color and rich, complex flavor. Their darker skin hides a crisp, aromatic flesh with notes of honey and vanilla, making them a sophisticated choice for connoisseurs.",
      image: "./images/darkbaron.png",
      features: [
        "Deep burgundy coloration",
        "Rich, complex flavor profile",
        "Honey and vanilla notes",
        "Firm, dense texture"
      ],
      nutrition: {
        calories: "85 per medium apple",
        fiber: "3g",
        vitamin_c: "14% of daily value",
        potassium: "6% of daily value"
      }
    },
    devil: {
      title: "Devil Gala Apple",
      description: "The Devil Gala Apple stands out with its intense red color and bold, assertive flavor. These apples provide a perfect balance of sweetness and tanginess with a slightly spicy finish, making them particularly excellent for baking and cider.",
      image: "./images/devil.png",
      features: [
        "Intense red coloration",
        "Bold, assertive flavor",
        "Perfect sweet-tart balance",
        "Excellent for baking"
      ],
      nutrition: {
        calories: "82 per medium apple",
        fiber: "2.8g",
        vitamin_c: "16% of daily value",
        potassium: "5% of daily value"
      }
    },
    royal: {
      title: "Royal Gala Apples",
      description: "Royal Gala apples are a premium selection with a more intense color and slightly sweeter flavor profile than regular Galas. These apples have a distinctive red blush covering most of the fruit, making them both beautiful and delicious.",
      image: "./images/royalgala.png",
      features: [
        "Enhanced sweetness",
        "Elegant red coloration",
        "Extra crisp texture",
        "Premium selection"
      ],
      nutrition: {
        calories: "80 per medium apple",
        fiber: "2.5g",
        vitamin_c: "15% of daily value",
        potassium: "5% of daily value"
      }
    }
  };

  const currentProduct = products[selectedTab as keyof typeof products];

  return (
    <section id="products" className="section-padding bg-white">
      <div className="container-custom">
        <div 
          ref={el => elementsRef.current[0] = el}
          className="scroll-reveal text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-apple-600 uppercase bg-apple-50 rounded-full">Our Products</span>
          <h2 className="heading-lg mt-4 mb-6">Premium Gala Varieties</h2>
          <p className="text-lg text-gray-700">
            Our orchards produce several varieties of Gala apples, each with their own unique characteristics while maintaining the classic Gala taste and quality you love.
          </p>
        </div>

        <div className="mb-12 flex justify-center overflow-x-auto">
          <div className="inline-flex p-1 bg-gray-100 rounded-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedTab(tab.id)}
                className={`px-4 py-2.5 text-sm font-medium rounded-md transition-all duration-300 whitespace-nowrap ${
                  selectedTab === tab.id
                    ? "bg-white shadow-sm text-apple-700"
                    : "text-gray-600 hover:text-apple-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div 
          ref={el => elementsRef.current[1] = el}
          className="scroll-reveal grid md:grid-cols-2 gap-12 items-center"
        >
          <div className="order-2 md:order-1">
            <h3 className="heading-md text-apple-700 mb-4">{currentProduct.title}</h3>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {currentProduct.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-apple-50 p-6 rounded-xl">
                <h4 className="font-serif text-lg font-bold text-apple-700 mb-3">Key Features</h4>
                <ul className="space-y-2">
                  {currentProduct.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-apple-600 mr-2">•</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-apple-50 p-6 rounded-xl">
                <h4 className="font-serif text-lg font-bold text-apple-700 mb-3">Nutrition</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-apple-600 mr-2">•</span>
                    <span className="text-gray-700">Calories: {currentProduct.nutrition.calories}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-apple-600 mr-2">•</span>
                    <span className="text-gray-700">Fiber: {currentProduct.nutrition.fiber}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-apple-600 mr-2">•</span>
                    <span className="text-gray-700">Vitamin C: {currentProduct.nutrition.vitamin_c}</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-apple-600 mr-2">•</span>
                    <span className="text-gray-700">Potassium: {currentProduct.nutrition.potassium}</span>
                  </li>
                </ul>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-flex">
              Find Where to Buy
            </a>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-br from-apple-100 to-apple-200 rounded-full blur-3xl opacity-30 animate-pulse-slow"></div>
              <div className="relative rounded-2xl overflow-hidden apple-shadow transition-all duration-500">
                <img 
                  src={currentProduct.image} 
                  alt={currentProduct.title}
                  className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
