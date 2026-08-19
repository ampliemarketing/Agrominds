"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

const schedule = [
  { time: "19h00", title: "Abertura e cenário climático", speaker: "Anderson" },
  { time: "19h20", title: "Região Sul", speaker: "Rodrigo Rossato" },
  { time: "20h30", title: "Intervalo", speaker: null },
  { time: "20h40", title: "Centro-Oeste", speaker: "Fabrício" },
  { time: "21h50", title: "Considerações finais e encerramento", speaker: null },
  { time: "22h00", title: "Final da Masterclass", speaker: null },
];

export function Schedule() {
  return (
    <AnimatedSection className="border-y border-line bg-green-050 px-6 py-20 md:px-10 md:py-24">
      <div className="mb-14 text-center">
        <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-green-600">
          Agenda do dia
        </div>
        <h2 className="font-serif text-[28px] font-medium text-ink md:text-[34px]">Programação</h2>
      </div>

      <div className="relative mx-auto max-w-[720px]">
        <div className="absolute bottom-2 left-[97px] top-2 w-px bg-line" aria-hidden="true" />
        {schedule.map((item, i) => (
          <motion.div
            key={item.time + item.title}
            className="relative flex items-start gap-5 py-[18px]"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.45, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="w-[88px] pt-0.5 text-right text-sm font-bold text-green-700">{item.time}</div>
            <div className="z-[1] mt-[3px] h-3.5 w-3.5 flex-none rounded-full border-[3px] border-green-600 bg-white" />
            <div className="flex-1 pt-px">
              <div className="text-base font-bold text-ink">{item.title}</div>
              {item.speaker && (
                <div className="mt-0.5 text-[13.5px] text-ink-soft">{item.speaker}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </AnimatedSection>
  );
}
