import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  GraduationCap,
  Sparkles,
  Download,
  Mail,
  Check,
  Copy,
  Layers,
  ArrowUpRight,
} from "lucide-react";
import { toast } from "sonner";

const About = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "iyedkhouildi12@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    toast.success("Email copied to clipboard", {
      description: email,
      duration: 3000,
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const bentoCards = [
    {
      icon: Code2,
      badge: "ENGINEERING",
      title: "Full-Stack Development",
      description:
        "Building end-to-end web applications with React, Next.js, Node.js, and MongoDB. Focused on clean architecture, reusable components, and performant APIs.",
      accent: "#d4a574",
      highlight: "MERN • REST APIs • Next.js",
    },
    {
      icon: BarChart3,
      badge: "ANALYTICS",
      title: "Business Intelligence",
      description:
        "Transforming raw datasets into actionable insights with Python, Pandas, Power BI, and Tableau. Bringing analytical rigor to digital products.",
      accent: "#8b4789",
      highlight: "Python • Power BI • SQL • Tableau",
    },
    {
      icon: GraduationCap,
      badge: "ACADEMIC FOUNDATION",
      title: "Degree in Business Intelligence",
      description:
        "Graduated from ISG Bizerte, complemented by dual professional bootcamps in Data Science and Software Development.",
      accent: "#ebd0ad",
      highlight: "ISG Bizerte • GOMYCODE Bootcamps",
    },
    {
      icon: Sparkles,
      badge: "PHILOSOPHY",
      title: "Design & High Standards",
      description:
        "Passionate about user ergonomics, micro-interactions, responsive precision, and creating digital experiences that feel polished.",
      accent: "#a1a1aa",
      highlight: "Ergonomics • Accessibility • Performance",
    },
  ];

  return (
    <section id="about" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="section-pill mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a574]" />
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Building at the intersection of <br className="hidden sm:inline" />
          <span className="gold-text">code, data & design</span>.
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mt-4 leading-relaxed font-normal">
          Based in Bizerte, Tunisia, I am a developer and data analyst who bridges engineering capability with statistical thinking to deliver scalable, intelligent software.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {bentoCards.map((card, i) => (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="apple-card p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Subtle Gradient Glow */}
            <div
              className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
              style={{ backgroundColor: card.accent }}
            />

            <div>
              {/* Header: Icon & Badge */}
              <div className="flex items-center justify-between mb-6">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: `${card.accent}15`,
                    borderColor: `${card.accent}35`,
                    color: card.accent,
                  }}
                >
                  <card.icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-widest text-zinc-500 uppercase px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06]">
                  {card.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white tracking-tight mb-2.5 group-hover:text-[#ebd0ad] transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-zinc-400 leading-relaxed font-normal mb-6">
                {card.description}
              </p>
            </div>

            {/* Bottom Highlight Pill */}
            <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-300 font-medium">
                {card.highlight}
              </span>
              <div className="w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: card.accent }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent border border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-white">Interested in collaborating?</h4>
          <p className="text-sm text-zinc-400">
            Available for full-time roles, freelance projects, and data engineering contracts.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleCopyEmail}
            className="btn-apple-secondary flex-1 sm:flex-initial justify-center"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
            <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
          </button>

          <a
            href="/CV iyed.pdf"
            download="CV_Iyed_Khouildi.pdf"
            className="btn-apple-primary flex-1 sm:flex-initial justify-center"
          >
            <Download className="w-4 h-4" />
            <span>Download CV</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;