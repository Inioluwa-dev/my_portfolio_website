import React, { useState, useEffect } from 'react';
import '../../styles/layout/LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  
  const loadingTexts = [
    "Initializing portfolio...",
    "Loading experiences...",
    "Preparing projects...",
    "Almost ready..."
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 600);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-circle">
            <span className="logo-text">&lt;/&gt;</span>
          </div>
          <div className="loading-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
            <div className="ring ring-3"></div>
          </div>
        </div>
        
        <div className="loading-text">
          <h2>Olayoriju Inioluwa</h2>
          <p className="loading-subtitle">{loadingTexts[currentText]}</p>
        </div>
        
        <div className="loading-progress">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <span className="progress-text">{progress}%</span>
        </div>
      </div>
      
      <div className="loading-particles">
        {[...Array(20)].map((_, i) => (
          <div key={i} className={`particle particle-${i + 1}`}></div>
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;