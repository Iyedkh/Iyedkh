import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Send,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const contactItems = [
    {
      id: "email",
      icon: Mail,
      label: t.contact.labels.email,
      value: "iyedkhouildi12@gmail.com",
      action: "copy",
      accent: "var(--accent-amber)",
      isTeal: false,
    },
    {
      id: "phone",
      icon: Phone,
      label: t.contact.labels.phone,
      value: "+216 93 117 612",
      action: "copy",
      accent: "var(--accent-teal)",
      isTeal: true,
    },
    {
      id: "location",
      icon: MapPin,
      label: t.contact.labels.location,
      value: t.contact.labels.locationValue,
      action: "info",
      accent: "var(--accent-amber)",
      isTeal: false,
    },
  ];

  const socials = [
    {
      name: "GitHub",
      url: "https://github.com/Iyedkh",
      handle: "@Iyedkh",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/iyed-khouildi-453787326/",
      handle: "Iyed Khouildi",
      icon: Linkedin,
    },
  ];

  const handleCopy = (id, text, label) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(id);
    toast.success(`${label} ${t.contact.labels.copied}`, {
      description: text,
      duration: 3000,
    });
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error(t.contact.form.validationError);
      return;
    }

    setSubmitted(true);
    const desc = t.contact.form.successToastDesc.replace("{name}", formData.name);
    toast.success(t.contact.form.successToast, {
      description: desc,
      duration: 4500,
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-surface)] border border-[var(--border)] text-xs text-[var(--accent-amber)] font-mono mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>{t.contact.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] leading-tight">
          {t.contact.heading1} <span className="amber-gradient-text">{t.contact.headingHighlight}</span>
        </h2>
        <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mt-3 font-normal">
          {t.contact.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards & Socials */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-4"
        >
          {contactItems.map((item) => (
            <div
              key={item.id}
              onClick={() => item.action === "copy" && handleCopy(item.id, item.value, item.label)}
              className={`console-card p-5 flex items-center justify-between group cursor-pointer transition-all duration-300 ${
                item.action === "copy" ? "hover:border-[var(--accent-amber)]" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 ${
                    item.isTeal
                      ? "bg-[var(--accent-teal-dim)] border-[var(--accent-teal-border)] text-[var(--accent-teal)]"
                      : "bg-[var(--accent-amber-dim)] border-[var(--border-focus)] text-[var(--accent-amber)]"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[var(--text-secondary)] uppercase">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent-amber-hover)] transition-colors mt-0.5" dir="ltr">
                    {item.value}
                  </div>
                </div>
              </div>

              {item.action === "copy" && (
                <button
                  type="button"
                  aria-label={`Copy ${item.label}`}
                  className="p-2 rounded-xl text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] bg-[var(--bg-primary)] group-hover:bg-[var(--bg-surface-elevated)] border border-[var(--border)] transition-colors"
                >
                  {copiedKey === item.id ? (
                    <Check className="w-4 h-4 text-[var(--accent-teal)]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          ))}

          {/* Social Profiles */}
          <div className="console-card p-5 space-y-3">
            <div className="text-[11px] font-mono text-[var(--text-secondary)] uppercase mb-2">
              {t.contact.labels.connectOnline}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-[var(--bg-primary)] hover:bg-[var(--bg-surface-elevated)] border border-[var(--border)] hover:border-[var(--accent-amber)] transition-all flex items-center gap-3 group focus:outline-none"
                >
                  <social.icon className="w-4 h-4 text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
                  <div className="truncate">
                    <div className="text-xs font-bold text-[var(--text-primary)] tracking-tight font-mono">
                      {social.name}
                    </div>
                    <div className="text-[10px] font-mono text-[var(--text-muted)] truncate" dir="ltr">
                      {social.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Message Form */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="console-card p-6 sm:p-8 relative min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                        {t.contact.form.nameLabel}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.contact.form.namePlaceholder}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="apple-input"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="apple-input font-mono text-xs"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider mb-2">
                      {t.contact.form.subjectLabel}
                    </label>
                    <input
                      type="text"
                      placeholder={t.contact.form.subjectPlaceholder}
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="apple-input"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="block text-xs font-mono text-[var(--text-secondary)] uppercase tracking-wider">
                        {t.contact.form.messageLabel}
                      </label>
                      <span className="text-[10px] font-mono text-[var(--text-muted)]">
                        {formData.message.length} {t.contact.form.chars}
                      </span>
                    </div>
                    <textarea
                      required
                      rows={5}
                      placeholder={t.contact.form.messagePlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="apple-input resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary-action w-full justify-center py-3.5 rounded-xl text-sm font-semibold mt-2"
                  >
                    <Send className={`w-4 h-4 ${isRTL ? "rotate-180" : ""}`} />
                    <span>{t.contact.form.sendBtn}</span>
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col items-center justify-center text-center p-8 space-y-4"
                >
                  <div className="w-16 h-16 rounded-3xl bg-[var(--accent-teal-dim)] border border-[var(--accent-teal-border)] flex items-center justify-center text-[var(--accent-teal)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] max-w-sm leading-relaxed">
                    {t.contact.form.successDesc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;