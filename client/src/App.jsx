import React, { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "sonner";
import { LanguageProvider } from "./i18n/LanguageContext";
import { CvModalProvider } from "./context/CvModalContext";

import IntroLoader from "./components/IntroLoader";
import CustomCursor from "./components/CustomCursor";
import SakuraCanvas from "./components/SakuraCanvas";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Approach from "./components/Approach";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CvModal from "./components/CvModal";
import SideRails from "./components/SideRails";
import Marquee from "./components/Marquee";

function InkDivider() {
  return (
    <div aria-hidden="true" className="max-w-6xl mx-auto px-4 sm:px-6">
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="katana-divider"
      />
    </div>
  );
}

function PortfolioContent() {
  const [introFinished, setIntroFinished] = useState(() => {
    try {
      return sessionStorage.getItem("iyed_intro_viewed") === "true";
    } catch {
      return false;
    }
  });

  // Feed cursor position to every card so its spotlight glow can follow the pointer
  useEffect(() => {
    const onMove = (e) => {
      const card = e.target.closest?.(".japandi-card, .spotlight");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const handleIntroComplete = () => {
    setIntroFinished(true);
    try {
      sessionStorage.setItem("iyed_intro_viewed", "true");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F2EB] text-[#22211E] relative selection:bg-[#D48D9B]/25 selection:text-[#22211E] overflow-x-hidden">
      {/* Toast Notification Provider */}
      <Toaster
        position="bottom-right"
        theme="light"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "#F6F2EB",
            border: "1px solid rgba(34, 33, 30, 0.12)",
            color: "#22211E",
            fontFamily: "var(--font-sans)",
            borderRadius: "16px",
            boxShadow: "0 14px 32px -8px rgba(34, 33, 30, 0.08)",
          },
        }}
      />

      {/* First-visit Intro Loading Experience */}
      {!introFinished && <IntroLoader onComplete={handleIntroComplete} />}

      {/* Interactive 60fps Sakura Cherry Blossom Petal Particle System */}
      <SakuraCanvas />

      {/* Japanese Japandi Scroll Progress Bar with Sakura Accent */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#22211E] via-[#A68550] to-[#D48D9B] origin-left z-50 pointer-events-none"
      />

      {/* Washi paper grain overlay */}
      <div aria-hidden="true" className="paper-grain" />

      {/* Fixed editorial side rails: section index, socials, ensō progress */}
      <SideRails />

      {/* Desktop Custom Follower Cursor */}
      <CustomCursor />

      {/* Minimal Floating Navigation */}
      <Nav />

      {/* Main Experience Layout */}
      <main className="relative z-10">
        <Hero />

        <Marquee />

        <About />

        <InkDivider />

        <Projects />

        <InkDivider />

        <Skills />

        <InkDivider />

        <Experience />

        <InkDivider />

        <Approach />

        <Marquee
          reverse
          outline
          items={["Let's build something calm", "縁", "Available for new projects", "匠", "Freelance & Full-time", "和"]}
        />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive CV Language Selection Modal */}
      <CvModal />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <CvModalProvider>
        <PortfolioContent />
      </CvModalProvider>
    </LanguageProvider>
  );
}