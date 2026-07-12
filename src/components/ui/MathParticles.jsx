import React, { useEffect, useRef } from 'react';

const MathParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const symbols = [
      'e = mc²',
      'a² + b² = c²',
      'e^(iπ) + 1 = 0',
      '∇ × E = -∂B/∂t',
      'x = [-b ± √(b²-4ac)] / 2a',
      '∫ e^x dx = e^x',
      'f(x) = sin(x) + cos(x)',
      '∫_a^b f(x)dx = F(b) - F(a)',
      'F = G(m₁m₂)/r²',
      'd/dx(ln x) = 1/x',
      'Hψ = Eψ',
      'PV = nRT',
      '∑_{i=1}^n x_i',
      'lim_{x→∞} (1 + 1/x)^x = e',
      '∑', '∫', 'π', '√', '∞', '∂', '∆', 'Ω', 'f(x)', 'dy/dx', 'ℝ', 'ℂ'
    ];

    let particles = [];
    const particleCount = 35; // slightly lower count to account for larger sizes and avoid clutter

    const resizeCanvas = () => {
      const rect = canvas.parentNode.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    particles = Array.from({ length: particleCount }, () => {
      const size = Math.floor(Math.random() * 26) + 16; // 16px to 42px (a bit smaller)
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        symbol: symbols[Math.floor(Math.random() * symbols.length)],
        fontSize: size,
        vx: (Math.random() - 0.5) * 1.3, // Faster drift movement
        vy: (Math.random() - 0.5) * 1.3,
        alpha: Math.random() * 0.45 + 0.25,
        spin: Math.random() * 0.008 - 0.004, // Slightly faster rotation
        angle: Math.random() * 0.5 - 0.25, // Slight angle deviation (-15 to 15 deg) to keep formulas readable
        blur: size > 32 ? Math.floor((size - 32) / 3) : 0 // Depth-of-field blur on larger elements
      };
    });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = 'none'; // reset filter at start of frame

      const isDark = document.documentElement.getAttribute('data-theme') !== 'light';

      particles.forEach((p) => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        
        if (p.blur > 0) {
          ctx.filter = `blur(${p.blur}px)`;
        } else {
          ctx.filter = 'none';
        }

        ctx.fillStyle = isDark 
          ? `rgba(255, 255, 255, ${p.alpha * 0.26})` 
          : `rgba(0, 0, 0, ${p.alpha * 0.40})`;
        ctx.font = `600 ${p.fontSize}px 'Outfit', 'Courier New', sans-serif`;
        ctx.fillText(p.symbol, 0, 0);
        ctx.restore();

        // Update positions
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.spin;

        // Wrap around boundaries (adjusted for larger text sizes)
        if (p.x < -250) p.x = canvas.width + 250;
        if (p.x > canvas.width + 250) p.x = -250;
        if (p.y < -100) p.y = canvas.height + 100;
        if (p.y > canvas.height + 100) p.y = -100;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
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
