import React, { useState, useEffect } from 'react';
import { 
  FiMail, 
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
  FiTwitter,
  FiInstagram,
  FiArrowUp,
  FiHeart,
  FiCode,
  FiExternalLink,
  FiDownload,
  FiYoutube
} from 'react-icons/fi';
import '../../styles/layout/Footer.css';
import CvPdf from '../../assets/mr-heritage.pdf';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setShowBackToTop(scrollTop > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const services = [
    { name: 'Web Development', href: '#services' },
    { name: 'Mobile Apps', href: '#services' },
    { name: 'API Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'Consulting', href: '#services' }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: FiGithub,
      href: 'https://github.com/Inioluwa-dev',
      color: '#333'
    },
    {
      name: 'YouTube',
      icon: FiYoutube,
      href: 'https://youtube.com/@Inioluwa-dev',
      color: '#ff0000'
    },
    {
      name: 'Email',
      icon: FiMail,
      href: 'mailto:misterhge@gmail.com',
      color: '#6366f1'
    }
  ];

  const contactInfo = [
    {
      icon: FiMail,
      label: 'Email',
      value: 'misterhge@gmail.com',
      href: 'mailto:misterhge@gmail.com'
    },
    {
      icon: FiPhone,
      label: 'Phone',
      value: '+234 9133770970',
      href: 'tel:+2349133770970'
    },
    {
      icon: FiMapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: 'https://www.google.com/maps/place/Lagos/@6.4500001,3.3900001,11z/data=!3m1!4b1!4m6!3m5!1s0x103b8b2ae689e591:0x837e846f02221e80!8m2!3d6.4540613!4d3.4094101!16zL20vMDE3Z2V1?entry=ttu&g_ep=EgoyMDI1MDIyMi4wIKXMDSoASAFQAw%3D%3D'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (href) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.open(href, '_blank');
    }
  };

  return (
    <>
      <footer className="footer">
        <div className="footer__background">
          <div className="footer__gradient footer__gradient--1"></div>
          <div className="footer__gradient footer__gradient--2"></div>
        </div>

        <div className="footer__container">
          
          {/* Main Footer Content */}
          <div className="footer__main">
            
            {/* Brand Section */}
            <div className="footer__brand">
              <div className="footer__logo">
                <div className="logo-icon">
                  <FiCode />
                </div>
                <span className="logo-text">Olayoriju</span>
              </div>
              <p className="footer__tagline">
                Crafting digital experiences with passion and precision. 
                Let's build something amazing together.
              </p>
              <div className="footer__social">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                      style={{ '--social-color': social.color }}
                      aria-label={social.name}
                    >
                      <IconComponent />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__section">
              <h4 className="footer__section-title">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="footer__link"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer__section">
              <h4 className="footer__section-title">Services</h4>
              <ul className="footer__links">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection(service.href)}
                      className="footer__link"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__section">
              <h4 className="footer__section-title">Get In Touch</h4>
              <div className="footer__contact">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      className="contact-item"
                      target={contact.href.startsWith('http') ? '_blank' : '_self'}
                      rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                    >
                      <div className="contact-item__icon">
                        <IconComponent />
                      </div>
                      <div className="contact-item__content">
                        <span className="contact-item__label">{contact.label}</span>
                        <span className="contact-item__value">{contact.value}</span>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Newsletter Section */}
          <div className="footer__newsletter">
            <div className="newsletter-card">
              <div className="newsletter-card__content">
                <h3 className="newsletter-card__title">
                  Stay Updated
                </h3>
                <p className="newsletter-card__description">
                  Get notified about new projects, articles, and opportunities.
                </p>
              </div>
              <div className="newsletter-card__actions">
                <button 
                  className="newsletter-btn newsletter-btn--primary"
                  onClick={() => scrollToSection('#contact')}
                >
                  <FiMail />
                  <span>Get In Touch</span>
                </button>
                <a 
                  href={CvPdf}
                  download="mr-heritage.pdf"
                  className="newsletter-btn newsletter-btn--secondary"
                >
                  <FiDownload />
                  <span>Download CV</span>
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="footer__bottom">
            <div className="footer__bottom-content">
              <div className="footer__copyright">
                <p>
                  © {currentYear} Comibyte Team <br />
                  Made by Olayoriju Inioluwa.
                </p>
              </div>
            </div>
          </div>

        </div>
      </footer>

      {/* Fixed Back to Top Button */}
      <button 
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <FiArrowUp />
      </button>
    </>
  );
};

export default Footer;