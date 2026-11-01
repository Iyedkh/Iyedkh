import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Github } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";

const ProjectModal = ({ project, onClose }) => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    // Keep the page behind the dialog still while it is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  if (!project) return null;

  return (
      <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.18 } }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={onClose}
          className="fixed inset-0 bg-ink/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 8, transition: { duration: 0.16, ease: [0.23, 1, 0.32, 1] } }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full max-w-2xl rounded-3xl bg-paper border border-ink/15 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto washi-grain"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            autoFocus
            aria-label={t.ui?.closeModal || "Close case study modal"}
            className={`absolute top-6 ${isRTL ? "left-6" : "right-6"} p-2 rounded-full text-ink-soft hover:text-ink bg-paper-2 hover:bg-paper-3 transition-[color,background-color,transform] duration-150 active:scale-95 focus:outline-none focus-visible:ring-1 focus-visible:ring-sakura`}
          >
            <X className="w-5 h-5" />
          </button>

          {/* Header */}
          <div className={`mb-6 ${isRTL ? "pl-10" : "pr-10"}`}>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-gold uppercase tracking-wider font-semibold">
                {project.categoryLabel || t.projects?.ui?.selectedProject || "Selected Project"}
              </span>
              <span className="text-ink-soft">•</span>
              <span className="font-mono text-xs text-ink-soft">{project.year}</span>
            </div>
            <h3 id="project-modal-title" className="font-editorial text-3xl sm:text-4xl font-normal text-ink leading-tight">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-ink-soft uppercase tracking-wider mt-1">
              {project.subtitle}
            </p>
          </div>

          <div className="japandi-divider my-4" />

          {/* Overview */}
          <div className="space-y-6 text-sm text-ink-soft font-sans leading-relaxed">
            <div>
              <h4 className="font-editorial text-lg text-ink font-semibold mb-1">
                {t.projects?.ui?.overview || "Overview & Architecture"}
              </h4>
              <p>{project.description}</p>
            </div>

            {project.caseStudy && (
              <div>
                <h4 className="font-editorial text-lg text-ink font-semibold mb-1">
                  {t.projects?.ui?.coreImplementation || "Core Implementation & Problem Solved"}
                </h4>
                <p>{project.caseStudy}</p>
              </div>
            )}

            {/* Role & Impact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-paper-2 border border-ink/10">
                <div className="text-[11px] font-mono text-ink-soft uppercase">
                  {t.projects?.roleLabel || "Role:"}
                </div>
                <div className="text-sm font-medium text-ink mt-0.5">{project.role}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-paper-2 border border-ink/10">
                <div className="text-[11px] font-mono text-ink-soft uppercase">
                  {t.projects?.ui?.keyImpact || "Key Impact & Deliverable"}
                </div>
                <div className="text-sm font-medium text-bamboo mt-0.5">{project.impact}</div>
              </div>
            </div>

            {/* Technologies */}
            <div>
              <div className="text-[11px] font-mono text-ink-soft uppercase tracking-wider mb-2">
                {t.projects?.ui?.appliedTech || "Applied Technologies & Tools"}
              </div>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-full bg-paper-2 border border-ink/10 text-xs font-mono text-ink"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Modal Footer Actions */}
          <div className="mt-8 pt-6 border-t border-ink/10 flex flex-wrap items-center justify-between gap-3">
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
              className="text-xs font-mono text-ink-soft hover:text-ink transition-colors"
            >
              {t.cvModal?.close ? `${t.cvModal.close} [Esc]` : "Close [Esc]"}
            </button>
          </div>
        </motion.div>
      </div>
  );
};

export default ProjectModal;
