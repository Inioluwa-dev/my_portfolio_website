


import React from "react";
import styles from "./Projects.module.css";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";


const projectIcons = [
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" key="ecom">
    <rect width="64" height="64" rx="16" fill="url(#grad1)" />
    <path d="M20 32v-4a8 8 0 0116 0v4" stroke="#000" strokeWidth="2" />
    <rect x="18" y="32" width="28" height="16" rx="4" fill="#fff" stroke="#000" strokeWidth="2" />
    <rect x="26" y="40" width="8" height="6" rx="2" fill="#00C2B2" />
    <rect x="36" y="40" width="8" height="6" rx="2" fill="#FFD700" />
    <defs>
      <linearGradient id="grad1" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#b993f7" />
        <stop offset="1" stopColor="#7f8ce3" />
      </linearGradient>
    </defs>
  </svg>,
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" key="task">
    <rect width="64" height="64" rx="16" fill="url(#grad2)" />
    <rect x="20" y="20" width="24" height="32" rx="4" fill="#fff" stroke="#000" strokeWidth="2" />
    <rect x="28" y="28" width="8" height="2" rx="1" fill="#000" />
    <rect x="28" y="34" width="16" height="2" rx="1" fill="#7f8ce3" />
    <rect x="28" y="40" width="12" height="2" rx="1" fill="#b993f7" />
    <defs>
      <linearGradient id="grad2" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#b993f7" />
        <stop offset="1" stopColor="#7f8ce3" />
      </linearGradient>
    </defs>
  </svg>,
  <svg width="64" height="64" viewBox="0 0 64 64" fill="none" key="social">
    <rect width="64" height="64" rx="16" fill="url(#grad3)" />
    <rect x="20" y="40" width="6" height="8" rx="2" fill="#00C2B2" />
    <rect x="30" y="32" width="6" height="16" rx="2" fill="#FFD700" />
    <rect x="40" y="24" width="6" height="24" rx="2" fill="#7f8ce3" />
    <rect x="20" y="24" width="26" height="2" rx="1" fill="#000" />
    <defs>
      <linearGradient id="grad3" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#b993f7" />
        <stop offset="1" stopColor="#7f8ce3" />
      </linearGradient>
    </defs>
  </svg>
];

const projects = [
  {
    title: "Intelligence Quiz",
    description:
      "Discover your dominant intelligence type and get personalized tech learning paths. This interactive quiz app helps you find your strengths and explore new skills in technology.",
    demo: "https://tech-citi.web.app",
    github: "https://github.com/Inioluwa-dev/tech-citi-intelligence-quiz",
    iconIdx: 0,
  },
  {
    title: "Kefi (Beta)",
    description:
      "A social media prototype built with Django and HTML. Features include likes, comments, post creation, real-time messaging, notifications, and image capture for a complete experience.",
    demo: "https://kefi.onrender.com",
    github: "https://github.com/Inioluwa-dev/Kefi_Beta_V1",
    iconIdx: 2,
  },
  {
    title: "Konverter WebApp",
    description:
      "Convert CSV to JSON and minify code (HTML, CSS, JS) instantly in your browser. Built with React, this tool is fast, simple, and helps developers clean and transform data easily.",
    demo: "https://kon-verter.web.app",
    github: "https://github.com/Inioluwa-dev/Konverter",
    iconIdx: 1,
  },

];

function ProjectCard({ project }) {
  return (
    <div className={styles.card}>
      <div className={styles.iconWrapper}>{projectIcons[project.iconIdx]}</div>
      <h3 className={styles.cardTitle}>{project.title}</h3>
      <p className={styles.cardDesc + ' ' + styles.cardDescFixed}>{project.description}</p>
      <div className={styles.buttonGroup}>
        <a href={project.demo} className={styles.demoBtn} target="_blank" rel="noopener noreferrer">
          <FiExternalLink size={22} style={{ verticalAlign: "middle" }} />
          Live Demo
        </a>
        <a href={project.github} className={styles.githubBtn} target="_blank" rel="noopener noreferrer">
          <FaGithub size={22} style={{ verticalAlign: "middle" }} />
          GitHub
        </a>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={styles.cardsContainer}>
        {projects.map((project, idx) => (
          <ProjectCard project={project} key={idx} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
