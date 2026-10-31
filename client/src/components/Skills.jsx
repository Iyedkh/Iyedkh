import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layers,
  Cpu,
  Database,
  BarChart3,
  Wrench,
  Search,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import SectionHeader from "./SectionHeader";

const Skills = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const skillCategories = [
    {
      id: "frontend",
      name: t.skills?.categories?.frontend || "Frontend",
      fullName: "Frontend Architecture",
      kanji: "表",
      icon: Layers,
      items: [
        { name: "React 19", role: "Component architecture, hooks, state machines, performance" },
        { name: "JavaScript (ES6+)", role: "Async patterns, functional programming, DOM APIs" },
        { name: "Redux", role: "Global state management, async data flows" },
        { name: "Tailwind CSS", role: "Design systems, fluid utility tokens, responsive layouts" },
        { name: "HTML5 / Semantic Web", role: "Accessibility (a11y), clean DOM structure, SEO" },
        { name: "CSS3 / Modern Layouts", role: "Fluid CSS Grid, Flexbox, wabi-sabi animation" },
      ],
    },
    {
      id: "backend",
      name: t.skills?.categories?.backend || "Backend",
      fullName: "Backend & Systems",
      kanji: "裏",
      icon: Cpu,
      items: [
        { name: "Node.js", role: "Asynchronous I/O, event-driven runtime, scalable backends" },
        { name: "Express.js", role: "RESTful architecture, custom middleware, API routes" },
        { name: "REST APIs", role: "Contract design, rate-limiting, error handling, validation" },
        { name: "Authentication", role: "JWT in HTTP-only cookies, bcrypt hashing, Google Sign-In" },
        { name: "Socket.io", role: "Real-time, event-based client-server communication" },
        { name: "API Integration", role: "Google OAuth, Cloudinary media uploads, third-party APIs" },
      ],
    },
    {
      id: "database",
      name: t.skills?.categories?.databases || "Databases",
      fullName: "Databases & Modeling",
      kanji: "基",
      icon: Database,
      items: [
        { name: "MongoDB", role: "Mongoose ODM, aggregation pipelines, document indexing" },
        { name: "SQL (PostgreSQL)", role: "Relational modeling and queries" },
        { name: "Database Modeling", role: "Normalization, indexing strategies, audit logging" },
      ],
    },
    {
      id: "dataAnalytics",
      name: t.skills?.categories?.dataBi || "Data & BI",
      fullName: "Data & Business Intelligence",
      kanji: "知",
      icon: BarChart3,
      items: [
        { name: "Power BI", role: "DAX formulas, dimensional modeling, KPI dashboards" },
        { name: "Python", role: "Data wrangling, analytical scripting, statistical automation" },
        { name: "Pandas & NumPy", role: "Tabular data cleansing, transformations, time-series" },
        { name: "SQL Analytics", role: "Analytical aggregations, cohorts, revenue attribution" },
        { name: "Data Visualization", role: "Executive telemetry, trend detection, interactive reporting" },
        { name: "Business Intelligence", role: "ISG Bizerte degree foundation, statistical decision-making" },
      ],
    },
    {
      id: "tools",
      name: t.skills?.categories?.tools || "Workflow",
      fullName: "Tools & Workflow",
      kanji: "器",
      icon: Wrench,
      items: [
        { name: "Git", role: "Branching strategies, semantic commits, rebase workflows" },
        { name: "GitHub", role: "Version control, collaboration, pull requests" },
        { name: "Vite", role: "Fast modern bundler configuration & asset pipelines" },
        { name: "Postman", role: "Endpoint testing, environment staging, documentation" },
        { name: "cPanel", role: "Production deployment, domains & hosting setup" },
      ],
    },
  ];

  // Localize group titles, skill names and descriptions (English stays the fallback)
  const groupNames = t.skills?.groups || {};
  const skillNames = t.skills?.names || {};
  const skillRoles = t.skills?.roles || {};
  skillCategories.forEach((c) => {
    c.fullName = groupNames[c.id] || c.fullName;
  });

  const allSkills = skillCategories.flatMap((c) =>
    c.items.map((item) => ({
      ...item,
      key: item.name,
      name: skillNames[item.name] || item.name,
      role: skillRoles[item.name] || item.role,
      categoryId: c.id,
      categoryName: c.fullName,
    }))
  );

  const categoryTabs = [
    {
      id: "all",
      name: t.skills?.categories?.all || "All Stack",
      fullName: groupNames.all || "All Capabilities",
      kanji: "全",
      icon: Sparkles,
      count: allSkills.length,
    },
    ...skillCategories.map((c) => ({
      id: c.id,
      name: c.name,
      fullName: c.fullName,
      kanji: c.kanji,
      icon: c.icon,
      count: c.items.length,
    })),
  ];

  const filteredSkills = allSkills.filter((s) => {
    const matchesTab = activeTab === "all" || s.categoryId === activeTab;
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

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

        {/* Category Tabs & Filter Bar */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 mb-10 sm:mb-12">
          {/* Scrollable / Responsive Japandi Tab Strip */}
          <div className="relative">
            <div
              role="tablist"
              aria-label="Skill categories"
              className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-paper-2/80 border border-ink/10 backdrop-blur-md overflow-x-auto no-scrollbar shadow-[0_4px_20px_-8px_rgba(34,33,30,0.05)]"
            >
              {categoryTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                const IconComponent = tab.icon;

                return (
                  <button
                    key={tab.id}
                    role="tab"
                    id={`tab-${tab.id}`}
                    aria-selected={isActive}
                    aria-controls="skills-panel"
                    onClick={() => setActiveTab(tab.id)}
                    className={`group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-sakura ${
                      isActive
                        ? "text-ink font-semibold"
                        : "text-ink-soft hover:text-ink hover:bg-paper-2/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTabPill"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        className="absolute inset-0 bg-paper border border-ink/12 shadow-[0_2px_8px_rgba(34,33,30,0.06)] rounded-xl sm:rounded-full -z-0"
                      />
                    )}

                    <IconComponent
                      className={`relative z-10 w-3.5 h-3.5 transition-colors ${
                        isActive ? "text-hanko" : "text-ink-faint group-hover:text-ink"
                      }`}
                    />

                    <span className="relative z-10">{tab.name}</span>

                    <span
                      className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full transition-colors ${
                        isActive
                          ? "bg-sakura/20 text-sakura-deep font-bold"
                          : "bg-ink/5 text-ink-faint group-hover:bg-ink/10"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Search Box with Search Clear button */}
          <div className="relative w-full xl:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft pointer-events-none" />
            <input
              type="text"
              placeholder={t.skills?.searchPlaceholder || "Search skill (e.g. React)..."}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="japandi-input pl-10 pr-10 py-2.5 text-xs rounded-full font-mono shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                aria-label="Clear search query"
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-ink-soft hover:text-ink bg-paper-2 px-1.5 py-0.5 rounded-full"
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Skills Grid */}
        <motion.div
          id="skills-panel"
          role="tabpanel"
          aria-labelledby={`tab-${activeTab}`}
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                layout
                key={skill.key}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="japandi-card p-6 flex flex-col justify-between group hover:border-sakura"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-ink/10">
                    <span className="text-[10px] font-mono text-gold uppercase tracking-wider font-semibold">
                      {skill.categoryName}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-sakura" />
                  </div>

                  <h3 className="font-editorial text-2xl font-normal text-ink group-hover:text-sakura transition-colors mb-1.5">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-ink-soft font-sans leading-relaxed">
                    {skill.role}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-ink/10 flex items-center justify-between text-[10px] font-mono text-ink-faint">
                  <span>{t.skills?.verified || "Verified Stack"}</span>
                  <span className="text-bamboo flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-sakura" /> {t.skills?.productionReady || "Production Ready"}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;