import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUp, Clock, Heart } from "lucide-react";

const Footer = () => {
  const [localTime, setLocalTime] = useState("");
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const updateTime = () => {
      // Tunisia is UTC+1 (Africa/Tunis timezone)
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
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  const socials = [
    { icon: Github, label: "GitHub", url: "https://github.com/Iyedkh" },
    { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/iyed-khouildi-453787326/" },
    { icon: Mail, label: "Email", url: "mailto:iyedkhouildi12@gmail.com" },
  ];

  return (
    <footer className="relative mt-24 border-t border-white/[0.08] bg-[#09090b] text-zinc-400">
      {/* Background ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-[#d4a574]/30 to-transparent"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/[0.06] items-start">
          {/* Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-b from-white/15 to-white/5 border border-white/10 flex items-center justify-center shadow-inner">
                <span className="font-serif font-bold text-xl text-white">I</span>
              </div>
              <div>
                <span className="font-bold text-base text-white tracking-tight block">
                  Iyed Khouildi
                </span>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-wider">
                  Full-Stack Developer & Data Analyst
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm font-normal">
              Designing and developing performant digital software with the MERN stack and transforming enterprise datasets into clear analytical insight.
            </p>

            {/* Local Time Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] text-xs font-mono text-zinc-300">
              <Clock className="w-3.5 h-3.5 text-[#d4a574]" />
              <span>Bizerte, Tunisia:</span>
              <span className="text-white font-semibold">{localTime || "Loading..."}</span>
              <span className="text-[10px] text-zinc-500">(UTC+1)</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">
              Navigation
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="py-1 text-zinc-400 hover:text-white transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a574]"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Social Links & Back-To-Top */}
          <div className="md:col-span-3 flex flex-col items-start md:items-end justify-between space-y-6">
            <div className="space-y-3 w-full md:w-auto">
              <div className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 md:text-right">
                Connect
              </div>
              <div className="flex items-center gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] hover:border-[#d4a574]/40 text-zinc-400 hover:text-[#ebd0ad] transition-all duration-200"
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="btn-apple-secondary text-xs py-2 px-3.5 rounded-xl self-start md:self-auto"
              title="Scroll to top of page"
            >
              <ArrowUp className="w-3.5 h-3.5 text-[#d4a574]" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <p>© {currentYear} Iyed Khouildi. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, Tailwind & Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;