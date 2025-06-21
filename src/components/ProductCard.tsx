import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ExternalLink } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  rating: number;
  price: string;
  image: string;
  features: string[];
  pros: string[];
  cons: string[];
  affiliate?: boolean;
  productId?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  description,
  rating,
  price,
  image,
  features,
  pros,
  cons,
  affiliate = false,
  productId
}) => {
  // Generate a URL-friendly product ID if not provided
  const urlProductId = productId || title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      {/* Product Image */}
      <div className="relative h-48 bg-gray-200">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {affiliate && (
          <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded">
            Best Choice
          </div>
        )}
      </div>

      {/* Product Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="ml-2 text-sm text-gray-600">({rating}/5)</span>
        </div>

        {/* Price */}
        <div className="text-2xl font-bold text-blue-600 mb-4">{price}</div>

        {/* Key Features */}
        <div className="mb-4">
          <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {features.slice(0, 3).map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-green-500 mr-2">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Pros and Cons */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <h5 className="font-medium text-green-600 mb-1">Pros:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              {pros.slice(0, 2).map((pro, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-green-500 mr-1">+</span>
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-medium text-red-600 mb-1">Cons:</h5>
            <ul className="text-sm text-gray-600 space-y-1">
              {cons.slice(0, 2).map((con, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-500 mr-1">-</span>
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Button */}
        <Link 
          to={`/product/${urlProductId}`}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Check Latest Price</span>
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;