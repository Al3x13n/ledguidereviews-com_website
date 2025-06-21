import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Lightbulb } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Articles', href: '/articles' },
    { name: 'Strip Lights', href: '/led-strip-lights' },
    { name: 'Desk Lamps', href: '/led-desk-lamps' },
    { name: 'Night Lights', href: '/led-night-lights' },
    { name: 'Garden Lights', href: '/led-garden-lights' },
    { name: 'Bathroom Lights', href: '/led-bathroom-lights' },
    { name: 'Kitchen Lights', href: '/led-kitchen-lights' },
    { name: 'Car Lights', href: '/led-car-lights' },
    { name: 'Flashlights', href: '/led-flashlights' },
    { name: 'Small LED Lights', href: '/small-led-lights' },
    { name: 'Bulb Replacement', href: '/led-bulbs-replacement' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      {/* AdSense Banner Ad Placeholder */}
      <div className="bg-gray-100 text-center py-2 text-sm text-gray-600">
        <div className="max-w-7xl mx-auto px-4">
          [AdSense Banner Ad - 728x90]
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Lightbulb className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">LED Reviews</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navigation.slice(0, 6).map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  location.pathname === item.href
                    ? 'text-blue-600'
                    : 'text-gray-700'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Dropdown for More Categories */}
            <div className="relative group">
              <button className="text-sm font-medium text-gray-700 hover:text-blue-600 flex items-center">
                More
              </button>
              <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                {navigation.slice(6).map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Search and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-600" />
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-500"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block py-2 text-base font-medium transition-colors hover:text-blue-600 ${
                    location.pathname === item.href
                      ? 'text-blue-600'
                      : 'text-gray-700'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;