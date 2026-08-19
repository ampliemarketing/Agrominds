import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-green-900 px-6 pb-9 pt-14 md:px-10">
      <div className="mx-auto flex max-w-[1296px] flex-col gap-8 border-b border-line-dark pb-8 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-2.5">
          <Image src="/images/logo-icon.png" alt="AgroMinds Educação" width={26} height={26} />
          <span className="font-serif text-lg font-semibold text-white">
            AgroMinds <span className="font-medium text-[#9DB59F]">Educação</span>
          </span>
        </div>

        <nav className="flex flex-wrap gap-x-7 gap-y-3">
          <a href="/politica-de-privacidade" className="text-sm font-semibold text-[#C8DFC9] hover:text-white">
            Política de Privacidade
          </a>
          <a href="/termos-de-uso" className="text-sm font-semibold text-[#C8DFC9] hover:text-white">
            Termos de Uso
          </a>
        </nav>
      </div>

      <p className="mx-auto max-w-[1296px] pt-5 text-xs text-[#6E8C73]">
        Copyright © 2026 AgroMinds Educação. Todos os direitos reservados.
      </p>
    </footer>
  );
}
