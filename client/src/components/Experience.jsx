import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  ExternalLink,
  Award,
  Calendar,
  Milestone,
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
    <section id="experience" className="py-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs text-[var(--accent-amber)] font-mono mb-4">
          <Milestone className="w-3.5 h-3.5" />
          <span>{t.experience.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
          {t.experience.heading1} <span className="amber-gradient-text">{t.experience.headingHighlight}</span>
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
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-[var(--border)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-amber-dim)] border border-[var(--border-focus)] flex items-center justify-center text-[var(--accent-amber)]">
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
                {/* Timeline Node */}
                <div className={`absolute ${isRTL ? "-right-[31px]" : "-left-[31px]"} top-2 w-3.5 h-3.5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-amber)] group-hover:bg-[var(--accent-amber)] transition-colors duration-300 shadow-[0_0_10px_rgba(245,158,11,0.3)]`} />

                <div className="console-card p-5 space-y-2.5 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                      <Calendar className="w-3.5 h-3.5 text-[var(--accent-amber)]" />
                      <span>{job.period}</span>
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-md bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border)]">
                      {job.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-amber)] transition-colors">
                    {job.title}
                  </h4>

                  <div className="text-xs font-mono font-medium text-[var(--accent-amber)]">
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
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 pb-4 border-b border-[var(--border)]">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-teal-dim)] border border-[var(--accent-teal-border)] flex items-center justify-center text-[var(--accent-teal)]">
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
                {/* Timeline Node */}
                <div className={`absolute ${isRTL ? "-right-[31px]" : "-left-[31px]"} top-2 w-3.5 h-3.5 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent-teal)] group-hover:bg-[var(--accent-teal)] transition-colors duration-300 shadow-[0_0_10px_rgba(20,184,166,0.3)]`} />

                <div className="console-card p-5 space-y-2.5 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)]">
                      <Award className="w-3.5 h-3.5 text-[var(--accent-teal)]" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="telemetry-pill text-[10px] py-0.5 px-2">
                      {edu.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[var(--text-primary)] group-hover:text-[var(--accent-teal)] transition-colors">
                    {edu.title}
                  </h4>

                  <div className="text-xs font-mono font-medium text-[var(--text-secondary)]">
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
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[var(--accent-teal)] hover:underline transition-colors"
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