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
          <Sparkles className="w-3.5 h-3.5 text-[#d4a574]" />
          <span>{t.experience.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {t.experience.heading1} <span className="gold-text">{t.experience.headingHighlight}</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mt-3 font-normal">
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
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-[#d4a574]/15 border border-[#d4a574]/30 flex items-center justify-center text-[#d4a574]">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {t.experience.workHistory}
              </h3>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                {t.experience.workSub}
              </p>
            </div>
          </div>

          <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-white/[0.08] space-y-8`}>
            {workItems.map((job) => (
              <div key={job.company + job.period} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className={`absolute ${isRTL ? "-right-[31px]" : "-left-[31px]"} top-1.5 w-3.5 h-3.5 rounded-full bg-[#09090b] border-2 border-[#d4a574] group-hover:bg-[#d4a574] transition-colors duration-300 shadow-[0_0_8px_rgba(212,165,116,0.5)]`} />

                <div className="apple-card p-5 space-y-2.5 group-hover:border-[#d4a574]/35 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#ebd0ad]">
                      <Calendar className="w-3.5 h-3.5 text-[#d4a574]" />
                      <span>{job.period}</span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {job.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#ebd0ad] transition-colors">
                    {job.title}
                  </h4>

                  <div className="text-xs font-mono font-semibold text-zinc-400">
                    {job.company}
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-normal pt-1">
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
          <div className="flex items-center gap-3 pb-4 border-b border-white/[0.08]">
            <div className="w-10 h-10 rounded-xl bg-[#8b4789]/15 border border-[#8b4789]/30 flex items-center justify-center text-[#8b4789]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {t.experience.educationHistory}
              </h3>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                {t.experience.educationSub}
              </p>
            </div>
          </div>

          <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-white/[0.08] space-y-8`}>
            {educationItems.map((edu) => (
              <div key={edu.title + edu.period} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className={`absolute ${isRTL ? "-right-[31px]" : "-left-[31px]"} top-1.5 w-3.5 h-3.5 rounded-full bg-[#09090b] border-2 border-[#8b4789] group-hover:bg-[#8b4789] transition-colors duration-300 shadow-[0_0_8px_rgba(139,71,137,0.5)]`} />

                <div className="apple-card p-5 space-y-2.5 group-hover:border-[#8b4789]/40 transition-all">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[#c9d4e0]">
                      <Award className="w-3.5 h-3.5 text-[#8b4789]" />
                      <span>{edu.period}</span>
                    </div>
                    <span className="text-[10px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-full bg-[#8b4789]/15 text-[#ebd0ad] border border-[#8b4789]/30">
                      {edu.type}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white group-hover:text-[#ebd0ad] transition-colors">
                    {edu.title}
                  </h4>

                  <div className="text-xs font-mono font-semibold text-zinc-400">
                    {edu.institution}
                  </div>

                  <p className="text-xs text-zinc-300 leading-relaxed font-normal pt-1">
                    {edu.description}
                  </p>

                  {/* Verification Link */}
                  {credentialLinks[edu.institution] && (
                    <div className="pt-2">
                      <a
                        href={credentialLinks[edu.institution]}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#ebd0ad] hover:text-white transition-colors"
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