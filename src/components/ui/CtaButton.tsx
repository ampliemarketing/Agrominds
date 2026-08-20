"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/lib/site-config";
import { appendUtmParams, trackCtaClick } from "@/lib/analytics";

type CtaButtonProps = {
  children: React.ReactNode;
  location: string;
  size?: "sm" | "md" | "lg";
  className?: string;
};

const sizeClassesMap = {
  sm: "px-3.5 py-2 text-xs",
  md: "px-7 py-4 text-sm",
  lg: "px-9 py-5 text-base",
};

/**
 * Botão de inscrição reutilizável. Todos os CTAs do site devem usar este
 * componente para garantir o mesmo destino de checkout e o mesmo rastreamento.
 */
export function CtaButton({ children, location, size = "md", className = "" }: CtaButtonProps) {
  const sizeClasses = sizeClassesMap[size];

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
      className={`group relative overflow-hidden inline-flex items-center justify-center gap-2.5 rounded-md bg-orange-500 font-sans font-bold uppercase tracking-wide text-white shadow-sm transition-all hover:bg-orange-600 ${sizeClasses} ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
      <span className="relative z-10 flex items-center gap-2.5">
        {children}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="transition-transform duration-200 group-hover:translate-x-1"
        >
          <path
            d="M5 12h14M13 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </motion.a>
  );
}
