import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink, Code2, Github } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const projects = [
    {
      title: "MS Smart Trading",
      description: "Responsive business website built to strengthen online presence and align with client branding and commercial goals.",
      tags: ["MERN Stack", "Responsive Design", "Business Website"],
      tagColors: ["#d4a574", "#8b4789", "#c9d4e0"],
      url: "https://mssmarttrading.com",
      year: "2025",
      featured: true,
    },
    {
      title: "EGT Naval Services",
      description: "Corporate website showcasing naval maintenance services with optimized structure to attract new international clients.",
      tags: ["React", "Tailwind CSS", "Corporate Site"],
      tagColors: ["#d4a574", "#c9d4e0", "#a8b0ba"],
      url: "https://egtnavalservices.com",
      year: "2024",
      featured: false,
    },
    {
      title: "JCD Commerce",
      description: "Full e-commerce platform built using the MERN stack, with an admin panel, secure shopping cart, product inventory, and order management.",
      tags: ["MERN Stack", "Admin Dashboard", "E-commerce"],
      tagColors: ["#d4a574", "#8b4789", "#c9d4e0"],
      url: "https://jcdcommerce.com",
      year: "2025",
      featured: true,
    },
    {
      title: "MS Équipements et Services",
      description: "High-performance corporate website built to strengthen digital presence and client engagement.",
      tags: ["React", "Tailwind CSS", "Corporate Site"],
      tagColors: ["#d4a574", "#c9d4e0", "#a8b0ba"],
      url: "https://msequipementsetservices.com",
      year: "2026",
      featured: true,
    },
    {
      title: "Oliv'Or.tn",
      description: "Modern and responsive vitrine website built using React and Tailwind CSS to showcase premium olive oil products and brand heritage.",
      tags: ["React", "Tailwind CSS", "Vitrine Website"],
      tagColors: ["#d4a574", "#c9d4e0", "#8b4789"],
      url: "https://olivor.tn",
      year: "2026",
      featured: true,
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    if (activeFilter === "MERN Stack") return p.tags.includes("MERN Stack");
    if (activeFilter === "React & Tailwind") return p.tags.includes("React") || p.tags.includes("Tailwind CSS");
    return true;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="projects" style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ marginBottom: 64 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 32, flexWrap: "wrap", gap: 16 }}>
          <div>
            <div className="section-label">Portfolio Showcase</div>
            <h2 style={{
              fontSize: "clamp(32px, 4vw, 52px)",
              fontWeight: 800,
              background: "linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Featured <span className="gold-text">Projects</span>
            </h2>
          </div>
          <a href="https://github.com/Iyedkh" target="_blank" rel="noopener noreferrer" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(212,165,116,0.1)",
            border: "1px solid rgba(212,165,116,0.2)",
            color: "var(--primary-light)",
            padding: "10px 16px",
            borderRadius: 8,
            fontWeight: 600,
            fontSize: 14,
            textDecoration: "none",
            transition: "all 0.2s",
          }}
          onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,165,116,0.15)"; e.currentTarget.style.borderColor = "rgba(212,165,116,0.3)"; }}
          onMouseLeave={e => { e.currentTarget.style.background = "rgba(212,165,116,0.1)"; e.currentTarget.style.borderColor = "rgba(212,165,116,0.2)"; }}
          >
            View All Code <ArrowUpRight style={{ width: 16, height: 16 }} />
          </a>
        </div>
        <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 600, marginBottom: 40 }}>
          Showcasing recent web development and data-driven projects built with modern technologies
        </p>

        {/* Filter Buttons */}
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", margin: "16px 0 0 0" }}>
          {["All", "MERN Stack", "React & Tailwind", "Featured"].map((f) => {
            const isActive = activeFilter === f;
            return (
              <motion.button
                key={f}
                onClick={() => setActiveFilter(f)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                style={{
                  background: isActive ? "linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)" : "rgba(212,165,116,0.04)",
                  color: isActive ? "#fff" : "var(--muted)",
                  border: isActive ? "none" : "1px solid rgba(212,165,116,0.15)",
                  padding: "8px 18px",
                  borderRadius: 8,
                  fontWeight: 600,
                  fontSize: 13,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  boxShadow: isActive ? "0 4px 12px rgba(212,165,116,0.15)" : "none",
                }}
              >
                {f}
              </motion.button>
            );
          })}
        </div>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="projects-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 28,
        }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p, i) => (
            <motion.div
              layout
              key={p.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="card"
              whileHover={{ y: -8 }}
              style={{
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                height: "100%",
                border: p.featured ? "1.5px solid rgba(212,165,116,0.3)" : "1px solid var(--border)",
                position: "relative",
              }}
            >
              {/* Featured Badge */}
              {p.featured && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    zIndex: 10,
                    background: "linear-gradient(135deg, #d4a574, #8b4789)",
                    color: "white",
                    padding: "6px 12px",
                    borderRadius: 6,
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  ⭐ Featured
                </motion.div>
              )}

              {/* Preview Section */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                style={{
                  height: 220,
                  position: "relative",
                  overflow: "hidden",
                  background: "var(--bg3)",
                  backgroundColor: "rgba(212,165,116,0.03)",
                }}
              >
                {/* Browser Controls decoration */}
                <div style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  display: "flex",
                  gap: 6,
                  zIndex: 10,
                }}>
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ff5f56" }} />
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#ffbd2e" }} />
                  <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#27c93f" }} />
                </div>
              <iframe
                src={p.url}
                title={p.title}
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  pointerEvents: "none",
                  opacity: 0.6,
                }}
                loading="lazy"
              />
              <div style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(180deg, transparent 50%, rgba(15,15,26,0.8) 100%)",
              }} />

              {/* Year Badge */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  position: "absolute",
                  top: 12,
                  left: 12,
                  fontSize: 12,
                  fontWeight: 700,
                  background: "rgba(15,15,26,0.7)",
                  padding: "6px 12px",
                  borderRadius: 6,
                  border: "1px solid rgba(59,130,246,0.2)",
                  color: "var(--primary-light)",
                  fontFamily: "DM Mono",
                  letterSpacing: "0.08em",
                }}
              >
                {p.year}
              </motion.div>
            </motion.div>

            {/* Content Section */}
            <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
              {/* Tags */}
              <div style={{ display: "flex", gap: 8, marginBottom: 14, flexWrap: "wrap" }}>
                {p.tags.map((t, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.05 }}
                    className="tag"
                    style={{
                      background: `${p.tagColors[j]}20`,
                      border: `1px solid ${p.tagColors[j]}40`,
                      color: p.tagColors[j],
                    }}
                  >
                    {t}
                  </motion.span>
                ))}
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: 20,
                fontWeight: 700,
                marginBottom: 10,
                color: "var(--text)",
                lineHeight: 1.3,
              }}>
                {p.title}
              </h3>

              {/* Description */}
              <p style={{
                color: "var(--muted2)",
                fontSize: 14,
                lineHeight: 1.7,
                flex: 1,
                marginBottom: 20,
              }}>
                {p.description}
              </p>

              {/* Action Buttons */}
              <div style={{ display: "flex", gap: 10 }}>
                <motion.a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  whileHover={{ scale: 1.05 }}
                  style={{
                    textDecoration: "none",
                    flex: 1,
                    justifyContent: "center",
                    fontSize: 14,
                    padding: "10px 16px",
                  }}
                >
                  <ExternalLink style={{ width: 16, height: 16 }} />
                  Live Demo
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="btn-secondary"
                  style={{
                    padding: "10px 14px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                  }}
                >
                  <Code2 style={{ width: 16, height: 16 }} />
                </motion.button>
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