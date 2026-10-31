import React from "react";

/**
 * MovingClouds: Atmospheric Multi-Layered Animated Cloud System
 *
 * Layers:
 * 1. High Sky Drifting Cumulus (Gentle puffy clouds floating across the summit)
 * 2. Traditional Japanese Kumogata (Classic scalloped mist ribbons floating across Fuji's waist)
 * 3. Low Horizon Valley Mist (Wispy ground mist floating above foothills)
 *
 * Features:
 * - 100% seamless infinite looping tracks (no popping, no restart jumps)
 * - Multi-speed parallax depths (80s, 55s, 38s)
 * - Organic vertical bobbing (buoyancy)
 * - Respects prefers-reduced-motion
 */
const MovingClouds = ({ className = "" }) => {
  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none ${className}`}
    >
      {/* ========================================================= */}
      {/* LAYER 1: HIGH SKY CUMULUS & CIRRUS CLOUDS (High Elevation) */}
      {/* ========================================================= */}
      <div className="mist-fade absolute top-6 left-0 w-full h-44 overflow-hidden opacity-55 [filter:drop-shadow(0_8px_10px_rgba(166,133,80,0.10))]">
        <div className="flex w-[200%] h-full animate-cloud-track-slow">
          {/* Track Segment A */}
          <div className="w-1/2 h-full relative shrink-0 animate-cloud-bob-1">
            <svg
              viewBox="0 0 1000 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="highCloudGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#F8F3EC" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#EBE3D5" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Cloud Formation 1 */}
              <g fill="url(#highCloudGrad)">
                <path d="M 120 70 Q 150 40 190 50 Q 230 30 280 55 Q 320 45 350 70 Q 370 95 340 110 Q 240 120 130 105 Q 100 90 120 70 Z" />
                <ellipse cx="235" cy="65" rx="50" ry="26" />
                <ellipse cx="185" cy="75" rx="38" ry="20" />
                <ellipse cx="295" cy="78" rx="42" ry="22" />
              </g>

              {/* Cloud Formation 2 */}
              <g fill="url(#highCloudGrad)" transform="translate(540, -10)">
                <path d="M 80 80 Q 110 55 150 65 Q 190 45 240 70 Q 275 60 305 85 Q 320 105 295 120 Q 200 125 90 110 Q 70 95 80 80 Z" />
                <ellipse cx="195" cy="80" rx="46" ry="24" />
                <ellipse cx="145" cy="88" rx="35" ry="18" />
              </g>
            </svg>
          </div>

          {/* Track Segment B (Identical clone for seamless looping) */}
          <div className="w-1/2 h-full relative shrink-0 animate-cloud-bob-1">
            <svg
              viewBox="0 0 1000 160"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g fill="url(#highCloudGrad)">
                <path d="M 120 70 Q 150 40 190 50 Q 230 30 280 55 Q 320 45 350 70 Q 370 95 340 110 Q 240 120 130 105 Q 100 90 120 70 Z" />
                <ellipse cx="235" cy="65" rx="50" ry="26" />
                <ellipse cx="185" cy="75" rx="38" ry="20" />
                <ellipse cx="295" cy="78" rx="42" ry="22" />
              </g>
              <g fill="url(#highCloudGrad)" transform="translate(540, -10)">
                <path d="M 80 80 Q 110 55 150 65 Q 190 45 240 70 Q 275 60 305 85 Q 320 105 295 120 Q 200 125 90 110 Q 70 95 80 80 Z" />
                <ellipse cx="195" cy="80" rx="46" ry="24" />
                <ellipse cx="145" cy="88" rx="35" ry="18" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* LAYER 2: TRADITIONAL JAPANESE KUMOGATA (Waist Mist Ribbon) */}
      {/* ========================================================= */}
      {/* Floating across Mount Fuji's midsection (approx. 40%-65% down) */}
      <div className="mist-fade absolute top-[32%] sm:top-[36%] left-0 w-full h-40 overflow-hidden opacity-65 [filter:drop-shadow(0_10px_12px_rgba(140,103,71,0.10))]">
        <div className="flex w-[200%] h-full animate-cloud-track-mid">
          {/* Track Segment A */}
          <div className="w-1/2 h-full relative shrink-0 animate-cloud-bob-2">
            <svg
              viewBox="0 0 1200 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="kumogataGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.82" />
                  <stop offset="65%" stopColor="#F6F2EB" stopOpacity="0.75" />
                  <stop offset="100%" stopColor="#EBE3D5" stopOpacity="0.1" />
                </linearGradient>

                <linearGradient id="kumogataGoldTint" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D48D9B" stopOpacity="0.25" />
                  <stop offset="50%" stopColor="#A68550" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#D48D9B" stopOpacity="0.25" />
                </linearGradient>
              </defs>

              {/* Traditional Scalloped Yamato-e Cloud Ribbon 1 */}
              <g fill="url(#kumogataGrad)" stroke="#22211E" strokeOpacity="0.04" strokeWidth="0.5">
                <path
                  d="M 60 70 
                     C 75 50, 110 50, 125 70
                     C 145 42, 195 42, 215 70
                     C 235 48, 280 48, 298 70
                     C 315 55, 355 55, 370 70
                     L 430 70
                     C 445 85, 435 105, 410 105
                     L 80 105
                     C 55 105, 45 85, 60 70 Z"
                />
                {/* Internal Kumogata Line Swirls */}
                <path
                  d="M 125 70 C 145 90, 185 90, 205 70"
                  stroke="url(#kumogataGoldTint)"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M 215 70 C 235 90, 275 90, 295 70"
                  stroke="url(#kumogataGoldTint)"
                  strokeWidth="1.2"
                  fill="none"
                />
              </g>

              {/* Traditional Scalloped Yamato-e Cloud Ribbon 2 */}
              <g
                fill="url(#kumogataGrad)"
                stroke="#22211E"
                strokeOpacity="0.04"
                strokeWidth="0.5"
                transform="translate(620, -15)"
              >
                <path
                  d="M 80 65 
                     C 95 45, 130 45, 145 65
                     C 165 38, 220 38, 240 65
                     C 260 40, 315 40, 335 65
                     C 350 48, 395 48, 410 65
                     L 470 65
                     C 485 82, 475 98, 450 98
                     L 100 98
                     C 75 98, 68 80, 80 65 Z"
                />
                <path
                  d="M 145 65 C 168 85, 210 85, 230 65"
                  stroke="url(#kumogataGoldTint)"
                  strokeWidth="1.2"
                  fill="none"
                />
              </g>
            </svg>
          </div>

          {/* Track Segment B (Identical clone) */}
          <div className="w-1/2 h-full relative shrink-0 animate-cloud-bob-2">
            <svg
              viewBox="0 0 1200 140"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <g fill="url(#kumogataGrad)" stroke="#22211E" strokeOpacity="0.04" strokeWidth="0.5">
                <path
                  d="M 60 70 
                     C 75 50, 110 50, 125 70
                     C 145 42, 195 42, 215 70
                     C 235 48, 280 48, 298 70
                     C 315 55, 355 55, 370 70
                     L 430 70
                     C 445 85, 435 105, 410 105
                     L 80 105
                     C 55 105, 45 85, 60 70 Z"
                />
                <path
                  d="M 125 70 C 145 90, 185 90, 205 70"
                  stroke="url(#kumogataGoldTint)"
                  strokeWidth="1.2"
                  fill="none"
                />
                <path
                  d="M 215 70 C 235 90, 275 90, 295 70"
                  stroke="url(#kumogataGoldTint)"
                  strokeWidth="1.2"
                  fill="none"
                />
              </g>
              <g
                fill="url(#kumogataGrad)"
                stroke="#22211E"
                strokeOpacity="0.04"
                strokeWidth="0.5"
                transform="translate(620, -15)"
              >
                <path
                  d="M 80 65 
                     C 95 45, 130 45, 145 65
                     C 165 38, 220 38, 240 65
                     C 260 40, 315 40, 335 65
                     C 350 48, 395 48, 410 65
                     L 470 65
                     C 485 82, 475 98, 450 98
                     L 100 98
                     C 75 98, 68 80, 80 65 Z"
                />
                <path
                  d="M 145 65 C 168 85, 210 85, 230 65"
                  stroke="url(#kumogataGoldTint)"
                  strokeWidth="1.2"
                  fill="none"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* LAYER 3: LOW VALLEY MIST & DRIFTING HORIZON CLOUDS        */}
      {/* ========================================================= */}
      <div className="mist-fade absolute bottom-6 sm:bottom-12 left-0 w-full h-32 overflow-hidden opacity-50">
        <div className="flex w-[200%] h-full animate-cloud-track-fast">
          {/* Track Segment A */}
          <div className="w-1/2 h-full relative shrink-0">
            <svg
              viewBox="0 0 1000 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <defs>
                <linearGradient id="valleyMistGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.7" />
                  <stop offset="60%" stopColor="#F6F2EB" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#F6F2EB" stopOpacity="0" />
                </linearGradient>
              </defs>

              <path
                d="M 50 60 Q 120 40 220 50 Q 340 30 460 55 Q 560 40 680 60 Q 780 45 880 65 L 880 100 L 50 100 Z"
                fill="url(#valleyMistGrad)"
              />
              <path
                d="M 300 70 Q 400 50 520 62 Q 620 45 740 68 L 740 100 L 300 100 Z"
                fill="url(#valleyMistGrad)"
                opacity="0.6"
              />
            </svg>
          </div>

          {/* Track Segment B (Identical clone) */}
          <div className="w-1/2 h-full relative shrink-0">
            <svg
              viewBox="0 0 1000 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M 50 60 Q 120 40 220 50 Q 340 30 460 55 Q 560 40 680 60 Q 780 45 880 65 L 880 100 L 50 100 Z"
                fill="url(#valleyMistGrad)"
              />
              <path
                d="M 300 70 Q 400 50 520 62 Q 620 45 740 68 L 740 100 L 300 100 Z"
                fill="url(#valleyMistGrad)"
                opacity="0.6"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingClouds;
