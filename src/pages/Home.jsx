import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import Footer from "../components/layout/Footer";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

const HomePage = () => {
  const location = useLocation();

  useEffect(() => {
    // If navigation included a target section (e.g., { state: { scrollTo: 'contact' } }), scroll to it.
    if (location && location.state && location.state.scrollTo) {
      const id = location.state.scrollTo;
      const el = document.getElementById(id);
      if (el) {
        const headerHeight = 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerHeight;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
      // Clear the state so the scroll doesn't repeat on future navigations
      if (history && history.replaceState) {
        const newState = Object.assign({}, history.state);
        if (newState && newState.usr) {
          // keep existing user state if any
        }
        // replace the current history entry without the scrollTo payload
        history.replaceState(
          {},
          document.title,
          window.location.pathname + window.location.search
        );
      }
    }
  }, [location]);

  return (
    <div className="page page--home">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
