import React, { useState, useEffect, useRef } from "react";
import {
  Terminal, Menu, X, Code2, Share2, Mail, User, Briefcase,
  GraduationCap, Cpu, Download, Server, GitBranch, Calculator,
  Sheet, Database, BarChart3, Settings, HardDrive, Brain,
  ArrowRight, History, AtSign, MapPin, Globe, Users,
  MessageSquare, Phone, Github, Linkedin, Twitter, ExternalLink,
  ChevronRight, Star, Zap,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Me from "./assets/Me.jpeg";
/* ─── Skill Icon ─────────────────────────────────────────── */
const SkillIcon = ({ name }) => {
  const map = {
    html5: Code2, css3: Code2, javascript: Code2, typescript: Code2,
    react: Cpu, nextjs: Cpu, "next.js": Cpu,
    tailwindcss: Settings, "tailwind css": Settings, bootstrap: Settings,
    nodejs: Terminal, "node.js": Terminal,
    express: Server, "express.js": Server, springboot: Server, "spring boot": Server,
    api: Globe, "rest apis": Globe, "next.js api routes": Globe,
    mongodb: Database, postgresql: Database,
    sql: HardDrive,
    python: Terminal,
    pandas: Calculator, numpy: Calculator,
    "machine learning": Brain,
    powerbi: BarChart3, "power bi": BarChart3, tableau: BarChart3,
    "data visualization": BarChart3, datavis: BarChart3,
    excel: Sheet,
    git: GitBranch, github: GitBranch,
  };
  const Icon = map[name.toLowerCase()] || Code2;
  return <Icon className="w-5 h-5" />;
};

/* ─── Animated counter ───────────────────────────────────── */
const Counter = ({ target, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true;
        let start = 0;
        const step = target / 40;
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 35);
      }
    });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{count}{suffix}</span>;
};

/* ─── Cursor glow ────────────────────────────────────────── */
const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      className="pointer-events-none fixed z-0"
      style={{
        left: pos.x - 200, top: pos.y - 200,
        width: 400, height: 400,
        background: "radial-gradient(circle, rgba(212,163,89,0.07) 0%, transparent 70%)",
        borderRadius: "50%",
        transition: "left 0.15s ease, top 0.15s ease",
      }}
    />
  );
};

/* ─── Main App ───────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js","Express.js","REST APIs","Spring Boot","Next.js API Routes"],
    },
    {
      category: "Databases",
      items: ["MongoDB","SQL","PostgreSQL"],
    },
    {
      category: "Data & BI",
      items: ["Python","Pandas","NumPy","Machine Learning","Power BI","Tableau","Data Visualization","Excel"],
    },
    {
      category: "Tools",
      items: ["Git","GitHub"],
    },
  ];

  const projects = [
    {
      title: "MS Smart Trading",
      description: "Responsive business website built to strengthen online presence and align with client branding and commercial goals.",
      tags: ["MERN Stack"],
      url: "https://mssmarttrading.com",
      year: "2025",
    },
    {
      title: "EGT Naval Services",
      description: "Corporate website showcasing naval maintenance services with optimized structure to attract new international clients.",
      tags: ["React", "Tailwind CSS"],
      url: "https://egtnavalservices.com",
      year: "2024",
    },
    {
      title: "JCD Commerce",
      description: "Modern, high-performance corporate website optimized for presentation and client acquisition.",
      tags: ["React", "Tailwind CSS"],
      url: "https://jcdcommerce.com",
      year: "2025",
    },
    {
      title: "Oliv'Wood",
      description: "Full e-commerce platform with admin dashboard, product management, order tracking, and responsive UI.",
      tags: ["MERN Stack", "Tailwind CSS"],
      url: "https://olivwood.netlify.app",
      year: "2025",
    },
  ];

  const experiences = [
    {
      period: "Feb – Jun 2024",
      title: "Web Developer & Data Analyst",
      company: "IT-Grow",
      type: "Internship",
      description: "Designed and built a complete e-learning platform — responsive UI, backend, interactive features, and a progress-tracking dashboard.",
    },
    {
      period: "Sep – Oct 2024",
      title: "Freelance Web Developer",
      company: "EGT Naval Services",
      link: "https://egtnavalservices.com",
      type: "Freelance",
      description: "Modern corporate website for a naval services company, optimized to attract new clients.",
    },
    {
      period: "Jun – Aug 2025",
      title: "Freelance Web Developer",
      company: "MS Smart Trading",
      link: "https://mssmarttrading.com",
      type: "Freelance",
      description: "Professional business website aligned with brand identity and commercial objectives.",
    },
    {
      period: "Dec 2025 – Jan 2026",
      title: "Founder & Web Developer",
      company: "Oliv'Wood",
      link: "https://olivwood.netlify.app",
      type: "Founder",
      description: "Built a custom e-commerce platform with admin dashboard for a small online business.",
    },
    {
      period: "Mar – Apr 2026",
      title: "Freelance Web Developer",
      company: "MS Équipements et Services",
      link: "https://msequipementsetservices.com",
      type: "Freelance",
      description: "High-performance corporate website to strengthen digital presence and client engagement.",
    },
  ];

  const typeColors = {
    Internship: "#60a5fa",
    Freelance: "#d4a359",
    Founder: "#a78bfa",
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0c;
          --bg2: #111116;
          --bg3: #18181f;
          --border: rgba(255,255,255,0.07);
          --border2: rgba(255,255,255,0.12);
          --gold: #d4a359;
          --gold2: #e8bf7a;
          --gold-dim: rgba(212,163,89,0.12);
          --text: #f0ede8;
          --muted: #7a7880;
          --muted2: #a09da8;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
        }

        ::selection { background: rgba(212,163,89,0.35); color: #fff; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 4px; }

        .serif { font-family: 'DM Serif Display', serif; }
        .mono { font-family: 'DM Mono', monospace; }

        /* Noise overlay */
        body::before {
          content: '';
          position: fixed; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
          opacity: 0.03;
          pointer-events: none;
          z-index: 9999;
        }

        .gold-text {
          background: linear-gradient(135deg, #d4a359 0%, #e8bf7a 50%, #c49040 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 16px;
          transition: border-color 0.3s, transform 0.3s, box-shadow 0.3s;
        }
        .card:hover {
          border-color: rgba(212,163,89,0.25);
          transform: translateY(-3px);
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
        }

        .tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.04em;
          padding: 4px 10px;
          border-radius: 4px;
          background: var(--gold-dim);
          color: var(--gold);
          border: 1px solid rgba(212,163,89,0.2);
        }

        .btn-primary {
          background: var(--gold);
          color: #0a0a0c;
          font-weight: 700;
          font-size: 14px;
          letter-spacing: 0.02em;
          padding: 12px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-primary:hover { background: var(--gold2); transform: translateY(-1px); box-shadow: 0 8px 24px rgba(212,163,89,0.3); }

        .btn-secondary {
          background: transparent;
          color: var(--text);
          font-weight: 600;
          font-size: 14px;
          padding: 11px 28px;
          border-radius: 8px;
          border: 1px solid var(--border2);
          cursor: pointer;
          transition: all 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-secondary:hover { border-color: rgba(212,163,89,0.4); color: var(--gold); }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: var(--gold);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        .section-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: var(--gold);
        }

        .divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, var(--border2), transparent);
          margin: 80px 0;
        }

        input, textarea {
          width: 100%;
          background: var(--bg3);
          border: 1px solid var(--border);
          border-radius: 10px;
          padding: 14px 18px;
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s;
        }
        input:focus, textarea:focus { border-color: rgba(212,163,89,0.5); }
        input::placeholder, textarea::placeholder { color: var(--muted); }

        label {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted2);
          margin-bottom: 8px;
        }

        .timeline-line::before {
          content: '';
          position: absolute;
          left: 15px;
          top: 24px;
          bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, rgba(212,163,89,0.4), transparent);
        }

        .dot {
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--gold);
          border: 2px solid var(--bg);
          box-shadow: 0 0 0 4px rgba(212,163,89,0.15);
          flex-shrink: 0;
          margin-top: 5px;
        }

        @media (max-width: 768px) {
          .hero-grid { flex-direction: column; }
        }
      `}</style>

      {/* Progress Bar */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-0.5 bg-linear-to-r from-[#d4a359] to-[#e8bf7a] z-9999"
      />

      <CursorGlow />

      {/* ── NAV ──────────────────────────────────────────── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        transition: "all 0.3s",
        background: scrolled ? "rgba(10,10,12,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
        padding: scrolled ? "14px 0" : "22px 0",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
            style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
          >
            <div style={{
              width: 36, height: 36, borderRadius: 8,
              background: "var(--gold-dim)",
              border: "1px solid rgba(212,163,89,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Terminal style={{ width: 16, height: 16, color: "var(--gold)" }} />
            </div>
            <span style={{ fontFamily: "'DM Serif Display', serif", fontSize: 22, color: "var(--text)" }}>Iyed</span>
          </motion.a>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }} className="hidden-mobile">
            {navLinks.map((l, i) => (
              <motion.a
                key={i}
                href={l.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                style={{
                  color: "var(--muted2)", fontSize: 14, fontWeight: 500,
                  textDecoration: "none", transition: "color 0.2s",
                }}
                onMouseEnter={e => e.target.style.color = "var(--gold)"}
                onMouseLeave={e => e.target.style.color = "var(--muted2)"}
              >
                {l.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
              className="btn-primary"
              style={{ textDecoration: "none" }}
            >
              Hire Me
            </motion.a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text)", padding: 8 }}
            className="mobile-only"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
        </div>

        <style>{`
          @media (min-width: 768px) { .mobile-only { display: none !important; } }
          @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
        `}</style>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              style={{
                background: "var(--bg)", borderTop: "1px solid var(--border)",
                overflow: "hidden",
              }}
            >
              <div style={{ padding: "24px", display: "flex", flexDirection: "column", gap: 20 }}>
                {navLinks.map((l, i) => (
                  <a key={i} href={l.href} onClick={() => setMenuOpen(false)}
                    style={{ color: "var(--muted2)", fontSize: 18, fontWeight: 500, textDecoration: "none" }}>
                    {l.name}
                  </a>
                ))}
                <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary" style={{ textDecoration: "none", justifyContent: "center" }}>
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center", width: "100%", flexWrap: "wrap" }}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ maxWidth: 700 }}
            >
              <div className="section-label">
                <Zap style={{ width: 12, height: 12 }} />
                Available for projects
              </div>

              <h1 style={{ fontSize: "clamp(42px, 6vw, 82px)", lineHeight: 1.05, fontWeight: 900, marginBottom: 24, letterSpacing: "-0.02em" }}>
                Web Developer<br />
                <span className="serif" style={{ fontStyle: "italic", fontSize: "0.95em" }}>& Data Analyst</span>
              </h1>

              <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--muted2)", maxWidth: 560, marginBottom: 40 }}>
                I design and build scalable web applications while transforming complex data into 
                actionable insights — bridging the gap between elegant code and smart decisions.
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
                <motion.a
                  href="#projects" className="btn-primary"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ textDecoration: "none" }}
                >
                  View Work <ArrowRight style={{ width: 16, height: 16 }} />
                </motion.a>
                <motion.a
                  href="#contact" className="btn-secondary"
                  whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
                  style={{ textDecoration: "none" }}
                >
                  Get in Touch
                </motion.a>
              </div>

              {/* Stats row */}
              <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                {[
                  { value: 2, suffix: "+", label: "Years Experience" },
                  { value: 5, suffix: "+", label: "Projects Shipped" },
                  { value: 3, suffix: "+", label: "Certifications" },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="serif" style={{ fontSize: 36, fontWeight: 400, color: "var(--gold)", lineHeight: 1 }}>
                      <Counter target={s.value} suffix={s.suffix} />
                    </div>
                    <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4, letterSpacing: "0.05em" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Hero image card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: "relative", flexShrink: 0 }}
            >
              {/* Glow */}
              <div style={{
                position: "absolute", inset: -20,
                background: "radial-gradient(circle at 50% 50%, rgba(212,163,89,0.15), transparent 70%)",
                borderRadius: "50%",
                filter: "blur(20px)",
              }} />
              <div style={{
                position: "relative",
                width: "clamp(240px, 30vw, 380px)",
                aspectRatio: "3/4",
                borderRadius: 20,
                overflow: "hidden",
                border: "1px solid var(--border2)",
                background: "var(--bg2)",
              }}>
                <img
                  src={Me}
                  alt="developer workspace"
                  style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7, filter: "saturate(0.6)" }}
                  referrerPolicy="no-referrer"
                />
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, rgba(10,10,12,0.9) 0%, transparent 50%)",
                }} />
                <div style={{
                  position: "absolute", bottom: 20, left: 20, right: 20,
                  background: "rgba(10,10,12,0.6)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid var(--border2)",
                  borderRadius: 12, padding: "14px 16px",
                  display: "flex", alignItems: "center", gap: 10,
                }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "pulse 2s infinite" }} />
                  <span style={{ fontSize: 13, fontWeight: 500 }}>Open to freelance</span>
                </div>
                <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute", top: 30, left: -24,
                  background: "var(--bg2)", border: "1px solid var(--border2)",
                  borderRadius: 12, padding: "10px 16px",
                  display: "flex", alignItems: "center", gap: 10,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <div style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: "var(--gold-dim)", display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <Brain style={{ width: 16, height: 16, color: "var(--gold)" }} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "DM Mono" }}>MERN + AI/BI</div>
                  <div style={{ fontSize: 13, fontWeight: 600, marginTop: 1 }}>Full Stack</div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <div className="divider" />

        {/* ── ABOUT ────────────────────────────────────────── */}
        <section id="about" style={{ paddingBottom: 80 }}>
          <motion.div
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
          >
            {/* Left – text */}
            <div>
              <div className="section-label">About Me</div>
              <h2 className="serif" style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.1, marginBottom: 24, fontStyle: "italic" }}>
                Building at the intersection of code & data
              </h2>
              <p style={{ color: "var(--muted2)", lineHeight: 1.9, marginBottom: 24, fontSize: 16 }}>
                I'm a Web Developer and Data Analyst based in Bizerte, Tunisia, with a degree in Business Intelligence 
                from ISG Bizerte. I specialize in the MERN stack and bring an analytical lens to every project — 
                combining clean architecture with data-driven thinking.
              </p>
              <p style={{ color: "var(--muted2)", lineHeight: 1.9, marginBottom: 40, fontSize: 16 }}>
                Whether I'm building a responsive web platform or designing a BI dashboard, my goal is the same: 
                create solutions that are functional, beautiful, and smart.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <button className="btn-primary">
                  <Download style={{ width: 15, height: 15 }} /> Download CV
                </button>
                <a href="#contact" className="btn-secondary" style={{ textDecoration: "none" }}>
                  <Mail style={{ width: 15, height: 15 }} /> Contact Me
                </a>
              </div>
            </div>

            {/* Right – cards */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { icon: Briefcase, title: "Experience", value: "3+ Years", sub: "Building production apps" },
                { icon: GraduationCap, title: "Education", value: "BI Degree", sub: "ISG Bizerte" },
                { icon: Code2, title: "Stack", value: "MERN", sub: "React · Node · MongoDB" },
                { icon: BarChart3, title: "Analytics", value: "BI Tools", sub: "Power BI · Tableau · Python" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="card"
                  style={{ padding: 24 }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 10,
                    background: "var(--gold-dim)", border: "1px solid rgba(212,163,89,0.2)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 16,
                  }}>
                    <item.icon style={{ width: 18, height: 18, color: "var(--gold)" }} />
                  </div>
                  <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 4, fontFamily: "DM Mono" }}>{item.title}</div>
                  <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>{item.value}</div>
                  <div style={{ fontSize: 13, color: "var(--muted2)" }}>{item.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <div className="divider" />

        {/* ── SKILLS ───────────────────────────────────────── */}
        <section id="skills" style={{ paddingBottom: 80 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Technical Skills</div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontStyle: "italic" }}>
              My <span className="gold-text">Toolbox</span>
            </h2>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
            {skills.map((group, gi) => (
              <div key={gi}>
                <div style={{
                  display: "flex", alignItems: "center", gap: 16, marginBottom: 20,
                }}>
                  <span className="mono" style={{ fontSize: 11, color: "var(--gold)", letterSpacing: "0.12em" }}>
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <div style={{ height: 1, flex: 1, background: "var(--border)" }} />
                  <span style={{ fontSize: 13, fontWeight: 600, color: "var(--muted2)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                    {group.category}
                  </span>
                  <div style={{ height: 1, flex: 1, background: "var(--border)" }} />
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                  {group.items.map((skill, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.04 }}
                      whileHover={{ y: -3, borderColor: "rgba(212,163,89,0.4)" }}
                      style={{
                        display: "flex", alignItems: "center", gap: 8,
                        padding: "10px 16px",
                        background: "var(--bg2)",
                        border: "1px solid var(--border)",
                        borderRadius: 10,
                        cursor: "default",
                        transition: "all 0.2s",
                      }}
                    >
                      <span style={{ color: "var(--gold)" }}>
                        <SkillIcon name={skill} />
                      </span>
                      <span style={{ fontSize: 14, fontWeight: 500 }}>{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ── PROJECTS ─────────────────────────────────────── */}
        <section id="projects" style={{ paddingBottom: 80 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <div className="section-label">Portfolio</div>
              <h2 className="serif" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontStyle: "italic" }}>
                Featured <span className="gold-text">Projects</span>
              </h2>
            </div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--gold)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
              All Projects <ArrowRight style={{ width: 14, height: 14 }} />
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="card"
                style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
              >
                {/* iframe preview */}
                <div style={{ height: 200, position: "relative", overflow: "hidden", background: "var(--bg3)" }}>
                  <iframe
                    src={p.url}
                    title={p.title}
                    style={{ width: "100%", height: "100%", border: "none", pointerEvents: "none" }}
                    loading="lazy"
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to bottom, transparent 50%, var(--bg2))",
                  }} />
                  <div style={{ position: "absolute", top: 12, right: 12 }}>
                    <span className="mono" style={{ fontSize: 11, color: "var(--muted)", background: "rgba(10,10,12,0.7)", padding: "4px 8px", borderRadius: 4 }}>
                      {p.year}
                    </span>
                  </div>
                </div>

                <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                    {p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
                  </div>
                  <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
                  <p style={{ color: "var(--muted2)", fontSize: 14, lineHeight: 1.7, flex: 1 }}>{p.description}</p>

                  <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                    <a
                      href={p.url} target="_blank" rel="noopener noreferrer"
                      className="btn-primary"
                      style={{ textDecoration: "none", flex: 1, justifyContent: "center", fontSize: 13 }}
                    >
                      <ExternalLink style={{ width: 14, height: 14 }} /> Live Demo
                    </a>
                    <button className="btn-secondary" style={{ padding: "10px 14px" }}>
                      <Code2 style={{ width: 16, height: 16 }} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <div className="divider" />

        {/* ── EXPERIENCE & EDUCATION ───────────────────────── */}
        <section id="experience" style={{ paddingBottom: 80 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>

            {/* Education */}
            <div>
              <div className="section-label">
                <GraduationCap style={{ width: 12, height: 12 }} />
                Education
              </div>
              <h2 className="serif" style={{ fontSize: 36, marginBottom: 40, fontStyle: "italic" }}>Academic Path</h2>

              <div style={{ position: "relative" }} className="timeline-line">
                {[
                  {
                    year: "2021 – 2024",
                    title: "Bachelor's in Business Intelligence",
                    inst: "ISG Bizerte",
                    desc: "Specialized in data analysis, statistical methods, database management, and transforming data into actionable insights.",
                  },
                  {
                    year: "Certification",
                    title: "Data Scientist Bootcamp",
                    inst: "GOMYCODE",
                    link: "https://diploma.gomycode.app/?id=31752696036635526",
                  },
                  {
                    year: "Certification",
                    title: "Software Developer Bootcamp",
                    inst: "GOMYCODE",
                    link: "https://diploma.gomycode.app/?id=31751302840902487",
                  },
                ].map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    style={{ display: "flex", gap: 20, marginBottom: 28 }}
                  >
                    <div className="dot" />
                    <div className="card" style={{ padding: 20, flex: 1 }}>
                      <div className="mono" style={{ fontSize: 10, color: "var(--gold)", letterSpacing: "0.1em", marginBottom: 6 }}>
                        {edu.year}
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{edu.title}</div>
                      <div style={{ color: "var(--muted2)", fontSize: 13, marginBottom: edu.link ? 8 : 0 }}>{edu.inst}</div>
                      {edu.desc && <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{edu.desc}</div>}
                      {edu.link && (
                        <a href={edu.link} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                          View Certificate <ExternalLink style={{ width: 10, height: 10 }} />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <div className="section-label">
                <History style={{ width: 12, height: 12 }} />
                Experience
              </div>
              <h2 className="serif" style={{ fontSize: 36, marginBottom: 40, fontStyle: "italic" }}>Work History</h2>

              <div style={{ position: "relative" }} className="timeline-line">
                {experiences.map((exp, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    style={{ display: "flex", gap: 20, marginBottom: 20 }}
                  >
                    <div className="dot" />
                    <div className="card" style={{ padding: 20, flex: 1 }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                        <span className="mono" style={{ fontSize: 10, color: "var(--gold)", letterSpacing: "0.08em" }}>{exp.period}</span>
                        <span style={{
                          fontSize: 10, padding: "2px 8px", borderRadius: 4,
                          background: `${typeColors[exp.type]}18`,
                          color: typeColors[exp.type],
                          fontWeight: 600, fontFamily: "DM Mono",
                        }}>{exp.type}</span>
                      </div>
                      <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{exp.title}</div>
                      {exp.link ? (
                        <a href={exp.link} target="_blank" rel="noopener noreferrer"
                          style={{ fontSize: 13, color: "var(--muted2)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}
                          onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                          onMouseLeave={e => e.currentTarget.style.color = "var(--muted2)"}
                        >
                          {exp.company} <ExternalLink style={{ width: 10, height: 10 }} />
                        </a>
                      ) : (
                        <div style={{ fontSize: 13, color: "var(--muted2)" }}>{exp.company}</div>
                      )}
                      <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginTop: 6 }}>{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="divider" />

        {/* ── CONTACT ──────────────────────────────────────── */}
        <section id="contact" style={{ paddingBottom: 100 }}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div className="section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
            <h2 className="serif" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontStyle: "italic", marginBottom: 12 }}>
              Let's <span className="gold-text">Connect</span>
            </h2>
            <p style={{ color: "var(--muted2)", fontSize: 16 }}>Have a project in mind? I'd love to hear from you.</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48 }}>
            {/* Left info */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { icon: AtSign, label: "Email", value: "iyedkhouildi12@gmail.com" },
                { icon: Phone, label: "Phone", value: "+216 93 117 612" },
                { icon: MapPin, label: "Location", value: "Bizerte, Tunisia" },
              ].map((item, i) => (
                <div key={i} className="card" style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: 10,
                    background: "var(--gold-dim)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <item.icon style={{ width: 18, height: 18, color: "var(--gold)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 2, fontFamily: "DM Mono", letterSpacing: "0.08em" }}>{item.label}</div>
                    <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
                  </div>
                </div>
              ))}

              {/* Social */}
              <div style={{ marginTop: 8, display: "flex", gap: 10 }}>
                {[
                  { icon: Github, label: "GitHub" },
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Twitter, label: "Twitter" },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{ y: -3 }}
                    style={{
                      flex: 1, padding: "12px 8px",
                      background: "var(--bg2)", border: "1px solid var(--border)",
                      borderRadius: 10, display: "flex", flexDirection: "column",
                      alignItems: "center", gap: 6, textDecoration: "none",
                      color: "var(--muted)", transition: "all 0.2s",
                    }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,163,89,0.3)"; e.currentTarget.style.color = "var(--gold)"; }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
                  >
                    <s.icon style={{ width: 18, height: 18 }} />
                    <span style={{ fontSize: 11, fontWeight: 600 }}>{s.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Form */}
            <div className="card" style={{ padding: 36 }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label>Name</label>
                    <input type="text" placeholder="John Doe" />
                  </div>
                  <div>
                    <label>Email</label>
                    <input type="email" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label>Subject</label>
                  <input type="text" placeholder="Project inquiry" />
                </div>
                <div>
                  <label>Message</label>
                  <textarea placeholder="Tell me about your project..." rows={5} />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                  className="btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "16px 28px", fontSize: 15 }}
                >
                  Send Message <ArrowRight style={{ width: 16, height: 16 }} />
                </motion.button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer style={{
        borderTop: "1px solid var(--border)",
        background: "var(--bg2)",
        padding: "40px 24px",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          flexWrap: "wrap", gap: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{
              width: 30, height: 30, borderRadius: 6,
              background: "var(--gold-dim)", border: "1px solid rgba(212,163,89,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Terminal style={{ width: 13, height: 13, color: "var(--gold)" }} />
            </div>
            <span className="serif" style={{ fontSize: 18 }}>Iyed</span>
          </div>
          <p style={{ fontSize: 13, color: "var(--muted)" }}>
            © 2024 Iyed Khouildi — Built with passion and clean code.
          </p>
          <div style={{ display: "flex", gap: 24 }}>
            {[
              { icon: Github, label: "GitHub" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Twitter, label: "Twitter" },
            ].map((s, i) => (
              <a key={i} href="#"
                style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--muted)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <s.icon style={{ width: 15, height: 15 }} /> {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}