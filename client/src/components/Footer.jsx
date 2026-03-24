import React from "react";
import { Terminal, Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer style={{
      borderTop: "1px solid var(--border)",
      background: "var(--bg2)",
      padding: "40px 24px",
    }}>
      <div style={{
        maxWidth: 1200, margin: "0 auto",
        display: "flex", justifyContent: "space-between", alignItems: "center",
        flexWrap: "wrap", gap: 16,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 6,
            background: "var(--gold-dim)", border: "1px solid rgba(212,163,89,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <Terminal style={{ width: 13, height: 13, color: "var(--gold)" }} />
          </div>
          <span className="serif" style={{ fontSize: 18 }}>Iyed</span>
        </div>
        <p style={{ fontSize: 13, color: "var(--muted)" }}>
          © 2024 Iyed Khouildi — Built with passion and clean code.
        </p>
        <div style={{ display: "flex", gap: 24 }}>
          {[
            { icon: Github, label: "GitHub", link:"https://github.com/Iyedkh" },
            { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/iyed-khouildi-453787326/" },
          ].map((s, i) => (
            <a key={i} href={s.link} target="_blank" rel="noopener noreferrer"
              style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--muted)", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
            >
              <s.icon style={{ width: 15, height: 15 }} /> {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;