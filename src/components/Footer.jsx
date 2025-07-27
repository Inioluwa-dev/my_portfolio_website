import React from 'react';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footerPill}>
      &copy; {new Date().getFullYear()} &mdash; Designed by Mr. Heritage &bull; Proudly part of the Comibyte Team
    </div>
  </footer>
);

export default Footer;
