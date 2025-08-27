import React, { useState, useEffect, useRef } from 'react';
import { 
  FiCode, 
  FiDatabase, 
  FiServer, 
  FiSmartphone,
  FiGlobe,
  FiTool,
  FiAward,
  FiUsers,
  FiTrendingUp,
  FiHeart,
  FiCoffee,
  FiZap,
  FiUser
} from 'react-icons/fi';
import '../../styles/components/About.css';
import mrHPhoto from '../../assets/mr_h.png';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const aboutRef = useRef(null);

  const tabs = [
    { id: 'overview', label: 'Overview', icon: FiUser },
    { id: 'skills', label: 'Skills', icon: FiCode },
    { id: 'experience', label: 'Experience', icon: FiTrendingUp }
  ];

  const highlights = [
    {
      icon: FiCode,
      title: "Clean Code Advocate",
      description: "I believe in writing maintainable, scalable code that stands the test of time.",
      color: "#6366f1"
    },
    {
      icon: FiUsers,
      title: "Collaborative Spirit",
      description: "Love working with teams to bring innovative ideas to life through technology.",
      color: "#8b5cf6"
    },
    {
      icon: FiZap,
      title: "Performance Focused",
      description: "Obsessed with creating fast, efficient applications that users love to interact with.",
      color: "#06b6d4"
    },
    {
      icon: FiHeart,
      title: "User-Centric Design",
      description: "Every line of code I write is with the end user's experience in mind.",
      color: "#10b981"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: FiGlobe,
      color: "#6366f1",
      skills: [
        { name: "HTML/CSS", level: 95, description: "Semantic markup & responsive design" },
        { name: "JavaScript", level: 85, description: "Modern ES6+ features & DOM manipulation" },
        { name: "React", level: 80, description: "Component architecture & state management" },
        { name: "Tailwind/Bootstrap", level: 75, description: "Utility-first CSS & responsive frameworks" }
      ]
    },
    {
      title: "Backend Development",
      icon: FiServer,
      color: "#8b5cf6",
      skills: [
        { name: "Python", level: 90, description: "Clean, efficient server-side logic" },
        { name: "Django", level: 88, description: "REST APIs & database modeling" },
        { name: "Node.js", level: 60, description: "Learning Express.js & real-time applications" },
        { name: "Databases", level: 85, description: "MySQL, MongoDB & PostgreSQL expertise" }
      ]
    },
    {
      title: "Tools & Technologies",
      icon: FiTool,
      color: "#06b6d4",
      skills: [
        { name: "Git", level: 85, description: "Version control & collaboration" },
        { name: "Cloud Services", level: 80, description: "Backblaze, Aiven, Render, Firebase" },
        { name: "Deployment", level: 75, description: "Application hosting & database management" },
        { name: "Mobile Development", level: 70, description: "PWA development & mobile-first design" }
      ]
    }
  ];

  const journey = [
    {
      year: "2024",
      title: "Full Stack Developer",
      company: "Freelance & Personal Projects",
      description: "Building robust web applications with Python/Django backend and modern frontend technologies. Focused on creating scalable, user-centric solutions.",
      achievements: [
        "Developed Kefi social media platform",
        "Built Konverter CSV/JSON tool with minify features",
        "Deployed multiple applications using cloud services"
      ]
    },
    {
      year: "2023",
      title: "Backend Developer",
      company: "Academy & Learning",
      description: "Attended coding academy to gain comprehensive knowledge in software development, focusing on backend technologies and best practices.",
      achievements: [
        "Completed intensive coding bootcamp",
        "Mastered Python and Django framework",
        "Learned database design and optimization"
      ]
    },
    {
      year: "2022",
      title: "Self-Taught Developer",
      company: "Mobile Learning Journey",
      description: "Started coding journey on mobile phone, learning online through various resources and building foundational programming skills.",
      achievements: [
        "Learned HTML, CSS, and JavaScript basics",
        "Built first projects on mobile device",
        "Developed passion for web development"
      ]
    }
  ];

  const stats = [
    { number: "7+", label: "Years Learning", icon: FiAward },
    { number: "2+", label: "Years Working", icon: FiTrendingUp },
    { number: "100%", label: "Dedication", icon: FiHeart },
    { number: "24/7", label: "Learning Mode", icon: FiCoffee }
  ];

  useEffect(() => {
    // Always visible on mobile
    if (window.innerWidth <= 768) {
      setIsVisible(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  const renderOverview = () => (
    <div className="about__overview">
      {/* Background Accent Blob */}
      <div className="about__accent-blob" aria-hidden="true"></div>
      <div className="about__intro">
        <div className="about__intro-header">
          <div className="about__photo about__photo--circle-glow">
            <img src={mrHPhoto} alt="Olayoriju Inioluwa (Mr Heritage)" className="about__photo-img" />
          </div>
          <div className="about__intro-text-content">
            <h3 className="about__intro-title">
              Hi, I'm <span className="text-gradient">Olayoriju Inioluwa</span> (Mr Heritage)
            </h3>
            <h4 className="about__intro-role">Full Stack Developer</h4>
            <p className="about__intro-text">
              I'm a passionate Full Stack Developer from Lagos, Nigeria, who loves turning complex problems into simple, beautiful solutions. 
              With a strong foundation in Python/Django backend development and modern frontend technologies, I create applications 
              that not only look great but perform exceptionally well.
            </p>
            <p className="about__intro-text">
              My journey into tech started at a young age when I began coding on my mobile phone. I learned online before attending 
              an academy to gain comprehensive knowledge. When I'm not coding, you'll find me pursuing my passions in photography, 
              music, poetry, and writing. I believe in continuous learning and becoming the best version of myself each day.
            </p>
          </div>
        </div>
      </div>

      <div className="about__highlights">
        {highlights.map((highlight, index) => {
          const IconComponent = highlight.icon;
          return (
            <div 
              key={index} 
              className="highlight-card highlight-card--animated"
              style={{ '--highlight-color': highlight.color, '--delay': `${index * 0.1}s` }}
            >
              <div className="highlight-card__icon highlight-card__icon--pulse">
                <IconComponent />
              </div>
              <div className="highlight-card__content">
                <h4 className="highlight-card__title">{highlight.title}</h4>
                <p className="highlight-card__description">{highlight.description}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="about__stats">
        {stats.map((stat, index) => {
          const IconComponent = stat.icon;
          return (
            <div key={index} className="stat-card stat-card--animated">
              <div className="stat-card__icon">
                <IconComponent />
              </div>
              <div className="stat-card__content">
                <span className="stat-card__number stat-card__number--count" data-count={stat.number}>{stat.number}</span>
                <span className="stat-card__label">{stat.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );

  const renderSkills = () => (
    <div className="about__skills">
      {skillCategories.map((category, categoryIndex) => {
        const IconComponent = category.icon;
        return (
          <div 
            key={categoryIndex} 
            className="skill-category"
            style={{ '--category-color': category.color }}
          >
            <div className="skill-category__header">
              <div className="skill-category__icon">
                <IconComponent />
              </div>
              <h4 className="skill-category__title">{category.title}</h4>
            </div>
            
            <div className="skill-category__skills">
              {category.skills.map((skill, skillIndex) => (
                <div 
                  key={skillIndex} 
                  className="skill-item"
                  style={{ '--delay': `${skillIndex * 0.1}s` }}
                >
                  <div className="skill-item__header">
                    <span className="skill-item__name">{skill.name}</span>
                    <span className="skill-item__level">{skill.level}%</span>
                  </div>
                  <div className="skill-item__bar">
                    <div 
                      className="skill-item__progress"
                      style={{ '--progress': `${skill.level}%` }}
                    ></div>
                  </div>
                  <p className="skill-item__description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );

  const renderJourney = () => (
    <div className="about__journey">
      <div className="journey-timeline">
        {journey.map((item, index) => (
          <div 
            key={index} 
            className="timeline-item"
            style={{ '--delay': `${index * 0.2}s` }}
          >
            <div className="timeline-item__marker">
              <span className="timeline-item__year">{item.year}</span>
            </div>
            <div className="timeline-item__content">
              <h4 className="timeline-item__title">{item.title}</h4>
              <p className="timeline-item__company">{item.company}</p>
              <p className="timeline-item__description">{item.description}</p>
              <ul className="timeline-item__achievements">
                {item.achievements.map((achievement, achIndex) => (
                  <li key={achIndex}>{achievement}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return renderOverview();
      case 'skills':
        return renderSkills();
      case 'experience':
        return renderJourney();
      default:
        return renderOverview();
    }
  };

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about__background">
        <div className="about__gradient about__gradient--1"></div>
        <div className="about__gradient about__gradient--2"></div>
      </div>

      <div className="about__container">
        <div className={`about__content ${isVisible ? 'about__content--visible' : ''}`}>
          
          {/* Section Header */}
          <div className="about__header">
            <h2 className="about__title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="about__subtitle">
              Get to know the person behind the code
            </p>
          </div>

          {/* Navigation Tabs */}
          <div className="about__tabs">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'tab-button--active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  <IconComponent className="tab-button__icon" />
                  <span className="tab-button__text">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <div className="about__tab-content">
            {renderTabContent()}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;