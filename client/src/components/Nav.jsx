import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Menu, X } from "lucide-react";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  return (
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
  );
};

export default Nav;