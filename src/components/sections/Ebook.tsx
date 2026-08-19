"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

export function Ebook() {
  return (
    <AnimatedSection className="flex flex-col items-center gap-14 px-6 py-20 md:flex-row md:justify-center md:px-10 md:py-24">
      <motion.div
        className="relative h-[280px] w-[220px] flex-none md:h-[360px] md:w-[280px]"
        initial={{ opacity: 0, rotate: -4, scale: 0.94 }}
        whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute left-0 top-5 h-[87%] w-[91%] rounded-[4px_10px_10px_4px] border border-line bg-green-050 shadow-[6px_8px_24px_rgba(16,30,21,0.12)]" />
        <div
          className="absolute left-[9%] top-[3.5%] h-[96%] w-[91%] rounded-[4px_10px_10px_4px] shadow-[24px_30px_50px_-18px_rgba(16,30,21,0.45)]"
          style={{
            background: "linear-gradient(160deg,#2B5533,#101E15)",
            transform: "perspective(900px) rotateY(-18deg)",
          }}
        >
          <div className="absolute inset-y-0 left-0 w-3.5 rounded-l-[4px] bg-black/22" />
          <div className="p-8">
            <div className="mb-3.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#B9D6BB]">
              AgroMinds Educação
            </div>
            <div className="font-serif text-[26px] font-semibold leading-tight text-white">
              {siteConfig.eventTitleLine1}
              <br />
              {siteConfig.eventTitleLine2}
            </div>
            <div className="mt-3.5 text-xs leading-relaxed text-[#DCEADB]">
              E-book oficial da Masterclass
            </div>
          </div>
          <svg
            className="absolute bottom-5 right-4 opacity-50"
            width="60"
            height="60"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
          >
            <path d="M4 6h16M4 12h16M4 18h10" stroke="#fff" strokeWidth="1.4" strokeLinecap="round" />
          </svg>
        </div>
      </motion.div>

      <div className="max-w-[560px]">
        <div className="mb-4.5 text-[13px] font-bold uppercase tracking-[0.14em] text-green-600">
          E-book incluso
        </div>
        <h2 className="mb-5.5 font-serif text-[28px] font-medium leading-tight text-ink md:text-[34px]">
          Seu conhecimento não termina quando a Masterclass acabar.
        </h2>
        <p className="mb-4 text-base leading-relaxed text-ink-soft md:text-[16.5px]">
          Além das três horas de conteúdo ao vivo, os participantes receberão
          o e-book oficial da Masterclass AgroMinds Educação.
        </p>
        <p className="mb-7 text-base leading-relaxed text-ink-soft md:text-[16.5px]">
          Um material desenvolvido para aprofundar e organizar os principais
          conteúdos apresentados pelos especialistas e servir como fonte de
          consulta após o evento.
        </p>
        <div className="flex w-fit items-center gap-2.5 rounded-lg bg-green-100 px-4.5 py-3.5">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#204327" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-sm font-semibold text-green-800">
            E-book incluso na inscrição · disponibilizado no dia da Masterclass
          </span>
        </div>
      </div>
    </AnimatedSection>
  );
}
