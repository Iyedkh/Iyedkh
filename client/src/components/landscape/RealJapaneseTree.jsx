import React from "react";

/**
 * RealJapaneseTree: Masterwork Japanese Sakura (Cherry Blossom) Tree (桜)
 *
 * Anatomical & Botanical Precision:
 * - Nebari (Root Flare): Weathered root base gripping the landscape
 * - Moyogi Sinuous Trunk: Organic curving trunk with natural taper, bark fissures,
 *   growth rings, and aged knots (uro)
 * - Three-Tier Branching: Dominant reaching bough (leftwards towards Fuji),
 *   counter-balancing lower bough, and crowning apex
 * - Volumetric Blossom Masses: 3D layered shading (shadow plum, vibrant sakura rose,
 *   and morning sunlit petal tips)
 * - Detailed Sakura Florals: 5-petaled flowers with indented tips, crimson cores,
 *   and gold stamens
 * - Spring Breeze Sway & Falling Petal animations
 */
const RealJapaneseTree = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`relative select-none pointer-events-none animate-tree-sway ${className}`}
    >
      <svg
        viewBox="0 0 760 880"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        preserveAspectRatio="xMaxYMax meet"
      >
        <defs>
          {/* Wood Bark Gradients */}
          <linearGradient id="trunkBarkDark" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E140E" />
            <stop offset="35%" stopColor="#352217" />
            <stop offset="70%" stopColor="#4A3223" />
            <stop offset="90%" stopColor="#62432F" />
            <stop offset="100%" stopColor="#2A1B12" />
          </linearGradient>

          <linearGradient id="branchBarkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#553A28" />
            <stop offset="50%" stopColor="#3B261A" />
            <stop offset="100%" stopColor="#22150D" />
          </linearGradient>

          <linearGradient id="woodHighlight" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8C6345" />
            <stop offset="100%" stopColor="#4A3223" />
          </linearGradient>

          {/* Blossom Canopy Gradients (Shadow -> Midtone -> Sunlit) */}
          <radialGradient id="blossomShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8A3449" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#B34C63" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#D48D9B" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="blossomMid" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#EFA4B2" />
            <stop offset="50%" stopColor="#D48D9B" />
            <stop offset="85%" stopColor="#C07182" />
            <stop offset="100%" stopColor="#B05B6E" stopOpacity="0.85" />
          </radialGradient>

          <radialGradient id="blossomLight" cx="40%" cy="30%" r="60%">
            <stop offset="0%" stopColor="#FFF2F5" />
            <stop offset="45%" stopColor="#F9D2DB" />
            <stop offset="80%" stopColor="#E99CB0" />
            <stop offset="100%" stopColor="#D48D9B" stopOpacity="0.9" />
          </radialGradient>

          {/* Individual Petal Shading */}
          <linearGradient id="singlePetalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="60%" stopColor="#F7D8E0" />
            <stop offset="100%" stopColor="#DE8D9F" />
          </linearGradient>

          {/* Tree Shadow Ground Base */}
          <radialGradient id="groundShadow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#1E140E" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#352217" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#F6F2EB" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Ground Root Shadow */}
        <ellipse cx="585" cy="855" rx="140" ry="24" fill="url(#groundShadow)" />

        {/* ========================================================= */}
        {/* 1. WEATHERED ROOTS & MAIN GNARLED TRUNK (Miki)            */}
        {/* ========================================================= */}
        <g id="tree-trunk-system">
          {/* Root Flare (Nebari) */}
          <path
            d="M 490 865 
               C 525 845, 545 810, 555 770
               C 560 740, 565 680, 558 630
               C 548 570, 532 525, 495 465
               C 475 435, 455 400, 442 360
               L 472 365
               C 490 405, 515 440, 540 480
               C 580 545, 605 615, 602 690
               C 600 745, 620 805, 665 835
               L 685 865
               C 645 860, 615 850, 585 850
               C 555 850, 525 858, 490 865 Z"
            fill="url(#trunkBarkDark)"
            stroke="#160E0A"
            strokeWidth="1.2"
          />

          {/* Ground Root Claws */}
          <path
            d="M 490 865 C 465 870, 440 872, 420 875 L 435 868 C 460 863, 480 855, 498 845 Z"
            fill="#231710"
          />
          <path
            d="M 665 835 C 695 850, 725 865, 755 870 L 740 862 C 715 852, 690 840, 672 830 Z"
            fill="#231710"
          />

          {/* Bark Fissure Contours (Natural Wood Grain) */}
          <path
            d="M 552 790 C 560 730, 558 670, 548 610 C 538 550, 520 500, 485 450"
            stroke="#160E0A"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.65"
          />
          <path
            d="M 570 805 C 578 745, 578 680, 572 620 C 564 560, 550 515, 522 470"
            stroke="#160E0A"
            strokeWidth="2.2"
            strokeLinecap="round"
            opacity="0.55"
          />
          <path
            d="M 535 770 C 540 710, 540 650, 530 590"
            stroke="url(#woodHighlight)"
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M 588 775 C 594 720, 592 660, 585 605"
            stroke="url(#woodHighlight)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* Bark Knot Hollow (Uro) */}
          <ellipse cx="550" cy="580" rx="9" ry="16" fill="#120A06" transform="rotate(-12 550 580)" />
          <path
            d="M 542 562 C 538 575, 540 592, 548 600"
            stroke="#7A5237"
            strokeWidth="1.8"
            fill="none"
          />
        </g>

        {/* ========================================================= */}
        {/* 2. PRIMARY BRANCHING SKELETON                             */}
        {/* ========================================================= */}
        {/* Branch 1: Lower Counterbalance Branch (Rightwards) */}
        <g id="lower-right-branch">
          <path
            d="M 585 530 
               C 625 520, 665 540, 705 535 
               C 725 532, 745 525, 760 515
               L 755 525
               C 735 538, 715 548, 690 550
               C 655 552, 620 540, 580 555 Z"
            fill="url(#branchBarkGrad)"
            stroke="#1A100B"
            strokeWidth="1"
          />
          {/* Sub-twig */}
          <path
            d="M 670 540 C 690 520, 715 510, 735 498"
            stroke="url(#branchBarkGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </g>

        {/* Dynamic Reaching Boughs (Swinging gently in breeze) */}
        <g className="animate-branch-breeze">
          {/* Branch 2: Major Reaching Bough (Arching high to the Left) */}
          <path
            d="M 460 380 
               C 420 360, 360 355, 305 340
               C 250 325, 195 295, 150 250
               C 135 235, 115 210, 95 180
               L 110 185
               C 130 215, 150 240, 172 258
               C 215 295, 265 320, 320 332
               C 370 342, 420 350, 465 370 Z"
            fill="url(#trunkBarkDark)"
            stroke="#160E0A"
            strokeWidth="1.2"
          />

          {/* Sub-bough 2A (Mid Left Extension towards Fuji) */}
          <path
            d="M 315 338 
               C 275 355, 230 380, 185 390
               C 150 398, 115 395, 80 385
               L 85 392
               C 120 405, 155 408, 195 398
               C 235 388, 275 365, 310 348 Z"
            fill="url(#branchBarkGrad)"
          />

          {/* Sub-bough 2B (Upper Tendril) */}
          <path
            d="M 210 280 C 190 240, 165 210, 135 175"
            stroke="url(#branchBarkGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 170 252 C 160 215, 140 185, 115 155"
            stroke="url(#branchBarkGrad)"
            strokeWidth="2.8"
            strokeLinecap="round"
          />

          {/* Branch 3: Crown Apex Bough (Reaching High into the Sky) */}
          <path
            d="M 450 365 
               C 435 310, 410 250, 370 195
               C 340 155, 295 120, 240 85
               L 252 82
               C 310 115, 355 155, 388 200
               C 425 252, 448 310, 462 360 Z"
            fill="url(#trunkBarkDark)"
            stroke="#160E0A"
            strokeWidth="1.2"
          />

          {/* Crown Branching Twigs */}
          <path
            d="M 370 205 C 385 160, 410 125, 445 90"
            stroke="url(#branchBarkGrad)"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path
            d="M 405 135 C 430 110, 460 95, 495 80"
            stroke="url(#branchBarkGrad)"
            strokeWidth="2.6"
            strokeLinecap="round"
          />
          <path
            d="M 320 145 C 290 110, 250 85, 205 60"
            stroke="url(#branchBarkGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M 285 200 C 255 175, 215 150, 175 130"
            stroke="url(#branchBarkGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* ========================================================= */}
        {/* 3. VOLUMETRIC BLOSSOM CANOPY CLUSTERS (桜の雲)             */}
        {/* ========================================================= */}
        {/* 
          Each cluster contains:
          1. Base deep plum shadow mass (depth & weight)
          2. Dense sakura pink body cloud
          3. Sunlit luminous highlight billows
          4. Delicate trailing flower sprays
        */}

        {/* --- CLUSTER A: Upper Left Canopy (Floating Above Mountain) --- */}
        <g id="blossom-cluster-a" className="animate-branch-breeze">
          {/* Shadow Under-layer */}
          <circle cx="130" cy="190" r="62" fill="url(#blossomShadow)" />
          <circle cx="85" cy="180" r="48" fill="url(#blossomShadow)" />
          <circle cx="170" cy="170" r="54" fill="url(#blossomShadow)" />

          {/* Midtone Bloom Masses */}
          <ellipse cx="135" cy="175" rx="72" ry="54" fill="url(#blossomMid)" />
          <ellipse cx="85" cy="170" rx="52" ry="42" fill="url(#blossomMid)" />
          <ellipse cx="180" cy="160" rx="58" ry="44" fill="url(#blossomMid)" />
          <ellipse cx="115" cy="135" rx="46" ry="36" fill="url(#blossomMid)" />

          {/* Luminous Highlight Billows */}
          <circle cx="125" cy="160" r="42" fill="url(#blossomLight)" />
          <circle cx="80" cy="155" r="32" fill="url(#blossomLight)" />
          <circle cx="165" cy="145" r="36" fill="url(#blossomLight)" />
          <circle cx="110" cy="125" r="28" fill="url(#blossomLight)" />
        </g>

        {/* --- CLUSTER B: Main Crown Apex (Top Center Canopy) --- */}
        <g id="blossom-cluster-b" className="animate-branch-breeze">
          {/* Shadow Under-layer */}
          <circle cx="280" cy="95" r="65" fill="url(#blossomShadow)" />
          <circle cx="360" cy="110" r="70" fill="url(#blossomShadow)" />
          <circle cx="440" cy="100" r="58" fill="url(#blossomShadow)" />

          {/* Midtone Bloom Masses */}
          <ellipse cx="275" cy="85" rx="75" ry="56" fill="url(#blossomMid)" />
          <ellipse cx="365" cy="95" rx="84" ry="62" fill="url(#blossomMid)" />
          <ellipse cx="445" cy="90" rx="66" ry="48" fill="url(#blossomMid)" />
          <ellipse cx="320" cy="55" rx="55" ry="40" fill="url(#blossomMid)" />
          <ellipse cx="400" cy="60" rx="50" ry="38" fill="url(#blossomMid)" />

          {/* Luminous Highlight Billows */}
          <circle cx="270" cy="72" r="44" fill="url(#blossomLight)" />
          <circle cx="355" cy="80" r="50" fill="url(#blossomLight)" />
          <circle cx="435" cy="75" r="38" fill="url(#blossomLight)" />
          <circle cx="315" cy="45" r="32" fill="url(#blossomLight)" />
          <circle cx="395" cy="50" r="30" fill="url(#blossomLight)" />
        </g>

        {/* --- CLUSTER C: Mid-Reaching Bough (Center-Left Canopy) --- */}
        <g id="blossom-cluster-c" className="animate-branch-breeze">
          {/* Shadow Under-layer */}
          <circle cx="140" cy="380" r="58" fill="url(#blossomShadow)" />
          <circle cx="205" cy="365" r="62" fill="url(#blossomShadow)" />
          <circle cx="275" cy="335" r="55" fill="url(#blossomShadow)" />

          {/* Midtone Bloom Masses */}
          <ellipse cx="135" cy="370" rx="68" ry="48" fill="url(#blossomMid)" />
          <ellipse cx="210" cy="355" rx="74" ry="52" fill="url(#blossomMid)" />
          <ellipse cx="280" cy="325" rx="65" ry="46" fill="url(#blossomMid)" />
          <ellipse cx="170" cy="340" rx="48" ry="36" fill="url(#blossomMid)" />

          {/* Luminous Highlight Billows */}
          <circle cx="128" cy="358" r="38" fill="url(#blossomLight)" />
          <circle cx="202" cy="342" r="42" fill="url(#blossomLight)" />
          <circle cx="272" cy="315" r="36" fill="url(#blossomLight)" />
        </g>

        {/* --- CLUSTER D: Lower Right Branch (Framing Edge) --- */}
        <g id="blossom-cluster-d">
          <circle cx="680" cy="525" r="52" fill="url(#blossomShadow)" />
          <circle cx="735" cy="510" r="44" fill="url(#blossomShadow)" />

          <ellipse cx="685" cy="515" rx="60" ry="44" fill="url(#blossomMid)" />
          <ellipse cx="738" cy="502" rx="50" ry="38" fill="url(#blossomMid)" />

          <circle cx="680" cy="505" r="35" fill="url(#blossomLight)" />
          <circle cx="732" cy="492" r="28" fill="url(#blossomLight)" />
        </g>

        {/* ========================================================= */}
        {/* 4. DETAILED SAKURA FLOWERS (Botanic Five-Petal Blooms)    */}
        {/* ========================================================= */}
        {[
          { cx: 125, cy: 155, r: 16, rot: 15 },
          { cx: 160, cy: 135, r: 14, rot: 40 },
          { cx: 80, cy: 165, r: 15, rot: -25 },
          { cx: 210, cy: 150, r: 13, rot: 60 },
          { cx: 260, cy: 75, r: 17, rot: 10 },
          { cx: 345, cy: 65, r: 18, rot: 35 },
          { cx: 420, cy: 70, r: 15, rot: -15 },
          { cx: 460, cy: 95, r: 13, rot: 50 },
          { cx: 130, cy: 360, r: 16, rot: 20 },
          { cx: 195, cy: 345, r: 17, rot: -30 },
          { cx: 265, cy: 320, r: 15, rot: 45 },
          { cx: 685, cy: 505, r: 15, rot: -10 },
          { cx: 725, cy: 495, r: 13, rot: 25 },
        ].map((f, idx) => (
          <g
            key={`sakura-flower-${idx}`}
            transform={`translate(${f.cx}, ${f.cy}) rotate(${f.rot})`}
            className="filter drop-shadow-[0_1px_2px_rgba(34,33,30,0.12)]"
          >
            {/* 5 Distinct Petals with Notched Tips */}
            {[0, 72, 144, 216, 288].map((angle, pi) => (
              <g key={pi} transform={`rotate(${angle})`}>
                <path
                  d={`M 0 0 
                     C -${f.r * 0.35} -${f.r * 0.45}, -${f.r * 0.45} -${f.r * 0.85}, -${f.r * 0.22} -${f.r}
                     C -${f.r * 0.08} -${f.r * 0.92}, ${f.r * 0.08} -${f.r * 0.92}, ${f.r * 0.22} -${f.r}
                     C ${f.r * 0.45} -${f.r * 0.85}, ${f.r * 0.35} -${f.r * 0.45}, 0 0 Z`}
                  fill="url(#singlePetalGrad)"
                  stroke="#E298A6"
                  strokeWidth="0.5"
                />
              </g>
            ))}

            {/* Floral Core Disc */}
            <circle cx="0" cy="0" r={f.r * 0.28} fill="#C24545" opacity="0.8" />
            <circle cx="0" cy="0" r={f.r * 0.16} fill="#E26D5C" />

            {/* Golden Stamens & Pistils */}
            {[0, 60, 120, 180, 240, 300].map((sAngle, si) => {
              const rad = (sAngle * Math.PI) / 180;
              const sx = Math.cos(rad) * (f.r * 0.38);
              const sy = Math.sin(rad) * (f.r * 0.38);
              return (
                <g key={si}>
                  <line
                    x1="0"
                    y1="0"
                    x2={sx}
                    y2={sy}
                    stroke="#8A3449"
                    strokeWidth="0.8"
                  />
                  <circle cx={sx} cy={sy} r={f.r * 0.08} fill="#C8A668" />
                </g>
              );
            })}
          </g>
        ))}

        {/* ========================================================= */}
        {/* 5. GENTLE FALLING PETALS DRIFTING IN SPRING BREEZE        */}
        {/* ========================================================= */}
        {[
          { x: 170, y: 260, delay: "0s", dur: "7s" },
          { x: 230, y: 390, delay: "2.5s", dur: "8s" },
          { x: 100, y: 410, delay: "4.2s", dur: "6.5s" },
          { x: 310, y: 160, delay: "1.2s", dur: "9s" },
          { x: 440, y: 180, delay: "3.6s", dur: "7.5s" },
        ].map((petal, pi) => (
          <g
            key={`falling-petal-${pi}`}
            transform={`translate(${petal.x}, ${petal.y})`}
            className="animate-petal-flutter"
            style={{
              animationDelay: petal.delay,
              animationDuration: petal.dur,
            }}
          >
            <path
              d="M 0 -8 C 5 -5, 6 -1, 3 4 C 0 8, -4 6, -5 2 C -6 -3, -3 -7, 0 -8 Z"
              fill="url(#singlePetalGrad)"
              opacity="0.9"
            />
          </g>
        ))}
      </svg>
    </div>
  );
};

export default RealJapaneseTree;
