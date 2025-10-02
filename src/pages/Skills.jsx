import React from 'react';
import Navbar from '../components/layout/Navbar';
import Skills from '../components/sections/Skills';
import Footer from '../components/layout/Footer';

const SkillsPage = () => {
  return (
    <div className="page page--skills">
      <Navbar />
      <main>
        <Skills />
      </main>
      <Footer />
    </div>
  );
};

export default SkillsPage;


