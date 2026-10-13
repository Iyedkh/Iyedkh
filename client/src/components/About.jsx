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
  Terminal,
  Compass,
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

  const cardIcons = [Code2, BarChart3, GraduationCap, Compass];

  return (
    <section id="about" className="py-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs text-[var(--accent-amber)] font-mono mb-4">
          <Terminal className="w-3.5 h-3.5" />
          <span>{t.about.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
          {t.about.heading1} <br className="hidden sm:inline" />
          <span className="amber-gradient-text">{t.about.headingHighlight}</span>.
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-2xl mt-4 leading-relaxed font-normal">
          {t.about.description}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {t.about.cards.map((card, i) => {
          const Icon = cardIcons[i] || Code2;
          const isTeal = i % 2 === 1;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="console-card p-6 sm:p-8 flex flex-col justify-between group"
            >
              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${
                      isTeal
                        ? "bg-[var(--accent-teal-dim)] border-[var(--accent-teal-border)] text-[var(--accent-teal)]"
                        : "bg-[var(--accent-amber-dim)] border-[var(--border-focus)] text-[var(--accent-amber)]"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-medium text-[var(--text-secondary)] px-3 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border)]">
                    {card.badge}
                  </span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight mb-2.5 group-hover:text-[var(--accent-amber-hover)] transition-colors">
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
                  className={`w-2 h-2 rounded-full transition-opacity opacity-60 group-hover:opacity-100 ${
                    isTeal ? "bg-[var(--accent-teal)]" : "bg-[var(--accent-amber)]"
                  }`}
                />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Action Banner */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55 }}
        className="p-6 sm:p-8 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl"
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
            className="btn-secondary-action flex-1 sm:flex-initial justify-center"
          >
            {copiedEmail ? (
              <Check className="w-4 h-4 text-[var(--accent-teal)]" />
            ) : (
              <Copy className="w-4 h-4 text-[var(--text-secondary)]" />
            )}
            <span>{copiedEmail ? t.about.banner.emailCopied : t.about.banner.copyEmail}</span>
          </button>

          <button
            type="button"
            onClick={openCvModal}
            className="btn-primary-action flex-1 sm:flex-initial justify-center"
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