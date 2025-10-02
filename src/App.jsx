import React, { useState, useEffect } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { AnimationProvider } from './context/AnimationContext';
import AppRouter from './router/AppRouter';
import LoadingScreen from './components/layout/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';
import SEO from './components/seo/SEO';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for better UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <HelmetProvider>
      <ThemeProvider>
        <AnimationProvider>
          <div className="App">
            <SEO />
            <CustomCursor />
            <ScrollProgress />
          <AppRouter />
          </div>
        </AnimationProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;