import React from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub,
  FiArrowUp,
  FiArrowUpRight
} from 'react-icons/fi';
import '../../styles/layout/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Blog',     path: '/blog' },
    { name: 'Resume',   path: '/resume' },
    { name: 'Contact',  path: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub',  icon: FiGithub,  href: 'https://github.com/Inioluwa-dev' },
    { name: 'Email',   icon: FiMail,    href: 'mailto:misterhge@gmail.com' },
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
      value: '+234 913 377 0970',   
      href: 'tel:+2349133770970' 
    },
    { 
      icon: FiMapPin, 
      label: 'Location', 
      value: 'Lagos, Nigeria (WAT)',      
      href: 'https://maps.google.com/?q=Lagos,Nigeria' 
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__glow-effect" aria-hidden="true" />
      <div className="footer__top-line" />

      <div className="footer__container">
        
        {/* Main Footer Content */}
        <div className="footer__main">
          
          {/* Brand */}
          <div className="footer__brand">

            <Link to="/" className="footer__wordmark" onClick={scrollToTop}>
              Inioluwa<span className="footer__wordmark-dot">.</span>
            </Link>
            
            <p className="footer__tagline">
              Software engineer crafting scalable backends and intuitive digital experiences.
            </p>

            <div className="footer__social">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer__social-link"
                    aria-label={social.name}
                  >
                    <Icon className="footer__social-icon" />
                    <span className="footer__social-name">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__section footer__section--nav">
            <h4 className="footer__section-title">Navigation</h4>
            <div className="footer__links-grid">
              {quickLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className="footer__link-card" 
                  onClick={scrollToTop}
                >
                  <span className="footer__link-name">{link.name}</span>
                  <FiArrowUpRight className="footer__link-arrow" />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="footer__section footer__section--contact">
            <h4 className="footer__section-title">Direct Connect</h4>
            <div className="footer__contact">
              {contactInfo.map((contact) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    className="footer__contact-item"
                    target={contact.href.startsWith('http') ? '_blank' : '_self'}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  >
                    <span className="footer__contact-icon">
                      <Icon />
                    </span>
                    <div className="footer__contact-details">
                      <span className="footer__contact-label">{contact.label}</span>
                      <span className="footer__contact-value">{contact.value}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <div className="footer__bottom-left">
            <span className="footer__copyright">
              &copy; {currentYear} Olayoriju Inioluwa. All rights reserved.
            </span>
          </div>

          <button 
            type="button" 
            className="footer__back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <FiArrowUp className="footer__back-to-top-icon" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;