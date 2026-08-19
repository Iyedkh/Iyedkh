import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ArrowUp, Clock } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Footer = () => {
  const { t, isRTL } = useLanguage();
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
    { name: t.nav.home, href: "#home" },
    { name: t.nav.about, href: "#about" },
    { name: t.nav.skills, href: "#skills" },
    { name: t.nav.projects, href: "#projects" },
    { name: t.nav.experience, href: "#experience" },
    { name: t.nav.contact, href: "#contact" },
  ];

  const socials = [
    { icon: Github, label: "GitHub", url: "https://github.com/Iyedkh" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/iyed-khouildi-453787326/" },
    { icon: Mail, label: "Email", url: "mailto:iyedkhouildi12@gmail.com" },
  ];

  return (
    <footer className="relative mt-24 border-t border-[var(--border)] bg-[var(--bg-primary)] text-[var(--text-secondary)]">
      {/* Background ambient hairline */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[var(--border-strong)] to-transparent"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--border)] items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[var(--bg-surface)] border border-[var(--border)] flex items-center justify-center shadow-inner">
                <span className="font-serif font-bold text-xl text-[var(--text-primary)]">I</span>
              </div>
              <div>
                <span className="font-bold text-base text-[var(--text-primary)] tracking-tight block">
                  Iyed Khouildi
                </span>
                <span className="font-mono text-xs text-[var(--text-secondary)] uppercase tracking-wider">
                  {t.nav.role}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm font-normal">
              {t.footer.bio}
            </p>

            {/* Local Time Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs font-mono text-[var(--text-secondary)]">
              <Clock className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>{t.footer.locationLabel}</span>
              <span className="text-[var(--text-primary)] font-semibold" dir="ltr">{localTime || "..."}</span>
              <span className="text-[10px] text-[var(--text-secondary)]">(UTC+1)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-primary)]">
              {t.footer.navigation}
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-1 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[var(--accent-primary)]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back-To-Top */}
          <div className={`md:col-span-3 flex flex-col ${isRTL ? "items-start md:items-start" : "items-start md:items-end"} justify-between space-y-6`}>
            <div className="space-y-3 w-full md:w-auto">
              <div className={`text-xs font-mono font-bold uppercase tracking-widest text-[var(--text-primary)] ${isRTL ? "md:text-left" : "md:text-right"}`}>
                {t.footer.connect}
              </div>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-xl bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border)] hover:border-[var(--accent-primary)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-all duration-200"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-apple-secondary text-xs py-2 px-3.5 rounded-xl self-start md:self-auto"
              title={t.footer.backToTop}
            >
              <ArrowUp className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>{t.footer.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[var(--text-secondary)]">
          <p>© {currentYear} Iyed Khouildi. {t.footer.copyright}</p>
          <p className="flex items-center gap-1">
            {t.footer.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;