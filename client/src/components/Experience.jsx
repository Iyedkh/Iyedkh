import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, History, ExternalLink, Award, Briefcase } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "Feb – Jun 2024",
      title: "Web Developer & Data Analyst",
      company: "IT-Grow",
      type: "Internship",
      description: "Designed and built a complete e-learning platform — responsive UI, backend, interactive features, and a progress-tracking dashboard.",
      icon: Briefcase,
    },
    {
      period: "Sep – Oct 2024",
      title: "Freelance Web Developer",
      company: "EGT Naval Services",
      link: "https://egtnavalservices.com",
      type: "Freelance",
      description: "Modern corporate website for a naval services company, optimized to attract new clients.",
      icon: Briefcase,
    },
    {
      period: "Jun – Aug 2025",
      title: "Freelance Web Developer",
      company: "MS Smart Trading",
      link: "https://mssmarttrading.com",
      type: "Freelance",
      description: "Professional business website aligned with brand identity and commercial objectives.",
      icon: Briefcase,
    },
    {
      period: "Dec 2025 – Jan 2026",
      title: "Founder & Web Developer",
      company: "Oliv'Wood",
      link: "https://olivwood.netlify.app",
      type: "Founder",
      description: "Built a custom e-commerce platform with admin dashboard for a small online business.",
      icon: Briefcase,
    },
    {
      period: "Mar – Apr 2026",
      title: "Freelance Web Developer",
      company: "MS Équipements et Services",
      link: "https://msequipementsetservices.com",
      type: "Freelance",
      description: "High-performance corporate website to strengthen digital presence and client engagement.",
      icon: Briefcase,
    },
    {
      period: "Jul – Aug 2026",
      title: " Freelance Web developer",
      company: "JCD Commerce",
      link:"https://jcdcommerce.com",
      type:"Freelance",
      description: "Modern, responsive corporate website optimized for presentation and client acquisition.",
      icon: Briefcase,
    }
  ];

  const typeColors = {
    Internship: { bg: "rgba(212,165,116,0.1)", border: "rgba(212,165,116,0.3)", text: "#d4a574" },
    Freelance: { bg: "rgba(139,71,137,0.1)", border: "rgba(139,71,137,0.3)", text: "#8b4789" },
    Founder: { bg: "rgba(201,212,224,0.1)", border: "rgba(201,212,224,0.3)", text: "#c9d4e0" },
  };

  return (
    <section id="experience" style={{ paddingBottom: 80 }}>
      <div className="experience-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-label">
            <GraduationCap style={{ width: 14, height: 14 }} />
            Education
          </div>
          <h2 style={{
            fontSize: 36,
            marginBottom: 40,
            fontWeight: 800,
            background: "linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Academic <span className="gold-text">Path</span>
          </h2>

          <div style={{ position: "relative" }} className="timeline-line">
            {[
              {
                year: "2021 – 2024",
                title: "Bachelor's in Business Intelligence",
                inst: "ISG Bizerte",
                desc: "Specialized in data analysis, statistical methods, database management, and transforming data into actionable insights.",
              },
              {
                year: "Certification",
                title: "Data Scientist Bootcamp",
                inst: "GOMYCODE",
                link: "https://diploma.gomycode.app/?id=31752696036635526",
              },
              {
                year: "Certification",
                title: "Software Developer Bootcamp",
                inst: "GOMYCODE",
                link: "https://diploma.gomycode.app/?id=31751302840902487",
              },
            ].map((edu, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                style={{ display: "flex", gap: 20, marginBottom: 28 }}
              >
                <div className="dot" />
                <motion.div
                  className="card"
                  whileHover={{ y: -4 }}
                  style={{
                    padding: 20,
                    flex: 1,
                    border: edu.link ? "1px solid rgba(10,185,181,0.2)" : "1px solid var(--border)",
                  }}
                >
                  <div style={{
                    fontSize: 11,
                    fontWeight: 700,
                    color: edu.link ? "#d4a574" : "var(--primary-light)",
                    letterSpacing: "0.1em",
                    marginBottom: 8,
                    textTransform: "uppercase",
                    fontFamily: "DM Mono",
                  }}>
                    {edu.year}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4, color: "var(--text)" }}>{edu.title}</div>
                  <div style={{ color: "var(--muted2)", fontSize: 13, marginBottom: edu.link ? 12 : 0 }}>{edu.inst}</div>
                  {edu.desc && <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{edu.desc}</div>}
                  {edu.link && (
                    <motion.a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      style={{
                        fontSize: 12,
                        color: "#d4a574",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        marginTop: 8,
                        fontWeight: 600,
                      }}
                    >
                      View Certificate <ExternalLink style={{ width: 12, height: 12 }} />
                    </motion.a>
                  )}
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-label">
            <History style={{ width: 14, height: 14 }} />
            Experience
          </div>
          <h2 style={{
            fontSize: 36,
            marginBottom: 40,
            fontWeight: 800,
            background: "linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>
            Work <span className="gold-text">History</span>
          </h2>

          <div style={{ position: "relative" }} className="timeline-line">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                style={{ display: "flex", gap: 20, marginBottom: 20 }}
              >
                <div className="dot" />
                <motion.div
                  className="card"
                  whileHover={{ y: -4 }}
                  style={{
                    padding: 20,
                    flex: 1,
                    background: typeColors[exp.type].bg,
                    border: `1px solid ${typeColors[exp.type].border}`,
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <span style={{
                      fontSize: 11,
                      color: "var(--primary-light)",
                      letterSpacing: "0.08em",
                      fontFamily: "DM Mono",
                      fontWeight: 600,
                      textTransform: "uppercase",
                    }}>
                      {exp.period}
                    </span>
                    <span style={{
                      fontSize: 10,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: typeColors[exp.type].bg,
                      color: typeColors[exp.type].text,
                      fontWeight: 700,
                      fontFamily: "DM Mono",
                      border: `1px solid ${typeColors[exp.type].border}`,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                    }}>
                      {exp.type}
                    </span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 3, color: "var(--text)" }}>{exp.title}</div>
                  {exp.link ? (
                    <motion.a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ x: 4 }}
                      style={{
                        fontSize: 13,
                        color: typeColors[exp.type].text,
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                        fontWeight: 600,
                        marginBottom: 8,
                      }}
                    >
                      {exp.company} <ExternalLink style={{ width: 12, height: 12 }} />
                    </motion.a>
                  ) : (
                    <div style={{ fontSize: 13, color: "var(--text-secondary)", marginBottom: 8, fontWeight: 600 }}>
                      {exp.company}
                    </div>
                  )}
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{exp.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;