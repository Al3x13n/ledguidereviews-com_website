import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, Zap, Shield } from 'lucide-react';

const FlashlightsPage: React.FC = () => {
  const products = [
    {
      title: 'Streamlight ProTac HL-X 1000 Lumen',
      description: 'Professional tactical flashlight with dual fuel capability and multiple modes',
      rating: 4.8,
      price: '$59.99',
      image: 'https://images.pexels.com/photos/1209969/pexels-photo-1209969.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['1000 lumens output', 'Dual fuel (CR123A/18650)', 'IPX7 waterproof', 'Ten-Tap programming', 'Durable construction'],
      pros: ['Extremely bright', 'Versatile power options', 'Military-grade durability', 'Programmable modes'],
      cons: ['Higher price point', 'Heavy weight', 'Complex operation for beginners'],
      affiliate: true
    },
    {
      title: 'Anker Bolder LC40 LED Flashlight',
      description: 'Compact LED flashlight with zoom function and multiple brightness modes',
      rating: 4.4,
      price: '$19.99',
      image: 'https://images.pexels.com/photos/1209969/pexels-photo-1209969.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['400 lumens', 'Zoom function', '5 light modes', 'Water resistant', 'Rechargeable battery'],
      pros: ['Great value', 'Compact size', 'Good battery life', 'Easy to use'],
      cons: ['Build quality', 'Limited brightness', 'Basic features']
    },
    {
      title: 'Fenix PD36R Rechargeable Flashlight',
      description: 'High-performance rechargeable flashlight with USB-C charging',
      rating: 4.7,
      price: '$89.99',
      image: 'https://images.pexels.com/photos/1209969/pexels-photo-1209969.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['1600 lumens', 'USB-C rechargeable', 'IP68 waterproof', 'Tactical switch', 'Premium materials'],
      pros: ['Excellent build quality', 'USB-C charging', 'Very bright', 'Waterproof design'],
      cons: ['Expensive', 'Heavy', 'Complex interface']
    },
    {
      title: 'Maglite ML300L 3-Cell D LED',
      description: 'Classic American-made LED flashlight with adjustable beam focus',
      rating: 4.5,
      price: '$49.99',
      image: 'https://images.pexels.com/photos/1209969/pexels-photo-1209969.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['625 lumens', 'Adjustable beam', 'American made', 'Durable aluminum', '4 modes'],
      pros: ['Made in USA', 'Legendary durability', 'Adjustable focus', 'Long runtime'],
      cons: ['Heavy weight', 'Large size', 'Uses D batteries']
    },
    {
      title: 'Olight Warrior Mini 2 Tactical',
      description: 'Compact tactical flashlight with proximity sensor and magnetic charging',
      rating: 4.6,
      price: '$79.99',
      image: 'https://images.pexels.com/photos/1209969/pexels-photo-1209969.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['1750 lumens', 'Proximity sensor', 'Magnetic charging', 'Tactical design', 'Multiple modes'],
      pros: ['Very bright', 'Innovative features', 'Compact size', 'Quality construction'],
      cons: ['Premium price', 'Proprietary charging', 'Complex operation']
    },
    {
      title: 'Energizer LED Tactical Flashlight',
      description: 'Budget-friendly tactical-style LED flashlight with reliable performance',
      rating: 4.1,
      price: '$14.99',
      image: 'https://images.pexels.com/photos/1209969/pexels-photo-1209969.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['300 lumens', 'Tactical design', 'Water resistant', 'Impact resistant', 'AA batteries'],
      pros: ['Very affordable', 'Reliable brand', 'Easy to find batteries', 'Simple operation'],
      cons: ['Basic build quality', 'Limited brightness', 'No advanced features']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Brightness & Range',
      description: 'Consider lumens output and beam distance for your intended use - from 100 lumens for basic tasks to 1000+ for tactical use.',
      icon: <Zap className="h-6 w-6" />
    },
    {
      title: 'Durability',
      description: 'Look for impact resistance, waterproof ratings (IPX4-IPX8), and quality construction materials.',
      icon: <Shield className="h-6 w-6" />
    },
    {
      title: 'Power Source',
      description: 'Choose between disposable batteries (AA/AAA), rechargeable lithium-ion, or dual-fuel options.',
      icon: <Info className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best LED Flashlights 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Reliable portable lighting for any situation. Expert reviews of tactical, 
              everyday carry, and emergency LED flashlights.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>2,000 monthly searches</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-blue-300 mr-2" />
                <span>Durability tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - Flashlights" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Flashlight Buying Guide
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
              Top LED Flashlight Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best LED flashlights for tactical, outdoor, and everyday use
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

      {/* Usage and Maintenance Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Flashlight Usage & Maintenance Guide
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Choosing the Right Flashlight</h3>
              <ul className="text-blue-800 space-y-2">
                <li>EDC (Everyday Carry): 100-300 lumens, compact size, reliable</li>
                <li>Home/Emergency: 300-600 lumens, good runtime, easy operation</li>
                <li>Tactical/Professional: 600+ lumens, durable, multiple modes</li>
                <li>Outdoor/Camping: Variable output, long runtime, weather resistant</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Maintenance Tips</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>Clean battery contacts regularly</li>
                  <li>Remove batteries during long-term storage</li>
                  <li>Check O-rings and lubricate if needed</li>
                  <li>Test functionality monthly</li>
                </ul>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-orange-900 mb-3">Battery Best Practices</h4>
                <ul className="text-orange-800 space-y-2 text-sm">
                  <li>Use quality batteries from reputable brands</li>
                  <li>Don't mix old and new batteries</li>
                  <li>Store rechargeable batteries at 40-60% charge</li>
                  <li>Avoid extreme temperatures</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - Flashlights" />
      </div>
    </div>
  );
};

export default FlashlightsPage;