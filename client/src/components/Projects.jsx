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
import SectionHeader from "./SectionHeader";
import Spotlight from "./Spotlight";

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
        "Engineered the full multi-tenant database hierarchy using MongoDB aggregations and Node.js REST endpoints. Features multi-warehouse inventory, automated invoicing, financial tracking and role-based access control. Currently in development.",
      role: "Founder & Lead Architect",
      impact: "Enterprise ERP System",
      tags: ["React 19", "Node.js", "Express", "MongoDB", "Tailwind CSS", "REST APIs", "Analytics"],
      link: "https://github.com/Iyedkh",
      github: "https://github.com/Iyedkh",
    },
    {
      id: "jcd-commerce",
      title: "JCD Commerce",
      subtitle: "Full-Stack MERN E-Commerce Platform",
      category: "mern",
      categoryLabel: "E-Commerce",
      year: "2025 – 2026",
      isFlagship: false,
      description:
        "Production e-commerce platform with customer storefront, product catalog, cart, orders, user management, and an admin dashboard for catalog, inventory and order control.",
      caseStudy:
        "Built as a full-time developer in a 3-person team. Implemented authentication with JWT in HTTP-only cookies, bcrypt password hashing and Google Sign-In, Node.js/Express REST APIs with MongoDB data models, and deployed the app on cPanel.",
      role: "Full-Stack Developer (team of 3)",
      impact: "Live Production Store",
      tags: ["MERN Stack", "JWT + Google Auth", "Admin Dashboard", "cPanel"],
      link: "https://jcdcommerce.com",
      github: null,
    },
    {
      id: "olivor",
      title: "Oliv'Or",
      subtitle: "Olive Oil Brand E-Commerce Website",
      category: "mern",
      categoryLabel: "E-Commerce",
      year: "2026",
      isFlagship: false,
      description:
        "MERN e-commerce website for a Tunisian olive oil brand, with product catalog, orders and user management, and a fully responsive layout for mobile and desktop.",
      caseStudy:
        "Delivered end-to-end as a freelancer: requirements, UI design, React frontend, Node.js/Express API, MongoDB data models, deployment and hosting setup.",
      role: "Freelance Full-Stack Developer",
      impact: "Live E-Commerce Store",
      tags: ["MERN Stack", "E-Commerce", "Responsive UI"],
      link: "https://olivor.tn",
      github: null,
    },
    {
      id: "bv-tech-marine",
      title: "BV Tech Marine",
      subtitle: "Marine Technical Services Website",
      category: "vitrine",
      categoryLabel: "Corporate Website",
      year: "2026",
      isFlagship: false,
      description:
        "Responsive corporate website establishing the company's online presence, built with SEO and performance best practices.",
      caseStudy:
        "Designed and built with React and Tailwind CSS as a freelance project, from UI design to deployment.",
      role: "Freelance Web Developer",
      impact: "Live Corporate Website",
      tags: ["React", "Tailwind CSS", "SEO"],
      link: "https://bvtechmarine.com",
      github: null,
    },
    {
      id: "ms-smart-trading",
      title: "MS Smart Trading",
      subtitle: "Trading Company Corporate Website",
      category: "vitrine",
      categoryLabel: "Corporate Website",
      year: "2025",
      isFlagship: false,
      description:
        "Responsive, SEO-optimized corporate website aligned with the client's brand identity and built for international client acquisition.",
      caseStudy:
        "Built with React and Tailwind CSS as a freelance project, from UI design to deployment.",
      role: "Freelance Web Developer",
      impact: "Corporate Brand Presence",
      tags: ["React", "Tailwind CSS", "SEO"],
      link: null,
      github: null,
    },
    {
      id: "ms-equipements",
      title: "MS Équipements et Services",
      subtitle: "Industrial Equipment & Services Website",
      category: "vitrine",
      categoryLabel: "Corporate Website",
      year: "2025",
      isFlagship: false,
      description:
        "Responsive corporate website showcasing industrial equipment and support services, optimized for SEO and loading speed.",
      caseStudy:
        "Built with React and Tailwind CSS as a freelance project, with modular components and optimized media.",
      role: "Freelance Web Developer",
      impact: "Industrial Services Showcase",
      tags: ["React", "Tailwind CSS", "SEO"],
      link: null,
      github: null,
    },
    {
      id: "egt-naval",
      title: "EGT Naval Services",
      subtitle: "Naval Repair & Maintenance Website",
      category: "vitrine",
      categoryLabel: "Corporate Website",
      year: "2024",
      isFlagship: false,
      description:
        "Corporate website for a naval repair and maintenance company, with a structured service catalog and a lead-generation contact flow.",
      caseStudy:
        "Built with React and Tailwind CSS as a freelance project, from UI design to deployment.",
      role: "Freelance Web Developer",
      impact: "Live Corporate Website",
      tags: ["React", "Tailwind CSS", "Lead Generation"],
      link: "https://egtnavalservices.com",
      github: null,
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
        <SectionHeader
          kanji="作"
          index="03"
          pill={t.projects?.pill || "Selected Architecture & Code"}
          heading={t.projects?.heading1 || "Selected"}
          highlight={t.projects?.headingHighlight || "Works"}
          className="mb-12"
          aside={
            <div className="space-y-4">
              <p className="text-sm text-[#726A5F] font-sans leading-relaxed">
                {t.projects?.description ||
                  "Production platforms, SaaS enterprise software, and commercial digital systems built with performance and wabi-sabi precision."}
              </p>
              <a
                href="https://github.com/Iyedkh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-japandi-secondary text-xs py-2 px-5 rounded-full group"
              >
                <Github className="w-3.5 h-3.5" />
                <span>{t.projects?.viewGithub || "View All on GitHub"}</span>
                <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
              </a>
            </div>
          }
        />

        {/* Filter Pills */}
        <div className="flex items-center gap-1 p-1.5 rounded-full bg-[#EBE3D5]/75 border border-[#22211E]/10 w-fit mb-12 sm:mb-14 overflow-x-auto no-scrollbar max-w-full shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_8px_24px_-16px_rgba(34,33,30,0.2)]">
          {filterTabs.map((tab) => {
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                aria-pressed={isActive}
                className={`relative min-h-10 px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-colors duration-300 whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-[#D48D9B] ${
                  isActive
                    ? "text-[#22211E] font-semibold"
                    : "text-[#726A5F] hover:text-[#22211E]"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeFilterPillSakura"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 bg-[#F6F2EB] border border-[#D48D9B]/50 shadow-[inset_0_1px_0_rgba(255,255,255,0.8),0_2px_8px_-3px_rgba(212,141,155,0.45)] rounded-full -z-0"
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
            <Spotlight
              as="article"
              maxTilt={1.5}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              data-project-card
              onClick={() => setSelectedProject(projectList[0])}
              className="p-7 sm:p-12 rounded-[28px] bg-gradient-to-br from-[#EBE3D5] via-[#EBE3D5] to-[#E4DAC9] border border-[#22211E]/12 group cursor-pointer relative overflow-hidden shadow-[inset_0_1px_0_rgba(255,255,255,0.55),0_18px_40px_-28px_rgba(34,33,30,0.3)] transition-[border-color,box-shadow] duration-700 hover:border-[#D48D9B]/70 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_40px_80px_-36px_rgba(34,33,30,0.35)]"
            >
              {/* Subtle Sakura Blossom Silhouette in Background */}
              <div className="absolute -right-10 -bottom-10 w-64 h-64 rounded-full bg-[#D48D9B]/10 blur-2xl pointer-events-none transition-transform duration-1000 group-hover:scale-125" />
              {/* Ghost ordinal & gold corner ticks */}
              <span aria-hidden="true" className="card-ordinal absolute -top-6 end-6 text-[9rem] sm:text-[12rem] hidden sm:block">01</span>
              <span aria-hidden="true" className="absolute top-5 start-5 h-4 w-4 border-t border-s border-[#A68550]/40 rounded-tl-sm pointer-events-none" />
              <span aria-hidden="true" className="absolute bottom-5 end-5 h-4 w-4 border-b border-e border-[#A68550]/40 rounded-br-sm pointer-events-none" />

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full bg-[#151412] text-[#F6F2EB] text-[11px] font-mono tracking-wider uppercase font-semibold">
                      {t.projects?.featuredBadge || "Flagship SaaS ERP"}
                    </span>
                    <span className="text-xs font-mono text-[#726A5F]">2026</span>
                  </div>

                  <h3 className="font-editorial text-[2.6rem] sm:text-6xl text-[#22211E] font-normal leading-[1.02] tracking-[-0.02em] group-hover:text-[#D48D9B] transition-colors duration-500">
                    CARTHAGEOS
                  </h3>

                  <p className="text-sm font-mono text-[#A68550] uppercase tracking-wider">
                    Modular SaaS Enterprise Resource Planning Platform
                  </p>

                  <p className="text-sm sm:text-base text-[#726A5F] font-sans leading-relaxed">
                    Designed and architected from scratch to streamline commercial operations, financial ledgers, inventory turnover, and multi-user team permissions for growing enterprises.
                  </p>

                  {/* Impact & Role */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-[#F6F2EB]/80 border border-[#22211E]/10 text-xs font-mono">
                      <span className="text-[#726A5F] block">{t.projects?.roleLabel || "ROLE"}</span>
                      <span className="text-[#22211E] font-medium">Founder &amp; Lead Architect</span>
                    </div>
                    <div className="p-3 rounded-xl bg-[#F6F2EB]/80 border border-[#22211E]/10 text-xs font-mono">
                      <span className="text-[#726A5F] block">DELIVERABLE</span>
                      <span className="text-[#6B785D] font-medium">Multi-tenant ERP Engine</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {projectList[0].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-[#F6F2EB] border border-[#22211E]/10 text-xs font-mono text-[#22211E]"
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
                  <div className="relative aspect-[4/3] rounded-2xl bg-[#F6F2EB] border border-[#22211E]/12 p-5 text-[#22211E] font-mono text-xs flex flex-col justify-between shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_24px_40px_-24px_rgba(34,33,30,0.3)] washi-grain transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-1.5 group-hover:rotate-[-0.6deg]">
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
                        <span className="text-[#22211E] font-medium">Modular REST API</span>
                      </div>
                      <div className="flex items-center justify-between pb-1 border-b border-[#22211E]/5">
                        <span className="text-[#9C9385]">INVENTORY ENGINE</span>
                        <span className="text-[#22211E] font-medium">Multi-warehouse Stock</span>
                      </div>
                      <div className="pt-1 flex items-center justify-between">
                        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#6B785D]/10 text-[#6B785D] text-[10px] font-medium">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#6B785D]" /> In Development
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
            </Spotlight>
          )}

          {/* Secondary Projects Grid (2 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {filteredProjects
              .filter((p) => !p.isFlagship)
              .map((project) => (
                <Spotlight
                  as="article"
                  maxTilt={4}
                  key={project.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  data-project-card
                  onClick={() => setSelectedProject(project)}
                  className="japandi-card p-6 sm:p-8 flex flex-col justify-between group cursor-pointer hover:border-[#D48D9B]/70"
                >
                  <div>
                    {/* Top Meta Bar */}
                    <div className="flex items-center justify-between pb-4 border-b border-[#22211E]/10 mb-5">
                      <div className="flex items-center gap-2.5">
                        <span aria-hidden="true" className="font-editorial italic text-lg leading-none [font-variant-numeric:lining-nums] text-[#A68550]/70 transition-colors duration-500 group-hover:text-[#D48D9B]">
                          {String(projectList.indexOf(project) + 1).padStart(2, "0")}
                        </span>
                        <span aria-hidden="true" className="h-px w-5 bg-[#A68550]/40 transition-all duration-500 group-hover:w-8 group-hover:bg-[#D48D9B]/60" />
                        <span className="font-mono text-xs text-[#A68550] font-semibold">
                          {project.categoryLabel}
                        </span>
                      </div>
                      <span className="font-mono text-xs text-[#726A5F]">{project.year}</span>
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-editorial text-3xl sm:text-[2.1rem] leading-[1.1] tracking-[-0.015em] text-[#22211E] font-normal group-hover:text-[#D48D9B] transition-colors duration-500 mb-1.5">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-[#726A5F] uppercase tracking-wider mb-4">
                      {project.subtitle}
                    </p>

                    <p className="text-sm text-[#5F584E] font-sans leading-[1.7] mb-6">
                      {project.description}
                    </p>

                    {/* Role & Impact */}
                    <div className="grid grid-cols-2 gap-2 mb-6">
                      <div className="p-2.5 rounded-lg bg-[#EBE3D5]/50 border border-[#22211E]/10 text-xs font-mono">
                        <span className="text-[#726A5F] text-[10px] block">{t.projects?.roleLabel || "ROLE"}</span>
                        <span className="text-[#22211E] text-[11px] font-medium">{project.role}</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-[#EBE3D5]/50 border border-[#22211E]/10 text-xs font-mono">
                        <span className="text-[#726A5F] text-[10px] block">IMPACT</span>
                        <span className="text-[#6B785D] text-[11px] font-medium truncate block">{project.impact}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-[#F6F2EB]/70 border border-[#22211E]/10 text-[11px] font-mono text-[#22211E] transition-colors duration-300 group-hover:border-[#D48D9B]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Action Footer */}
                  <div className="pt-4 border-t border-[#22211E]/10 flex items-center justify-between">
                    <span className="text-xs font-mono text-[#22211E] font-medium flex items-center gap-1 group-hover:text-[#D48D9B] transition-colors">
                      Inspect Case Study
                      <ArrowUpRight className={`w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${isRTL ? "rotate-[-90deg]" : ""}`} />
                    </span>

                    {project.link && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, "_blank");
                        }}
                        className="text-xs font-mono text-[#726A5F] hover:text-[#22211E] flex items-center gap-1 rounded-full px-2.5 py-1 -me-2.5 transition-colors hover:bg-[#F6F2EB]/80"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Live</span>
                      </span>
                    )}
                  </div>
                </Spotlight>
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