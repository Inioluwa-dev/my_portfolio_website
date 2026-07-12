import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/seo/SEO";
import { blogPosts } from "../data/blog";
import { FiArrowLeft, FiCalendar, FiClock, FiShare2, FiFolder } from "react-icons/fi";
import "../styles/components/BlogPost.css";

const BlogPostPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="page page--not-found">
        <Navbar />
        <main className="not-found-main">
          <div className="container text-center">
            <h2>Article Not Found</h2>
            <p>The post you are trying to access does not exist or has been archived.</p>
            <Link to="/blog" className="btn btn-primary">
              <FiArrowLeft />
              <span>Back to Blog</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post.title,
        text: post.summary,
        url: window.location.href,
      }).catch(console.error);
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Article link copied to clipboard!");
    }
  };

  return (
    <div className="page page--blog-post animate-fade-in-up">
      <SEO
        title={`${post.title} | Mr Heritage`}
        description={post.summary}
        keywords={post.tags.join(", ")}
        url={`https://mr-heritage.name.ng/blog/${post.id}`}
        image={post.coverImage}
      />
      <Navbar />

      <main className="post-main">
        <article className="container post-container">
          {/* Back Link */}
          <Link to="/blog" className="back-link">
            <FiArrowLeft />
            <span>Back to Blog</span>
          </Link>

          {/* Header */}
          <header className="post-header">
            <div className="post-meta-details">
              <span className="post-meta-tag">
                <FiFolder />
                {post.category}
              </span>
              <span className="post-meta-tag">
                <FiCalendar />
                {post.date}
              </span>
              <span className="post-meta-tag">
                <FiClock />
                {post.readTime}
              </span>
            </div>
            
            <h1 className="post-title">{post.title}</h1>
            <p className="post-summary">{post.summary}</p>
            
            <div className="post-author-box">
              <div className="author-info">
                <img src="/images/mr_heritage.png" alt="Olayoriju Inioluwa" />
                <div>
                  <h4>Olayoriju Inioluwa</h4>
                  <span>Full Stack Engineer</span>
                </div>
              </div>
              <button onClick={handleShare} className="share-btn" aria-label="Share article">
                <FiShare2 />
                <span>Share Link</span>
              </button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="post-featured-image card-glass">
            <img src={post.coverImage} alt={post.title} />
          </div>

          {/* Body Content */}
          <div className="post-body" dangerouslySetInnerHTML={{ __html: post.content }} />

          {/* Footer Tags */}
          <div className="post-tags-footer">
            <span>Tags:</span>
            <div className="post-tags-list">
              {post.tags.map((tag, idx) => (
                <span key={idx} className="post-footer-tag">#{tag}</span>
              ))}
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
