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
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    const onMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      // Returning the same object skips the re-render on every move
      setCursorState((prev) => (prev.visible ? prev : { ...prev, visible: true }));
    };

    const setIfChanged = (next) =>
      setCursorState((prev) =>
        prev.visible === next.visible && prev.hovered === next.hovered && prev.cardLabel === next.cardLabel ? prev : next
      );

    const onMouseLeave = () => {
      setCursorState((prev) => ({ ...prev, visible: false }));
    };

    const onMouseOver = (e) => {
      const target = e.target.closest("button, a, input, textarea, [data-cursor]");
      const projectCard = e.target.closest("[data-project-card]");

      if (projectCard) {
        setIfChanged({
          visible: true,
          hovered: true,
          cardLabel: "EXPLORE",
        });
      } else if (target) {
        setIfChanged({
          visible: true,
          hovered: true,
          cardLabel: null,
        });
      } else {
        setIfChanged({
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
  }, [mouseX, mouseY]);

  if (!cursorState.visible) return null;

  return (
    <>
      {/* Central Ink / Blossom Dot */}
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[150] rounded-full will-change-transform ${
          cursorState.hovered ? "bg-sakura" : "bg-ink"
        }`}
        style={{
          x: dotX,
          y: dotY,
          translateX: "-50%",
          translateY: "-50%",
          width: cursorState.hovered ? 6 : 8,
          height: cursorState.hovered ? 6 : 8,
          opacity: cursorState.cardLabel ? 0 : 0.85,
        }}
      />

      {/* Outer Organic Follower Ring with Sakura Glow */}
      <motion.div
        aria-hidden="true"
        className={`pointer-events-none fixed top-0 left-0 z-[149] rounded-full will-change-transform flex items-center justify-center border transition-[background-color,border-color] duration-200 ${
          cursorState.cardLabel
            ? "bg-ink/90 border-transparent"
            : cursorState.hovered
            ? "bg-sakura/15 border-sakura/60"
            : "bg-transparent border-ink/25"
        }`}
        style={{
          x: ringX,
          y: ringY,
          translateX: "-50%",
          translateY: "-50%",
        }}
        animate={{
          width: cursorState.cardLabel ? 76 : cursorState.hovered ? 44 : 26,
          height: cursorState.cardLabel ? 76 : cursorState.hovered ? 44 : 26,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 240 }}
      >
        {cursorState.cardLabel && (
          <span className="text-[9.5px] font-mono tracking-[0.16em] text-paper font-semibold select-none">
            {cursorState.cardLabel}
          </span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;
