import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, Lightbulb, DollarSign } from 'lucide-react';

const BulbReplacementPage: React.FC = () => {
  const products = [
    {
      title: 'Philips LED A19 60W Equivalent',
      description: 'Energy-efficient LED bulb that replaces traditional 60W incandescent bulbs',
      rating: 4.6,
      price: '$8.99',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['60W equivalent', '800 lumens', '2700K warm white', '15,000 hour life', 'Dimmable'],
      pros: ['Excellent light quality', 'Long lifespan', 'Energy efficient', 'Reliable brand'],
      cons: ['Higher upfront cost', 'Dimming compatibility varies', 'Warm-up time'],
      affiliate: true
    },
    {
      title: 'Cree LED A19 100W Equivalent',
      description: 'High-output LED bulb replacement for 100W incandescent bulbs',
      rating: 4.5,
      price: '$12.99',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['100W equivalent', '1600 lumens', '2700K/5000K options', '25,000 hour life', 'Instant on'],
      pros: ['Very bright output', 'Instant full brightness', 'Multiple color temperatures', 'Great warranty'],
      cons: ['Premium price', 'Large size', 'Heat generation']
    },
    {
      title: 'GE LED+ Color Changing A19',
      description: 'Smart LED bulb with color changing capabilities and app control',
      rating: 4.3,
      price: '$19.99',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Color changing', 'App control', 'Voice compatible', '60W equivalent', 'Smart features'],
      pros: ['Color options', 'Smart features', 'Good app', 'Voice control'],
      cons: ['Requires app setup', 'WiFi dependency', 'Complex for basic use']
    },
    {
      title: 'Feit Electric LED Candelabra Bulbs 6-Pack',
      description: 'LED replacement bulbs for chandeliers and decorative fixtures',
      rating: 4.4,
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['6-pack value', 'Candelabra base', '40W equivalent', 'Dimmable', 'Decorative style'],
      pros: ['Great value pack', 'Perfect for chandeliers', 'Dimmable', 'Good light quality'],
      cons: ['Limited brightness', 'Decorative use only', 'Size constraints']
    },
    {
      title: 'Sylvania LED BR30 Flood Light',
      description: 'LED flood light bulb for recessed cans and track lighting',
      rating: 4.2,
      price: '$9.99',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['BR30 flood beam', '65W equivalent', '650 lumens', 'Dimmable', 'Recessed can compatible'],
      pros: ['Good for recessed lighting', 'Wide beam angle', 'Dimmable', 'Affordable'],
      cons: ['Limited to flood applications', 'Basic features', 'Average lifespan']
    },
    {
      title: 'TCP LED Globe Bulbs G25 4-Pack',
      description: 'Decorative globe LED bulbs perfect for vanity and pendant fixtures',
      rating: 4.1,
      price: '$19.99',
      image: 'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['G25 globe shape', '4-pack value', '40W equivalent', 'Frosted finish', 'Decorative style'],
      pros: ['Decorative appeal', 'Good value pack', 'Even light distribution', 'Vanity friendly'],
      cons: ['Limited brightness', 'Decorative use only', 'Basic quality']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Wattage Equivalent',
      description: 'Match LED lumens to your old incandescent wattage: 60W = 800 lumens, 100W = 1600 lumens.',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: 'Color Temperature',
      description: 'Choose 2700K for warm white, 3000K for soft white, or 5000K for daylight color.',
      icon: <Info className="h-6 w-6" />
    },
    {
      title: 'Energy Savings',
      description: 'LED bulbs use 75-80% less energy and last 15-25 times longer than incandescent bulbs.',
      icon: <DollarSign className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best LED Bulbs Replacement 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-yellow-100 max-w-3xl mx-auto">
              Save energy and money with our top-rated LED replacement bulbs. Expert reviews 
              of A19, candelabra, flood, and specialty LED bulbs.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>800 monthly searches</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 text-yellow-300 mr-2" />
                <span>Energy savings tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - LED Bulbs Replacement" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Bulb Replacement Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyingGuidePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                    {point.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{point.title}</h3>
                </div>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Reviews */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Top LED Replacement Bulb Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best LED replacement bulbs for every fixture and application
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index}>
                <ProductCard {...product} />
                {/* Insert ad after every 3rd product */}
                {(index + 1) % 3 === 0 && index !== products.length - 1 && (
                  <div className="flex justify-center my-8">
                    <AdPlacement size="rectangle" position={`Product ${index + 1}`} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conversion Guide and Savings Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Conversion Guide & Savings
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Incandescent to LED Conversion</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-green-800">
                <div className="text-center">
                  <div className="font-bold">25W Incandescent</div>
                  <div className="text-sm">= 4W LED (250 lumens)</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">40W Incandescent</div>
                  <div className="text-sm">= 6W LED (450 lumens)</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">60W Incandescent</div>
                  <div className="text-sm">= 9W LED (800 lumens)</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">100W Incandescent</div>
                  <div className="text-sm">= 14W LED (1600 lumens)</div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Annual Savings Example</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>60W incandescent: $7.20/year electricity cost</li>
                  <li>9W LED equivalent: $1.08/year electricity cost</li>
                  <li>Annual savings: $6.12 per bulb</li>
                  <li>LED pays for itself in 1-2 years</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Replacement Tips</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>Check fixture compatibility before buying</li>
                  <li>Consider dimmer switch compatibility</li>
                  <li>Replace all bulbs in a fixture together</li>
                  <li>Keep receipts for warranty claims</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - LED Bulbs Replacement" />
      </div>
    </div>
  );
};

export default BulbReplacementPage;