import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const ProjectModal = ({ project, onClose }) => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#252521]/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          initial={{ opacity: 0, scale: 0.95, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 16 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-2xl rounded-3xl bg-[#F5F2EA] border border-[#252521]/15 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto washi-grain"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            aria-label="Close case study modal"
            className={`absolute top-6 ${isRTL ? "left-6" : "right-6"} p-2 rounded-full text-[#726A5F] hover:text-[#252521] bg-[#EAE4D8] hover:bg-[#D8CBB8] transition-colors focus:outline-none`}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className={`mb-6 ${isRTL ? "pl-10" : "pr-10"}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-[#8B5E3C] uppercase tracking-wider font-semibold">
                {project.categoryLabel || "Selected Project"}
              </span>
              <span className="text-[#726A5F]">•</span>
              <span className="font-mono text-xs text-[#726A5F]">{project.year}</span>
            </div>
            <h3 className="font-editorial text-3xl sm:text-4xl font-normal text-[#252521] leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-[#726A5F] uppercase tracking-wider mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="japandi-divider my-4" />

          {/* Overview */}
          <div className="space-y-6 text-sm text-[#726A5F] font-sans leading-relaxed">
            <div>
              <h4 className="font-editorial text-lg text-[#252521] font-semibold mb-1">
                Overview &amp; Architecture
              </h4>
              <p>{project.description}</p>
            </div>

            {project.caseStudy && (
              <div>
                <h4 className="font-editorial text-lg text-[#252521] font-semibold mb-1">
                  Core Implementation &amp; Problem Solved
                </h4>
                <p>{project.caseStudy}</p>
              </div>
            )}

            {/* Role & Impact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#EAE4D8] border border-[#252521]/10">
                <div className="text-[11px] font-mono text-[#726A5F] uppercase">
                  {t.projects?.roleLabel || "Role:"}
                </div>
                <div className="text-sm font-medium text-[#252521] mt-0.5">{project.role}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#EAE4D8] border border-[#252521]/10">
                <div className="text-[11px] font-mono text-[#726A5F] uppercase">
                  Key Impact &amp; Deliverable
                </div>
                <div className="text-sm font-medium text-[#35483B] mt-0.5">{project.impact}</div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div className="text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mb-2">
                Applied Technologies &amp; Tools
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-[#EAE4D8] border border-[#252521]/10 text-xs font-mono text-[#252521]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-8 pt-6 border-t border-[#252521]/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-japandi-primary text-xs py-2 px-5 rounded-full"
                >
                  <span>{t.projects?.visitLive || "Launch Live Platform"}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-japandi-secondary text-xs py-2 px-5 rounded-full"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>{t.projects?.viewGithub || "Repository"}</span>
                </a>
              )}
            </div>

            <button
              onClick={onClose}
              className="text-xs font-mono text-[#726A5F] hover:text-[#252521] transition-colors"
            >
              {t.cvModal?.close ? `${t.cvModal.close} [Esc]` : "Close [Esc]"}
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
