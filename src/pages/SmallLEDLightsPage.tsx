import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, Lightbulb, Zap } from 'lucide-react';

const SmallLEDLightsPage: React.FC = () => {
  const products = [
    {
      title: 'Brilliant Evolution Wireless LED Puck Lights',
      description: 'Battery-powered LED puck lights with remote control and timer function',
      rating: 4.3,
      price: '$39.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['3-pack with remote', 'Battery powered', 'Stick-on installation', 'Timer function', 'Dimmable'],
      pros: ['No wiring needed', 'Remote control', 'Easy installation', 'Good brightness'],
      cons: ['Battery replacement needed', 'Limited runtime', 'Basic build quality'],
      affiliate: true
    },
    {
      title: 'URPOWER Motion Sensor Closet Lights',
      description: 'Rechargeable LED closet lights with motion sensor and magnetic mounting',
      rating: 4.4,
      price: '$29.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Motion sensor', 'USB rechargeable', 'Magnetic mounting', '3 brightness levels', 'Auto shut-off'],
      pros: ['Rechargeable battery', 'Motion activation', 'Magnetic mount', 'Good value'],
      cons: ['Limited battery life', 'Basic sensor range', 'Plastic construction']
    },
    {
      title: 'Amir LED String Lights Battery Operated',
      description: 'Flexible LED string lights perfect for decorative and accent lighting',
      rating: 4.2,
      price: '$12.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['20 LED lights', '7ft copper wire', 'Battery operated', 'Waterproof', 'Flexible design'],
      pros: ['Very affordable', 'Flexible placement', 'Waterproof', 'Decorative appeal'],
      cons: ['Limited brightness', 'Battery life', 'Basic quality']
    },
    {
      title: 'Enbrighten LED Cafe String Lights',
      description: 'Commercial-grade LED string lights for outdoor and indoor use',
      rating: 4.5,
      price: '$49.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['48ft length', 'Commercial grade', 'Weather resistant', 'Linkable', 'Warm white LEDs'],
      pros: ['Commercial quality', 'Weather resistant', 'Linkable design', 'Good length'],
      cons: ['Higher price', 'Requires power outlet', 'Limited color options']
    },
    {
      title: 'Stick-on LED Tap Lights 6-Pack',
      description: 'Simple battery-operated LED tap lights for closets and cabinets',
      rating: 4.0,
      price: '$18.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['6-pack value', 'Tap on/off', 'Adhesive mounting', 'Battery operated', 'Compact size'],
      pros: ['Great value', 'Simple operation', 'Easy installation', 'Compact design'],
      cons: ['Basic functionality', 'Limited brightness', 'Battery replacement']
    },
    {
      title: 'Govee LED Strip Lights 16.4ft',
      description: 'Smart LED strip lights with app control and music sync features',
      rating: 4.1,
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['16.4ft length', 'App control', 'Music sync', 'Multiple colors', 'Easy installation'],
      pros: ['Smart features', 'Good length', 'Color options', 'App control'],
      cons: ['Adhesive quality', 'WiFi dependency', 'Basic mounting']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Power Source',
      description: 'Choose between battery-powered for portability, plug-in for permanent installation, or rechargeable for convenience.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Installation Method',
      description: 'Consider adhesive mounting, magnetic attachment, or clip-on designs based on your application.',
      icon: <Info className="h-6 w-6" />
    },
    {
      title: 'Light Output',
      description: 'Small LEDs range from accent lighting (10-50 lumens) to task lighting (100+ lumens).',
      icon: <Lightbulb className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best Small LED Lights 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100 max-w-3xl mx-auto">
              Compact lighting solutions for any space. Expert reviews of puck lights, 
              string lights, and portable LED solutions.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>500 monthly searches</span>
              </div>
              <div className="flex items-center">
                <Lightbulb className="h-5 w-5 text-pink-300 mr-2" />
                <span>Compact & versatile</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - Small LED Lights" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Small LED Light Buying Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyingGuidePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
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
              Top Small LED Light Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best small LED lights for accent, task, and decorative lighting
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

      {/* Creative Uses and Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Creative Uses for Small LED Lights
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-purple-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-purple-900 mb-4">Popular Applications</h3>
              <ul className="text-purple-800 space-y-2">
                <li>Under-cabinet task lighting in kitchens and workspaces</li>
                <li>Closet and pantry illumination with motion sensors</li>
                <li>Accent lighting for artwork, shelving, and displays</li>
                <li>Emergency lighting for power outages</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Installation Tips</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>Clean surfaces before applying adhesive mounts</li>
                  <li>Test placement before permanent installation</li>
                  <li>Consider accessibility for battery changes</li>
                  <li>Use mounting clips for temporary installations</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Creative Ideas</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>Stair step lighting for safety</li>
                  <li>Behind TV bias lighting</li>
                  <li>Craft room and hobby area illumination</li>
                  <li>Outdoor party and event decoration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - Small LED Lights" />
      </div>
    </div>
  );
};

export default SmallLEDLightsPage;