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
  Sparkles,
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
      accent: "#d4a574",
    },
    {
      id: "phone",
      icon: Phone,
      label: t.contact.labels.phone,
      value: "+216 93 117 612",
      action: "copy",
      accent: "#8b4789",
    },
    {
      id: "location",
      icon: MapPin,
      label: t.contact.labels.location,
      value: t.contact.labels.locationValue,
      action: "info",
      accent: "#ebd0ad",
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
    <section id="contact" className="py-16 scroll-mt-24">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="section-pill mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#d4a574]" />
          <span>{t.contact.pill}</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
          {t.contact.heading1} <span className="gold-text">{t.contact.headingHighlight}</span>
        </h2>
        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mt-3 font-normal">
          {t.contact.description}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Direct Info Cards & Socials */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 space-y-4"
        >
          {contactItems.map((item) => (
            <div
              key={item.id}
              onClick={() => item.action === "copy" && handleCopy(item.id, item.value, item.label)}
              className={`apple-card p-5 flex items-center justify-between group cursor-pointer transition-all duration-300 ${
                item.action === "copy" ? "hover:border-[#d4a574]/40" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center border transition-transform duration-300 group-hover:scale-105"
                  style={{
                    backgroundColor: `${item.accent}15`,
                    borderColor: `${item.accent}30`,
                    color: item.accent,
                  }}
                >
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-white group-hover:text-[#ebd0ad] transition-colors mt-0.5" dir="ltr">
                    {item.value}
                  </div>
                </div>
              </div>

              {item.action === "copy" && (
                <button
                  type="button"
                  aria-label={`Copy ${item.label}`}
                  className="p-2 rounded-xl text-zinc-500 group-hover:text-[#ebd0ad] bg-white/[0.03] group-hover:bg-white/[0.08] transition-colors"
                >
                  {copiedKey === item.id ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              )}
            </div>
          ))}

          {/* Social Profiles */}
          <div className="apple-card p-5 space-y-3">
            <div className="text-[11px] font-mono font-bold tracking-widest text-zinc-500 uppercase mb-2">
              {t.contact.labels.connectOnline}
            </div>
            <div className="grid grid-cols-2 gap-3">
              {socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.06] hover:border-[#d4a574]/40 transition-all flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d4a574]"
                >
                  <social.icon className="w-4 h-4 text-zinc-400 group-hover:text-[#ebd0ad] transition-colors" />
                  <div className="truncate">
                    <div className="text-xs font-bold text-white tracking-tight">
                      {social.name}
                    </div>
                    <div className="text-[10px] font-mono text-zinc-500 truncate" dir="ltr">
                      {social.handle}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Apple-styled Message Form */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7"
        >
          <div className="apple-card p-6 sm:p-8 relative min-h-[460px] flex flex-col justify-center">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">
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
                      <label className="block text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                        {t.contact.form.emailLabel}
                      </label>
                      <input
                        type="email"
                        required
                        placeholder={t.contact.form.emailPlaceholder}
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="apple-input"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-2">
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
                      <label className="block text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                        {t.contact.form.messageLabel}
                      </label>
                      <span className="text-[10px] font-mono text-zinc-500">
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
                    className="btn-apple-primary w-full justify-center py-3.5 rounded-xl text-sm font-semibold mt-2"
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
                  <div className="w-16 h-16 rounded-3xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/10">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {t.contact.form.successTitle}
                  </h3>
                  <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
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