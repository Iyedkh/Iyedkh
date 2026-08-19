import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CursorGlow = () => {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  // Apple-grade smooth spring physics for ambient cursor follower
  const springX = useSpring(mouseX, { damping: 28, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 28, stiffness: 200 });

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
        background: "radial-gradient(circle, rgba(212,165,116,0.06) 0%, rgba(139,71,137,0.03) 40%, transparent 70%)",
        borderRadius: "50%",
        willChange: "transform",
      }}
    />
  );
};

export default CursorGlow;