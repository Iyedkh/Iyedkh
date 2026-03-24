import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, History, ExternalLink } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "Feb – Jun 2024",
      title: "Web Developer & Data Analyst",
      company: "IT-Grow",
      type: "Internship",
      description: "Designed and built a complete e-learning platform — responsive UI, backend, interactive features, and a progress-tracking dashboard.",
    },
    {
      period: "Sep – Oct 2024",
      title: "Freelance Web Developer",
      company: "EGT Naval Services",
      link: "https://egtnavalservices.com",
      type: "Freelance",
      description: "Modern corporate website for a naval services company, optimized to attract new clients.",
    },
    {
      period: "Jun – Aug 2025",
      title: "Freelance Web Developer",
      company: "MS Smart Trading",
      link: "https://mssmarttrading.com",
      type: "Freelance",
      description: "Professional business website aligned with brand identity and commercial objectives.",
    },
    {
      period: "Dec 2025 – Jan 2026",
      title: "Founder & Web Developer",
      company: "Oliv'Wood",
      link: "https://olivwood.netlify.app",
      type: "Founder",
      description: "Built a custom e-commerce platform with admin dashboard for a small online business.",
    },
    {
      period: "Mar – Apr 2026",
      title: "Freelance Web Developer",
      company: "MS Équipements et Services",
      link: "https://msequipementsetservices.com",
      type: "Freelance",
      description: "High-performance corporate website to strengthen digital presence and client engagement.",
    },
    {
      period: "Jul – Aug 2026",
      title: " Freelance Web developer",
      company: "JCD Commerce",
      link:"https://jcdcommerce.com",
      type:"Freelance",
      description: "Modern, responsive corporate website optimized for presentation and client acquisition.",
    }
  ];

  const typeColors = {
    Internship: "#60a5fa",
    Freelance: "#d4a359",
    Founder: "#a78bfa",
  };

  return (
    <section id="experience" style={{ paddingBottom: 80 }}>
      <div className="experience-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>

        {/* Education */}
        <div>
          <div className="section-label">
            <GraduationCap style={{ width: 12, height: 12 }} />
            Education
          </div>
          <h2 className="serif" style={{ fontSize: 36, marginBottom: 40, fontStyle: "italic" }}>Academic Path</h2>

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
                <div className="card" style={{ padding: 20, flex: 1 }}>
                  <div className="mono" style={{ fontSize: 10, color: "var(--gold)", letterSpacing: "0.1em", marginBottom: 6 }}>
                    {edu.year}
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{edu.title}</div>
                  <div style={{ color: "var(--muted2)", fontSize: 13, marginBottom: edu.link ? 8 : 0 }}>{edu.inst}</div>
                  {edu.desc && <div style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6 }}>{edu.desc}</div>}
                  {edu.link && (
                    <a href={edu.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 12, color: "var(--gold)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
                      View Certificate <ExternalLink style={{ width: 10, height: 10 }} />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience */}
        <div>
          <div className="section-label">
            <History style={{ width: 12, height: 12 }} />
            Experience
          </div>
          <h2 className="serif" style={{ fontSize: 36, marginBottom: 40, fontStyle: "italic" }}>Work History</h2>

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
                <div className="card" style={{ padding: 20, flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                    <span className="mono" style={{ fontSize: 10, color: "var(--gold)", letterSpacing: "0.08em" }}>{exp.period}</span>
                    <span style={{
                      fontSize: 10, padding: "2px 8px", borderRadius: 4,
                      background: `${typeColors[exp.type]}18`,
                      color: typeColors[exp.type],
                      fontWeight: 600, fontFamily: "DM Mono",
                    }}>{exp.type}</span>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: 14, marginBottom: 3 }}>{exp.title}</div>
                  {exp.link ? (
                    <a href={exp.link} target="_blank" rel="noopener noreferrer"
                      style={{ fontSize: 13, color: "var(--muted2)", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}
                      onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                      onMouseLeave={e => e.currentTarget.style.color = "var(--muted2)"}
                    >
                      {exp.company} <ExternalLink style={{ width: 10, height: 10 }} />
                    </a>
                  ) : (
                    <div style={{ fontSize: 13, color: "var(--muted2)" }}>{exp.company}</div>
                  )}
                  <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, marginTop: 6 }}>{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;