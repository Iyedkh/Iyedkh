import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const SECTIONS = [
  { id: "home", kanji: "始" },
  { id: "about", kanji: "道" },
  { id: "work", kanji: "作" },
  { id: "skills", kanji: "技" },
  { id: "experience", kanji: "歴" },
  { id: "approach", kanji: "方" },
  { id: "contact", kanji: "縁" },
];

const SOCIALS = [
  { label: "GitHub", url: "https://github.com/Iyedkh", icon: Github },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/iyed-khouildi-453787326/", icon: Linkedin },
  { label: "Email", url: "mailto:iyedkhouildi12@gmail.com", icon: Mail },
];

/**
 * SideRails: fixed editorial furniture on wide screens.
 * - Left: kanji section index with live scroll-spy.
 * - Right: vertical socials + signature line.
 * - Bottom-right: ensō brush-circle scroll progress that doubles as back-to-top.
 */
const SideRails = () => {
  const { t } = useLanguage();
  const [active, setActive] = useState("home");
  const [showTop, setShowTop] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });
  const dash = useTransform(progress, [0, 1], [0, 1]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 0.8);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const labels = {
    home: t.nav?.home || "Home",
    about: t.nav?.about || "About",
    work: t.nav?.projects || "Work",
    skills: t.nav?.skills || "Skills",
    experience: t.nav?.experience || "Experience",
    approach: t.nav?.approach || "Approach",
    contact: t.nav?.contact || "Contact",
  };

  return (
    <>
      {/* LEFT: section index */}
      <nav
        aria-label="Section index"
        className="fixed left-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-1"
      >
        <span className="mb-3 h-12 w-px bg-gradient-to-b from-transparent to-[#22211E]/25" />
        {SECTIONS.map(({ id, kanji }, i) => {
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={labels[id]}
              aria-current={isActive ? "true" : undefined}
              className="group relative flex h-8 w-8 items-center justify-center"
            >
              <span
                className={`font-kanji text-[13px] transition-all duration-500 ${
                  isActive ? "text-[#B8403A] scale-110" : "text-[#22211E]/25 group-hover:text-[#22211E]/70"
                }`}
              >
                {kanji}
              </span>
              {isActive && (
                <motion.span
                  layoutId="railActiveRing"
                  className="absolute inset-0 rounded-full border border-[#B8403A]/40"
                  transition={{ type: "spring", stiffness: 300, damping: 28 }}
                />
              )}
              <span className="pointer-events-none absolute left-11 whitespace-nowrap rounded-full border border-[#22211E]/10 bg-[#F6F2EB]/95 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-[#22211E] opacity-0 -translate-x-2 shadow-sm backdrop-blur transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                0{i + 1} · {labels[id]}
              </span>
            </a>
          );
        })}
        <span className="mt-3 h-12 w-px bg-gradient-to-t from-transparent to-[#22211E]/25" />
      </nav>

      {/* RIGHT: socials + vertical signature */}
      <div className="fixed right-6 bottom-36 z-40 hidden xl:flex flex-col items-center gap-4">
        {SOCIALS.map(({ label, url, icon: Icon }) => (
          <a
            key={label}
            href={url}
            target={url.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#726A5F] transition-all duration-300 hover:-translate-y-0.5 hover:text-[#B8403A]"
          >
            <Icon className="h-4 w-4" />
          </a>
        ))}
        <span className="h-10 w-px bg-[#22211E]/20" />
        <span className="font-mono text-[9.5px] uppercase tracking-[0.3em] text-[#726A5F] [writing-mode:vertical-rl]">
          Bizerte · Tunisia — {new Date().getFullYear()}
        </span>
      </div>

      {/* BOTTOM-RIGHT: ensō scroll progress / back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label={t.footer?.backToTop || "Back to top"}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="group fixed bottom-6 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#F6F2EB]/90 shadow-[0_10px_30px_-10px_rgba(34,33,30,0.25)] backdrop-blur-md"
          >
            <svg viewBox="0 0 56 56" className="absolute inset-0 h-full w-full -rotate-90">
              <circle cx="28" cy="28" r="25" fill="none" stroke="rgba(34,33,30,0.08)" strokeWidth="2" />
              <motion.circle
                cx="28"
                cy="28"
                r="25"
                fill="none"
                stroke="#22211E"
                strokeWidth="2.5"
                strokeLinecap="round"
                style={{ pathLength: dash }}
              />
            </svg>
            <ArrowUp className="relative h-4 w-4 text-[#22211E] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-[#B8403A]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default SideRails;
