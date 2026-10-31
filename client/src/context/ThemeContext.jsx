import React, { createContext, useContext, useState, useCallback, useEffect } from "react";

const STORAGE_KEY = "iyed_portfolio_theme";
const THEME_COLORS = { light: "#F6F2EB", dark: "#131210" };

const ThemeContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

// index.html sets data-theme before React renders (saved choice, else system preference)
const readInitialTheme = () => {
  const attr = document.documentElement.dataset.theme;
  return attr === "dark" ? "dark" : "light";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", THEME_COLORS[theme]);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    const next = theme === "dark" ? "light" : "dark";
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage may be unavailable (private mode); the theme still switches for this visit
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!document.startViewTransition || reduceMotion) {
      setTheme(next);
      return;
    }
    // Ink-wash crossfade between day and night
    document.startViewTransition(() => {
      document.documentElement.dataset.theme = next;
      setTheme(next);
    });
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
};

export const useTheme = () => useContext(ThemeContext);
