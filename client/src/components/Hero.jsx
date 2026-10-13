import React from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useCvModal } from "../context/CvModalContext";
import Magnetic from "./Magnetic";
import KatanaGraphic from "./KatanaGraphic";
import JapaneseBackdrop from "./JapaneseBackdrop";

const EASE = [0.16, 1, 0.3, 1];
const STACK = ["MERN Stack", "React Native", "Business Intelligence", "REST APIs", "TypeScript"];

const Hero = () => {
  const { isRTL, t } = useLanguage();
  const { openCvModal } = useCvModal();
  const shouldReduceMotion = useReducedMotion();

  // Gentle scroll parallax & exit fade for hero elements
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.15]);
  const katanaScrollY = useTransform(scrollY, [0, 600], [0, 80]);

  // Motion variants
  const containerStagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: shouldReduceMotion ? 0 : 0.7, ease: EASE },
    },
  };

  const lineReveal = {
    hidden: { y: shouldReduceMotion ? 0 : "110%", opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: shouldReduceMotion ? 0 : 0.85, ease: EASE },
    },
  };

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col justify-between overflow-hidden pb-12 pt-32 sm:pt-36 lg:pt-40 washi-grain shoji-grid"
    >
      {/* Background Japanese Editorial Art Layer */}
      <JapaneseBackdrop />

      {/* Main 2-Column Hero Grid */}
      <motion.div
        style={{ opacity: shouldReduceMotion ? 1 : heroOpacity }}
        className="relative z-10 flex flex-1 items-center py-6 sm:py-10 lg:py-14"
      >
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
            
            {/* ========================================================= */}
            {/* LEFT COLUMN: Editorial Typography & Intentional Actions   */}
            {/* ========================================================= */}
            <motion.div
              variants={containerStagger}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start lg:col-span-7 xl:col-span-7"
            >
              {/* Hanko Stamp & Status Pill */}
              <motion.div variants={fadeUp} className="mb-6 flex flex-wrap items-center gap-3 sm:mb-8">
                <span className="hanko-stamp shrink-0" aria-label="Takumi Artisan Seal">
                  匠
                </span>
                <div className="japandi-pill" role="status">
                  <span aria-hidden="true" className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#E8A1B0] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8A1B0]" />
                  </span>
                  <span>{t.hero?.statusBadge || "Available for Select Projects & Architecture"}</span>
                </div>
              </motion.div>

              {/* Editorial Title with disciplined line breaks */}
              <h1
                id="hero-title"
                className="mb-6 font-editorial text-[2.75rem] font-normal leading-[1.05] tracking-[-0.035em] text-[#262522] sm:mb-7 sm:text-6xl md:text-7xl lg:text-[4.75rem]"
              >
                <span className="block overflow-hidden pb-1">
                  <motion.span variants={lineReveal} className="block">
                    Crafting digital
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-1">
                  <motion.span variants={lineReveal} className="block">
                    experiences
                  </motion.span>
                </span>
                <span className="block overflow-hidden pb-2">
                  <motion.span variants={lineReveal} className="block italic text-[#E8A1B0]">
                    with precision.
                  </motion.span>
                </span>
              </h1>

              {/* Concise, elegant bio */}
              <motion.p
                variants={fadeUp}
                className="mb-8 max-w-[34rem] text-base leading-relaxed text-[#6B6358] sm:text-lg sm:leading-relaxed"
              >
                I&apos;m <strong className="font-semibold text-[#262522]">Iyed Khouildi</strong>, a Full
                Stack Developer &amp; Data Analyst merging engineering discipline, business
                intelligence, and Japanese architectural minimalism into resilient, calm software.
              </motion.p>

              {/* Expertise tags */}
              <motion.div variants={fadeUp} className="mb-8 w-full max-w-xl sm:mb-10">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-4 bg-[#AD8B59]" />
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#786F63]">
                    {t.hero?.techStack || "Core Expertise"}
                  </p>
                </div>
                <ul aria-label="Areas of expertise" className="m-0 flex list-none flex-wrap gap-2 p-0">
                  {STACK.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#262522]/12 bg-[#F5F0E7]/80 px-3.5 py-1.5 text-[11px] font-mono tracking-wide text-[#625B51] shadow-[0_1px_2px_rgba(38,37,34,0.04)] transition-colors hover:border-[#E8A1B0]/60 sm:text-xs"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Action Buttons: Primary + Secondary + CV modal trigger */}
              <motion.div
                variants={fadeUp}
                className="flex w-full flex-wrap items-center gap-3 sm:w-auto sm:gap-4"
              >
                <Magnetic strength={0.2}>
                  <a
                    href="#work"
                    className="btn-japandi-primary group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A1B0] sm:px-7"
                  >
                    <span>{t.hero?.exploreProjects || "Explore My Work"}</span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className={`h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                        isRTL ? "rotate-[-90deg]" : ""
                      }`}
                    />
                  </a>
                </Magnetic>

                <Magnetic strength={0.2}>
                  <a
                    href="#contact"
                    className="btn-japandi-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A1B0] sm:px-7"
                  >
                    <span>{t.hero?.contactMe || "Let's Talk"}</span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.15}>
                  <button
                    type="button"
                    onClick={openCvModal}
                    className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#262522]/10 bg-[#E9E0D2]/50 px-5 py-3 text-sm font-sans text-[#625B51] transition-all hover:border-[#E8A1B0]/50 hover:bg-[#E9E0D2]/80 hover:text-[#262522] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#E8A1B0]"
                  >
                    <FileText className="h-4 w-4 text-[#AD8B59]" />
                    <span>{t.hero?.downloadCv || "Curriculum Vitae"}</span>
                  </button>
                </Magnetic>
              </motion.div>
            </motion.div>

            {/* ========================================================= */}
            {/* RIGHT COLUMN: The Katana Masterpiece Centerpiece          */}
            {/* ========================================================= */}
            <motion.div
              style={{ y: shouldReduceMotion ? 0 : katanaScrollY }}
              initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: shouldReduceMotion ? 0 : 0.9,
                delay: shouldReduceMotion ? 0 : 0.15,
                ease: EASE,
              }}
              className="relative flex items-center justify-center lg:col-span-5 xl:col-span-5"
            >
              {/* Architectural Frame & Minimalist Backdrop Ring */}
              <div className="relative flex w-full max-w-[22rem] sm:max-w-[26rem] items-center justify-center py-6">
                
                {/* Traditional Japanese Enso / Zen Circle in Background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute h-64 w-64 rounded-full border border-[#262522]/10 sm:h-80 sm:w-80"
                >
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#AD8B59]/30 animate-[spin_120s_linear_infinite]" />
                </div>

                {/* Vertical Decorative Typography Elements */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 select-none opacity-40 sm:opacity-60"
                >
                  <span className="font-editorial text-2xl text-[#262522] writing-mode-vertical">
                    刀魂
                  </span>
                  <span className="h-8 w-px bg-[#262522]/20" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#786F63] [writing-mode:vertical-rl]">
                    KATANA SPIRIT
                  </span>
                </div>

                {/* Precision Coordinates & Degree Callout */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 sm:right-2 top-10 flex flex-col items-end select-none opacity-60"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#786F63]">
                    37.27° N · 9.87° E
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.12em] text-[#AD8B59]">
                    BI DEGREE &amp; MERN
                  </span>
                </div>

                {/* The Katana Graphic Masterpiece */}
                <KatanaGraphic className="py-2" />

                {/* Floating Tactile Sub-Card (Featured Architecture) */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.7 }}
                  className="absolute -bottom-6 sm:-bottom-8 right-2 sm:right-4 z-20"
                >

                </motion.div>
              </div>
            </motion.div>

          </div>
        </div>
      </motion.div>

      {/* ========================================================= */}
      {/* BOTTOM BAR: Quiet, elegant Japanese editorial indicator   */}
      {/* ========================================================= */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: shouldReduceMotion ? 0 : 0.8, duration: shouldReduceMotion ? 0 : 0.5 }}
        className="relative z-10 mx-auto mt-4 w-full max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <div className="flex items-center justify-between gap-4 border-t border-[#262522]/10 pt-4 text-[10px] font-mono text-[#786F63] sm:pt-5 sm:text-[11px]">
          <div className="flex items-center gap-3">
            <span className="hanko-stamp h-4 w-4 text-[8px]">道</span>
            <span className="hidden uppercase tracking-[0.18em] sm:inline">
              Kyoto Spirit <span aria-hidden="true">·</span> Modern Full Stack &amp; Data
            </span>
          </div>

          <a
            href="#about"
            className="group ml-auto inline-flex min-h-10 items-center gap-2 uppercase tracking-wider transition-colors hover:text-[#262522] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8A1B0]"
          >
            <span className="tracking-[0.16em]">Scroll to explore</span>
            <motion.span
              aria-hidden="true"
              animate={shouldReduceMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex transition-transform group-hover:translate-y-0.5"
            >
              <ArrowDown className="h-3.5 w-3.5 text-[#E8A1B0]" />
            </motion.span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
