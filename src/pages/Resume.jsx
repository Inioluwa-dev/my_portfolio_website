import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import SEO from "../components/seo/SEO";
import { resumeData } from "../data/resume";
import { FiDownload, FiBriefcase, FiAward, FiBookOpen, FiActivity } from "react-icons/fi";
import CvPdf from "../assets/mr-heritage.pdf";
import "../styles/components/Resume.css";

const ResumePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page page--resume animate-fade-in-up">
      <SEO
        title="Resume & Professional Experience - Olayoriju Inioluwa"
        description="View my detailed resume containing full stack web development roles, Python backend engineering skills, and certificates."
        keywords="Inioluwa CV, Inioluwa Resume, Python Engineer Skills, React Development experience"
        url="https://mr-heritage.name.ng/resume"
      />
      <Navbar />

      <main className="resume-main">
        <div className="container">
          {/* Header */}
          <div className="resume-header">
            <div>
              <h1 className="resume-title">
                My <span className="text-gradient">Résumé</span>
              </h1>
              <p className="resume-subtitle">
                A review of my academic foundations, professional timeline, and specialized engineering skills.
              </p>
            </div>
            <a href={CvPdf} download="mr-heritage.pdf" className="btn btn-primary download-cv-btn">
              <FiDownload />
              <span>Download PDF CV</span>
            </a>
          </div>

          {/* Grid Layout */}
          <div className="resume-layout">
            
            {/* Left side - Timelines (Experience and Education) */}
            <div className="resume-timeline-wrapper">
              
              {/* Experience */}
              <div className="timeline-block">
                <div className="timeline-block-header">
                  <FiBriefcase />
                  <h2>Work Experience</h2>
                </div>
                
                <div className="vertical-timeline">
                  {resumeData.experience.map((job, idx) => (
                    <div key={idx} className="timeline-node card-glass">
                      <div className="node-marker"></div>
                      <div className="node-header">
                        <span className="node-period">{job.period}</span>
                        <h3 className="node-role">{job.role}</h3>
                        <h4 className="node-company">{job.company} | <span>{job.location}</span></h4>
                      </div>
                      <p className="node-desc">{job.description}</p>
                      <ul className="node-bullets">
                        {job.bulletPoints.map((pt, i) => (
                          <li key={i}>{pt}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <div className="timeline-block">
                <div className="timeline-block-header">
                  <FiBookOpen />
                  <h2>Education</h2>
                </div>

                <div className="vertical-timeline">
                  {resumeData.education.map((edu, idx) => (
                    <div key={idx} className="timeline-node card-glass">
                      <div className="node-marker"></div>
                      <div className="node-header">
                        <span className="node-period">{edu.period}</span>
                        <h3 className="node-role">{edu.degree}</h3>
                        <h4 className="node-company">{edu.school}</h4>
                      </div>
                      <p className="node-desc">{edu.details}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right side - Skills Matrix & Certs */}
            <div className="resume-skills-wrapper">
              
              {/* Skills Matrix */}
              <div className="skills-matrix-block">
                <div className="timeline-block-header">
                  <FiActivity />
                  <h2>Skills Proficiency</h2>
                </div>
                
                <div className="skills-matrix-grid">
                  {resumeData.skillsMatrix.map((cat, idx) => (
                    <div key={idx} className="skills-matrix-card card-glass">
                      <h4>{cat.category}</h4>
                      <div className="matrix-skills-list">
                        {cat.skills.map((skill, i) => (
                          <div key={i} className="matrix-skill-item">
                            <div className="matrix-skill-header">
                              <span>{skill.name}</span>
                              <span>{skill.level}%</span>
                            </div>
                            <div className="matrix-progress-bar">
                              <div
                                className="matrix-progress-fill"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications */}
              <div className="certs-block">
                <div className="timeline-block-header">
                  <FiAward />
                  <h2>Certifications</h2>
                </div>

                <div className="certs-grid">
                  {resumeData.certifications.map((cert, idx) => (
                    <div key={idx} className="cert-card card-glass">
                      <div className="cert-icon">
                        <FiAward />
                      </div>
                      <div className="cert-info">
                        <h4>{cert.name}</h4>
                        <span>{cert.issuer} | {cert.year}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResumePage;
