import React from 'react';
import { 
  FiMail, 
  FiPhone,
  FiMapPin,
  FiGithub,
  FiCode,
  FiYoutube
} from 'react-icons/fi';
import '../../styles/layout/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();


  const quickLinks = [
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'Resume', path: '/resume' },
    { name: 'Contact', path: '/contact' }
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
      color: '#737373'
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

  return (
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
                <span className="logo-text">Inioluwa</span>
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
              <h4 className="footer__section-title">Navigation</h4>
              <ul className="footer__links">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="footer__link"
                      onClick={scrollToTop}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specialties Section */}
            <div className="footer__section">
              <h4 className="footer__section-title">Specialties</h4>
              <ul className="footer__links">
                <li><Link to="/resume" className="footer__link" onClick={scrollToTop}>React Frontend</Link></li>
                <li><Link to="/resume" className="footer__link" onClick={scrollToTop}>FastAPI Backend</Link></li>
                <li><Link to="/resume" className="footer__link" onClick={scrollToTop}>Python/Django API</Link></li>
                <li><Link to="/projects" className="footer__link" onClick={scrollToTop}>Case Studies</Link></li>
                <li><Link to="/blog" className="footer__link" onClick={scrollToTop}>Technical Blog</Link></li>
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

        </div>
      </footer>
  );
};

export default Footer;