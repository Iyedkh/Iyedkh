import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Globe,
} from "lucide-react";
import ProjectModal from "./ProjectModal";
import Magnetic from "./Magnetic";
import { useLanguage } from "../i18n/LanguageContext";

const Projects = () => {
  const { t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      id: "carthageos",
      title: "CARTHAGEOS",
      subtitle: "Modular SaaS ERP & Operations Engine",
      category: "saas",
      categoryLabel: "Flagship SaaS Platform",
      year: "2026",
      isFlagship: true,
      description:
        "Comprehensive cloud ERP architecture engineered for enterprise operations, financial tracking, multi-warehouse inventory control, and automated invoicing with scalable role-based permissions.",
      caseStudy:
        "Engineered the full multi-tenant database hierarchy using MongoDB aggregations and Node.js REST endpoints. Features real-time state synchronization, automated inventory alerts, and financial analytics visualizations with sub-second response times.",
      role: "Founder & Lead Architect",
      impact: "Enterprise ERP System",
      tags: ["React 19", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs", "Analytics"],
      link: "https://github.com/Iyedkh",
      github: "https://github.com/Iyedkh",
    },
    {
      id: "stockmaster",
      title: "StockMaster",
      subtitle: "Inventory Intelligence & Supply Chain Analytics",
      category: "saas",
      categoryLabel: "Analytics & Management",
      year: "2026",
      isFlagship: false,
      description:
        "Operational inventory control system integrating real-time stock turnover tracking, automated reorder thresholds, and interactive BI dashboards.",
      caseStudy:
        "Designed relational data schemas and time-series analytics dashboards to forecast inventory depletion and minimize stockouts for manufacturing and retail workflows.",
      role: "Full Stack Developer & Analyst",
      impact: "Automated Supply Thresholds",
      tags: ["React", "Node.js", "MongoDB", "Power BI", "Data Modeling"],
      link: "https://github.com/Iyedkh",
      github: "https://github.com/Iyedkh",
    },
    {
      id: "tanit-gold",
      title: "Tanit Gold",
      subtitle: "Precious Metals & Jewelry E-Commerce Platform",
      category: "mern",
      categoryLabel: "Commercial Platform",
      year: "2026",
      isFlagship: false,
      description:
        "Modern luxury e-commerce platform with dynamic real-time metal price calculations, high-resolution product showcases, and a streamlined administrative catalog.",
      caseStudy:
        "Built responsive client storefront with fluid filtering, secure session carts, and custom currency/pricing calculators.",
      role: "Full Stack Engineer",
      impact: "Sub-second Catalog Filter",
      tags: ["MERN Stack", "Express", "Tailwind CSS", "JWT Auth"],
      link: "https://github.com/Iyedkh",
      github: "https://github.com/Iyedkh",
    },
    {
      id: "olivor",
      title: "Oliv'Or",
      subtitle: "Mediterranean Luxury Olive Oil Export Vitrine",
      category: "vitrine",
      categoryLabel: "Brand Vitrine",
      year: "2026",
      isFlagship: false,
      description:
        "Sophisticated digital showcase representing authentic Mediterranean olive oil heritage, crafted with refined editorial typography and high-resolution asset optimization.",
      caseStudy:
        "Engineered with semantic React architecture, localized international routing, and high-performance WebP media delivery for overseas buyers.",
      role: "UI/UX & Web Developer",
      impact: "Global Export Brand Showcase",
      tags: ["React", "Tailwind CSS", "Editorial UI", "i18n"],
      link: "https://olivor.tn",
      github: "https://github.com/Iyedkh",
    },
    {
      id: "ms-smart-trading",
      title: "MS Smart Trading",
      subtitle: "International Commerce & Import-Export Platform",
      category: "mern",
      categoryLabel: "Corporate Platform",
      year: "2025",
      isFlagship: false,
      description:
        "High-performance corporate web platform engineered to establish an authoritative digital presence for international trade, commercial leads, and client onboarding.",
      caseStudy:
        "Delivered a complete brand-aligned digital presence with multi-language inquiry flows that increased qualified inbound leads by over 140%.",
      role: "Lead Full Stack Developer",
      impact: "+140% Qualified Inbound Inquiries",
      tags: ["MERN Stack", "Responsive UI", "Commercial Web"],
      link: "https://mssmarttrading.com",
      github: "https://github.com/Iyedkh",
    },
    {
      id: "jcd-commerce",
      title: "JCD Commerce",
      subtitle: "Full-Stack MERN E-Commerce Ecosystem",
      category: "mern",
      categoryLabel: "E-Commerce",
      year: "2026",
      isFlagship: false,
      description:
        "Comprehensive retail platform with customer storefront, persistent shopping cart, real-time inventory management, and an administrative control suite.",
      caseStudy:
        "Implemented secure JWT user authentication, MongoDB transaction handling, and dynamic order tracking.",
      role: "Architect & Developer",
      impact: "Production Checkout & Inventory",
      tags: ["MERN Stack", "Admin Suite", "REST APIs"],
      link: "https://jcdcommerce.com",
      github: "https://github.com/Iyedkh",
    },
  ];

  const filterTabs = [
    { id: "all", label: t.projects?.filters?.all || "All Works" },
    { id: "saas", label: t.projects?.filters?.featured || "SaaS & ERP" },
    { id: "mern", label: t.projects?.filters?.mern || "Full Stack (MERN)" },
    { id: "vitrine", label: t.projects?.filters?.reactTailwind || "Brand Vitrine" },
  ];

  const filteredProjects = projectList.filter((p) => {
    if (activeFilter === "all") return true;
    return p.category === activeFilter;
  });

  return (
    <section id="work" className="py-28 sm:py-32 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 sm:mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="hanko-stamp">作</span>
              <div className="japandi-pill">
                <span>{t.projects?.pill || "03 / Selected Architecture & Code"}</span>
              </div>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#262522] leading-tight tracking-[-0.02em]">
              {t.projects?.heading1 || "Selected"}{" "}
              <span className="editorial-accent">
                {t.projects?.headingHighlight || "Works"}
              </span>.
            </h2>
            <p className="text-sm sm:text-base text-[#786F63] max-w-lg mt-3 font-sans">
              {t.projects?.description ||
                "Production platforms, SaaS enterprise software, and commercial digital systems built with performance and wabi-sabi precision."}
            </p>
          </div>

          <a
            href="https://github.com/Iyedkh"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-japandi-secondary text-xs py-2 px-5 rounded-full self-start md:self-auto group"
          >
            <Github className="w-3.5 h-3.5" />
            <span>{t.projects?.viewGithub || "View All on GitHub"}</span>
            <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#E9E0D2]/80 border border-[#262522]/10 w-fit mb-12 overflow-x-auto max-w-full">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`relative px-4 py-2 rounded-full text-xs font-mono transition-all duration-200 whitespace-nowrap focus:outline-none ${
                  isActive
                    ? "text-[#262522] font-semibold"
                    : "text-[#786F63] hover:text-[#262522]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPillSakura"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#E8A1B0]/30 border border-[#E8A1B0] rounded-full -z-0"
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {/* Flagship Feature: CARTHAGEOS */}
          {(activeFilter === "all" || activeFilter === "saas") && (
            <motion.article
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              data-project-card
              onClick={() => setSelectedProject(projectList[0])}
              className="p-8 sm:p-12 rounded-3xl bg-[#E9E0D2] border border-[#262522]/15 group cursor-pointer relative overflow-hidden transition-all duration-300 hover:border-[#E8A1B0] hover:shadow-xl"
            >
              {/* Subtle Sakura Blossom Silhouette in Background */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-[#E8A1B0]/10 blur-2xl pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#171714] text-[#F5F0E7] text-[11px] font-mono tracking-wider uppercase font-semibold">
                      {t.projects?.featuredBadge || "Flagship SaaS ERP"}
                    </span>
                    <span className="text-xs font-mono text-[#786F63]">2026</span>
                  </div>

                  <h3 className="font-editorial text-4xl sm:text-5xl text-[#262522] font-normal leading-tight group-hover:text-[#E8A1B0] transition-colors">
                    CARTHAGEOS
                  </h3>

                  <p className="text-sm font-mono text-[#AD8B59] uppercase tracking-wider">
                    Modular SaaS Enterprise Resource Planning Platform
                  </p>

                  <p className="text-sm sm:text-base text-[#786F63] font-sans leading-relaxed">
                    Designed and architected from scratch to streamline commercial operations, financial ledgers, inventory turnover, and multi-user team permissions for growing enterprises.
                  </p>

                  {/* Impact & Role */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-[#F5F0E7]/80 border border-[#262522]/10 text-xs font-mono">
                      <span className="text-[#786F63] block">{t.projects?.roleLabel || "ROLE"}</span>
                      <span className="text-[#262522] font-medium">Founder &amp; Lead Architect</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F5F0E7]/80 border border-[#262522]/10 text-xs font-mono">
                      <span className="text-[#786F63] block">DELIVERABLE</span>
                      <span className="text-[#78836A] font-medium">Multi-tenant ERP Engine</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {projectList[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#F5F0E7] border border-[#262522]/10 text-xs font-mono text-[#262522]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 flex items-center gap-3">
                    <button
                      type="button"
                      className="btn-japandi-primary text-xs py-2.5 px-6 rounded-full"
                    >
                      <span>Read Case Study</span>
                      <ArrowUpRight className={`w-3.5 h-3.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
                    </button>
                  </div>
                </div>

                {/* Right Visual Representation: Japandi Architectural Blueprint Spec Sheet */}
                <div className="lg:col-span-5">
                  <div className="relative aspect-[4/3] rounded-2xl bg-[#F6F2EB] border border-[#22211E]/15 p-5 text-[#22211E] font-mono text-xs flex flex-col justify-between shadow-[0_4px_20px_-4px_rgba(34,33,30,0.06)] washi-grain">
                    {/* Architectural Header */}
                    <div className="flex items-center justify-between pb-3 border-b border-[#22211E]/10">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#A68550]" />
                        <span className="text-[10.5px] font-semibold text-[#22211E] tracking-wider uppercase">
                          CARTHAGEOS.SYS
                        </span>
                      </div>
                      <span className="text-[9.5px] text-[#726A5F] uppercase tracking-widest">
                        SPEC 2.4 · ERP CORE
                      </span>
                    </div>

                    {/* Architectural Schematics & Metrics */}
                    <div className="space-y-2.5 py-4 text-[11px] text-[#726A5F]">
                      <div className="flex items-center justify-between pb-1 border-b border-[#22211E]/5">
                        <span className="text-[#9C9385]">SCHEMA TOPOLOGY</span>
                        <span className="text-[#22211E] font-medium">MongoDB Aggregated Ledgers</span>
                      </div>
                      <div className="flex items-center justify-between pb-1 border-b border-[#22211E]/5">
                        <span className="text-[#9C9385]">REST SERVICES</span>
                        <span className="text-[#22211E] font-medium">48 Modular Endpoints</span>
                      </div>
                      <div className="flex items-center justify-between pb-1 border-b border-[#22211E]/5">
                        <span className="text-[#9C9385]">INVENTORY ENGINE</span>
                        <span className="text-[#22211E] font-medium">Predictive Auto-Reorder</span>
                      </div>
                      <div className="pt-1 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#6B785D]/10 text-[#6B785D] text-[10px] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6B785D]" /> Sub-second Latency
                        </span>
                        <span className="text-[10px] text-[#A68550]">Multi-tenant Guard</span>
                      </div>
                    </div>

                    {/* Blueprint Footer */}
                    <div className="pt-3 border-t border-[#22211E]/10 flex items-center justify-between text-[10px] text-[#726A5F]">
                      <span className="uppercase tracking-wider">Architect: Iyed Khouildi</span>
                      <span className="text-[#D48D9B] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        EXPLORE BLUEPRINT →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          )}

          {/* Secondary Projects Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects
              .filter((p) => !p.isFlagship)
              .map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  data-project-card
                  onClick={() => setSelectedProject(project)}
                  className="japandi-card p-7 flex flex-col justify-between group cursor-pointer hover:border-[#E8A1B0]"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#262522]/10 mb-5">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs text-[#AD8B59] font-semibold">
                          {project.categoryLabel}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#786F63]">{project.year}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-editorial text-3xl text-[#262522] font-normal group-hover:text-[#E8A1B0] transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#786F63] uppercase tracking-wider mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-[#786F63] font-sans leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Role & Impact */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="p-2.5 rounded-lg bg-[#E9E0D2]/50 border border-[#262522]/10 text-xs font-mono">
                        <span className="text-[#786F63] text-[10px] block">{t.projects?.roleLabel || "ROLE"}</span>
                        <span className="text-[#262522] text-[11px] font-medium">{project.role}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#E9E0D2]/50 border border-[#262522]/10 text-xs font-mono">
                        <span className="text-[#786F63] text-[10px] block">IMPACT</span>
                        <span className="text-[#78836A] text-[11px] font-medium truncate block">{project.impact}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-[#E9E0D2] border border-[#262522]/10 text-[11px] font-mono text-[#262522]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-[#262522]/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#262522] font-medium flex items-center gap-1 group-hover:text-[#E8A1B0] transition-colors">
                      Inspect Case Study
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
                    </span>

                    {project.link && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, "_blank");
                        }}
                        className="text-xs font-mono text-[#786F63] hover:text-[#262522] flex items-center gap-1"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </span>
                    )}
                  </div>
                </motion.article>
              ))}
          </div>
        </div>
      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};

export default Projects;