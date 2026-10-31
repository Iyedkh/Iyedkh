import React from "react";

/**
 * MountFuji: Corrected Authentic Japanese Fuji-san (富士山)
 *
 * Improvements:
 * - Proper scale & horizon placement (serene background element, not overpowering the hero)
 * - Gentle, authentic sweeping hyperbolic slopes characteristic of Mount Fuji
 * - Natural, organic snow cap (Fuji Yuki) with feathered ravines and atmospheric shading
 * - Soft morning sun (Asahi / Hinomaru) radiating calm warmth behind the mountain shoulder
 * - Layered sumi-e ink wash gradients blending into ambient morning mist
 * - Delicate pine foothills grounding the base along the horizon
 */
const MountFuji = ({ className = "" }) => {
  return (
    <div className={`relative w-full h-full select-none pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 1440 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full object-bottom"
        preserveAspectRatio="xMidYMax meet"
      >
        <defs>
          {/* Morning Sun (Asahi) Radiant Gradient */}
          <radialGradient id="fujiSunAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#DE5D4E" stopOpacity="0.75" />
            <stop offset="40%" stopColor="#E28779" stopOpacity="0.45" />
            <stop offset="75%" stopColor="#EFA882" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#F6F2EB" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="fujiSunDisc" cx="45%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#EA6B5A" />
            <stop offset="70%" stopColor="#D95343" />
            <stop offset="100%" stopColor="#C44333" />
          </radialGradient>

          {/* Sumi-e Mountain Cone Gradients (Soft Japandi Ink Wash) */}
          <linearGradient id="fujiSumiEast" x1="15%" y1="10%" x2="85%" y2="90%">
            <stop offset="0%" stopColor="#3C424E" stopOpacity="0.9" />
            <stop offset="45%" stopColor="#2D323C" stopOpacity="0.88" />
            <stop offset="85%" stopColor="#1E2128" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#17191F" stopOpacity="0.8" />
          </linearGradient>

          <linearGradient id="fujiSumiWest" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#252A34" stopOpacity="0.7" />
            <stop offset="60%" stopColor="#1B1E26" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#13151A" stopOpacity="0.8" />
          </linearGradient>

          {/* Realistic Snow Cap (Fuji Yuki) */}
          <linearGradient id="snowEastHighlight" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="40%" stopColor="#FBF4F6" />
            <stop offset="75%" stopColor="#F0E2E7" />
            <stop offset="100%" stopColor="#D9E0EB" />
          </linearGradient>

          <linearGradient id="snowWestShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2E8F0" />
            <stop offset="60%" stopColor="#CAD5E2" />
            <stop offset="100%" stopColor="#B4C2D1" />
          </linearGradient>

          {/* Foothill Ridge Gradients */}
          <linearGradient id="fujiFoothill1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#353D47" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#22272E" stopOpacity="0.7" />
          </linearGradient>

          <linearGradient id="fujiFoothill2" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#29332D" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#1B221E" stopOpacity="0.88" />
          </linearGradient>

          {/* Horizon Base Mist Fader (Seamless blend into rice paper) */}
          <linearGradient id="horizonMistBlend" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#F6F2EB" stopOpacity="0.95" />
            <stop offset="45%" stopColor="#F6F2EB" stopOpacity="0.65" />
            <stop offset="100%" stopColor="#F6F2EB" stopOpacity="0" />
          </linearGradient>

          {/* Morning light washing the sun-facing (left) slope */}
          <linearGradient id="fujiSunKiss" x1="0" y1="128" x2="0" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F2C4B4" stopOpacity="0.32" />
            <stop offset="45%" stopColor="#D9A08F" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#D9A08F" stopOpacity="0" />
          </linearGradient>

          {/* Atmospheric perspective: the base dissolves into warm haze */}
          <linearGradient id="fujiAtmosHaze" x1="0" y1="128" x2="0" y2="480" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#F6F2EB" stopOpacity="0" />
            <stop offset="50%" stopColor="#EFE7DC" stopOpacity="0.16" />
            <stop offset="100%" stopColor="#F6F2EB" stopOpacity="0.6" />
          </linearGradient>

          {/* Far range haze */}
          <linearGradient id="fujiFarRange" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8D94A0" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#8D94A0" stopOpacity="0.04" />
          </linearGradient>

          {/* Soft mist band */}
          <radialGradient id="fujiMistBand" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F8F4EE" stopOpacity="0.95" />
            <stop offset="60%" stopColor="#F6F2EB" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#F6F2EB" stopOpacity="0" />
          </radialGradient>

          {/* Feathered shadow beneath the snow line */}
          <filter id="fujiSoftBlur" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* ========================================================= */}
        {/* 1. MORNING SUN (ASAHI) - Rising Gently Behind Fuji        */}
        {/* ========================================================= */}
        <g className="animate-sun-radiance">
          {/* Soft Diffuse Solar Aura */}
          <circle cx="620" cy="180" r="160" fill="url(#fujiSunAura)" />
          {/* Golden Dawn Rim Ring */}
          <circle
            cx="620"
            cy="180"
            r="185"
            stroke="#E28779"
            strokeWidth="0.75"
            strokeOpacity="0.25"
            fill="none"
          />
          {/* Hinomaru Sun Disc */}
          <circle
            cx="620"
            cy="180"
            r="78"
            fill="url(#fujiSunDisc)"
            fillOpacity="0.65"
          />
        </g>

        {/* Farthest ridgelines, fading into morning haze */}
        <path
          d="M 0 432 L 90 398 L 170 418 L 260 384 L 350 410 L 430 392 L 520 420 L 900 418 L 980 386 L 1070 404 L 1160 372 L 1250 398 L 1340 380 L 1440 402 L 1440 480 L 0 480 Z"
          fill="url(#fujiFarRange)"
        />

        {/* Distant Mountain Range (Atmospheric Horizon Depth) */}
        <path
          d="M 0 450 Q 180 410 360 425 T 720 415 T 1080 430 T 1440 445 L 1440 520 L 0 520 Z"
          fill="#3C434F"
          fillOpacity="0.18"
        />

        {/* ========================================================= */}
        {/* 2. MOUNT FUJI CONICAL BODY (Authentic Hyperbolic Slopes)  */}
        {/* ========================================================= */}
        {/*
          Mount Fuji Slope Geometry:
          Summit Caldera: left rim (575, 128), crater notch (610, 133), right rim (648, 126)
          Left slope flaring down gracefully to (160, 480)
          Right slope flaring down gracefully to (1060, 480)
        */}
        <path
          d="M 575 128
             C 530 195, 415 325, 160 480
             L 1060 480
             C 805 325, 690 195, 648 126
             Q 610 133, 575 128 Z"
          fill="url(#fujiSumiEast)"
        />

        {/* Western Shadow Half (Natural 3D Volcanic Relief) */}
        <path
          d="M 610 133
             C 645 205, 690 295, 750 375
             C 815 435, 930 465, 1060 480
             L 615 480 Z"
          fill="url(#fujiSumiWest)"
        />

        {/* Volcanic Ridge Striations (Subtle Sumi-e Texture down slopes) */}
        <path
          d="M 595 190 C 580 260, 530 355, 460 440"
          stroke="#1F232B"
          strokeWidth="1.8"
          strokeOpacity="0.3"
          strokeLinecap="round"
        />
        <path
          d="M 612 195 C 608 270, 580 360, 540 445"
          stroke="#1F232B"
          strokeWidth="1.4"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />
        <path
          d="M 630 195 C 638 270, 665 360, 710 445"
          stroke="#12141A"
          strokeWidth="1.6"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />
        <path
          d="M 645 190 C 660 260, 715 355, 785 440"
          stroke="#12141A"
          strokeWidth="2"
          strokeOpacity="0.35"
          strokeLinecap="round"
        />

        {/* Additional fine sumi-e brushwork for volcanic texture */}
        <g strokeLinecap="round" fill="none">
          <path d="M 585 230 C 560 300, 500 380, 400 455" stroke="#1F232B" strokeWidth="0.9" strokeOpacity="0.18" />
          <path d="M 603 240 C 596 320, 565 400, 505 462" stroke="#1F232B" strokeWidth="0.7" strokeOpacity="0.15" />
          <path d="M 620 250 C 622 330, 615 400, 600 466" stroke="#12141A" strokeWidth="0.8" strokeOpacity="0.2" />
          <path d="M 640 240 C 655 320, 690 395, 760 458" stroke="#12141A" strokeWidth="1" strokeOpacity="0.24" />
          <path d="M 660 230 C 690 300, 760 380, 860 450" stroke="#12141A" strokeWidth="0.9" strokeOpacity="0.2" />
          <path d="M 568 215 C 530 280, 455 360, 330 450" stroke="#2A2F38" strokeWidth="0.7" strokeOpacity="0.14" />
        </g>

        {/* Warm morning light on the sun-facing slope */}
        <path
          d="M 575 128 C 530 195, 415 325, 160 480 L 560 480 C 585 380, 600 260, 610 133 Z"
          fill="url(#fujiSunKiss)"
        />

        {/* Backlit silhouette rims */}
        <path
          d="M 575 128 C 530 195, 415 325, 160 480"
          stroke="#F3D9DF"
          strokeWidth="1.2"
          strokeOpacity="0.4"
          strokeLinecap="round"
        />
        <path
          d="M 648 126 C 690 195, 805 325, 1060 480"
          stroke="#0E1014"
          strokeWidth="1.4"
          strokeOpacity="0.25"
          strokeLinecap="round"
        />

        {/* Feathered shadow cast by the snow mantle */}
        <path
          d="M 522 216 C 532 228, 540 222, 546 240 C 553 226, 561 236, 569 258 C 577 238, 586 246, 593 274 C 601 244, 609 251, 617 286 C 626 248, 635 256, 643 278 C 651 241, 659 248, 667 266 C 675 234, 683 241, 691 254 C 699 226, 707 221, 713 216"
          stroke="#0E1014"
          strokeWidth="5"
          strokeOpacity="0.28"
          fill="none"
          filter="url(#fujiSoftBlur)"
        />

        {/* ========================================================= */}
        {/* 3. REFINED NATURAL SNOW CAP (Fuji Yuki)                   */}
        {/* ========================================================= */}
        {/*
          Graceful, organic snow ravines following actual Mount Fuji topology:
          Cascading snow tongues with natural tapering instead of cartoon spikes
        */}
        <g>
          {/* Main Snow Mantle */}
          <path
            d="M 575 128
               C 555 158, 532 192, 518 212
               C 528 226, 538 218, 545 235
               C 552 220, 560 230, 568 252
               C 576 232, 585 240, 592 268
               C 600 238, 608 245, 616 280
               C 625 242, 634 250, 642 272
               C 650 235, 658 242, 666 260
               C 674 228, 682 235, 690 248
               C 698 220, 706 215, 712 210
               C 690 185, 670 152, 648 126
               Q 610 133, 575 128 Z"
            fill="url(#snowEastHighlight)"
          />

          {/* Western Snow Crevasse Shadow (Cool Slate/Lavender Depth) */}
          <path
            d="M 610 133
               C 616 280, 625 242, 634 250
               C 642 272, 650 235, 658 242
               C 666 260, 674 228, 682 235
               C 690 248, 698 220, 706 215
               C 712 210, 690 185, 670 152
               L 648 126
               Q 628 131, 610 133 Z"
            fill="url(#snowWestShadow)"
            fillOpacity="0.65"
          />

          {/* Glacial Ravine Crevasse Streams (Osawa Kuzure snow lines) */}
          <path
            d="M 592 268 C 594 290, 595 310, 596 325
               M 616 280 C 618 305, 619 330, 620 348
               M 642 272 C 644 295, 646 318, 647 332
               M 666 260 C 668 280, 670 300, 672 315"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeOpacity="0.75"
            strokeLinecap="round"
          />

          {/* Lingering snow in the upper gullies */}
          <g fill="#F4EEF0" fillOpacity="0.55">
            <path d="M 560 262 C 556 280, 552 296, 546 312 C 552 300, 558 284, 563 266 Z" />
            <path d="M 582 288 C 580 306, 577 322, 573 338 C 579 324, 583 306, 585 290 Z" />
            <path d="M 606 300 C 606 322, 605 342, 603 360 C 608 342, 610 322, 609 302 Z" />
            <path d="M 632 292 C 634 312, 636 330, 640 346 C 640 328, 637 310, 635 293 Z" />
            <path d="M 656 280 C 660 298, 665 314, 672 328 C 670 312, 664 296, 659 281 Z" />
            <path d="M 682 262 C 690 278, 698 292, 708 304 C 702 290, 694 276, 685 263 Z" />
          </g>
          <g fill="#FFFFFF" fillOpacity="0.8">
            <circle cx="548" cy="244" r="1.2" />
            <circle cx="596" cy="285" r="1" />
            <circle cx="651" cy="262" r="1.1" />
            <circle cx="697" cy="236" r="0.9" />
          </g>

          {/* Summit Rim Glow Line */}
          <path
            d="M 575 128 Q 610 133, 648 126"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeOpacity="0.9"
            strokeLinecap="round"
          />
        </g>

        {/* Atmospheric perspective over the whole cone */}
        <path
          d="M 575 128
             C 530 195, 415 325, 160 480
             L 1060 480
             C 805 325, 690 195, 648 126
             Q 610 133, 575 128 Z"
          fill="url(#fujiAtmosHaze)"
        />

        {/* Drifting mist bands wrapping the mid-slopes */}
        <g className="animate-cloud-bob-1">
          <ellipse cx="470" cy="388" rx="230" ry="16" fill="url(#fujiMistBand)" opacity="0.75" />
          <ellipse cx="800" cy="372" rx="190" ry="12" fill="url(#fujiMistBand)" opacity="0.6" />
        </g>
        <g className="animate-cloud-bob-2">
          <ellipse cx="640" cy="428" rx="360" ry="20" fill="url(#fujiMistBand)" opacity="0.85" />
        </g>

        {/* ========================================================= */}
        {/* 4. BASE FOOTHILLS & JAPANESE PINE TREELINE (Matsu)        */}
        {/* ========================================================= */}
        {/* Mid-ground Rolling Foothills */}
        <path
          d="M 0 450 Q 240 420 480 435 T 960 425 T 1440 445 L 1440 520 L 0 520 Z"
          fill="url(#fujiFoothill1)"
        />

        {/* Near Foothill Ridge */}
        <path
          d="M 0 468 Q 200 442 400 458 T 800 448 T 1200 460 T 1440 472 L 1440 520 L 0 520 Z"
          fill="url(#fujiFoothill2)"
        />

        {/* Delicate Pine Silhouettes (Matsu treeline along the ridge) */}
        {[
          { x: 120, y: 455, s: 0.8 },
          { x: 155, y: 450, s: 1.0 },
          { x: 190, y: 446, s: 0.9 },
          { x: 235, y: 444, s: 1.1 },
          { x: 275, y: 447, s: 0.85 },
          { x: 320, y: 452, s: 1.0 },
          { x: 680, y: 442, s: 0.95 },
          { x: 715, y: 444, s: 1.1 },
          { x: 755, y: 447, s: 0.85 },
          { x: 795, y: 450, s: 1.0 },
          { x: 880, y: 452, s: 0.9 },
          { x: 920, y: 454, s: 1.1 },
        ].map((tree, i) => (
          <g
            key={i}
            transform={`translate(${tree.x}, ${tree.y}) scale(${tree.s * 0.65})`}
            fill="#141A16"
          >
            <path d="M 0 -16 L 5 -7 L 2.5 -7 L 7 0 L 3.5 0 L 8.5 8 L -8.5 8 L -3.5 0 L -7 0 L -2.5 -7 L -5 -7 Z" />
            <rect x="-1" y="8" width="2" height="4" fill="#141A16" />
          </g>
        ))}

        {/* Seamless Horizon Mist Wash (Gently blends into Torinoko paper) */}
        <rect x="0" y="440" width="1440" height="80" fill="url(#horizonMistBlend)" />
      </svg>
    </div>
  );
};

export default MountFuji;
