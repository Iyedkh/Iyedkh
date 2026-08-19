import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "./translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem("iyed_portfolio_lang");
      if (saved && ["en", "fr", "ar"].includes(saved)) {
        return saved;
      }
      // Check browser language
      const browserLang = navigator.language?.slice(0, 2);
      if (browserLang === "fr") return "fr";
      if (browserLang === "ar") return "ar";
      return "en";
    } catch {
      return "en";
    }
  });

  const isRTL = lang === "ar";
  const t = translations[lang] || translations.en;

  const setLang = (newLang) => {
    if (["en", "fr", "ar"].includes(newLang)) {
      setLangState(newLang);
      try {
        localStorage.setItem("iyed_portfolio_lang", newLang);
      } catch (e) {
        console.error(e);
      }
    }
  };

  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = lang;
    if (isRTL) {
      document.body.classList.add("rtl-mode");
    } else {
      document.body.classList.remove("rtl-mode");
    }
  }, [lang, isRTL]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
