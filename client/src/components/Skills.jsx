import React from "react";
import { motion } from "framer-motion";
import SkillIcon from "./SkillIcon";

const Skills = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["HTML5","CSS3","JavaScript","TypeScript","React","Next.js","Tailwind CSS","Bootstrap"],
    },
    {
      category: "Backend",
      items: ["Node.js","Express.js","REST APIs","Spring Boot","Next.js API Routes"],
    },
    {
      category: "Databases",
      items: ["MongoDB","SQL","PostgreSQL"],
    },
    {
      category: "Data & BI",
      items: ["Python","Pandas","NumPy","Machine Learning","Power BI","Tableau","Data Visualization","Excel"],
    },
    {
      category: "Tools",
      items: ["Git","GitHub"],
    },
  ];

  return (
    <section id="skills" style={{ paddingBottom: 80 }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label">Technical Skills</div>
        <h2 className="serif" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontStyle: "italic" }}>
          My <span className="gold-text">Toolbox</span>
        </h2>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
        {skills.map((group, gi) => (
          <div key={gi}>
            <div style={{
              display: "flex", alignItems: "center", gap: 16, marginBottom: 20,
            }}>
              <span className="mono" style={{ fontSize: 11, color: "var(--gold)", letterSpacing: "0.12em" }}>
                {String(gi + 1).padStart(2, "0")}
              </span>
              <div style={{ height: 1, flex: 1, background: "var(--border)" }} />
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--muted2)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
                {group.category}
              </span>
              <div style={{ height: 1, flex: 1, background: "var(--border)" }} />
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {group.items.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 }}
                  whileHover={{ y: -3, borderColor: "rgba(212,163,89,0.4)" }}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    padding: "10px 16px",
                    background: "var(--bg2)",
                    border: "1px solid var(--border)",
                    borderRadius: 10,
                    cursor: "default",
                    transition: "all 0.2s",
                  }}
                >
                  <span style={{ color: "var(--gold)" }}>
                    <SkillIcon name={skill} />
                  </span>
                  <span style={{ fontSize: 14, fontWeight: 500 }}>{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;