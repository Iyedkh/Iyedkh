import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  ExternalLink,
  Sparkles,
  Award,
  Calendar,
  Building2,
  CheckCircle2,
} from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      period: "May 2026",
      title: "Freelance Web Developer",
      company: "Oliv'Or",
      link: "https://olivor.tn",
      type: "Freelance",
      description:
        "Modern and responsive vitrine web platform built using React and Tailwind CSS to showcase premium olive oil products and brand heritage.",
    },
    {
      period: "Mar – Apr 2026",
      title: "Freelance Web Developer",
      company: "MS Équipements et Services",
      link: "https://msequipementsetservices.com",
      type: "Freelance",
      description:
        "High-performance corporate website to strengthen digital presence, showcase industrial machinery, and drive client engagement.",
    },
    {
      period: "Jan – May 2026",
      title: "Freelance Full-Stack Developer",
      company: "JCD Commerce",
      link: "https://jcdcommerce.com",
      type: "Freelance",
      description:
        "Engineered full e-commerce ecosystem with MERN stack, secure checkout, product catalog administration, and real-time inventory management.",
    },
    {
      period: "Jun – Aug 2025",
      title: "Freelance Web Developer",
      company: "MS Smart Trading",
      link: "https://mssmarttrading.com",
      type: "Freelance",
      description:
        "Professional commercial web application aligned with brand identity and optimized for international client acquisition.",
    },
    {
      period: "Sep – Oct 2024",
      title: "Freelance Web Developer",
      company: "EGT Naval Services",
      link: "https://egtnavalservices.com",
      type: "Freelance",
      description:
        "Corporate website for naval repair & maintenance services with structured navigation to convert international maritime clients.",
    },
    {
      period: "Feb – Jun 2024",
      title: "Web Developer & Data Analyst",
      company: "IT-Grow",
      type: "Internship",
      description:
        "Engineered e-learning platform with interactive courseware, backend API integrations, and an analytical dashboard for learner progress metrics.",
    },
  ];

  const education = [
    {
      period: "2021 – 2024",
      title: "Bachelor's in Business Intelligence",
      institution: "Higher Institute of Management (ISG Bizerte)",
      type: "Academic Degree",
      description:
        "Specialized in data analysis, statistical modeling, relational databases, decision-support systems, and enterprise BI tools.",
    },
    {
      period: "Certified 2024",
      title: "Data Scientist Bootcamp",
      institution: "GOMYCODE",
      type: "Professional Certification",
      link: "https://diploma.gomycode.app/?id=31752696036635526",
      description:
        "Intensive training in Python, Pandas, NumPy, Scikit-Learn, data visualization, and predictive machine learning algorithms.",
    },
    {
      period: "Certified 2024",
      title: "Software Developer Bootcamp",
      institution: "GOMYCODE",
      type: "Professional Certification",
      link: "https://diploma.gomycode.app/?id=31751302840902487",
      description:
        "Comprehensive immersion in modern full-stack web architecture, React, Node.js, Express, MongoDB, and Git collaboration.",
    },
  ];

  return (
    <section id="experience" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="section-pill mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a574]" />
          <span>Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          Experience & <span className="gold-text">Education</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mt-3 font-normal">
          A progressive journey combining rigorous academic fundamentals with real-world production software delivery.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
        {/* Left Column: Work History */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-[#d4a574]/15 border border-[#d4a574]/30 flex items-center justify-center text-[#ebd0ad]">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Work History</h3>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Production & Freelance
              </p>
            </div>
          </div>

          <div className="relative pl-6 border-l border-white/[0.08] space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company + exp.period}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-6 w-2.5 h-2.5 rounded-full bg-[#09090b] border-2 border-[#d4a574] group-hover:scale-125 group-hover:bg-[#d4a574] transition-all shadow-[0_0_8px_rgba(212,165,116,0.5)]" />

                {/* Experience Card */}
                <div className="apple-card p-5 sm:p-6 space-y-3 hover:border-[#d4a574]/35">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#ebd0ad] tracking-wide uppercase">
                        {exp.period}
                      </span>
                      <h4 className="text-base font-bold text-white tracking-tight mt-0.5 group-hover:text-[#ebd0ad] transition-colors">
                        {exp.title}
                      </h4>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-zinc-400 shrink-0">
                      {exp.type}
                    </span>
                  </div>

                  {exp.link ? (
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#d4a574] hover:text-[#ebd0ad] transition-colors"
                    >
                      <Building2 className="w-3.5 h-3.5" />
                      <span>{exp.company}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300">
                      <Building2 className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{exp.company}</span>
                    </div>
                  )}

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {exp.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic & Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="w-9 h-9 rounded-xl bg-[#8b4789]/20 border border-[#8b4789]/40 flex items-center justify-center text-[#d4a574]">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">Education & Degrees</h3>
              <p className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                Academic & Verified Credentials
              </p>
            </div>
          </div>

          <div className="relative pl-6 border-l border-white/[0.08] space-y-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.title}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative group"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-[31px] top-6 w-2.5 h-2.5 rounded-full bg-[#09090b] border-2 border-[#8b4789] group-hover:scale-125 group-hover:bg-[#8b4789] transition-all shadow-[0_0_8px_rgba(139,71,137,0.5)]" />

                {/* Education Card */}
                <div className="apple-card p-5 sm:p-6 space-y-3 hover:border-[#8b4789]/40">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <span className="text-[11px] font-mono font-semibold text-[#ebd0ad] tracking-wide uppercase">
                        {edu.period}
                      </span>
                      <h4 className="text-base font-bold text-white tracking-tight mt-0.5 group-hover:text-[#ebd0ad] transition-colors">
                        {edu.title}
                      </h4>
                    </div>

                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-[#8b4789]/15 border border-[#8b4789]/30 text-purple-300 shrink-0">
                      {edu.type}
                    </span>
                  </div>

                  <div className="text-xs font-semibold text-zinc-300">
                    {edu.institution}
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-normal">
                    {edu.description}
                  </p>

                  {edu.link && (
                    <div className="pt-2">
                      <a
                        href={edu.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-[#ebd0ad] bg-[#d4a574]/10 border border-[#d4a574]/30 hover:bg-[#d4a574]/20 transition-colors"
                      >
                        <Award className="w-3.5 h-3.5 text-[#d4a574]" />
                        <span>Verify Certificate Credential</span>
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
    </section>
  );
};

export default Experience;