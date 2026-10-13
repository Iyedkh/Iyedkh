import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp, Clock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import Magnetic from "./Magnetic";

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
    <footer className="relative border-t border-[#262522]/15 bg-[#E9E0D2]/50 text-[#786F63] washi-grain overflow-hidden">
      {/* Background Subtle Sakura Blossom Silhouette in Footer */}
      <svg
        width="260"
        height="260"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-16 -right-16 opacity-[0.06] pointer-events-none select-none text-[#262522]"
      >
        <circle cx="50" cy="50" r="42" stroke="currentColor" strokeWidth="2" />
        <circle cx="50" cy="20" r="16" fill="currentColor" />
        <circle cx="78" cy="40" r="16" fill="currentColor" />
        <circle cx="68" cy="75" r="16" fill="currentColor" />
        <circle cx="32" cy="75" r="16" fill="currentColor" />
        <circle cx="22" cy="40" r="16" fill="currentColor" />
      </svg>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start pb-16 border-b border-[#262522]/10">
          {/* Brand Identity & Vision */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="hanko-stamp">匠</span>
              <div className="flex flex-col">
                <span className="font-editorial text-xl font-medium tracking-[0.08em] text-[#262522]">
                  IYED KHOUILDI
                </span>
                <span className="font-mono text-[9.5px] uppercase tracking-widest text-[#786F63]">
                  {t.nav?.role || "Full Stack & BI Architect"}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#786F63] leading-relaxed max-w-sm font-sans">
              {t.footer?.bio ||
                "Crafting calm, resilient software systems and business intelligence architectures inspired by Scandinavian simplicity, Kyoto sakura aesthetics, and Japanese samurai precision."}
            </p>

            {/* Local Tunis Time */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F5F0E7] border border-[#262522]/10 text-xs font-mono text-[#786F63]">
              <Clock className="w-3.5 h-3.5 text-[#E8A1B0]" />
              <span>{t.footer?.locationLabel || "Tunis (UTC+1):"}</span>
              <span className="text-[#262522] font-semibold" dir="ltr">{localTime || "12:00:00"}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#262522]">
              {t.footer?.navigation || "Index Navigation"}
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs font-mono">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-1 text-[#786F63] hover:text-[#262522] transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials & Back To Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-6">
            <div className="space-y-3 w-full md:w-auto">
              <div className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-[#262522] md:text-right">
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
                    className="p-2.5 rounded-full bg-[#F5F0E7] hover:bg-[#E8A1B0]/20 border border-[#262522]/10 text-[#786F63] hover:text-[#262522] transition-colors"
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
                <ArrowUp className="w-3.5 h-3.5 text-[#E8A1B0]" />
                <span>{t.footer?.backToTop || "Top [Scroll]"}</span>
              </button>
            </Magnetic>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9E9486]">
          <p>© {currentYear} Iyed Khouildi. {t.footer?.copyright || "All rights reserved."}</p>
          <p className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#E8A1B0]" />
            <span>{t.footer?.builtWith || "Designed with Japanese Japandi Aesthetics • React & Vite"}</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;