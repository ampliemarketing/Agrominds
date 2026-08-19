"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { siteConfig } from "@/lib/site-config";

const faqs = [
  { q: "Quando será a Masterclass?", a: `${siteConfig.eventDateLabel}, das ${siteConfig.eventTimeLabel}.` },
  { q: "A Masterclass será presencial?", a: "Não. A participação será 100% online." },
  { q: "O e-book está incluso?", a: "Sim. Os participantes receberão o e-book oficial da Masterclass." },
  { q: "Quando receberei o e-book?", a: "O material será disponibilizado no dia da Masterclass." },
  {
    q: "Como receberei meu acesso?",
    a: "Após a confirmação da inscrição, você receberá as orientações de acesso conforme o fluxo configurado na Eduzz.",
  },
  {
    q: "Preciso instalar algum programa?",
    a: "[Resposta a definir conforme o processo final de acesso/transmissão]",
  },
];

function FaqItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-[10px] border border-line bg-white px-6 py-5.5">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-[15.5px] font-bold text-ink">{q}</span>
        <motion.svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          className="flex-none text-ink-soft"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="mt-3.5 border-t border-line pt-3.5 text-[14.5px] leading-relaxed text-ink-soft">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Faq() {
  return (
    <AnimatedSection className="border-y border-line bg-green-050 px-6 py-20 md:px-10 md:py-24">
      <div className="mb-12 text-center">
        <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-green-600">Dúvidas</div>
        <h2 className="font-serif text-[28px] font-medium text-ink md:text-[34px]">Perguntas frequentes</h2>
      </div>

      <div className="mx-auto flex max-w-[760px] flex-col gap-3">
        {faqs.map((item, i) => (
          <FaqItem key={item.q} q={item.q} a={item.a} defaultOpen={i === 0} />
        ))}
      </div>
    </AnimatedSection>
  );
}
