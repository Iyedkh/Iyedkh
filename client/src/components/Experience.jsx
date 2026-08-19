import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Sparkles,
  ExternalLink,
  Award,
  Calendar,
} from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Experience = () => {
  const { t, isRTL } = useLanguage();

  const credentialLinks = {
    "GOMYCODE": "https://gomycode.com",
    "Higher Institute of Management (ISG Bizerte)": "https://isgbz.rnu.tn",
    "Institut Supérieur de Gestion (ISG Bizerte)": "https://isgbz.rnu.tn",
    "المعهد العالي للتصرف ببنزرت (ISG Bizerte)": "https://isgbz.rnu.tn",
  };

  const workItems = t.experience.workItems;
  const educationItems = t.experience.educationItems;

  return (
    <section id="experience" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="section-pill mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
          <span>{t.experience.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
          {t.experience.heading1} <span className="bronze-text">{t.experience.headingHighlight}</span>
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mt-3 font-normal">
          {t.experience.description}
        </p>
      </div>

      {/* Dual Timelines Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* Work History */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-[var(--border)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-primary-dim)] border border-[var(--accent-primary)] flex items-center justify-center text-[var(--accent-primary)]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                {t.experience.workHistory}
              </h3>
              <p className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                {t.experience.workSub}
              </p>
            </div>
          </div>

          <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-[var(--border)] space-y-8`}>
            {workItems.map((job) => (
              <div key={job.company + job.period} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className={`absolute ${isRTL ? "-right-[31px]" : "-left-[31px]"} top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-primary)] group-hover:bg-[var(--accent-primary)] transition-colors duration-300 shadow-[0_0_8px_rgba(192,138,78,0.4)]`} />

                <div className="apple-card p-5 space-y-2.5 group-hover:border-[var(--border-strong)] transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                      <span>{job.period}</span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full bg-[var(--bg-surface-elevated)] text-[var(--text-secondary)] border border-[var(--border)]">
                      {job.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {job.title}
                  </h4>

                  <div className="text-xs font-mono font-semibold text-[var(--text-secondary)]">
                    {job.company}
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal pt-1">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Education & Degrees */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-[var(--border)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-secondary-dim)] border border-[var(--accent-secondary-border)] flex items-center justify-center text-[var(--accent-secondary)]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] tracking-tight">
                {t.experience.educationHistory}
              </h3>
              <p className="text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                {t.experience.educationSub}
              </p>
            </div>
          </div>

          <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-[var(--border)] space-y-8`}>
            {educationItems.map((edu) => (
              <div key={edu.title + edu.period} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className={`absolute ${isRTL ? "-right-[31px]" : "-left-[31px]"} top-1.5 w-3.5 h-3.5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-secondary)] group-hover:bg-[var(--accent-secondary)] transition-colors duration-300 shadow-[0_0_8px_rgba(107,143,113,0.4)]`} />

                <div className="apple-card p-5 space-y-2.5 group-hover:border-[var(--border-strong)] transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                      <Award className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="tech-pill text-[10px] py-0.5 px-2.5">
                      {edu.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-primary)] transition-colors">
                    {edu.title}
                  </h4>

                  <div className="text-xs font-mono font-semibold text-[var(--text-secondary)]">
                    {edu.institution}
                  </div>

                  <p className="text-xs text-[var(--text-secondary)] leading-relaxed font-normal pt-1">
                    {edu.description}
                  </p>

                  {/* Verification Link */}
                  {credentialLinks[edu.institution] && (
                    <div className="pt-2">
                      <a
                        href={credentialLinks[edu.institution]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--accent-primary)] hover:text-[var(--accent-primary-hover)] underline transition-colors"
                      >
                        <span>{t.experience.verifyCert}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;