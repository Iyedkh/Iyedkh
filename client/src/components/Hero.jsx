import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Code2, Database, BarChart3, CheckCircle2 } from "lucide-react";
import Counter from "./Counter";
import Me from "../assets/Me.png";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";
import { useCvModal } from "../context/CvModalContext";

const Hero = () => {
  const { t, isRTL } = useLanguage();
  const { openCvModal } = useCvModal();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const techPills = [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "Python",
    "Power BI",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column — Editorial Identity */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 flex flex-col items-start z-10"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="section-pill flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent-secondary)] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent-secondary)]" />
              </span>
              <span>{t.hero.statusBadge}</span>
            </div>
          </motion.div>

          {/* Editorial Display Heading */}
          <motion.div variants={itemVariants} className="space-y-1 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.035em] text-[var(--text-primary)] leading-[1.12]">
              {t.hero.title1}
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] bronze-text leading-[1.18]">
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
              className="btn-apple-primary w-full sm:w-auto justify-center"
            >
              <span>{t.hero.exploreProjects}</span>
              <ArrowRight className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
            </a>

            <a
              href="#contact"
              className="btn-apple-secondary w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4 text-[var(--text-secondary)]" />
              <span>{t.hero.contactMe}</span>
            </a>

            <button
              type="button"
              onClick={openCvModal}
              className="btn-apple-secondary w-full sm:w-auto justify-center"
              title="Download Resume PDF"
            >
              <Download className="w-4 h-4 text-[var(--accent-primary)]" />
              <span>{t.hero.downloadCv}</span>
            </button>
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
              <div className="text-2xl sm:text-3xl font-bold tracking-tight bronze-text flex items-center gap-0.5">
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

        {/* Right Column — Apple Developer Profile Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex justify-center lg:justify-end relative"
        >
          {/* Interactive Profile Card */}
          <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl p-3 bg-[var(--bg-surface)] border border-[var(--border)] shadow-xl group">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[var(--bg-primary)] border border-[var(--border)]">
              {/* Photo */}
              <img
                src={Me}
                alt="Iyed Khouildi — Full-Stack Developer & Data Analyst"
                className="w-full h-full object-cover object-top filter saturate-[0.88] brightness-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/30 to-transparent" />

              {/* Top Pill: Location & Degree */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-[var(--bg-primary)]/80 border border-[var(--border)] text-[var(--text-primary)]">
                  {t.hero.card.location}
                </span>
                <span className="tech-pill text-[10px]">
                  {t.hero.card.degree}
                </span>
              </div>

              {/* Bottom Card Summary */}
              <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-[var(--bg-surface)]/90 backdrop-blur-xl border border-[var(--border)] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-[var(--text-primary)] tracking-tight">
                    Iyed Khouildi
                  </span>
                  <span className="text-[11px] font-mono text-[var(--accent-secondary)] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> {t.hero.card.quality}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {techPills.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="tech-pill text-[10px] py-0.5 px-2"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="tech-pill text-[10px] py-0.5 px-2 text-[var(--accent-secondary)]">
                    {t.hero.card.more}
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Apple Mini Badge: MERN + BI */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className={`absolute -bottom-4 ${isRTL ? "-right-4 sm:-right-6" : "-left-4 sm:-left-6"} p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-xl flex items-center gap-3`}
            >
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-secondary-dim)] border border-[var(--accent-secondary-border)] flex items-center justify-center text-[var(--accent-secondary)]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-[var(--text-secondary)] uppercase">
                  {t.hero.card.coreFocus}
                </div>
                <div className="text-xs font-bold text-[var(--text-primary)]">
                  {t.hero.card.stack}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Tech Stack Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
        className="mt-16 pt-8 border-t border-[var(--border)] flex flex-wrap items-center justify-between gap-4"
      >
        <span className="text-xs font-mono font-semibold tracking-wider text-[var(--text-secondary)] uppercase">
          {t.hero.techStack}
        </span>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {techPills.map((skill) => (
            <span
              key={skill}
              className="tech-pill text-xs py-1 px-3"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
