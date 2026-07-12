import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getProjectById } from "../data/projects";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/seo/SEO";
import { FiArrowLeft, FiGithub, FiExternalLink, FiCpu, FiCheck, FiAlertTriangle, FiBookOpen } from "react-icons/fi";
import "../styles/components/ProjectDetail.css";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = getProjectById(id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="page page--not-found">
        <Navbar />
        <main className="not-found-main">
          <div className="container text-center">
            <h2>Project Not Found</h2>
            <p>The case study you are looking for does not exist or has been relocated.</p>
            <Link to="/projects" className="btn btn-primary">
              <FiArrowLeft />
              <span>Back to Projects</span>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="page page--project-detail animate-fade-in-up">
      <SEO
        title={`${project.title} - Case Study`}
        description={project.shortDescription}
        keywords={`${project.title}, Case Study, ${project.technologies.join(", ")}`}
        url={`https://mr-heritage.name.ng/projects/${project.id}`}
        image={project.image}
      />
      <Navbar />

      <main className="detail-main">
        {/* Banner Section */}
        <section className="detail-hero" style={{ backgroundImage: `linear-gradient(180deg, rgba(8, 8, 10, 0.4) 0%, rgba(8, 8, 10, 0.95) 100%), url(${project.image})` }}>
          <div className="container">
            <Link to="/projects" className="back-link">
              <FiArrowLeft />
              <span>Back to Projects</span>
            </Link>
            
            <div className="detail-hero-content">
              <div className="detail-meta-tags">
                <span className="meta-badge status-badge">{project.status}</span>
                <span className="meta-badge">{project.year}</span>
              </div>
              <h1 className="detail-title">{project.title}</h1>
              <p className="detail-tagline">{project.shortDescription}</p>

              <div className="detail-action-buttons">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                    <FiGithub />
                    <span>GitHub Repository</span>
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                    <FiExternalLink />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Metadata Grid */}
        <section className="detail-meta-grid-section">
          <div className="container">
            <div className="detail-meta-grid card-glass">
              <div className="meta-grid-item">
                <span>Role</span>
                <h4>Lead Software Engineer</h4>
              </div>
              <div className="meta-grid-item">
                <span>Duration</span>
                <h4>{project.duration}</h4>
              </div>
              <div className="meta-grid-item">
                <span>Team Structure</span>
                <h4>{project.team}</h4>
              </div>
              <div className="meta-grid-item">
                <span>Client / Purpose</span>
                <h4>{project.client}</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Content */}
        {project.caseStudy && (
          <section className="case-study-section">
            <div className="container">
              <div className="case-study-layout">
                
                {/* Left Column - Core Text */}
                <div className="case-study-content-left">
                  {/* Problem */}
                  <div className="cs-block card-glass">
                    <div className="cs-block-header">
                      <FiAlertTriangle className="cs-icon cs-icon--problem" />
                      <h3>The Problem</h3>
                    </div>
                    <p>{project.caseStudy.problem}</p>
                  </div>

                  {/* Solution */}
                  <div className="cs-block card-glass">
                    <div className="cs-block-header">
                      <FiCheck className="cs-icon cs-icon--solution" />
                      <h3>The Solution</h3>
                    </div>
                    <p>{project.caseStudy.solution}</p>
                  </div>

                  {/* Challenges faced */}
                  <div className="cs-block card-glass">
                    <div className="cs-block-header">
                      <FiCpu className="cs-icon cs-icon--challenge" />
                      <h3>Key Challenges & engineering Solutions</h3>
                    </div>
                    <div className="challenges-list">
                      {project.caseStudy.challenges.map((challenge, idx) => (
                        <div key={idx} className="challenge-item">
                          <h5>{idx + 1}. {challenge.title}</h5>
                          <p>{challenge.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lessons Learned */}
                  <div className="cs-block card-glass">
                    <div className="cs-block-header">
                      <FiBookOpen className="cs-icon cs-icon--lessons" />
                      <h3>Lessons Learned</h3>
                    </div>
                    <p>{project.caseStudy.lessons}</p>
                  </div>
                </div>

                {/* Right Column - Architecture & Technical Details */}
                <div className="case-study-content-right">
                  {/* Tech Stack List */}
                  <div className="right-panel card-glass">
                    <h4>Tech Stack</h4>
                    <div className="tech-tags-grid">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag-chip">{tech}</span>
                      ))}
                    </div>
                  </div>

                  {/* Architecture Diagram Info */}
                  <div className="right-panel card-glass">
                    <h4>System Architecture</h4>
                    <ul className="arch-steps-list">
                      {project.caseStudy.architecture.map((step, idx) => (
                        <li key={idx}>
                          <span className="step-num">0{idx + 1}</span>
                          <span className="step-text">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Roadmap Panel */}
                  {project.caseStudy.futureImprovements && (
                    <div className="right-panel card-glass">
                      <h4>Future Roadmap</h4>
                      <ul className="roadmap-list">
                        {project.caseStudy.futureImprovements.map((item, idx) => (
                          <li key={idx}>
                            <FiCheck />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProjectDetailPage;
