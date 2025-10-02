import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../data/projects";
import {
  FiGithub,
  FiExternalLink,
  FiSearch,
  FiFilter,
  FiCalendar,
  FiUsers,
  FiCode,
  FiStar,
  FiArrowRight,
  FiX,
  FiCheck,
  FiZap,
  FiTrendingUp,
  FiAward,
} from "react-icons/fi";
import SEO from "../seo/SEO";
import "../../styles/components/Projects.css";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const projectsRef = useRef(null);

  const projectCategories = [
    { id: "all", label: "All Projects", count: 8 },
    { id: "fullstack", label: "Full-Stack", count: 2 },
    { id: "frontend", label: "Frontend", count: 5 },
    { id: "backend", label: "Backend/API", count: 1 },
  ];

  // Real Projects (to be linked when ready):
  // - Kefi: Social media platform (Django + React)
  // - Konverter: Data conversion tool (Python + Django)
  // - Word Daily: Daily word learning app (Django + Frontend)
  // - Tech Citi Intelligence Quiz: Intelligence assessment platform (HTML/CSS/JS)
  // - Aqua Steps: Demo company website (HTML/CSS/Bootstrap)
  // - Portfolio: This website (React + Modern CSS)
  // Now imported from ../../data/projects.js

  const stats = [
    { number: "3", label: "Featured Projects", icon: FiCode },
    { number: "100%", label: "Completion Rate", icon: FiCheck },
    { number: "5.0", label: "Average Rating", icon: FiStar },
    { number: "7", label: "Total Projects", icon: FiTrendingUp },
  ];

  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      activeFilter === "all" ||
      (Array.isArray(project.category)
        ? project.category.includes(activeFilter)
        : project.category === activeFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter((project) => project.featured);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Portfolio Projects - Mr Heritage",
    description:
      "Explore my portfolio of web development projects including Kefi social media platform, Konverter data conversion tool, and other full-stack applications built with Python, Django, and React.",
    url: "https://mr-heritage.name.ng/",
    mainEntity: {
      "@type": "ItemList",
      name: "Portfolio Projects",
      description:
        "Collection of web development projects showcasing full-stack development skills",
      itemListElement: [
        {
          "@type": "CreativeWork",
          name: "Kefi - Social Media Platform",
          description:
            "A comprehensive social media platform built with Django backend, Python, JavaScript, and MySQL database.",
          url: "https://kefi.onrender.com",
          creator: {
            "@type": "Person",
            name: "Olayoriju Inioluwa",
            alternateName: [
              "Mr Heritage",
              "Inioluwa",
              "inioluwa_dev",
              "Comibyte",
            ],
          },
          programmingLanguage: ["Python", "Django", "JavaScript", "MySQL"],
          dateCreated: "2024",
          genre: "Web Application",
        },
        {
          "@type": "CreativeWork",
          name: "Konverter - Data Conversion Tool",
          description:
            "A powerful utility tool for converting CSV to JSON and vice versa, with minification features built with React.",
          url: "https://kon-verter.web.app",
          creator: {
            "@type": "Person",
            name: "Olayoriju Inioluwa",
            alternateName: [
              "Mr Heritage",
              "Inioluwa",
              "inioluwa_dev",
              "Comibyte",
            ],
          },
          programmingLanguage: ["React", "JavaScript", "Bootstrap"],
          dateCreated: "2024",
          genre: "Web Application",
        },
        {
          "@type": "CreativeWork",
          name: "Harth - AI Background Removal",
          description:
            "An AI-powered platform for professional image editing, specializing in background removal. Built with Python backend and React frontend using Tailwind CSS.",
          url: "https://harth-0.web.app",
          creator: {
            "@type": "Person",
            name: "Olayoriju Inioluwa",
            alternateName: [
              "Mr Heritage",
              "Inioluwa",
              "inioluwa_dev",
              "Comibyte",
            ],
          },
          programmingLanguage: ["Python", "React", "Tailwind CSS"],
          dateCreated: "2025",
          genre: "Web Application",
        },
      ],
    },
  };

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <SEO
        title="Portfolio Projects - Mr Heritage"
        description="Explore my portfolio of web development projects including Kefi social media platform, Konverter data conversion tool, and other full-stack applications built with Python, Django, and React."
        keywords="Portfolio Projects, Olayoriju Inioluwa, Inioluwa, inioluwa_dev, Comibyte, Olayoriju, Web Development Projects, Django Projects, React Projects, Full Stack Projects, Kefi Social Media, Konverter Tool, Python Projects, JavaScript Projects"
        url="https://mr-heritage.name.ng/"
        structuredData={structuredData}
      />
      <div className="projects__background">
        <div className="projects__gradient projects__gradient--1"></div>
        <div className="projects__gradient projects__gradient--2"></div>
        <div className="projects__gradient projects__gradient--3"></div>
      </div>

      <div className="projects__container">
        <div
          className={`projects__content ${
            isVisible ? "projects__content--visible" : ""
          }`}
        >
          {/* Section Header */}
          <div className="projects__header">
            <h2 className="projects__title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="projects__subtitle">
              A showcase of my backend development expertise with Python/Django,
              featuring real projects like Kefi and Konverter
            </p>
          </div>

          {/* Stats Section */}
          <div className="projects__stats">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div
                  key={index}
                  className="stat-card"
                  style={{ "--delay": `${index * 0.1}s` }}
                >
                  <div className="stat-card__icon">
                    <IconComponent />
                  </div>
                  <div className="stat-card__content">
                    <span className="stat-card__number">{stat.number}</span>
                    <span className="stat-card__label">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured Projects Showcase */}
          <div className="projects__featured">
            <h3 className="projects__featured-title">Spotlight Projects</h3>
            <div className="featured-grid">
              {featuredProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="featured-card"
                  style={{ "--delay": `${index * 0.2}s` }}
                  onClick={() => openProjectModal(project)}
                >
                  <div className="featured-card__image">
                    <img src={project.image} alt={project.title} />
                    <div className="featured-card__overlay">
                      <div className="featured-card__links">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="project-link"
                        >
                          <FiGithub />
                        </a>
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="project-link"
                        >
                          <FiExternalLink />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="featured-card__content">
                    <div className="featured-card__header">
                      <h4 className="featured-card__title">{project.title}</h4>
                      <div className="featured-card__rating">
                        <FiStar />
                        <span>{project.rating}</span>
                      </div>
                    </div>

                    <p className="featured-card__description">
                      {project.shortDescription}
                    </p>

                    <div className="featured-card__meta">
                      <div className="meta-item">
                        <FiCalendar />
                        <span>{project.year}</span>
                      </div>
                      <div className="meta-item">
                        <FiUsers />
                        <span>{project.team}</span>
                      </div>
                    </div>

                    <div className="featured-card__technologies">
                      {project.technologies
                        .slice(0, 4)
                        .map((tech, techIndex) => (
                          <span key={techIndex} className="tech-badge">
                            {tech}
                          </span>
                        ))}
                      {project.technologies.length > 4 && (
                        <span className="tech-badge tech-badge--more">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    <button className="featured-card__cta">
                      <span>View Details</span>
                      <FiArrowRight />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Project Controls */}
          <div className="projects__controls">
            <div className="search-container">
              <FiSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search projects or technologies..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
            </div>

            <div className="filter-container">
              <FiFilter className="filter-icon" />
              <div className="filter-buttons">
                {projectCategories.map((category) => (
                  <button
                    key={category.id}
                    className={`filter-btn ${
                      activeFilter === category.id ? "filter-btn--active" : ""
                    }`}
                    onClick={() => setActiveFilter(category.id)}
                  >
                    <span>{category.label}</span>
                    <span className="filter-count">({category.count})</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* All Projects Grid */}
          <div className="projects__grid">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card"
                style={{ "--delay": `${index * 0.1}s` }}
                onClick={() => openProjectModal(project)}
              >
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-card__status">
                    <span
                      className={`status-badge status-badge--${project.status
                        .toLowerCase()
                        .replace(" ", "-")}`}
                    >
                      {project.status}
                    </span>
                  </div>
                  <div className="project-card__overlay">
                    <div className="project-card__links">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="project-link"
                      >
                        <FiGithub />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="project-link"
                      >
                        <FiExternalLink />
                      </a>
                    </div>
                  </div>
                </div>

                <div className="project-card__content">
                  <h4 className="project-card__title">{project.title}</h4>
                  <p className="project-card__description">
                    {project.shortDescription}
                  </p>

                  <div className="project-card__technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag tech-tag--more">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredProjects.length === 0 && (
            <div className="projects__no-results">
              <FiSearch className="no-results-icon" />
              <h3>No projects found</h3>
              <p>Try adjusting your search or filter criteria</p>
              <button
                className="reset-btn"
                onClick={() => {
                  setSearchTerm("");
                  setActiveFilter("all");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}

          {/* CTA Section */}
          <div className="projects__cta">
            <div className="cta-card">
              <h3 className="cta-card__title">
                Interested in{" "}
                <span className="text-gradient">Working Together</span>?
              </h3>
              <p className="cta-card__description">
                I'm always excited to take on new challenges and create amazing
                digital experiences. Let's discuss your next project and bring
                your ideas to life.
              </p>
              <div className="cta-card__actions">
                <button
                  className="cta-btn cta-btn--primary"
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <span>Start a Project</span>
                  <FiZap />
                </button>
                <a
                  href="https://github.com/Inioluwa-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn cta-btn--secondary"
                >
                  <span>View All Work</span>
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeProjectModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal__close"
              onClick={closeProjectModal}
            >
              <FiX />
            </button>

            <div className="project-modal__content">
              <div className="project-modal__header">
                <div className="project-modal__image">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                  />
                </div>
                <div className="project-modal__info">
                  <h2 className="project-modal__title">
                    {selectedProject.title}
                  </h2>
                  <p className="project-modal__description">
                    {selectedProject.description}
                  </p>

                  <div className="project-modal__meta">
                    <div className="meta-grid">
                      <div className="meta-item">
                        <span className="meta-label">Year</span>
                        <span className="meta-value">
                          {selectedProject.year}
                        </span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Duration</span>
                        <span className="meta-value">
                          {selectedProject.duration}
                        </span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Team</span>
                        <span className="meta-value">
                          {selectedProject.team}
                        </span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Client</span>
                        <span className="meta-value">
                          {selectedProject.client}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="project-modal__body">
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index}>
                        <FiCheck />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Technologies Used</h4>
                  <div className="tech-list">
                    {selectedProject.technologies.map((tech, index) => (
                      <span key={index} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {selectedProject.challenges && (
                  <div className="modal-section">
                    <h4>Challenges & Solutions</h4>
                    <ul className="challenges-list">
                      {selectedProject.challenges.map((challenge, index) => (
                        <li key={index}>
                          <FiZap />
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.results && (
                  <div className="modal-section">
                    <h4>Results & Impact</h4>
                    <ul className="results-list">
                      {selectedProject.results.map((result, index) => (
                        <li key={index}>
                          <FiTrendingUp />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {selectedProject.testimonial && (
                  <div className="modal-section">
                    <h4>Client Testimonial</h4>
                    <div className="testimonial">
                      <p className="testimonial__text">
                        "{selectedProject.testimonial.text}"
                      </p>
                      <div className="testimonial__author">
                        <span className="testimonial__name">
                          {selectedProject.testimonial.author}
                        </span>
                        <span className="testimonial__role">
                          {selectedProject.testimonial.role}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-modal__footer">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-cta modal-cta--secondary"
                >
                  <FiGithub />
                  <span>View Code</span>
                </a>
                <a
                  href={selectedProject.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="modal-cta modal-cta--primary"
                >
                  <FiExternalLink />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
