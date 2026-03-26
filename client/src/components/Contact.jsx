import React from "react";
import { motion } from "framer-motion";
import { AtSign, Phone, MapPin, Github, Linkedin, ArrowRight, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: AtSign, label: "Email", value: "iyedkhouildi12@gmail.com", color: "#d4a574" },
    { icon: Phone, label: "Phone", value: "+216 93 117 612", color: "#8b4789" },
    { icon: MapPin, label: "Location", value: "Bizerte, Tunisia", color: "#c9d4e0" },
  ];

  const socials = [
    { icon: Github, label: "GitHub", link: "https://github.com/Iyedkh" },
    { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/iyed-khouildi-453787326/" },
  ];

  return (
    <section id="contact" style={{ paddingBottom: 100 }}>
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
        <h2 style={{
          fontSize: "clamp(32px, 4vw, 52px)",
          fontWeight: 800,
          marginBottom: 16,
          background: "linear-gradient(135deg, var(--text) 0%, var(--text-secondary) 100%)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Let's <span className="gold-text">Connect</span>
        </h2>
        <p style={{ color: "var(--muted2)", fontSize: 16, maxWidth: 500, margin: "0 auto" }}>
          Have a project in mind? I'd love to hear from you. Let's create something amazing together.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48 }}>
        {/* Left Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
          {/* Contact Info Cards */}
          {contactInfo.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="card"
              style={{
                padding: 20,
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: `linear-gradient(135deg, rgba(${parseInt(item.color.slice(1,3),16)}, ${parseInt(item.color.slice(3,5),16)}, ${parseInt(item.color.slice(5,7),16)}, 0.05), transparent)`,
                border: `1px solid ${item.color}30`,
              }}
            >
              <div style={{
                width: 48,
                height: 48,
                borderRadius: 12,
                background: `${item.color}20`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                border: `1.5px solid ${item.color}40`,
              }}>
                <item.icon style={{ width: 20, height: 20, color: item.color }} />
              </div>
              <div>
                <div style={{
                  fontSize: 11,
                  color: "var(--muted)",
                  marginBottom: 4,
                  fontFamily: "DM Mono",
                  letterSpacing: "0.1em",
                  fontWeight: 700,
                  textTransform: "uppercase",
                }}>
                  {item.label}
                </div>
                <div style={{ fontWeight: 600, fontSize: 15, color: "var(--text)" }}>{item.value}</div>
              </div>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ marginTop: 12, display: "flex", gap: 12 }}
          >
            <h3 style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--muted)",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              margin: "auto 0 auto 0",
              width: "100%",
            }}>
              Follow Me
            </h3>
          </motion.div>

          <div style={{ display: "flex", gap: 12 }}>
            {socials.map((s, i) => (
              <motion.a
                key={i}
                href={s.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4, scale: 1.05 }}
                className="card"
                style={{
                  flex: 1,
                  padding: "14px 8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: 8,
                  textDecoration: "none",
                  color: "var(--muted)",
                  transition: "all 0.2s",
                  border: "1px solid rgba(212,165,116,0.2)",
                }}
              >
                <s.icon style={{ width: 20, height: 20 }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase" }}>
                  {s.label}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="card"
          style={{
            padding: 36,
            background: "linear-gradient(135deg, rgba(212,165,116,0.05), rgba(139,71,137,0.05))",
            border: "1px solid rgba(212,165,116,0.15)",
          }}
        >
          <form style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {/* Name & Email Row */}
            <div className="contact-form-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  style={{ marginTop: 8 }}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label>Email Address</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  style={{ marginTop: 8 }}
                />
              </motion.div>
            </div>

            {/* Subject */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <label>Subject</label>
              <input
                type="text"
                placeholder="Project inquiry"
                style={{ marginTop: 8 }}
              />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <label>Message</label>
              <textarea
                placeholder="Tell me about your project..."
                rows={5}
                style={{ marginTop: 8, resize: "none" }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="btn-primary"
              type="submit"
              style={{
                width: "100%",
                justifyContent: "center",
                padding: "14px 28px",
                fontSize: 15,
                marginTop: 8,
              }}
            >
              <Send style={{ width: 17, height: 17 }} /> Send Message
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;