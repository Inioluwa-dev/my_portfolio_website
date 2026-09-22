import React from 'react';
import { 
  FiMail, 
  FiPhone, 
  FiMapPin, 
  FiGithub 
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
    { icon: FiMail,   label: 'Email',    value: 'misterhge@gmail.com', href: 'mailto:misterhge@gmail.com' },
    { icon: FiPhone,  label: 'Phone',    value: '+234 913 377 0970',   href: 'tel:+2349133770970' },
    { icon: FiMapPin, label: 'Location', value: 'Lagos, Nigeria',      href: 'https://maps.google.com/?q=Lagos,Nigeria' },
  ];

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="footer">
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
              Building robust systems and beautiful products.<br />
              Based in Lagos, Nigeria.
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
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer__section">
            <h4 className="footer__section-title">Navigation</h4>
            <ul className="footer__links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="footer__link" onClick={scrollToTop}>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__section">
            <h4 className="footer__section-title">Get In Touch</h4>
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
                    <span className="footer__contact-icon"><Icon /></span>
                    <span className="footer__contact-value">{contact.value}</span>
                  </a>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="footer__bottom">
          <span className="footer__copyright">
            © {currentYear} Olayoriju Inioluwa. All rights reserved.
          </span>
        </div>

      </div>
    </footer>
  );
};

export default Footer;