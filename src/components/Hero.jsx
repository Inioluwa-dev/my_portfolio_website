import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
<section id="home" className={styles.heroSection}>
      <div className={styles.heroLeft}>
        <h1 className={styles.heroTitle}>
          Hi, I'm <span>Olayoriju</span><br />Inioluwa
        </h1>
        <h2 className={styles.heroSubtitle}>Fullstack Dev & Explorer</h2>
        <p className={styles.heroDesc}>
          Passionate fullstack developer exploring the tech space. I build modern web applications with React, Django, and cutting-edge technologies. Currently expanding my skills with Node.js and always eager to learn new technologies.
        </p>
        <div className={styles.heroButtons}>
          <a href="#projects" className={styles.heroBtnPrimary}>View My Work</a>
          <a href="#contact" className={styles.heroBtnSecondary}>Get In Touch</a>
        </div>
      </div>
      <div className={styles.heroRight}>
        <div className={styles.heroCard}>
          <span className={styles.heroCustomIcon}>&lt;/&gt;</span>
          <div>
            <h3 className={styles.heroCardTitle}>Building Digital Experiences</h3>
            <p className={styles.heroCardDesc}>Crafting beautiful, functional, and user-friendly applications</p>
          </div>
        </div>
      </div>
      <div className={styles.heroBgCircle1}></div>
      <div className={styles.heroBgCircle2}></div>
      <div className={styles.heroBgCircle3}></div>
      <div className={styles.heroBgCircle4}></div>
    </section>
  );
};

export default Hero;
