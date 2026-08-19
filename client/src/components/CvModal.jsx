import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FileText,
  Download,
  ExternalLink,
  X,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";
import { useCvModal } from "../context/CvModalContext";

const CvModal = () => {
  const { t, isRTL } = useLanguage();
  const { isOpen, closeCvModal } = useCvModal();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        closeCvModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCvModal]);

  const handleDownload = (langKey, fileName) => {
    const langName =
      langKey === "en"
        ? t.cvModal.en.langBadge
        : t.cvModal.fr.langBadge;

    toast.success(t.cvModal.downloadToastTitle, {
      description: t.cvModal.downloadToastDesc.replace("{lang}", langName),
      duration: 3500,
    });
  };

  const cvOptions = [
    {
      key: "en",
      flag: "🇬🇧",
      data: t.cvModal.en,
      fileUrl: "/Iyed_Khouildi_CV_EN.pdf",
      fileName: "Iyed_Khouildi_CV_EN.pdf",
      accentColor: "var(--accent-primary)",
      accentDim: "var(--accent-primary-dim)",
      accentBorder: "var(--accent-primary)",
      isHighlighted: true,
    },
    {
      key: "fr",
      flag: "🇫🇷",
      data: t.cvModal.fr,
      fileUrl: "/Iyed_Khouildi_CV_FR.pdf",
      fileName: "Iyed_Khouildi_CV_FR.pdf",
      accentColor: "var(--accent-secondary)",
      accentDim: "var(--accent-secondary-dim)",
      accentBorder: "var(--accent-secondary-border)",
      isHighlighted: false,
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={closeCvModal}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
            aria-hidden="true"
          />

          {/* Modal Card */}
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cv-modal-title"
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-xl rounded-3xl bg-[var(--bg-surface)] border border-[var(--border-strong)] shadow-2xl p-6 sm:p-8 z-10 overflow-hidden"
          >
            {/* Ambient Top Glow */}
            <div
              aria-hidden="true"
              className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[var(--accent-primary)] opacity-10 blur-3xl pointer-events-none"
            />

            {/* Close Button */}
            <button
              onClick={closeCvModal}
              aria-label={t.cvModal.close}
              className={`absolute top-5 ${
                isRTL ? "left-5" : "right-5"
              } p-2 rounded-full text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface-elevated)] border border-transparent hover:border-[var(--border)] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-primary)]`}
            >
              <X className="w-5 h-5" />
            </button>

            {/* Header */}
            <div className="flex flex-col items-start mb-6">
              <div className="section-pill mb-3 inline-flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
                <span>{t.cvModal.pill}</span>
              </div>
              <h3
                id="cv-modal-title"
                className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--text-primary)]"
              >
                {t.cvModal.title}
              </h3>
              <p className="text-sm text-[var(--text-secondary)] mt-1.5 leading-relaxed font-normal">
                {t.cvModal.subtitle}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-4">
              {cvOptions.map((opt) => (
                <div
                  key={opt.key}
                  className="p-4 sm:p-5 rounded-2xl bg-[var(--bg-primary)]/70 hover:bg-[var(--bg-surface-elevated)] border border-[var(--border)] hover:border-[var(--border-strong)] transition-all duration-200 group flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  {/* Left info */}
                  <div className="flex items-start gap-3.5">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 border transition-transform duration-300 group-hover:scale-105"
                      style={{
                        backgroundColor: opt.accentDim,
                        borderColor: opt.accentBorder,
                        color: opt.accentColor,
                      }}
                    >
                      <FileText className="w-5 h-5" />
                    </div>

                    <div className="space-y-1">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-base font-bold text-[var(--text-primary)] tracking-tight">
                          {opt.data.title}
                        </span>
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-[11px] font-medium bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-secondary)]">
                          <span>{opt.flag}</span>
                          <span>{opt.data.langBadge}</span>
                        </span>
                      </div>

                      <p className="text-xs text-[var(--text-secondary)] font-normal">
                        {opt.data.role}
                      </p>

                      <div className="text-[11px] font-mono text-[var(--text-secondary)] opacity-80 pt-0.5">
                        {opt.data.size}
                      </div>
                    </div>
                  </div>

                  {/* Right Actions */}
                  <div className="flex items-center gap-2 self-end sm:self-center shrink-0 w-full sm:w-auto pt-2 sm:pt-0 border-t border-[var(--border)] sm:border-t-0">
                    {/* Preview button */}
                    <a
                      href={opt.fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-apple-secondary text-xs py-2 px-3 rounded-xl flex-1 sm:flex-initial justify-center"
                      title={opt.data.preview}
                    >
                      <ExternalLink className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                      <span>{opt.data.preview}</span>
                    </a>

                    {/* Download button */}
                    <a
                      href={opt.fileUrl}
                      download={opt.fileName}
                      onClick={() => handleDownload(opt.key, opt.fileName)}
                      className="btn-apple-primary text-xs py-2 px-3.5 rounded-xl flex-1 sm:flex-initial justify-center"
                      title={opt.data.download}
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{opt.data.download}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-6 pt-4 border-t border-[var(--border)] flex items-center justify-between text-xs text-[var(--text-secondary)]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent-secondary)]" />
                <span>Updated & Verified PDF</span>
              </span>
              <button
                onClick={closeCvModal}
                className="text-xs text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors focus:outline-none"
              >
                {t.cvModal.close}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CvModal;
