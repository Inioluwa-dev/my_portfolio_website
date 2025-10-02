import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";
import "../../styles/layout/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }
};

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navigationItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    setIsScrolled(window.scrollY > 20);
    const path = location.pathname.replace("/", "") || "home";
    setActiveSection(path);
  }, [location.pathname]);

  const closeMobile = () => setIsMobileMenuOpen(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
        <div className="header__container">
          {/* Logo */}
          <div className="header__logo">
            <Link
              className="logo"
              to="/"
              onClick={closeMobile}
              aria-label="Go to homepage"
            >
              <div className="logo__icon">
                <span className="logo__bracket">&lt;</span>
                <span className="logo__text">H</span>
                <span className="logo__bracket">/&gt;</span>
              </div>
              <div className="logo__content">
                <span className="logo__name">Heritage</span>
                <span className="logo__title">Full Stack Developer</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main navigation">
            <ul className="nav">
              {navigationItems.map((item) => (
                <li key={item.id} className="nav__item">
                  {["about", "contact"].includes(item.id) ? (
                    // If we're already on the home page, perform an in-place smooth scroll.
                    // If we're on another route, navigate to home and pass state so Home can scroll after mount.
                    location.pathname === "/" ? (
                      <a
                        className={`nav__link ${
                          activeSection === item.id ? "nav__link--active" : ""
                        }`}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                          closeMobile();
                        }}
                        aria-current={
                          activeSection === item.id ? "page" : undefined
                        }
                      >
                        <span className="nav__text">{item.label}</span>
                        <span className="nav__indicator"></span>
                      </a>
                    ) : (
                      <Link
                        className={`nav__link ${
                          activeSection === item.id ? "nav__link--active" : ""
                        }`}
                        to={{ pathname: "/" }}
                        state={{ scrollTo: item.id }}
                        onClick={closeMobile}
                        aria-current={
                          activeSection === item.id ? "page" : undefined
                        }
                      >
                        <span className="nav__text">{item.label}</span>
                        <span className="nav__indicator"></span>
                      </Link>
                    )
                  ) : (
                    <Link
                      className={`nav__link ${
                        activeSection === item.id ? "nav__link--active" : ""
                      }`}
                      to={item.id === "home" ? "/" : `/${item.id}`}
                      onClick={closeMobile}
                      aria-current={
                        activeSection === item.id ? "page" : undefined
                      }
                    >
                      <span className="nav__text">{item.label}</span>
                      <span className="nav__indicator"></span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="header__actions">
            {/* Theme Toggle */}
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
            >
              <div className="theme-toggle__track">
                <div className="theme-toggle__thumb">
                  <FiSun className="theme-toggle__icon theme-toggle__icon--sun" />
                  <FiMoon className="theme-toggle__icon theme-toggle__icon--moon" />
                </div>
              </div>
            </button>

            {/* CTA Button */}
            <a
              className="cta-btn"
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
                closeMobile();
              }}
            >
              <span className="cta-btn__text">Let's Talk</span>
              <FiExternalLink className="cta-btn__icon" />
            </a>

            {/* Mobile Menu Toggle */}
            <button
              className={`mobile-toggle ${
                isMobileMenuOpen ? "mobile-toggle--active" : ""
              }`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="mobile-toggle__line"></span>
              <span className="mobile-toggle__line"></span>
              <span className="mobile-toggle__line"></span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`mobile-menu ${
            isMobileMenuOpen ? "mobile-menu--open" : ""
          }`}
        >
          <div className="mobile-menu__content">
            {/* Mobile Header */}
            <div className="mobile-menu__header">
              <div className="mobile-menu__logo">
                <div className="logo__icon">
                  <span className="logo__bracket">&lt;</span>
                  <span className="logo__text">H</span>
                  <span className="logo__bracket">/&gt;</span>
                </div>
                <div className="logo__content">
                  <span className="logo__name">Heritage</span>
                  <span className="logo__title">Developer</span>
                </div>
              </div>
              <button
                className="mobile-menu__close"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <FiX />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="mobile-nav" aria-label="Mobile navigation">
              <ul className="mobile-nav__list">
                {navigationItems.map((item, index) => (
                  <li key={item.id} className="mobile-nav__item">
                    {["about", "contact"].includes(item.id) ? (
                      <a
                        className={`mobile-nav__link ${
                          activeSection === item.id
                            ? "mobile-nav__link--active"
                            : ""
                        }`}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          scrollToSection(item.id);
                          closeMobile();
                        }}
                        style={{ "--delay": `${index * 0.1}s` }}
                      >
                        <span className="mobile-nav__number">0{index + 1}</span>
                        <span className="mobile-nav__text">{item.label}</span>
                        <span className="mobile-nav__arrow">→</span>
                      </a>
                    ) : (
                      <Link
                        className={`mobile-nav__link ${
                          activeSection === item.id
                            ? "mobile-nav__link--active"
                            : ""
                        }`}
                        to={item.id === "home" ? "/" : `/${item.id}`}
                        onClick={closeMobile}
                        style={{ "--delay": `${index * 0.1}s` }}
                      >
                        <span className="mobile-nav__number">0{index + 1}</span>
                        <span className="mobile-nav__text">{item.label}</span>
                        <span className="mobile-nav__arrow">→</span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Footer */}
            <div className="mobile-menu__footer">
              <div className="mobile-theme">
                <span className="mobile-theme__label">Theme</span>
                <button className="mobile-theme__toggle" onClick={toggleTheme}>
                  <span
                    className={`mobile-theme__option ${
                      !isDark ? "mobile-theme__option--active" : ""
                    }`}
                  >
                    <FiSun />
                    Light
                  </span>
                  <span
                    className={`mobile-theme__option ${
                      isDark ? "mobile-theme__option--active" : ""
                    }`}
                  >
                    <FiMoon />
                    Dark
                  </span>
                </button>
              </div>

              <a
                className="mobile-cta"
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                  closeMobile();
                }}
              >
                <span>Start a Project</span>
                <FiExternalLink />
              </a>
            </div>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div
            className="mobile-overlay"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </header>
    </>
  );
};

export default Navbar;
