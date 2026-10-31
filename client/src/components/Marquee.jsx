import React from "react";

const DEFAULT_ITEMS = [
  "Full Stack Engineering",
  "匠",
  "Business Intelligence",
  "道",
  "MERN Architecture",
  "和",
  "Data Storytelling",
  "静",
  "SaaS Systems",
  "侘寂",
];

/**
 * Marquee: endless editorial ticker. Kanji glyphs become sakura-coloured separators.
 */
const Marquee = ({ items = DEFAULT_ITEMS, reverse = false, outline = false }) => {
  const sequence = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="marquee relative overflow-hidden border-y border-[#22211E]/10 bg-[#EBE3D5]/50 py-5 sm:py-6 select-none [mask-image:linear-gradient(90deg,transparent,#000_8%,#000_92%,transparent)]"
    >
      <div className={`marquee-track ${reverse ? "reverse" : ""}`}>
        {sequence.map((item, i) => {
          const isKanji = /[぀-鿿]/.test(item);
          return (
            <span key={i} className="flex items-center shrink-0 px-6 sm:px-10">
              {isKanji ? (
                <span className="font-kanji text-xl sm:text-2xl text-[#D48D9B]">{item}</span>
              ) : (
                <span
                  className={`font-editorial text-3xl sm:text-5xl tracking-[-0.02em] whitespace-nowrap ${
                    outline ? "text-outline italic" : "text-[#22211E]"
                  }`}
                >
                  {item}
                </span>
              )}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
