import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/seo/SEO";
import { blogPosts } from "../data/blog";
import { FiArrowRight, FiBookOpen, FiCalendar, FiClock } from "react-icons/fi";
import "../styles/components/Blog.css";

const BlogPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ["All", "Backend", "Frontend", "Database"];

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === activeCategory);

  const blogStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://inioluwa-dev.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Blog",
        "item": "https://inioluwa-dev.vercel.app/blog"
      }
    ]
  };

  return (
    <div className="page page--blog animate-fade-in-up">
      <SEO
        title="Technical Articles & Engineering Guides | Inioluwa Olayoriju"
        description="Read technical guides on building OCR tools, Python FastAPI thread optimization, Redis caching patterns, and database scaling."
        url="https://inioluwa-dev.vercel.app/blog"
        structuredData={blogStructuredData}
      />
      <Navbar />

      <main className="blog-main">
        <div className="container">
          {/* Header */}
          <div className="blog-header text-center">
            <h1 className="blog-title">
              Technical <span className="text-gradient">Articles</span>
            </h1>
            <p className="blog-subtitle">
              Writing about backend systems optimization, software architecture patterns, and responsive UI interfaces.
            </p>
          </div>

          {/* Filter Categories */}
          <div className="blog-filters">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                className={`blog-filter-btn ${
                  activeCategory === cat ? "blog-filter-btn--active" : ""
                }`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="blog-grid">
            {filteredPosts.map((post, idx) => (
              <article key={post.id} className="blog-card card-glass animate-scale-in" style={{ '--delay': `${idx * 0.1}s` }}>
                <div className="blog-card-image">
                  <img 
                    src={post.coverImage} 
                    alt={`${post.title} cover`} 
                    loading="lazy" 
                    decoding="async" 
                  />
                  <span className="blog-category-tag">{post.category}</span>
                </div>
                <div className="blog-card-content">
                  <div className="blog-card-meta">
                    <span className="meta-item">
                      <FiCalendar />
                      {post.date}
                    </span>
                    <span className="meta-item">
                      <FiClock />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="blog-card-summary">{post.summary}</p>
                  <div className="blog-card-tags">
                    {post.tags.slice(0, 3).map((tag, i) => (
                      <span key={i} className="blog-tag-badge">#{tag}</span>
                    ))}
                  </div>
                  <div className="blog-card-footer">
                    <Link to={`/blog/${post.id}`} className="read-post-btn">
                      <span>Read Article</span>
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="blog-empty-state card-glass text-center">
              <FiBookOpen size={48} className="empty-icon" />
              <h3>No articles found</h3>
              <p>I haven't written any posts under the {activeCategory} category yet. Stay tuned!</p>
              <button className="btn btn-primary" onClick={() => setActiveCategory("All")}>
                Show All Articles
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;
