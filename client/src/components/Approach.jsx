import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Hammer, LineChart } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import SectionHeader from "./SectionHeader";

const Approach = () => {
  const { t } = useLanguage();

  const stepIcons = [Search, Compass, Hammer, LineChart];

  const defaultSteps = [
    {
      number: "01",
      title: "Understand the problem",
      subtitle: "Contextual Discovery & Constraint Mapping",
      desc: "Deconstruct business requirements and user friction before writing a line of code. Map data models, user flows, edge cases, and architectural constraints.",
    },
    {
      number: "02",
      title: "Design the architecture",
      subtitle: "System Modeling & Component Hierarchy",
      desc: "Establish clean state boundaries, normalized databases, RESTful endpoint schemas, and modular component contracts. Ensure maintainability before execution.",
    },
    {
      number: "03",
      title: "Build with precision",
      subtitle: "Full-Stack Implementation & Ergonomics",
      desc: "Develop with strict typing, clean separation of concerns, ergonomic microinteractions, responsive breakpoints, and resilient error recovery.",
    },
    {
      number: "04",
      title: "Measure, improve, and iterate",
      subtitle: "Analytics & Production Hardening",
      desc: "Inspect real-world telemetry, query latency, user engagement drop-offs, and data pipelines to continuously refine speed and product value.",
    },
  ];

  const steps = t.approach?.steps || defaultSteps;

  return (
    <section id="approach" className="py-28 sm:py-32 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          kanji="方"
          index="06"
          pill={t.approach?.pill || "Methodology & Process"}
          heading={t.approach?.heading1 || "How I approach"}
          highlight={t.approach?.headingHighlight || "software & data"}
          aside={
            <p className="text-sm font-mono text-[#726A5F] tracking-wide uppercase leading-relaxed">
              {t.approach?.description || "A structured four-phase delivery cycle from idea to production."}
            </p>
          }
        />

        {/* 4 Steps Sequence */}
        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connector thread linking the four phases */}
          <motion.span
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute left-6 right-6 top-[3.1rem] hidden lg:block h-px origin-left rtl:origin-right bg-[repeating-linear-gradient(90deg,rgba(166,133,80,0.55)_0_6px,transparent_6px_12px)]"
          />
          {steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="japandi-card p-6 flex flex-col justify-between group hover:border-[#D48D9B] overflow-hidden"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#22211E]/10 mb-6">
                    <span className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#D48D9B]/40 bg-[#F6F2EB] font-editorial text-2xl font-medium text-[#D48D9B] transition-all duration-500 group-hover:bg-[#22211E] group-hover:text-[#F6F2EB] group-hover:border-[#22211E]">
                      {step.number}
                    </span>
                    <Icon className="w-4 h-4 text-[#726A5F] group-hover:text-[#22211E] transition-colors" />
                  </div>

                  <h3 className="font-editorial text-2xl font-normal text-[#22211E] mb-1 group-hover:text-[#D48D9B] transition-colors">
                    {step.title}
                  </h3>

                  <div className="text-[10px] font-mono text-[#A68550] uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-[#726A5F] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#22211E]/10 flex items-center justify-between text-[10.5px] font-mono text-[#9C9385]">
                  <span>{t.approach?.phase || "Phase"} {step.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D48D9B] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Approach;
