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
  Download,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "../i18n/LanguageContext";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { useCvModal } from "../context/CvModalContext";
import Magnetic from "./Magnetic";

const WHATSAPP_NUMBER = "21693117612";

const Contact = () => {
  const { t, isRTL } = useLanguage();
  const { openCvModal } = useCvModal();
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [copiedKey, setCopiedKey] = useState(null);

  const contactItems = [
    {
      id: "email",
      icon: Mail,
      label: t.contact?.labels?.email || "Direct Email",
      value: "iyedkhouildi12@gmail.com",
      action: "copy",
    },
    {
      id: "phone",
      icon: Phone,
      label: t.contact?.labels?.phone || "Phone / WhatsApp",
      value: "+216 93 117 612",
      action: "copy",
    },
    {
      id: "location",
      icon: MapPin,
      label: t.contact?.labels?.location || "Location",
      value: t.contact?.labels?.locationValue || "Bizerte, Tunisia (UTC+1)",
      action: "info",
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
    toast.success(`${label} ${t.contact?.labels?.copied || "copied to clipboard"}`, {
      description: text,
      duration: 3000,
    });
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast.error(t.contact?.form?.validationError || "Please fill in all required fields.");
      return;
    }

    // No backend: hand the message to WhatsApp, prefilled for the visitor to send
    const subject = formData.subject.trim();
    const text = [
      "New message from portfolio",
      `Name: ${formData.name.trim()}`,
      `Email: ${formData.email.trim()}`,
      ...(subject ? [`Subject: ${subject}`] : []),
      "",
      formData.message.trim(),
    ].join("\n");
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    const win = window.open(url, "_blank");
    if (win) win.opener = null;
    else window.location.href = url;

    setSubmitted(true);
    const toastDesc = (t.contact?.form?.successToastDesc || "Thank you {name}. Press send in WhatsApp to deliver your message.").replace(
      "{name}",
      formData.name
    );
    toast.success(t.contact?.form?.successToast || "Opening WhatsApp…", {
      description: toastDesc,
      duration: 4500,
    });

    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 4000);
  };

  return (
    <section id="contact" className="py-28 sm:py-32 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          kanji="縁"
          index="07"
          pill={t.contact?.pill || "Direct Dialogue"}
          heading={t.contact?.heading1 || "Let's Start a"}
          highlight={t.contact?.headingHighlight || "Conversation"}
          aside={
            <p className="text-sm sm:text-base text-[#726A5F] font-sans leading-relaxed">
              {t.contact?.description ||
                "Have an upcoming project, freelance inquiry, or full-time opportunity? Reach out directly or send a message below."}
            </p>
          }
        />

        {/* Contact Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info Cards & Quick Actions */}
          <Reveal className="lg:col-span-5 space-y-4">
            {contactItems.map((item) => (
              <div
                key={item.id}
                onClick={() => item.action === "copy" && handleCopy(item.id, item.value, item.label)}
                className={`japandi-card p-5 flex items-center justify-between group ${
                  item.action === "copy" ? "cursor-pointer hover:border-[#D48D9B]" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#EBE3D5] border border-[#22211E]/15 flex items-center justify-center text-[#22211E] transition-transform duration-300 group-hover:scale-105 group-hover:border-[#D48D9B]">
                    <item.icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#726A5F] uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-sm font-medium text-[#22211E] group-hover:text-[#D48D9B] transition-colors mt-0.5" dir="ltr">
                      {item.value}
                    </div>
                  </div>
                </div>

                {item.action === "copy" && (
                  <div className="text-[#726A5F] group-hover:text-[#22211E] transition-colors p-2">
                    {copiedKey === item.id ? (
                      <Check className="w-4 h-4 text-[#D48D9B]" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </div>
                )}
              </div>
            ))}

            {/* Social Channels Card */}
            <div className="japandi-card p-5">
              <div className="text-[10px] font-mono text-[#726A5F] uppercase tracking-wider mb-3">
                {t.contact?.labels?.connectOnline || "Connect Online"}
              </div>
              <div className="flex flex-col gap-2">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-2 rounded-xl hover:bg-[#EBE3D5] transition-colors group text-xs font-mono"
                  >
                    <div className="flex items-center gap-2.5 text-[#22211E]">
                      <social.icon className="w-4 h-4 text-[#726A5F] group-hover:text-[#22211E]" />
                      <span>{social.name}</span>
                    </div>
                    <span className="text-[#726A5F] group-hover:text-[#22211E] transition-colors">
                      {social.handle} →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Curriculum Vitae Modal Trigger */}
            <div className="p-5 rounded-2xl bg-[#EBE3D5] border border-[#22211E]/15 flex items-center justify-between">
              <div>
                <span className="font-editorial text-lg text-[#22211E] block">
                  {t.cvModal?.pill || "Curriculum Vitae"}
                </span>
                <span className="text-xs font-mono text-[#726A5F]">EN &amp; FR PDF Formats</span>
              </div>
              <Magnetic strength={0.25}>
                <button
                  type="button"
                  onClick={openCvModal}
                  className="btn-japandi-primary text-xs py-2 px-5 rounded-full"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{t.hero?.downloadCv || "Download CV"}</span>
                </button>
              </Magnetic>
            </div>
          </Reveal>

          {/* Right Column: Clean Wabi-Sabi Message Form */}
          <Reveal delay={0.15} className="lg:col-span-7">
            <div className="japandi-card p-6 sm:p-8 min-h-[460px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mb-2">
                          {t.contact?.form?.nameLabel || "Your Name *"}
                        </label>
                        <input
                          type="text"
                          required
                          placeholder={t.contact?.form?.namePlaceholder || "John Doe"}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="japandi-input"
                        />
                      </div>

                      <div>
                        <label className="block text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mb-2">
                          {t.contact?.form?.emailLabel || "Email Address *"}
                        </label>
                        <input
                          type="email"
                          required
                          placeholder={t.contact?.form?.emailPlaceholder || "john@company.com"}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="japandi-input font-mono text-xs"
                          dir="ltr"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mb-2">
                        {t.contact?.form?.subjectLabel || "Subject"}
                      </label>
                      <input
                        type="text"
                        placeholder={t.contact?.form?.subjectPlaceholder || "Project Inquiry / Opportunity"}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="japandi-input"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mb-2">
                        {t.contact?.form?.messageLabel || "Your Message *"}
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder={
                          t.contact?.form?.messagePlaceholder ||
                          "Tell me about your project goals, timeline, and requirements..."
                        }
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="japandi-input resize-none"
                      />
                    </div>

                    <Magnetic strength={0.25} className="w-full">
                      <button
                        type="submit"
                        className="btn-japandi-primary w-full justify-center py-3.5 rounded-full text-sm font-medium mt-2"
                      >
                        <Send className="w-4 h-4" />
                        <span>{t.contact?.form?.sendBtn || "Send Message"}</span>
                      </button>
                    </Magnetic>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#151412] text-[#D48D9B] flex items-center justify-center border border-[#D48D9B]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="font-editorial text-3xl font-normal text-[#22211E]">
                      {t.contact?.form?.successTitle || "Almost Done!"}
                    </h3>
                    <p className="text-sm text-[#726A5F] max-w-sm leading-relaxed font-sans">
                      {t.contact?.form?.successDesc ||
                        "Thank you for reaching out. Your message has been received and I will reply within 24 hours."}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;