import React from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { useCvModal } from "../context/CvModalContext";
import Magnetic from "./Magnetic";
import KatanaGraphic from "./KatanaGraphic";
import JapaneseBackdrop from "./JapaneseBackdrop";

const EASE = [0.16, 1, 0.3, 1];
const STACK = ["MERN Stack", "Redux", "REST APIs", "Socket.io", "Business Intelligence"];

const Hero = () => {
  const { isRTL, t } = useLanguage();
  const { openCvModal } = useCvModal();
  const shouldReduceMotion = useReducedMotion();

  // Gentle scroll parallax & exit fade for hero elements
  const { scrollY } = useScroll();
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0.15]);
  const katanaScrollY = useTransform(scrollY, [0, 600], [0, 80]);

  // Cursor parallax: layers drift at different depths
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 60, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 60, damping: 18 });
  const katanaX = useTransform(smoothX, (v) => v * 18);
  const katanaRotate = useTransform(smoothX, (v) => v * 2.5);
  const ringX = useTransform(smoothX, (v) => v * -26);
  const ringY = useTransform(smoothY, (v) => v * -26);
  const badgeX = useTransform(smoothX, (v) => v * 34);
  const badgeY = useTransform(smoothY, (v) => v * 34);

  const handlePointerMove = (e) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    pointerX.set((e.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

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
      onPointerMove={handlePointerMove}
      className="relative isolate flex h-[100svh] max-h-[100svh] flex-col justify-between overflow-hidden pb-5 pt-24 sm:pt-28 lg:pt-32 washi-grain shoji-grid"
    >
      {/* Background Japanese Editorial Art Layer */}
      <JapaneseBackdrop />

      {/* Main 2-Column Hero Grid */}
      <motion.div
        style={{ opacity: shouldReduceMotion ? 1 : heroOpacity }}
        className="relative z-10 flex min-h-0 flex-1 items-center py-2"
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
              <motion.div variants={fadeUp} className="mb-[2.5svh] flex flex-wrap items-center gap-3">
                <span className="hanko-stamp shrink-0" aria-label="Takumi Artisan Seal">
                  匠
                </span>
                <div className="japandi-pill" role="status">
                  <span aria-hidden="true" className="relative flex h-2 w-2 shrink-0">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D48D9B] opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D48D9B]" />
                  </span>
                  <span>{t.hero?.statusBadge || "Available for Select Projects & Architecture"}</span>
                </div>
              </motion.div>

              {/* Editorial Title with disciplined line breaks */}
              <h1
                id="hero-title"
                className="mb-[2.5svh] font-editorial text-[clamp(2.4rem,min(11vw,8svh),5.25rem)] font-normal leading-[1.02] tracking-[-0.035em] text-[#22211E]"
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
                <span className="block overflow-hidden pb-4">
                  <motion.span variants={lineReveal} className="relative inline-block italic text-[#D48D9B]">
                    with precision.
                    {/* Sumi brush underline that paints itself */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 300 20"
                      preserveAspectRatio="none"
                      className="absolute -bottom-2 left-0 h-3 w-full overflow-visible"
                    >
                      <motion.path
                        d="M2 14 C 60 4, 120 18, 180 9 S 270 6, 298 11"
                        fill="none"
                        stroke="#A68550"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.8 }}
                        transition={{ duration: shouldReduceMotion ? 0 : 1.4, delay: shouldReduceMotion ? 0 : 1.1, ease: EASE }}
                      />
                    </svg>
                  </motion.span>
                </span>
              </h1>

              {/* Concise, elegant bio */}
              <motion.p
                variants={fadeUp}
                className="mb-[3.5svh] max-w-[33rem] text-[15px] leading-[1.7] text-[#5F584E] sm:text-[17px] sm:leading-[1.7]"
              >
                I&apos;m <strong className="font-semibold text-[#22211E]">Iyed Khouildi</strong>, a Full
                Stack Developer &amp; Data Analyst merging engineering discipline, business
                intelligence, and Japanese architectural minimalism into resilient, calm software.
              </motion.p>

              {/* Expertise tags */}
              <motion.div variants={fadeUp} className="mb-[3.5svh] w-full max-w-xl [@media(max-height:820px)]:hidden">
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-px w-4 bg-[#A68550]" />
                  <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#726A5F]">
                    {t.hero?.techStack || "Core Expertise"}
                  </p>
                </div>
                <ul aria-label="Areas of expertise" className="m-0 flex list-none flex-wrap gap-2 p-0">
                  {STACK.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-[#22211E]/10 bg-[#F6F2EB]/90 px-3.5 py-1.5 text-[11px] font-mono tracking-wide text-[#726A5F] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_1px_2px_rgba(34,33,30,0.03)] backdrop-blur-sm transition-[color,border-color,transform] duration-300 hover:-translate-y-px hover:border-[#D48D9B]/60 hover:text-[#22211E] sm:text-xs"
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
                    className="btn-japandi-primary group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D48D9B] sm:px-7"
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
                    className="btn-japandi-secondary inline-flex min-h-12 items-center justify-center rounded-full px-6 py-3 text-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D48D9B] sm:px-7"
                  >
                    <span>{t.hero?.contactMe || "Let's Talk"}</span>
                  </a>
                </Magnetic>

                <Magnetic strength={0.15}>
                  <button
                    type="button"
                    onClick={openCvModal}
                    className="group/cv inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-dashed border-[#A68550]/40 bg-[#EBE3D5]/50 px-5 py-3 text-sm font-sans text-[#5F584E] transition-all duration-300 hover:-translate-y-0.5 hover:border-solid hover:border-[#D48D9B]/60 hover:bg-[#EBE3D5] hover:text-[#22211E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D48D9B]"
                  >
                    <FileText className="h-4 w-4 text-[#A68550] transition-transform duration-300 group-hover/cv:-rotate-6" />
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
              className="relative hidden items-center justify-center lg:col-span-5 lg:flex xl:col-span-5"
            >
              {/* Architectural Frame & Minimalist Backdrop Ring */}
              <div className="relative flex w-full max-w-[22rem] sm:max-w-[26rem] items-center justify-center py-2">
                
                {/* Traditional Japanese Enso / Zen Circle in Background */}
                <motion.div
                  aria-hidden="true"
                  style={{ x: ringX, y: ringY }}
                  className="pointer-events-none absolute h-64 w-64 rounded-full border border-[#22211E]/10 sm:h-80 sm:w-80"
                >
                  <div className="absolute inset-0 rounded-full border border-dashed border-[#A68550]/30 animate-[spin_120s_linear_infinite]" />
                  <div className="absolute inset-6 rounded-full bg-gradient-to-br from-[#D48D9B]/10 via-transparent to-[#A68550]/10 blur-xl" />
                </motion.div>

                {/* Vertical Decorative Typography Elements */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-4 sm:left-0 top-1/2 -translate-y-1/2 flex flex-col items-center gap-3 select-none opacity-40 sm:opacity-60"
                >
                  <span className="font-editorial text-2xl text-[#22211E] writing-mode-vertical">
                    刀魂
                  </span>
                  <span className="h-8 w-px bg-[#22211E]/20" />
                  <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-[#726A5F] [writing-mode:vertical-rl]">
                    KATANA SPIRIT
                  </span>
                </div>

                {/* Precision Coordinates & Degree Callout */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-2 sm:right-2 top-10 flex flex-col items-end select-none opacity-60"
                >
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-[#726A5F]">
                    37.27° N · 9.87° E
                  </span>
                  <span className="font-mono text-[9px] tracking-[0.12em] text-[#A68550]">
                    BI DEGREE &amp; MERN
                  </span>
                </div>

                {/* The Katana Graphic Masterpiece */}
                <motion.div style={{ x: katanaX, rotate: katanaRotate }}>
                  <KatanaGraphic className="py-2" />
                </motion.div>

                {/* Rotating seal badge */}
                <motion.a
                  href="#contact"
                  aria-label={t.hero?.contactMe || "Let's Talk"}
                  style={{ x: badgeX, y: badgeY }}
                  initial={{ opacity: 0, scale: 0.5, rotate: -40 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  transition={{ delay: shouldReduceMotion ? 0 : 1, type: "spring", stiffness: 120, damping: 14 }}
                  className="group absolute bottom-16 left-2 sm:left-6 z-20 hidden sm:flex h-28 w-28 items-center justify-center rounded-full bg-[#F6F2EB]/85 shadow-[0_12px_30px_-12px_rgba(34,33,30,0.3)] backdrop-blur-md"
                >
                  <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full animate-spin-slow group-hover:[animation-duration:6s]">
                    <defs>
                      <path id="sealCircle" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" />
                    </defs>
                    <text className="fill-[#22211E] font-mono" style={{ fontSize: "8.4px", letterSpacing: "2.4px" }}>
                      <textPath href="#sealCircle">AVAILABLE FOR WORK · 2026 · 匠 ·</textPath>
                    </text>
                  </svg>
                  <span className="relative flex h-11 w-11 items-center justify-center rounded-full bg-[#B8403A] font-kanji text-lg text-[#F6F2EB] transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
                    縁
                  </span>
                </motion.a>

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
        className="relative z-10 mx-auto mt-2 w-full max-w-7xl px-5 sm:px-8 lg:px-12"
      >
        <div className="flex items-center justify-between gap-4 border-t border-[#22211E]/10 pt-4 text-[10px] font-mono text-[#726A5F] sm:pt-5 sm:text-[11px]">
          <div className="flex items-center gap-3">
            <span className="hanko-stamp h-4 w-4 text-[8px]">道</span>
            <span className="hidden uppercase tracking-[0.18em] sm:inline">
              Kyoto Spirit <span aria-hidden="true">·</span> Modern Full Stack &amp; Data
            </span>
          </div>

          <a
            href="#about"
            className="group ml-auto inline-flex min-h-10 items-center gap-2 uppercase tracking-wider transition-colors hover:text-[#22211E] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D48D9B]"
          >
            <span className="tracking-[0.16em]">Scroll to explore</span>
            <motion.span
              aria-hidden="true"
              animate={shouldReduceMotion ? undefined : { y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex transition-transform group-hover:translate-y-0.5"
            >
              <ArrowDown className="h-3.5 w-3.5 text-[#D48D9B]" />
            </motion.span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
