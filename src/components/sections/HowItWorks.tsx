"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const steps = [
  {
    n: "1",
    title: "Faça sua inscrição",
    desc: "Clique no botão e finalize sua inscrição pelo checkout seguro da Eduzz.",
  },
  {
    n: "2",
    title: "Receba as orientações",
    desc: "Após a confirmação do pagamento, você recebe as informações necessárias para acesso à Masterclass.",
  },
  {
    n: "3",
    title: "Participe da Masterclass",
    desc: "No dia 15 de setembro, participe da transmissão ao vivo e tenha acesso ao conteúdo dos especialistas.",
  },
];

export function HowItWorks() {
  return (
    <AnimatedSection className="px-6 py-20 md:px-10 md:py-24">
      <div className="mb-14 text-center">
        <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-green-600">
          Passo a passo
        </div>
        <h2 className="font-serif text-[28px] font-medium text-ink md:text-[34px]">Como funciona</h2>
      </div>

      <div className="relative mx-auto grid max-w-[1100px] grid-cols-1 gap-10 sm:grid-cols-3">
        <div className="absolute left-[16.6%] right-[16.6%] top-6 hidden h-px bg-line sm:block" aria-hidden="true" />
        {steps.map((step, i) => (
          <motion.div
            key={step.n}
            className="relative z-[1] text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mx-auto mb-5.5 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 font-serif text-[19px] font-semibold text-white">
              {step.n}
            </div>
            <div className="mb-2.5 text-[16.5px] font-bold text-ink">{step.title}</div>
            <div className="mx-auto max-w-[300px] text-sm leading-relaxed text-ink-soft">{step.desc}</div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
