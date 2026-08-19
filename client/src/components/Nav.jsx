import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Menu, X, Mail, Check, ArrowUpRight, Copy } from "lucide-react";
import { toast } from "sonner";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [copiedEmail, setCopiedEmail] = useState(false);

  const email = "iyedkhouildi12@gmail.com";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.substring(1));
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard", {
      description: email,
      duration: 3000,
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#09090b]/80 backdrop-blur-2xl border-b border-white/[0.08] shadow-2xl shadow-black/40"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574] rounded-xl p-1"
        >
          <div className="relative w-9 h-9 rounded-xl bg-gradient-to-b from-white/15 to-white/5 border border-white/10 flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-[#d4a574]/40 shadow-inner">
            <span className="font-serif font-bold text-lg text-white group-hover:text-[#ebd0ad] transition-colors">
              I
            </span>
            <div className="absolute inset-0 bg-gradient-to-tr from-[#d4a574]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-white flex items-center gap-1.5">
              Iyed Khouildi
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" title="Available for work" />
            </span>
            <span className="font-mono text-[10px] text-zinc-400 tracking-wider uppercase">
              Full-Stack & BI
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Floating Pill Bar */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#111116]/80 border border-white/[0.08] backdrop-blur-xl shadow-lg shadow-black/30"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574] ${
                  isActive ? "text-white font-semibold" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-gradient-to-b from-white/15 to-white/5 border border-white/10 rounded-full shadow-inner"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Group */}
        <div className="hidden md:flex items-center gap-3">
          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="p-2 rounded-xl text-zinc-400 hover:text-[#ebd0ad] bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.08] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574]"
            title="Copy email to clipboard"
            aria-label="Copy email address"
          >
            {copiedEmail ? (
              <Check className="w-4 h-4 text-emerald-400" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="btn-apple-primary text-xs py-2 px-4 rounded-xl"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
          className="md:hidden p-2 rounded-xl text-zinc-300 hover:text-white bg-white/[0.04] border border-white/[0.08] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574]"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#0e0e12]/95 backdrop-blur-2xl border-b border-white/[0.08] px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#d4a574]/15 text-[#ebd0ad] border border-[#d4a574]/30"
                        : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-white/[0.08] flex flex-col gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono text-zinc-300 bg-white/[0.03] border border-white/[0.08] hover:border-[#d4a574]/40 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#d4a574]" />
                  <span>{email}</span>
                  {copiedEmail && <span className="text-emerald-400 font-sans text-[10px] ml-1">(Copied!)</span>}
                </button>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-apple-primary w-full justify-center text-xs py-3 rounded-xl"
                >
                  <span>Let's Talk</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;