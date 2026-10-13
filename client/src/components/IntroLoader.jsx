import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const IntroLoader = ({ onComplete }) => {
  const [stage, setStage] = useState("drawing"); // "drawing" -> "katana" -> "letters" -> "exit"
  const nameLetters = "IYED KHOUILDI".split("");

  useEffect(() => {
    const t1 = setTimeout(() => setStage("katana"), 500);
    const t2 = setTimeout(() => setStage("letters"), 1000);
    const t3 = setTimeout(() => {
      setStage("exit");
      setTimeout(() => {
        onComplete();
      }, 700);
    }, 2200);

    const handleKeyDown = (e) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        onComplete();
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {stage !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            clipPath: "polygon(0 0, 100% 0, 100% 0%, 0 0%)",
            transition: { duration: 0.75, ease: [0.77, 0, 0.175, 1] },
          }}
          className="fixed inset-0 z-[200] bg-[#F5F0E7] flex flex-col items-center justify-center select-none overflow-hidden washi-grain"
        >
          {/* Subtle Ambient Washi Grid */}
          <div className="absolute inset-0 bg-radial from-transparent via-transparent to-[#E9E0D2]/50 pointer-events-none" />

          {/* Central Architectural & Katana Composition */}
          <div className="relative flex flex-col items-center justify-center z-10">
            {/* Minimalist Ensō Circle (Sumi-e ink brush style) */}
            <motion.svg
              width="80"
              height="80"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="mb-6"
            >
              <motion.circle
                cx="50"
                cy="50"
                r="38"
                stroke="#262522"
                strokeWidth="2"
                strokeDasharray="239"
                strokeDashoffset="239"
                strokeLinecap="round"
                initial={{ strokeDashoffset: 239 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
              {/* Inner Sakura Accent Petal in Center */}
              <motion.circle
                cx="50"
                cy="50"
                r="5"
                fill="#E8A1B0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6, duration: 0.4 }}
              />
            </motion.svg>

            {/* Katana-inspired Blade Line Drawing Across the Screen */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={stage !== "drawing" ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="w-48 h-[1.5px] bg-gradient-to-r from-transparent via-[#AD8B59] to-transparent mb-5 origin-center"
            />

            {/* Sequential Typography Reveal */}
            <div className="flex items-center gap-[0.2em] overflow-hidden">
              {nameLetters.map((letter, idx) => (
                <motion.span
                  key={idx}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={
                    stage === "letters" || stage === "exit"
                      ? { y: 0, opacity: 1 }
                      : { y: "110%", opacity: 0 }
                  }
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.035,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="font-editorial text-2xl sm:text-3xl font-medium tracking-[0.22em] text-[#262522]"
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            {/* Subtitle Telemetry */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={stage === "letters" || stage === "exit" ? { opacity: 0.75 } : { opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="text-[11px] font-mono tracking-[0.24em] uppercase text-[#786F63] mt-3"
            >
              Full Stack & Data Architecture
            </motion.p>
          </div>

          {/* Skip Button */}
          <button
            type="button"
            onClick={onComplete}
            className="absolute bottom-8 right-8 text-[11px] font-mono tracking-widest text-[#9E9486] hover:text-[#262522] uppercase transition-colors"
          >
            Skip [Esc]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;
