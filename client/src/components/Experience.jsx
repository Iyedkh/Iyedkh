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
            <p className="text-sm font-mono text-[#726A5F] tracking-wide uppercase leading-relaxed">
              {t.experience?.description || "Chronological timeline of verified production deliverables."}
            </p>
          }
        />

        {/* Dual Timelines Grid */}
        <div ref={timelineRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Work History */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#22211E]/15">
              <div className="w-8 h-8 rounded-full bg-[#EBE3D5] border border-[#22211E]/20 flex items-center justify-center text-[#22211E]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-normal text-[#22211E]">
                  {t.experience?.workHistory || "Work History"}
                </h3>
                <p className="text-[10.5px] font-mono text-[#726A5F] uppercase tracking-wider">
                  {t.experience?.workSub || "Production & Freelance Software"}
                </p>
              </div>
            </div>

            <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-[#22211E]/12 space-y-8`}>
              <motion.span
                aria-hidden="true"
                style={{ scaleY: inkProgress }}
                className={`absolute top-0 bottom-0 ${isRTL ? "-right-px" : "-left-px"} w-[2px] origin-top bg-gradient-to-b from-[#22211E] via-[#D48D9B] to-[#A68550]`}
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
                    } top-2 w-3.5 h-3.5 rounded-full bg-[#F6F2EB] border-2 border-[#22211E] group-hover:border-[#D48D9B] group-hover:bg-[#D48D9B] group-hover:scale-125 transition-all duration-300 z-10`}
                  />

                  <div className="japandi-card p-5 space-y-2 group-hover:border-[#D48D9B]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#726A5F]">
                        <Calendar className="w-3.5 h-3.5 text-[#D48D9B]" />
                        <span>{job.period}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#EBE3D5] text-[#22211E]">
                        {job.type}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-medium text-[#22211E] group-hover:text-[#D48D9B] transition-colors">
                      {job.title}
                    </h4>

                    <div className="text-xs font-mono font-medium text-[#A68550]">
                      {job.company}
                    </div>

                    <p className="text-xs text-[#726A5F] font-sans leading-relaxed pt-1">
                      {job.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#22211E]/12">
              <div className="w-8 h-8 rounded-full bg-[#EBE3D5] border border-[#22211E]/15 flex items-center justify-center text-[#22211E]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-normal text-[#22211E]">
                  {t.experience?.educationHistory || "Education & Credentials"}
                </h3>
                <p className="text-[10.5px] font-mono text-[#726A5F] uppercase tracking-wider">
                  {t.experience?.educationSub || "Academic Degree & Professional Bootcamps"}
                </p>
              </div>
            </div>

            <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-[#22211E]/12 space-y-8`}>
              <motion.span
                aria-hidden="true"
                style={{ scaleY: inkProgress }}
                className={`absolute top-0 bottom-0 ${isRTL ? "-right-px" : "-left-px"} w-[2px] origin-top bg-gradient-to-b from-[#6B785D] via-[#A68550] to-transparent`}
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
                    } top-2 w-3.5 h-3.5 rounded-full bg-[#F6F2EB] border-2 border-[#6B785D] group-hover:bg-[#6B785D] group-hover:scale-125 transition-all duration-300 z-10`}
                  />

                  <div className="japandi-card p-5 space-y-2 group-hover:border-[#6B785D]">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#726A5F]">
                        <Award className="w-3.5 h-3.5 text-[#6B785D]" />
                        <span>{edu.period}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#EBE3D5] text-[#6B785D] font-medium">
                        {edu.type}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-medium text-[#22211E] group-hover:text-[#6B785D] transition-colors">
                      {edu.title}
                    </h4>

                    <div className="text-xs font-mono font-medium text-[#726A5F]">
                      {edu.institution}
                    </div>

                    <p className="text-xs text-[#726A5F] font-sans leading-relaxed pt-1">
                      {edu.description}
                    </p>

                    {credentialLinks[edu.institution] && (
                      <div className="pt-2">
                        <a
                          href={credentialLinks[edu.institution]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#6B785D] hover:underline"
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