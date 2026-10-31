import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Briefcase, GraduationCap, ExternalLink, Calendar, Award } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { translations } from "../i18n/translations";
import SectionHeader from "./SectionHeader";

const Experience = () => {
  const { t, isRTL } = useLanguage();

  const credentialLinks = {
    "GOMYCODE": "https://gomycode.com",
    "Higher Institute of Management (ISG Bizerte)": "https://isgbz.rnu.tn",
    "Institut Supérieur de Gestion (ISG Bizerte)": "https://isgbz.rnu.tn",
    "المعهد العالي للتصرف ببنزرت (ISG Bizerte)": "https://isgbz.rnu.tn",
  };

  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ["start 75%", "end 60%"] });
  const inkProgress = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  const workItems = t.experience?.workItems || translations.en.experience.workItems;
  const educationItems = t.experience?.educationItems || translations.en.experience.educationItems;

  return (
    <section id="experience" className="py-28 sm:py-32 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          kanji="歴"
          index="05"
          pill={t.experience?.pill || "Trajectory & Credentials"}
          heading={t.experience?.heading1 || "Experience &"}
          highlight={t.experience?.headingHighlight || "education"}
          aside={
            <p className="text-sm font-mono text-ink-soft tracking-wide uppercase leading-relaxed">
              {t.experience?.description || "Chronological timeline of verified production deliverables."}
            </p>
          }
        />

        {/* Dual Timelines Grid */}
        <div ref={timelineRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Work History */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-ink/15">
              <div className="w-8 h-8 rounded-full bg-paper-2 border border-ink/20 flex items-center justify-center text-ink">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-normal text-ink">
                  {t.experience?.workHistory || "Work History"}
                </h3>
                <p className="text-[10.5px] font-mono text-ink-soft uppercase tracking-wider">
                  {t.experience?.workSub || "Production & Freelance Software"}
                </p>
              </div>
            </div>

            <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-ink/12 space-y-8`}>
              <motion.span
                aria-hidden="true"
                style={{ scaleY: inkProgress }}
                className={`absolute top-0 bottom-0 ${isRTL ? "-right-px" : "-left-px"} w-[2px] origin-top bg-gradient-to-b from-ink via-sakura to-gold`}
              />
              {workItems.map((job, idx) => (
                <motion.div
                  key={job.company + job.period}
                  initial={{ opacity: 0, x: isRTL ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: (idx % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Timeline Dot with Sakura Ring */}
                  <div
                    className={`absolute ${
                      isRTL ? "-right-[31px]" : "-left-[31px]"
                    } top-2 w-3.5 h-3.5 rounded-full bg-paper border-2 border-ink group-hover:border-sakura group-hover:bg-sakura group-hover:scale-125 transition-all duration-300 z-10`}
                  />

                  <div className="japandi-card p-5 space-y-2 group-hover:border-sakura">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-ink-soft">
                        <Calendar className="w-3.5 h-3.5 text-sakura" />
                        <span>{job.period}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-paper-2 text-ink">
                        {job.type}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-medium text-ink group-hover:text-sakura transition-colors">
                      {job.title}
                    </h4>

                    <div className="text-xs font-mono font-medium text-gold">
                      {job.company}
                    </div>

                    <p className="text-xs text-ink-soft font-sans leading-relaxed pt-1">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-ink/12">
              <div className="w-8 h-8 rounded-full bg-paper-2 border border-ink/15 flex items-center justify-center text-ink">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-normal text-ink">
                  {t.experience?.educationHistory || "Education & Credentials"}
                </h3>
                <p className="text-[10.5px] font-mono text-ink-soft uppercase tracking-wider">
                  {t.experience?.educationSub || "Academic Degree & Professional Bootcamps"}
                </p>
              </div>
            </div>

            <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-ink/12 space-y-8`}>
              <motion.span
                aria-hidden="true"
                style={{ scaleY: inkProgress }}
                className={`absolute top-0 bottom-0 ${isRTL ? "-right-px" : "-left-px"} w-[2px] origin-top bg-gradient-to-b from-bamboo via-gold to-transparent`}
              />
              {educationItems.map((edu, idx) => (
                <motion.div
                  key={edu.title}
                  initial={{ opacity: 0, x: isRTL ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, delay: (idx % 2) * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div
                    className={`absolute ${
                      isRTL ? "-right-[31px]" : "-left-[31px]"
                    } top-2 w-3.5 h-3.5 rounded-full bg-paper border-2 border-bamboo group-hover:bg-bamboo group-hover:scale-125 transition-all duration-300 z-10`}
                  />

                  <div className="japandi-card p-5 space-y-2 group-hover:border-bamboo">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-ink-soft">
                        <Award className="w-3.5 h-3.5 text-bamboo" />
                        <span>{edu.period}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-paper-2 text-bamboo font-medium">
                        {edu.type}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-medium text-ink group-hover:text-bamboo transition-colors">
                      {edu.title}
                    </h4>

                    <div className="text-xs font-mono font-medium text-ink-soft">
                      {edu.institution}
                    </div>

                    <p className="text-xs text-ink-soft font-sans leading-relaxed pt-1">
                      {edu.description}
                    </p>

                    {credentialLinks[edu.institution] && (
                      <div className="pt-2">
                        <a
                          href={credentialLinks[edu.institution]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-bamboo hover:underline"
                        >
                          <span>{t.experience?.verifyCert || "Verify Institution"}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;