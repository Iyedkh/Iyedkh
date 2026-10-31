import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp, Clock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Magnetic from "./Magnetic";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useLanguage();
  const [localTime, setLocalTime] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "Africa/Tunis",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      };
      setLocalTime(new Intl.DateTimeFormat("en-US", options).format(new Date()));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: t.nav?.home || "Home", href: "#home" },
    { name: t.nav?.about || "About", href: "#about" },
    { name: t.nav?.projects || "Work", href: "#work" },
    { name: t.nav?.skills || "Skills", href: "#skills" },
    { name: t.nav?.experience || "Experience", href: "#experience" },
    { name: t.nav?.approach || "Approach", href: "#approach" },
    { name: t.nav?.contact || "Contact", href: "#contact" },
  ];

  const socials = [
    { label: "GitHub", url: "https://github.com/Iyedkh", icon: Github },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/iyed-khouildi-453787326/", icon: Linkedin },
    { label: "Email", url: "mailto:iyedkhouildi12@gmail.com", icon: Mail },
  ];

  return (
    <footer className="relative border-t border-[#22211E]/12 bg-[#EBE3D5]/40 text-[#726A5F] washi-grain overflow-hidden">
      {/* Background Subtle Sakura Blossom Silhouette in Footer */}
      <svg
        width="260"
        height="260"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-16 -right-16 opacity-[0.05] pointer-events-none select-none text-[#22211E]"
      >
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="20" r="16" fill="currentColor" />
        <circle cx="78" cy="40" r="16" fill="currentColor" />
        <circle cx="68" cy="75" r="16" fill="currentColor" />
        <circle cx="32" cy="75" r="16" fill="currentColor" />
        <circle cx="22" cy="40" r="16" fill="currentColor" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        {/* Big closing CTA */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pb-16 border-b border-[#22211E]/10">
          <h2 className="font-editorial text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-[-0.03em] text-[#22211E]">
            Let&apos;s make
            <br />
            <span className="italic text-[#D48D9B]">something calm.</span>
          </h2>
          <Magnetic strength={0.35}>
            <a
              href="#contact"
              className="group relative flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full bg-[#22211E] text-[#F6F2EB] overflow-hidden shrink-0"
            >
              <span className="absolute inset-0 rounded-full bg-[#B8403A] scale-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100" />
              <span className="relative flex flex-col items-center gap-1">
                <span className="font-kanji text-2xl">縁</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em]">{t.nav?.letsTalk || "Let's Talk"}</span>
              </span>
            </a>
          </Magnetic>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16 border-b border-[#22211E]/10">
          {/* Brand Identity & Vision */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="hanko-stamp">匠</span>
              <div className="flex flex-col">
                <span className="font-editorial text-xl font-medium tracking-[0.08em] text-[#22211E]">
                  IYED KHOUILDI
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#726A5F]">
                  {t.nav?.role || "Full Stack & BI Architect"}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#726A5F] leading-relaxed max-w-sm font-sans">
              {t.footer?.bio ||
                "Crafting calm, resilient software systems and business intelligence architectures inspired by Scandinavian simplicity, Kyoto sakura aesthetics, and Japanese samurai precision."}
            </p>

            {/* Local Tunis Time */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F6F2EB] border border-[#22211E]/10 text-xs font-mono text-[#726A5F]">
              <Clock className="w-3.5 h-3.5 text-[#D48D9B]" />
              <span>{t.footer?.locationLabel || "Tunis (UTC+1):"}</span>
              <span className="text-[#22211E] font-semibold" dir="ltr">{localTime || "12:00:00"}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#22211E]">
              {t.footer?.navigation || "Index Navigation"}
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-1 text-[#726A5F] hover:text-[#22211E] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back To Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-6">
            <div className="space-y-3 w-full md:w-auto">
              <div className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#22211E] md:text-right">
                {t.footer?.connect || "Connect"}
              </div>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-full bg-[#F6F2EB] hover:bg-[#D48D9B]/15 border border-[#22211E]/10 text-[#726A5F] hover:text-[#22211E] transition-colors"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <Magnetic strength={0.3}>
              <button
                onClick={scrollToTop}
                className="btn-japandi-secondary text-xs py-2 px-4 rounded-full flex items-center gap-2"
                title="Back to Top"
              >
                <ArrowUp className="w-3.5 h-3.5 text-[#D48D9B]" />
                <span>{t.footer?.backToTop || "Top [Scroll]"}</span>
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Monumental outlined signature */}
        <motion.div
          aria-hidden="true"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="pt-10 select-none text-center font-editorial text-[18vw] lg:text-[13rem] leading-[0.85] tracking-[-0.04em] text-outline"
        >
          Khouildi
        </motion.div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9C9385]">
          <p>© {currentYear} Iyed Khouildi. {t.footer?.copyright || "All rights reserved."}</p>
          <p className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#D48D9B]" />
            <span>{t.footer?.builtWith || "Designed with Japanese Japandi Aesthetics • React & Vite"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;