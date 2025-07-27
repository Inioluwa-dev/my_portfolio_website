import React from 'react';
import styles from './About.module.css';

const skills = [
  'HTML5', 'CSS3', 'JavaScript', 'React',
  'Python', 'Django',  'Git', 'Bootstrap',
  'Responsive Design', 'Node.js (Learning)'
];

const About = () => (
  <section id="about" className={styles.aboutSection}>
    <h2 className={styles.aboutTitle}>About Me</h2>
    <div className={styles.aboutContentWrapper}>
      <div className={styles.aboutCard}>
        <h3 className={styles.aboutCardTitle}>My Journey</h3>
        <p className={styles.aboutText}>
          Welcome to my digital space! I'm Olayoriju Inioluwa, also known as Mr Heritage and Inioluwa-dev. I'm a passionate fullstack developer who loves exploring new technologies and building innovative solutions.<br /><br />
          My journey in tech started with curiosity and has evolved into a deep passion for creating meaningful digital experiences. I believe in writing clean, efficient code and building applications that make a difference.<br /><br />
          When I'm not coding, you can find me sharing knowledge on YouTube, exploring new frameworks, or contributing to the developer community.
        </p>
      </div>
      <div className={styles.aboutCard}>
        <h3 className={styles.aboutCardTitle}>Technical Skills</h3>
        <div className={styles.skillsGrid}>
          {skills.map(skill => (
            <span key={skill} className={styles.skillBadge}>{skill}</span>
          ))}
        </div>
        <div className={styles.learningSection}>
          <span className={styles.learningTitle}>Currently Learning:</span>
          <span className={styles.learningBadge}>
            <span role="img" aria-label="star">⭐</span> Node.js - Expanding my backend expertise
          </span>
        </div>
      </div>
    </div>
  </section>
);

export default About;
