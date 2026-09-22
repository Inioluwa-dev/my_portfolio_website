import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import SEO from "../components/seo/SEO";
import { projects } from "../data/projects";
import { Link } from "react-router-dom";
import { FiArrowRight, FiCode, FiZap, FiMessageSquare } from "react-icons/fi";
import "../styles/components/Home.css";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filter featured projects
  const featured = projects.filter((p) => p.featured);

  const homepageStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "name": "Olayoriju Inioluwa",
        "alternateName": ["Mr Heritage", "Inioluwa", "inioluwa_dev", "Comibyte"],
        "jobTitle": "Systems & Product Engineer",
        "description": "Systems & Product Engineer specializing in mathematical optimization, distributed systems, and clean architecture.",
        "url": "https://mr-heritage.name.ng",
        "image": "https://mr-heritage.name.ng/images/mr_heritage.png",
        "sameAs": [
          "https://github.com/Inioluwa-dev",
          "https://youtube.com/@Inioluwa-dev"
        ]
      }
    ]
  };

  return (
    <div className="page page--home">
      <SEO
        title="Olayoriju Inioluwa | Mr Heritage - Systems & Product Engineer"
        description="Building optimized software systems and products. Systems & Product Engineer specializing in Python, Django, distributed backends, and React."
        keywords="Olayoriju Inioluwa, Mr Heritage, Systems Engineer, Product Engineer, Tech Instructor, Python Developer, FastAPI, Django, React, Portfolio"
        url="https://mr-heritage.name.ng"
        structuredData={homepageStructuredData}
      />
      <Navbar />
      
      <main>
        {/* Core Hero Banner */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Featured Projects Preview Section */}
        <section className="featured-section">
          <div className="container">
            <div className="featured-header">
              <h2 className="section-title">
                Featured <span className="text-gradient">Case Studies</span>
              </h2>
              <p className="section-subtitle">
                A selection of my best backend and full-stack software engineering works.
              </p>
            </div>

            <div className="featured-grid">
              {featured.map((project, idx) => (
                <div key={project.id} className="featured-project-card card-glass animate-scale-in" style={{ '--delay': `${idx * 0.1}s` }}>
                  <div className="project-image-wrapper">
                    <img src={project.image} alt={project.title} />
                    <span className="project-year-badge">{project.year}</span>
                  </div>
                  <div className="project-content-wrapper">
                    <div className="project-tech-list">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span key={i} className="tech-badge-inline">{tech}</span>
                      ))}
                    </div>
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-desc">{project.shortDescription}</p>
                    <div className="project-cta-links">
                      <Link to={`/projects/${project.id}`} className="read-case-btn">
                        <span>Read Case Study</span>
                        <FiArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="view-all-cta">
              <Link to="/projects" className="btn btn-primary btn-lg">
                <span>View All Projects</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>
        </section>

        {/* Direct High-Converting Call To Action */}
        <section className="home-cta-section">
          <div className="container">
            <div className="home-cta-box card-glass">
              <div className="cta-left">
                <h2>Have a project in mind?</h2>
                <p>I'm available for freelance work, full-time engineering roles, and technical consulting. Let's discuss your software ideas and build something extraordinary.</p>
                <div className="cta-buttons">
                  <Link to="/contact" className="btn btn-primary btn-md">
                    <span>Start a Conversation</span>
                  </Link>
                </div>
              </div>
              <div className="cta-right">
                <div className="interactive-avatar-glow">
                  <img src="/images/mr_heritage.png" alt="Inioluwa Avatar" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
