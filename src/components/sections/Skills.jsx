import React, { useState, useEffect, useRef } from 'react';
import { 
  FiCode, 
  FiServer, 
  FiDatabase, 
  FiTool,
  FiSmartphone,
  FiGlobe,
  FiLayers,
  FiCloud,
  FiGitBranch,
  FiMonitor,
  FiCpu,
  FiHardDrive
} from 'react-icons/fi';
import '../../styles/components/Skills.css';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillsRef = useRef(null);

  const skillCategories = [
    {
      id: 'backend',
      title: 'Backend Development',
      icon: FiServer,
      color: '#8b5cf6',
      description: 'Building robust server-side applications with Python/Django'
    },
    {
      id: 'database',
      title: 'Database & Storage',
      icon: FiDatabase,
      color: '#06b6d4',
      description: 'Data modeling and optimization across multiple DB types'
    },
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: FiGlobe,
      color: '#6366f1',
      description: 'Creating responsive user interfaces with modern tools'
    },
    {
      id: 'tools',
      title: 'Tools & DevOps',
      icon: FiTool,
      color: '#10b981',
      description: 'Development workflow and cloud deployment'
    },
    {
      id: 'cloud',
      title: 'Cloud & Infrastructure',
      icon: FiCloud,
      color: '#ef4444',
      description: 'Scalable cloud solutions and hosting'
    },
    {
      id: 'mobile',
      title: 'Mobile & PWA',
      icon: FiSmartphone,
      color: '#f59e0b',
      description: 'Progressive web applications and mobile solutions'
    }
  ];

  // Real Project Names (to be linked to GitHub):
  // - Kefi: Social media platform
  // - Konverter: CSV/JSON converter with minify/unminify features
  const skillsData = {
    frontend: [
      {
        name: 'HTML',
        level: 95,
        icon: '🌐',
        description: 'Semantic markup and accessibility best practices',
        experience: '3+ years',
        projects: 30
      },
      {
        name: 'CSS',
        level: 90,
        icon: '🎨',
        description: 'Responsive design, animations, and modern CSS features',
        experience: '3+ years',
        projects: 28
      },
      {
        name: 'JavaScript',
        level: 85,
        icon: '🟨',
        description: 'ES6+, DOM manipulation, and modern JS features',
        experience: '2+ years',
        projects: 25
      },
      {
        name: 'React',
        level: 80,
        icon: '⚛️',
        description: 'Component-based architecture and state management',
        experience: '1+ years',
        projects: 15
      },
      {
        name: 'Tailwind CSS',
        level: 70,
        icon: '💨',
        description: 'Utility-first CSS framework for rapid development',
        experience: '1+ year',
        projects: 10
      },
      {
        name: 'Bootstrap',
        level: 75,
        icon: '🎯',
        description: 'Responsive grid system and component library',
        experience: '2+ years',
        projects: 18
      }
    ],
    backend: [
      {
        name: 'Python',
        level: 90,
        icon: '🐍',
        description: 'Clean code, data structures, and algorithms',
        experience: '5+ years',
        projects: 25
      },
      {
        name: 'Django',
        level: 88,
        icon: '🐍',
        description: 'REST APIs, ORM, authentication, and security',
        experience: '3+ years',
        projects: 20
      },
      {
        name: 'Node.js',
        level: 60,
        icon: '🟢',
        description: 'Learning Express.js and backend development',
        experience: '6 months',
        projects: 5
      }
    ],
    database: [
      {
        name: 'MySQL',
        level: 85,
        icon: '🐬',
        description: 'Relational database design and optimization',
        experience: '3+ years',
        projects: 20
      },
      {
        name: 'MongoDB',
        level: 80,
        icon: '🍃',
        description: 'Document-based NoSQL database operations',
        experience: '2+ years',
        projects: 15
      },
      {
        name: 'PostgreSQL',
        level: 75,
        icon: '🐘',
        description: 'Advanced queries and database management',
        experience: '1+ year',
        projects: 10
      }
    ],
    tools: [
      {
        name: 'Git',
        level: 85,
        icon: '🐙',
        description: 'Version control and collaboration workflows',
        experience: '5+ years',
        projects: 35
      },
      {
        name: 'Backblaze',
        level: 80,
        icon: '☁️',
        description: 'Cloud storage and backup solutions',
        experience: '2+ years',
        projects: 12
      },
      {
        name: 'Aiven',
        level: 75,
        icon: '🗄️',
        description: 'Database hosting and management platform',
        experience: '1+ year',
        projects: 8
      },
      {
        name: 'Render',
        level: 80,
        icon: '🚀',
        description: 'Application hosting and deployment',
        experience: '2+ years',
        projects: 15
      },
      {
        name: 'Firebase',
        level: 75,
        icon: '🔥',
        description: 'Real-time database and authentication services',
        experience: '1+ year',
        projects: 10
      }
    ],
    mobile: [
      {
        name: 'PWA',
        level: 70,
        icon: '📲',
        description: 'Progressive Web Apps with offline capabilities',
        experience: '1+ year',
        projects: 5
      }
    ],
    cloud: [
      {
        name: 'Cloud Infrastructure',
        level: 75,
        icon: '☁️',
        description: 'Database hosting, storage, and deployment solutions',
        experience: '2+ years',
        projects: 15
      }
    ]
  };

  const overallStats = [
    { label: 'Technologies Mastered', value: '25+', icon: FiCode },
    { label: 'Years of Experience', value: '3+', icon: FiCpu },
    { label: 'Projects Completed', value: '50+', icon: FiMonitor },
    { label: 'Lines of Code', value: '100K+', icon: FiHardDrive }
  ];

  useEffect(() => {
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  const getSkillColor = (level) => {
    if (level >= 90) return '#10b981'; // Expert - Green
    if (level >= 80) return '#6366f1'; // Advanced - Blue
    if (level >= 70) return '#f59e0b'; // Intermediate - Yellow
    return '#ef4444'; // Beginner - Red
  };

  const getSkillLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Beginner';
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <div className="skills__background">
        <div className="skills__gradient skills__gradient--1"></div>
        <div className="skills__gradient skills__gradient--2"></div>
        <div className="skills__gradient skills__gradient--3"></div>
      </div>

      <div className="skills__container">
        <div className={`skills__content ${isVisible ? 'skills__content--visible' : ''}`}>
          
          {/* Section Header */}
          <div className="skills__header">
            <h2 className="skills__title">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="skills__subtitle">
              A comprehensive overview of my technical expertise and proficiency levels
            </p>
          </div>

          {/* Overall Stats */}
          <div className="skills__stats">
            {overallStats.map((stat, index) => {
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
                    <span className="stat-card__value">{stat.value}</span>
                    <span className="stat-card__label">{stat.label}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Category Navigation */}
          <div className="skills__categories">
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <button
                  key={category.id}
                  className={`category-btn ${activeCategory === category.id ? 'category-btn--active' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                  style={{ '--category-color': category.color }}
                >
                  <div className="category-btn__icon">
                    <IconComponent />
                  </div>
                  <div className="category-btn__content">
                    <h3 className="category-btn__title">{category.title}</h3>
                    <p className="category-btn__description">{category.description}</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="skills__grid">
            <div className="skills__grid-header">
              <h3 className="skills__grid-title">
                {skillCategories.find(cat => cat.id === activeCategory)?.title}
              </h3>
              <p className="skills__grid-description">
                {skillCategories.find(cat => cat.id === activeCategory)?.description}
              </p>
            </div>

            <div className="skills__list">
              {skillsData[activeCategory]?.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card"
                  style={{ 
                    '--delay': `${index * 0.1}s`,
                    '--skill-color': getSkillColor(skill.level)
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="skill-card__header">
                    <div className="skill-card__info">
                      <span className="skill-card__icon">{skill.icon}</span>
                      <div className="skill-card__details">
                        <h4 className="skill-card__name">{skill.name}</h4>
                        <span className="skill-card__label">
                          {getSkillLabel(skill.level)}
                        </span>
                      </div>
                    </div>
                    <div className="skill-card__level">
                      <span className="skill-card__percentage">{skill.level}%</span>
                    </div>
                  </div>

                  <div className="skill-card__progress">
                    <div className="skill-card__progress-bg">
                      <div 
                        className="skill-card__progress-fill"
                        style={{ '--progress': `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="skill-card__description">{skill.description}</p>

                  <div className="skill-card__meta">
                    <div className="skill-card__experience">
                      <span className="skill-card__meta-label">Experience:</span>
                      <span className="skill-card__meta-value">{skill.experience}</span>
                    </div>
                    <div className="skill-card__projects">
                      <span className="skill-card__meta-label">Projects:</span>
                      <span className="skill-card__meta-value">{skill.projects}</span>
                    </div>
                  </div>

                  {hoveredSkill === skill && (
                    <div className="skill-card__tooltip">
                      <div className="tooltip__content">
                        <h5>{skill.name}</h5>
                        <p>{skill.description}</p>
                        <div className="tooltip__stats">
                          <span>Experience: {skill.experience}</span>
                          <span>Projects: {skill.projects}</span>
                          <span>Proficiency: {skill.level}%</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div className="skills__summary">
            <div className="summary-card">
              <h3 className="summary-card__title">
                Continuous <span className="text-gradient">Learning</span>
              </h3>
              <p className="summary-card__description">
                Technology evolves rapidly, and I'm committed to staying current with the latest 
                trends, frameworks, and best practices. I regularly contribute to open source 
                projects and experiment with emerging technologies.
              </p>
              <div className="summary-card__badges">
                <span className="badge">Always Learning</span>
                <span className="badge">Open Source Contributor</span>
                <span className="badge">Best Practices Advocate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;