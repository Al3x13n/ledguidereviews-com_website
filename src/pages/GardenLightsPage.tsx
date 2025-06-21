import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, Sun, Droplets } from 'lucide-react';

const GardenLightsPage: React.FC = () => {
  const products = [
    {
      title: 'URPOWER Solar Lights Outdoor 30 LED',
      description: 'Wireless solar-powered LED lights with motion sensor and waterproof design',
      rating: 4.4,
      price: '$24.99',
      image: 'https://images.pexels.com/photos/1394842/pexels-photo-1394842.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['30 bright LEDs', 'Solar powered', 'Motion sensor', 'IP65 waterproof', '120° detection angle'],
      pros: ['No wiring needed', 'Motion detection works well', 'Good brightness', 'Weatherproof'],
      cons: ['Battery life in winter', 'Plastic build quality', 'Limited mounting options'],
      affiliate: true
    },
    {
      title: 'Philips Hue Outdoor Lily Spot Light',
      description: 'Smart LED garden spotlight with millions of colors and app control',
      rating: 4.6,
      price: '$159.99',
      image: 'https://images.pexels.com/photos/1394842/pexels-photo-1394842.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['16 million colors', 'Smart app control', 'Weather resistant', 'Voice control', 'Professional grade'],
      pros: ['Excellent build quality', 'Amazing color options', 'Smart home integration', 'Professional look'],
      cons: ['Very expensive', 'Requires Hue Bridge', 'Complex setup']
    },
    {
      title: 'LITOM Solar Landscape Spotlights 12 LED',
      description: 'Adjustable solar LED spotlights perfect for highlighting garden features',
      rating: 4.3,
      price: '$34.99',
      image: 'https://images.pexels.com/photos/1394842/pexels-photo-1394842.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['12 bright LEDs', 'Adjustable angle', 'Auto on/off', 'Easy installation', 'Two lighting modes'],
      pros: ['Good value', 'Easy to install', 'Adjustable positioning', 'Bright output'],
      cons: ['Battery capacity', 'Build quality', 'Limited winter performance']
    },
    {
      title: 'Ring Smart Lighting Spotlight Battery',
      description: 'Smart security spotlight with motion detection and app notifications',
      rating: 4.5,
      price: '$89.99',
      image: 'https://images.pexels.com/photos/1394842/pexels-photo-1394842.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Motion detection', 'App notifications', 'Battery powered', 'Smart connectivity', 'Security focused'],
      pros: ['Smart features', 'Good motion detection', 'App integration', 'Security benefits'],
      cons: ['Battery replacement', 'Subscription for features', 'Higher price']
    },
    {
      title: 'MAGGIFT Solar Pathway Lights 8-Pack',
      description: 'Decorative solar pathway lights with warm white LED and stake installation',
      rating: 4.2,
      price: '$39.99',
      image: 'https://images.pexels.com/photos/1394842/pexels-photo-1394842.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['8-pack value', 'Warm white LED', 'Auto on/off', 'Ground stake', 'Weather resistant'],
      pros: ['Good value pack', 'Easy installation', 'Nice warm light', 'Decorative design'],
      cons: ['Plastic construction', 'Limited brightness', 'Inconsistent solar charging']
    },
    {
      title: 'DEWENWILS Low Voltage LED Landscape Kit',
      description: 'Professional 12V LED landscape lighting kit with transformer and fixtures',
      rating: 4.4,
      price: '$129.99',
      image: 'https://images.pexels.com/photos/1394842/pexels-photo-1394842.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['12V low voltage', 'Professional transformer', '6 LED fixtures', 'Wire connectors', 'Timer function'],
      pros: ['Professional quality', 'Reliable operation', 'Good brightness', 'Timer control'],
      cons: ['Installation complexity', 'Higher upfront cost', 'Wiring required']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Power Source',
      description: 'Choose between solar (no wiring), low voltage (reliable), or battery (portable) based on your needs.',
      icon: <Sun className="h-6 w-6" />
    },
    {
      title: 'Weather Resistance',
      description: 'Look for IP65 or higher rating to ensure lights withstand rain, snow, and temperature changes.',
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: 'Lighting Purpose',
      description: 'Security lights need motion sensors and bright output, while accent lights focus on aesthetics.',
      icon: <Info className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best LED Garden Lights 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Transform your outdoor space with our top-rated LED garden lights. Expert reviews 
              of solar, low voltage, and smart lighting solutions.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>700 monthly searches</span>
              </div>
              <div className="flex items-center">
                <Droplets className="h-5 w-5 text-blue-300 mr-2" />
                <span>Weather tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - Garden Lights" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Garden Light Buying Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyingGuidePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
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
              Top LED Garden Light Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best LED garden lights for security, aesthetics, and outdoor functionality
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

      {/* Installation and Maintenance Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Garden Lighting Installation & Maintenance
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-green-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-green-900 mb-4">Planning Your Layout</h3>
              <ul className="text-green-800 space-y-2">
                <li>Create a lighting plan on paper before purchasing</li>
                <li>Consider different light types for various purposes</li>
                <li>Plan power sources and cable runs for wired systems</li>
                <li>Test solar light locations for adequate sun exposure</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-blue-900 mb-3">Solar Light Tips</h4>
                <ul className="text-blue-800 space-y-2 text-sm">
                  <li>Place in areas with 6+ hours of direct sunlight</li>
                  <li>Clean solar panels monthly for best performance</li>
                  <li>Replace batteries every 1-2 years</li>
                  <li>Bring indoors during extreme weather</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-yellow-900 mb-3">Low Voltage Systems</h4>
                <ul className="text-yellow-800 space-y-2 text-sm">
                  <li>Use GFCI-protected transformers</li>
                  <li>Bury cables 6-8 inches deep</li>
                  <li>Use waterproof wire connectors</li>
                  <li>Consider voltage drop over long runs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - Garden Lights" />
      </div>
    </div>
  );
};

export default GardenLightsPage;