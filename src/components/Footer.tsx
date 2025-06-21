import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Mail, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    { name: 'LED Strip Lights', href: '/led-strip-lights' },
    { name: 'LED Desk Lamps', href: '/led-desk-lamps' },
    { name: 'LED Night Lights', href: '/led-night-lights' },
    { name: 'LED Garden Lights', href: '/led-garden-lights' },
    { name: 'LED Bathroom Lights', href: '/led-bathroom-lights' },
    { name: 'LED Kitchen Lights', href: '/led-kitchen-lights' },
  ];

  const moreProducts = [
    { name: 'LED Car Lights', href: '/led-car-lights' },
    { name: 'LED Flashlights', href: '/led-flashlights' },
    { name: 'Small LED Lights', href: '/small-led-lights' },
    { name: 'LED Bulbs Replacement', href: '/led-bulbs-replacement' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* AdSense Footer Ad Placeholder */}
      <div className="bg-gray-800 text-center py-4">
        <div className="max-w-7xl mx-auto px-4">
          <span className="text-sm text-gray-400">[AdSense Footer Ad - 728x90]</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Lightbulb className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">LED Reviews</span>
            </Link>
            <p className="text-gray-400 text-sm mb-4">
              Your trusted source for comprehensive LED lighting reviews and buying guides. 
              Find the perfect LED products for your home, office, and outdoor spaces.
            </p>
            <div className="flex space-x-4">
              <Mail className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
              <Phone className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Product Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2">
              {productCategories.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More Products */}
          <div>
            <h3 className="text-lg font-semibold mb-4">More Products</h3>
            <ul className="space-y-2">
              {moreProducts.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} LED Reviews. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-2 sm:mt-0">
            Professional LED product reviews and recommendations
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;