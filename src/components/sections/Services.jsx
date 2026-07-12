import React, { useState, useEffect, useRef } from "react";
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
  FiDatabase,
} from "react-icons/fi";
import SEO from "../seo/SEO";
import "../../styles/components/Services.css";
import { services } from "../../data/services";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const servicesRef = useRef(null);

  const serviceCategories = [
    { id: "all", label: "All Services", count: 6 },
    { id: "backend", label: "Backend Development", count: 3 },
    { id: "frontend", label: "Frontend Development", count: 2 },
    { id: "consulting", label: "Consulting", count: 1 },
  ];

  // Real Project Examples (to be linked when ready):
  // - Kefi: Social media platform showcasing full-stack development
  // - Konverter: CSV/JSON tool demonstrating backend API expertise
  // Now imported from ../../data/services.js

  const stats = [
    { number: "15+", label: "Projects Delivered", icon: FiCheck },
    { number: "100%", label: "Dedication", icon: FiStar },
    { number: "24/7", label: "Learning Mode", icon: FiShield },
    { number: "2+", label: "Years Working", icon: FiTrendingUp },
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

    const currentRef = servicesRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const filteredServices =
    activeFilter === "all"
      ? services
      : services.filter((service) => service.category === activeFilter);

  useEffect(() => {
    if (selectedService) {
      document.body.classList.add("modal-open");
      document.documentElement.classList.add("modal-open");
    } else {
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    }
    return () => {
      document.body.classList.remove("modal-open");
      document.documentElement.classList.remove("modal-open");
    };
  }, [selectedService]);

  const openServiceModal = (service) => {
    setSelectedService(service);
  };

  const closeServiceModal = () => {
    setSelectedService(null);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
    closeServiceModal();
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services - Mr Heritage",
    description:
      "Professional web development services specializing in Python/Django backend development, React frontend development, and full-stack solutions.",
    url: "https://mr-heritage.name.ng/",
    provider: {
      "@type": "Person",
      name: "Olayoriju Inioluwa",
      alternateName: ["Mr Heritage", "Inioluwa", "inioluwa_dev", "Comibyte"],
      jobTitle: "Systems & Product Engineer",
    },
    serviceType: "Web Development",
    areaServed: "Worldwide",
    offers: [
      {
        "@type": "Offer",
        name: "Backend API Development",
        description:
          "Robust backend APIs and server-side applications built with Python/Django for scalability and performance.",
        price: "2000",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Full-Stack Web Development",
        description:
          "Complete web application development with Django backend and modern frontend technologies.",
        price: "3500",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Database Design & Optimization",
        description:
          "Expert database design, optimization, and management for both SQL and NoSQL databases.",
        price: "1500",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Frontend Development",
        description:
          "Modern, responsive frontend applications built with React and modern CSS frameworks.",
        price: "2000",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "PWA Development",
        description:
          "Progressive Web Applications that work offline and provide native app-like experience.",
        price: "2500",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        name: "Technical Consulting",
        description:
          "Expert technical guidance, code reviews, and architecture consulting for backend development.",
        price: "100",
        priceCurrency: "USD",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          price: "100",
          priceCurrency: "USD",
          unitText: "per hour",
        },
      },
    ],
  };

  return (
    <section id="services" className="services" ref={servicesRef}>
      <SEO
        title="Web Development Services - Mr Heritage"
        description="Professional web development services specializing in Python/Django backend development, React frontend development, full-stack solutions, and technical consulting."
        keywords="Web Development Services, Olayoriju Inioluwa, Inioluwa, inioluwa_dev, Comibyte, Olayoriju, Python Django Developer, React Developer, Backend API Development, Full Stack Development, Database Design, PWA Development, Technical Consulting"
        url="https://mr-heritage.name.ng/"
        structuredData={structuredData}
      />
      <div className="services__background">
        <div className="services__gradient services__gradient--1"></div>
        <div className="services__gradient services__gradient--2"></div>
        <div className="services__gradient services__gradient--3"></div>
      </div>

      <div className="services__container">
        <div
          className={`services__content ${
            isVisible ? "services__content--visible" : ""
          }`}
        >
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

          {/* Service Filters */}
          <div className="services__filters">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                className={`filter-btn ${
                  activeFilter === category.id ? "filter-btn--active" : ""
                }`}
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
                    "--service-color": service.color,
                    "--delay": `${index * 0.1}s`,
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
                    <p className="service-card__description">
                      {service.shortDescription}
                    </p>

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
                      {service.technologies
                        .slice(0, 3)
                        .map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">
                            {tech}
                          </span>
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
                Ready to Build Your{" "}
                <span className="text-gradient">Backend</span>?
              </h3>
              <p className="cta-card__description">
                Let's discuss your requirements and create robust, scalable
                backend solutions together. I specialize in Python/Django
                development and can help bring your ideas to life with clean,
                efficient code.
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
            <button
              className="service-modal__close"
              onClick={closeServiceModal}
            >
              <FiX />
            </button>

            <div className="service-modal__content">
              <div className="service-modal__header">
                <div
                  className="service-modal__icon"
                  style={{ "--service-color": selectedService.color }}
                >
                  <selectedService.icon />
                </div>
                <div className="service-modal__title-section">
                  <h2 className="service-modal__title">
                    {selectedService.title}
                  </h2>
                  <p className="service-modal__description">
                    {selectedService.description}
                  </p>
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
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
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
