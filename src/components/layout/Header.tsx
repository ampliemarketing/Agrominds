import Image from "next/image";
import { siteConfig } from "@/lib/site-config";
import { CtaButton } from "@/components/ui/CtaButton";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <div className="mx-auto flex max-w-[1296px] items-center justify-between px-4 py-3 sm:px-6 md:px-10 md:py-4">
        <div className="flex items-center gap-2 sm:gap-2.5">
          <Image
            src="/images/logo-icon.png"
            alt="AgroMinds Educação"
            width={56}
            height={56}
            className="h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 lg:h-14 lg:w-14 object-contain"
            priority
          />
          <span className="font-serif text-sm sm:text-base md:text-base lg:text-lg font-semibold text-green-800 whitespace-nowrap">
            AgroMinds <span className="font-medium text-ink-soft">Educação</span>
          </span>
        </div>

        <div className="hidden items-center gap-4 lg:gap-8 md:flex">
          <span className="hidden text-xs text-ink-soft xl:inline-block lg:text-sm font-semibold">
            Masterclass {siteConfig.eventTitle}
          </span>
          <CtaButton
            location="header"
            className="px-4 py-2.5 text-xs lg:px-6 lg:py-3.5 lg:text-sm animate-pulse-glow hover:shadow-orange-500/50"
          >
            Participe da Masterclass
          </CtaButton>
        </div>

        <div className="md:hidden">
          <CtaButton
            location="header-mobile"
            size="md"
            className="px-3.5 py-2 text-xs animate-pulse-glow hover:shadow-orange-500/50"
          >
            Participe da Masterclass
          </CtaButton>
        </div>
      </div>
    </header>
  );
}
