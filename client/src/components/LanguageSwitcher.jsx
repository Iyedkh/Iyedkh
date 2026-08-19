import React from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const LanguageSwitcher = ({ className = "" }) => {
  const { lang, setLang } = useLanguage();

  const languages = [
    { code: "en", label: "EN", title: "English" },
    { code: "fr", label: "FR", title: "Français" },
    { code: "ar", label: "عر", title: "العربية" },
  ];

  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-white/[0.04] border border-white/[0.08] backdrop-blur-xl ${className}`}
      role="group"
      aria-label="Language Selector"
    >
      <div className="px-1.5 text-zinc-500 hidden sm:flex items-center">
        <Globe className="w-3.5 h-3.5" />
      </div>

      {languages.map((l) => {
        const isActive = lang === l.code;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code)}
            title={l.title}
            aria-pressed={isActive}
            className={`relative px-2.5 py-1 text-[11px] font-mono font-semibold transition-colors duration-200 rounded-lg focus:outline-none focus-visible:ring-1 focus-visible:ring-[#d4a574] ${
              isActive ? "text-white font-bold" : "text-zinc-400 hover:text-zinc-200"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeLangIndicator"
                transition={{ type: "spring", stiffness: 450, damping: 30 }}
                className="absolute inset-0 bg-[#d4a574]/25 border border-[#d4a574]/40 rounded-lg shadow-sm"
              />
            )}
            <span className="relative z-10">{l.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
