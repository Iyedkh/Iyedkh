import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [cursorState, setCursorState] = useState({
    visible: false,
    hovered: false,
    cardLabel: null,
  });

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const dotX = useSpring(mouseX, { damping: 40, stiffness: 450 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 450 });

  const ringX = useSpring(mouseX, { damping: 25, stiffness: 220 });
  const ringY = useSpring(mouseY, { damping: 25, stiffness: 220 });

  useEffect(() => {
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (isTouch || prefersReducedMotion) {
      return;
    }

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!cursorState.visible) {
        setCursorState((prev) => ({ ...prev, visible: true }));
      }
    };

    const onMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    const onMouseOver = (e) => {
      const target = e.target.closest("button, a, input, textarea, [data-cursor]");
      const projectCard = e.target.closest("[data-project-card]");

      if (projectCard) {
        setCursorState({
          visible: true,
          hovered: true,
          cardLabel: "EXPLORE",
        });
      } else if (target) {
        setCursorState({
          visible: true,
          hovered: true,
          cardLabel: null,
        });
      } else {
        setCursorState({
          visible: true,
          hovered: false,
          cardLabel: null,
        });
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseover", onMouseOver);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseover", onMouseOver);
    };
  }, [mouseX, mouseY, cursorState.visible]);

  if (!cursorState.visible) return null;

  return (
    <>
      {/* Central Ink / Blossom Dot */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[150] rounded-full will-change-transform"
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: cursorState.hovered ? 6 : 8,
          height: cursorState.hovered ? 6 : 8,
          backgroundColor: cursorState.hovered ? "#E8A1B0" : "#262522",
          opacity: cursorState.cardLabel ? 0 : 0.85,
        }}
      />

      {/* Outer Organic Follower Ring with Sakura Glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed top-0 left-0 z-[149] rounded-full will-change-transform flex items-center justify-center border"
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorState.cardLabel ? 76 : cursorState.hovered ? 44 : 26,
          height: cursorState.cardLabel ? 76 : cursorState.hovered ? 44 : 26,
          backgroundColor: cursorState.cardLabel
            ? "rgba(23, 23, 20, 0.92)"
            : cursorState.hovered
            ? "rgba(232, 161, 176, 0.15)"
            : "transparent",
          borderColor: cursorState.cardLabel
            ? "transparent"
            : cursorState.hovered
            ? "rgba(232, 161, 176, 0.6)"
            : "rgba(38, 37, 34, 0.22)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 240 }}
      >
        {cursorState.cardLabel && (
          <span className="text-[9.5px] font-mono tracking-[0.16em] text-[#F5F0E7] font-semibold select-none">
            {cursorState.cardLabel}
          </span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
