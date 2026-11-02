import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Layers,
  Cpu,
  Database,
  BarChart3,
  Wrench,
  Atom,
  Braces,
  Boxes,
  Wind,
  FileCode2,
  Palette,
  Terminal,
  Server,
  Workflow,
  KeyRound,
  Radio,
  Plug,
  Leaf,
  Table2,
  Network,
  Calculator,
  TrendingUp,
  Lightbulb,
  GitBranch,
  FolderGit2,
  Zap,
  Send,
  Cloud,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import SectionHeader from "./SectionHeader";

const EASE = [0.16, 1, 0.3, 1];

// Full class strings so Tailwind can see them
const ACCENTS = {
  sakura: { text: "text-sakura", bg: "bg-sakura", soft: "bg-sakura/12", ring: "border-sakura/40" },
  gold: { text: "text-gold", bg: "bg-gold", soft: "bg-gold/12", ring: "border-gold/40" },
  bamboo: { text: "text-bamboo", bg: "bg-bamboo", soft: "bg-bamboo/12", ring: "border-bamboo/40" },
  hanko: { text: "text-hanko", bg: "bg-hanko", soft: "bg-hanko/10", ring: "border-hanko/40" },
  ink: { text: "text-ink-soft", bg: "bg-ink-soft", soft: "bg-ink/8", ring: "border-ink/25" },
};

const SkillCard = ({ category, index, toolsLabel }) => {
  const [selected, setSelected] = useState(0);
  const shouldReduceMotion = useReducedMotion();
  const accent = ACCENTS[category.accent];
  const Icon = category.icon;
  const active = category.items[selected];

  return (
    <motion.article
      initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: EASE }}
      className={`japandi-card overflow-hidden p-5 sm:p-6 flex flex-col ${category.span}`}
    >
      <span
        aria-hidden="true"
        className="absolute -right-2 -top-4 font-editorial text-[6.5rem] sm:text-[8rem] leading-none text-ink/[0.04] select-none pointer-events-none"
      >
        {category.kanji}
      </span>

      <header className="flex items-center gap-3 mb-5">
        <span className={`grid place-items-center w-10 h-10 rounded-xl border ${accent.ring} ${accent.soft}`}>
          <Icon className={`w-[18px] h-[18px] ${accent.text}`} />
        </span>
        <div className="min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            0{index + 1} · {category.items.length} {toolsLabel}
          </div>
          <h3 className="font-editorial text-2xl leading-tight text-ink truncate">{category.name}</h3>
        </div>
      </header>

      <div className="flex flex-wrap gap-2" role="group" aria-label={category.name}>
        {category.items.map((item, i) => {
          const isActive = i === selected;
          const ItemIcon = item.icon;
          return (
            <button
              key={item.key}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelected(i)}
              className={`relative flex items-center gap-1.5 px-3 py-2 rounded-full border text-xs font-medium transition-[color,border-color] duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sakura ${
                isActive ? `${accent.ring} text-ink` : "border-ink/10 text-ink-soft hover:text-ink hover:border-ink/25"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId={`skill-chip-${category.id}`}
                  transition={{ type: "spring", stiffness: 480, damping: 36 }}
                  className={`absolute inset-0 rounded-full ${accent.soft}`}
                />
              )}
              <ItemIcon className={`relative w-3.5 h-3.5 ${isActive ? accent.text : "text-ink-faint"}`} />
              <span className="relative whitespace-nowrap">{item.name}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-5">
        <div className="flex gap-3 items-start pt-4 border-t border-ink/10 min-h-[4.5rem]" aria-live="polite">
          <span className={`mt-1.5 w-1.5 h-1.5 shrink-0 rounded-full ${accent.bg}`} />
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={active.key}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={shouldReduceMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.18, ease: "easeOut" }}
              className="text-sm text-ink-soft leading-relaxed"
            >
              <span className="text-ink font-medium">{active.name}</span>
              <span className="text-ink-faint"> · </span>
              {active.role}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
    </motion.article>
  );
};

const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      id: "frontend",
      name: t.skills?.categories?.frontend || "Frontend",
      kanji: "表",
      icon: Layers,
      accent: "sakura",
      span: "lg:col-span-3",
      items: [
        { name: "React 19", icon: Atom, role: "Component architecture, hooks, state machines, performance" },
        { name: "JavaScript (ES6+)", icon: Braces, role: "Async patterns, functional programming, DOM APIs" },
        { name: "Redux", icon: Boxes, role: "Global state management, async data flows" },
        { name: "Tailwind CSS", icon: Wind, role: "Design systems, fluid utility tokens, responsive layouts" },
        { name: "HTML5 / Semantic Web", icon: FileCode2, role: "Accessibility (a11y), clean DOM structure, SEO" },
        { name: "CSS3 / Modern Layouts", icon: Palette, role: "Fluid CSS Grid, Flexbox, wabi-sabi animation" },
      ],
    },
    {
      id: "backend",
      name: t.skills?.categories?.backend || "Backend",
      kanji: "裏",
      icon: Cpu,
      accent: "gold",
      span: "lg:col-span-3",
      items: [
        { name: "Node.js", icon: Terminal, role: "Asynchronous I/O, event-driven runtime, scalable backends" },
        { name: "Express.js", icon: Server, role: "RESTful architecture, custom middleware, API routes" },
        { name: "REST APIs", icon: Workflow, role: "Contract design, rate-limiting, error handling, validation" },
        { name: "Authentication", icon: KeyRound, role: "JWT in HTTP-only cookies, bcrypt hashing, Google Sign-In" },
        { name: "Socket.io", icon: Radio, role: "Real-time, event-based client-server communication" },
        { name: "API Integration", icon: Plug, role: "Google OAuth, Cloudinary media uploads, third-party APIs" },
      ],
    },
    {
      id: "database",
      name: t.skills?.categories?.databases || "Databases",
      kanji: "基",
      icon: Database,
      accent: "bamboo",
      span: "lg:col-span-2",
      items: [
        { name: "MongoDB", icon: Leaf, role: "Mongoose ODM, aggregation pipelines, document indexing" },
        { name: "SQL (PostgreSQL)", icon: Table2, role: "Relational modeling and queries" },
        { name: "Database Modeling", icon: Network, role: "Normalization, indexing strategies, audit logging" },
      ],
    },
    {
      id: "dataAnalytics",
      name: t.skills?.categories?.dataBi || "Data & BI",
      kanji: "知",
      icon: BarChart3,
      accent: "hanko",
      span: "lg:col-span-2",
      items: [
        { name: "Power BI", icon: BarChart3, role: "DAX formulas, dimensional modeling, KPI dashboards" },
        { name: "Python", icon: Terminal, role: "Data wrangling, analytical scripting, statistical automation" },
        { name: "Pandas & NumPy", icon: Calculator, role: "Tabular data cleansing, transformations, time-series" },
        { name: "SQL Analytics", icon: Table2, role: "Analytical aggregations, cohorts, revenue attribution" },
        { name: "Data Visualization", icon: TrendingUp, role: "Executive telemetry, trend detection, interactive reporting" },
        { name: "Business Intelligence", icon: Lightbulb, role: "ISG Bizerte degree foundation, statistical decision-making" },
      ],
    },
    {
      id: "tools",
      name: t.skills?.categories?.tools || "Workflow",
      kanji: "器",
      icon: Wrench,
      accent: "ink",
      span: "md:col-span-2 lg:col-span-2",
      items: [
        { name: "Git", icon: GitBranch, role: "Branching strategies, semantic commits, rebase workflows" },
        { name: "GitHub", icon: FolderGit2, role: "Version control, collaboration, pull requests" },
        { name: "Vite", icon: Zap, role: "Fast modern bundler configuration & asset pipelines" },
        { name: "Postman", icon: Send, role: "Endpoint testing, environment staging, documentation" },
        { name: "cPanel", icon: Cloud, role: "Production deployment, domains & hosting setup" },
      ],
    },
  ];

  // Localize skill names and descriptions (English stays the fallback)
  const skillNames = t.skills?.names || {};
  const skillRoles = t.skills?.roles || {};
  skillCategories.forEach((c) => {
    c.items = c.items.map((item) => ({
      ...item,
      key: item.name,
      name: skillNames[item.name] || item.name,
      role: skillRoles[item.name] || item.role,
    }));
  });

  const total = skillCategories.reduce((sum, c) => sum + c.items.length, 0);
  const toolsLabel = t.skills?.toolsLabel || "tools";

  return (
    <section id="skills" className="py-28 sm:py-32 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          kanji="技"
          index="04"
          pill={t.skills?.pill || "Technical Discipline & Tools"}
          heading={t.skills?.heading1 || "Architectural"}
          highlight={t.skills?.headingHighlight || "capabilities"}
          aside={
            <p className="text-sm font-mono text-ink-soft tracking-wide uppercase leading-relaxed">
              {t.skills?.description || "Zero arbitrary percentages. Verified production tools."}
            </p>
          }
        />

        {/* Stack spectrum: share of the toolkit per discipline */}
        <div className="mb-8 sm:mb-10">
          <div className="flex items-baseline justify-between mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-ink-faint">
            <span>
              <span className="text-ink font-semibold">{total}</span> {toolsLabel}
            </span>
            <span>
              <span className="text-ink font-semibold">{skillCategories.length}</span>{" "}
              {t.skills?.disciplinesLabel || "disciplines"}
            </span>
          </div>
          <div className="flex h-1.5 gap-1 rounded-full overflow-hidden" aria-hidden="true">
            {skillCategories.map((c, i) => (
              <motion.span
                key={c.id}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 + i * 0.08, ease: EASE }}
                style={{ flexGrow: c.items.length, transformOrigin: "left" }}
                className={`basis-0 rounded-full ${ACCENTS[c.accent].bg}`}
              />
            ))}
          </div>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-[11px] text-ink-soft">
            {skillCategories.map((c) => (
              <li key={c.id} className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${ACCENTS[c.accent].bg}`} />
                {c.name}
                <span className="font-mono text-ink-faint">{c.items.length}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 sm:gap-5">
          {skillCategories.map((c, i) => (
            <SkillCard key={c.id} category={c} index={i} toolsLabel={toolsLabel} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
