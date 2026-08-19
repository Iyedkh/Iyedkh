import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Globe,
  Sparkles,
  ArrowUpRight,
  Copy,
  Check,
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
    <section id="projects" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="section-pill mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4a574]" />
            <span>{t.projects.pill}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            {t.projects.heading1} <span className="gold-text">{t.projects.headingHighlight}</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mt-3 font-normal">
            {t.projects.description}
          </p>
        </div>

        <a
          href="https://github.com/Iyedkh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-apple-secondary text-xs py-2 px-4 rounded-xl self-start md:self-auto"
        >
          <Github className="w-4 h-4" />
          <span>{t.projects.viewGithub}</span>
          <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#111116]/90 border border-white/[0.08] backdrop-blur-xl w-fit mb-10 overflow-x-auto max-w-full">
        {filterTabs.map((tab) => {
          const isActive = activeFilterId === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilterId(tab.id)}
              className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574] ${
                isActive
                  ? "text-white font-semibold"
                  : "text-zinc-400 hover:text-zinc-200"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeProjectFilter"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  className="absolute inset-0 bg-gradient-to-b from-[#d4a574]/25 to-[#d4a574]/10 border border-[#d4a574]/40 rounded-xl"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="apple-card overflow-hidden group flex flex-col justify-between"
            >
              {/* macOS Mockup Window Header */}
              <div className="bg-[#15151c] px-4 py-3 border-b border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
                </div>

                {/* Domain Pill */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-black/40 border border-white/[0.06] text-[11px] font-mono text-zinc-400">
                  <Globe className="w-3 h-3 text-[#d4a574]" />
                  <span className="truncate max-w-[200px]">{project.link.replace("https://", "")}</span>
                </div>

                {/* Year Badge */}
                <span className="text-[11px] font-mono text-zinc-500 font-semibold">
                  {project.year}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow space-y-5">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-semibold tracking-wider text-[#d4a574] uppercase">
                      {project.subtitle}
                    </span>
                    {project.isFeatured && (
                      <span className="text-[10px] font-mono font-bold tracking-widest uppercase px-2.5 py-0.5 rounded-full bg-[#d4a574]/15 border border-[#d4a574]/30 text-[#ebd0ad]">
                        {t.projects.featuredBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-[#ebd0ad] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Role & Impact Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] text-xs">
                    <div className="text-[10px] font-mono text-zinc-500 uppercase">{t.projects.roleLabel}</div>
                    <div className="font-semibold text-zinc-200 mt-0.5">{project.role}</div>
                  </div>
                  <div className="p-2.5 rounded-xl bg-emerald-500/[0.06] border border-emerald-500/20 text-xs">
                    <div className="text-[10px] font-mono text-emerald-400 uppercase">Impact</div>
                    <div className="font-semibold text-emerald-300 mt-0.5">{project.impact}</div>
                  </div>
                </div>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] text-zinc-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 py-4 bg-[#111116]/80 border-t border-white/[0.06] flex items-center justify-between gap-3">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-apple-primary text-xs py-2.5 px-4 rounded-xl flex-1 justify-center"
                >
                  <span>{t.projects.visitLive}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => handleCopyLink(project.index, project.link, project.title)}
                  className="p-2.5 rounded-xl text-zinc-400 hover:text-white bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
                  title={t.projects.copyLink}
                  aria-label={`Copy link for ${project.title}`}
                >
                  {copiedIndex === project.index ? (
                    <Check className="w-4 h-4 text-emerald-400" />
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