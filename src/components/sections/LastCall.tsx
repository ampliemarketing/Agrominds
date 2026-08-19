import Image from "next/image";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { CtaButton } from "@/components/ui/CtaButton";
import { siteConfig } from "@/lib/site-config";

export function LastCall() {
  return (
    <AnimatedSection className="relative overflow-hidden bg-green-900 px-6 py-24 text-center md:py-32">
      <Image
        src="/images/lastcall-field.jpg"
        alt=""
        fill
        loading="lazy"
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(16,30,21,0.62),rgba(16,30,21,0.86))]" />

      <div className="relative mx-auto max-w-[680px]">
        <h2 className="mb-5 font-serif text-[28px] font-medium leading-tight text-white md:text-[38px]">
          Prepare-se hoje para os desafios da próxima safra.
        </h2>
        <p className="mb-7 text-base leading-relaxed text-[#DCEADB] md:text-[16.5px]">
          Participe de três horas de conhecimento técnico, experiências
          práticas e diferentes perspectivas sobre o {siteConfig.eventTitle}.
        </p>
        <div className="mb-8 text-[15px] font-bold tracking-wide text-white">
          {siteConfig.eventDateShort.toUpperCase()} · {siteConfig.eventTimeLabel.toUpperCase()}
        </div>
        <CtaButton location="last-call" size="lg">
          Garantir minha vaga
        </CtaButton>
      </div>
    </AnimatedSection>
  );
}
