"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const schedule = [
  { time: "19h00", title: "Abertura e cenário climático", speaker: "Anderson Rossatto" },
  { time: "19h20", title: "Região Sul", speaker: "Rodrigo Rossato" },
  { time: "20h30", title: "Intervalo", speaker: null },
  { time: "20h40", title: "Centro-Oeste", speaker: "Fabrício Andrade" },
  { time: "21h50", title: "Considerações finais e encerramento", speaker: null },
  { time: "22h00", title: "Final da Masterclass", speaker: null },
];

export function Schedule() {
  return (
    <section className="relative overflow-hidden border-y border-line">
      <Image
        src="/images/schedule-field.jpg"
        alt=""
        fill
        loading="lazy"
        className="object-cover"
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(243, 248, 242, 0.63) 0%, rgba(243,248,242,0.95) 38%, rgba(243, 248, 242, 0.04) 58%, rgba(243,248,242,0.1) 78%)",
        }}
      />

      <motion.div
        className="relative px-6 py-20 md:px-10 md:py-24"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-[1296px]">
          <div className="mb-14 max-w-[460px] text-left">
            <div className="mb-4 text-[13px] font-bold uppercase tracking-[0.14em] text-green-600">
              Agenda do dia
            </div>
            <h2 className="font-serif text-[28px] font-medium text-ink md:text-[34px]">Programação</h2>
          </div>

          <div className="relative max-w-[500px]">
            <div className="absolute bottom-2 left-[97px] top-2 w-px bg-line" aria-hidden="true" />
            {schedule.map((item, i) => (
              <motion.div
                key={item.time + item.title}
                className="relative flex items-start gap-5 py-[18px]"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
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
        </div>
      </motion.div>
    </section>
  );
}
