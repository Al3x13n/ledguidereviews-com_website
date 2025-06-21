import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ArrowLeft, ExternalLink, Shield, Zap, Award, CheckCircle, XCircle } from 'lucide-react';
import AdPlacement from '../components/AdPlacement';

import { allProducts } from '../data/products';

const productDatabase = allProducts;

const ProductDetailPage: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? productDatabase[productId as keyof typeof productDatabase] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            <span className="text-gray-400">/</span>
            <Link to={product.categoryPath} className="text-blue-600 hover:text-blue-800">{product.category}</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-600">{product.title}</span>
          </nav>
        </div>
      </div>

      {/* Product Header */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
              {product.affiliate && (
                <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  <Award className="h-4 w-4 inline mr-1" />
                  Editor's Choice
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.title}</h1>
              <p className="text-lg text-gray-600 mb-6">{product.description}</p>

              {/* Rating */}
              <div className="flex items-center mb-6">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-lg font-medium text-gray-700">
                  {product.rating}/5 (Based on expert review)
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-blue-600">{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">{product.originalPrice}</span>
                  )}
                </div>
                <p className="text-sm text-green-600 mt-1">✓ Best price found online</p>
              </div>

              {/* Key Features */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h3>
                <ul className="space-y-2">
                  {product.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2 text-lg font-semibold">
                  <ExternalLink className="h-5 w-5" />
                  <span>Check Latest Price & Buy Now</span>
                </button>
                <button className="w-full border-2 border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:border-gray-400 transition-colors">
                  Compare with Similar Products
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Rectangle Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="rectangle" position="After Product Header" />
      </div>

      {/* Detailed Review */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Review</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
              {product.detailedReview}
            </p>
          </div>
        </div>
      </section>

      {/* Pros and Cons */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Pros & Cons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pros */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-900 mb-4 flex items-center">
                <CheckCircle className="h-6 w-6 mr-2" />
                Pros
              </h3>
              <ul className="space-y-3">
                {product.pros.map((pro, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">+</span>
                    <span className="text-green-800">{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cons */}
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-red-900 mb-4 flex items-center">
                <XCircle className="h-6 w-6 mr-2" />
                Cons
              </h3>
              <ul className="space-y-3">
                {product.cons.map((con, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-500 mr-2 mt-1">-</span>
                    <span className="text-red-800">{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* AdSense Banner Ad */}
      <div className="flex justify-center py-8">
        <AdPlacement size="banner" position="Mid Product Page" />
      </div>

      {/* Specifications */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Technical Specifications</h2>
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="w-full">
              <tbody>
                {Object.entries(product.specifications).map(([key, value], index) => (
                  <tr key={key} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="px-6 py-4 font-medium text-gray-900 w-1/3">{key}</td>
                    <td className="px-6 py-4 text-gray-700">{value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Buying Guide */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Buy This?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {product.buyingGuide.map((guide, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{guide.title}</h3>
                <p className="text-gray-600">{guide.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Products */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Alternative Products to Consider</h2>
          <div className="bg-blue-50 p-6 rounded-lg">
            <ul className="space-y-3">
              {product.alternatives.map((alternative, index) => (
                <li key={index} className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-blue-900 font-medium">{alternative}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4">
              <Link
                to={product.categoryPath}
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                View all {product.category} reviews →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Purchase?</h2>
          <p className="text-blue-100 mb-6">
            Get the best deal on the {product.title} from our trusted retail partners.
          </p>
          <button className="bg-white text-blue-600 py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors font-semibold flex items-center justify-center space-x-2 mx-auto">
            <ExternalLink className="h-5 w-5" />
            <span>Check Latest Price & Reviews</span>
          </button>
        </div>
      </section>

      {/* Back to Category */}
      <div className="bg-gray-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={product.categoryPath}
            className="flex items-center text-blue-600 hover:text-blue-800 font-medium"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to {product.category}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;