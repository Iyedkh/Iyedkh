import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * ThemeToggle: day (washi) ↔ night (sumi) switch. The icon rises and sets like the sun and moon.
 */
const ThemeToggle = ({ className = "" }) => {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  const isDark = theme === "dark";
  const label = isDark ? t.ui?.toDay || "Switch to day mode" : t.ui?.toNight || "Switch to night mode";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={`relative overflow-hidden p-2.5 rounded-full text-ink-soft hover:text-ink bg-paper-2/60 hover:bg-paper-2 border border-ink/10 hover:border-sakura/50 transition-all duration-300 hover:-translate-y-px focus:outline-none focus-visible:ring-1 focus-visible:ring-sakura ${className}`}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ y: 14, opacity: 0, rotate: -40 }}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: -14, opacity: 0, rotate: 40 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="block"
        >
          {isDark ? <Moon className="w-4 h-4 text-gold" /> : <Sun className="w-4 h-4" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

export default ThemeToggle;
