import React from "react";
import { Briefcase, GraduationCap, ExternalLink, Calendar, Award } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const Experience = () => {
  const { t, isRTL } = useLanguage();

  const credentialLinks = {
    "GOMYCODE": "https://gomycode.com",
    "Higher Institute of Management (ISG Bizerte)": "https://isgbz.rnu.tn",
    "Institut Supérieur de Gestion (ISG Bizerte)": "https://isgbz.rnu.tn",
    "المعهد العالي للتصرف ببنزرت (ISG Bizerte)": "https://isgbz.rnu.tn",
  };

  const defaultWorkItems = [
    {
      period: "May 2026",
      title: "Freelance Web Developer",
      company: "Oliv'Or",
      type: "Freelance",
      description:
        "Modern and responsive vitrine web platform built using React and Tailwind CSS to showcase premium olive oil products and Mediterranean heritage for international buyers.",
    },
    {
      period: "Mar – Apr 2026",
      title: "Freelance Web Developer",
      company: "MS Équipements et Services",
      type: "Freelance",
      description:
        "High-performance corporate platform to strengthen digital presence, showcase industrial machinery, and convert enterprise equipment inquiries.",
    },
    {
      period: "Jan – May 2026",
      title: "Freelance Full-Stack Developer",
      company: "JCD Commerce",
      type: "Freelance",
      description:
        "Engineered full e-commerce ecosystem with MERN stack, secure checkout, product catalog administration, and real-time inventory management.",
    },
    {
      period: "Jun – Aug 2025",
      title: "Freelance Web Developer",
      company: "MS Smart Trading",
      type: "Freelance",
      description:
        "Professional commercial web application aligned with brand identity and optimized for international commercial client acquisition.",
    },
    {
      period: "Sep – Oct 2024",
      title: "Freelance Web Developer",
      company: "EGT Naval Services",
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

  const defaultEducationItems = [
    {
      period: "Graduated 2024",
      title: "Bachelor's Degree in Business Intelligence",
      institution: "Higher Institute of Management (ISG Bizerte)",
      type: "University Degree",
      description:
        "Rigorous foundation in data analysis, statistical modeling, database administration, business reporting, and decision-support information systems.",
    },
    {
      period: "Certified 2024",
      title: "Full-Stack Web Development Bootcamp",
      institution: "GOMYCODE",
      type: "Professional Certification",
      description:
        "Intensive software engineering training covering React, Node.js, Express, MongoDB, RESTful APIs, and modern frontend design systems.",
    },
    {
      period: "Certified 2024",
      title: "Data Science & Analytics Bootcamp",
      institution: "GOMYCODE",
      type: "Professional Certification",
      description:
        "Practical training in Python, Pandas, NumPy, Machine Learning algorithms, statistical evaluations, and exploratory data visualization.",
    },
  ];

  const workItems = t.experience?.workItems || defaultWorkItems;
  const educationItems = t.experience?.educationItems || defaultEducationItems;

  return (
    <section id="experience" className="py-28 sm:py-32 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="hanko-stamp">歴</span>
            <div className="japandi-pill">
              <span>{t.experience?.pill || "05 / Trajectory & Credentials"}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#262522] leading-tight tracking-[-0.02em]">
                {t.experience?.heading1 || "Experience &"}{" "}
                <span className="editorial-accent">
                  {t.experience?.headingHighlight || "education"}
                </span>.
              </h2>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-sm font-mono text-[#786F63] tracking-wide uppercase">
                {t.experience?.description || "Chronological timeline of verified production deliverables."}
              </p>
            </div>
          </div>
          <div className="katana-divider my-8" />
        </div>

        {/* Dual Timelines Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Work History */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#262522]/15">
              <div className="w-8 h-8 rounded-full bg-[#E9E0D2] border border-[#262522]/20 flex items-center justify-center text-[#262522]">
                <Briefcase className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-normal text-[#262522]">
                  {t.experience?.workHistory || "Work History"}
                </h3>
                <p className="text-[10.5px] font-mono text-[#786F63] uppercase tracking-wider">
                  {t.experience?.workSub || "Production & Freelance Software"}
                </p>
              </div>
            </div>

            <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-[#262522]/15 space-y-8`}>
              {workItems.map((job) => (
                <div key={job.company + job.period} className="relative group">
                  {/* Timeline Dot with Sakura Ring */}
                  <div
                    className={`absolute ${
                      isRTL ? "-right-[31px]" : "-left-[31px]"
                    } top-2 w-3.5 h-3.5 rounded-full bg-[#F5F0E7] border-2 border-[#262522] group-hover:border-[#E8A1B0] group-hover:bg-[#E8A1B0] transition-colors`}
                  />

                  <div className="japandi-card p-5 space-y-2 group-hover:border-[#E8A1B0] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#786F63]">
                        <Calendar className="w-3.5 h-3.5 text-[#E8A1B0]" />
                        <span>{job.period}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#E9E0D2] text-[#262522]">
                        {job.type}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-medium text-[#262522] group-hover:text-[#E8A1B0] transition-colors">
                      {job.title}
                    </h4>

                    <div className="text-xs font-mono font-medium text-[#AD8B59]">
                      {job.company}
                    </div>

                    <p className="text-xs text-[#786F63] font-sans leading-relaxed pt-1">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-3 border-b border-[#262522]/15">
              <div className="w-8 h-8 rounded-full bg-[#E9E0D2] border border-[#262522]/20 flex items-center justify-center text-[#262522]">
                <GraduationCap className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-editorial text-2xl font-normal text-[#262522]">
                  {t.experience?.educationHistory || "Education & Credentials"}
                </h3>
                <p className="text-[10.5px] font-mono text-[#786F63] uppercase tracking-wider">
                  {t.experience?.educationSub || "Academic Degree & Professional Bootcamps"}
                </p>
              </div>
            </div>

            <div className={`relative ${isRTL ? "pr-6 border-r" : "pl-6 border-l"} border-[#262522]/15 space-y-8`}>
              {educationItems.map((edu) => (
                <div key={edu.title} className="relative group">
                  {/* Timeline Dot */}
                  <div
                    className={`absolute ${
                      isRTL ? "-right-[31px]" : "-left-[31px]"
                    } top-2 w-3.5 h-3.5 rounded-full bg-[#F5F0E7] border-2 border-[#78836A] group-hover:bg-[#78836A] transition-colors`}
                  />

                  <div className="japandi-card p-5 space-y-2 group-hover:border-[#78836A] transition-all">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 text-xs font-mono text-[#786F63]">
                        <Award className="w-3.5 h-3.5 text-[#78836A]" />
                        <span>{edu.period}</span>
                      </div>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-full bg-[#E9E0D2] text-[#78836A] font-medium">
                        {edu.type}
                      </span>
                    </div>

                    <h4 className="font-editorial text-xl font-medium text-[#262522] group-hover:text-[#78836A] transition-colors">
                      {edu.title}
                    </h4>

                    <div className="text-xs font-mono font-medium text-[#786F63]">
                      {edu.institution}
                    </div>

                    <p className="text-xs text-[#786F63] font-sans leading-relaxed pt-1">
                      {edu.description}
                    </p>

                    {credentialLinks[edu.institution] && (
                      <div className="pt-2">
                        <a
                          href={credentialLinks[edu.institution]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-[11px] font-mono text-[#78836A] hover:underline"
                        >
                          <span>{t.experience?.verifyCert || "Verify Institution"}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;