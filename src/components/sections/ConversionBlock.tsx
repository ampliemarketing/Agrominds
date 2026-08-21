"use client";

import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CtaButton } from "@/components/ui/CtaButton";
import { siteConfig } from "@/lib/site-config";

const facts = [
  siteConfig.eventDateLabel,
  siteConfig.eventTimeLabel,
  siteConfig.eventFormat,
  "+ E-book oficial incluso",
];

export function ConversionBlock() {
  return (
    <AnimatedSection className="flex justify-center px-6 py-20 md:px-10 md:py-24">
      <div className="relative w-full max-w-[920px] overflow-hidden rounded-[20px] bg-[linear-gradient(155deg,#101E15,#204327)] px-8 py-14 text-center md:px-16 md:py-16">
        <svg
          className="pointer-events-none absolute -bottom-[70px] -left-[60px] opacity-10"
          width="300"
          height="300"
          viewBox="0 0 200 200"
          fill="none"
          aria-hidden="true"
        >
          <circle cx="100" cy="100" r="99" stroke="#fff" strokeWidth="1" />
          <circle cx="100" cy="100" r="65" stroke="#fff" strokeWidth="1" />
        </svg>

        <div className="relative">
          <div className="mb-4.5 text-[13px] font-semibold uppercase tracking-[0.14em] text-[#C8DFC9]">
            Masterclass · {siteConfig.eventTitle}
          </div>
          <h2 className="mb-5.5 font-serif text-[26px] font-medium text-white md:text-[32px]">
            Garanta sua vaga na Masterclass AgroMinds Educação
          </h2>

          <div className="mb-8 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {facts.map((fact, i) => (
              <span key={fact} className="flex items-center gap-3 text-[14.5px] font-semibold text-[#DCEADB]">
                {i > 0 && <span className="text-[#5C7862]">·</span>}
                {fact}
              </span>
            ))}
          </div>


          <CtaButton location="conversion-block" size="lg">
            Quero participar da Masterclass
          </CtaButton>

          <div className="mt-4 text-[12.5px] text-[#82A186]">
            Inscrição realizada pelo checkout seguro da Eduzz
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
