import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import HomePage from '../pages/Home';
import ProjectsPage from '../pages/Projects';
import ProjectDetailPage from '../pages/ProjectDetail';
import BlogPage from '../pages/Blog';
import BlogPostPage from '../pages/BlogPost';
import ResumePage from '../pages/Resume';
import ContactPage from '../pages/Contact';
import DigitalTwinWidget from '../components/ui/DigitalTwinWidget';

const ScrollToHashElement = () => {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (hash) {
      // Allow DOM to render before searching
      const element = document.getElementById(hash.slice(1));
      if (element) {
        const timer = setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [hash, pathname]);

  return null;
};

const AppRouter = () => {
  return (
    <BrowserRouter>
      <ScrollToHashElement />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<Navigate to="/#about" replace />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />
        <Route path="/chat" element={<Navigate to="/" replace />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/playground" element={<Navigate to="/" replace />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <DigitalTwinWidget />
    </BrowserRouter>
  );
};

export default AppRouter;
