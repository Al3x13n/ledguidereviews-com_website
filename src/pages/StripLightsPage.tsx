import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, Zap, Home } from 'lucide-react';

const StripLightsPage: React.FC = () => {
  const products = [
    {
      title: 'Govee WiFi LED Strip Lights 32.8ft',
      description: 'Smart LED strip lights with app control, music sync, and voice control compatibility',
      rating: 4.5,
      price: '$29.99',
      image: 'https://images.pexels.com/photos/1406765/pexels-photo-1406765.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['32.8ft length', 'WiFi app control', 'Music sync', '16 million colors', 'Voice control'],
      pros: ['Easy installation', 'Excellent app control', 'Great color variety', 'Music sync works well'],
      cons: ['Adhesive could be stronger', 'WiFi setup can be tricky'],
      affiliate: true,
      productId: 'govee-wifi-led-strip-lights-32-8ft'
    },
    {
      title: 'Philips Hue Lightstrip Plus 6.6ft',
      description: 'Premium smart LED strip with Zigbee connectivity and ecosystem integration',
      rating: 4.7,
      price: '$89.99',
      image: 'https://images.pexels.com/photos/1406765/pexels-photo-1406765.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['6.6ft base + extensions', 'Zigbee protocol', 'HomeKit compatible', 'Premium build'],
      pros: ['Excellent build quality', 'Reliable connectivity', 'Ecosystem integration'],
      cons: ['Expensive', 'Requires Hue Bridge', 'Shorter base length']
    },
    {
      title: 'LIFX Z LED Strip Light 6.6ft',
      description: 'High-quality WiFi LED strip with zones and no hub required',
      rating: 4.4,
      price: '$69.99',
      image: 'https://images.pexels.com/photos/1406765/pexels-photo-1406765.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Multi-zone control', 'No hub required', 'WiFi direct', 'Bright output'],
      pros: ['No hub needed', 'Multiple zones', 'Very bright', 'Good app'],
      cons: ['Higher price point', 'WiFi can be unstable']
    },
    {
      title: 'Nanoleaf Essentials Light Strip 6.6ft',
      description: 'Thread-enabled LED strip with Matter support and rich colors',
      rating: 4.3,
      price: '$49.99',
      image: 'https://images.pexels.com/photos/1406765/pexels-photo-1406765.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Thread/Matter support', '6.6ft length', 'Rich colors', 'HomeKit native'],
      pros: ['Future-proof connectivity', 'Good color accuracy', 'Native HomeKit'],
      cons: ['Requires Thread border router', 'Limited length options']
    },
    {
      title: 'KASA Smart Light Strip KL430',
      description: 'Affordable smart LED strip with reliable performance and easy setup',
      rating: 4.2,
      price: '$34.99',
      image: 'https://images.pexels.com/photos/1406765/pexels-photo-1406765.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['16.4ft length', 'Kasa app control', 'Voice control', 'Affordable pricing'],
      pros: ['Great value', 'Easy setup', 'Reliable app', 'Good length'],
      cons: ['Basic features', 'No music sync', 'Limited customization']
    },
    {
      title: 'WiZ Connected Color Light Strip 16.4ft',
      description: 'Budget-friendly smart LED strip with good performance and features',
      rating: 4.1,
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1406765/pexels-photo-1406765.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['16.4ft length', 'WiZ app control', 'Preset scenes', 'Budget-friendly'],
      pros: ['Very affordable', 'Good app', 'Multiple scenes', 'Easy installation'],
      cons: ['Basic build quality', 'Limited advanced features', 'Weak adhesive']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Length Requirements',
      description: 'Measure your installation area carefully. Most strips come in 6.6ft, 16.4ft, or 32.8ft lengths.',
      icon: <Home className="h-6 w-6" />
    },
    {
      title: 'Smart Features',
      description: 'Consider WiFi vs Zigbee connectivity, app control, voice compatibility, and music sync.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Installation',
      description: 'Check adhesive quality, cutting points, and whether you need mounting channels.',
      icon: <Info className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best LED Strip Lights 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Transform your space with our top-rated LED strip lights. Comprehensive reviews, 
              installation guides, and buying recommendations.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>1,200 monthly searches</span>
              </div>
              <div className="flex items-center">
                <Info className="h-5 w-5 text-blue-300 mr-2" />
                <span>Expert tested & reviewed</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - Strip Lights" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Strip Lights Buying Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyingGuidePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
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
              Top LED Strip Lights Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best LED strip lights based on performance, features, and value
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

      {/* Installation Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Strip Light Installation Tips
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Before You Start</h3>
              <ul className="text-blue-800 space-y-2">
                <li>Clean the installation surface thoroughly with alcohol</li>
                <li>Plan your route and measure twice before cutting</li>
                <li>Test the strip lights before permanent installation</li>
                <li>Consider using mounting channels for a professional look</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Best Practices</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>Use corner connectors for 90-degree turns</li>
                  <li>Allow for thermal expansion in long runs</li>
                  <li>Consider power injection for runs over 16 feet</li>
                  <li>Test all connections before final installation</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">Common Mistakes</h4>
                <ul className="text-yellow-800 space-y-2 text-sm">
                  <li>Not cleaning the surface before installation</li>
                  <li>Cutting at the wrong points</li>
                  <li>Overstretching the strips around corners</li>
                  <li>Insufficient power supply planning</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - Strip Lights" />
      </div>
    </div>
  );
};

export default StripLightsPage;