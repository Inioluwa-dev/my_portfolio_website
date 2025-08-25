import React, { useState, useEffect, useRef } from 'react';
import { 
  FiCode, 
  FiServer, 
  FiSmartphone,
  FiGlobe,
  FiTool,
  FiUsers,
  FiArrowRight,
  FiCheck,
  FiClock,
  FiDollarSign,
  FiStar,
  FiZap,
  FiShield,
  FiTrendingUp,
  FiX,
  FiDatabase
} from 'react-icons/fi';
import '../../styles/components/Services.css';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const servicesRef = useRef(null);

  const serviceCategories = [
    { id: 'all', label: 'All Services', count: 6 },
    { id: 'backend', label: 'Backend Development', count: 3 },
    { id: 'frontend', label: 'Frontend Development', count: 2 },
    { id: 'consulting', label: 'Consulting', count: 1 }
  ];

  // Real Project Examples (to be linked when ready):
  // - Kefi: Social media platform showcasing full-stack development
  // - Konverter: CSV/JSON tool demonstrating backend API expertise
  const services = [
    {
      id: 1,
      title: 'Backend API Development',
      category: 'backend',
      icon: FiServer,
      color: '#8b5cf6',
      price: 'From $2,000',
      duration: '2-6 weeks',
      rating: 5.0,
      description: 'Robust backend APIs and server-side applications built with Python/Django for scalability and performance.',
      shortDescription: 'Powerful backend APIs with Python/Django for modern applications.',
      features: [
        'Django REST API development',
        'Database design & optimization',
        'Authentication & authorization',
        'API security & rate limiting',
        'Database migrations',
        'Performance optimization',
        'API documentation',
        'Testing & deployment'
      ],
      technologies: ['Python', 'Django', 'PostgreSQL', 'MySQL', 'MongoDB'],
      deliverables: [
        'Complete backend API',
        'Database schema',
        'API documentation',
        'Deployment guide',
        '30-day support'
      ],
      process: [
        'Requirements analysis',
        'Database architecture design',
        'API endpoint development',
        'Security implementation',
        'Testing & optimization',
        'Deployment & launch'
      ],
      timeline: '2-6 weeks depending on complexity',
      included: [
        'Project planning & architecture',
        'Database design & setup',
        'API development & security',
        'Performance optimization',
        'Quality assurance testing',
        'Deployment & support'
      ]
    },
    {
      id: 2,
      title: 'Full-Stack Web Development',
      category: 'backend',
      icon: FiCode,
      color: '#6366f1',
      price: 'From $3,500',
      duration: '4-10 weeks',
      rating: 5.0,
      description: 'Complete web application development with Django backend and modern frontend technologies.',
      shortDescription: 'End-to-end web applications with Django backend and React frontend.',
      features: [
        'Django backend development',
        'React frontend interface',
        'Database design & management',
        'User authentication system',
        'Responsive design',
        'Performance optimization',
        'Testing & documentation',
        'Deployment & hosting'
      ],
      technologies: ['Django', 'React', 'Python', 'JavaScript', 'PostgreSQL', 'MySQL'],
      deliverables: [
        'Complete web application',
        'Source code & documentation',
        'Database setup',
        'Deployment guide',
        '60-day support'
      ],
      process: [
        'Requirements analysis',
        'System architecture design',
        'Backend development',
        'Frontend development',
        'Integration & testing',
        'Deployment & launch'
      ],
      timeline: '4-10 weeks depending on features',
      included: [
        'Full-stack development',
        'Database design & setup',
        'User interface design',
        'Testing & optimization',
        'Deployment assistance',
        'Post-launch support'
      ]
    },
    {
      id: 3,
      title: 'Database Design & Optimization',
      category: 'backend',
      icon: FiDatabase,
      color: '#06b6d4',
      price: 'From $1,500',
      duration: '1-3 weeks',
      rating: 5.0,
      description: 'Expert database design, optimization, and management for both SQL and NoSQL databases.',
      shortDescription: 'Professional database design and optimization services.',
      features: [
        'Database schema design',
        'Performance optimization',
        'Data migration planning',
        'Backup & recovery setup',
        'Security implementation',
        'Monitoring & maintenance',
        'Query optimization',
        'Scalability planning'
      ],
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Python'],
      deliverables: [
        'Database schema design',
        'Optimization recommendations',
        'Migration scripts',
        'Security guidelines',
        'Maintenance plan'
      ],
      process: [
        'Current state assessment',
        'Requirements analysis',
        'Schema design',
        'Optimization implementation',
        'Testing & validation',
        'Documentation & handover'
      ],
      timeline: '1-3 weeks depending on complexity',
      included: [
        'Database architecture design',
        'Performance optimization',
        'Security implementation',
        'Migration planning',
        'Documentation',
        'Training & support'
      ]
    },
    {
      id: 4,
      title: 'Frontend Development',
      category: 'frontend',
      icon: FiGlobe,
      color: '#10b981',
      price: 'From $2,000',
      duration: '2-6 weeks',
      rating: 4.9,
      description: 'Modern, responsive frontend applications built with React and modern CSS frameworks.',
      shortDescription: 'Beautiful, responsive frontend applications with modern technologies.',
      features: [
        'React component development',
        'Responsive design implementation',
        'CSS/SCSS styling',
        'Tailwind CSS integration',
        'Bootstrap framework',
        'Performance optimization',
        'Cross-browser compatibility',
        'Mobile-first design'
      ],
      technologies: ['React', 'JavaScript', 'HTML', 'CSS', 'Tailwind CSS', 'Bootstrap'],
      deliverables: [
        'Complete frontend application',
        'Responsive design',
        'Source code',
        'Component documentation',
        '30-day support'
      ],
      process: [
        'Design requirements',
        'Component architecture',
        'UI development',
        'Responsive implementation',
        'Testing & optimization',
        'Deployment'
      ],
      timeline: '2-6 weeks depending on complexity',
      included: [
        'Custom component development',
        'Responsive design',
        'Performance optimization',
        'Cross-browser testing',
        'Documentation',
        'Deployment support'
      ]
    },
    {
      id: 5,
      title: 'PWA Development',
      category: 'frontend',
      icon: FiSmartphone,
      color: '#f59e0b',
      price: 'From $2,500',
      duration: '3-8 weeks',
      rating: 4.8,
      description: 'Progressive Web Applications that work offline and provide native app-like experience.',
      shortDescription: 'Progressive Web Apps with offline capabilities and native feel.',
      features: [
        'PWA architecture design',
        'Offline functionality',
        'Service worker implementation',
        'App-like experience',
        'Push notifications',
        'Installation prompts',
        'Performance optimization',
        'Cross-platform compatibility'
      ],
      technologies: ['React', 'JavaScript', 'Service Workers', 'PWA APIs', 'CSS'],
      deliverables: [
        'PWA application',
        'Service worker setup',
        'Manifest file',
        'Offline functionality',
        'Installation guide'
      ],
      process: [
        'PWA planning',
        'Core functionality development',
        'Service worker implementation',
        'Offline features',
        'Testing & optimization',
        'Deployment'
      ],
      timeline: '3-8 weeks depending on features',
      included: [
        'PWA architecture',
        'Offline functionality',
        'Performance optimization',
        'Cross-platform testing',
        'Documentation',
        'Deployment support'
      ]
    },
    {
      id: 6,
      title: 'Technical Consulting',
      category: 'consulting',
      icon: FiUsers,
      color: '#ef4444',
      price: 'From $100/hour',
      duration: 'Flexible',
      rating: 5.0,
      description: 'Expert technical guidance, code reviews, and architecture consulting for backend development.',
      shortDescription: 'Expert technical guidance and strategic consulting.',
      features: [
        'Backend architecture review',
        'Python/Django best practices',
        'Database optimization',
        'Performance analysis',
        'Security audit',
        'Code quality assessment',
        'Technology stack selection',
        'Project planning guidance'
      ],
      technologies: ['Python', 'Django', 'Databases', 'Various based on needs'],
      deliverables: [
        'Detailed analysis report',
        'Recommendations document',
        'Implementation roadmap',
        'Best practices guide',
        'Follow-up sessions'
      ],
      process: [
        'Current state assessment',
        'Requirements gathering',
        'Analysis & evaluation',
        'Recommendations preparation',
        'Presentation & discussion',
        'Implementation guidance'
      ],
      timeline: 'Flexible based on scope',
      included: [
        'Comprehensive assessment',
        'Detailed recommendations',
        'Implementation guidance',
        'Documentation',
        'Follow-up support',
        'Best practices training'
      ]
    }
  ];

  const stats = [
    { number: '15+', label: 'Projects Delivered', icon: FiCheck },
    { number: '100%', label: 'Dedication', icon: FiStar },
    { number: '24/7', label: 'Learning Mode', icon: FiShield },
    { number: '2+', label: 'Years Working', icon: FiTrendingUp }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      observer.observe(servicesRef.current);
    }

    return () => {
      if (servicesRef.current) {
        observer.unobserve(servicesRef.current);
      }
    };
  }, []);

  const filteredServices = activeFilter === 'all' 
    ? services 
    : services.filter(service => service.category === activeFilter);

  const openServiceModal = (service) => {
    setSelectedService(service);
    document.body.style.overflow = 'hidden';
  };

  const closeServiceModal = () => {
    setSelectedService(null);
    document.body.style.overflow = 'unset';
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    closeServiceModal();
  };

  return (
    <section id="services" className="services" ref={servicesRef}>
      <div className="services__background">
        <div className="services__gradient services__gradient--1"></div>
        <div className="services__gradient services__gradient--2"></div>
        <div className="services__gradient services__gradient--3"></div>
      </div>

      <div className="services__container">
        <div className={`services__content ${isVisible ? 'services__content--visible' : ''}`}>
          
          {/* Section Header */}
          <div className="services__header">
            <h2 className="services__title">
              Services & <span className="text-gradient">Expertise</span>
            </h2>
            <p className="services__subtitle">
              Backend-focused development solutions with Python/Django expertise
            </p>
          </div>

          {/* Stats Section */}
          <div className="services__stats">
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

          {/* Service Filters */}
          <div className="services__filters">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${activeFilter === category.id ? 'filter-btn--active' : ''}`}
                onClick={() => setActiveFilter(category.id)}
              >
                <span className="filter-btn__text">{category.label}</span>
                <span className="filter-btn__count">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Services Grid */}
          <div className="services__grid">
            {filteredServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={service.id}
                  className="service-card"
                  style={{ 
                    '--service-color': service.color,
                    '--delay': `${index * 0.1}s`
                  }}
                  onClick={() => openServiceModal(service)}
                >
                  <div className="service-card__header">
                    <div className="service-card__icon">
                      <IconComponent />
                    </div>
                    <div className="service-card__rating">
                      <FiStar />
                      <span>{service.rating}</span>
                    </div>
                  </div>

                  <div className="service-card__content">
                    <h3 className="service-card__title">{service.title}</h3>
                    <p className="service-card__description">{service.shortDescription}</p>
                    
                    <div className="service-card__meta">
                      <div className="service-card__price">
                        <FiDollarSign />
                        <span>{service.price}</span>
                      </div>
                      <div className="service-card__duration">
                        <FiClock />
                        <span>{service.duration}</span>
                      </div>
                    </div>

                    <div className="service-card__technologies">
                      {service.technologies.slice(0, 3).map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                      {service.technologies.length > 3 && (
                        <span className="tech-tag tech-tag--more">
                          +{service.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="service-card__footer">
                    <button className="service-card__cta">
                      <span>Learn More</span>
                      <FiArrowRight />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="services__cta">
            <div className="cta-card">
              <h3 className="cta-card__title">
                Ready to Build Your <span className="text-gradient">Backend</span>?
              </h3>
              <p className="cta-card__description">
                Let's discuss your requirements and create robust, scalable backend solutions together. 
                I specialize in Python/Django development and can help bring your ideas to life with clean, efficient code.
              </p>
              <div className="cta-card__actions">
                <button 
                  className="cta-btn cta-btn--primary"
                  onClick={scrollToContact}
                >
                  <span>Start Project</span>
                  <FiZap />
                </button>
                <button 
                  className="cta-btn cta-btn--secondary"
                  onClick={scrollToContact}
                >
                  <span>Free Consultation</span>
                  <FiUsers />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Modal */}
      {selectedService && (
        <div className="service-modal-overlay" onClick={closeServiceModal}>
          <div className="service-modal" onClick={(e) => e.stopPropagation()}>
            <button className="service-modal__close" onClick={closeServiceModal}>
              <FiX />
            </button>

            <div className="service-modal__content">
              <div className="service-modal__header">
                <div 
                  className="service-modal__icon"
                  style={{ '--service-color': selectedService.color }}
                >
                  <selectedService.icon />
                </div>
                <div className="service-modal__title-section">
                  <h2 className="service-modal__title">{selectedService.title}</h2>
                  <p className="service-modal__description">{selectedService.description}</p>
                  <div className="service-modal__meta">
                    <div className="modal-meta__item">
                      <FiDollarSign />
                      <span>{selectedService.price}</span>
                    </div>
                    <div className="modal-meta__item">
                      <FiClock />
                      <span>{selectedService.duration}</span>
                    </div>
                    <div className="modal-meta__item">
                      <FiStar />
                      <span>{selectedService.rating} rating</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="service-modal__body">
                <div className="modal-section">
                  <h4>Key Features</h4>
                  <ul className="features-list">
                    {selectedService.features.map((feature, index) => (
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
                    {selectedService.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                <div className="modal-section">
                  <h4>What's Included</h4>
                  <ul className="included-list">
                    {selectedService.included.map((item, index) => (
                      <li key={index}>
                        <FiCheck />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="modal-section">
                  <h4>Deliverables</h4>
                  <ul className="deliverables-list">
                    {selectedService.deliverables.map((deliverable, index) => (
                      <li key={index}>
                        <FiCheck />
                        <span>{deliverable}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="service-modal__footer">
                <button 
                  className="modal-cta modal-cta--primary"
                  onClick={scrollToContact}
                >
                  <span>Get Started</span>
                  <FiArrowRight />
                </button>
                <button 
                  className="modal-cta modal-cta--secondary"
                  onClick={scrollToContact}
                >
                  <span>Request Quote</span>
                  <FiDollarSign />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;