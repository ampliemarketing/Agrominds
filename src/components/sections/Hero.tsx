"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "@/components/ui/CtaButton";
import { VideoPlayer } from "@/components/ui/VideoPlayer";

const badges = [
  {
    label: siteConfig.eventDateShort,
    icon: (
      <path
        d="M8 3v4M16 3v4M3 10h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z"
        stroke="#DCEADB"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    ),
  },
  {
    label: siteConfig.eventTimeLabel,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="#DCEADB" strokeWidth="1.8" />
        <path d="M12 7v5l3.5 2" stroke="#DCEADB" strokeWidth="1.8" strokeLinecap="round" />
      </>
    ),
  },
  {
    label: siteConfig.eventFormat,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="#DCEADB" strokeWidth="1.8" />
        <path
          d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z"
          stroke="#DCEADB"
          strokeWidth="1.8"
        />
      </>
    ),
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-green-900 px-6 py-16 md:px-10 md:py-24">
      <Image
        src="/images/hero-field.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(155deg,rgba(16,30,21,0.93)_0%,rgba(23,48,31,0.90)_55%,rgba(32,67,39,0.86)_100%)]" />
      <svg
        className="pointer-events-none absolute -right-20 -top-28 opacity-10"
        width="520"
        height="520"
        viewBox="0 0 200 200"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="100" cy="100" r="99" stroke="#fff" strokeWidth="1" />
        <circle cx="100" cy="100" r="70" stroke="#fff" strokeWidth="1" />
        <circle cx="100" cy="100" r="40" stroke="#fff" strokeWidth="1" />
      </svg>

      <div className="relative mx-auto flex max-w-[1296px] flex-col items-center gap-12 md:flex-row md:items-center">
        <motion.div
          className="w-full md:max-w-[560px]"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#C8DFC9]">
            {siteConfig.eventName}
          </div>
          <h1 className="mb-4 font-serif text-[42px] font-semibold leading-[1.05] text-white md:text-[60px]">
            {siteConfig.eventTitleLine1}
            <br />
            {siteConfig.eventTitleLine2}
          </h1>
          <p className="mb-8 max-w-[460px] font-serif text-lg italic leading-snug text-[#DCEADB] md:text-[22px]">
            {siteConfig.eventSubtitle}.
          </p>

          <div className="mb-9 flex flex-wrap gap-3">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full border border-white/18 bg-white/8 px-4 py-2.5"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  {badge.icon}
                </svg>
                <span className="text-sm font-semibold text-white">{badge.label}</span>
              </div>
            ))}
          </div>

          <CtaButton location="hero" size="lg">
            Garantir minha vaga
          </CtaButton>
        </motion.div>

        <motion.div
          className="w-full md:flex-1"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <VideoPlayer
            videoUrl="/videos/anderson-apresentacao.mp4"
            posterSrc="/images/anderson-poster.jpg"
            title="Anderson apresenta a Masterclass"
            caption="Assista ao vídeo de apresentação"
          />
        </motion.div>
      </div>
    </section>
  );
}
