import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Copy, Check, Compass, ShieldCheck, Database, Layers } from "lucide-react";
import { toast } from "sonner";
import Me from "../assets/Me.png";
import { useLanguage } from "../i18n/LanguageContext";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";
import { useCvModal } from "../context/CvModalContext";
import Magnetic from "./Magnetic";
import Counter from "./Counter";

const About = () => {
  const { t } = useLanguage();
  const { openCvModal } = useCvModal();
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "iyedkhouildi12@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    toast.success(t.nav?.emailCopied || "Email copied to clipboard", {
      description: email,
      duration: 3000,
    });
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const principleIcons = [Layers, Database, Compass, ShieldCheck];

  return (
    <section id="about" className="py-28 sm:py-32 scroll-mt-20 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <SectionHeader
          kanji="道"
          index="02"
          pill={t.about?.pill || "Philosophy & Biography"}
          heading={t.about?.heading1 || "Building at the intersection of"}
          highlight={t.about?.headingHighlight || "code, data & design"}
          aside={
            <p className="text-sm font-mono text-[#726A5F] tracking-wide uppercase leading-relaxed">
              Iyed Khouildi • ISG Bizerte Business Intelligence Graduate
            </p>
          }
        />

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Authentic Portrait with Organic Arch Framing */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Offset hairline frame & vertical caption */}
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, x: -14, y: 14 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 translate-x-4 translate-y-4 japandi-arch border border-[#A68550]/40"
              />
              <span
                aria-hidden="true"
                className="absolute -left-10 top-1/2 -translate-y-1/2 hidden lg:block font-mono text-[9.5px] uppercase tracking-[0.3em] text-[#726A5F] [writing-mode:vertical-rl] rotate-180"
              >
                Portrait · 肖像 · Bizerte
              </span>

              {/* Japandi Arch Frame: opens like a shoji panel */}
              <motion.div
                initial={{ clipPath: "inset(100% 0% 0% 0% round 999px 999px 24px 24px)" }}
                whileInView={{ clipPath: "inset(0% 0% 0% 0% round 999px 999px 24px 24px)" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1] }}
                className="relative aspect-[3/4] japandi-arch overflow-hidden bg-[#EBE3D5] border border-[#22211E]/15 shadow-[0_30px_60px_-30px_rgba(34,33,30,0.35)] group"
              >
                <motion.img
                  src={Me}
                  alt="Iyed Khouildi — Full Stack Developer & Data Analyst"
                  initial={{ scale: 1.25 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-cover object-top grayscale contrast-105 transition-[filter] duration-700 ease-out group-hover:grayscale-0"
                  loading="lazy"
                />
                {/* Rice Paper Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#22211E]/80 via-transparent to-transparent opacity-80" />

                {/* Bottom Details Pill */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-xl bg-[#F6F2EB]/92 backdrop-blur-md border border-[#22211E]/10 text-xs font-mono">
                  <div className="flex items-center justify-between text-[#22211E] font-medium">
                    <span>Iyed Khouildi</span>
                    <span className="text-[#D48D9B]">• Verified</span>
                  </div>
                  <div className="text-[11px] text-[#726A5F] mt-0.5">
                    📍 Bizerte, Tunisia • BI Degree &amp; Dual Bootcamp
                  </div>
                </div>
              </motion.div>

              {/* Decorative hanko seal that stamps down */}
              <motion.div
                aria-hidden="true"
                initial={{ scale: 2.2, rotate: -25, opacity: 0 }}
                whileInView={{ scale: 1, rotate: -8, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 1.2 }}
                className="absolute -top-3 -right-3 w-12 h-12 rounded-lg bg-[#B8403A] text-[#F6F2EB] flex items-center justify-center font-kanji text-lg shadow-[0_8px_20px_-6px_rgba(184,64,58,0.5)] select-none"
              >
                匠
              </motion.div>
            </div>
          </div>

          {/* Right Column: Biography & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <Reveal className="space-y-4 text-base sm:text-lg text-[#726A5F] font-sans leading-relaxed">
              <p className="first-letter:font-editorial first-letter:text-6xl first-letter:float-left first-letter:me-3 first-letter:mt-1 first-letter:leading-[0.8] first-letter:text-[#22211E]">
                {t.about?.description ||
                  "Based in Bizerte, Tunisia, I am a developer and data analyst who bridges engineering capability with statistical thinking to deliver scalable, intelligent software."}
              </p>
              <p>
                My academic grounding in <strong className="text-[#22211E] font-medium">Business Intelligence at ISG Bizerte</strong> taught me to view every digital product as an information ecosystem. Rather than writing software in isolation, I structure data flows, analyze user behaviors, and design systems built to perform reliably at scale.
              </p>
              <p>
                As the architect behind <strong className="text-[#D48D9B] font-medium">CARTHAGEOS</strong> (a modular SaaS ERP platform), I channel this multidisciplinary perspective into enterprise software: turning operational complexity into calm, dependable digital architecture.
              </p>
            </Reveal>

            {/* Quick Metrics / Foundation Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 rounded-xl bg-[#EBE3D5]/60 border border-[#22211E]/10">
                <div className="text-3xl font-editorial font-medium text-[#22211E]"><Counter target={2} suffix="+" /> <span className="text-xl">Years</span></div>
                <div className="text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mt-0.5">
                  {t.hero?.stats?.yearsExperience || "Software Engineering"}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#EBE3D5]/60 border border-[#22211E]/10">
                <div className="text-3xl font-editorial font-medium text-[#A68550]">ISG <span className="text-xl">Bizerte</span></div>
                <div className="text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mt-0.5">
                  {t.hero?.card?.degree || "BI Degree"}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#EBE3D5]/60 border border-[#22211E]/10 col-span-2 sm:col-span-1">
                <div className="text-3xl font-editorial font-medium text-[#6B785D]"><Counter target={2} suffix="×" /> <span className="text-xl">Bootcamp</span></div>
                <div className="text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mt-0.5">
                  Full Stack &amp; Data
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Cards / Pillars Grid */}
        <div className="mb-20">
          <div className="text-xs font-mono text-[#726A5F] uppercase tracking-[0.2em] mb-6">
            Guiding Principles &amp; Competencies
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.about?.cards?.map((card, idx) => {
              const Icon = principleIcons[idx % principleIcons.length];
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="japandi-card p-6 flex flex-col justify-between group overflow-hidden"
                >
                  <span aria-hidden="true" className="absolute -right-3 -bottom-6 font-editorial text-[7rem] leading-none text-[#22211E]/[0.04] transition-all duration-700 group-hover:text-[#D48D9B]/15 group-hover:-translate-y-2">
                    0{idx + 1}
                  </span>
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-xs text-[#D48D9B] font-semibold">
                        {card.badge || `0${idx + 1}`}
                      </span>
                      <Icon className="w-4 h-4 text-[#726A5F] group-hover:text-[#22211E] transition-colors" />
                    </div>
                    <h3 className="font-editorial text-xl font-medium text-[#22211E] mb-2 leading-snug">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[#726A5F] leading-relaxed font-sans mb-3">
                      {card.description}
                    </p>
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#A68550] uppercase tracking-wider pt-2 border-t border-[#22211E]/10">
                      {card.highlight}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Action Callout Banner */}
        <Reveal className="relative overflow-hidden p-8 sm:p-12 rounded-3xl bg-[#EBE3D5] border border-[#22211E]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shoji-grid">
          <span aria-hidden="true" className="ghost-kanji absolute -right-4 -top-10 text-[12rem]">和</span>
          <div className="space-y-1">
            <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#22211E]">
              {t.about?.banner?.title || "Interested in collaborating or exploring architecture?"}
            </h3>
            <p className="text-xs sm:text-sm text-[#726A5F] font-sans">
              {t.about?.banner?.text ||
                "Available for full-time engineering roles, freelance builds, and SaaS architecture contracts."}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
            <button
              onClick={handleCopyEmail}
              className="btn-japandi-secondary text-xs py-2.5 px-5 rounded-full flex-1 sm:flex-initial justify-center"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#D48D9B]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? t.about?.banner?.emailCopied || "Email Copied" : t.about?.banner?.copyEmail || "Copy Email"}</span>
            </button>

            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={openCvModal}
                className="btn-japandi-primary text-xs py-2.5 px-6 rounded-full flex-1 sm:flex-initial justify-center"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{t.about?.banner?.downloadCv || "Download CV"}</span>
              </button>
            </Magnetic>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default About;