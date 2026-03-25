import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Download, Mail } from "lucide-react";
import Counter from "./Counter";
import Me from "../assets/Me.jpeg";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" style={{ minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 80, paddingBottom: 80 }}>
      <div className="hero-grid" style={{ display: "grid", gridTemplateColumns: "1fr auto", gap: 64, alignItems: "center", width: "100%", flexWrap: "wrap" }}>
        {/* Left Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{ maxWidth: 700 }}
        >
          {/* Status Badge */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "8px 16px",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "20px",
              marginBottom: 24,
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{
              width: 6,
              height: 6,
              borderRadius: "50%",
              background: "#10b981",
              boxShadow: "0 0 12px #10b981",
              animation: "pulse 2s infinite",
            }} />
            <span style={{ fontSize: 12, fontWeight: 600, color: "#10b981", letterSpacing: "0.05em" }}>
              AVAILABLE FOR PROJECTS
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants}>
            <h1 style={{
              fontSize: "clamp(42px, 6.5vw, 80px)",
              lineHeight: 1.05,
              fontWeight: 900,
              marginBottom: 20,
              letterSpacing: "-0.02em",
              background: "linear-gradient(135deg, #f1f5f9 0%, #e2e8f0 50%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
              Full Stack Developer
            </h1>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.2,
              fontWeight: 700,
              background: "linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              marginBottom: 24,
              letterSpacing: "-0.01em",
            }}>
              & Data Analyst
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            style={{
              fontSize: "clamp(15px, 1.8vw, 17px)",
              lineHeight: 1.8,
              color: "var(--muted2)",
              maxWidth: 560,
              marginBottom: 40,
              fontWeight: 400,
            }}
          >
            I design and build scalable web applications while transforming complex data into actionable insights — bridging the gap between elegant code and smart decisions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 60 }}
          >
            <motion.a
              href="#projects"
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: "none" }}
            >
              View My Work <ArrowRight style={{ width: 16, height: 16 }} />
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: "none" }}
            >
              <Mail style={{ width: 16, height: 16 }} /> Get in Touch
            </motion.a>
            <motion.a
              href="/CV iyed.pdf"
              download
              className="btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textDecoration: "none" }}
            >
              <Download style={{ width: 16, height: 16 }} /> Download CV
            </motion.a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 32 }}
          >
            {[
              { value: 3, suffix: "+", label: "Years Experience" },
              { value: 5, suffix: "+", label: "Projects Shipped" },
              { value: 3, suffix: "+", label: "Certifications" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileInView={{ y: 0, opacity: 1 }}
                initial={{ y: 10, opacity: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
              >
                <div style={{
                  fontSize: "clamp(28px, 3vw, 36px)",
                  fontWeight: 700,
                  background: "linear-gradient(135deg, var(--primary-light), var(--accent-light))",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  lineHeight: 1,
                  marginBottom: 6,
                }}>
                  <Counter target={s.value} suffix={s.suffix} />
                </div>
                <div style={{
                  fontSize: 13,
                  color: "var(--muted)",
                  letterSpacing: "0.03em",
                  fontWeight: 500,
                }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: "relative", flexShrink: 0 }}
        >
          {/* Gradient Background Blur */}
          <div style={{
            position: "absolute", inset: -30,
            background: "linear-gradient(135deg, rgba(59,130,246,0.15), rgba(139,92,246,0.15), rgba(6,182,212,0.15))",
            borderRadius: "50%",
            filter: "blur(40px)",
            animation: "pulse 4s ease-in-out infinite",
          }} />

          {/* Image Container */}
          <motion.div
            style={{
              position: "relative",
              width: "clamp(240px, 30vw, 380px)",
              aspectRatio: "3/4",
              borderRadius: 16,
              overflow: "hidden",
              border: "1px solid rgba(59,130,246,0.3)",
              background: "var(--bg2)",
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={Me}
              alt="developer workspace"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.8,
                filter: "saturate(0.7)",
              }}
              referrerPolicy="no-referrer"
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(15,15,26,0.95) 0%, rgba(15,15,26,0.5) 40%, transparent 70%)",
            }} />

            {/* Status Badge */}
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              style={{
                position: "absolute",
                bottom: 20,
                left: 20,
                right: 20,
                background: "rgba(15,15,26,0.7)",
                backdropFilter: "blur(12px)",
                border: "1px solid rgba(59,130,246,0.2)",
                borderRadius: 12,
                padding: "14px 16px",
                display: "flex",
                alignItems: "center",
                gap: 10,
              }}
            >
              <div style={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "#10b981",
                boxShadow: "0 0 8px #10b981",
                animation: "pulse 2s infinite",
              }} />
              <span style={{ fontSize: 13, fontWeight: 500, color: "var(--text)" }}>Open to opportunities</span>
            </motion.div>
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              top: 20,
              left: -40,
              background: "var(--bg2)",
              border: "1px solid rgba(59,130,246,0.2)",
              borderRadius: 12,
              padding: "12px 16px",
              display: "flex",
              alignItems: "center",
              gap: 12,
              boxShadow: "0 8px 32px rgba(59,130,246,0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div style={{
              width: 40,
              height: 40,
              borderRadius: 10,
              background: "rgba(139,92,246,0.1)",
              border: "1px solid rgba(139,92,246,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}>
              <Brain style={{ width: 20, height: 20, color: "var(--accent-light)" }} />
            </div>
            <div>
              <div style={{ fontSize: 11, color: "var(--muted)", fontFamily: "DM Mono", fontWeight: 600, letterSpacing: "0.1em" }}>TECH STACK</div>
              <div style={{ fontSize: 13, fontWeight: 700, marginTop: 2, color: "var(--text)" }}>MERN + BI</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
      `}</style>
    </section>
  );
};

export default Hero;