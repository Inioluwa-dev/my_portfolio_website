import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleToggle = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? `${styles['navbar-header']} ${styles['navbar-scrolled']}` : styles['navbar-header']}>
      <span className={styles['navbar-title']}>Mr Heritage</span>
      <nav>
        <div className={styles['navbar-links']}>
          <a href="#home" className={styles['navbar-link']}>Home</a>
          <a href="#about" className={styles['navbar-link']}>About</a>
          <a href="#projects" className={styles['navbar-link']}>Projects</a>
          <a href="#contact" className={styles['navbar-link']}>Contact</a>
        </div>
        <button className={styles['navbar-toggle']} onClick={handleToggle} aria-label="Toggle menu">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        {menuOpen && (
          <div className={styles['navbar-collapse']}>
            <a href="#home" className={styles['navbar-link']} onClick={closeMenu}>Home</a>
            <a href="#about" className={styles['navbar-link']} onClick={closeMenu}>About</a>
            <a href="#projects" className={styles['navbar-link']} onClick={closeMenu}>Projects</a>
            <a href="#contact" className={styles['navbar-link']} onClick={closeMenu}>Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
