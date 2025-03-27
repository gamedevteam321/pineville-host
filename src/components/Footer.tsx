import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-leaf-900 text-white">
      <div className="container-custom pt-16 pb-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <a href="/" className="text-2xl font-serif font-bold">Pine Valley</a>
            <p className="mt-4 text-gray-300 text-sm">
              Premium quality apples grown with care in our sustainable orchards, delivering exceptional taste and quality in every bite.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white transition-colors text-sm">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white transition-colors text-sm">About Us</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm">Our Apples</a>
              </li>
              <li>
                <a href="#recipes" className="text-gray-300 hover:text-white transition-colors text-sm">Recipes</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors text-sm">Contact</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm">Schnico Red Gala</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm">Dark Baron Gala</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm">Devil Gala Apple</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm">Royal Gala</a>
              </li>
              <li>
                <a href="#products" className="text-gray-300 hover:text-white transition-colors text-sm">Redlum Gala</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Newsletter</h4>
            <p className="text-gray-300 text-sm mb-4">
              Subscribe to receive updates on harvest seasons, new products, and special offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-leaf-800 border border-leaf-700 rounded-l-lg px-4 py-2 text-white text-sm focus:outline-none focus:border-white transition-colors w-full"
              />
              <button
                type="submit"
                className="bg-leaf-600 hover:bg-leaf-500 text-white rounded-r-lg px-4 py-2 text-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <hr className="border-leaf-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© {currentYear} Pine Valley. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
