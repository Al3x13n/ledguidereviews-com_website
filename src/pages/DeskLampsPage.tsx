import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, Eye, Zap } from 'lucide-react';

const DeskLampsPage: React.FC = () => {
  const products = [
    {
      title: 'TaoTronics LED Desk Lamp TT-DL13',
      description: 'Eye-caring LED desk lamp with USB charging port and memory function',
      rating: 4.5,
      price: '$39.99',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['USB charging port', '5 color modes', '6 brightness levels', 'Memory function', 'Touch control'],
      pros: ['Excellent build quality', 'Great adjustability', 'USB charging convenient', 'Eye-caring technology'],
      cons: ['Price point', 'No wireless charging', 'Limited color temperature range'],
      affiliate: true,
      productId: 'taotronics-led-desk-lamp-tt-dl13'
    },
    {
      title: 'BenQ ScreenBar Plus Monitor Light',
      description: 'Innovative monitor-mounted light bar that saves desk space',
      rating: 4.7,
      price: '$129.99',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Monitor mounting', 'No screen glare', 'Wireless controller', 'Auto-dimming'],
      pros: ['Space-saving design', 'No screen reflection', 'Premium build', 'Innovative solution'],
      cons: ['Expensive', 'Limited compatibility', 'Complex setup']
    },
    {
      title: 'Philips LED Desk Lamp with Wireless Charging',
      description: 'Modern desk lamp with built-in wireless charging pad and app control',
      rating: 4.3,
      price: '$89.99',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Wireless charging base', 'App control', 'Color temperature adjustment', 'Modern design'],
      pros: ['Wireless charging', 'Sleek design', 'App integration', 'Good light quality'],
      cons: ['High price', 'Limited phone compatibility', 'Complex features']
    },
    {
      title: 'JUKSTG LED Desk Lamp with Eye Protection',
      description: 'Budget-friendly LED desk lamp with flicker-free technology',
      rating: 4.2,
      price: '$25.99',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Flicker-free LED', '3 color modes', '10 brightness levels', 'Touch control', 'Adjustable arm'],
      pros: ['Great value', 'Flicker-free', 'Good adjustability', 'Easy to use'],
      cons: ['Build quality', 'Limited features', 'No USB charging']
    },
    {
      title: 'Humanscale M/Connect Docking Station Lamp',
      description: 'Professional desk lamp with integrated USB-C docking station',
      rating: 4.4,
      price: '$299.99',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['USB-C docking', 'Premium materials', 'Professional design', 'Integrated cable management'],
      pros: ['Premium build', 'Docking functionality', 'Cable management', 'Professional look'],
      cons: ['Very expensive', 'Overkill for most users', 'Complex setup']
    },
    {
      title: 'IKEA FORSÅ LED Work Lamp',
      description: 'Simple, affordable LED work lamp with adjustable positioning',
      rating: 4.0,
      price: '$19.99',
      image: 'https://images.pexels.com/photos/1002703/pexels-photo-1002703.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Adjustable head', 'LED bulb included', 'Simple design', 'Affordable price'],
      pros: ['Very affordable', 'Simple and reliable', 'Good adjustability', 'Easy assembly'],
      cons: ['Basic features', 'No dimming', 'Limited style options', 'Build quality']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Eye Protection',
      description: 'Look for flicker-free LEDs, blue light filtering, and adjustable color temperature to reduce eye strain.',
      icon: <Eye className="h-6 w-6" />
    },
    {
      title: 'Adjustability',
      description: 'Consider lamps with multiple pivot points and height adjustment for optimal light positioning.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Extra Features',
      description: 'USB charging ports, wireless charging, and memory functions add convenience to your workspace.',
      icon: <Info className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best LED Desk Lamps 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-3xl mx-auto">
              Enhance your productivity with our top-rated LED desk lamps. Expert reviews, 
              eye-care features, and buying recommendations for your workspace.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>600 monthly searches</span>
              </div>
              <div className="flex items-center">
                <Eye className="h-5 w-5 text-blue-300 mr-2" />
                <span>Eye-care tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - Desk Lamps" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Desk Lamp Buying Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyingGuidePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4">
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
              Top LED Desk Lamp Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best LED desk lamps for productivity, eye care, and workspace enhancement
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

      {/* Eye Care Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Eye-Care Lighting Tips
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Optimal Lighting Setup</h3>
              <ul className="text-blue-800 space-y-2">
                <li>Position the lamp to avoid glare on your screen</li>
                <li>Use indirect lighting to reduce contrast</li>
                <li>Adjust color temperature throughout the day</li>
                <li>Ensure even illumination across your work area</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Recommended Settings</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>Morning: Cool white (5000K-6500K)</li>
                  <li>Afternoon: Neutral white (4000K-5000K)</li>
                  <li>Evening: Warm white (2700K-3000K)</li>
                  <li>Brightness: 300-500 lux on task surface</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Eye Strain Signs</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>Frequent headaches during work</li>
                  <li>Dry or watery eyes</li>
                  <li>Blurred or double vision</li>
                  <li>Neck and shoulder tension</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - Desk Lamps" />
      </div>
    </div>
  );
};

export default DeskLampsPage;