import React from 'react';
import ProductCard from '../components/ProductCard';
import AdPlacement from '../components/AdPlacement';
import { Star, Info, Droplets, Shield } from 'lucide-react';

const BathroomLightsPage: React.FC = () => {
  const products = [
    {
      title: 'Philips LED Vanity Light Bar 24"',
      description: 'Modern LED vanity light with frosted glass and energy-efficient design',
      rating: 4.5,
      price: '$79.99',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['24" length', 'Integrated LED', 'Frosted glass', 'Dimmable', 'Wet location rated'],
      pros: ['Even light distribution', 'Modern design', 'Energy efficient', 'Easy installation'],
      cons: ['Higher price', 'Fixed LED not replaceable', 'Limited length options'],
      affiliate: true
    },
    {
      title: 'Kohler Purist LED Mirror Light',
      description: 'Premium LED mirror light with clean lines and integrated design',
      rating: 4.6,
      price: '$199.99',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Integrated mirror mount', 'Premium materials', 'Even illumination', 'Multiple sizes', 'Wet rated'],
      pros: ['Premium quality', 'Sleek design', 'Excellent light quality', 'Professional look'],
      cons: ['Very expensive', 'Professional installation recommended', 'Limited compatibility']
    },
    {
      title: 'Home Decorators LED Ceiling Light',
      description: 'Flush mount LED ceiling light perfect for bathroom general lighting',
      rating: 4.3,
      price: '$49.99',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Flush mount design', '15" diameter', 'Integrated LED', 'Wet location rated', 'Modern style'],
      pros: ['Good value', 'Bright output', 'Easy installation', 'Moisture resistant'],
      cons: ['Basic design', 'Not dimmable', 'Plastic construction']
    },
    {
      title: 'Progress Lighting LED Bath Bar',
      description: 'Traditional style LED bath bar with multiple finish options',
      rating: 4.4,
      price: '$89.99',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Multiple finishes', '3-light design', 'Replaceable LED bulbs', 'Traditional style', 'UL listed'],
      pros: ['Replaceable bulbs', 'Quality construction', 'Multiple finishes', 'Good warranty'],
      cons: ['Traditional design only', 'Bulbs sold separately', 'Higher profile']
    },
    {
      title: 'Sunco LED Recessed Downlights 4-Pack',
      description: 'Recessed LED downlights perfect for bathroom ceiling installation',
      rating: 4.2,
      price: '$64.99',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['4-pack value', '6" trim', 'Dimmable', 'Wet location rated', 'Easy retrofit'],
      pros: ['Great value pack', 'Dimmable', 'Clean look', 'Easy to install'],
      cons: ['Requires ceiling work', 'Basic trim design', 'Standard performance']
    },
    {
      title: 'Moen LED Motion Sensor Night Light',
      description: 'Under-cabinet LED light with motion sensor for nighttime bathroom use',
      rating: 4.1,
      price: '$34.99',
      image: 'https://images.pexels.com/photos/1454804/pexels-photo-1454804.jpeg?auto=compress&cs=tinysrgb&w=300',
      features: ['Motion sensor', 'Battery powered', 'Under-cabinet mount', 'Warm white LED', 'Auto shut-off'],
      pros: ['No wiring needed', 'Motion activation', 'Good for nighttime', 'Easy installation'],
      cons: ['Battery replacement', 'Limited brightness', 'Basic build quality']
    }
  ];

  const buyingGuidePoints = [
    {
      title: 'Moisture Resistance',
      description: 'Choose fixtures rated for wet or damp locations (IP44 or higher) to handle bathroom humidity.',
      icon: <Droplets className="h-6 w-6" />
    },
    {
      title: 'Light Quality',
      description: 'Look for high CRI (90+) and appropriate color temperature (3000K-4000K) for accurate color rendering.',
      icon: <Star className="h-6 w-6" />
    },
    {
      title: 'Safety Standards',
      description: 'Ensure fixtures are UL listed and follow local electrical codes for bathroom installations.',
      icon: <Shield className="h-6 w-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Best LED Bathroom Lights 2025
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">
              Illuminate your bathroom with our top-rated LED fixtures. Expert reviews 
              of vanity lights, ceiling fixtures, and moisture-resistant solutions.
            </p>
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <Star className="h-5 w-5 text-yellow-400 mr-2" />
                <span>1,100 monthly searches</span>
              </div>
              <div className="flex items-center">
                <Droplets className="h-5 w-5 text-blue-300 mr-2" />
                <span>Moisture tested</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Hero - Bathroom Lights" />
      </div>

      {/* Quick Buying Guide */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            LED Bathroom Light Buying Guide
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {buyingGuidePoints.map((point, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-cyan-100 p-2 rounded-lg mr-4">
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
              Top LED Bathroom Light Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Detailed reviews of the best LED bathroom lights for vanity, general, and accent lighting
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

      {/* Bathroom Lighting Design Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Bathroom Lighting Design Guide
          </h2>
          <div className="prose prose-lg max-w-none">
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">Layered Lighting Approach</h3>
              <ul className="text-blue-800 space-y-2">
                <li>Ambient lighting: General illumination for the entire space</li>
                <li>Task lighting: Focused light for grooming activities</li>
                <li>Accent lighting: Decorative elements and visual interest</li>
                <li>Safety lighting: Night lights for navigation</li>
              </ul>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-green-900 mb-3">Vanity Lighting</h4>
                <ul className="text-green-800 space-y-2 text-sm">
                  <li>Place fixtures at eye level, 36-40" above floor</li>
                  <li>Use fixtures on both sides of mirror when possible</li>
                  <li>Choose 3000K-4000K color temperature</li>
                  <li>Ensure even light distribution across face</li>
                </ul>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-900 mb-3">Safety Considerations</h4>
                <ul className="text-purple-800 space-y-2 text-sm">
                  <li>Use GFCI protection for all bathroom circuits</li>
                  <li>Choose wet-rated fixtures near tub/shower</li>
                  <li>Install proper switches outside wet areas</li>
                  <li>Consider motion sensors for convenience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final AdSense Ad */}
      <div className="flex justify-center py-8 bg-gray-50">
        <AdPlacement size="banner" position="Before Footer - Bathroom Lights" />
      </div>
    </div>
  );
};

export default BathroomLightsPage;