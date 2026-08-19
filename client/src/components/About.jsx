import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Code2,
  BarChart3,
  GraduationCap,
  Sparkles,
  Download,
  Check,
  Copy,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";
import { useCvModal } from "../context/CvModalContext";

const About = () => {
  const { t } = useLanguage();
  const { openCvModal } = useCvModal();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "iyedkhouildi12@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    toast.success(t.nav.emailCopied, {
      description: email,
      duration: 3000,
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const cardIcons = [Code2, BarChart3, GraduationCap, Sparkles];
  const cardAccents = ["var(--accent-primary)", "var(--accent-secondary)", "var(--accent-primary)", "var(--accent-secondary)"];

  return (
    <section id="about" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="section-pill mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          <span>{t.about.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
          {t.about.heading1} <br className="hidden sm:inline" />
          <span className="bronze-text">{t.about.headingHighlight}</span>.
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mt-4 leading-relaxed font-normal">
          {t.about.description}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {t.about.cards.map((card, i) => {
          const Icon = cardIcons[i] || Code2;
          const accent = cardAccents[i];
          const isSage = i % 2 === 1;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="apple-card p-6 sm:p-8 flex flex-col justify-between group relative overflow-hidden"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: isSage ? "var(--accent-secondary-dim)" : "var(--accent-primary-dim)",
                      borderColor: isSage ? "var(--accent-secondary-border)" : "var(--border-strong)",
                      color: isSage ? "var(--accent-secondary)" : "var(--accent-primary)",
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-widest text-[var(--text-secondary)] uppercase px-3 py-1 rounded-full bg-[var(--bg-primary)] border border-[var(--border)]">
                    {card.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight mb-2.5 group-hover:text-[var(--accent-primary-hover)] transition-colors">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal mb-6">
                  {card.description}
                </p>
              </div>

              {/* Bottom Highlight Pill */}
              <div className="pt-4 border-t border-[var(--border)] flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--text-primary)] font-medium">
                  {card.highlight}
                </span>
                <div
                  className="w-2 h-2 rounded-full opacity-60 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: isSage ? "var(--accent-secondary)" : "var(--accent-primary)" }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-strong)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-[var(--text-primary)]">{t.about.banner.title}</h4>
          <p className="text-sm text-[var(--text-secondary)]">
            {t.about.banner.text}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleCopyEmail}
            className="btn-apple-secondary flex-1 sm:flex-initial justify-center"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-[var(--accent-secondary)]" /> : <Copy className="w-4 h-4 text-[var(--text-secondary)]" />}
            <span>{copiedEmail ? t.about.banner.emailCopied : t.about.banner.copyEmail}</span>
          </button>

          <button
            type="button"
            onClick={openCvModal}
            className="btn-apple-primary flex-1 sm:flex-initial justify-center"
            title={t.about.banner.downloadCv}
          >
            <Download className="w-4 h-4" />
            <span>{t.about.banner.downloadCv}</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
