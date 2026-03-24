import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Code2 } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "MS Smart Trading",
      description: "Responsive business website built to strengthen online presence and align with client branding and commercial goals.",
      tags: ["MERN Stack"],
      url: "https://mssmarttrading.com",
      year: "2025",
    },
    {
      title: "EGT Naval Services",
      description: "Corporate website showcasing naval maintenance services with optimized structure to attract new international clients.",
      tags: ["React", "Tailwind CSS"],
      url: "https://egtnavalservices.com",
      year: "2024",
    },
    {
      title: "JCD Commerce",
      description: "Modern, high-performance corporate website optimized for presentation and client acquisition.",
      tags: ["React", "Tailwind CSS"],
      url: "https://jcdcommerce.com",
      year: "2025",
    },
    {
      title: "Oliv'Wood",
      description: "Full e-commerce platform with admin dashboard, product management, order tracking, and responsive UI.",
      tags: ["MERN Stack", "Tailwind CSS"],
      url: "https://olivwood.netlify.app",
      year: "2025",
    },
  ];

  return (
    <section id="projects" style={{ paddingBottom: 80 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
        <div>
          <div className="section-label">Portfolio</div>
          <h2 className="serif" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontStyle: "italic" }}>
            Featured <span className="gold-text">Projects</span>
          </h2>
        </div>
        <a href="#" style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--gold)", fontWeight: 600, fontSize: 14, textDecoration: "none" }}>
          All Projects <ArrowRight style={{ width: 14, height: 14 }} />
        </a>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 24 }}>
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="card"
            style={{ overflow: "hidden", display: "flex", flexDirection: "column" }}
          >
            {/* iframe preview */}
            <div style={{ height: 200, position: "relative", overflow: "hidden", background: "var(--bg3)" }}>
              <iframe
                src={p.url}
                title={p.title}
                style={{ width: "100%", height: "100%", border: "none", pointerEvents: "none" }}
                loading="lazy"
              />
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to bottom, transparent 50%, var(--bg2))",
              }} />
              <div style={{ position: "absolute", top: 12, right: 12 }}>
                <span className="mono" style={{ fontSize: 11, color: "var(--muted)", background: "rgba(10,10,12,0.7)", padding: "4px 8px", borderRadius: 4 }}>
                  {p.year}
                </span>
              </div>
            </div>

            <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 12, flexWrap: "wrap" }}>
                {p.tags.map((t, j) => <span key={j} className="tag">{t}</span>)}
              </div>
              <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8 }}>{p.title}</h3>
              <p style={{ color: "var(--muted2)", fontSize: 14, lineHeight: 1.7, flex: 1 }}>{p.description}</p>

              <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
                <a
                  href={p.url} target="_blank" rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: "none", flex: 1, justifyContent: "center", fontSize: 13 }}
                >
                  <ExternalLink style={{ width: 14, height: 14 }} /> Live Demo
                </a>
                <button className="btn-secondary" style={{ padding: "10px 14px" }}>
                  <Code2 style={{ width: 16, height: 16 }} />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;