import React from "react";
import { useReducedMotion } from "framer-motion";
import MountFuji from "./landscape/MountFuji";
import MovingClouds from "./landscape/MovingClouds";
import SakuraFoliage from "./landscape/SakuraFoliage";

/**
 * JapaneseBackdrop: Refined Japandi Landscape Atmosphere
 *
 * Visual Harmony:
 * 1. Morning Dawn Aura & Enso Light (Warm ambient Japandi morning tones)
 * 2. Corrected Mount Fuji (Serene background horizon scale, natural snow cap, sumi-e shading)
 * 3. Multi-layer Animated Moving Clouds (Seamless gentle drift across sky & mountain)
 * 4. Sakura Leaves with Flowers (Draped overhead from top-right, showcasing Katana in full glory)
 * 5. Sacred Asanoha watermark in corner
 */
const JapaneseBackdrop = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0"
    >
      {/* 1. Soft Japandi Ambient Morning Aura / Enso Light */}
      <div className="absolute top-10 left-1/3 w-[34rem] h-[34rem] rounded-full bg-gradient-to-br from-[#E05A47]/08 via-[#D48D9B]/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute top-24 right-20 w-80 h-80 rounded-full bg-[#EBE3D5]/35 blur-2xl pointer-events-none" />

      {/* 2. Traditional Asanoha Geometry Watermark (Sacred Japandi Motif in corner) */}
      <svg
        width="260"
        height="260"
        viewBox="0 0 100 100"
        className="absolute top-6 left-6 sm:left-10 opacity-[0.035] pointer-events-none"
      >
        <pattern id="asanohaPattern" width="20" height="34.64" patternUnits="userSpaceOnUse">
          <path
            d="M 10 0 L 0 5.77 L 0 17.32 L 10 23.09 L 20 17.32 L 20 5.77 Z M 10 0 L 10 23.09 M 0 5.77 L 20 17.32 M 0 17.32 L 20 5.77"
            stroke="#22211E"
            strokeWidth="0.5"
            fill="none"
          />
        </pattern>
        <rect width="100" height="100" fill="url(#asanohaPattern)" />
      </svg>

      {/* 3. Corrected Mount Fuji Base Horizon Layer (富士山) */}
      {/* Positioned comfortably at the horizon so it does not overpower the hero text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[34%] sm:h-[40%] opacity-60 lg:left-auto lg:right-[-6%] lg:translate-x-0 lg:w-[62%] lg:h-[46%] lg:opacity-80 transition-opacity duration-1000">
        <MountFuji className="w-full h-full" />
      </div>

      {/* 4. Multi-Layer Animated Moving Clouds (Seamless Drift & Gentle Floating) */}
      <div className="absolute inset-0 z-[1]">
        <MovingClouds />
      </div>

      {/* 5. Editorial Typography Legibility Mask (Soft wash over left column) */}
      <div className="absolute inset-y-0 left-0 w-full lg:w-[55%] bg-gradient-to-r from-[#F6F2EB]/85 via-[#F6F2EB]/40 to-transparent pointer-events-none z-[1]" />

      {/* 6. Full-Width Overhead Sakura Leaves & Flowers (Spanning the entire top of the header) */}
      <div className="absolute top-0 left-0 right-0 w-full h-44 sm:h-56 md:h-64 lg:h-72 pointer-events-none z-[2] overflow-hidden">
        <SakuraFoliage className="w-full h-full" />
      </div>
    </div>
  );
};

export default JapaneseBackdrop;
