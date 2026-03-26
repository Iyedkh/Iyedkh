import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, BarChart3, Download, Mail } from "lucide-react";

const About = () => {
  const stats = [
    { icon: Briefcase, title: "Experience", value: "3+ Years", sub: "Building production apps", color: "#d4a574" },
    { icon: GraduationCap, title: "Education", value: "BI Degree", sub: "ISG Bizerte", color: "#8b4789" },
    { icon: Code2, title: "Stack", value: "MERN", sub: "React · Node · MongoDB", color: "#c9d4e0" },
    { icon: BarChart3, title: "Analytics", value: "BI Tools", sub: "Power BI · Tableau · Python", color: "#a8b0ba" },
  ];

  return (
    <section id="about" style={{ paddingBottom: 80 }}>
      <motion.div
        className="about-grid"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
      >
        {/* Left – text */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">Who I Am</div>
          <h2 style={{
            fontSize: "clamp(36px, 4vw, 56px)",
            lineHeight: 1.1,
            marginBottom: 24,
            fontWeight: 800,
            background: "linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Building at the intersection of <span className="gold-text">code & data</span>
          </h2>
          <p style={{
            color: "var(--muted2)",
            lineHeight: 1.9,
            marginBottom: 20,
            fontSize: "clamp(15px, 1.8vw, 16px)",
            fontWeight: 400,
          }}>
            I'm a Web Developer and Data Analyst based in Bizerte, Tunisia, with a degree in Business Intelligence
            from ISG Bizerte. I specialize in the MERN stack and bring an analytical lens to every project —
            combining clean architecture with data-driven thinking.
          </p>
          <p style={{
            color: "var(--muted2)",
            lineHeight: 1.9,
            marginBottom: 32,
            fontSize: "clamp(15px, 1.8vw, 16px)",
            fontWeight: 400,
          }}>
            Whether I'm building a responsive web platform or designing a BI dashboard, my goal is the same:
            create solutions that are functional, beautiful, and smart.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <motion.a
              href="/CV iyed.pdf"
              download
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: "none" }}
            >
              <Download style={{ width: 16, height: 16 }} /> Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: "none" }}
            >
              <Mail style={{ width: 16, height: 16 }} /> Contact Me
            </motion.a>
          </div>
        </motion.div>

        {/* Right – cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="about-cards"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
          }}
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="card"
              style={{
                padding: 24,
                background: `linear-gradient(135deg, rgba(${parseInt(item.color.slice(1,3),16)}, ${parseInt(item.color.slice(3,5),16)}, ${parseInt(item.color.slice(5,7),16)}, 0.05), transparent)`,
                border: `1px solid ${item.color}30`,
              }}
            >
              <motion.div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: `${item.color}20`,
                  border: `1.5px solid ${item.color}40`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <item.icon style={{ width: 24, height: 24, color: item.color }} />
              </motion.div>
              <div style={{
                fontSize: 12,
                color: "var(--muted)",
                marginBottom: 6,
                fontFamily: "DM Mono",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
              }}>
                {item.title}
              </div>
              <div style={{
                fontSize: 22,
                fontWeight: 700,
                marginBottom: 4,
                color: item.color,
              }}>
                {item.value}
              </div>
              <div style={{
                fontSize: 13,
                color: "var(--muted2)",
                fontWeight: 500,
              }}>
                {item.sub}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;