import React, { useState, useEffect, useRef } from "react";
import "../../styles/components/About.css";
import mrHPhoto from "/images/mr_heritage.png";
import MathParticles from "../ui/MathParticles";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

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

    const currentRef = aboutRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section id="about" className="about" ref={aboutRef}>
      <div className="about__background">
        <MathParticles />
        <div className="about__gradient about__gradient--1"></div>
        <div className="about__gradient about__gradient--2"></div>
      </div>

      <div className="about__container">
        <div
          className={`about__content ${
            isVisible ? "about__content--visible" : ""
          }`}
        >
          {/* Section Header */}
          <div className="about__header">
            <h2 className="about__title">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="about__subtitle">
              Get to know the person behind the code
            </p>
          </div>

          {/* Overview Content */}
          <div className="about__tab-content">
            <div className="about__overview">
              <div className="about__accent-blob" aria-hidden="true"></div>
              
              <div className="about__grid-layout">
                {/* Left Column: Photo, Coordinates, Quote */}
                <div className="about__left-column">
                  <div className="about__photo-wrapper card-glass">
                    <img
                      src={mrHPhoto}
                      alt="Olayoriju Inioluwa (Mr Heritage)"
                      className="about__photo-img"
                    />
                  </div>

                  <div className="about__coordinates card-glass">
                    <h4 className="about__coordinates-title">PROFILE COORDINATES</h4>
                    <ul className="about__coordinates-list">
                      <li><strong>Location:</strong> Lagos, Nigeria</li>
                      <li><strong>Studies:</strong> B.Sc. Mathematics</li>
                      <li><strong>Focus:</strong> Systems & Product Engineer</li>
                      <li><strong>Core:</strong> Python, Django, React</li>
                    </ul>
                  </div>

                  <div className="about__math-quote card-glass">
                    <div className="about__math-quote-header">f(x) = Logic</div>
                    <p className="about__math-quote-text">
                      "In mathematics, we find patterns. In code, we build them."
                    </p>
                  </div>
                </div>

                {/* Right Column: Monospace Headers, Narrative, Formula snippet */}
                <div className="about__right-column">
                  <div className="about__math-formula-header">
                    <span>f(x)</span> = Olayoriju(Logic) + Code(Design)
                  </div>
                  
                  <h3 className="about__intro-title">
                    Hi, I'm <span className="text-gradient">Olayoriju Inioluwa</span>
                  </h3>
                  <h4 className="about__intro-role">Systems & Product Engineer | Mathematician</h4>
                  
                  <div className="about__narrative">
                    <p className="about__intro-text">
                      I'm a passionate Systems & Product Engineer, Tech Instructor and Mathematician from Lagos, Nigeria. 
                      Over the last 3+ years, I have built production-grade system architectures, designed optimized 
                      database schemas, and engineered responsive user interfaces using Python and React.
                    </p>
                    <p className="about__intro-text">
                      My journey in technology began over 8 years ago when I first started learning Python. 
                      Initially coding simple scripts on a mobile device, I later attended intensive bootcamps to master 
                      database schema designs and MVC structures. Today, I combine my engineering work with teaching coding, 
                      applying mathematical optimization principles from my university studies directly to algorithm design.
                    </p>
                  </div>

                  {/* Core engineering formula block */}
                  <div className="about__code-formula card-glass">
                    <div className="about__code-formula-header">
                      <span className="dot dot--red"></span>
                      <span className="dot dot--yellow"></span>
                      <span className="dot dot--green"></span>
                      <span className="file-name">engineering_formula.js</span>
                    </div>
                    <pre className="about__code-pre">
{`// Core Engineering Formula
function buildSystems(logic, optimization) {
  return logic.integrate(code) * efficiency;
}`}
                    </pre>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
