import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Smooth spring physics for ambient cursor follower
  const springX = useSpring(mouseX, { damping: 30, stiffness: 180 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 180 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 250);
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed z-0 hidden md:block"
      style={{
        x: springX,
        y: springY,
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(245, 158, 11, 0.05) 0%, rgba(20, 184, 166, 0.03) 40%, transparent 70%)",
        borderRadius: "50%",
        willChange: "transform",
      }}
    />
  );
};

export default CursorGlow;