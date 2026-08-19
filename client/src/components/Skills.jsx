import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Search, Layers, Cpu, Database, BarChart3, Wrench, CheckCircle2 } from "lucide-react";
import SkillIcon from "./SkillIcon";
import { useLanguage } from "../i18n/LanguageContext";

const Skills = () => {
  const { t } = useLanguage();
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const skillCategories = [
    {
      id: "frontend",
      name: t.skills.categories.frontend,
      icon: Layers,
      accent: "#d4a574",
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
      accent: "#8b4789",
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
      accent: "#c9d4e0",
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
      accent: "#ebd0ad",
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
      accent: "#a1a1aa",
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
    c.items.map((item) => ({ ...item, categoryId: c.id, categoryName: c.name, accent: c.accent }))
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
    <section id="skills" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="section-pill mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a574]" />
          <span>{t.skills.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {t.skills.heading1} <span className="gold-text">{t.skills.headingHighlight}</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mt-3 font-normal">
          {t.skills.description}
        </p>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#111116]/90 border border-white/[0.08] backdrop-blur-xl w-full md:w-auto">
          {categoryTabs.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategoryId(cat.id)}
                className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574] ${
                  isActive
                    ? "text-white font-semibold shadow-inner"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-gradient-to-b from-[#d4a574]/25 to-[#d4a574]/10 border border-[#d4a574]/40 rounded-xl"
                  />
                )}
                <span className="relative z-10">{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-64">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 pointer-events-none" />
          <input
            type="text"
            placeholder={t.skills.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="apple-input pl-10 pr-4 py-2 text-xs rounded-xl"
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
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="apple-card p-5 flex flex-col justify-between group hover:border-[#d4a574]/35"
            >
              <div>
                <div className="flex items-start justify-between mb-3.5">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${skill.accent}15`,
                      borderColor: `${skill.accent}30`,
                      color: skill.accent,
                    }}
                  >
                    <SkillIcon name={skill.name} className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                    {skill.level}
                  </span>
                </div>

                <h3 className="font-bold text-base text-white tracking-tight group-hover:text-[#ebd0ad] transition-colors mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-normal">
                  {skill.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between">
                <span className="text-[10px] font-mono text-zinc-500 tracking-wider uppercase">
                  {skill.categoryName}
                </span>
                <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <CheckCircle2 className="w-3 h-3" /> {t.skills.verified}
                </span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Technical Overview Matrix */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-[#111116] to-[#09090b] border border-white/[0.08] shadow-xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/[0.08]">
          {t.skills.matrix.map((item, idx) => (
            <div key={item.title} className={`space-y-2 ${idx > 0 ? "pt-6 md:pt-0 md:pl-8" : ""}`}>
              <div className="text-[11px] font-mono font-bold tracking-widest text-[#d4a574] uppercase">
                {item.tag}
              </div>
              <h4 className="text-base font-bold text-white">{item.title}</h4>
              <p className="text-xs text-zinc-400 leading-relaxed">
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
