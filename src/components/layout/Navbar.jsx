import React, { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import { FiSun, FiMoon } from "react-icons/fi";
import "../../styles/layout/Navbar.css";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeRoute, setActiveRoute] = useState("/");
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navigationItems = [
    { id: "home",     label: "Home",     path: "/" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "blog",     label: "Blog",     path: "/blog" },
    { id: "contact",  label: "Contact",  path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setActiveRoute(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  const closeMobile = () => setIsMobileMenuOpen(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen((v) => !v);

  return (
    <>
      <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
        <div className="header__container">

          {/* Wordmark Logo */}
          <div className="header__logo">
            <Link className="logo-wordmark" to="/" onClick={closeMobile} aria-label="Go to homepage">
              <span className="logo-wordmark__name">Inioluwa</span>
              <span className="logo-wordmark__dot">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="header__nav" aria-label="Main navigation">
            <ul className="nav">
              {navigationItems.map((item) => (
                <li key={item.id} className="nav__item">
                  <Link
                    className={`nav__link ${activeRoute === item.path ? "nav__link--active" : ""}`}
                    to={item.path}
                    onClick={closeMobile}
                    aria-current={activeRoute === item.path ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Actions */}
          <div className="header__actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
              title={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <FiSun /> : <FiMoon />}
            </button>

            {/* Hamburger */}
            <button
              className={`mobile-toggle ${isMobileMenuOpen ? "mobile-toggle--active" : ""}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="mobile-toggle__line" />
              <span className="mobile-toggle__line" />
              <span className="mobile-toggle__line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={closeMobile} aria-hidden="true" />
      )}

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${isMobileMenuOpen ? "mobile-menu--open" : ""}`}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="mobile-menu__content">

          {/* Mobile Header */}
          <div className="mobile-menu__header">
            <span className="mobile-menu__logo">Inioluwa<span className="logo-wordmark__dot">.</span></span>
            <button className="mobile-menu__close" onClick={closeMobile} aria-label="Close menu">
              <span />
              <span />
            </button>
          </div>

          {/* Mobile Nav */}
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <ul className="mobile-nav__list">
              {navigationItems.map((item, index) => (
                <li key={item.id} className="mobile-nav__item" style={{ "--delay": `${index * 0.06}s` }}>
                  <Link
                    className={`mobile-nav__link ${activeRoute === item.path ? "mobile-nav__link--active" : ""}`}
                    to={item.path}
                    onClick={closeMobile}
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
            <button className="mobile-theme-btn" onClick={toggleTheme}>
              {isDark ? <FiSun /> : <FiMoon />}
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
