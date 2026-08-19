"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { appendUtmParams, trackCtaClick } from "@/lib/analytics";

type CtaButtonProps = {
  children: React.ReactNode;
  location: string;
  size?: "md" | "lg";
  className?: string;
};

/**
 * Botão de inscrição reutilizável. Todos os CTAs do site devem usar este
 * componente para garantir o mesmo destino de checkout e o mesmo rastreamento.
 */
export function CtaButton({ children, location, size = "md", className = "" }: CtaButtonProps) {
  const sizeClasses =
    size === "lg" ? "px-9 py-5 text-base" : "px-7 py-4 text-sm";

  return (
    <motion.a
      href={appendUtmParams(siteConfig.checkoutUrl)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCtaClick(location)}
      data-cta-location={location}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15, ease: "easeOut" }}
      className={`inline-flex items-center justify-center gap-2.5 rounded-md bg-orange-500 font-sans font-bold uppercase tracking-wide text-white shadow-sm transition-colors hover:bg-orange-600 ${sizeClasses} ${className}`}
    >
      {children}
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M5 12h14M13 6l6 6-6 6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.a>
  );
}
