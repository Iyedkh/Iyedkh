import React from "react";

/**
 * SakuraFoliage: Full-Width Overhead Canopy of Cherry Leaves & Blossoms (葉桜 - Ha-zakura)
 *
 * Spans seamlessly across the entire top header from edge to edge (left to right),
 * framing the whole hero section from above like a traditional Japanese garden pergola.
 *
 * Features:
 * - Continuous unbroken bough & twig structure spanning the entire 1440px width
 * - Lush spring cherry leaves (bamboo & cedar greens with delicate veins and sunlit tips)
 * - Exquisite 5-petaled Sakura blossoms, hanging cascades (Shidare), and flower buds
 * - Positioned overhead along the top ceiling so the Katana and hero text remain completely unobstructed
 * - Gentle breeze sway animations & full-width drifting petal system
 */
const SakuraFoliage = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full h-full select-none pointer-events-none ${className}`}
    >
      <svg
        viewBox="0 0 1440 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-top overflow-visible"
        preserveAspectRatio="xMidYMin slice"
      >
        <defs>
          {/* Wood Branch Gradients */}
          <linearGradient id="fullBranchGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3D281A" />
            <stop offset="45%" stopColor="#553925" />
            <stop offset="100%" stopColor="#734E34" />
          </linearGradient>

          <linearGradient id="fullBranchGradRight" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3D281A" />
            <stop offset="45%" stopColor="#553925" />
            <stop offset="100%" stopColor="#734E34" />
          </linearGradient>

          {/* Leaf Gradients (Authentic Japanese Spring Greens) */}
          <linearGradient id="fullLeafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8A9A78" />
            <stop offset="55%" stopColor="#6E7E5E" />
            <stop offset="100%" stopColor="#4E5D41" />
          </linearGradient>

          <linearGradient id="fullLeafGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#A8B896" />
            <stop offset="60%" stopColor="#879974" />
            <stop offset="100%" stopColor="#5D6F4D" />
          </linearGradient>

          <linearGradient id="fullLeafGradGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C4A86C" />
            <stop offset="50%" stopColor="#889874" />
            <stop offset="100%" stopColor="#546445" />
          </linearGradient>

          {/* Blossom Petal Shading */}
          <linearGradient id="fullPetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="55%" stopColor="#F9DCE3" />
            <stop offset="100%" stopColor="#E298A6" />
          </linearGradient>

          {/* Blossom Soft Halo */}
          <radialGradient id="fullClusterHalo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F5DCE2" stopOpacity="0.85" />
            <stop offset="50%" stopColor="#D48D9B" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#D48D9B" stopOpacity="0" />
          </radialGradient>

          {/* Depth of field for the out-of-focus back layer */}
          <filter id="foliageDof" x="-10%" y="-30%" width="120%" height="160%">
            <feGaussianBlur stdDeviation="2.4" />
          </filter>
          <filter id="foliageBokeh" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3.5" />
          </filter>
        </defs>

        {/* Out-of-focus echo of the bough, set further back for depth */}
        <use
          href="#sakuraBough"
          transform="translate(60 -22) scale(1 0.92)"
          filter="url(#foliageDof)"
          opacity="0.18"
        />

        {/* Soft blossom bokeh drifting in the far layer */}
        <g filter="url(#foliageBokeh)" opacity="0.55">
          <circle cx="215" cy="18" r="9" fill="#F3D9DF" />
          <circle cx="505" cy="88" r="7" fill="#EFC6D0" />
          <circle cx="690" cy="14" r="10" fill="#F3D9DF" />
          <circle cx="1000" cy="96" r="7" fill="#EFC6D0" />
          <circle cx="1185" cy="14" r="9" fill="#F3D9DF" />
          <circle cx="1335" cy="92" r="6" fill="#EFC6D0" />
        </g>

        {/* ========================================================= */}
        {/* FULL-WIDTH CONTINUOUS OVERHEAD WOOD BOUGH SKELETON        */}
        {/* ========================================================= */}
        <g id="sakuraBough" className="animate-branch-breeze">
          {/* --- LEFT SECTION: Bough entering from Top-Left --- */}
          <path
            d="M -20 -15 
               C 80 25, 180 40, 290 48
               C 390 55, 480 35, 590 50
               C 680 62, 750 45, 830 52"
            stroke="url(#fullBranchGradLeft)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Left Sub-sprigs (Hanging cascades & twigs) */}
          <path
            d="M 120 32 C 160 65, 190 105, 210 145"
            stroke="url(#fullBranchGradLeft)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 280 46 C 310 80, 330 120, 345 165"
            stroke="url(#fullBranchGradLeft)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 345 165 C 335 195, 320 225, 310 250"
            stroke="url(#fullBranchGradLeft)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M 450 42 C 490 70, 520 105, 545 140"
            stroke="url(#fullBranchGradLeft)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* --- CENTER LINK: Continuous canopy connection --- */}
          <path
            d="M 640 54 
               C 720 40, 800 65, 890 55
               C 970 46, 1050 60, 1140 45"
            stroke="url(#fullBranchGradLeft)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Center Cascades */}
          <path
            d="M 730 48 C 755 85, 770 125, 785 160"
            stroke="url(#fullBranchGradLeft)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 870 56 C 895 90, 915 125, 930 155"
            stroke="url(#fullBranchGradLeft)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />

          {/* --- RIGHT SECTION: Bough sweeping from Top-Right --- */}
          <path
            d="M 1460 -15 
               C 1360 22, 1260 38, 1150 46
               C 1040 54, 950 36, 840 50"
            stroke="url(#fullBranchGradRight)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Right Sub-sprigs (Hanging cascades & framing twigs) */}
          <path
            d="M 1320 30 C 1280 65, 1250 110, 1230 155"
            stroke="url(#fullBranchGradRight)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 1230 155 C 1215 185, 1195 215, 1180 240"
            stroke="url(#fullBranchGradRight)"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
          <path
            d="M 1160 47 C 1130 82, 1100 120, 1080 155"
            stroke="url(#fullBranchGradRight)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
          <path
            d="M 1020 46 C 990 75, 970 110, 950 145"
            stroke="url(#fullBranchGradRight)"
            strokeWidth="1.6"
            strokeLinecap="round"
          />
          <path
            d="M 1390 15 C 1410 50, 1420 90, 1415 130"
            stroke="url(#fullBranchGradRight)"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </g>

        {/* ========================================================= */}
        {/* LUSH SPRING LEAVES (葉 - Ha) SPANNING FULL 1440PX WIDTH   */}
        {/* ========================================================= */}
        <g className="animate-branch-breeze">
          {[
            // --- LEFT FLANK LEAVES (x: 20 to 450) ---
            { x: 30, y: 12, r: 24, rot: 35, grad: "url(#fullLeafGrad1)" },
            { x: 65, y: 22, r: 22, rot: -25, grad: "url(#fullLeafGrad2)" },
            { x: 105, y: 28, r: 25, rot: 45, grad: "url(#fullLeafGrad1)" },
            { x: 145, y: 36, r: 20, rot: -30, grad: "url(#fullLeafGradGold)" },
            { x: 185, y: 44, r: 26, rot: 50, grad: "url(#fullLeafGrad2)" },
            { x: 225, y: 48, r: 22, rot: -40, grad: "url(#fullLeafGrad1)" },
            { x: 265, y: 50, r: 24, rot: 30, grad: "url(#fullLeafGrad1)" },
            { x: 310, y: 52, r: 22, rot: -25, grad: "url(#fullLeafGradGold)" },
            { x: 355, y: 55, r: 25, rot: 40, grad: "url(#fullLeafGrad2)" },
            { x: 400, y: 50, r: 21, rot: -35, grad: "url(#fullLeafGrad1)" },
            { x: 445, y: 46, r: 23, rot: 45, grad: "url(#fullLeafGradGold)" },

            // Left cascades
            { x: 155, y: 70, r: 20, rot: 60, grad: "url(#fullLeafGrad2)" },
            { x: 180, y: 105, r: 19, rot: -50, grad: "url(#fullLeafGrad1)" },
            { x: 205, y: 140, r: 17, rot: 55, grad: "url(#fullLeafGradGold)" },
            { x: 300, y: 85, r: 22, rot: 65, grad: "url(#fullLeafGrad2)" },
            { x: 325, y: 125, r: 20, rot: -45, grad: "url(#fullLeafGrad1)" },
            { x: 345, y: 165, r: 18, rot: 50, grad: "url(#fullLeafGradGold)" },
            { x: 325, y: 210, r: 16, rot: -40, grad: "url(#fullLeafGrad2)" },
            { x: 310, y: 250, r: 14, rot: 35, grad: "url(#fullLeafGrad1)" },
            { x: 480, y: 75, r: 20, rot: 60, grad: "url(#fullLeafGrad2)" },
            { x: 515, y: 110, r: 18, rot: -45, grad: "url(#fullLeafGrad1)" },
            { x: 540, y: 140, r: 16, rot: 40, grad: "url(#fullLeafGradGold)" },

            // --- CENTER CANOPY LEAVES (x: 480 to 960) ---
            { x: 490, y: 45, r: 23, rot: -20, grad: "url(#fullLeafGrad1)" },
            { x: 535, y: 48, r: 22, rot: 35, grad: "url(#fullLeafGrad2)" },
            { x: 580, y: 52, r: 25, rot: -30, grad: "url(#fullLeafGradGold)" },
            { x: 625, y: 55, r: 21, rot: 40, grad: "url(#fullLeafGrad1)" },
            { x: 670, y: 50, r: 24, rot: -35, grad: "url(#fullLeafGrad2)" },
            { x: 715, y: 48, r: 22, rot: 45, grad: "url(#fullLeafGrad1)" },
            { x: 760, y: 52, r: 25, rot: -25, grad: "url(#fullLeafGradGold)" },
            { x: 805, y: 56, r: 23, rot: 35, grad: "url(#fullLeafGrad2)" },
            { x: 850, y: 52, r: 22, rot: -40, grad: "url(#fullLeafGrad1)" },
            { x: 895, y: 54, r: 24, rot: 45, grad: "url(#fullLeafGradGold)" },
            { x: 940, y: 50, r: 21, rot: -30, grad: "url(#fullLeafGrad2)" },

            // Center cascades
            { x: 745, y: 85, r: 20, rot: 60, grad: "url(#fullLeafGrad1)" },
            { x: 765, y: 120, r: 18, rot: -50, grad: "url(#fullLeafGrad2)" },
            { x: 785, y: 160, r: 16, rot: 45, grad: "url(#fullLeafGradGold)" },
            { x: 890, y: 88, r: 19, rot: 55, grad: "url(#fullLeafGrad2)" },
            { x: 915, y: 122, r: 17, rot: -40, grad: "url(#fullLeafGrad1)" },
            { x: 930, y: 155, r: 15, rot: 45, grad: "url(#fullLeafGradGold)" },

            // --- RIGHT FLANK LEAVES (x: 980 to 1420) ---
            { x: 990, y: 48, r: 23, rot: 30, grad: "url(#fullLeafGrad1)" },
            { x: 1035, y: 52, r: 25, rot: -35, grad: "url(#fullLeafGrad2)" },
            { x: 1080, y: 54, r: 22, rot: 40, grad: "url(#fullLeafGradGold)" },
            { x: 1125, y: 50, r: 24, rot: -30, grad: "url(#fullLeafGrad1)" },
            { x: 1170, y: 46, r: 22, rot: 45, grad: "url(#fullLeafGrad2)" },
            { x: 1215, y: 42, r: 25, rot: -25, grad: "url(#fullLeafGradGold)" },
            { x: 1260, y: 36, r: 23, rot: 35, grad: "url(#fullLeafGrad1)" },
            { x: 1305, y: 30, r: 25, rot: -40, grad: "url(#fullLeafGrad2)" },
            { x: 1350, y: 22, r: 22, rot: 45, grad: "url(#fullLeafGrad1)" },
            { x: 1395, y: 15, r: 24, rot: -30, grad: "url(#fullLeafGradGold)" },

            // Right cascades
            { x: 1060, y: 80, r: 20, rot: 55, grad: "url(#fullLeafGrad1)" },
            { x: 1080, y: 120, r: 18, rot: -45, grad: "url(#fullLeafGrad2)" },
            { x: 1085, y: 155, r: 16, rot: 40, grad: "url(#fullLeafGradGold)" },
            { x: 1260, y: 70, r: 21, rot: 60, grad: "url(#fullLeafGrad2)" },
            { x: 1245, y: 115, r: 19, rot: -50, grad: "url(#fullLeafGrad1)" },
            { x: 1230, y: 155, r: 18, rot: 55, grad: "url(#fullLeafGradGold)" },
            { x: 1200, y: 200, r: 16, rot: -40, grad: "url(#fullLeafGrad2)" },
            { x: 1180, y: 240, r: 14, rot: 35, grad: "url(#fullLeafGrad1)" },
            { x: 1410, y: 55, r: 19, rot: 70, grad: "url(#fullLeafGrad1)" },
            { x: 1418, y: 95, r: 18, rot: -55, grad: "url(#fullLeafGrad2)" },
            { x: 1412, y: 130, r: 15, rot: 45, grad: "url(#fullLeafGradGold)" },
          ].map((leaf, li) => (
            <g
              key={`full-leaf-${li}`}
              transform={`translate(${leaf.x}, ${leaf.y}) rotate(${leaf.rot})`}
            >
              {/* Pointed Cherry Leaf with Organic Curved Outline */}
              <path
                d={`M 0 0 
                   C -${leaf.r * 0.35} -${leaf.r * 0.45}, -${leaf.r * 0.4} -${leaf.r * 0.85}, 0 -${leaf.r}
                   C ${leaf.r * 0.4} -${leaf.r * 0.85}, ${leaf.r * 0.35} -${leaf.r * 0.45}, 0 0 Z`}
                fill={leaf.grad}
                stroke="#35402D"
                strokeWidth="0.5"
                opacity={[0.94, 0.82, 0.9, 0.74][li % 4]}
              />
              {/* Delicate Leaf Spine */}
              <line
                x1="0"
                y1="0"
                x2="0"
                y2={-leaf.r * 0.88}
                stroke="#25301E"
                strokeWidth="0.6"
                strokeOpacity="0.45"
              />
            </g>
          ))}
        </g>

        {/* ========================================================= */}
        {/* CHERRY BLOSSOMS & FLORAL CLUSTERS (花 - Hana)             */}
        {/* ========================================================= */}
        <g className="animate-branch-breeze">
          {/* Soft Floral Depth Auras along the header line */}
          <circle cx="100" cy="30" r="32" fill="url(#fullClusterHalo)" />
          <circle cx="270" cy="50" r="35" fill="url(#fullClusterHalo)" />
          <circle cx="430" cy="48" r="32" fill="url(#fullClusterHalo)" />
          <circle cx="600" cy="52" r="34" fill="url(#fullClusterHalo)" />
          <circle cx="780" cy="50" r="35" fill="url(#fullClusterHalo)" />
          <circle cx="950" cy="54" r="32" fill="url(#fullClusterHalo)" />
          <circle cx="1120" cy="50" r="35" fill="url(#fullClusterHalo)" />
          <circle cx="1290" cy="35" r="34" fill="url(#fullClusterHalo)" />

          {/* Detailed 5-Petal Sakura Flowers distributed across the full top width */}
          {[
            // Left flank flowers
            { cx: 80, cy: 25, r: 16, rot: 15 },
            { cx: 140, cy: 35, r: 17, rot: 42 },
            { cx: 200, cy: 45, r: 15, rot: -20 },
            { cx: 280, cy: 50, r: 18, rot: 30 },
            { cx: 330, cy: 115, r: 15, rot: -35 },
            { cx: 345, cy: 160, r: 14, rot: 10 },
            { cx: 420, cy: 48, r: 16, rot: 50 },

            // Center flowers
            { cx: 520, cy: 46, r: 16, rot: -15 },
            { cx: 590, cy: 52, r: 18, rot: 25 },
            { cx: 660, cy: 54, r: 15, rot: 40 },
            { cx: 730, cy: 48, r: 17, rot: -30 },
            { cx: 775, cy: 120, r: 14, rot: 15 },
            { cx: 830, cy: 52, r: 17, rot: 35 },
            { cx: 910, cy: 55, r: 16, rot: -20 },
            { cx: 925, cy: 120, r: 14, rot: 45 },

            // Right flank flowers
            { cx: 1010, cy: 50, r: 16, rot: 20 },
            { cx: 1075, cy: 115, r: 14, rot: -30 },
            { cx: 1130, cy: 48, r: 18, rot: 38 },
            { cx: 1210, cy: 42, r: 16, rot: -15 },
            { cx: 1240, cy: 110, r: 15, rot: 40 },
            { cx: 1230, cy: 155, r: 14, rot: -25 },
            { cx: 1285, cy: 32, r: 17, rot: 10 },
            { cx: 1350, cy: 22, r: 16, rot: 45 },
            { cx: 1410, cy: 18, r: 15, rot: -35 },

            // Smaller companion blossoms for natural clustering
            { cx: 102, cy: 42, r: 9, rot: 22 },
            { cx: 300, cy: 70, r: 10, rot: -12 },
            { cx: 552, cy: 64, r: 9, rot: 48 },
            { cx: 752, cy: 70, r: 10, rot: 5 },
            { cx: 975, cy: 66, r: 9, rot: -40 },
            { cx: 1165, cy: 66, r: 10, rot: 28 },
            { cx: 1312, cy: 48, r: 9, rot: -8 },
          ].map((flower, fi) => (
            <g
              key={`full-fl-${fi}`}
              transform={`translate(${flower.cx}, ${flower.cy}) rotate(${flower.rot}) scale(${[1, 0.86, 1.08, 0.94][fi % 4]})`}
              opacity={flower.r < 12 ? 0.82 : [1, 0.93, 1, 0.88][fi % 4]}
              className="filter drop-shadow-[0_1px_2px_rgba(34,33,30,0.10)]"
            >
              {/* 5 Distinct Petals with Indented Tips */}
              {[0, 72, 144, 216, 288].map((angle, pi) => (
                <g key={pi} transform={`rotate(${angle})`}>
                  <path
                    d={`M 0 0 
                       C -${flower.r * 0.35} -${flower.r * 0.45}, -${flower.r * 0.45} -${flower.r * 0.85}, -${flower.r * 0.22} -${flower.r}
                       C -${flower.r * 0.08} -${flower.r * 0.92}, ${flower.r * 0.08} -${flower.r * 0.92}, ${flower.r * 0.22} -${flower.r}
                       C ${flower.r * 0.45} -${flower.r * 0.85}, ${flower.r * 0.35} -${flower.r * 0.45}, 0 0 Z`}
                    fill="url(#fullPetalGrad)"
                    stroke="#E298A6"
                    strokeWidth="0.5"
                  />
                </g>
              ))}

              {/* Crimson Core Disc */}
              <circle cx="0" cy="0" r={flower.r * 0.26} fill="#C24545" opacity="0.85" />
              <circle cx="0" cy="0" r={flower.r * 0.14} fill="#E26D5C" />

              {/* Golden Stamens & Pistils */}
              {[0, 60, 120, 180, 240, 300].map((sAngle, si) => {
                const rad = (sAngle * Math.PI) / 180;
                const sx = Math.cos(rad) * (flower.r * 0.38);
                const sy = Math.sin(rad) * (flower.r * 0.38);
                return (
                  <g key={si}>
                    <line
                      x1="0"
                      y1="0"
                      x2={sx}
                      y2={sy}
                      stroke="#8A3449"
                      strokeWidth="0.7"
                    />
                    <circle cx={sx} cy={sy} r={flower.r * 0.07} fill="#C8A668" />
                  </g>
                );
              })}
            </g>
          ))}

          {/* Bud Nodules along the entire canopy line */}
          {[
            { cx: 50, cy: 18, r: 4 },
            { cx: 230, cy: 45, r: 4.5 },
            { cx: 310, cy: 245, r: 3.5 },
            { cx: 470, cy: 45, r: 4 },
            { cx: 620, cy: 55, r: 4.5 },
            { cx: 785, cy: 155, r: 3.5 },
            { cx: 860, cy: 54, r: 4 },
            { cx: 1040, cy: 52, r: 4.5 },
            { cx: 1180, cy: 235, r: 3.5 },
            { cx: 1320, cy: 28, r: 4 },
            { cx: 1420, cy: 125, r: 3.5 },
          ].map((bud, bi) => (
            <g key={`full-bud-${bi}`} transform={`translate(${bud.cx}, ${bud.cy})`}>
              <ellipse cx="0" cy="0" rx={bud.r} ry={bud.r * 1.3} fill="#D48D9B" />
              <path d="M -2 2 Q 0 -3 2 2 Z" fill="#6B785D" />
            </g>
          ))}
        </g>

        {/* ========================================================= */}
        {/* GENTLE FALLING PETALS DRIFTING ACROSS FULL HEADER         */}
        {/* ========================================================= */}
        {[
          { x: 160, y: 90, delay: "0s", dur: "7s" },
          { x: 330, y: 180, delay: "2.5s", dur: "8s" },
          { x: 550, y: 110, delay: "1.2s", dur: "6.5s" },
          { x: 740, y: 140, delay: "3.8s", dur: "7.5s" },
          { x: 920, y: 130, delay: "0.8s", dur: "8.5s" },
          { x: 1100, y: 120, delay: "4.2s", dur: "6.8s" },
          { x: 1250, y: 170, delay: "2.1s", dur: "7.8s" },
          { x: 1380, y: 80, delay: "3.2s", dur: "9s" },
        ].map((petal, pi) => (
          <g
            key={`full-petal-${pi}`}
            transform={`translate(${petal.x}, ${petal.y})`}
            className="animate-petal-flutter"
            style={{
              animationDelay: petal.delay,
              animationDuration: petal.dur,
            }}
          >
            <path
              d="M 0 -7 C 4.5 -4.5, 5 -1, 2.5 3.5 C 0 7, -3.5 5.5, -4.5 1.5 C -5.5 -2.5, -2.5 -6, 0 -7 Z"
              fill="url(#fullPetalGrad)"
              opacity="0.88"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default SakuraFoliage;
