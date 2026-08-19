"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

type IconKey = "climate" | "map" | "strategy" | "case";

const icons: Record<IconKey, React.ReactNode> = {
  climate: (
    <>
      <path
        d="M6 15a4 4 0 010-8 5 5 0 019.6-1.5A4.5 4.5 0 0118.5 14H7"
        stroke="#204327"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 19l-1 2M12 19l-1 2M16 19l-1 2" stroke="#204327" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
  map: (
    <>
      <path
        d="M12 21s-7-6.1-7-11.5A7 7 0 0112 2a7 7 0 017 7.5C19 14.9 12 21 12 21z"
        stroke="#204327"
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="2.4" stroke="#204327" strokeWidth="1.7" />
    </>
  ),
  strategy: (
    <>
      <path d="M4 6h16M4 12h16M4 18h10" stroke="#204327" strokeWidth="1.7" strokeLinecap="round" />
      <circle cx="19" cy="18" r="2.2" stroke="#204327" strokeWidth="1.7" />
    </>
  ),
  case: (
    <>
      <path d="M4 19.5V6a2 2 0 012-2h12a2 2 0 012 2v13.5" stroke="#204327" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M4 19.5A1.5 1.5 0 015.5 18H20" stroke="#204327" strokeWidth="1.7" />
      <path d="M8 8h8M8 11h8" stroke="#204327" strokeWidth="1.7" strokeLinecap="round" />
    </>
  ),
};

const cards: { title: string; desc: string; icon: IconKey }[] = [
  {
    title: "Cenário climático",
    desc: "Entenda o El Niño 2026/2027 e os possíveis impactos para a próxima safra.",
    icon: "climate",
  },
  {
    title: "Região Norte",
    desc: "Conheça os principais desafios e pontos de atenção para a agricultura da região.",
    icon: "map",
  },
  {
    title: "Região Sul",
    desc: "Entenda como diferentes condições climáticas podem interferir no planejamento e no manejo.",
    icon: "map",
  },
  {
    title: "Centro-Oeste",
    desc: "Analise os desafios da região e estratégias para diferentes cenários climáticos.",
    icon: "map",
  },
  {
    title: "Estratégias de manejo",
    desc: "Conhecimento técnico aplicado para auxiliar na tomada de decisão no campo.",
    icon: "strategy",
  },
  {
    title: "Casos e experiências práticas",
    desc: "Experiências dos especialistas em diferentes regiões produtoras brasileiras.",
    icon: "case",
  },
];

export function WhatYoullLearn() {
  return (
    <AnimatedSection className="border-y border-line bg-green-050 px-6 py-20 md:px-10 md:py-24">
      <div className="mb-14 text-center">
        <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-green-600">
          Conteúdo programático
        </div>
        <h2 className="font-serif text-[28px] font-medium text-ink md:text-[34px]">
          O que você vai aprender
        </h2>
      </div>
      <div className="mx-auto grid max-w-[1296px] grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => (
          <motion.div
            key={card.title}
            className="rounded-[10px] border border-line bg-white p-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3 }}
          >
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-[10px] bg-green-100">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                {icons[card.icon]}
              </svg>
            </div>
            <div className="mb-2.5 text-base font-bold text-ink">{card.title}</div>
            <div className="text-sm leading-relaxed text-ink-soft">{card.desc}</div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
