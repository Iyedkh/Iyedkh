import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Reveal: soft ink-bleed entrance (fade + rise + de-blur) when scrolled into view.
 */
const Reveal = ({ children, delay = 0, y = 28, className = "", as = "div", once = true }) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.div;

  return (
    <Component
      initial={shouldReduceMotion ? false : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once, margin: "-60px" }}
      transition={{ duration: 0.9, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Component>
  );
};

/**
 * WordReveal: splits a string into words that rise out of a mask one after another.
 */
export const WordReveal = ({ text = "", className = "", delay = 0, stagger = 0.06 }) => {
  const shouldReduceMotion = useReducedMotion();
  const words = String(text).split(" ").filter(Boolean);

  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={`${word}-${i}`} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom">
          <motion.span
            className="inline-block"
            initial={shouldReduceMotion ? false : { y: "105%", rotate: 4 }}
            whileInView={{ y: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.85, delay: delay + i * stagger, ease: EASE }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export default Reveal;
