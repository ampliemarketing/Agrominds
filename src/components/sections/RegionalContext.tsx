import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function RegionalContext() {
  return (
    <AnimatedSection className="flex justify-center px-6 py-20 md:py-24">
      <div className="max-w-[820px] text-center">
        <div className="mb-5 text-[13px] font-bold uppercase tracking-[0.14em] text-green-600">
          O cenário
        </div>
        <h2 className="mb-6 font-serif text-[28px] font-medium leading-tight text-ink md:text-[38px]">
          O El Niño pode mudar o cenário da próxima safra. Sua estratégia de
          manejo precisa estar preparada.
        </h2>
        <p className="mb-4 text-base leading-relaxed text-ink-soft md:text-[17px]">
          Os impactos climáticos podem variar significativamente entre as
          diferentes regiões produtoras do Brasil. Por isso, entender o
          cenário e saber interpretar seus possíveis reflexos no campo é
          fundamental para tomar decisões de manejo mais assertivas.
        </p>
        <p className="text-base leading-relaxed text-ink-soft md:text-[17px]">
          Nesta Masterclass, três especialistas apresentarão diferentes
          perspectivas regionais, unindo conhecimento técnico e experiência
          prática de campo.
        </p>
      </div>
    </AnimatedSection>
  );
}
