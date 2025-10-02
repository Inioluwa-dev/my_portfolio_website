import React, { useState, useEffect, useRef } from "react";
import * as FiIcons from "react-icons/fi";
import SEO from "../seo/SEO";
import "../../styles/components/Skills.css";
import {
  skillCategories as sharedSkillCategories,
  skillsData,
} from "../../data/skills";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const skillsRef = useRef(null);

  // Use shared skill categories, but map icon string to icon component
  const skillCategories = sharedSkillCategories.map((cat) => ({
    ...cat,
    icon: FiIcons[cat.icon] || FiIcons.FiCode,
  }));

  const overallStats = [
    { label: "Technologies Mastered", value: "25+", icon: FiIcons.FiCode },
    { label: "Years of Experience", value: "3+", icon: FiIcons.FiCpu },
    { label: "Projects Completed", value: "50+", icon: FiIcons.FiMonitor },
    { label: "Lines of Code", value: "100K+", icon: FiIcons.FiHardDrive },
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
    if (level >= 90) return "#10b981"; // Expert - Green
    if (level >= 80) return "#6366f1"; // Advanced - Blue
    if (level >= 70) return "#f59e0b"; // Intermediate - Yellow
    return "#ef4444"; // Beginner - Red
  };

  const getSkillLabel = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 80) return "Advanced";
    if (level >= 70) return "Intermediate";
    return "Beginner";
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Technical Skills - Mr Heritage Portfolio",
    description:
      "Comprehensive overview of technical skills and expertise in Python, Django, React, JavaScript, and other modern web development technologies.",
    url: "https://mr-heritage.name.ng/",
    mainEntity: {
      "@type": "Person",
      name: "Olayoriju Inioluwa",
      alternateName: ["Mr Heritage", "Inioluwa", "inioluwa_dev", "Comibyte"],
      jobTitle: "Full Stack Developer",
      knowsAbout: [
        "Python",
        "Django",
        "React",
        "JavaScript",
        "HTML",
        "CSS",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Node.js",
        "Git",
        "Backend Development",
        "Frontend Development",
        "Database Design",
        "API Development",
        "PWA Development",
      ],
      hasOccupation: {
        "@type": "Occupation",
        name: "Full Stack Developer",
        skills: [
          "Python (90%)",
          "Django (88%)",
          "React (80%)",
          "JavaScript (85%)",
          "HTML (95%)",
          "CSS (90%)",
          "MySQL (85%)",
          "MongoDB (80%)",
        ],
      },
    },
  };

  return (
    <section id="skills" className="skills" ref={skillsRef}>
      <SEO
        title="Technical Skills - Mr Heritage Portfolio"
        description="Explore my comprehensive technical skills in Python, Django, React, JavaScript, and modern web development technologies. 25+ technologies mastered with detailed proficiency levels."
        keywords="Technical Skills, Olayoriju Inioluwa, Inioluwa, inioluwa_dev, Comibyte, Olayoriju, Python Developer, Django Expert, React Developer, JavaScript, Full Stack Skills, Web Development Technologies, Backend Development, Frontend Development"
        url="https://mr-heritage.name.ng/"
        structuredData={structuredData}
      />
      <div className="skills__background">
        <div className="skills__gradient skills__gradient--1"></div>
        <div className="skills__gradient skills__gradient--2"></div>
        <div className="skills__gradient skills__gradient--3"></div>
      </div>

      <div className="skills__container">
        <div
          className={`skills__content ${
            isVisible ? "skills__content--visible" : ""
          }`}
        >
          {/* Section Header */}
          <div className="skills__header">
            <h2 className="skills__title">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="skills__subtitle">
              A comprehensive overview of my technical expertise and proficiency
              levels
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
                  style={{ "--delay": `${index * 0.1}s` }}
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
                  className={`category-btn ${
                    activeCategory === category.id ? "category-btn--active" : ""
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                  style={{ "--category-color": category.color }}
                >
                  <div className="category-btn__icon">
                    <IconComponent />
                  </div>
                  <div className="category-btn__content">
                    <h3 className="category-btn__title">{category.title}</h3>
                    <p className="category-btn__description">
                      {category.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Skills Grid */}
          <div className="skills__grid">
            <div className="skills__grid-header">
              <h3 className="skills__grid-title">
                {
                  skillCategories.find((cat) => cat.id === activeCategory)
                    ?.title
                }
              </h3>
              <p className="skills__grid-description">
                {
                  skillCategories.find((cat) => cat.id === activeCategory)
                    ?.description
                }
              </p>
            </div>

            <div className="skills__list">
              {skillsData[activeCategory]?.map((skill, index) => (
                <div
                  key={index}
                  className="skill-card"
                  style={{
                    "--delay": `${index * 0.1}s`,
                    "--skill-color": getSkillColor(skill.level),
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
                      <span className="skill-card__percentage">
                        {skill.level}%
                      </span>
                    </div>
                  </div>

                  <div className="skill-card__progress">
                    <div className="skill-card__progress-bg">
                      <div
                        className="skill-card__progress-fill"
                        style={{ "--progress": `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>

                  <p className="skill-card__description">{skill.description}</p>

                  <div className="skill-card__meta">
                    <div className="skill-card__experience">
                      <span className="skill-card__meta-label">
                        Experience:
                      </span>
                      <span className="skill-card__meta-value">
                        {skill.experience}
                      </span>
                    </div>
                    <div className="skill-card__projects">
                      <span className="skill-card__meta-label">Projects:</span>
                      <span className="skill-card__meta-value">
                        {skill.projects}
                      </span>
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
                Technology evolves rapidly, and I'm committed to staying current
                with the latest trends, frameworks, and best practices. I
                regularly contribute to open source projects and experiment with
                emerging technologies.
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
