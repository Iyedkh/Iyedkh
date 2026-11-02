import React, { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import SectionHeader from "./SectionHeader";

const EASE_OUT = [0.23, 1, 0.32, 1];
const STEP_KANJI = ["察", "設", "築", "測"];

const defaultSteps = [
  {
    number: "01",
    title: "Understand the problem",
    subtitle: "Contextual Discovery & Constraint Mapping",
    desc: "Deconstruct business requirements and user friction before writing a line of code. Map data models, user flows, edge cases, and architectural constraints.",
  },
  {
    number: "02",
    title: "Design the architecture",
    subtitle: "System Modeling & Component Hierarchy",
    desc: "Establish clean state boundaries, normalized databases, RESTful endpoint schemas, and modular component contracts. Ensure maintainability before execution.",
  },
  {
    number: "03",
    title: "Build with precision",
    subtitle: "Full-Stack Implementation & Ergonomics",
    desc: "Develop with strict typing, clean separation of concerns, ergonomic microinteractions, responsive breakpoints, and resilient error recovery.",
  },
  {
    number: "04",
    title: "Measure, improve, and iterate",
    subtitle: "Analytics & Production Hardening",
    desc: "Inspect real-world telemetry, query latency, user engagement drop-offs, and data pipelines to continuously refine speed and product value.",
  },
];

/* ------------------------------------------------------------------ */
/* Emblems: one ink drawing per phase, stroked in as the phase arrives */
/* ------------------------------------------------------------------ */

// Each stroke draws in order; `on` says whether this phase is on stage
const Stroke = ({ on, i = 0, still, ...props }) => (
  <motion.path
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    initial={still ? false : { pathLength: 0, opacity: 0 }}
    animate={on ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
    transition={
      on
        ? { pathLength: { duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.65, 0, 0.35, 1] }, opacity: { duration: 0.2, delay: 0.15 + i * 0.12 } }
        : { duration: 0.2 }
    }
    {...props}
  />
);

const Dot = ({ on, i = 0, still, ...props }) => (
  <motion.circle
    initial={still ? false : { scale: 0.4, opacity: 0 }}
    animate={on ? { scale: 1, opacity: 1 } : { scale: 0.4, opacity: 0 }}
    transition={on ? { duration: 0.35, delay: 0.5 + i * 0.1, ease: EASE_OUT } : { duration: 0.15 }}
    style={{ transformBox: "fill-box", transformOrigin: "center" }}
    {...props}
  />
);

const Emblem = ({ index, on, still = false, className = "" }) => {
  const s = { on, still };
  const scenes = [
    // 01 Understand: a lens finding the points that matter
    <>
      <Stroke {...s} i={0} d="M105 50 a55 55 0 1 1 -0.1 0" strokeWidth="2.2" className="text-ink" />
      <Stroke {...s} i={1} d="M145 145 L196 196" strokeWidth="5" className="text-ink" />
      <Stroke {...s} i={2} d="M72 112 C 88 92, 104 128, 120 104 S 140 96, 142 100" strokeWidth="1.4" strokeDasharray="3 5" className="text-gold" />
      <Dot {...s} i={0} cx="72" cy="112" r="4" className="fill-sakura" />
      <Dot {...s} i={1} cx="104" cy="118" r="3" className="fill-gold" />
      <Dot {...s} i={2} cx="132" cy="96" r="4.5" className="fill-hanko" />
    </>,
    // 02 Design: a blueprint of connected modules
    <>
      <Stroke {...s} i={0} d="M40 60 H200 M40 120 H200 M40 180 H200 M60 40 V200 M120 40 V200 M180 40 V200" strokeWidth="0.8" className="text-ink/25" />
      <Stroke {...s} i={1} d="M96 44 h48 v32 h-48 z" strokeWidth="2" className="text-ink" />
      <Stroke {...s} i={2} d="M44 154 h48 v32 h-48 z M148 154 h48 v32 h-48 z" strokeWidth="2" className="text-ink" />
      <Stroke {...s} i={3} d="M120 76 V116 M68 154 V116 H172 V154" strokeWidth="1.6" className="text-gold" />
      <Dot {...s} i={0} cx="120" cy="116" r="4" className="fill-sakura" />
    </>,
    // 03 Build: blocks laid course by course on a brushed base
    <>
      <Stroke {...s} i={0} d="M34 198 C 80 192, 160 202, 206 196" strokeWidth="3" className="text-ink" />
      <Stroke {...s} i={1} d="M54 192 h56 v-34 h-56 z M130 192 h56 v-34 h-56 z" strokeWidth="2" className="text-ink" />
      <Stroke {...s} i={2} d="M90 158 h60 v-34 h-60 z" strokeWidth="2" className="text-ink" />
      <Stroke {...s} i={3} d="M104 124 h32 v-30 h-32 z" strokeWidth="2" className="text-sakura" />
      <Stroke {...s} i={4} d="M120 94 V58 M108 66 L120 54 L132 66" strokeWidth="1.6" className="text-gold" />
    </>,
    // 04 Measure: a chart that climbs, then loops back to the start
    <>
      <Stroke {...s} i={0} d="M44 40 V196 H204" strokeWidth="1.6" className="text-ink/50" />
      <Stroke {...s} i={1} d="M52 176 L88 150 L118 160 L150 112 L188 70" strokeWidth="2.4" className="text-ink" />
      <Stroke {...s} i={2} d="M176 66 L190 68 L188 82" strokeWidth="2.4" className="text-ink" />
      <Stroke {...s} i={3} d="M188 96 C 214 140, 170 214, 96 204" strokeWidth="1.4" strokeDasharray="3 5" className="text-gold" />
      <Dot {...s} i={0} cx="88" cy="150" r="3.5" className="fill-gold" />
      <Dot {...s} i={1} cx="150" cy="112" r="3.5" className="fill-gold" />
      <Dot {...s} i={2} cx="188" cy="70" r="5" className="fill-hanko" />
    </>,
  ];

  return (
    <svg viewBox="0 0 240 240" aria-hidden="true" className={className}>
      {scenes[index % scenes.length]}
    </svg>
  );
};

/* ------------------------------------------------------------------ */
/* Desktop: a pinned stage that scroll plays through, phase by phase   */
/* ------------------------------------------------------------------ */

const CinematicSteps = ({ steps, phaseLabel }) => {
  const pinRef = useRef(null);
  const [active, setActive] = useState(0);
  const n = steps.length;

  const { scrollYProgress } = useScroll({ target: pinRef, offset: ["start start", "end end"] });
  const kanjiY = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const kanjiRotate = useTransform(scrollYProgress, [0, 1], [-4, 4]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const next = Math.min(n - 1, Math.max(0, Math.floor(v * n)));
    setActive((prev) => (prev === next ? prev : next));
  });

  // Clicking a phase scrolls to the middle of its stretch of the pin
  const goTo = (i) => {
    const el = pinRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    const travel = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: top + ((i + 0.5) / n) * travel, behavior: "smooth" });
  };

  return (
    <div ref={pinRef} className="relative" style={{ height: `${100 + n * 70}svh` }}>
      <div className="sticky top-0 flex h-svh items-center overflow-hidden">
        {/* Phase kanji, drifting behind the stage */}
        <motion.div
          aria-hidden="true"
          style={{ y: kanjiY, rotate: kanjiRotate }}
          className="pointer-events-none absolute inset-y-0 end-[-4%] flex items-center"
        >
          <div className="grid">
            {STEP_KANJI.slice(0, n).map((k, i) => (
              <motion.span
                key={k}
                animate={{ opacity: i === active ? 1 : 0, scale: i === active ? 1 : 1.06 }}
                transition={{ duration: 0.6, ease: EASE_OUT }}
                className="ghost-kanji [grid-area:1/1] text-[22rem] xl:text-[28rem]"
              >
                {k}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <div className="relative mx-auto grid w-full max-w-7xl grid-cols-12 items-center gap-10 px-12 xl:px-20">
          {/* Stage: odometer numeral with the phase's ink drawing on top */}
          <div className="relative col-span-6 mx-auto flex aspect-square w-full max-w-[34rem] max-h-[64svh] items-center justify-center">
            <span className="absolute inset-[6%] rounded-full border border-ink/10" />
            <span className="absolute inset-[6%] rounded-full border border-dashed border-gold/30 animate-[spin_120s_linear_infinite]" />
            <span className="absolute inset-[18%] rounded-full bg-gradient-to-br from-sakura/10 via-transparent to-gold/10 blur-2xl" />

            <div aria-hidden="true" className="absolute inset-0 grid place-items-center overflow-hidden">
              {steps.map((step, i) => (
                <motion.span
                  key={step.number}
                  initial={false}
                  animate={{ y: i === active ? "0%" : i < active ? "-60%" : "60%", opacity: i === active ? 1 : 0 }}
                  transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
                  className="card-ordinal [grid-area:1/1] text-[15rem] xl:text-[19rem]"
                >
                  {step.number}
                </motion.span>
              ))}
            </div>

            <div className="relative grid h-[62%] w-[62%] place-items-center">
              {steps.map((step, i) => (
                <Emblem key={step.number} index={i} on={i === active} className="[grid-area:1/1] h-full w-full overflow-visible" />
              ))}
            </div>
          </div>

          {/* Script: the active phase's words, everything else waits off-stage */}
          <div className="col-span-6 ps-6">
            <div className="mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.2em] text-ink-soft">
              <span className="text-gold">{phaseLabel}</span>
              <span className="relative inline-block h-[1.2em] w-[2ch] overflow-hidden text-ink">
                {steps.map((step, i) => (
                  <motion.span
                    key={step.number}
                    initial={false}
                    animate={{ y: i === active ? "0%" : i < active ? "-110%" : "110%" }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                    className="absolute inset-0"
                  >
                    {step.number}
                  </motion.span>
                ))}
              </span>
              <span className="h-px w-10 bg-ink/20" />
              <span>{String(n).padStart(2, "0")}</span>
            </div>

            <div className="grid">
              {steps.map((step, i) => {
                const isActive = i === active;
                const away = i < active ? -24 : 24;
                const part = (delay) => ({
                  initial: false,
                  animate: isActive
                    ? { opacity: 1, y: 0, filter: "blur(0px)" }
                    : { opacity: 0, y: away, filter: "blur(6px)" },
                  // Enter staggered and unhurried; leave together and quickly
                  transition: isActive ? { duration: 0.6, delay, ease: EASE_OUT } : { duration: 0.25, ease: EASE_OUT },
                });
                return (
                  <article
                    key={step.number}
                    aria-hidden={!isActive}
                    className={`[grid-area:1/1] ${isActive ? "" : "pointer-events-none"}`}
                  >
                    <motion.h3
                      {...part(0.05)}
                      className="mb-4 font-editorial text-5xl font-normal leading-[1.04] tracking-[-0.02em] text-ink xl:text-6xl"
                    >
                      {step.title}
                    </motion.h3>
                    <motion.p {...part(0.12)} className="mb-6 font-mono text-xs uppercase tracking-[0.16em] text-gold">
                      {step.subtitle}
                    </motion.p>
                    <motion.p {...part(0.2)} className="max-w-lg text-base leading-[1.75] text-ink-mid">
                      {step.desc}
                    </motion.p>
                  </article>
                );
              })}
            </div>

            {/* Segmented progress: each bar fills across its own phase and jumps to it */}
            <nav aria-label={phaseLabel} className="mt-12 flex max-w-lg gap-2">
              {steps.map((step, i) => (
                <SegmentBar
                  key={step.number}
                  step={step}
                  progress={scrollYProgress}
                  index={i}
                  count={n}
                  isActive={i === active}
                  label={phaseLabel}
                  onSelect={() => goTo(i)}
                />
              ))}
            </nav>
          </div>
        </div>

        <motion.div
          aria-hidden="true"
          style={{ opacity: hintOpacity }}
          className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-ink-soft"
        >
          <span className="h-px w-8 bg-ink/25" />
          {phaseLabel} 01 → {String(n).padStart(2, "0")}
          <span className="h-px w-8 bg-ink/25" />
        </motion.div>
      </div>
    </div>
  );
};

const SegmentBar = ({ step, progress, index, count, isActive, label, onSelect }) => {
  const fill = useTransform(progress, [index / count, (index + 1) / count], [0, 1], { clamp: true });
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={isActive ? "step" : undefined}
      aria-label={`${label} ${step.number} · ${step.title}`}
      className="group flex flex-1 flex-col gap-2.5 py-2 text-start focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-sakura rounded-sm"
    >
      <span
        className={`font-mono text-[10px] tracking-[0.18em] transition-colors duration-200 ${
          isActive ? "text-ink" : "text-ink-faint group-hover:text-ink-soft"
        }`}
      >
        {step.number}
      </span>
      <span className="relative h-[2px] w-full overflow-hidden rounded-full bg-ink/10">
        <motion.span style={{ scaleX: fill }} className="absolute inset-0 origin-left rtl:origin-right bg-gradient-to-r from-ink to-sakura" />
      </span>
    </button>
  );
};

/* ------------------------------------------------------------------ */
/* Phones & reduced motion: a vertical ink timeline, no pinning        */
/* ------------------------------------------------------------------ */

const TimelineStep = ({ step, index, phaseLabel, still }) => {
  const [seen, setSeen] = useState(still);
  return (
    <motion.li
      onViewportEnter={() => setSeen(true)}
      viewport={{ once: true, margin: "0px 0px -30% 0px" }}
      initial={still ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE_OUT }}
      className="relative ps-14"
    >
      <span
        className={`absolute start-[10px] top-1.5 flex h-[13px] w-[13px] rounded-full border-2 transition-[background-color,border-color] duration-500 ${
          seen ? "border-hanko bg-hanko" : "border-ink/30 bg-paper"
        }`}
      />
      <div className="mb-3 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.2em]">
        <span className="text-gold">
          {phaseLabel} {step.number}
        </span>
        <span className="font-kanji text-sm text-sakura">{STEP_KANJI[index]}</span>
      </div>
      <div className="flex items-start gap-5">
        <div className="flex-1">
          <h3 className="mb-2 font-editorial text-3xl font-normal leading-[1.1] text-ink">{step.title}</h3>
          <p className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.14em] text-gold">{step.subtitle}</p>
          <p className="text-sm leading-[1.7] text-ink-mid">{step.desc}</p>
        </div>
        <Emblem index={index} on={seen} still={still} className="hidden h-24 w-24 shrink-0 overflow-visible sm:block" />
      </div>
    </motion.li>
  );
};

const TimelineSteps = ({ steps, phaseLabel, still }) => {
  const listRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });

  return (
    <ol ref={listRef} className="relative m-0 flex list-none flex-col gap-14 p-0">
      <span aria-hidden="true" className="absolute bottom-2 start-4 top-2 w-px bg-ink/12" />
      <motion.span
        aria-hidden="true"
        style={{ scaleY: still ? 1 : scrollYProgress }}
        className="absolute bottom-2 start-4 top-2 w-px origin-top bg-gradient-to-b from-ink via-gold to-sakura"
      />
      {steps.map((step, i) => (
        <TimelineStep key={step.number} step={step} index={i} phaseLabel={phaseLabel} still={still} />
      ))}
    </ol>
  );
};

const Approach = () => {
  const { t } = useLanguage();
  const shouldReduceMotion = useReducedMotion();
  const steps = t.approach?.steps || defaultSteps;
  const phaseLabel = t.approach?.phase || "Phase";

  return (
    <section id="approach" className="py-28 sm:py-32 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          kanji="方"
          index="06"
          pill={t.approach?.pill || "Methodology & Process"}
          heading={t.approach?.heading1 || "How I approach"}
          highlight={t.approach?.headingHighlight || "software & data"}
          className="mb-14 sm:mb-16 lg:mb-0"
          aside={
            <p className="text-sm font-mono text-ink-soft tracking-wide uppercase leading-relaxed">
              {t.approach?.description || "A structured four-phase delivery cycle from idea to production."}
            </p>
          }
        />

        <div className={shouldReduceMotion ? "" : "lg:hidden"}>
          <TimelineSteps steps={steps} phaseLabel={phaseLabel} still={shouldReduceMotion} />
        </div>
      </div>

      {!shouldReduceMotion && (
        <div className="hidden lg:block">
          <CinematicSteps steps={steps} phaseLabel={phaseLabel} />
        </div>
      )}
    </section>
  );
};

export default Approach;
