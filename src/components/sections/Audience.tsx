"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const audience = [
  "Engenheiros agrônomos",
  "Consultores",
  "Técnicos agrícolas",
  "Produtores rurais",
  "Gerentes de fazenda",
  "Profissionais do agronegócio",
  "Estudantes de Agronomia",
];

export function Audience() {
  return (
    <AnimatedSection className="border-y border-line bg-green-050 px-6 py-20 md:px-10 md:py-24">
      <div className="mb-12 text-center">
        <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-green-600">
          Público-alvo
        </div>
        <h2 className="font-serif text-[28px] font-medium text-ink md:text-[34px]">
          Para quem é esta Masterclass?
        </h2>
      </div>

      <div className="mx-auto grid max-w-[1100px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {audience.map((label, i) => (
          <motion.div
            key={label}
            className="flex items-center gap-3 rounded-lg border border-line bg-white px-4.5 py-4"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex h-6.5 w-6.5 flex-none items-center justify-center rounded-full bg-green-100">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 13l4 4L19 7" stroke="#204327" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-sm font-semibold text-ink">{label}</span>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
