import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, Moon, Baby } from 'lucide-react';

const NightLightsPage: React.FC = () => {
  const products = [
    {
      title: 'VAVA Baby Night Light VA-CL006',
      description: 'Soft silicone night light with touch control and timer function',
      rating: 4.6,
      price: '$19.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Soft silicone design', 'Touch control', '1-hour timer', 'USB rechargeable', 'Warm light'],
      pros: ['Safe for children', 'Long battery life', 'Cute design', 'Easy to use'],
      cons: ['Limited brightness levels', 'No color options', 'Small size'],
      affiliate: true,
      productId: 'vava-baby-night-light-va-cl006'
    },
    {
      title: 'Philips LED Motion Sensor Night Light',
      description: 'Automatic motion-activated night light with adjustable brightness',
      rating: 4.4,
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Motion sensor', 'Adjustable brightness', 'Wall plug design', 'Auto shut-off'],
      pros: ['Hands-free operation', 'Energy efficient', 'Good sensitivity', 'Reliable brand'],
      cons: ['Plug-in only', 'Basic design', 'No customization']
    },
    {
      title: 'Hatch Rest Sound Machine & Night Light',
      description: 'Smart sound machine with customizable night light and app control',
      rating: 4.5,
      price: '$79.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Sound machine combo', 'App control', 'Multiple colors', 'Timer function', 'Sleep programs'],
      pros: ['Multi-functional', 'Great app control', 'Good sound quality', 'Customizable'],
      cons: ['Expensive', 'Complex for simple use', 'Requires WiFi']
    },
    {
      title: 'GE LED+ Night Light Bulb',
      description: 'Standard A19 bulb with built-in light sensor for automatic night lighting',
      rating: 4.2,
      price: '$12.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Standard A19 socket', 'Built-in light sensor', 'Automatic activation', 'Energy efficient'],
      pros: ['Fits standard fixtures', 'Auto on/off', 'Very affordable', 'Energy efficient'],
      cons: ['Basic functionality', 'No brightness control', 'Limited placement']
    },
    {
      title: 'MAZ-TEK Plug-in LED Night Light 6-Pack',
      description: 'Pack of motion sensor night lights with warm white LED',
      rating: 4.1,
      price: '$18.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['6-pack value', 'Motion sensor', 'Plug-in design', 'Warm white LED', 'Compact size'],
      pros: ['Great value', 'Multiple lights', 'Easy installation', 'Good for hallways'],
      cons: ['Basic quality', 'No adjustability', 'Plug blocks outlets']
    },
    {
      title: 'DEWENWILS Smart Night Light Switch',
      description: 'Smart light switch with built-in night light and motion sensor',
      rating: 4.3,
      price: '$32.99',
      image: 'https://images.pexels.com/photos/1329297/pexels-photo-1329297.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Replaces wall switch', 'Motion sensor', 'Smart control', 'Integrated night light'],
      pros: ['Replaces existing switch', 'Smart features', 'No batteries needed', 'Clean look'],
      cons: ['Installation required', 'More expensive', 'Limited compatibility']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Safety First',
      description: 'Choose night lights with cool-running LEDs, child-safe materials, and proper certifications.',
      icon: <Baby className="h-6 w-6" />
    },
    {
      title: 'Light Quality',
      description: 'Warm white (2700K-3000K) is best for night lighting as it doesn\'t disrupt sleep patterns.',
      icon: <Moon className="h-6 w-6" />
    },
    {
      title: 'Power Options',
      description: 'Consider plug-in for hallways, battery for portability, and hardwired for permanent installation.',
      icon: <Info className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best LED Night Lights 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Safe, gentle illumination for nighttime navigation. Expert reviews of the best 
              LED night lights for bedrooms, nurseries, and hallways.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>900 monthly searches</span>
              </div>
              <div className="flex items-center">
                <Moon className="h-5 w-5 text-blue-300 mr-2" />
                <span>Sleep-friendly tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - Night Lights" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Night Light Buying Guide
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
              Top LED Night Light Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best LED night lights for safety, comfort, and convenience
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

      {/* Sleep and Safety Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Night Light Sleep & Safety Tips
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Sleep-Friendly Lighting</h3>
              <ul className="text-blue-800 space-y-2">
                <li>Use warm white LEDs (2700K-3000K) to minimize sleep disruption</li>
                <li>Keep brightness as low as possible while maintaining safety</li>
                <li>Position lights low to avoid direct eye contact</li>
                <li>Consider red or amber LEDs for minimal circadian impact</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Best Placement</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>Hallways: Motion sensor lights at floor level</li>
                  <li>Bedrooms: Soft ambient lights away from bed</li>
                  <li>Bathrooms: Behind toilet or near floor</li>
                  <li>Nurseries: Warm, dimmable lights for feeding</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Safety Features</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>Cool-running LED technology</li>
                  <li>Automatic shut-off timers</li>
                  <li>Motion sensor activation</li>
                  <li>Child-safe materials and design</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - Night Lights" />
      </div>
    </div>
  );
};

export default NightLightsPage;