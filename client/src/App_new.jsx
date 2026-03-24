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