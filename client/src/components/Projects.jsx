import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Code2,
  Sparkles,
  ArrowUpRight,
  Globe,
  Lock,
  Copy,
  Check,
  Star,
  Layers,
  ShoppingBag,
  Anchor,
  Briefcase,
  Droplets,
} from "lucide-react";
import { toast } from "sonner";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [copiedUrl, setCopiedUrl] = useState(null);

  const projects = [
    {
      title: "MS Smart Trading",
      subtitle: "International Business Web Platform",
      description:
        "High-performance corporate web platform engineered to establish an authoritative digital presence for international commerce. Features localized routing, client acquisition workflows, and high-conversion product showcases.",
      tags: ["MERN Stack", "Responsive UI", "Commercial Web"],
      url: "https://mssmarttrading.com",
      displayUrl: "mssmarttrading.com",
      year: "2025",
      featured: true,
      role: "Lead Full-Stack Developer",
      impact: "+140% Client Inquiries",
      icon: Briefcase,
      accent: "#d4a574",
      previewGradient: "from-[#d4a574]/20 via-[#181822] to-[#111116]",
    },
    {
      title: "JCD Commerce",
      subtitle: "Full-Stack MERN E-Commerce Ecosystem",
      description:
        "Comprehensive electronic commerce ecosystem complete with customer storefront, persistent shopping cart, real-time inventory management, dynamic filtering, and a secured administrative portal for catalog control.",
      tags: ["MERN Stack", "Admin Dashboard", "E-Commerce"],
      url: "https://jcdcommerce.com",
      displayUrl: "jcdcommerce.com",
      year: "2025",
      featured: true,
      role: "Architect & Developer",
      impact: "Production Checkout & Inventory",
      icon: ShoppingBag,
      accent: "#8b4789",
      previewGradient: "from-[#8b4789]/20 via-[#181822] to-[#111116]",
    },
    {
      title: "MS Équipements et Services",
      subtitle: "Industrial Services & Equipment Hub",
      description:
        "Modern corporate platform designed to showcase heavy equipment and industrial support services. Built with modular React components, smooth transitions, and high-speed asset optimization.",
      tags: ["React", "Tailwind CSS", "Enterprise"],
      url: "https://msequipementsetservices.com",
      displayUrl: "msequipementsetservices.com",
      year: "2026",
      featured: true,
      role: "Frontend Engineer",
      impact: "Fast Sub-second LCP",
      icon: Layers,
      accent: "#ebd0ad",
      previewGradient: "from-[#ebd0ad]/20 via-[#181822] to-[#111116]",
    },
    {
      title: "Oliv'Or.tn",
      subtitle: "Luxury Olive Oil Brand & Export Vitrine",
      description:
        "Sophisticated digital showcase representing authentic Mediterranean olive oil heritage. Crafted with refined editorial typography, high-resolution media handling, and responsive mobile ergonomics.",
      tags: ["React", "Tailwind CSS", "Brand Vitrine"],
      url: "https://olivor.tn",
      displayUrl: "olivor.tn",
      year: "2026",
      featured: true,
      role: "UI/UX & Web Developer",
      impact: "Premium Brand Showcase",
      icon: Droplets,
      accent: "#d4a574",
      previewGradient: "from-[#d4a574]/20 via-[#181822] to-[#111116]",
    },
    {
      title: "EGT Naval Services",
      subtitle: "Maritime Engineering & Maintenance",
      description:
        "Corporate maritime platform built to showcase naval repair and maintenance services. Engineered with an intuitive service catalog and lead generation channels for international marine logistics.",
      tags: ["React", "Tailwind CSS", "Maritime"],
      url: "https://egtnavalservices.com",
      displayUrl: "egtnavalservices.com",
      year: "2024",
      featured: false,
      role: "Web Developer",
      impact: "International Marine Portal",
      icon: Anchor,
      accent: "#c9d4e0",
      previewGradient: "from-blue-500/20 via-[#181822] to-[#111116]",
    },
  ];

  const filterOptions = ["All", "Featured", "MERN Stack", "React & Tailwind"];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    if (activeFilter === "MERN Stack") return p.tags.includes("MERN Stack");
    if (activeFilter === "React & Tailwind")
      return p.tags.includes("React") || p.tags.includes("Tailwind CSS");
    return true;
  });

  const handleCopyProjectLink = (e, url, title) => {
    e.preventDefault();
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    toast.success(`Copied link for ${title}`, {
      description: url,
      duration: 3000,
    });
    setTimeout(() => setCopiedUrl(null), 2500);
  };

  return (
    <section id="projects" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <div className="section-pill mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#d4a574]" />
            <span>Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Featured <span className="gold-text">Projects</span>
          </h2>
          <p className="text-base sm:text-lg text-zinc-400 max-w-xl mt-3 font-normal">
            Production-grade web platforms and full-stack applications crafted with modern engineering standards.
          </p>
        </div>

        <a
          href="https://github.com/Iyedkh"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-apple-secondary self-start md:self-auto"
        >
          <Code2 className="w-4 h-4 text-[#d4a574]" />
          <span>View GitHub Code</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
        </a>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 p-1.5 rounded-2xl bg-[#111116]/80 border border-white/[0.08] backdrop-blur-xl w-fit">
        {filterOptions.map((filter) => {
          const isActive = activeFilter === filter;
          return (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 py-2 rounded-xl text-xs font-medium transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574] ${
                isActive
                  ? "text-white font-semibold shadow-inner"
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
              <span className="relative z-10 flex items-center gap-1.5">
                {filter === "Featured" && <Star className="w-3 h-3 text-[#d4a574] fill-[#d4a574]" />}
                {filter}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 lg:grid-cols-2 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div
              layout
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="apple-card overflow-hidden flex flex-col justify-between group"
            >
              {/* Apple Mock Browser Window Header & Preview */}
              <div className="relative border-b border-white/[0.08] bg-[#14141c]">
                {/* macOS Window Controls */}
                <div className="flex items-center justify-between px-4 py-3 bg-[#0d0d12]/90 border-b border-white/[0.06]">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80 inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80 inline-block" />
                  </div>

                  {/* Browser Address Pill */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/[0.06] text-[11px] font-mono text-zinc-400 max-w-[200px] sm:max-w-xs truncate">
                    <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                    <span className="truncate">{project.displayUrl}</span>
                  </div>

                  {/* Quick Action: Copy Link */}
                  <button
                    onClick={(e) => handleCopyProjectLink(e, project.url, project.title)}
                    className="p-1 rounded-lg text-zinc-400 hover:text-[#ebd0ad] hover:bg-white/[0.06] transition-colors"
                    title="Copy Project URL"
                  >
                    {copiedUrl === project.url ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Mock Visual Preview Display */}
                <div
                  className={`relative h-48 sm:h-56 bg-gradient-to-br ${project.previewGradient} flex flex-col items-center justify-center p-6 text-center overflow-hidden`}
                >
                  {/* Subtle Background Geometry */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:16px_16px] opacity-40" />

                  {/* Center Icon Badge */}
                  <div
                    className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center border shadow-2xl backdrop-blur-xl mb-3 group-hover:scale-110 transition-transform duration-500"
                    style={{
                      backgroundColor: `${project.accent}20`,
                      borderColor: `${project.accent}40`,
                      color: project.accent,
                    }}
                  >
                    <project.icon className="w-8 h-8" />
                  </div>

                  <h4 className="relative z-10 text-xl font-bold text-white tracking-tight">
                    {project.title}
                  </h4>
                  <p className="relative z-10 text-xs font-mono text-zinc-400 mt-1 max-w-sm">
                    {project.subtitle}
                  </p>

                  {/* Top-Right Badges: Year & Featured */}
                  <div className="absolute top-3 right-3 flex items-center gap-2">
                    {project.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[#d4a574]/20 border border-[#d4a574]/40 text-[#ebd0ad] backdrop-blur-md">
                        <Star className="w-2.5 h-2.5 fill-[#d4a574]" />
                        Featured
                      </span>
                    )}
                    <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-black/60 border border-white/10 text-zinc-300">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Impact Badge */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium bg-black/70 backdrop-blur-md border border-white/10 text-zinc-300">
                      Role: {project.role}
                    </span>
                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-emerald-500/15 border border-emerald-500/30 text-emerald-300">
                      {project.impact}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex flex-col justify-between flex-1 space-y-6">
                <div className="space-y-4">
                  {/* Technology Tags */}
                  <div className="flex flex-wrap items-center gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium text-zinc-300 bg-white/[0.04] border border-white/[0.08]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                {/* Footer Action Buttons */}
                <div className="pt-4 border-t border-white/[0.06] flex items-center gap-3">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-apple-primary flex-1 justify-center text-xs py-2.5 rounded-xl"
                  >
                    <span>Visit Live Platform</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={(e) => handleCopyProjectLink(e, project.url, project.title)}
                    className="p-2.5 rounded-xl text-zinc-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574]"
                    title="Copy Link"
                  >
                    {copiedUrl === project.url ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Projects;