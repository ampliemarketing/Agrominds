import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "@/components/ui/CtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1296px] items-center justify-between px-6 py-4 md:px-10">
        <div className="flex items-center gap-2.5">
          <Image src="/images/logo-icon.png" alt="AgroMinds Educação" width={28} height={28} priority />
          <span className="font-serif text-lg font-semibold text-green-800">
            AgroMinds <span className="font-medium text-ink-soft">Educação</span>
          </span>
        </div>

        <div className="hidden items-center gap-9 md:flex">
          <span className="text-sm font-semibold text-ink-soft">
            Masterclass {siteConfig.eventTitle}
          </span>
          <CtaButton location="header">Garantir minha vaga</CtaButton>
        </div>

        <div className="md:hidden">
          <CtaButton location="header-mobile" size="md" className="px-4 py-2.5 text-xs">
            Garantir vaga
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
