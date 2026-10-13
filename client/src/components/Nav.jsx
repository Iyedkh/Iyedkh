import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, Copy, Check } from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import Magnetic from "./Magnetic";

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
    { name: t.nav?.home || "Home", href: "#home" },
    { name: t.nav?.about || "About", href: "#about" },
    { name: t.nav?.projects || "Work", href: "#work" },
    { name: t.nav?.skills || "Skills", href: "#skills" },
    { name: t.nav?.experience || "Experience", href: "#experience" },
    { name: t.nav?.approach || "Approach", href: "#approach" },
    { name: t.nav?.contact || "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const sections = ["home", "about", "work", "skills", "experience", "approach", "contact"];
    const observerOptions = {
      root: null,
      rootMargin: "-25% 0px -55% 0px",
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
          ? "py-3 sm:py-3.5 bg-[#F5F0E7]/90 backdrop-blur-xl border-b border-[#262522]/10 shadow-[0_8px_30px_-12px_rgba(38,37,34,0.06)]"
          : "py-5 sm:py-6 lg:py-7 bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* ========================================= */}
        {/* BRAND IDENTITY (Monogram & Subtitle)      */}
        {/* ========================================= */}
        <Magnetic strength={0.2}>
          <a
            href="#home"
            className="flex items-center gap-3.5 group focus:outline-none rounded-xl p-1"
          >
            {/* Red Hanko Artisan Stamp */}
            <div className="relative w-9 h-9 rounded-xl border border-[#C24545]/30 flex items-center justify-center bg-[#C24545]/5 transition-all duration-300 group-hover:border-[#C24545] group-hover:bg-[#C24545]/10 group-hover:scale-105 shadow-sm">
              <span className="font-editorial text-base font-bold text-[#C24545] leading-none">
                匠
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl font-medium tracking-[0.06em] text-[#262522] flex items-center gap-2">
                IYED KHOUILDI
                <span
                  className="inline-block w-2 h-2 rounded-full bg-[#E8A1B0] animate-pulse"
                  title="Available for select projects"
                />
              </span>
              <span className="font-mono text-[9.5px] text-[#786F63] tracking-[0.16em] uppercase">
                Full Stack &amp; Data Architect
              </span>
            </div>
          </a>
        </Magnetic>

        {/* ========================================= */}
        {/* DESKTOP FLOATING PILL NAVIGATION          */}
        {/* ========================================= */}
        <nav
          aria-label="Main Navigation"
          className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E9E0D2]/75 border border-[#262522]/10 backdrop-blur-md shadow-[0_4px_20px_-8px_rgba(38,37,34,0.08)]"
        >
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2 text-xs font-mono tracking-wider transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E8A1B0] ${
                  isActive
                    ? "text-[#262522] font-semibold"
                    : "text-[#786F63] hover:text-[#262522]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicatorSakura"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#F5F0E7] border border-[#262522]/15 shadow-sm rounded-full -z-0"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {link.name}
                  {isActive && (
                    <span className="w-1 h-1 rounded-full bg-[#E8A1B0]" />
                  )}
                </span>
              </a>
            );
          })}
        </nav>

        {/* ========================================= */}
        {/* RIGHT ACTION GROUP (Lang, Email, CTA)     */}
        {/* ========================================= */}
        <div className="hidden md:flex items-center gap-3.5">
          <LanguageSwitcher />

          {/* Quick Copy Email with Tooltip Visual */}
          <button
            onClick={handleCopyEmail}
            className="p-2.5 rounded-full text-[#786F63] hover:text-[#262522] bg-[#E9E0D2]/60 hover:bg-[#E9E0D2] border border-[#262522]/10 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#E8A1B0]"
            title="Copy email address"
            aria-label="Copy email"
          >
            {copiedEmail ? (
              <Check className="w-4 h-4 text-[#E8A1B0]" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
          </button>

          {/* Magnetic Let's Talk CTA */}
          <Magnetic strength={0.25}>
            <a
              href="#contact"
              className="btn-japandi-primary text-xs py-2.5 px-6 rounded-full shadow-sm hover:shadow-[0_8px_20px_-6px_rgba(232,161,176,0.4)]"
            >
              <span>{t.nav?.letsTalk || "Let's Talk"}</span>
              <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
            </a>
          </Magnetic>
        </div>

        {/* ========================================= */}
        {/* MOBILE MENU CONTROLS                      */}
        {/* ========================================= */}
        <div className="flex items-center gap-2.5 lg:hidden">
          <LanguageSwitcher />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
            className="p-2.5 rounded-full text-[#262522] bg-[#E9E0D2] border border-[#262522]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A1B0]"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ========================================= */}
      {/* SHOJI-INSPIRED MOBILE DRAWER             */}
      {/* ========================================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden bg-[#F5F0E7]/98 backdrop-blur-2xl border-b border-[#262522]/10 px-6 py-6 shadow-2xl shoji-grid"
          >
            <div className="flex flex-col gap-2 max-w-md mx-auto">
              {navLinks.map((link, i) => {
                const sectionId = link.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.035 }}
                    className={`px-4 py-3 rounded-xl font-mono text-xs tracking-wider transition-all flex items-center justify-between ${
                      isActive
                        ? "bg-[#E8A1B0]/20 text-[#262522] border border-[#E8A1B0]/60 font-semibold"
                        : "text-[#786F63] hover:bg-[#E9E0D2] hover:text-[#262522]"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#E8A1B0]" />}
                  </motion.a>
                );
              })}

              <div className="pt-4 mt-3 border-t border-[#262522]/10 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="btn-japandi-primary w-full justify-center text-xs py-3 rounded-full"
                >
                  <span>{t.nav?.letsTalk || "Let's Talk"}</span>
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
