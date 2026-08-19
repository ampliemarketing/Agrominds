"use client";

import Image from "next/image";
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
            whileHover={{ scale: 1.04, transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] } }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={specialist.photo}
                alt={specialist.name}
                fill
                className="object-cover object-top"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
              <div className="absolute left-3.5 top-3.5 rounded-full bg-black/35 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-white">
                {specialist.region}
              </div>
            </div>
            <div className="px-6 pb-7 pt-6">
              <div className="mb-1 font-serif text-xl font-semibold text-ink">{specialist.name}</div>
              <div className="mb-4 text-[13px] font-semibold uppercase tracking-wide text-green-600">
                {specialist.region}
              </div>
              <p className="text-[13.5px] leading-relaxed text-ink-soft">{specialist.bio}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
