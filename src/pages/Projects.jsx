import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Projects from "../components/sections/Projects";
import SEO from "../components/seo/SEO";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page page--projects animate-fade-in-up">
      <SEO
        title="Software Engineering Projects - Mr Heritage Portfolio"
        description="Explore detailed case studies of my software projects including Kefi social media, Serguo AI OCR, and FastAPI background remover."
        keywords="Inioluwa Projects, Mr Heritage Case Studies, Python Django Projects, React Portfolios"
        url="https://mr-heritage.name.ng/projects"
      />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;
