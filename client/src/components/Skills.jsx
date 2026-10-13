import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Layers, Cpu, Database, BarChart3, Wrench, CheckCircle2, Terminal } from "lucide-react";
import SkillIcon from "./SkillIcon";
import { useLanguage } from "../i18n/LanguageContext";

const Skills = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const skillCategories = [
    {
      id: "frontend",
      name: t.skills.categories.frontend,
      icon: Layers,
      items: [
        { name: "React", level: "Core Stack", description: "Hooks, Context, Performance, Component Design" },
        { name: "Next.js", level: "Advanced", description: "App Router, SSR, SSG, Server Components" },
        { name: "TypeScript", level: "Proficient", description: "Type Safety, Interfaces, Generics" },
        { name: "JavaScript", level: "Core Stack", description: "ES6+, Async/Await, DOM manipulation" },
        { name: "Tailwind CSS", level: "Core Stack", description: "Modern responsive utilities, Design systems" },
        { name: "HTML5", level: "Core Stack", description: "Semantic markup, SEO ergonomics" },
        { name: "CSS3", level: "Core Stack", description: "Animations, Flexbox, CSS Grid, Glassmorphism" },
        { name: "Bootstrap", level: "Proficient", description: "Rapid prototyping & grid layouts" },
      ],
    },
    {
      id: "backend",
      name: t.skills.categories.backend,
      icon: Cpu,
      items: [
        { name: "Node.js", level: "Core Stack", description: "Asynchronous runtime, Event loop, Backend engines" },
        { name: "Express.js", level: "Core Stack", description: "Middleware, Routing, JWT Auth, REST APIs" },
        { name: "REST APIs", level: "Core Stack", description: "Scalable endpoint architecture, CRUD, Validation" },
        { name: "Spring Boot", level: "Proficient", description: "Java backend microservices & enterprise logic" },
        { name: "Next.js API Routes", level: "Advanced", description: "Serverless endpoints & API middleware" },
      ],
    },
    {
      id: "databases",
      name: t.skills.categories.databases,
      icon: Database,
      items: [
        { name: "MongoDB", level: "Core Stack", description: "Mongoose ORM, Aggregations, Document modeling" },
        { name: "PostgreSQL", level: "Proficient", description: "Relational queries, Foreign keys, Indexing" },
        { name: "SQL", level: "Core Stack", description: "Complex joins, Subqueries, Stored procedures" },
        { name: "Database Design", level: "Advanced", description: "Normalization, Schema optimization, Security" },
      ],
    },
    {
      id: "dataBi",
      name: t.skills.categories.dataBi,
      icon: BarChart3,
      items: [
        { name: "Python", level: "Core Stack", description: "Scripting, Data analysis, Machine learning" },
        { name: "Pandas", level: "Advanced", description: "Data manipulation, Cleansing, Time-series analysis" },
        { name: "NumPy", level: "Advanced", description: "Numerical operations, Matrix calculations" },
        { name: "Power BI", level: "Core Stack", description: "DAX formulas, Interactive KPI dashboards, Modeling" },
        { name: "Tableau", level: "Proficient", description: "Visual analytics, Business reporting" },
        { name: "Machine Learning", level: "Proficient", description: "Scikit-Learn, Predictive modeling, Regression" },
        { name: "Excel", level: "Advanced", description: "Pivot tables, Advanced formulas, Data audits" },
      ],
    },
    {
      id: "tools",
      name: t.skills.categories.tools,
      icon: Wrench,
      items: [
        { name: "Git", level: "Core Stack", description: "Branching, Merging, Version control workflows" },
        { name: "GitHub", level: "Core Stack", description: "CI/CD, Collaborative pull requests, Repositories" },
        { name: "Vite", level: "Advanced", description: "Fast frontend tooling & build pipelines" },
        { name: "Postman", level: "Advanced", description: "API testing, Collections, Documentation" },
      ],
    },
  ];

  const categoryTabs = [
    { id: "all", name: t.skills.categories.all },
    ...skillCategories.map((c) => ({ id: c.id, name: c.name })),
  ];

  const allSkills = skillCategories.flatMap((c) =>
    c.items.map((item) => ({ ...item, categoryId: c.id, categoryName: c.name }))
  );

  const filteredSkills = allSkills.filter((skill) => {
    const matchesCategory = activeCategoryId === "all" || skill.categoryId === activeCategoryId;
    const matchesSearch =
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs text-[var(--accent-teal)] font-mono mb-4">
          <Cpu className="w-3.5 h-3.5" />
          <span>{t.skills.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
          {t.skills.heading1} <span className="teal-gradient-text">{t.skills.headingHighlight}</span>
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mt-3 font-normal">
          {t.skills.description}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-1.5 p-1.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] backdrop-blur-xl w-full md:w-auto">
          {categoryTabs.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`relative px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all duration-200 focus:outline-none ${
                  isActive
                    ? "text-[var(--text-primary)] font-semibold shadow-inner"
                    : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    className="absolute inset-0 bg-[var(--accent-teal-dim)] border border-[var(--accent-teal-border)] rounded-xl"
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className={`absolute ${isRTL ? "right-3.5" : "left-3.5"} top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)] pointer-events-none`} />
          <input
            type="text"
            placeholder={t.skills.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`apple-input ${isRTL ? "pr-10 pl-4" : "pl-10 pr-4"} py-2 text-xs rounded-xl font-mono`}
          />
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        <AnimatePresence mode="popLayout">
          {filteredSkills.map((skill) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="console-card p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 bg-[var(--accent-teal-dim)] border-[var(--accent-teal-border)] text-[var(--accent-teal)]">
                    <SkillIcon name={skill.name} className="w-5 h-5" />
                  </div>
                  <span className="tech-pill text-[10px] py-0.5 px-2">
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-base text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-teal-hover)] transition-colors mb-1 font-mono">
                  {skill.name}
                </h3>
                <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[var(--text-secondary)] uppercase">
                  {skill.categoryName}
                </span>
                <span className="text-[10px] text-[var(--accent-teal)] font-mono flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-3 h-3" /> {t.skills.verified}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Technical Overview Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="mt-12 p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-[var(--border)]">
          {t.skills.matrix.map((item, idx) => (
            <div key={item.title} className={`space-y-2 ${idx > 0 ? (isRTL ? "pt-6 md:pt-0 md:pr-8" : "pt-6 md:pt-0 md:pl-8") : ""}`}>
              <div className="text-[11px] font-mono font-medium tracking-wider text-[var(--accent-amber)]">
                {item.tag}
              </div>
              <h4 className="text-base font-bold text-[var(--text-primary)]">{item.title}</h4>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;