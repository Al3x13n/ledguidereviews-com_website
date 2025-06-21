import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, Car, Shield } from 'lucide-react';

const CarLightsPage: React.FC = () => {
  const products = [
    {
      title: 'SEALIGHT LED Headlight Bulbs H11/H8/H9',
      description: 'High-performance LED headlight bulbs with 12000LM brightness and cooling fan',
      rating: 4.5,
      price: '$39.99',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['12000LM brightness', 'H11/H8/H9 compatibility', 'Cooling fan', '6000K white light', '50000hr lifespan'],
      pros: ['Extremely bright', 'Easy installation', 'Good cooling system', 'Great value'],
      cons: ['Fan noise', 'Size may not fit all housings', 'Power consumption'],
      affiliate: true
    },
    {
      title: 'Philips Ultinon Pro6000 LED',
      description: 'Premium LED headlight with road-legal design and superior light pattern',
      rating: 4.7,
      price: '$89.99',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Road legal design', 'Superior beam pattern', 'Premium materials', '5-year warranty', 'Multiple fitments'],
      pros: ['Excellent beam pattern', 'Premium quality', 'Legal compliance', 'Great warranty'],
      cons: ['Higher price', 'Limited availability', 'Professional installation recommended']
    },
    {
      title: 'Nilight LED Light Bar 32"',
      description: 'Off-road LED light bar with spot and flood combo beam pattern',
      rating: 4.4,
      price: '$69.99',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['32" length', '180W power', 'Combo beam pattern', 'IP67 waterproof', 'Mounting hardware included'],
      pros: ['Excellent brightness', 'Good build quality', 'Complete kit', 'Versatile mounting'],
      cons: ['Off-road use only', 'Installation complexity', 'Power draw']
    },
    {
      title: 'AUXITO LED Interior Light Kit',
      description: 'Complete LED interior lighting kit for various car models',
      rating: 4.3,
      price: '$24.99',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Complete interior kit', 'Multiple bulb sizes', 'Pure white light', 'Error-free design', 'Easy installation'],
      pros: ['Complete kit', 'Bright white light', 'Good value', 'Easy installation'],
      cons: ['Basic quality', 'May not fit all models', 'Limited warranty']
    },
    {
      title: 'BEAMTECH LED Fog Light Bulbs',
      description: 'High-performance LED fog light bulbs with CSP chips',
      rating: 4.2,
      price: '$29.99',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['CSP LED chips', 'H10/9145 compatibility', '6000K color temperature', 'Plug and play', 'Fanless design'],
      pros: ['Good brightness', 'Fanless operation', 'Easy installation', 'Good price'],
      cons: ['Limited compatibility', 'Basic heat dissipation', 'Average lifespan']
    },
    {
      title: 'JDM ASTAR LED Reverse Light Bulbs',
      description: 'Ultra-bright LED reverse light bulbs with 921/912 compatibility',
      rating: 4.1,
      price: '$19.99',
      image: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Ultra-bright output', '921/912 compatibility', 'Error-free design', 'Long lifespan', 'Easy installation'],
      pros: ['Very bright', 'Error-free', 'Good value', 'Easy to install'],
      cons: ['Limited to reverse lights', 'Basic build', 'Standard warranty']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Legal Compliance',
      description: 'Ensure LED upgrades comply with local regulations and DOT standards for road use.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Compatibility',
      description: 'Check bulb size, socket type, and electrical compatibility with your vehicle before purchasing.',
      icon: <Car className="h-6 w-6" />
    },
    {
      title: 'Heat Management',
      description: 'Look for proper heat dissipation features like fans or heat sinks for reliable operation.',
      icon: <Info className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best LED Car Lights 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Upgrade your vehicle with our top-rated LED car lights. Expert reviews 
              of headlights, fog lights, interior lights, and off-road lighting solutions.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>1,500 monthly searches</span>
              </div>
              <div className="flex items-center">
                <Car className="h-5 w-5 text-blue-400 mr-2" />
                <span>Vehicle tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - Car Lights" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Car Light Buying Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyingGuidePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gray-200 p-2 rounded-lg mr-4">
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
              Top LED Car Light Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best LED car lights for improved visibility and style
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

      {/* Installation and Legal Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Car LED Installation & Legal Guide
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-red-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-red-900 mb-4">Legal Considerations</h3>
              <ul className="text-red-800 space-y-2">
                <li>Check local and state regulations before installing LED upgrades</li>
                <li>Ensure headlight LEDs meet DOT standards for road use</li>
                <li>Avoid colored LEDs on forward-facing lights</li>
                <li>Some states require professional headlight alignment after LED conversion</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Installation Tips</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>Disconnect battery before starting work</li>
                  <li>Check bulb compatibility and socket fit</li>
                  <li>Test all functions after installation</li>
                  <li>Consider professional installation for complex systems</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">Common Issues</h4>
                <ul className="text-yellow-800 space-y-2 text-sm">
                  <li>Error codes due to power consumption differences</li>
                  <li>Flickering from incompatible electrical systems</li>
                  <li>Overheating in confined spaces</li>
                  <li>Glare issues affecting other drivers</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - Car Lights" />
      </div>
    </div>
  );
};

export default CarLightsPage;