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

const About = () => {
  const { t } = useLanguage();
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
  const cardAccents = ["#d4a574", "#8b4789", "#ebd0ad", "#a1a1aa"];

  return (
    <section id="about" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="section-pill mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a574]" />
          <span>{t.about.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {t.about.heading1} <br className="hidden sm:inline" />
          <span className="gold-text">{t.about.headingHighlight}</span>.
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mt-4 leading-relaxed font-normal">
          {t.about.description}
        </p>
      </div>

      {/* Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
        {t.about.cards.map((card, i) => {
          const Icon = cardIcons[i] || Code2;
          const accent = cardAccents[i] || "#d4a574";
          return (
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
                style={{ backgroundColor: accent }}
              />

              <div>
                {/* Header: Icon & Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                    style={{
                      backgroundColor: `${accent}15`,
                      borderColor: `${accent}35`,
                      color: accent,
                    }}
                  >
                    <Icon className="w-6 h-6" />
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
                <div className="w-2 h-2 rounded-full opacity-50 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: accent }} />
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
        className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.06] via-white/[0.03] to-transparent border border-white/[0.08] backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
      >
        <div className="space-y-1">
          <h4 className="text-lg font-bold text-white">{t.about.banner.title}</h4>
          <p className="text-sm text-zinc-400">
            {t.about.banner.text}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleCopyEmail}
            className="btn-apple-secondary flex-1 sm:flex-initial justify-center"
          >
            {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-zinc-400" />}
            <span>{copiedEmail ? t.about.banner.emailCopied : t.about.banner.copyEmail}</span>
          </button>

          <a
            href="/CV iyed.pdf"
            download="CV_Iyed_Khouildi.pdf"
            className="btn-apple-primary flex-1 sm:flex-initial justify-center"
          >
            <Download className="w-4 h-4" />
            <span>{t.about.banner.downloadCv}</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
