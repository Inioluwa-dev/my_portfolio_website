import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Services from './components/sections/Services';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

const Portfolio = () => {
  return (
    <div className="portfolio">
      <a id="main-content" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;