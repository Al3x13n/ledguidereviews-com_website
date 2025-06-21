import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, ChefHat, Lightbulb } from 'lucide-react';

const KitchenLightsPage: React.FC = () => {
  const products = [
    {
      title: 'Philips Hue Under Cabinet Light Strip',
      description: 'Smart LED under cabinet lighting with color changing and app control',
      rating: 4.6,
      price: '$89.99',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Under cabinet design', 'Smart app control', '16 million colors', 'Voice control', 'Linkable'],
      pros: ['Excellent build quality', 'Great smart features', 'Even light distribution', 'Easy installation'],
      cons: ['Expensive', 'Requires Hue Bridge', 'Complex for basic use'],
      affiliate: true
    },
    {
      title: 'GE Enbrighten LED Under Cabinet Lights',
      description: 'Linkable LED under cabinet lights with direct wire or plug-in options',
      rating: 4.4,
      price: '$34.99',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['12" length', 'Linkable design', 'Direct wire or plug-in', 'Touch on/off', 'Energy efficient'],
      pros: ['Good value', 'Easy to link', 'Bright output', 'Multiple installation options'],
      cons: ['Basic features', 'No dimming', 'Standard design']
    },
    {
      title: 'WAC Lighting LED Task Light Bar',
      description: 'Professional LED task lighting with adjustable beam angle',
      rating: 4.5,
      price: '$69.99',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Adjustable beam', 'Professional grade', 'Dimmable', 'Multiple lengths', 'High CRI'],
      pros: ['Professional quality', 'Adjustable beam', 'Excellent light quality', 'Dimmable'],
      cons: ['Higher price', 'Professional installation recommended', 'Complex controls']
    },
    {
      title: 'Brilliant Evolution Wireless LED Puck Lights',
      description: 'Battery-powered LED puck lights with remote control',
      rating: 4.2,
      price: '$49.99',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['3-pack with remote', 'Battery powered', 'Wireless installation', 'Dimmable', 'Timer function'],
      pros: ['No wiring needed', 'Remote control', 'Easy installation', 'Good brightness'],
      cons: ['Battery replacement', 'Limited runtime', 'Basic build quality']
    },
    {
      title: 'Kichler LED Pendant Light',
      description: 'Modern LED pendant light perfect for kitchen islands and dining areas',
      rating: 4.3,
      price: '$149.99',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Pendant design', 'Integrated LED', 'Multiple finishes', 'Dimmable', 'Modern style'],
      pros: ['Stylish design', 'Good light output', 'Quality construction', 'Multiple finishes'],
      cons: ['Fixed LED', 'Installation complexity', 'Higher price']
    },
    {
      title: 'Govee LED Strip Lights for Kitchen',
      description: 'Smart LED strip lights designed for kitchen cabinet installation',
      rating: 4.1,
      price: '$29.99',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['32.8ft length', 'App control', 'Music sync', 'Multiple colors', 'Easy installation'],
      pros: ['Great value', 'Long length', 'Color options', 'App control'],
      cons: ['Consumer grade', 'Adhesive quality', 'Basic mounting']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Task Lighting',
      description: 'Focus on under-cabinet and pendant lights to illuminate work surfaces and cooking areas effectively.',
      icon: <ChefHat className="h-6 w-6" />
    },
    {
      title: 'Color Temperature',
      description: 'Choose 3000K-4000K for food preparation areas and warmer tones for dining spaces.',
      icon: <Lightbulb className="h-6 w-6" />
    },
    {
      title: 'Installation Type',
      description: 'Consider hardwired for permanent fixtures, plug-in for flexibility, or battery for no-wire solutions.',
      icon: <Info className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best LED Kitchen Lights 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">
              Brighten your culinary space with our top-rated LED kitchen lighting. Expert reviews 
              of under-cabinet, pendant, and task lighting solutions.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>1,300 monthly searches</span>
              </div>
              <div className="flex items-center">
                <ChefHat className="h-5 w-5 text-orange-300 mr-2" />
                <span>Chef approved</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - Kitchen Lights" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Kitchen Light Buying Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyingGuidePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-orange-100 p-2 rounded-lg mr-4">
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
              Top LED Kitchen Light Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best LED kitchen lights for task, ambient, and accent lighting
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

      {/* Kitchen Lighting Design Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Kitchen Lighting Design Guide
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-orange-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-orange-900 mb-4">Three-Layer Lighting Approach</h3>
              <ul className="text-orange-800 space-y-2">
                <li>General lighting: Overall illumination for the entire kitchen</li>
                <li>Task lighting: Focused light for food preparation and cooking</li>
                <li>Accent lighting: Decorative elements and ambiance</li>
                <li>Natural light: Maximize daylight when possible</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Under-Cabinet Lighting</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>Install 1-2" from front edge of cabinet</li>
                  <li>Use 3000K color temperature for food prep</li>
                  <li>Space fixtures evenly for uniform coverage</li>
                  <li>Consider dimming for ambiance options</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Pendant Lighting</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>Hang 30-36" above island or counter</li>
                  <li>Space multiple pendants 24-30" apart</li>
                  <li>Choose downward-focused beam patterns</li>
                  <li>Install on separate dimmer switches</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - Kitchen Lights" />
      </div>
    </div>
  );
};

export default KitchenLightsPage;