import React from 'react';
import Navbar from '../components/layout/Navbar';
import Services from '../components/sections/Services';
import Footer from '../components/layout/Footer';

const ServicesPage = () => {
  return (
    <div className="page page--services">
      <Navbar />
      <main>
        <Services />
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;


