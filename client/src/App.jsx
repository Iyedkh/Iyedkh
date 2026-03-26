import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --bg: #0a0a0a;
          --bg2: #141414;
          --bg3: #1f1f1f;
          --border: rgba(212,165,116,0.08);
          --border2: rgba(212,165,116,0.12);
          --primary: #d4a574;
          --primary-dark: #a67d4a;
          --primary-light: #e5c89d;
          --accent: #8b4789;
          --accent-light: #a78bba;
          --accent-dim: rgba(139,71,137,0.12);
          --success: #a8b0ba;
          --cyan: #c9d4e0;
          --text: #faf9f6;
          --text-secondary: #f5f5f0;
          --muted: #a8a8ba;
          --muted2: #bfbfcf;
        }

        html { scroll-behavior: smooth; }

        body {
          background: var(--bg);
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          overflow-x: hidden;
        }

        ::selection { background: rgba(59,130,246,0.35); color: #fff; }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--bg); }
        ::-webkit-scrollbar-thumb { background: var(--primary); border-radius: 4px; }
        ::-webkit-scrollbar-thumb:hover { background: var(--primary-light); }

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
          background: linear-gradient(135deg, #d4a574 0%, #e5c89d 50%, #c9d4e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .card {
          background: var(--bg2);
          border: 1px solid var(--border);
          border-radius: 12px;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .card:hover {
          border-color: rgba(212,165,116,0.3);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(212,165,116,0.1), 0 0 1px rgba(212,165,116,0.2);
        }

        .tag {
          font-family: 'DM Mono', monospace;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.04em;
          padding: 6px 12px;
          border-radius: 6px;
          background: rgba(212,165,116,0.1);
          color: var(--primary-light);
          border: 1px solid rgba(212,165,116,0.25);
          transition: all 0.2s;
        }
        .tag:hover {
          background: rgba(212,165,116,0.15);
          border-color: rgba(212,165,116,0.4);
        }

        .btn-primary {
          background: linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%);
          color: #fff;
          font-weight: 700;
          font-size: 15px;
          letter-spacing: 0.03em;
          padding: 12px 28px;
          border-radius: 8px;
          border: none;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 15px rgba(212,165,116,0.3);
        }
        .btn-primary:hover { 
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(212,165,116,0.4);
        }
        .btn-primary:active {
          transform: translateY(0);
        }

        .btn-secondary {
          background: transparent;
          color: var(--text);
          font-weight: 600;
          font-size: 15px;
          padding: 11px 28px;
          border-radius: 8px;
          border: 1.5px solid var(--border2);
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .btn-secondary:hover { 
          border-color: rgba(212,165,116,0.5);
          color: var(--primary-light);
          background: rgba(212,165,116,0.05);
        }

        .section-label {
          font-family: 'DM Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          background: linear-gradient(135deg, var(--primary) 0%, #c9d4e0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;
          font-weight: 700;
        }
        .section-label::before {
          content: '';
          display: block;
          width: 24px;
          height: 1.5px;
          background: linear-gradient(90deg, var(--primary), #c9d4e0);
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
          border: 1.5px solid var(--border);
          border-radius: 10px;
          padding: 14px 18px;
          color: var(--text);
          font-family: 'Outfit', sans-serif;
          font-size: 15px;
          outline: none;
          transition: all 0.3s;
        }
        input:focus, textarea:focus { 
          border-color: rgba(212,165,116,0.5);
          background: var(--bg3);
          box-shadow: 0 0 0 3px rgba(212,165,116,0.1);
        }
        input::placeholder, textarea::placeholder { color: var(--muted); }
        input::-webkit-autofill,
        input::-webkit-autofill:hover,
        input::-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 30px var(--bg3) inset !important;
          -webkit-text-fill-color: var(--text) !important;
        }

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
          width: 2px;
          background: linear-gradient(to bottom, rgba(212,165,116,0.5), transparent);
        }

        .dot {
          width: 12px; 
          height: 12px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--primary), var(--accent));
          border: 2px solid var(--bg);
          box-shadow: 0 0 0 4px rgba(212,165,116,0.15);
          flex-shrink: 0;
          margin-top: 2px;
        }

        .hidden-mobile { display: block; }
        .mobile-only { display: none; }

        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .mobile-only { display: block !important; }
          
          .hero-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .about-cards { grid-template-columns: 1fr !important; }
          .experience-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .contact-grid { grid-template-columns: 1fr !important; gap: 24px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 24px !important; text-align: center !important; }
          .section-label { justify-content: center; }
          .section-label::before { display: none; }
          .card { border-radius: 14px; }
          .btn-primary, .btn-secondary { width: 100% !important; justify-content: center !important; }
          nav { padding: 12px 0 !important; }
          main { padding: 0 16px !important; }
          
          /* Hero section adjustments */
          h1 { font-size: clamp(32px, 5vw, 42px) !important; }
          h2 { font-size: clamp(20px, 4vw, 28px) !important; }
          
          /* Skills grid mobile optimization */
          .skills-grid-mobile { grid-template-columns: repeat(auto-fill, minmax(100px, 1fr)) !important; }
          
          /* Projects grid tablet */
          .projects-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)) !important; gap: 20px !important; }
          
          /* Contact form mobile optimization */
          .contact-form-grid { grid-template-columns: 1fr !important; }
          input, textarea { font-size: 16px !important; }
          
          /* Footer adjustments */
          .footer-grid { grid-template-columns: 1fr !important; }
          .footer-grid > * { justify-content: center !important; }
        }

        @media (max-width: 480px) {
          main { padding: 0 12px !important; }
          .btn-primary { padding: 10px 20px !important; font-size: 14px !important; }
          .btn-secondary { padding: 10px 20px !important; font-size: 14px !important; }
          .divider { margin: 60px 0 !important; }
          h1 { font-size: clamp(28px, 4.5vw, 36px) !important; }
          h2 { font-size: clamp(18px, 3.5vw, 24px) !important; }
          .card { padding: 16px !important; }
          
          /* Projects grid ultra-mobile */
          .projects-grid { grid-template-columns: 1fr !important; }
          
          /* Smaller text on ultra-mobile */
          p { font-size: 14px !important; }
          label { font-size: 11px !important; }
          input, textarea { padding: 12px 14px !important; font-size: 16px !important; }
        }
      `}</style>

      {/* Progress Bar */}
      <motion.div
        style={{ width: progressWidth }}
        className="fixed top-0 left-0 h-1 bg-linear-to-r from-[#d4a574] via-[#8b4789] to-[#c9d4e0] z-50"
      />

      <CursorGlow />

      <Nav />

      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <Hero />

        <div className="divider" />

        <About />

        <div className="divider" />

        <Skills />

        <div className="divider" />

        <Projects />

        <div className="divider" />

        <Experience />

        <div className="divider" />

        <Contact />
      </main>

      <Footer />
    </>
  );
}