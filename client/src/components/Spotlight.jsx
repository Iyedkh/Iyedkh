import React, { useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";

/**
 * Spotlight: card wrapper with a cursor-following glow, gold edge light and
 * a gentle 3D tilt. Pass `tilt={false}` for flat surfaces.
 */
const Spotlight = ({ children, className = "", tilt = true, maxTilt = 5, as = "div", ...rest }) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(py, [0, 1], [maxTilt, -maxTilt]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(px, [0, 1], [-maxTilt, maxTilt]), { stiffness: 200, damping: 20 });
  const Component = motion[as] || motion.div;

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    px.set(x);
    py.set(y);
  };

  const handleLeave = () => {
    px.set(0.5);
    py.set(0.5);
  };

  const enableTilt = tilt && !shouldReduceMotion;

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={enableTilt ? { rotateX, rotateY, transformPerspective: 1000 } : undefined}
      className={`spotlight ${className}`}
      {...rest}
    >
      {children}
    </Component>
  );
};

export default Spotlight;
