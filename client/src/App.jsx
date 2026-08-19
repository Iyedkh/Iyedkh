import React from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "sonner";
import CursorGlow from "./components/CursorGlow";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen bg-[#09090b] text-[#fafafa] relative selection:bg-[#d4a574]/30 selection:text-white">
      {/* Toast Notification Provider */}
      <Toaster
        position="bottom-right"
        theme="dark"
        richColors
        closeButton
        toastOptions={{
          style: {
            background: "rgba(18, 18, 24, 0.95)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
            color: "#fafafa",
            fontFamily: "var(--font-sans)",
            borderRadius: "14px",
            boxShadow: "0 20px 40px -15px rgba(0,0,0,0.7)",
          },
        }}
      />

      {/* Apple-style Smooth Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[2.5px] bg-gradient-to-r from-[#d4a574] via-[#8b4789] to-[#ebd0ad] origin-left z-50 shadow-[0_0_10px_rgba(212,165,116,0.5)]"
      />

      {/* GPU-Accelerated Cursor Glow */}
      <CursorGlow />

      {/* Navigation */}
      <Nav />

      {/* Main Content Container */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <Hero />

        <div className="apple-divider" />

        <About />

        <div className="apple-divider" />

        <Skills />

        <div className="apple-divider" />

        <Projects />

        <div className="apple-divider" />

        <Experience />

        <div className="apple-divider" />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}