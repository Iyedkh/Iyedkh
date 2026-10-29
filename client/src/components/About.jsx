import React, { useState } from "react";
import { motion } from "framer-motion";
import { Download, Copy, Check, Compass, ShieldCheck, Database, Layers } from "lucide-react";
import { toast } from "sonner";
import Me from "../assets/Me.png";
import { useLanguage } from "../i18n/LanguageContext";
import { useCvModal } from "../context/CvModalContext";
import Magnetic from "./Magnetic";

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
        {/* Editorial Section Header */}
        <div className="mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="hanko-stamp">道</span>
            <div className="japandi-pill">
              <span>{t.about?.pill || "02 / Philosophy & Biography"}</span>
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <h2 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-normal text-[#262522] leading-[1.1] tracking-[-0.02em]">
                {t.about?.heading1 || "Building at the intersection of"}{" "}
                <span className="editorial-accent">
                  {t.about?.headingHighlight || "code, data & design"}
                </span>.
              </h2>
            </div>
            <div className="lg:col-span-4 pb-2">
              <p className="text-sm font-mono text-[#786F63] tracking-wide uppercase">
                Iyed Khouildi • ISG Bizerte Business Intelligence Graduate
              </p>
            </div>
          </div>
          <div className="katana-divider my-8" />
        </div>

        {/* Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Left Column: Authentic Portrait with Organic Arch Framing */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm">
              {/* Japandi Arch Frame */}
              <div className="relative aspect-[3/4] japandi-arch overflow-hidden bg-[#EBE3D5] border border-[#22211E]/15 shadow-sm group">
                <img
                  src={Me}
                  alt="Iyed Khouildi — Full Stack Developer & Data Analyst"
                  className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:scale-105 transition-transform duration-700 ease-out"
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
              </div>

              {/* Decorative Japanese Character Stamp */}
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-[#D48D9B] text-[#22211E] flex items-center justify-center font-editorial text-sm shadow-sm select-none border border-[#22211E]/20 font-bold">
                匠
              </div>
            </div>
          </div>

          {/* Right Column: Biography & Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-base sm:text-lg text-[#726A5F] font-sans leading-relaxed">
              <p>
                {t.about?.description ||
                  "Based in Bizerte, Tunisia, I am a developer and data analyst who bridges engineering capability with statistical thinking to deliver scalable, intelligent software."}
              </p>
              <p>
                My academic grounding in <strong className="text-[#22211E] font-medium">Business Intelligence at ISG Bizerte</strong> taught me to view every digital product as an information ecosystem. Rather than writing software in isolation, I structure data flows, analyze user behaviors, and design systems built to perform reliably at scale.
              </p>
              <p>
                As the architect behind <strong className="text-[#D48D9B] font-medium">CARTHAGEOS</strong> (a modular SaaS ERP platform), I channel this multidisciplinary perspective into enterprise software: turning operational complexity into calm, dependable digital architecture.
              </p>
            </div>

            {/* Quick Metrics / Foundation Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
              <div className="p-3.5 rounded-xl bg-[#EBE3D5]/60 border border-[#22211E]/10">
                <div className="text-xl font-editorial font-medium text-[#22211E]">3+ Years</div>
                <div className="text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mt-0.5">
                  {t.hero?.stats?.yearsExperience || "Software Engineering"}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#EBE3D5]/60 border border-[#22211E]/10">
                <div className="text-xl font-editorial font-medium text-[#A68550]">ISG Bizerte</div>
                <div className="text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mt-0.5">
                  {t.hero?.card?.degree || "BI Degree"}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#EBE3D5]/60 border border-[#22211E]/10 col-span-2 sm:col-span-1">
                <div className="text-xl font-editorial font-medium text-[#6B785D]">Dual Bootcamp</div>
                <div className="text-[11px] font-mono text-[#726A5F] uppercase tracking-wider mt-0.5">
                  Full Stack &amp; Data
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Cards / Pillars Grid */}
        <div className="mb-20">
          <div className="text-xs font-mono text-[#786F63] uppercase tracking-[0.2em] mb-6">
            Guiding Principles &amp; Competencies
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {t.about?.cards?.map((card, idx) => {
              const Icon = principleIcons[idx % principleIcons.length];
              return (
                <div
                  key={card.title}
                  className="japandi-card p-6 flex flex-col justify-between group"
                >
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
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Callout Banner */}
        <div className="p-8 sm:p-10 rounded-2xl bg-[#EBE3D5] border border-[#22211E]/15 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
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
        </div>
      </div>
    </section>
  );
};

export default About;