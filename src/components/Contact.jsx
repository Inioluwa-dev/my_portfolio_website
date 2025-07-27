import React from 'react';
import { FiSend } from 'react-icons/fi';
import { FaGithub, FaYoutube, FaInstagram, FaXTwitter } from 'react-icons/fa6';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contactSection}>
      <h2 className={styles.contactTitle}>Get In Touch</h2>
      <form className={styles.contactForm} action="https://formspree.io/f/mldljpoo" method="POST">
        <p className={styles.contactSubtitle}>Have a project in mind? Let's work together to bring your ideas to life!</p>
        <div className={styles.contactRow}>
          <div className={styles.contactField}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" autoComplete="off" />
          </div>
          <div className={styles.contactField}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="your.email@example.com" autoComplete="off" />
          </div>
        </div>
        <div className={styles.contactField}>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows={4} cols={100} placeholder="Tell me about your project..." />
        </div>
        <button type="submit" className={styles.contactBtn}>
          <FiSend style={{ marginRight: '0.5rem', fontSize: '1.2em' }} />
          Send Message
        </button>
      </form>
      <div className={styles.contactSocialRow}>
        <a href="https://github.com/Inioluwa-dev" target="_blank" rel="noopener noreferrer" className={styles.contactSocialIcon} aria-label="GitHub">
          <FaGithub size={32} />
        </a>
        <a href="https://youtube.com/@Inioluwa-Dev" target="_blank" rel="noopener noreferrer" className={styles.contactSocialIcon} aria-label="YouTube">
          <FaYoutube size={32} />
        </a>
        <a href="https://instagram.com/Inioluwa_dev" target="_blank" rel="noopener noreferrer" className={styles.contactSocialIcon} aria-label="Instagram">
          <FaInstagram size={32} />
        </a>
        <a href="https://x.com/Inioluwa_dev" target="_blank" rel="noopener noreferrer" className={styles.contactSocialIcon} aria-label="X">
          <FaXTwitter size={32} />
        </a>
      </div>
    </section>
  );
};

export default Contact;
