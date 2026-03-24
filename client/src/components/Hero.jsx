import React from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, Brain } from "lucide-react";
import Counter from "./Counter";
import Me from "../assets/Me.jpeg";

const Hero = () => {
  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80 }}>
      <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center", width: "100%", flexWrap: "wrap" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ maxWidth: 700 }}
        >
          <div className="section-label">
            <Zap style={{ width: 12, height: 12 }} />
            Available for projects
          </div>

          <h1 style={{ fontSize: "clamp(42px, 6vw, 82px)", lineHeight: 1.05, fontWeight: 900, marginBottom: 24, letterSpacing: "-0.02em" }}>
            Web Developer<br />
            <span className="serif" style={{ fontStyle: "italic", fontSize: "0.95em" }}>& Data Analyst</span>
          </h1>

          <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--muted2)", maxWidth: 560, marginBottom: 40 }}>
            I design and build scalable web applications while transforming complex data into
            actionable insights — bridging the gap between elegant code and smart decisions.
          </p>

          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 56 }}>
            <motion.a
              href="#projects" className="btn-primary"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ textDecoration: "none" }}
            >
              View Work <ArrowRight style={{ width: 16, height: 16 }} />
            </motion.a>
            <motion.a
              href="#contact" className="btn-secondary"
              whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              style={{ textDecoration: "none" }}
            >
              Get in Touch
            </motion.a>
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
            {[
              { value: 2, suffix: "+", label: "Years Experience" },
              { value: 5, suffix: "+", label: "Projects Shipped" },
              { value: 3, suffix: "+", label: "Certifications" },
            ].map((s, i) => (
              <div key={i}>
                <div className="serif" style={{ fontSize: 36, fontWeight: 400, color: "var(--gold)", lineHeight: 1 }}>
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div style={{ fontSize: 12, color: "var(--muted)", marginTop: 4, letterSpacing: "0.05em" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Hero image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", flexShrink: 0 }}
        >
          {/* Glow */}
          <div style={{
            position: "absolute", inset: -20,
            background: "radial-gradient(circle at 50% 50%, rgba(212,163,89,0.15), transparent 70%)",
            borderRadius: "50%",
            filter: "blur(20px)",
          }} />
          <div style={{
            position: "relative",
            width: "clamp(240px, 30vw, 380px)",
            aspectRatio: "3/4",
            borderRadius: 20,
            overflow: "hidden",
            border: "1px solid var(--border2)",
            background: "var(--bg2)",
          }}>
            <img
              src={Me}
              alt="developer workspace"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.7, filter: "saturate(0.6)" }}
              referrerPolicy="no-referrer"
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(10,10,12,0.9) 0%, transparent 50%)",
            }} />
            <div style={{
              position: "absolute", bottom: 20, left: 20, right: 20,
              background: "rgba(10,10,12,0.6)",
              backdropFilter: "blur(12px)",
              border: "1px solid var(--border2)",
              borderRadius: 12, padding: "14px 16px",
              display: "flex", alignItems: "center", gap: 10,
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "pulse 2s infinite" }} />
              <span style={{ fontSize: 13, fontWeight: 500 }}>Open to freelance</span>
            </div>
            <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }`}</style>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", top: 30, left: -24,
              background: "var(--bg2)", border: "1px solid var(--border2)",
              borderRadius: 12, padding: "10px 16px",
              display: "flex", alignItems: "center", gap: 10,
              boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
            }}
          >
            <div style={{
              width: 32, height: 32, borderRadius: 8,
              background: "var(--gold-dim)", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <Brain style={{ width: 16, height: 16, color: "var(--gold)" }} />
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "DM Mono" }}>MERN + AI/BI</div>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 1 }}>Full Stack</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;