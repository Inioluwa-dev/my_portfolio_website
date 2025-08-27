import React, { useState, useEffect, useRef } from 'react';
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
  FiAward
} from 'react-icons/fi';
import '../../styles/components/Projects.css';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const projectsRef = useRef(null);

  const projectCategories = [
    { id: 'all', label: 'All Projects', count: 6 },
    { id: 'fullstack', label: 'Full-Stack', count: 2 },
    { id: 'frontend', label: 'Frontend', count: 4 },
    { id: 'backend', label: 'Backend/API', count: 1 }
  ];

  // Real Projects (to be linked when ready):
  // - Kefi: Social media platform (Django + React)
  // - Konverter: Data conversion tool (Python + Django)
  // - Word Daily: Daily word learning app (Django + Frontend)
  // - Tech Citi Intelligence Quiz: Intelligence assessment platform (HTML/CSS/JS)
  // - Aqua Steps: Demo company website (HTML/CSS/Bootstrap)
  // - Portfolio: This website (React + Modern CSS)
  const projects = [
    {
      id: 1,
      title: 'Kefi - Social Media Platform',
      category: 'fullstack',
      featured: true,
      image: '/kefi.png',
      description: 'A comprehensive social media platform built with Django backend and React frontend, featuring user authentication, posts, comments, and real-time interactions.',
      shortDescription: 'Full-featured social media platform with Django backend and React frontend.',
      technologies: ['Django', 'Python', 'React', 'JavaScript', 'MySQL'],
      github: 'https://github.com/Inioluwa_dev/Kefi_Beta_V1', // TODO: Add specific repository URLs when ready
      demo: 'https://kefi.onrender.com', // TODO: Add your Kefi live demo URL
      status: 'Completed',
      year: '2024',
      duration: '3 months',
      team: 'Solo Project',
      client: 'Personal Project',
      rating: 5.0,
      features: [
        'User authentication and profiles',
        'Post creation and sharing',
        'Real-time comments and likes',
        'User following system',
        'News feed with algorithms',
        'Image and media uploads',
        'Responsive design',
        'Admin dashboard'
      ],
      challenges: [
        'Implementing real-time features',
        'Optimizing database queries for social interactions',
        'Creating scalable architecture',
        'Building intuitive user interface'
      ],
      results: [
        'Successfully deployed and tested',
        'Demonstrates full-stack development skills',
        'Showcases Django and React expertise',
        'Ready for production use'
      ],
      testimonial: {
        text: "A well-architected social media platform that demonstrates strong backend and frontend development skills.",
        author: "Self Assessment",
        role: "Full Stack Developer"
      }
    },
    {
      id: 2,
      title: 'Konverter - Data Conversion Tool',
      category: 'backend',
      featured: true,
      image: '/konverter.png',
      description: 'A powerful utility tool for converting CSV to JSON and vice versa, with additional features for minifying and unminifying data. Built with Python and Django.',
      shortDescription: 'Data conversion utility with CSV/JSON support and minification features.',
      technologies: ['Python', 'Django', 'JavaScript', 'HTML', 'CSS', 'SQLite'],
      github: 'https://github.com/Inioluwa_dev/Konverter', // TODO: Add specific repository URLs when ready
      demo: 'https://kon-verter.web.app', // TODO: Add your Konverter live demo URL
      status: 'Completed',
      year: '2024',
      duration: '2 months',
      team: 'Solo Project',
      client: 'Personal Project',
      rating: 5.0,
      features: [
        'CSV to JSON conversion',
        'JSON to CSV conversion',
        'Data minification',
        'Data unminification',
        'File upload and download',
        'Batch processing',
        'Data validation',
        'Clean user interface'
      ],
      challenges: [
        'Handling large file uploads efficiently',
        'Implementing data validation',
        'Creating intuitive conversion logic',
        'Optimizing performance for large datasets'
      ],
      results: [
        'Successfully processes various data formats',
        'Demonstrates backend API development',
        'Showcases Python/Django expertise',
        'Useful utility for developers'
      ],
      testimonial: {
        text: "A practical tool that solves real data conversion problems with clean, efficient code.",
        author: "Self Assessment",
        role: "Backend Developer"
      }
    },
    {
      id: 3,
      title: 'Word Daily',
      category: 'fullstack',
      featured: false,
      image: '/word.png',
      description: 'A daily word learning application that provides users with a new word every day, sends notifications, and maintains a comprehensive list and archive of words.',
      shortDescription: 'Daily word learning app with notifications and word archive.',
      technologies: ['Django', 'Python', 'JavaScript', 'HTML', 'CSS', 'PostgreSQL'],
      github: 'https://github.com/Inioluwa_dev/Word-Daily', // TODO: Add specific repository URLs when ready
      demo: 'https://word-daily0.web.app', // TODO: Add your Word Daily live demo URL
      status: 'Completed',
      year: '2024',
      duration: '2 months',
      team: 'Solo Project',
      client: 'Personal Project',
      rating: 4.9,
      features: [
        'Daily word delivery system',
        'Push notifications',
        'Word list management',
        'Word archive functionality',
        'User progress tracking',
        'Responsive design',
        'Admin word management',
        'Search and filtering'
      ],
      challenges: [
        'Implementing daily word scheduling',
        'Setting up push notification system',
        'Creating efficient word storage and retrieval',
        'Building user-friendly word management'
      ],
      results: [
        'Successfully delivers daily words',
        'User engagement through notifications',
        'Comprehensive word database',
        'Ready for production use'
      ],
      testimonial: {
        text: "An innovative learning tool that makes vocabulary building a daily habit through smart notifications.",
        author: "Self Assessment",
        role: "Full Stack Developer"
      }
    },
    {
      id: 4,
      title: 'Tech Citi Intelligence Quiz',
      category: 'frontend',
      featured: false,
      image: '/quiz.png',
      description: 'An intelligence assessment platform that provides series of tests to determine users\' major intelligence areas. A collaborative project with Tech Citi team.',
      shortDescription: 'Intelligence assessment platform with comprehensive testing and analysis.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/Inioluwa_dev/tech_citi_intelligence_quiz', // TODO: Add specific repository URLs when ready
      demo: 'https://tech-citi.web.app', // TODO: Add your Tech Citi project live URL
      status: 'Completed',
      year: '2024',
      duration: '1 month',
      team: 'Team Project',
      client: 'Tech Citi',
      rating: 4.8,
      features: [
        'Multiple intelligence test series',
        'Intelligence area analysis',
        'Result interpretation',
        'Responsive design',
        'User progress tracking',
        'Test history',
        'Detailed reporting',
        'Mobile-friendly interface'
      ],
      challenges: [
        'Designing comprehensive intelligence tests',
        'Creating accurate scoring algorithms',
        'Building responsive interface',
        'Collaborating with team members'
      ],
      results: [
        'Successfully completed team project',
        'Demonstrates frontend development skills',
        'Showcases collaboration abilities',
        'Professional project delivery'
      ],
      testimonial: {
        text: "A well-executed team project that demonstrates strong frontend skills and collaboration abilities.",
        author: "Team Assessment",
        role: "Frontend Developer"
      }
    },
    {
      id: 5,
      title: 'Aqua Steps',
      category: 'frontend',
      featured: false,
      image: '/steps.png',
      description: 'A demo project for a non-existent company, designed to sharpen frontend development skills. Features a cool, modern website design with responsive layout.',
      shortDescription: 'Demo company website showcasing modern design and responsive layout.',
      technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript'],
      github: 'https://github.com/Inioluwa_dev/AquaSteps', // TODO: Add specific repository URLs when ready
      demo: 'https://aqua-steps.web.app', // TODO: Add your Aqua Steps live URL
      status: 'Completed',
      year: '2024',
      duration: '3 weeks',
      team: 'Solo Project',
      client: 'Demo Project',
      rating: 4.7,
      features: [
        'Modern website design',
        'Responsive layout',
        'Interactive elements',
        'Professional styling',
        'Mobile optimization',
        'Smooth animations',
        'Clean code structure',
        'Hosted and accessible'
      ],
      challenges: [
        'Creating professional company website design',
        'Implementing responsive design principles',
        'Adding interactive elements',
        'Ensuring cross-browser compatibility'
      ],
      results: [
        'Successfully hosted and accessible',
        'Demonstrates modern design skills',
        'Showcases responsive development',
        'Professional presentation'
      ],
      testimonial: {
        text: "A beautifully designed demo website that showcases modern frontend development skills and design principles.",
        author: "Self Assessment",
        role: "Frontend Developer"
      }
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'frontend',
      featured: false,
      image: '/portfolio.png',
      description: 'A modern, responsive portfolio website built with React and modern CSS, showcasing development skills and projects.',
      shortDescription: 'Modern portfolio website with React and responsive design.',
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
      github: 'https://github.com/Inioluwa_dev/my_portfolio_website', // TODO: Add specific repository URLs when ready
      demo: 'https://mr-heritage.web.app', // TODO: Add your portfolio live URL
      status: 'Completed',
      year: '2024',
      duration: '1 month',
      team: 'Solo Project',
      client: 'Personal Branding',
      rating: 5.0,
      features: [
        'Responsive design',
        'Modern animations',
        'Project showcase',
        'Skills demonstration',
        'Contact forms',
        'Dark/light theme',
        'Performance optimized',
        'SEO friendly'
      ],
      challenges: [
        'Creating smooth animations',
        'Ensuring responsive design',
        'Optimizing performance',
        'Maintaining clean code structure'
      ],
      results: [
        'Professional portfolio presentation',
        'Demonstrates frontend skills',
        'Responsive across all devices',
        'Fast loading times'
      ],
      testimonial: {
        text: "A beautifully designed portfolio that effectively showcases development skills and projects.",
        author: "Self Assessment",
        role: "Frontend Developer"
      }
    }
  ];

  const stats = [
    { number: '2', label: 'Featured Projects', icon: FiCode },
    { number: '100%', label: 'Completion Rate', icon: FiCheck },
    { number: '4.9', label: 'Average Rating', icon: FiStar },
    { number: '6', label: 'Total Projects', icon: FiTrendingUp }
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

  const filteredProjects = projects.filter(project => {
    const matchesFilter = activeFilter === 'all' || project.category === activeFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredProjects = projects.filter(project => project.featured);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <section id="projects" className="projects" ref={projectsRef}>
      <div className="projects__background">
        <div className="projects__gradient projects__gradient--1"></div>
        <div className="projects__gradient projects__gradient--2"></div>
        <div className="projects__gradient projects__gradient--3"></div>
      </div>

      <div className="projects__container">
        <div className={`projects__content ${isVisible ? 'projects__content--visible' : ''}`}>
          
          {/* Section Header */}
          <div className="projects__header">
            <h2 className="projects__title">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="projects__subtitle">
              A showcase of my backend development expertise with Python/Django, featuring real projects like Kefi and Konverter
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
                  style={{ '--delay': `${index * 0.1}s` }}
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
                  style={{ '--delay': `${index * 0.2}s` }}
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
                    
                    <p className="featured-card__description">{project.shortDescription}</p>
                    
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
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-badge">{tech}</span>
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
                    className={`filter-btn ${activeFilter === category.id ? 'filter-btn--active' : ''}`}
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
                style={{ '--delay': `${index * 0.1}s` }}
                onClick={() => openProjectModal(project)}
              >
                <div className="project-card__image">
                  <img src={project.image} alt={project.title} />
                  <div className="project-card__status">
                    <span className={`status-badge status-badge--${project.status.toLowerCase().replace(' ', '-')}`}>
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
                  <p className="project-card__description">{project.shortDescription}</p>
                  
                  <div className="project-card__technologies">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
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
                  setSearchTerm('');
                  setActiveFilter('all');
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
                Interested in <span className="text-gradient">Working Together</span>?
              </h3>
              <p className="cta-card__description">
                I'm always excited to take on new challenges and create amazing digital experiences. 
                Let's discuss your next project and bring your ideas to life.
              </p>
              <div className="cta-card__actions">
                <button 
                  className="cta-btn cta-btn--primary"
                  onClick={() => {
                    const contactSection = document.getElementById('contact');
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                >
                  <span>Start a Project</span>
                  <FiZap />
                </button>
                <a 
                  href="https://github.com/yourusername" 
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
            <button className="project-modal__close" onClick={closeProjectModal}>
              <FiX />
            </button>

            <div className="project-modal__content">
              <div className="project-modal__header">
                <div className="project-modal__image">
                  <img src={selectedProject.image} alt={selectedProject.title} />
                </div>
                <div className="project-modal__info">
                  <h2 className="project-modal__title">{selectedProject.title}</h2>
                  <p className="project-modal__description">{selectedProject.description}</p>
                  
                  <div className="project-modal__meta">
                    <div className="meta-grid">
                      <div className="meta-item">
                        <span className="meta-label">Year</span>
                        <span className="meta-value">{selectedProject.year}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Duration</span>
                        <span className="meta-value">{selectedProject.duration}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Team</span>
                        <span className="meta-value">{selectedProject.team}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-label">Client</span>
                        <span className="meta-value">{selectedProject.client}</span>
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
                      <span key={index} className="tech-badge">{tech}</span>
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
                      <p className="testimonial__text">"{selectedProject.testimonial.text}"</p>
                      <div className="testimonial__author">
                        <span className="testimonial__name">{selectedProject.testimonial.author}</span>
                        <span className="testimonial__role">{selectedProject.testimonial.role}</span>
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