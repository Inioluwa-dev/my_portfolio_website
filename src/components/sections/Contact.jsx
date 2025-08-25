import React, { useState, useEffect, useRef } from 'react';
import { 
  FiMail, 
  FiPhone,
  FiMapPin,
  FiGithub,
  FiSend,
  FiUser,
  FiMessageSquare,
  FiCheck,
  FiClock,
  FiZap,
  FiHeart,
  FiCoffee,
  FiArrowRight,
  FiYoutube
} from 'react-icons/fi';
import '../../styles/components/Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  // Formspree form ID - replace with your actual Formspree form ID
  const formspreeFormId = 'YOUR_FORMSPREE_FORM_ID'; // TODO: Add your Formspree form ID here

  const contactMethods = [
    {
      icon: FiMail,
      title: 'Email Me',
      description: 'Drop me a line anytime',
      value: 'misterhge@gmail.com',
      link: 'mailto:misterhge@gmail.com',
      color: '#6366f1',
      available: '24/7'
    },
    {
      icon: FiPhone,
      title: 'Call Me',
      description: 'Let\'s have a conversation',
      value: '+234 9133770970',
      link: 'tel:+2349133770970',
      color: '#10b981',
      available: '9 AM - 6 PM WAT'
    },
    {
      icon: FiGithub,
      title: 'GitHub',
      description: 'Check out my code',
      value: '@Inioluwa-dev',
      link: 'https://github.com/Inioluwa-dev',
      color: '#333',
      available: 'Daily commits'
    },
    {
      icon: FiYoutube,
      title: 'YouTube',
      description: 'Watch my tutorials',
      value: '@Inioluwa-dev',
      link: 'https://youtube.com/@Inioluwa-dev',
      color: '#ff0000',
      available: 'Weekly content'
    }
  ];

  const stats = [
    { number: '24h', label: 'Response Time', icon: FiClock },
    { number: '100%', label: 'Dedication', icon: FiHeart },
    { number: '6+', label: 'Projects Delivered', icon: FiCheck },
    { number: '2+', label: 'Years Working', icon: FiZap }
  ];

  const workingHours = [
    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM WAT' },
    { day: 'Saturday', hours: '10:00 AM - 2:00 PM WAT' },
    { day: 'Sunday', hours: 'Emergency only' }
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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="contact__background">
        <div className="contact__gradient contact__gradient--1"></div>
        <div className="contact__gradient contact__gradient--2"></div>
        <div className="contact__gradient contact__gradient--3"></div>
      </div>

      <div className="contact__container">
        <div className={`contact__content ${isVisible ? 'contact__content--visible' : ''}`}>
          
          {/* Section Header */}
          <div className="contact__header">
            <h2 className="contact__title">
              Let's Work <span className="text-gradient">Together</span>
            </h2>
            <p className="contact__subtitle">
              Ready to bring your ideas to life? I'm here to help you create something amazing. 
              Let's discuss your project and make it happen.
            </p>
          </div>

          {/* Stats Section */}
          <div className="contact__stats">
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

          <div className="contact__main">
            
            {/* Contact Methods */}
            <div className="contact__methods">
              <h3 className="contact__methods-title">Get In Touch</h3>
              <div className="methods-grid">
                {contactMethods.map((method, index) => {
                  const IconComponent = method.icon;
                  return (
                    <a
                      key={index}
                      href={method.link}
                      target={method.link.startsWith('http') ? '_blank' : '_self'}
                      rel={method.link.startsWith('http') ? 'noopener noreferrer' : ''}
                      className="method-card"
                      style={{ 
                        '--method-color': method.color,
                        '--delay': `${index * 0.1}s`
                      }}
                    >
                      <div className="method-card__icon">
                        <IconComponent />
                      </div>
                      <div className="method-card__content">
                        <h4 className="method-card__title">{method.title}</h4>
                        <p className="method-card__description">{method.description}</p>
                        <span className="method-card__value">{method.value}</span>
                        <span className="method-card__availability">{method.available}</span>
                      </div>
                      <div className="method-card__arrow">
                        <FiArrowRight />
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Working Hours */}
              <div className="working-hours">
                <h4 className="working-hours__title">
                  <FiClock />
                  Working Hours
                </h4>
                <div className="working-hours__list">
                  {workingHours.map((schedule, index) => (
                    <div key={index} className="working-hours__item">
                      <span className="working-hours__day">{schedule.day}</span>
                      <span className="working-hours__time">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Contact Form */}
            <div className="contact__form-section">
              <div className="form-header">
                <h3 className="form-header__title">Start Your Project</h3>
                <p className="form-header__description">
                  Tell me about your project and I'll get back to you within 24 hours.
                </p>
              </div>

                {/* Contact Form */}
                <form 
                  className="contact-form" 
                  action={`https://formspree.io/f/${formspreeFormId}`}
                  method="POST"
                >
                  {/* Personal Information */}
                  <div className="form-section">
                    <h4 className="form-section__title">Personal Information</h4>
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          <FiUser />
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-input"
                          placeholder="Your full name"
                          required
                          autoComplete="name"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          <FiMail />
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-input"
                          placeholder="your.email@example.com"
                          required
                          autoComplete="email"
                        />
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          <FiPhone />
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className="form-input"
                          placeholder="Your phone number"
                          autoComplete="tel"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="company" className="form-label">
                          Company (Optional)
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          className="form-input"
                          placeholder="Your company name"
                          autoComplete="organization"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Project Information */}
                  <div className="form-section">
                    <h4 className="form-section__title">Project Information</h4>
                    
                    <div className="form-group">
                      <label htmlFor="subject" className="form-label">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="form-input"
                        placeholder="Brief project summary"
                        required
                        maxLength="100"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="form-section">
                    <h4 className="form-section__title">Project Details</h4>
                    
                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        <FiMessageSquare />
                        Tell me about your project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        className="form-textarea"
                        placeholder="Describe your project goals, requirements, target audience, and any specific features you need. The more details you provide, the better I can help you!"
                        rows="6"
                        required
                        maxLength="1000"
                      ></textarea>
                      <div className="form-hint">
                        <span>Maximum 1000 characters</span>
                      </div>
                    </div>
                  </div>

                  {/* Form Actions */}
                  <div className="form-actions">
                    <button 
                      type="submit" 
                      className="form-submit"
                    >
                      <FiSend className="form-submit__icon" />
                      <span>Send Message</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>

          {/* CTA Section */}
          <div className="contact__cta">
            <div className="cta-card">
              <div className="cta-card__content">
                <h3 className="cta-card__title">
                  Ready to Start Something <span className="text-gradient">Amazing</span>?
                </h3>
                <p className="cta-card__description">
                  Whether you have a clear vision or just an idea, I'm here to help bring it to life. 
                  Let's create something that makes a difference together.
                </p>
                <div className="cta-card__features">
                  <div className="cta-feature">
                    <FiCheck />
                    <span>Free initial consultation</span>
                  </div>
                  <div className="cta-feature">
                    <FiCheck />
                    <span>24-hour response guarantee</span>
                  </div>
                  <div className="cta-feature">
                    <FiCheck />
                    <span>Transparent pricing</span>
                  </div>
                  <div className="cta-feature">
                    <FiCheck />
                    <span>Ongoing support included</span>
                  </div>
                </div>
              </div>
              <div className="cta-card__coffee">
                <FiCoffee />
                <span>Let's grab a virtual coffee and discuss your ideas!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;