import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { WordReveal } from "./Reveal";

const EASE = [0.16, 1, 0.3, 1];

/**
 * SectionHeader: shared editorial header for every section.
 * Hanko stamp + index pill, word-by-word title reveal, a giant outlined kanji
 * drifting in parallax behind, and a sumi brush stroke that draws itself in.
 */
const SectionHeader = ({ kanji, index, pill, heading, highlight, aside, className = "mb-14 sm:mb-16" }) => {
  const ref = useRef(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const ghostY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const headingWords = String(heading || "").split(" ").filter(Boolean).length;

  return (
    <div ref={ref} className={`relative ${className}`}>
      {/* Giant ghost kanji watermark */}
      <motion.span
        aria-hidden="true"
        style={{ y: shouldReduceMotion ? 0 : ghostY }}
        className="ghost-kanji absolute -top-16 end-0 text-[9rem] sm:text-[13rem] lg:text-[16rem] hidden sm:block"
      >
        {kanji}
      </motion.span>

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: EASE }}
        className="relative flex items-center gap-3 mb-5"
      >
        <motion.span
          className="hanko-stamp font-kanji"
          initial={shouldReduceMotion ? false : { scale: 1.6, rotate: -18, opacity: 0 }}
          whileInView={{ scale: 1, rotate: -4, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 260, damping: 14, delay: 0.15 }}
        >
          {kanji}
        </motion.span>
        {index && (
          <span className="font-mono text-[11px] tracking-[0.2em] text-[#A68550]">{index}</span>
        )}
        <span className="h-px w-8 bg-[#22211E]/20" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#726A5F]">{String(pill || "").replace(/^\d+\s*\/\s*/, "")}</span>
      </motion.div>

      <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        <div className="lg:col-span-8">
          <h2 className="font-editorial text-[2.6rem] sm:text-6xl md:text-7xl font-normal text-[#22211E] leading-[1.02] tracking-[-0.025em]">
            <WordReveal text={heading} />{" "}
            <WordReveal
              text={highlight}
              delay={headingWords * 0.06}
              className="italic text-[#D48D9B]"
            />
            <span className="text-[#A68550]">.</span>
          </h2>
        </div>
        {aside && (
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="lg:col-span-4 pb-2"
          >
            {aside}
          </motion.div>
        )}
      </div>

      {/* Sumi brush stroke divider */}
      <div className="relative mt-10 h-px w-full overflow-visible">
        <motion.div
          initial={shouldReduceMotion ? false : { scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.6, ease: EASE, delay: 0.2 }}
          className="absolute inset-0 origin-left rtl:origin-right bg-gradient-to-r from-[#22211E]/40 via-[#A68550]/40 to-transparent"
        />
        <motion.span
          initial={shouldReduceMotion ? false : { scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
          className="absolute -top-[3px] start-0 h-[7px] w-[7px] rounded-full bg-[#B8403A]"
        />
      </div>
    </div>
  );
};

export default SectionHeader;
