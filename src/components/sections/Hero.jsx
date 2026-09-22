import React, { useState, useEffect, useRef } from 'react';
import { 
  FiDownload, 
  FiArrowRight, 
  FiMail 
} from 'react-icons/fi';
import '../../styles/components/Hero.css';
import CvPdf from '../../assets/mr-heritage.pdf';
import MathParticles from '../ui/MathParticles';

const roles = [
  "Systems Engineer",
  "Product Engineer",
  "Tech Instructor",
  "Mathematician",
];

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef(null);

  // Typewriter state
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);


  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const handleType = () => {
      const idx = loopNum % roles.length;
      const fullText = roles[idx];

      if (isDeleting) {
        setTypedText(fullText.substring(0, typedText.length - 1));
        setTypingSpeed(25);
      } else {
        setTypedText(fullText.substring(0, typedText.length + 1));
        setTypingSpeed(70);
      }

      if (!isDeleting && typedText === fullText) {
        setTimeout(() => setIsDeleting(true), 1600);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(300);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, typingSpeed]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero" ref={heroRef}>

      {/* Background — single clean gradient, no noise */}
      <div className="hero__background">
        <MathParticles />
        <div className="hero__bg-glow hero__bg-glow--1" />
        <div className="hero__bg-glow hero__bg-glow--2" />
      </div>

      <div className="hero__container">

        {/* Top badge */}
        <div className={`hero__badge ${isVisible ? 'hero__badge--visible' : ''}`}>
          <span className="hero__badge-dot" />
          <span>Available for projects</span>
        </div>

        {/* MASSIVE Name Display */}
        <div className={`hero__name-block ${isVisible ? 'hero__name-block--visible' : ''}`}>
          {/* Subtle tag above name */}
          <p className="hero__greeting">Hello, I'm</p>

          <h1 className="hero__name">
            <span className="hero__name-line hero__name-primary">Inioluwa</span>
            <span className="hero__name-line hero__name-secondary">Olayoriju</span>
          </h1>
        </div>

        {/* Role + description row */}
        <div className={`hero__info ${isVisible ? 'hero__info--visible' : ''}`}>
          <div className="hero__role">
            <span className="hero__role-prefix">I'm a </span>
            <span className="hero__role-text">{typedText}</span>
            <span className="hero__role-cursor" aria-hidden="true">|</span>
          </div>

          <p className="hero__description">
            I design and build robust, high-performance systems and products.
            Applying mathematical optimization and clean engineering principles —
            scalable backends, efficient data pipelines, and highly responsive UIs.
          </p>
        </div>

        {/* CTA Row */}
        <div className={`hero__actions ${isVisible ? 'hero__actions--visible' : ''}`}>
          <button 
            className="hero__cta hero__cta--primary"
            onClick={() => scrollToSection('projects')}
          >
            <span>View My Work</span>
            <FiArrowRight />
          </button>

          <button 
            className="hero__cta hero__cta--secondary"
            onClick={() => scrollToSection('contact')}
          >
            <span>Get In Touch</span>
            <FiMail />
          </button>

          <a 
            href={CvPdf}
            className="hero__cta hero__cta--outline"
            download="mr-heritage.pdf"
            aria-label="Download CV"
          >
            <FiDownload />
            <span>Download CV</span>
          </a>
        </div>

        {/* Stats + Socials */}
        <div className={`hero__footer-row ${isVisible ? 'hero__footer-row--visible' : ''}`}>
          <div className="hero__stats">
            <div className="hero__stat">
              <span className="hero__stat-number">8+</span>
              <span className="hero__stat-label">Years Learning</span>
            </div>
            <div className="hero__stat-divider" />
             <div className="hero__stat">
              <span className="hero__stat-number">3+</span>
              <span className="hero__stat-label">Years Building</span>
            </div>
            <div className="hero__stat-divider" />
            <div className="hero__stat">
              <span className="hero__stat-number">50+</span>
              <span className="hero__stat-label">Projects Shipped</span>
            </div>
            </div>
        </div>

        {/* Scroll hint */}
        <div className="hero__scroll-hint">
          <div className="hero__scroll-line" />
          <span>Scroll</span>
        </div>

      </div>
    </section>
  );
};

export default Hero;