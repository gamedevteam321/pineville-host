import { useEffect, useRef } from "react";

const RecipeCard = ({ title, description, image, difficulty, time, delay }: { 
  title: string;
  description: string;
  image: string;
  difficulty: string;
  time: string;
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

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
          
          // Add hover effect after animation completes
          setTimeout(() => {
            if (cardRef.current) {
              cardRef.current.classList.add('recipe-card-hover');
            }
          }, 600);
        }
      });
    }, observerOptions);

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div 
      ref={cardRef}
      className="scroll-reveal bg-white rounded-xl overflow-hidden shadow-md h-full transition-all duration-300"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-6">
            <h3 className="font-serif text-xl font-bold text-white mb-1">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between mb-4">
          <span className="inline-flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
            {difficulty}
          </span>
          <span className="inline-flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 rounded-full bg-gold-500 mr-2"></span>
            {time}
          </span>
        </div>
        <p className="text-gray-700">{description}</p>
        <button className="mt-4 text-red-600 font-medium hover:text-red-700 transition-colors inline-flex items-center">
          View Recipe
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

const Recipes = () => {
  const titleRef = useRef<HTMLDivElement>(null);

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

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      if (titleRef.current) {
        observer.unobserve(titleRef.current);
      }
    };
  }, []);

  const recipes = [
    {
      title: "Classic Apple Pie",
      description: "Our signature recipe that brings out the natural sweetness of our apples with a perfect flaky crust and hint of cinnamon.",
      image: "/lovable-uploads/f67505c1-0e6d-4c7a-ad5b-05782229077f.png",
      difficulty: "Intermediate",
      time: "90 min"
    },
    {
      title: "Apple & Walnut Salad",
      description: "A refreshing salad combining crisp apple slices with walnuts, blue cheese, and a light vinaigrette.",
      image: "/lovable-uploads/43096581-3d75-4caf-992b-198118d8b295.png",
      difficulty: "Easy",
      time: "15 min"
    },
    {
      title: "Caramel Apple Tarts",
      description: "Individual tarts featuring caramelized apples in a buttery pastry shell, topped with whipped cream.",
      image: "/lovable-uploads/26173d41-26b6-491d-8699-0e80bf7da216.png",
      difficulty: "Advanced",
      time: "60 min"
    },
    {
      title: "Apple Smoothie Bowl",
      description: "A nutritious breakfast bowl blending apples with yogurt, honey, and topped with granola and fresh fruits.",
      image: "/lovable-uploads/a2e5a84e-c364-4c07-b29e-4f5292e4a383.png",
      difficulty: "Easy",
      time: "10 min"
    },
    {
      title: "Spiced Apple Muffins",
      description: "Moist and fluffy muffins with chunks of apples and warm spices, perfect for breakfast or snacking.",
      image: "/lovable-uploads/41aa5e77-9018-4918-9edb-4051074fae2b.png",
      difficulty: "Intermediate",
      time: "45 min"
    },
    {
      title: "Apple Cider Cocktail",
      description: "A refreshing cocktail made with fresh apple juice, bourbon, and a hint of cinnamon and star anise.",
      image: "/lovable-uploads/b75bf161-8bfe-4d9b-945a-657ae0ddcbcc.png",
      difficulty: "Easy",
      time: "10 min"
    }
  ];

  return (
    <section id="recipes" className="section-padding bg-red-50">
      <div className="container-custom">
        <div 
          ref={titleRef}
          className="scroll-reveal text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-3 py-1 text-xs font-medium tracking-wider text-red-600 uppercase bg-white rounded-full">Delicious Ideas</span>
          <h2 className="heading-lg mt-4 mb-6">Apple Recipes</h2>
          <p className="text-lg text-gray-700">
            Make the most of our sweet and crisp apples with these delicious recipes, perfect for any occasion from breakfast to dessert.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {recipes.map((recipe, index) => (
            <RecipeCard
              key={index}
              title={recipe.title}
              description={recipe.description}
              image={recipe.image}
              difficulty={recipe.difficulty}
              time={recipe.time}
              delay={0.1 * index}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a href="#" className="btn-secondary">
            View All Recipes
          </a>
        </div>
      </div>
    </section>
  );
};

export default Recipes;
