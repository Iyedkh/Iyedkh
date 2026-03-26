import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";

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
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      transition: "all 0.3s cubic-bezier(0.4,0,0.2,1)",
      background: scrolled ? "rgba(15,15,26,0.75)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(59,130,246,0.1)" : "1px solid transparent",
      padding: scrolled ? "12px 0" : "20px 0",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}>
        {/* Logo */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            textDecoration: "none",
          }}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 5 }}
            style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(135deg, #d4a574, #8b4789)",
              border: "1px solid rgba(212,165,116,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Code2 style={{ width: 20, height: 20, color: "white" }} />
          </motion.div>
          <span style={{
            fontWeight: 800,
            fontSize: "clamp(18px, 3vw, 24px)",
            color: "var(--text)",
            letterSpacing: "-0.02em",
          }}>
            Iyed
          </span>
        </motion.a>

        {/* Desktop Nav */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: 32,
        }} className="hidden-mobile">
          {navLinks.map((l, i) => (
            <motion.a
              key={i}
              href={l.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.06 }}
              style={{
                color: "var(--muted2)",
                fontSize: "clamp(13px, 1.5vw, 14px)",
                fontWeight: 500,
                textDecoration: "none",
                transition: "all 0.2s",
                position: "relative",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "var(--primary-light)";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "var(--muted2)";
              }}
            >
              {l.name}
            </motion.a>
          ))}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            style={{ width: 1, height: 24, background: "var(--border)" }}
          />

          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.45 }}
            className="btn-primary"
            style={{
              textDecoration: "none",
              fontSize: 14,
              padding: "8px 18px",
            }}
          >
            Let's Talk
          </motion.a>
        </div>

        {/* Mobile toggle */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "var(--text)",
            padding: 8,
          }}
          className="mobile-only"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <style>{`
        @media (min-width: 768px) { .mobile-only { display: none !important; } }
        @media (max-width: 767px) { .hidden-mobile { display: none !important; } }
      `}</style>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: "linear-gradient(180deg, var(--bg2) 0%, rgba(15,15,26,0.9) 100%)",
              borderTop: "1px solid var(--border)",
              overflow: "hidden",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{
              padding: "24px",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}>
              {navLinks.map((l, i) => (
                <motion.a
                  key={i}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  style={{
                    color: "var(--muted2)",
                    fontSize: 16,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--primary-light)"}
                  onMouseLeave={e => e.currentTarget.style.color = "var(--muted2)"}
                >
                  {l.name}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary"
                whileHover={{ scale: 1.02 }}
                style={{
                  textDecoration: "none",
                  justifyContent: "center",
                  marginTop: 8,
                }}
              >
                Let's Talk
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;