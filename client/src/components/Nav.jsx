import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Mail, Check, ArrowUpRight, Copy } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

const Nav = () => {
  const { t, isRTL } = useLanguage();
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
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "experience", "contact"];
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
    toast.success(t.nav.emailCopied, {
      description: email,
      duration: 3000,
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[var(--bg-primary)]/90 backdrop-blur-2xl border-b border-[var(--border)] shadow-xl"
          : "py-5 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand Monogram */}
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: isRTL ? 16 : -16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] rounded-xl p-1"
        >
          <div className="relative w-9 h-9 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center overflow-hidden transition-transform duration-300 group-hover:scale-105 group-hover:border-[var(--accent-primary)] shrink-0">
            <span className="font-serif font-bold text-lg text-[var(--text-primary)] group-hover:text-[var(--accent-primary-hover)] transition-colors">
              I
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm tracking-tight text-[var(--text-primary)] flex items-center gap-1.5">
              Iyed Khouildi
              {/* Sage status indicator dot */}
              <span className="inline-block w-2 h-2 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_8px_rgba(107,143,113,0.6)]" title={t.nav.available} />
            </span>
            <span className="font-mono text-[10px] text-[var(--text-secondary)] tracking-wider uppercase">
              {t.nav.role}
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation Floating Pill Bar */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] backdrop-blur-xl"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 text-[13px] font-medium transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)] ${
                  isActive ? "text-[var(--text-primary)] font-semibold" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[var(--accent-primary-dim)] border border-[var(--accent-primary)] rounded-full"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Right CTA Group */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language Switcher */}
          <LanguageSwitcher />

          {/* Quick Copy Email Button */}
          <button
            onClick={handleCopyEmail}
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
            title={t.nav.emailCopied}
            aria-label="Copy email address"
          >
            {copiedEmail ? (
              <Check className="w-4 h-4 text-[var(--accent-secondary)]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          {/* Let's Talk CTA */}
          <a
            href="#contact"
            className="btn-apple-primary text-xs py-2 px-4 rounded-xl"
          >
            <span>{t.nav.letsTalk}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="p-2 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] border border-[var(--border)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[var(--bg-surface)] border-b border-[var(--border)] px-6 py-6 shadow-2xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link, i) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: isRTL ? 12 : -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[var(--accent-primary-dim)] text-[var(--text-primary)] border border-[var(--accent-primary)]"
                        : "text-[var(--text-secondary)] hover:bg-[var(--bg-surface-elevated)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    {link.name}
                  </motion.a>
                );
              })}

              <div className="pt-4 mt-2 border-t border-[var(--border)] flex flex-col gap-3">
                <button
                  onClick={handleCopyEmail}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono text-[var(--text-secondary)] bg-[var(--bg-surface-elevated)] border border-[var(--border)] hover:border-[var(--accent-primary)] transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                  <span className="text-[var(--text-primary)]">{email}</span>
                  {copiedEmail && <span className="text-[var(--accent-secondary)] font-sans text-[10px] ml-1">({t.nav.emailCopied})</span>}
                </button>

                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-apple-primary w-full justify-center text-xs py-3 rounded-xl"
                >
                  <span>{t.nav.letsTalk}</span>
                  <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
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

