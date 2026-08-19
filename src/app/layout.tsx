import type { Metadata } from "next";
import { Newsreader, Public_Sans } from "next/font/google";
import { AnalyticsScripts } from "@/components/AnalyticsScripts";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "500", "600"],
});

const publicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteUrl = "https://www.agromindseducacao.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "El Niño 2026/2027 — Masterclass AgroMinds Educação",
  description:
    "Masterclass AgroMinds Educação: estratégias de manejo para enfrentar os desafios da próxima safra diante do El Niño 2026/2027. 15 de setembro, 19h às 22h, 100% online.",
  openGraph: {
    title: "El Niño 2026/2027 — Masterclass AgroMinds Educação",
    description:
      "Estratégias de manejo para enfrentar os desafios da próxima safra. 15 de setembro, 19h às 22h, 100% online e ao vivo.",
    type: "website",
    locale: "pt_BR",
    siteName: "AgroMinds Educação",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Niño 2026/2027 — Masterclass AgroMinds Educação",
    description: "Estratégias de manejo para enfrentar os desafios da próxima safra.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${newsreader.variable} ${publicSans.variable} antialiased`}>
      <body className="font-sans">
        <AnalyticsScripts />
        {children}
      </body>
    </html>
  );
}
