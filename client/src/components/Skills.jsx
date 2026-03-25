import React from "react";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Bootstrap"],
      proficiency: 92,
      color: "#3b82f6",
    },
    {
      category: "Backend",
      items: ["Node.js","Express.js","REST APIs","Spring Boot","Next.js API Routes"],
      proficiency: 85,
      color: "#8b5cf6",
    },
    {
      category: "Databases",
      items: ["MongoDB","SQL","PostgreSQL"],
      proficiency: 80,
      color: "#06b6d4",
    },
    {
      category: "Data & BI",
      items: ["Python","Pandas","NumPy","Machine Learning","Power BI","Tableau","Data Visualization","Excel"],
      proficiency: 88,
      color: "#10b981",
    },
    {
      category: "Tools",
      items: ["Git","GitHub"],
      proficiency: 90,
      color: "#f59e0b",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  return (
    <section id="skills" style={{ paddingBottom: 80 }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label" style={{ justifyContent: "center" }}>Technical Expertise</div>
        <h2 style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800,
          marginBottom: 16,
          background: "linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          My <span className="gold-text">Toolbox</span>
        </h2>
        <p style={{ color: "var(--muted)", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
          Comprehensive skill set across full-stack development and data analytics
        </p>
      </div>

      {/* Skills Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{ display: "flex", flexDirection: "column", gap: 48 }}
      >
        {skills.map((group, gi) => (
          <motion.div
            key={gi}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: gi * 0.1 }}
            viewport={{ once: true }}
          >
            {/* Category Header with Progress */}
            <div style={{ marginBottom: 28 }}>
              <div style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 12,
              }}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                }}>
                  <span style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: group.color,
                    fontFamily: "DM Mono",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                  }}>
                    {String(gi + 1).padStart(2, "0")}
                  </span>
                  <div style={{
                    width: 40,
                    height: 1.5,
                    background: `linear-gradient(90deg, ${group.color}, transparent)`,
                  }} />
                  <h3 style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "var(--text)",
                    letterSpacing: "0.02em",
                  }}>
                    {group.category}
                  </h3>
                </div>

                {/* Proficiency Badge */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "6px 12px",
                  background: `rgba(${parseInt(group.color.slice(1,3),16)}, ${parseInt(group.color.slice(3,5),16)}, ${parseInt(group.color.slice(5,7),16)}, 0.1)`,
                  border: `1px solid rgba(${parseInt(group.color.slice(1,3),16)}, ${parseInt(group.color.slice(3,5),16)}, ${parseInt(group.color.slice(5,7),16)}, 0.3)`,
                  borderRadius: "20px",
                }}>
                  <span style={{
                    fontSize: 12,
                    fontWeight: 600,
                    color: group.color,
                  }}>
                    {group.proficiency}%
                  </span>
                </div>
              </div>

              {/* Progress Bar */}
              <div style={{
                width: "100%",
                height: 4,
                background: "var(--bg3)",
                borderRadius: 2,
                overflow: "hidden",
              }}>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${group.proficiency}%` }}
                  transition={{ duration: 1, delay: gi * 0.1 }}
                  viewport={{ once: true }}
                  style={{
                    height: "100%",
                    background: `linear-gradient(90deg, ${group.color}, ${group.color}cc)`,
                    borderRadius: 2,
                  }}
                />
              </div>
            </div>

            {/* Skills Items */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))", gap: 12 }}>
              {group.items.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: gi * 0.05 + i * 0.03 }}
                  viewport={{ once: true }}
                  whileHover={{
                    y: -4,
                    boxShadow: `0 12px 24px ${group.color}20`,
                  }}
                  className="card"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 10,
                    padding: "16px 12px",
                    cursor: "default",
                    borderColor: `${group.color}20`,
                    minHeight: 120,
                  }}
                >
                  <div style={{ color: group.color, fontSize: 28 }}>
                    <SkillIcon name={skill} />
                  </div>
                  <span style={{
                    fontSize: 13,
                    fontWeight: 600,
                    textAlign: "center",
                    color: "var(--text)",
                    lineHeight: 1.4,
                  }}>
                    {skill}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Summary Stats */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="card"
        style={{
          marginTop: 60,
          padding: 32,
          background: "linear-gradient(135deg, rgba(59,130,246,0.05), rgba(139,92,246,0.05))",
          border: "1px solid rgba(59,130,246,0.15)",
        }}
      >
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 32,
        }}>
          <div>
            <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>SPECIALIZATION</div>
            <p style={{ color: "var(--text)", fontSize: 15, lineHeight: 1.6 }}>Full-stack MERN development with a focus on scalable, production-ready applications</p>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>DATA FOCUS</div>
            <p style={{ color: "var(--text)", fontSize: 15, lineHeight: 1.6 }}>Data analysis and visualization using Python, Power BI, Tableau, and SQL</p>
          </div>
          <div>
            <div style={{ fontSize: 11, color: "var(--muted)", fontWeight: 700, letterSpacing: "0.1em", marginBottom: 8 }}>EXPERTISE</div>
            <p style={{ color: "var(--text)", fontSize: 15, lineHeight: 1.6 }}>Responsive UI design, API development, database architecture, and BI dashboards</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;