"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

export function Specialists() {
  return (
    <AnimatedSection className="px-6 py-20 md:px-10 md:py-24">
      <div className="mb-14 text-center">
        <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-green-600">
          Quem ensina
        </div>
        <h2 className="mb-3.5 font-serif text-[28px] font-medium text-ink md:text-[36px]">
          Uma Masterclass. Três perspectivas do Brasil.
        </h2>
        <p className="mx-auto max-w-[560px] text-base text-ink-soft">
          Cada especialista traz a leitura climática e as estratégias de
          manejo da sua região de atuação.
        </p>
      </div>

      <div className="mx-auto grid max-w-[1296px] grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {siteConfig.specialists.map((specialist, i) => (
          <motion.div
            key={specialist.slug}
            className="overflow-hidden rounded-[10px] border border-line bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex aspect-[4/3] w-full items-center justify-center bg-[linear-gradient(160deg,#3D6E45,#17301F)]">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="8" r="4" stroke="#E7F0E6" strokeWidth="1.6" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#E7F0E6" strokeWidth="1.6" strokeLinecap="round" />
              </svg>
              <div className="absolute left-3.5 top-3.5 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white">
                {specialist.region}
              </div>
            </div>
            <div className="px-6 pb-7 pt-6">
              <div className="mb-1 font-serif text-xl font-semibold text-ink">{specialist.name}</div>
              <div className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-green-600">
                {specialist.region}
              </div>
              <div className="rounded-lg border border-dashed border-line px-4 py-3.5 text-[13px] italic leading-relaxed text-ink-faint">
                [Mini currículo, formação e experiência profissional a inserir]
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
