import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import SEO from "../components/seo/SEO";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="page page--contact animate-fade-in-up">
      <SEO
        title="Contact Me - Olayoriju Inioluwa | Mr Heritage"
        description="Get in touch with me for custom software development projects, technical consulting, or coding instruction inquiries."
        keywords="Contact Inioluwa, Contact Mr Heritage, Hire Python Developer, Full Stack Freelancer Lagos"
        url="https://mr-heritage.name.ng/contact"
      />
      <Navbar />
      <main style={{ minHeight: '80vh' }}>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
