import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ArrowRight, Zap, TrendingUp, Calendar, Clock } from 'lucide-react';

const ArticlesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All Articles' | 'Technology' | 'Buying Guide' | 'Installation' | 'Reviews'>('All Articles');

  const featuredArticle = articles.find(a => a.featured);
  
  const allCategories = ['All Articles', 'Technology', 'Buying Guide', 'Installation', 'Reviews'] as const;

  const getFilteredArticles = () => {
    if (activeTab === 'All Articles') {
      return articles;
    }
    return articles.filter(a => a.category === activeTab);
  };

  const filteredArticles = getFilteredArticles();

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">LED Lighting Articles & Guides</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
            Expert insights, buying guides, and the latest trends in LED lighting technology. Stay informed with our comprehensive articles and reviews.
          </p>
          <div className="flex justify-center space-x-6">
            <a href="#featured" className="flex items-center space-x-2 hover:underline">
              <Zap size={20} />
              <span>Expert Insights</span>
            </a>
            <a href="#latest" className="flex items-center space-x-2 hover:underline">
              <TrendingUp size={20} />
              <span>Latest Trends</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Featured Article */}
        {featuredArticle && (
          <section id="featured" className="mb-16">
            <h2 className="text-3xl font-bold mb-2">Featured Article</h2>
            <p className="text-gray-600 mb-8">Our top recommended read this week</p>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div className="relative">
                <img src={featuredArticle.imageUrl} alt={featuredArticle.title} className="w-full h-full object-cover" />
                <span className="absolute top-4 left-4 inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">Featured</span>
              </div>
              <div className="p-8">
                <div>
                  <span className="text-blue-600 text-sm font-semibold">{featuredArticle.category}</span>
                  <span className="text-gray-500 text-sm mx-2">•</span>
                  <span className="text-gray-500 text-sm">{new Date(featuredArticle.date).toLocaleDateString()}</span>
                  <span className="text-gray-500 text-sm mx-2">•</span>
                  <span className="text-gray-500 text-sm">{featuredArticle.readTime} min read</span>
                </div>
                <h3 className="text-2xl font-bold my-4">{featuredArticle.title}</h3>
                <p className="text-gray-700 mb-6">{featuredArticle.introduction}</p>
                <p className="text-sm text-gray-500 mb-6">By {featuredArticle.author}</p>
                <Link to={`/articles/${featuredArticle.id}`} className="inline-flex items-center bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                  Read Article <ArrowRight className="ml-2" size={20} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* Article Tabs & Latest Articles */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex justify-center mb-8">
            <div className="flex space-x-1 bg-gray-200 p-1 rounded-lg">
              {allCategories.map(category => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                    activeTab === category ? 'bg-white text-blue-600 shadow' : 'text-gray-600 hover:bg-gray-300'
                  }`}
                >
                  {category} ({category === 'All Articles' ? articles.length : articles.filter(a => a.category === category).length})
                </button>
              ))}
            </div>
          </div>

          <h2 className="text-3xl font-bold mb-8 text-center">Latest Articles</h2>
          <p className="text-gray-600 mb-12 text-center">Stay up to date with the latest LED lighting insights.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map(article => (
              <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col group">
                <Link to={`/articles/${article.id}`} className="block overflow-hidden">
                  <img src={article.imageUrl} alt={article.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" />
                </Link>
                <div className="p-6 flex-grow flex flex-col">
                  <span className="inline-block bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full mb-4">{article.category}</span>
                  <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                  <div className="flex items-center text-gray-500 text-sm space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{article.readTime} min read</span>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 flex-grow">{article.introduction}</p>
                  <Link to={`/articles/${article.id}`} className="inline-flex items-center text-blue-600 font-semibold mt-auto hover:underline">
                    Read More <ArrowRight className="ml-1" size={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-blue-700">
        <div className="container mx-auto px-4 py-12 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with LED Lighting Trends</h2>
          <p className="max-w-2xl mx-auto mb-8">Get the latest articles, reviews, and buying guides delivered to your inbox</p>
          <form className="max-w-md mx-auto flex">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full px-4 py-3 rounded-l-lg text-gray-800 focus:outline-none"
            />
            <button type="submit" className="bg-purple-600 text-white font-semibold px-6 py-3 rounded-r-lg hover:bg-purple-700 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ArticlesPage;