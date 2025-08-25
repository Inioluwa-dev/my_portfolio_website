import React, { useState, useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { AnimationProvider } from './context/AnimationContext';
import Portfolio from './Portfolio';
import LoadingScreen from './components/layout/LoadingScreen';
import CustomCursor from './components/ui/CustomCursor';
import ScrollProgress from './components/layout/ScrollProgress';
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
    <ThemeProvider>
      <AnimationProvider>
        <div className="App">
          <CustomCursor />
          <ScrollProgress />
          <Portfolio />
        </div>
      </AnimationProvider>
    </ThemeProvider>
  );
}

export default App;