import React, { useState, useEffect, useRef } from 'react';
import '../../styles/layout/LoadingScreen.css';

const loadingTexts = [
  "Initializing mathematical formulas...",
  "Integrating coding matrices...",
  "Computing layout coordinates...",
  "Almost ready..."
];

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Progress interval
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 4; // Snappy load progression
      });
    }, 80);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const symbols = [
      '∑', '∫', 'π', '√', '∞', '∂', '∆', 'Ω', 
      'f(x)', 'λ', 'θ', 'μ', 'σ', 'x²', 'dy/dx', 
      '≈', '∇', '∈', '∀', '∃', 'ℝ', 'ℂ', '∱', 'lim', 'log'
    ];

    let particles = [];
    const maxParticles = 70;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const spawnParticle = () => {
      const centerX = canvas.width / 2;
      // Align with vertical position of logo circle (roughly center minus 50px offset)
      const centerY = canvas.height / 2 - 50; 
      
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * 3 + 1.2;
      
      return {
        x: centerX,
        y: centerY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        fontSize: Math.floor(Math.random() * 12) + 12, // 12px to 24px
        alpha: 1.0,
        decay: Math.random() * 0.012 + 0.006,
        spin: Math.random() * 0.05 - 0.025,
        angle: Math.random() * Math.PI * 2
      };
    };

    // Pre-populate particles
    for (let i = 0; i < 25; i++) {
      particles.push(spawnParticle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p, idx) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.alpha})`;
        ctx.font = `600 ${p.fontSize}px 'Outfit', 'Courier New', sans-serif`;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();

        // Update physics
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;
        p.alpha -= p.decay;

        // Reset once faded out
        if (p.alpha <= 0) {
          particles[idx] = spawnParticle();
        }
      });

      // Keep spawner active
      if (particles.length < maxParticles && Math.random() < 0.4) {
        particles.push(spawnParticle());
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="loading-screen">
      <canvas ref={canvasRef} className="loading-canvas" />

      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-circle">
            <span className="logo-text">∞</span>
          </div>
          <div className="loading-rings">
            <div className="ring ring-1"></div>
            <div className="ring ring-2"></div>
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
    </div>
  );
};

export default LoadingScreen;