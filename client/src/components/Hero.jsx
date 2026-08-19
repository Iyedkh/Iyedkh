import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles, Code2, Database, BarChart3, CheckCircle2 } from "lucide-react";
import Counter from "./Counter";
import Me from "../assets/Me.png";
import { toast } from "sonner";

const Hero = () => {
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

  const handleDownloadCV = () => {
    toast.success("Downloading Curriculum Vitae", {
      description: "Iyed Khouildi — Full-Stack Developer & Data Analyst",
      duration: 3500,
    });
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
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for Projects & Remote Roles</span>
            </div>
          </motion.div>

          {/* Editorial Display Heading */}
          <motion.div variants={itemVariants} className="space-y-1 mb-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-[-0.035em] text-white leading-[1.08]">
              Full-Stack Developer
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.03em] gold-text leading-[1.15]">
              & Data Analyst
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg text-zinc-300 max-w-xl leading-relaxed mb-8 font-normal"
          >
            I craft high-performance web applications and transform complex datasets into actionable business intelligence. Merging clean software engineering with analytical precision.
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
              <span>Explore Projects</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="btn-apple-secondary w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4 text-zinc-400" />
              <span>Contact Me</span>
            </a>

            <a
              href="/CV iyed.pdf"
              download="CV_Iyed_Khouildi.pdf"
              onClick={handleDownloadCV}
              className="btn-apple-secondary w-full sm:w-auto justify-center"
              title="Download Resume PDF"
            >
              <Download className="w-4 h-4 text-[#d4a574]" />
              <span>Download CV</span>
            </a>
          </motion.div>

          {/* Live Metric Counters */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-3 gap-6 pt-6 border-t border-white/[0.08] w-full max-w-lg"
          >
            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-0.5">
                <Counter target={3} suffix="+" />
              </div>
              <div className="text-xs text-zinc-400 font-mono tracking-wide mt-1">
                Years Experience
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight gold-text flex items-center gap-0.5">
                <Counter target={5} suffix="+" />
              </div>
              <div className="text-xs text-zinc-400 font-mono tracking-wide mt-1">
                Shipped Systems
              </div>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-0.5">
                <Counter target={3} suffix="+" />
              </div>
              <div className="text-xs text-zinc-400 font-mono tracking-wide mt-1">
                Certifications
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
          {/* Ambient Glow */}
          <div
            aria-hidden="true"
            className="absolute -inset-4 bg-gradient-to-tr from-[#d4a574]/15 via-[#8b4789]/10 to-blue-500/10 rounded-3xl blur-2xl opacity-70 pointer-events-none"
          />

          {/* Interactive Profile Card */}
          <div className="relative w-full max-w-sm sm:max-w-md rounded-3xl p-3 bg-gradient-to-b from-white/[0.12] to-white/[0.03] border border-white/10 shadow-2xl backdrop-blur-xl group">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-[#111116] border border-white/[0.08]">
              {/* Photo */}
              <img
                src={Me}
                alt="Iyed Khouildi — Full-Stack Developer & Data Analyst"
                className="w-full h-full object-cover object-top filter saturate-[0.88] brightness-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />

              {/* Gradient Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/30 to-transparent" />

              {/* Top Pill: Location & Degree */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-medium tracking-wide bg-black/60 backdrop-blur-md border border-white/10 text-zinc-300">
                  📍 Bizerte, Tunisia
                </span>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-semibold tracking-wide bg-[#d4a574]/20 backdrop-blur-md border border-[#d4a574]/30 text-[#ebd0ad]">
                  BI Degree
                </span>
              </div>

              {/* Bottom Card Summary */}
              <div className="absolute bottom-3 left-3 right-3 p-4 rounded-xl bg-black/75 backdrop-blur-xl border border-white/10 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm text-white tracking-tight">
                    Iyed Khouildi
                  </span>
                  <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> 100% Quality
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {techPills.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded-md text-[10px] font-mono font-medium bg-white/[0.06] text-zinc-300 border border-white/[0.08]"
                    >
                      {tech}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-mono text-[#ebd0ad] bg-[#d4a574]/15 border border-[#d4a574]/30">
                    +4 more
                  </span>
                </div>
              </div>
            </div>

            {/* Floating Apple Mini Badge: MERN + BI */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-4 sm:-left-6 p-3 rounded-2xl bg-[#111116]/90 border border-white/15 backdrop-blur-xl shadow-xl flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#d4a574]/20 to-[#8b4789]/20 border border-[#d4a574]/30 flex items-center justify-center text-[#ebd0ad]">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono font-bold tracking-widest text-zinc-400 uppercase">
                  CORE FOCUS
                </div>
                <div className="text-xs font-bold text-white">
                  MERN + BI Analytics
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
        className="mt-16 pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-between gap-4"
      >
        <span className="text-xs font-mono font-semibold tracking-wider text-zinc-500 uppercase">
          Technology Stack
        </span>
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {techPills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-lg text-xs font-medium text-zinc-300 bg-white/[0.03] border border-white/[0.06] hover:border-[#d4a574]/40 hover:text-white transition-colors"
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