import React, { useState, useEffect, useRef } from 'react';
import { 
  FiDownload, 
  FiArrowRight, 
  FiGithub, 
  FiLinkedin, 
  FiMail,
  FiMapPin,
  FiCalendar,
  FiCoffee,
  FiYoutube
} from 'react-icons/fi';
import '../../styles/components/Hero.css';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef(null);

  const roles = [
    "Full Stack Developer",
    "Python/Django Expert",
    "Backend Specialist",
    "Problem Solver",
    "Creative Developer"
  ];

  const stats = [
    { number: "7+", label: "Years Learning", icon: FiCoffee },
    { number: "2+", label: "Years Working", icon: FiCalendar },
    { number: "100%", label: "Dedication", icon: FiArrowRight }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: FiGithub,
      url: "https://github.com/Inioluwa-dev",
      color: "#333"
    },
    {
      name: "YouTube",
      icon: FiYoutube,
      url: "https://youtube.com/@Inioluwa-dev",
      color: "#ff0000"
    },
    {
      name: "Email",
      icon: FiMail,
      url: "mailto:misterhge@gmail.com",
      color: "#ea4335"
    }
  ];

  useEffect(() => {
    setIsVisible(true);

    // Role rotation
    const roleInterval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    // Mouse tracking for parallax
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        setMousePosition({ x, y });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      clearInterval(roleInterval);
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [roles.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* Background Elements */}
      <div className="hero__background">
        <div className="hero__gradient hero__gradient--1"></div>
        <div className="hero__gradient hero__gradient--2"></div>
        <div className="hero__gradient hero__gradient--3"></div>
        
        {/* Floating Elements */}
        <div className="hero__floating">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i} 
              className={`hero__particle hero__particle--${i + 1}`}
              style={{
                '--mouse-x': `${mousePosition.x}%`,
                '--mouse-y': `${mousePosition.y}%`
              }}
            />
          ))}
        </div>
      </div>

      <div className="hero__container">
        <div className="hero__content">
          
          {/* Main Content */}
          <div className={`hero__main ${isVisible ? 'hero__main--visible' : ''}`}>
            
            {/* Greeting */}
            <div className="hero__greeting">
              <div className="hero__welcome">
                <span className="hero__welcome-text">Hello, I'm</span>
                <div className="hero__welcome-wave">👋</div>
              </div>
            </div>

            {/* Name & Title */}
            <div className="hero__identity">
              <h1 className="hero__name">
                <span className="hero__name-line">
                  <span className="hero__name-text">Olayoriju</span>
                </span>
                <span className="hero__name-line">
                  <span className="hero__name-text hero__name-text--accent">Inioluwa</span>
                </span>
              </h1>
              
              <div className="hero__role">
                <span className="hero__role-prefix">I'm a </span>
                <span className="hero__role-text" key={currentRole}>
                  {roles[currentRole]}
                </span>
                <span className="hero__role-cursor">|</span>
              </div>
            </div>

            {/* Description */}
            <p className="hero__description">
              I craft exceptional digital experiences through clean code and innovative design. 
              Specializing in Python/Django backend development with modern frontend technologies, 
              I transform ideas into scalable, user-centric applications that make a real impact.
            </p>

            {/* Stats */}
            <div className="hero__stats">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="hero__stat">
                    <div className="hero__stat-icon">
                      <IconComponent />
                    </div>
                    <div className="hero__stat-content">
                      <span className="hero__stat-number">{stat.number}</span>
                      <span className="hero__stat-label">{stat.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="hero__actions">
              <button 
                className="hero__cta hero__cta--primary"
                onClick={() => scrollToSection('projects')}
              >
                <span className="hero__cta-text">View My Work</span>
                <FiArrowRight className="hero__cta-icon" />
              </button>
              
              <button 
                className="hero__cta hero__cta--secondary"
                onClick={() => scrollToSection('contact')}
              >
                <span className="hero__cta-text">Get In Touch</span>
                <FiMail className="hero__cta-icon" />
              </button>
              
              <a 
                href="/src/assets/mr_h.png" 
                className="hero__cta hero__cta--outline"
                download="Olayoriju_Inioluwa_Photo.png"
                aria-label="Download photo"
              >
                <FiDownload className="hero__cta-icon" />
                <span className="hero__cta-text">Download CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="hero__social">
              <span className="hero__social-label">Connect with me</span>
              <div className="hero__social-links">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      className="hero__social-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit my ${social.name} profile`}
                      style={{ '--social-color': social.color }}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Visual Content */}
          <div className={`hero__visual ${isVisible ? 'hero__visual--visible' : ''}`}>
            
            {/* Code Preview */}
            <div className="hero__code">
              <div className="hero__code-header">
                <div className="hero__code-controls">
                  <span className="hero__code-dot hero__code-dot--red"></span>
                  <span className="hero__code-dot hero__code-dot--yellow"></span>
                  <span className="hero__code-dot hero__code-dot--green"></span>
                </div>
                <span className="hero__code-title">portfolio.js</span>
              </div>
              
              <div className="hero__code-content">
                <div className="hero__code-line">
                  <span className="hero__code-number">1</span>
                  <span className="hero__code-text">
                    <span className="hero__code-keyword">const</span>
                    <span className="hero__code-variable"> developer</span>
                    <span className="hero__code-operator"> = </span>
                    <span className="hero__code-punctuation">{'{'}</span>
                  </span>
                </div>
                
                <div className="hero__code-line">
                  <span className="hero__code-number">2</span>
                  <span className="hero__code-text">
                    <span className="hero__code-property">  name</span>
                    <span className="hero__code-punctuation">: </span>
                    <span className="hero__code-string">'Olayoriju Inioluwa'</span>
                    <span className="hero__code-punctuation">,</span>
                  </span>
                </div>
                
                <div className="hero__code-line">
                  <span className="hero__code-number">3</span>
                  <span className="hero__code-text">
                    <span className="hero__code-property">  role</span>
                    <span className="hero__code-punctuation">: </span>
                    <span className="hero__code-string">'Full Stack Developer'</span>
                    <span className="hero__code-punctuation">,</span>
                  </span>
                </div>
                
                <div className="hero__code-line">
                  <span className="hero__code-number">4</span>
                  <span className="hero__code-text">
                    <span className="hero__code-property">  skills</span>
                    <span className="hero__code-punctuation">: [</span>
                    <span className="hero__code-string">'Python'</span>
                    <span className="hero__code-punctuation">, </span>
                    <span className="hero__code-string">'Django'</span>
                    <span className="hero__code-punctuation">, </span>
                    <span className="hero__code-string">'React'</span>
                    <span className="hero__code-punctuation">],</span>
                  </span>
                </div>
                
                <div className="hero__code-line">
                  <span className="hero__code-number">5</span>
                  <span className="hero__code-text">
                    <span className="hero__code-property">  passion</span>
                    <span className="hero__code-punctuation">: </span>
                    <span className="hero__code-string">'Backend Development'</span>
                  </span>
                </div>
                
                <div className="hero__code-line">
                  <span className="hero__code-number">6</span>
                  <span className="hero__code-text">
                    <span className="hero__code-punctuation">{'}'}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="hero__tech">
              <div className="hero__tech-label">Tech Stack</div>
              <div className="hero__tech-items">
                {['Python', 'Django', 'React', 'JavaScript', 'MySQL', 'MongoDB'].map((tech, index) => (
                  <span 
                    key={tech} 
                    className="hero__tech-item"
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="hero__scroll">
          <div className="hero__scroll-line"></div>
          <span className="hero__scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;