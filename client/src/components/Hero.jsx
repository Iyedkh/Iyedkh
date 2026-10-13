import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  Code2,
  Database,
  BarChart3,
  CheckCircle2,
  Cpu,
  Layers,
  Terminal,
  Activity,
  Sparkles,
} from "lucide-react";
import Counter from "./Counter";
import Me from "../assets/Me.png";
import { useLanguage } from "../i18n/LanguageContext";
import { useCvModal } from "../context/CvModalContext";

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const { openCvModal } = useCvModal();
  const [activeConsoleMode, setActiveConsoleMode] = useState("fullstack"); // "fullstack" | "analytics"

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.09,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const fullstackPills = [
    "React 19",
    "Next.js",
    "TypeScript",
    "Node.js",
    "Express",
    "MongoDB",
    "REST APIs",
    "Tailwind CSS",
  ];

  const dataPills = [
    "Python",
    "Pandas",
    "Power BI",
    "SQL / Postgres",
    "DAX Modeling",
    "Tableau",
    "Machine Learning",
    "Excel Modeling",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background ambient radial grid */}
      <div className="absolute inset-0 bg-grid-subtle pointer-events-none opacity-40" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column — Editorial Identity */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-5">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs text-[var(--text-secondary)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-teal)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-teal)]" />
              </span>
              <span className="font-mono text-[11px] text-[var(--text-primary)]">
                {t.hero.statusBadge}
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.div variants={itemVariants} className="space-y-1 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.035em] text-[var(--text-primary)] leading-[1.12]">
              {t.hero.title1}
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] amber-gradient-text leading-[1.18]">
              {t.hero.title2}
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl leading-relaxed mb-8 font-normal"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Cluster */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-3.5 mb-10 w-full sm:w-auto"
          >
            <a
              href="#projects"
              className="btn-primary-action w-full sm:w-auto justify-center group"
            >
              <span>{t.hero.exploreProjects}</span>
              <ArrowRight className={`w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 ${isRTL ? "rotate-180 group-hover:-translate-x-1" : ""}`} />
            </a>

            <button
              type="button"
              onClick={openCvModal}
              className="btn-secondary-action w-full sm:w-auto justify-center"
              title="Download Resume PDF"
            >
              <Download className="w-4 h-4 text-[var(--accent-amber)]" />
              <span>{t.hero.downloadCv}</span>
            </button>

            <a
              href="#contact"
              className="btn-secondary-action w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4 text-[var(--text-secondary)]" />
              <span>{t.hero.contactMe}</span>
            </a>
          </motion.div>

          {/* Live Metric Counters */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-[var(--border)] w-full max-w-lg"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-0.5">
                <Counter target={3} suffix="+" />
              </div>
              <div className="text-xs text-[var(--text-secondary)] font-mono tracking-wide mt-1">
                {t.hero.stats.yearsExperience}
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--accent-amber)] flex items-center gap-0.5">
                <Counter target={5} suffix="+" />
              </div>
              <div className="text-xs text-[var(--text-secondary)] font-mono tracking-wide mt-1">
                {t.hero.stats.shippedSystems}
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-[var(--text-primary)] flex items-center gap-0.5">
                <Counter target={3} suffix="+" />
              </div>
              <div className="text-xs text-[var(--text-secondary)] font-mono tracking-wide mt-1">
                {t.hero.stats.certifications}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column — Interactive Duality Console & Developer Identity Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col items-center lg:items-end relative"
        >
          {/* Main Card Container */}
          <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl p-3.5 bg-[var(--bg-surface)] border border-[var(--border)] shadow-2xl group">
            
            {/* Interactive Mode Toggle Bar (Full-Stack vs Data Telemetry) */}
            <div className="flex items-center justify-between p-1.5 mb-3 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border)]">
              <button
                type="button"
                onClick={() => setActiveConsoleMode("fullstack")}
                className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl text-xs font-mono transition-all duration-200 ${
                  activeConsoleMode === "fullstack"
                    ? "bg-[var(--accent-amber-dim)] text-[var(--accent-amber)] font-semibold border border-[var(--border-focus)] shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>Full-Stack</span>
              </button>

              <button
                type="button"
                onClick={() => setActiveConsoleMode("analytics")}
                className={`flex-1 flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl text-xs font-mono transition-all duration-200 ${
                  activeConsoleMode === "analytics"
                    ? "bg-[var(--accent-teal-dim)] text-[var(--accent-teal)] font-semibold border border-[var(--accent-teal-border)] shadow-sm"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                <BarChart3 className="w-3.5 h-3.5" />
                <span>Data & BI</span>
              </button>
            </div>

            {/* Profile Photo Display with dynamic overlay */}
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--border)]">
              <img
                src={Me}
                alt="Iyed Khouildi — Full-Stack Developer & Data Analyst"
                className="w-full h-full object-cover object-top filter saturate-[0.92] brightness-[0.96] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Subtle architectural vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/25 to-transparent" />

              {/* Top Location & Degree Telemetry */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-[var(--bg-primary)]/85 backdrop-blur-md border border-[var(--border)] text-[var(--text-primary)]">
                  {t.hero.card.location}
                </span>
                <span className="telemetry-pill text-[10px] bg-[var(--bg-primary)]/85 backdrop-blur-md">
                  {t.hero.card.degree}
                </span>
              </div>

              {/* Dynamic Bottom Telemetry Console */}
              <AnimatePresence mode="wait">
                {activeConsoleMode === "fullstack" ? (
                  <motion.div
                    key="fullstack-hud"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[var(--bg-surface)]/95 backdrop-blur-xl border border-[var(--border)] space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                        <span className="font-bold text-xs text-[var(--text-primary)] font-mono">
                          MERN Architecture
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[var(--accent-teal)] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> Production Ready
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {["React", "Next.js", "Node.js", "MongoDB"].map((tech) => (
                        <span
                          key={tech}
                          className="tech-pill text-[10px] py-0.5 px-2 bg-[var(--bg-primary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="analytics-hud"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25 }}
                    className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-[var(--bg-surface)]/95 backdrop-blur-xl border border-[var(--border)] space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Activity className="w-3.5 h-3.5 text-[var(--accent-teal)]" />
                        <span className="font-bold text-xs text-[var(--text-primary)] font-mono">
                          Data & BI Pipeline
                        </span>
                      </div>
                      <span className="text-[10px] font-mono text-[var(--accent-amber)] flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" /> ISG Bizerte
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      {["Python", "Power BI", "Pandas", "SQL"].map((tech) => (
                        <span
                          key={tech}
                          className="telemetry-pill text-[10px] py-0.5 px-2 bg-[var(--bg-primary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Floating Duality Metric Pill */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -bottom-4 ${
                isRTL ? "-right-4 sm:-right-6" : "-left-4 sm:-left-6"
              } p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-xl flex items-center gap-3`}
            >
              <div className="w-9 h-9 rounded-xl bg-[var(--accent-amber-dim)] border border-[var(--border-focus)] flex items-center justify-center text-[var(--accent-amber)]">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-[var(--text-secondary)] uppercase">
                  {t.hero.card.coreFocus}
                </div>
                <div className="text-xs font-bold text-[var(--text-primary)] font-mono">
                  {t.hero.card.stack}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Dynamic Technology Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.6 }}
        className="mt-16 pt-8 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4"
      >
        <div className="flex items-center gap-2">
          <Cpu className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
          <span className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
            {t.hero.techStack}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {(activeConsoleMode === "fullstack" ? fullstackPills : dataPills).map((skill) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`text-xs py-1 px-3 rounded-lg font-mono transition-all ${
                activeConsoleMode === "fullstack"
                  ? "tech-pill hover:border-[var(--accent-amber)] hover:text-[var(--text-primary)]"
                  : "telemetry-pill"
              }`}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;