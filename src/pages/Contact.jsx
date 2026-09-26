import React, { useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Contact from "../components/sections/Contact";
import SEO from "../components/seo/SEO";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactStructuredData = {
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
        "name": "Contact",
        "item": "https://inioluwa-dev.vercel.app/contact"
      }
    ]
  };

  return (
    <div className="page page--contact animate-fade-in-up">
      <SEO
        title="Contact & Engineering Inquiries | Inioluwa Olayoriju"
        description="Get in touch with me for custom software development projects, technical consulting, or coding instruction inquiries."
        url="https://inioluwa-dev.vercel.app/contact"
        structuredData={contactStructuredData}
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
