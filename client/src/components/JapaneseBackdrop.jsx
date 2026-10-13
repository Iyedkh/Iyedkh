import React from "react";
import { motion, useReducedMotion } from "framer-motion";

/**
 * JapaneseBackdrop: Japandi Editorial Atmosphere
 *
 * Visual layers:
 * - Subtle Sumi-e Mount Fuji silhouette at the horizon
 * - Soft morning sun / Enso mist aura with warm Japandi ambient tones
 * - Traditional Asanoha (hemp leaf) sacred geometry watermark in the corner
 * - Delicately blooming cherry blossom branch (Sakura)
 */
const JapaneseBackdrop = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 1. Distant Sumi-e Fuji Silhouette (Minimalist ink wash at base) */}
      <svg
        viewBox="0 0 1440 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-56 sm:h-72 lg:h-80 opacity-[0.06] object-bottom"
        preserveAspectRatio="none"
      >
        {/* Fuji Mountain Silhouette */}
        <path
          d="M0 380 L520 170 C590 140 680 95 720 95 C760 95 850 140 920 170 L1440 380 H0 Z"
          fill="#171714"
        />
        {/* Foreground rolling foothills */}
        <path
          d="M0 380 L380 270 C520 230 640 280 820 250 C980 220 1120 270 1440 380 H0 Z"
          fill="#171714"
          opacity="0.6"
        />
      </svg>

      {/* 2. Soft Japandi Ambient Morning Aura / Enso Light */}
      <div className="absolute top-16 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-[#E8A1B0]/15 via-[#AD8B59]/10 to-transparent blur-3xl" />
      <div className="absolute top-36 right-12 w-96 h-96 rounded-full bg-[#E9E0D2]/40 blur-2xl" />

      {/* 3. Subtle Asanoha Geometry Watermark (Sacrual Japandi Motif in corner) */}
      <svg
        width="280"
        height="280"
        viewBox="0 0 100 100"
        className="absolute top-8 left-6 sm:left-12 opacity-[0.035] pointer-events-none"
      >
        <pattern id="asanohaPattern" width="20" height="34.64" patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 5.77 L 0 17.32 L 10 23.09 L 20 17.32 L 20 5.77 Z M 10 0 L 10 23.09 M 0 5.77 L 20 17.32 M 0 17.32 L 20 5.77"
            stroke="#262522"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
        <rect width="100" height="100" fill="url(#asanohaPattern)" />
      </svg>

      {/* 4. Elegant Cherry Blossom Branch (Entering subtly from Top-Right) */}
      <svg
        width="420"
        height="320"
        viewBox="0 0 420 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -top-4 -right-12 sm:right-0 w-72 sm:w-96 md:w-[26rem] h-auto opacity-70 overflow-visible"
      >
        <defs>
          <linearGradient id="branchWoodGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7E5F43" />
            <stop offset="100%" stopColor="#4A3422" />
          </linearGradient>
        </defs>

        {/* Main Branch (Natural Wood stroke) */}
        <motion.path
          d="M420 -10 C360 30 310 70 250 100 C190 130 150 140 90 150 C50 156 10 185 -10 205"
          stroke="url(#branchWoodGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        />
        {/* Branch Splinter 1 */}
        <motion.path
          d="M270 90 C240 65 210 70 180 55"
          stroke="url(#branchWoodGrad)"
          strokeWidth="2"
          strokeLinecap="round"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        />
        {/* Branch Splinter 2 */}
        <motion.path
          d="M185 135 C155 170 115 185 95 215"
          stroke="url(#branchWoodGrad)"
          strokeWidth="1.6"
          strokeLinecap="round"
          initial={{ pathLength: shouldReduceMotion ? 1 : 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, delay: 0.3 }}
        />

        {/* Blossom Clusters (Delicate Sakura Flowers with golden pistils) */}
        {[
          { cx: 230, cy: 98, r: 11, rot: 15 },
          { cx: 255, cy: 80, r: 13, rot: 45 },
          { cx: 185, cy: 56, r: 10, rot: -20 },
          { cx: 162, cy: 68, r: 12, rot: 30 },
          { cx: 130, cy: 146, r: 12, rot: 10 },
          { cx: 90, cy: 155, r: 14, rot: 55 },
          { cx: 78, cy: 210, r: 11, rot: -15 },
          { cx: 135, cy: 182, r: 10, rot: 40 },
          { cx: 200, cy: 125, r: 9, rot: 70 },
        ].map((b, i) => (
          <g
            key={i}
            transform={`translate(${b.cx}, ${b.cy}) rotate(${b.rot})`}
            className="transition-transform duration-700"
          >
            {/* 5 Petal Cluster */}
            {[0, 72, 144, 216, 288].map((angle, pi) => (
              <ellipse
                key={pi}
                cx={Math.cos((angle * Math.PI) / 180) * (b.r * 0.45)}
                cy={Math.sin((angle * Math.PI) / 180) * (b.r * 0.45)}
                rx={b.r * 0.48}
                ry={b.r * 0.32}
                transform={`rotate(${angle})`}
                fill="#F4CCD5"
                opacity="0.85"
              />
            ))}
            {/* Petal Core Highlight */}
            <circle cx="0" cy="0" r={b.r * 0.32} fill="#E8A1B0" opacity="0.9" />
            {/* Stamen Pistil */}
            <circle cx="0" cy="0" r={b.r * 0.14} fill="#AD8B59" />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default JapaneseBackdrop;
