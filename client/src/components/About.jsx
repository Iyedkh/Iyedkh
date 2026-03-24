import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2, BarChart3, Download, Mail } from "lucide-react";

const About = () => {
  return (
    <section id="about" style={{ paddingBottom: 80 }}>
      <motion.div
        className="about-grid"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}
      >
        {/* Left – text */}
        <div>
          <div className="section-label">About Me</div>
          <h2 className="serif" style={{ fontSize: "clamp(36px, 4vw, 56px)", lineHeight: 1.1, marginBottom: 24, fontStyle: "italic" }}>
            Building at the intersection of code & data
          </h2>
          <p style={{ color: "var(--muted2)", lineHeight: 1.9, marginBottom: 24, fontSize: 16 }}>
            I'm a Web Developer and Data Analyst based in Bizerte, Tunisia, with a degree in Business Intelligence
            from ISG Bizerte. I specialize in the MERN stack and bring an analytical lens to every project —
            combining clean architecture with data-driven thinking.
          </p>
          <p style={{ color: "var(--muted2)", lineHeight: 1.9, marginBottom: 40, fontSize: 16 }}>
            Whether I'm building a responsive web platform or designing a BI dashboard, my goal is the same:
            create solutions that are functional, beautiful, and smart.
          </p>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a href="/CV iyed.pdf" download className="btn-primary">
              <Download style={{ width: 15, height: 15 }} /> Download CV
            </a>
            <a href="#contact" className="btn-secondary" style={{ textDecoration: "none" }}>
              <Mail style={{ width: 15, height: 15 }} /> Contact Me
            </a>
          </div>
        </div>

        {/* Right – cards */}
        <div className="about-cards" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { icon: Briefcase, title: "Experience", value: "3+ Years", sub: "Building production apps" },
            { icon: GraduationCap, title: "Education", value: "BI Degree", sub: "ISG Bizerte" },
            { icon: Code2, title: "Stack", value: "MERN", sub: "React · Node · MongoDB" },
            { icon: BarChart3, title: "Analytics", value: "BI Tools", sub: "Power BI · Tableau · Python" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="card"
              style={{ padding: 24 }}
            >
              <div style={{
                width: 40, height: 40, borderRadius: 10,
                background: "var(--gold-dim)", border: "1px solid rgba(212,163,89,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: 16,
              }}>
                <item.icon style={{ width: 18, height: 18, color: "var(--gold)" }} />
              </div>
              <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 4, fontFamily: "DM Mono" }}>{item.title}</div>
              <div style={{ fontSize: 20, fontWeight: 700, marginBottom: 2 }}>{item.value}</div>
              <div style={{ fontSize: 13, color: "var(--muted2)" }}>{item.sub}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default About;