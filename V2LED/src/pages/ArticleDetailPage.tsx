import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles';
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, ChevronRight } from 'lucide-react';

const ArticleDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = articles.find((a) => a.id === articleId);

  if (!article) {
    return (
      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you're looking for doesn't exist.</p>
            <Link
              to="/articles"
              className="inline-flex items-center text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Get related articles (exclude current article)
  const relatedArticles = articles
    .filter(a => a.id !== article.id && a.category === article.category)
    .slice(0, 3);

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav className="flex items-center text-sm text-gray-500 mb-8">
            <Link to="/" className="hover:text-gray-700">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link to="/articles" className="hover:text-gray-700">Articles</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">{article.category}</span>
          </nav>

          {/* Article Header */}
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {article.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{article.author}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(article.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {article.readTime} min read
                    </span>
                  </div>
                </div>
              </div>

              {/* Share and Save Buttons */}
              <div className="flex items-center gap-2">
                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  <Share2 className="w-5 h-5 text-gray-600" />
                </button>
                <button className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors">
                  <Bookmark className="w-5 h-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <img 
              src={article.imageUrl} 
              alt={article.title}
              className="w-full h-96 object-cover rounded-xl mb-8"
            />
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none mb-12 prose-headings:mt-12 prose-headings:mb-6 prose-p:mb-6 prose-p:leading-relaxed prose-ul:mb-6 prose-li:mb-2">
            <p className="lead text-xl text-gray-600 mb-8 leading-relaxed">{article.introduction}</p>
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          {/* Keywords */}
          <div className="border-t border-gray-200 pt-8 mb-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Related Keywords</h3>
            <div className="flex flex-wrap gap-2">
              {article.keywords.map((keyword, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-gray-200 transition-colors cursor-pointer"
                >
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="border-t border-gray-200 pt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {relatedArticles.map((relatedArticle) => (
                  <Link 
                    key={relatedArticle.id}
                    to={`/articles/${relatedArticle.id}`}
                    className="group"
                  >
                    <article className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      <img 
                        src={relatedArticle.imageUrl} 
                        alt={relatedArticle.title}
                        className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                      />
                      <div className="p-4">
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide">
                          {relatedArticle.category}
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mt-2 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-gray-600 line-clamp-2">
                          {relatedArticle.introduction}
                        </p>
                        <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                          <span>{relatedArticle.author}</span>
                          <span>{relatedArticle.readTime} min read</span>
                        </div>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArticleDetailPage;