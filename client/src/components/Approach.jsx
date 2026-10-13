import React from "react";
import { motion } from "framer-motion";
import { Search, Compass, Hammer, LineChart } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

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
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="hanko-stamp">方</span>
            <div className="japandi-pill">
              <span>{t.approach?.pill || "06 / Methodology & Process"}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#262522] leading-tight tracking-[-0.02em]">
                {t.approach?.heading1 || "How I approach"}{" "}
                <span className="editorial-accent">
                  {t.approach?.headingHighlight || "software & data"}
                </span>.
              </h2>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-sm font-mono text-[#786F63] tracking-wide uppercase">
                {t.approach?.description || "A structured four-phase delivery cycle from idea to production."}
              </p>
            </div>
          </div>
          <div className="katana-divider my-8" />
        </div>

        {/* 4 Steps Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => {
            const Icon = stepIcons[idx % stepIcons.length];
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: idx * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="japandi-card p-6 flex flex-col justify-between group hover:border-[#E8A1B0]"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-[#262522]/10 mb-6">
                    <span className="font-editorial text-3xl font-medium text-[#E8A1B0]">
                      {step.number}
                    </span>
                    <Icon className="w-4 h-4 text-[#786F63] group-hover:text-[#262522] transition-colors" />
                  </div>

                  <h3 className="font-editorial text-2xl font-normal text-[#262522] mb-1 group-hover:text-[#E8A1B0] transition-colors">
                    {step.title}
                  </h3>

                  <div className="text-[10px] font-mono text-[#AD8B59] uppercase tracking-wider mb-3">
                    {step.subtitle}
                  </div>

                  <p className="text-xs text-[#786F63] font-sans leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#262522]/10 flex items-center justify-between text-[10.5px] font-mono text-[#9E9486]">
                  <span>{t.approach?.phase || "Phase"} {step.number}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8A1B0] opacity-0 group-hover:opacity-100 transition-opacity" />
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
