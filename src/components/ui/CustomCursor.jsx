import React, { useEffect, useRef, useState } from "react";
import "../../styles/components/CustomCursor.css";

const CustomCursor = () => {
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);

  useEffect(() => {
    // Only run custom cursor on fine pointer devices (desktop/mouse)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let trailX = -100;
    let trailY = -100;
    let animationFrameId;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleOver = (e) => {
      if (e.target && typeof e.target.closest === "function") {
        if (
          e.target.closest(
            'a, button, input, textarea, select, .btn, [role="button"]',
          )
        ) {
          setIsHovering((prev) => (!prev ? true : prev));
        }
      }
    };

    const handleOut = (e) => {
      if (e.target && typeof e.target.closest === "function") {
        if (
          e.target.closest(
            'a, button, input, textarea, select, .btn, [role="button"]',
          )
        ) {
          setIsHovering((prev) => (prev ? false : prev));
        }
      }
    };

    const render = () => {
      // Main dot updates instantly without React re-renders
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Trail lerps smoothly with tuned responsiveness
      trailX += (mouseX - trailX) * 0.38;
      trailY += (mouseY - trailY) * 0.38;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    document.addEventListener("mouseover", handleOver, { passive: true });
    document.addEventListener("mouseout", handleOut, { passive: true });

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        className={`custom-cursor ${isHovering ? "hovering" : ""} ${isClicking ? "clicking" : ""}`}
      />
      <div
        ref={trailRef}
        className={`cursor-trail ${isHovering ? "hovering" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
