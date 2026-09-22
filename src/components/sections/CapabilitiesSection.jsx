import React from "react";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiServer,
  FiCode,
  FiDatabase,
  FiGlobe,
  FiSmartphone,
  FiUsers,
  FiLayers,
  FiCheckCircle,
} from "react-icons/fi";
import "../../styles/components/CapabilitiesSection.css";

const CapabilitiesSection = () => {
  const stackGroups = [
    {
      category: "Backend & Systems",
      skills: ["Python", "Django", "FastAPI", "Node.js", "REST APIs", "WebSockets"],
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Migrations"],
    },
    {
      category: "Frontend & Web",
      skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5/CSS3", "Bootstrap"],
    },
    {
      category: "DevOps & Tools",
      skills: ["Git/GitHub", "Docker", "Render", "Vercel", "Aiven", "Linux"],
    },
    {
      category: "Applied AI & Math",
      skills: ["Gemini/OpenAI APIs", "OCR/Vision", "Optimization", "Clean Architecture"],
    },
  ];

  const serviceOfferings = [
    {
      icon: FiServer,
      title: "Backend API Development",
      summary: "Scalable REST APIs, auth, schema design & microservices in Python & Django.",
    },
    {
      icon: FiCode,
      title: "Full-Stack Web Development",
      summary: "End-to-end applications connecting Django/FastAPI backends with sleek React UIs.",
    },
    {
      icon: FiDatabase,
      title: "Database Design & Optimization",
      summary: "Relational & NoSQL schema design, query indexing, caching & data migrations.",
    },
    {
      icon: FiGlobe,
      title: "Frontend Development",
      summary: "Responsive, accessible component architecture with React and modern CSS.",
    },
    {
      icon: FiSmartphone,
      title: "PWA Development",
      summary: "Offline-capable web applications with native-like mobile performance.",
    },
    {
      icon: FiUsers,
      title: "Technical Consulting",
      summary: "System design reviews, code audits, architecture roadmaps & best practices.",
    },
  ];

  return (
    <section id="capabilities" className="capabilities-section">
      <div className="container">
        {/* Section Header */}
        <div className="capabilities-header text-center">
          <div className="capabilities-badge">
            <FiLayers />
            <span>Stack & Services</span>
          </div>
          <h2 className="section-title">
            Skills & <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            Core technical stack and professional software engineering services.
          </p>
        </div>

        {/* Side-by-Side Dual Column Grid */}
        <div className="capabilities-dual-grid">
          
          {/* Left Column: Tech Stack */}
          <div className="capabilities-column card-glass">
            <div className="capabilities-column-header">
              <h3 className="column-title">Tech Stack</h3>
              <span className="column-tag">Technologies</span>
            </div>

            <div className="stack-groups-list">
              {stackGroups.map((group, idx) => (
                <div key={idx} className="stack-group-row">
                  <span className="stack-group-name">{group.category}</span>
                  <div className="stack-tag-chips">
                    {group.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="stack-chip">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="capabilities-column-footer">
              <Link to="/resume" className="inline-link-cta">
                <span>View Full Résumé & Experience</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>

          {/* Right Column: Services Mentioned */}
          <div className="capabilities-column card-glass">
            <div className="capabilities-column-header">
              <h3 className="column-title">Services Offered</h3>
              <span className="column-tag">Solutions</span>
            </div>

            <div className="services-compact-list">
              {serviceOfferings.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="service-compact-row">
                    <div className="service-compact-icon">
                      <Icon />
                    </div>
                    <div className="service-compact-text">
                      <h4 className="service-compact-title">{service.title}</h4>
                      <p className="service-compact-desc">{service.summary}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="capabilities-column-footer">
              <Link to="/contact" className="inline-link-cta">
                <span>Request a Service in Contact</span>
                <FiArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
