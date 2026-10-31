import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useSpring, useMotionValue } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

/**
 * Premium Katana Graphic & Interactive Experience
 *
 * Designed with authentic Japanese sword proportions:
 * - Blade (Nagasa) with realistic Sori curve, kissaki (chiseled tip),
 *   shinogi ridge line, and waving hamon (temper line).
 * - Habaki (blade collar) in antique brushed gold (#C8A668).
 * - Tsuba (guard) featuring an openwork traditional sukashi crest.
 * - Seppa (spacers).
 * - Tsuka (handle) wrapped in dark sumi silk (tsuka-ito) revealing ray skin (samegawa) beneath.
 * - Kashira (pommel) with golden shitodome accents.
 *
 * Motion & Interactivity:
 * - Controlled drawing / entrance animation.
 * - Organic idle floating with natural sine breathing.
 * - Traveling metallic light glint across the blade curve.
 * - Smooth, damped cursor-tracking tilt and depth parallax.
 * - Honors prefers-reduced-motion.
 */
const KatanaGraphic = ({ className = "", label = "刀 · PRECISION CRAFT", ariaLabel = "Katana - Japanese Art of Precision" }) => {
  const shouldReduceMotion = useReducedMotion();
  // Mirror the blade tilt in RTL so the tip still points at Fuji's summit
  const { isRTL } = useLanguage();
  const tilt = isRTL ? -1 : 1;
  const containerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // Parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring physics for cursor response
  const springConfig = { damping: 28, stiffness: 180, mass: 0.8 };
  const rotateX = useSpring(mouseY, springConfig);
  const rotateY = useSpring(mouseX, springConfig);
  const floatX = useSpring(mouseX, { damping: 35, stiffness: 120 });
  const floatY = useSpring(mouseY, { damping: 35, stiffness: 120 });

  useEffect(() => {
    if (shouldReduceMotion) return;

    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from center of katana container normalized (-1 to 1)
      const dx = (e.clientX - centerX) / (window.innerWidth / 2);
      const dy = (e.clientY - centerY) / (window.innerHeight / 2);

      // Subtle tilt angles (-8 to +8 deg)
      mouseX.set(Math.max(-1, Math.min(1, dx)) * 7);
      mouseY.set(Math.max(-1, Math.min(1, -dy)) * 7);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldReduceMotion, mouseX, mouseY]);

  return (
    <motion.div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0);
        mouseY.set(0);
      }}
      style={{
        perspective: 1200,
        transformStyle: "preserve-3d",
      }}
      className={`relative select-none flex items-center justify-center ${className}`}
      aria-label={ariaLabel}
    >
      {/* Dynamic 3D tilt & gentle float wrapper */}
      <motion.div
        style={{
          rotateX: shouldReduceMotion ? 0 : rotateX,
          rotateY: shouldReduceMotion ? 0 : rotateY,
          x: shouldReduceMotion ? 0 : floatX,
          y: shouldReduceMotion ? 0 : floatY,
          transformStyle: "preserve-3d",
        }}
        animate={
          shouldReduceMotion
            ? undefined
            : {
                y: [0, -8, 0],
                rotateZ: [-22 * tilt, -20.5 * tilt, -22 * tilt],
              }
        }
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative flex items-center justify-center will-change-transform"
      >
        {/* Soft Radial Ambient Backdrop Glow */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -m-16 rounded-full bg-gradient-to-tr from-sakura/15 via-gold/10 to-transparent blur-3xl pointer-events-none"
        />

        {/* Master Katana Vector Artwork */}
        <svg
          width="160"
          height="620"
          viewBox="0 0 160 620"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-[min(620px,60svh)] w-auto overflow-visible [filter:drop-shadow(0_2px_3px_rgba(23,23,20,0.18))_drop-shadow(16px_34px_28px_rgba(23,23,20,0.13))]"
        >
          <defs>
            {/* Blade Steel Metallic Gradient (Hi-Grade Tamahagane) */}
            <linearGradient id="tamahaganeBlade" x1="68" y1="200" x2="92" y2="200" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4A4944" />
              <stop offset="25%" stopColor="#8C8880" />
              <stop offset="55%" stopColor="#E6E3DE" />
              <stop offset="85%" stopColor="#FAFAF8" />
              <stop offset="100%" stopColor="#4A4843" />
            </linearGradient>

            {/* Back of Blade (Mune / Spine) Dark Shadow Gradient */}
            <linearGradient id="muneSpineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2A2925" />
              <stop offset="100%" stopColor="#5E5C56" />
            </linearGradient>

            {/* Antique Brass / Gold Gradient for Fittings (Tsuba, Habaki, Kashira) */}
            <linearGradient id="antiqueGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#D8BA7D" />
              <stop offset="35%" stopColor="#A68550" />
              <stop offset="70%" stopColor="#E2CA96" />
              <stop offset="100%" stopColor="#7E6133" />
            </linearGradient>

            {/* Tsuka Samegawa (Ray Skin underlayer) */}
            <pattern id="samegawaPattern" x="0" y="0" width="4" height="4" patternUnits="userSpaceOnUse">
              <rect width="4" height="4" fill="#E8E1D5" />
              <circle cx="2" cy="2" r="0.9" fill="#C2B7A5" />
            </pattern>

            {/* Hamon Wave (Yakiba) Soft Linear Texture */}
            <linearGradient id="hamonFrost" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FAFAF8" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#F3D9DF" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#D48D9B" stopOpacity="0.3" />
            </linearGradient>

            {/* Moving Gleam Gradient along the edge */}
            <linearGradient id="gleamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="30%" stopColor="#FFFFFF" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#FFFFFF" stopOpacity="1" />
              <stop offset="70%" stopColor="#FFFFFF" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
            </linearGradient>

            {/* Sun glare caught on the kissaki */}
            <radialGradient id="kissakiGlare" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.95" />
              <stop offset="35%" stopColor="#FBE3DA" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#F3D9DF" stopOpacity="0" />
            </radialGradient>

            {/* Ambient drop shadow for Tsuba & Habaki */}
            <filter id="fittingShadow" x="-30%" y="-30%" width="160%" height="160%">
              <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#151412" floodOpacity="0.35" />
            </filter>
          </defs>

          {/* ==================================================== */}
          {/* 1. KASHIRA (Pommel at top of handle)                */}
          {/* ==================================================== */}
          <g id="kashira-group">
            {/* Base cap */}
            <path
              d="M71 18 C71 13 89 13 89 18 L90 24 L70 24 Z"
              fill="url(#antiqueGoldGrad)"
              stroke="#22211E"
              strokeWidth="0.8"
            />
            {/* Shitodome cord eyelet */}
            <ellipse cx="80" cy="18" rx="3.5" ry="2" fill="#22211E" />
            <ellipse cx="80" cy="18" rx="2" ry="1" fill="#A68550" />
          </g>

          {/* ==================================================== */}
          {/* 2. TSUKA (Handle with traditional Tsuka-Ito wrapping)*/}
          {/* ==================================================== */}
          <g id="tsuka-group">
            {/* Core Tsuka Underlay (Samegawa / Ray skin) */}
            <rect
              x="72"
              y="24"
              width="16"
              height="136"
              rx="4"
              fill="url(#samegawaPattern)"
              stroke="#22211E"
              strokeWidth="1"
            />

            {/* Tsuka-Ito: Overlapping Cross-Braid Wrap Segments */}
            {Array.from({ length: 9 }).map((_, i) => {
              const y = 26 + i * 14.5;
              return (
                <g key={`wrap-${i}`}>
                  {/* Left-to-right diagonal ribbon */}
                  <polygon
                    points={`72,${y + 1} 88,${y + 9} 88,${y + 14} 72,${y + 6}`}
                    fill="#1A1916"
                    stroke="#2D2B26"
                    strokeWidth="0.6"
                  />
                  {/* Right-to-left diagonal ribbon (cross) */}
                  <polygon
                    points={`88,${y + 1} 72,${y + 9} 72,${y + 14} 88,${y + 6}`}
                    fill="#23211D"
                    stroke="#2D2B26"
                    strokeWidth="0.6"
                    opacity="0.95"
                  />
                  {/* Diamond Menuki opening reveal */}
                  <polygon
                    points={`80,${y + 3} 84.5,${y + 7.5} 80,${y + 12} 75.5,${y + 7.5}`}
                    fill="url(#samegawaPattern)"
                    stroke="#151412"
                    strokeWidth="0.6"
                  />
                  {/* Subtle antique gold Menuki ornament in center diamond on select tiers */}
                  {(i === 3 || i === 5) && (
                    <circle cx="80" cy={y + 7.5} r="1.6" fill="#D8BA7D" />
                  )}
                </g>
              );
            })}

            {/* Fuchi (Collar fitting at bottom of tsuka) */}
            <rect
              x="70.5"
              y="156"
              width="19"
              height="7"
              rx="1.5"
              fill="url(#antiqueGoldGrad)"
              stroke="#22211E"
              strokeWidth="0.8"
            />
          </g>

          {/* ==================================================== */}
          {/* 3. SEPPA & TSUBA (Spacers & Handguard)              */}
          {/* ==================================================== */}
          <g id="tsuba-group" filter="url(#fittingShadow)">
            {/* Seppa (Upper Spacer washer) */}
            <ellipse cx="80" cy="164" rx="16" ry="3.5" fill="#C8A668" stroke="#3A301E" strokeWidth="0.5" />

            {/* Tsuba Plate (Refined Mokko-gata / Quatrefoil Iron Guard) */}
            <path
              d="M60 168 C60 162 67 160 80 160 C93 160 100 162 100 168 C100 174 93 176 80 176 C67 176 60 174 60 168 Z"
              fill="#1F1E1A"
              stroke="url(#antiqueGoldGrad)"
              strokeWidth="1.2"
            />
            {/* Tsuba openwork piercings (Sukashi - Traditional cherry blossom / crescent cutouts) */}
            <ellipse cx="70" cy="168" rx="3.5" ry="1.6" fill="var(--paper)" opacity="0.8" />
            <ellipse cx="90" cy="168" rx="3.5" ry="1.6" fill="var(--paper)" opacity="0.8" />
            {/* Rim rim gold accent */}
            <ellipse cx="80" cy="168" rx="18.5" ry="5.8" stroke="#A68550" strokeWidth="0.6" fill="none" opacity="0.75" />

            {/* Lower Seppa */}
            <ellipse cx="80" cy="171.5" rx="15" ry="3" fill="#C8A668" stroke="#3A301E" strokeWidth="0.5" />
          </g>

          {/* ==================================================== */}
          {/* 4. HABAKI (Blade Collar - Fine Chiseled Gold)       */}
          {/* ==================================================== */}
          <g id="habaki-group">
            <path
              d="M74.5 174.5 L85.5 174.5 L85 192 L75 192 Z"
              fill="url(#antiqueGoldGrad)"
              stroke="#40321A"
              strokeWidth="0.8"
            />
            {/* Diagonal Rain Pattern Chiseling (Neko-gaki) */}
            {[178, 182, 186, 190].map((ly) => (
              <line
                key={ly}
                x1="76"
                y1={ly - 1}
                x2="84"
                y2={ly + 1}
                stroke="#684F22"
                strokeWidth="0.6"
                strokeLinecap="round"
              />
            ))}
          </g>

          {/* ==================================================== */}
          {/* 5. NAGASA (The Blade: Tamahagane Steel & Sori Curve) */}
          {/* ==================================================== */}
          <g id="blade-group">
            {/* Blade Shadow & Depth Backdrop */}
            <path
              d="M75 192 Q77 340 73 470 Q71 535 62 580 L66 584 Q76 538 78 470 Q82 340 80 192 Z"
              fill="rgba(23, 23, 20, 0.08)"
            />

            {/* Main Solid Steel Blade Body */}
            {/* The curvature (Sori) gracefully turns toward the left-facing edge */}
            <path
              d="M75 192
                 Q77.5 330 74 460
                 Q71.5 530 63 580
                 L68 584
                 Q78 535 80.5 460
                 Q84.5 330 80 192
                 Z"
              fill="url(#tamahaganeBlade)"
              stroke="#36342E"
              strokeWidth="0.8"
            />

            {/* Mune (Spine - The dull, thick back edge of the katana) */}
            <path
              d="M80 192
                 Q84.5 330 80.5 460
                 Q78 535 68 584
                 L67 583
                 Q77 534 79.5 460
                 Q83.5 330 79 192
                 Z"
              fill="url(#muneSpineGrad)"
            />

            {/* Shinogi Ridge Line (Beveled longitudinal center line) */}
            <motion.path
              d="M77.2 192
                 Q80.5 330 77 460
                 Q75 528 66 579"
              stroke="#FFFFFF"
              strokeWidth="0.85"
              strokeLinecap="round"
              opacity="0.85"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            />

            {/* Hi (Blood Groove / Fulling Line for lightness) */}
            <path
              d="M78.6 195
                 Q81.8 330 78.5 450
                 Q77 500 71 545"
              stroke="#2E2C26"
              strokeWidth="0.75"
              opacity="0.45"
            />

            {/* Hamon (Authentic Notare / Wave Temper Line with Sakura Glow) */}
            <motion.path
              d="M75.2 205
                 C74.5 220 76.8 235 75.8 250
                 C74.8 265 77.2 280 76 295
                 C74.8 310 77 325 75.8 340
                 C74.5 355 76.5 370 75.2 385
                 C74 400 76 415 74.8 430
                 C73.6 445 75.2 460 74 475
                 C72.8 490 73.8 505 72.2 520
                 C70.5 535 71 550 68 565
                 C66.5 572 65 577 63.5 580"
              stroke="url(#hamonFrost)"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              transition={{ duration: 1.4, delay: 0.4 }}
            />

            {/* Kissaki / Boshi (Refined Chiseled Blade Tip Point) */}
            <path
              d="M63 580 L68 584 L64.5 593 Z"
              fill="#FFFFFF"
              stroke="#3A3832"
              strokeWidth="0.6"
            />
            {/* Yokote (Line dividing blade and tip) */}
            <line
              x1="63"
              y1="580"
              x2="68"
              y2="584"
              stroke="#59554C"
              strokeWidth="0.75"
            />

            {/* Traveling Metallic Blade Glint / Gleam Animation */}
            {!shouldReduceMotion && (
              <motion.g
                initial={{ opacity: 0 }}
                animate={{
                  y: [0, 360, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  times: [0, 0.5, 1],
                }}
              >
                {/* Longitudinal sweep */}
                <rect
                  x="72"
                  y="195"
                  width="7"
                  height="45"
                  fill="url(#gleamGradient)"
                  transform="skewY(18)"
                  opacity="0.9"
                />
                {/* Brilliant Star Glint point */}
                <circle cx="75.5" cy="217" r="2.8" fill="#FFFFFF" />
                <line x1="71" y1="217" x2="80" y2="217" stroke="#FFFFFF" strokeWidth="0.8" />
                <line x1="75.5" y1="212.5" x2="75.5" y2="221.5" stroke="#FFFFFF" strokeWidth="0.8" />
              </motion.g>
            )}
          </g>

          {/* Morning sun catching the blade tip, tying the sword to the rising sun behind Fuji */}
          <motion.g
            style={{ transformOrigin: "65px 590px", transformBox: "view-box" }}
            animate={shouldReduceMotion ? undefined : { opacity: [0.55, 1, 0.55], scale: [0.9, 1.08, 0.9] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <circle cx="65" cy="590" r="16" fill="url(#kissakiGlare)" />
            <path d="M 65 579 L 65.6 589.4 L 76 590 L 65.6 590.6 L 65 601 L 64.4 590.6 L 54 590 L 64.4 589.4 Z" fill="#FFFFFF" opacity="0.85" />
          </motion.g>

          {/* Drifting Petal tied to Katana Blade Tip */}
          <motion.g
            animate={
              shouldReduceMotion
                ? undefined
                : {
                    x: [0, 12, 4, 16, 0],
                    y: [0, 18, 38, 56, 0],
                    rotate: [0, 45, 110, 180, 0],
                    opacity: [0, 0.85, 0.9, 0.7, 0],
                  }
            }
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            transform="translate(64, 584)"
          >
            <path
              d="M0 -6 C3 -3 4 1 0 5 C-4 1 -3 -3 0 -6 Z"
              fill="#D48D9B"
              opacity="0.85"
            />
          </motion.g>
        </svg>

        {/* Traditional Vertical Hanko Seal Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="absolute top-[22%] start-[56%] flex flex-col items-center gap-1.5 pointer-events-none"
        >
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-paper/85 backdrop-blur-sm border border-gold/25 shadow-[inset_0_1px_0_var(--card-sheen),0_6px_16px_-8px_rgba(34,33,30,0.25)]">
            <span className="hanko-stamp text-[10px] w-5 h-5">匠</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-ink-soft">
              {label}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default KatanaGraphic;
