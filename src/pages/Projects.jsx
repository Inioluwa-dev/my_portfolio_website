import React from 'react';
import Navbar from '../components/layout/Navbar';
import Projects from '../components/sections/Projects';
import Footer from '../components/layout/Footer';

const ProjectsPage = () => {
  return (
    <div className="page page--projects">
      <Navbar />
      <main>
        <Projects />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectsPage;


