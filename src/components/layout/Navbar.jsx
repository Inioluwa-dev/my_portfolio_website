import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import {
  FiMenu,
  FiX,
  FiSun,
  FiMoon,
  FiExternalLink,
} from "react-icons/fi";
import "../../styles/layout/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/");
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navigationItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "blog", label: "Blog", path: "/blog" },
    { id: "resume", label: "Resume", path: "/resume" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    // Dynamic Scroll Listener
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger initially

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Track active path
    setActiveRoute(location.pathname);
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
                <span className="logo__name">Inioluwa</span>
                <span className="logo__title">Systems & Product Engineer</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main navigation">
            <ul className="nav">
              {navigationItems.map((item) => (
                <li key={item.id} className="nav__item">
                  <Link
                    className={`nav__link ${
                      activeRoute === item.path ? "nav__link--active" : ""
                    }`}
                    to={item.path}
                    onClick={closeMobile}
                    aria-current={
                      activeRoute === item.path ? "page" : undefined
                    }
                  >
                    <span className="nav__text">{item.label}</span>
                    <span className="nav__indicator"></span>
                  </Link>
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
                    <Link
                      className={`mobile-nav__link ${
                        activeRoute === item.path
                          ? "mobile-nav__link--active"
                          : ""
                      }`}
                      to={item.path}
                      onClick={closeMobile}
                      style={{ "--delay": `${index * 0.05}s` }}
                    >
                      <span className="mobile-nav__number">0{index + 1}</span>
                      <span className="mobile-nav__text">{item.label}</span>
                      <span className="mobile-nav__arrow">→</span>
                    </Link>
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

              <Link
                className="mobile-cta"
                to="/contact"
                onClick={closeMobile}
              >
                <span>Start a Project</span>
                <FiExternalLink />
              </Link>
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
