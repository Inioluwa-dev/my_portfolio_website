import React, { useState, useEffect } from 'react';
import '../../styles/components/CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = (e) => {
      // Fix: Check if target exists and has matches method
      if (e.target && typeof e.target.matches === 'function') {
        if (e.target.matches('a, button, .cursor-hover, [role="button"]')) {
          setIsHovering(true);
        }
      }
    };

    const handleMouseLeave = (e) => {
      // Fix: Check if target exists and has matches method
      if (e.target && typeof e.target.matches === 'function') {
        if (e.target.matches('a, button, .cursor-hover, [role="button"]')) {
          setIsHovering(false);
        }
      }
    };

    document.addEventListener('mousemove', updatePosition);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      <div
        className={`custom-cursor ${isHovering ? 'hovering' : ''} ${isClicking ? 'clicking' : ''}`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className="cursor-trail"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  );
};

export default CustomCursor;