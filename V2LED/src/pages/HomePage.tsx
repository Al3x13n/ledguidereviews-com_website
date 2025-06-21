import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Lightbulb, Star, TrendingUp } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';

const HomePage: React.FC = () => {
  const categories = [
    {
      name: 'LED Strip Lights',
      href: '/led-strip-lights',
      description: 'Transform your space with colorful ambient lighting',
      searches: '1,200 monthly searches',
      image: 'https://images.pexels.com/photos/1406765/pexels-photo-1406765.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'LED Desk Lamps',
      href: '/led-desk-lamps',
      description: 'Enhance productivity with proper task lighting',
      searches: '600 monthly searches',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'LED Flashlights',
      href: '/led-flashlights',
      description: 'Reliable portable lighting for any situation',
      searches: '2,000 monthly searches',
      image: 'https://images.pexels.com/photos/1209969/pexels-photo-1209969.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'LED Kitchen Lights',
      href: '/led-kitchen-lights',
      description: 'Brighten your culinary space efficiently',
      searches: '1,300 monthly searches',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'LED Car Lights',
      href: '/led-car-lights',
      description: 'Upgrade your vehicle with modern LED technology',
      searches: '1,500 monthly searches',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'LED Night Lights',
      href: '/led-night-lights',
      description: 'Safe, gentle illumination for nighttime navigation',
      searches: '900 monthly searches',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const featuredProducts = [
    {
      title: 'Govee LED Strip Lights 32.8ft',
      description: 'Smart WiFi LED strip lights with app control and music sync',
      rating: 4.5,
      price: '$29.99',
      image: 'https://images.pexels.com/photos/1406765/pexels-photo-1406765.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Smart WiFi Control', 'Music Sync', '16 Million Colors'],
      pros: ['Easy installation', 'Great app control'],
      cons: ['Adhesive could be stronger', 'Limited length'],
      affiliate: true
    },
    {
      title: 'TaoTronics LED Desk Lamp',
      description: 'Eye-caring LED desk lamp with USB charging port',
      rating: 4.3,
      price: '$39.99',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['USB Charging Port', '5 Color Modes', 'Touch Control'],
      pros: ['Excellent build quality', 'Multiple brightness levels'],
      cons: ['Price point', 'No wireless charging']
    },
    {
      title: 'Streamlight ProTac LED Flashlight',
      description: 'Professional tactical flashlight with multiple power sources',
      rating: 4.7,
      price: '$59.99',
      image: 'https://images.pexels.com/photos/1209969/pexels-photo-1209969.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['1000 Lumens', 'Dual Power Source', 'IPX7 Waterproof'],
      pros: ['Extremely bright', 'Durable construction'],
      cons: ['Heavy weight', 'Battery life']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find the Perfect
              <span className="block text-yellow-400">LED Lighting</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Professional reviews and buying guides for LED strip lights, desk lamps, flashlights, and more. 
              Make informed decisions with our comprehensive product analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/led-strip-lights"
                className="bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors inline-flex items-center justify-center"
              >
                Browse LED Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/led-flashlights"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-800 transition-colors"
              >
                Top Rated Reviews
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="rectangle" position="After Hero" />
      </div>

      {/* Popular Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular LED Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive reviews across the most searched LED product categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <Link
                key={category.name}
                to={category.href}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden transform hover:-translate-y-1"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-blue-600 font-medium flex items-center">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {category.searches}
                    </span>
                    <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AdSense Banner Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Mid-Page" />
      </div>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top Rated Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our highest-rated LED products based on extensive testing and user feedback
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Trust Our Reviews?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Testing</h3>
              <p className="text-gray-600">
                Each product undergoes rigorous testing for performance, durability, and value
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Unbiased Reviews</h3>
              <p className="text-gray-600">
                Honest, transparent reviews focused on helping you make the best choice
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Up-to-Date Info</h3>
              <p className="text-gray-600">
                Regular updates ensure our recommendations reflect the latest products and prices
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="rectangle" position="Before Footer" />
      </div>
    </div>
  );
};

export default HomePage;