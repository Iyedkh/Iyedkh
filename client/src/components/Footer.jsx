import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "linear-gradient(180deg, var(--bg2) 0%, rgba(15,15,26,0.5) 100%)",
      padding: "48px 24px",
      backdropFilter: "blur(10px)",
    }}>
      <div style={{
        maxWidth: 1200,
        margin: "0 auto",
      }}>
        {/* Top Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: 48,
          alignItems: "center",
          marginBottom: 48,
          paddingBottom: 32,
          borderBottom: "1px solid var(--border)",
        }} className="footer-grid">
          {/* Logo & Brand */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "linear-gradient(135deg, #d4a574, #8b4789)",
              border: "1px solid rgba(212,165,116,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <span style={{
                fontSize: 20,
                fontWeight: 800,
                color: "white",
                letterSpacing: "-0.02em",
              }}>
                I
              </span>
            </div>
            <div>
              <div style={{ fontWeight: 700, fontSize: 18, color: "var(--text)" }}>Iyed</div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "DM Mono", letterSpacing: "0.1em" }}>
                DEVELOPER
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
              padding: "16px 24px",
              background: "linear-gradient(135deg, rgba(59,130,246,0.1), rgba(139,92,246,0.1))",
              borderRadius: 12,
              border: "1px solid rgba(59,130,246,0.2)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{ fontSize: 12, color: "var(--muted)", marginBottom: 4, fontFamily: "DM Mono" }}>Got a project?</div>
            <a href="#contact" style={{
              fontSize: 14,
              fontWeight: 700,
              color: "var(--primary-light)",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
            onMouseEnter={e => e.currentTarget.style.color = "#d4a574"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--primary-light)"}
            >
              Let's Talk →
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ display: "flex", gap: 12, justifyContent: "flex-end" }}
          >
            {[
              { icon: Github, label: "GitHub", link: "https://github.com/Iyedkh" },
              { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/iyed-khouildi-453787326/" },
              { icon: Mail, label: "Email", link: "mailto:iyedkhouildi12@gmail.com" },
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.1 }}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--muted)",
                  transition: "all 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(212,165,116,0.2)"; e.currentTarget.style.color = "#d4a574"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(212,165,116,0.1)"; e.currentTarget.style.color = "var(--muted)"; }}
              >
                <s.icon style={{ width: 18, height: 18 }} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 16,
          fontSize: 13,
          color: "var(--muted)",
        }}>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            © {currentYear} Iyed Khouildi — Built with <Heart style={{ width: 14, height: 14, display: "inline", color: "#ef4444" }} /> and clean code.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ display: "flex", gap: 24, fontSize: 12 }}
          >
            <a href="#" style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--primary-light)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              Privacy Policy
            </a>
            <a href="#" style={{ color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--primary-light)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              Terms of Service
            </a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;