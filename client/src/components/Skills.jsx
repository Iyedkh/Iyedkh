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
        { name: "React Native", role: "Cross-platform mobile application development" },
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
        { name: "Authentication", role: "JWT, bcrypt hashing, session guards, RBAC permissions" },
        { name: "API Integration", role: "Third-party payment gateways, webhooks, multi-tenant connectors" },
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
        { name: "SQL (PostgreSQL / MySQL)", role: "Relational modeling, complex joins, subqueries, ACID" },
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
        { name: "GitHub", role: "Collaborative code reviews, pull requests, CI/CD" },
        { name: "Vite", role: "Fast modern bundler configuration & asset pipelines" },
        { name: "Postman", role: "Endpoint testing, environment staging, documentation" },
      ],
    },
  ];

  const allSkills = skillCategories.flatMap((c) =>
    c.items.map((item) => ({ ...item, categoryId: c.id, categoryName: c.fullName }))
  );

  const categoryTabs = [
    {
      id: "all",
      name: t.skills?.categories?.all || "All Stack",
      fullName: "All Capabilities",
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
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="hanko-stamp">技</span>
            <div className="japandi-pill">
              <span>{t.skills?.pill || "04 / Technical Discipline & Tools"}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#262522] leading-tight tracking-[-0.02em]">
                {t.skills?.heading1 || "Architectural"}{" "}
                <span className="editorial-accent">
                  {t.skills?.headingHighlight || "capabilities"}
                </span>.
              </h2>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-sm font-mono text-[#786F63] tracking-wide uppercase">
                {t.skills?.description || "Zero arbitrary percentages. Verified production tools."}
              </p>
            </div>
          </div>
          <div className="katana-divider my-8" />
        </div>

        {/* Category Tabs & Filter Bar */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-5 mb-10 sm:mb-12">
          {/* Scrollable / Responsive Japandi Tab Strip */}
          <div className="relative">
            <div
              role="tablist"
              aria-label="Skill categories"
              className="flex items-center gap-1.5 p-1.5 sm:p-2 rounded-2xl sm:rounded-full bg-[#E9E0D2]/75 border border-[#262522]/10 backdrop-blur-md overflow-x-auto no-scrollbar shadow-[0_4px_20px_-8px_rgba(38,37,34,0.06)]"
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
                    className={`group relative flex items-center gap-2 px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl sm:rounded-full text-xs font-mono tracking-wider transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E8A1B0] ${
                      isActive
                        ? "text-[#262522] font-semibold"
                        : "text-[#786F63] hover:text-[#262522] hover:bg-[#E9E0D2]/50"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeSkillTabPill"
                        transition={{ type: "spring", stiffness: 420, damping: 32 }}
                        className="absolute inset-0 bg-[#F5F0E7] border border-[#262522]/12 shadow-[0_2px_8px_rgba(38,37,34,0.08)] rounded-xl sm:rounded-full -z-0"
                      />
                    )}

                    <IconComponent
                      className={`relative z-10 w-3.5 h-3.5 transition-colors ${
                        isActive ? "text-[#C24545]" : "text-[#9E9486] group-hover:text-[#262522]"
                      }`}
                    />

                    <span className="relative z-10">{tab.name}</span>

                    <span
                      className={`relative z-10 text-[10px] font-mono px-1.5 py-0.2 rounded-full transition-colors ${
                        isActive
                          ? "bg-[#E8A1B0]/25 text-[#9A6672] font-bold"
                          : "bg-[#262522]/5 text-[#9E9486] group-hover:bg-[#262522]/10"
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
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#786F63] pointer-events-none" />
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
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#786F63] hover:text-[#262522] bg-[#E9E0D2] px-1.5 py-0.5 rounded-full"
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
                key={skill.name}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className="japandi-card p-6 flex flex-col justify-between group hover:border-[#E8A1B0]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-[#262522]/10">
                    <span className="text-[10px] font-mono text-[#AD8B59] uppercase tracking-wider font-semibold">
                      {skill.categoryName}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E8A1B0]" />
                  </div>

                  <h3 className="font-editorial text-2xl font-normal text-[#262522] group-hover:text-[#E8A1B0] transition-colors mb-1.5">
                    {skill.name}
                  </h3>

                  <p className="text-xs text-[#786F63] font-sans leading-relaxed">
                    {skill.role}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-[#262522]/10 flex items-center justify-between text-[10px] font-mono text-[#9E9486]">
                  <span>{t.skills?.verified || "Verified Stack"}</span>
                  <span className="text-[#78836A] flex items-center gap-1 font-medium">
                    <CheckCircle2 className="w-3 h-3 text-[#E8A1B0]" /> Production Ready
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