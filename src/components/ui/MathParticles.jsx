import React, { useEffect, useRef } from 'react';

const MathParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const symbols = [
      'e = mc\u00b2',
      'a\u00b2 + b\u00b2 = c\u00b2',
      'e^(i\u03c0) + 1 = 0',
      '\u2207 \u00d7 E = -\u2202B/\u2202t',
      'x = [-b \u00b1 \u221a(b\u00b2-4ac)] / 2a',
      '\u222b e^x dx = e^x',
      'f(x) = sin(x) + cos(x)',
      '\u222b_a^b f(x)dx = F(b) - F(a)',
      'F = G(m\u2081m\u2082)/r\u00b2',
      'd/dx(ln x) = 1/x',
      'H\u03c8 = E\u03c8',
      'PV = nRT',
      '\u2211_{i=1}^n x_i',
      'lim_{x\u2192\u221e} (1 + 1/x)^x = e',
      '\u2211', '\u222b', '\u03c0', '\u221a', '\u221e', '\u2202', '\u2206', '\u03a9', 'f(x)', 'dy/dx', '\u211d', '\u2102'
    ];

    let particles = [];
    const particleCount = 35;

    const resizeCanvas = () => {
      const rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    particles = Array.from({ length: particleCount }, () => {
      const size = Math.floor(Math.random() * 26) + 16;
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        fontSize: size,
        vx: (Math.random() - 0.5) * 1.3,
        vy: (Math.random() - 0.5) * 1.3,
        alpha: Math.random() * 0.45 + 0.25,
        spin: Math.random() * 0.008 - 0.004,
        angle: Math.random() * 0.5 - 0.25,
      };
    });

    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible && !animationFrameId) {
          animationFrameId = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const animate = () => {
      if (!isVisible) {
        animationFrameId = null;
        return;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      particles.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${p.alpha * 0.26})` 
          : `rgba(0, 0, 0, ${p.alpha * 0.40})`;
        ctx.font = `600 ${p.fontSize}px 'Outfit', 'Courier New', sans-serif`;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();

        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;

        if (p.x < -250) p.x = canvas.width + 250;
        if (p.x > canvas.width + 250) p.x = -250;
        if (p.y < -100) p.y = canvas.height + 100;
        if (p.y > canvas.height + 100) p.y = -100;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      observer.disconnect();
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
};

export default MathParticles;
