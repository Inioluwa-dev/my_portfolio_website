import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Projects from "../components/sections/Projects";
import SEO from "../components/seo/SEO";

const ProjectsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const projectsStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://inioluwa-dev.vercel.app/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Projects",
        "item": "https://inioluwa-dev.vercel.app/projects"
      }
    ]
  };

  return (
    <div className="page page--projects animate-fade-in-up">
      <SEO
        title="Software Engineering Projects & Case Studies | Inioluwa Olayoriju"
        description="Explore detailed case studies of my software projects including Kefi social media, Serguo AI OCR, and FastAPI background remover."
        url="https://inioluwa-dev.vercel.app/projects"
        structuredData={projectsStructuredData}
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
