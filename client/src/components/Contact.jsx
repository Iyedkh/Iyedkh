import React from "react";
import { motion } from "framer-motion";
import { AtSign, Phone, MapPin, Github, Linkedin, Twitter, ArrowRight } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" style={{ paddingBottom: 100 }}>
      <div style={{ textAlign: "center", marginBottom: 64 }}>
        <div className="section-label" style={{ justifyContent: "center" }}>Get In Touch</div>
        <h2 className="serif" style={{ fontSize: "clamp(32px, 4vw, 52px)", fontStyle: "italic", marginBottom: 12 }}>
          Let's <span className="gold-text">Connect</span>
        </h2>
        <p style={{ color: "var(--muted2)", fontSize: 16 }}>Have a project in mind? I'd love to hear from you.</p>
      </div>

      <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48 }}>
        {/* Left info */}
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            { icon: AtSign, label: "Email", value: "iyedkhouildi12@gmail.com" },
            { icon: Phone, label: "Phone", value: "+216 93 117 612" },
            { icon: MapPin, label: "Location", value: "Bizerte, Tunisia" },
          ].map((item, i) => (
            <div key={i} className="card" style={{ padding: 20, display: "flex", alignItems: "center", gap: 16 }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: "var(--gold-dim)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0,
              }}>
                <item.icon style={{ width: 18, height: 18, color: "var(--gold)" }} />
              </div>
              <div>
                <div style={{ fontSize: 11, color: "var(--muted)", marginBottom: 2, fontFamily: "DM Mono", letterSpacing: "0.08em" }}>{item.label}</div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{item.value}</div>
              </div>
            </div>
          ))}

          {/* Social */}
          <div style={{ marginTop: 8, display: "flex", gap: 10 }}>
            {[
              { icon: Github, label: "GitHub", link: "https://github.com/Iyedkh" },
              { icon: Linkedin, label: "LinkedIn", link: "https://www.linkedin.com/in/iyed-khouildi-453787326/"},
            ].map((s, i) => (
              <motion.a
                key={i}
                href={s.link} target="_blank" rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                style={{
                  flex: 1, padding: "12px 8px",
                  background: "var(--bg2)", border: "1px solid var(--border)",
                  borderRadius: 10, display: "flex", flexDirection: "column",
                  alignItems: "center", gap: 6, textDecoration: "none",
                  color: "var(--muted)", transition: "all 0.2s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,163,89,0.3)"; e.currentTarget.style.color = "var(--gold)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
              >
                <s.icon style={{ width: 18, height: 18 }} />
                <span style={{ fontSize: 11, fontWeight: 600 }}>{s.label}</span>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="card" style={{ padding: 36 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label>Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div>
                <label>Email</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>
            <div>
              <label>Subject</label>
              <input type="text" placeholder="Project inquiry" />
            </div>
            <div>
              <label>Message</label>
              <textarea placeholder="Tell me about your project..." rows={5} />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              className="btn-primary"
              style={{ width: "100%", justifyContent: "center", padding: "16px 28px", fontSize: 15 }}
            >
              Send Message <ArrowRight style={{ width: 16, height: 16 }} />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;