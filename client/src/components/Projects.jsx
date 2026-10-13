import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  ArrowUpRight,
  Copy,
  Check,
  Code2,
  Layers,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";

const Projects = () => {
  const { t, isRTL } = useLanguage();
  const [activeFilterId, setActiveFilterId] = useState("all");
  const [copiedIndex, setCopiedIndex] = useState(null);

  const rawProjects = [
    {
      index: 0,
      link: "https://mssmarttrading.com",
      github: "https://github.com/Iyedkh",
      category: "mern",
      isFeatured: true,
      year: "2025",
    },
    {
      index: 1,
      link: "https://jcdcommerce.com",
      github: "https://github.com/Iyedkh",
      category: "mern",
      isFeatured: true,
      year: "2026",
    },
    {
      index: 2,
      link: "https://msequipementsetservices.com",
      github: "https://github.com/Iyedkh",
      category: "reactTailwind",
      isFeatured: false,
      year: "2026",
    },
    {
      index: 3,
      link: "https://olivor.tn",
      github: "https://github.com/Iyedkh",
      category: "reactTailwind",
      isFeatured: false,
      year: "2026",
    },
    {
      index: 4,
      link: "https://egtnavalservices.com",
      github: "https://github.com/Iyedkh",
      category: "reactTailwind",
      isFeatured: false,
      year: "2024",
    },
  ];

  const projects = rawProjects.map((p) => {
    const data = t.projects.list[p.index] || {};
    return {
      ...p,
      title: data.title || "",
      subtitle: data.subtitle || "",
      description: data.description || "",
      tags: data.tags || [],
      role: data.role || "",
      impact: data.impact || "",
    };
  });

  const filterTabs = [
    { id: "all", label: t.projects.filters.all },
    { id: "featured", label: t.projects.filters.featured },
    { id: "mern", label: t.projects.filters.mern },
    { id: "reactTailwind", label: t.projects.filters.reactTailwind },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilterId === "all") return true;
    if (activeFilterId === "featured") return p.isFeatured;
    return p.category === activeFilterId;
  });

  const handleCopyLink = (index, url, title) => {
    navigator.clipboard.writeText(url);
    setCopiedIndex(index);
    toast.success(`${t.projects.linkCopied} ${title}`, {
      description: url,
      duration: 3000,
    });
    setTimeout(() => setCopiedIndex(null), 2500);
  };

  return (
    <section id="projects" className="py-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs text-[var(--accent-amber)] font-mono mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.projects.pill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
            {t.projects.heading1} <span className="amber-gradient-text">{t.projects.headingHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mt-3 font-normal">
            {t.projects.description}
          </p>
        </div>

        <a
          href="https://github.com/Iyedkh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary-action text-xs py-2 px-4 rounded-xl self-start md:self-auto group"
        >
          <Github className="w-4 h-4 text-[var(--text-primary)]" />
          <span>{t.projects.viewGithub}</span>
          <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1.5 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] backdrop-blur-xl w-fit mb-10 overflow-x-auto max-w-full">
        {filterTabs.map((tab) => {
          const isActive = activeFilterId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilterId(tab.id)}
              className={`relative px-4 py-2 rounded-xl text-xs font-mono transition-all duration-200 whitespace-nowrap focus:outline-none ${
                isActive
                  ? "text-[var(--text-primary)] font-semibold shadow-inner"
                  : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectFilter"
                  transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  className="absolute inset-0 bg-[var(--accent-amber-dim)] border border-[var(--border-focus)] rounded-xl"
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className={`console-card overflow-hidden group flex flex-col justify-between ${
                project.isFeatured ? "border-[rgba(245,158,11,0.22)]" : ""
              }`}
            >
              {/* Mockup Browser/Terminal Bar */}
              <div className="bg-[var(--bg-primary)] px-4 py-3 border-b border-[var(--border)] flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.14)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.14)]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[rgba(255,255,255,0.14)]" />
                </div>

                {/* Domain Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--bg-surface)] border border-[var(--border)] text-[11px] font-mono text-[var(--text-secondary)]">
                  <Globe className="w-3 h-3 text-[var(--accent-amber)]" />
                  <span className="truncate max-w-[200px]" dir="ltr">{project.link.replace("https://", "")}</span>
                </div>

                {/* Year Badge */}
                <span className="text-[11px] font-mono text-[var(--text-muted)] font-semibold">
                  {project.year}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-[var(--accent-amber)]">
                      {project.subtitle}
                    </span>
                    {project.isFeatured && (
                      <span className="text-[10px] font-mono font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-[var(--accent-amber-dim)] border border-[var(--border-focus)] text-[var(--accent-amber)]">
                        {t.projects.featuredBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight group-hover:text-[var(--accent-amber-hover)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Role & Impact Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <div className="p-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border)] text-xs">
                    <div className="text-[10px] font-mono text-[var(--text-muted)] uppercase">{t.projects.roleLabel}</div>
                    <div className="font-semibold text-[var(--text-primary)] mt-0.5 font-mono text-[11px]">{project.role}</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--accent-teal-dim)] border border-[var(--accent-teal-border)] text-xs">
                    <div className="text-[10px] font-mono text-[var(--accent-teal)] uppercase">Impact</div>
                    <div className="font-semibold text-[var(--text-primary)] mt-0.5 font-mono text-[11px]">{project.impact}</div>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="tech-pill text-xs py-1 px-2.5 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-[var(--bg-primary)]/80 border-t border-[var(--border)] flex items-center justify-between gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-action text-xs py-2.5 px-4 rounded-xl flex-1 justify-center"
                >
                  <span>{t.projects.visitLive}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => handleCopyLink(project.index, project.link, project.title)}
                  className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-[var(--text-primary)] bg-[var(--bg-surface)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border)] hover:border-[var(--accent-amber)] transition-colors"
                  title={t.projects.copyLink}
                  aria-label={`Copy link for ${project.title}`}
                >
                  {copiedIndex === project.index ? (
                    <Check className="w-4 h-4 text-[var(--accent-teal)]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;