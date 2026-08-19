"use client";

import { motion, type Variants } from "framer-motion";

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

type AnimatedSectionProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "section" | "div";
};

/** Anima fade + slide-up quando a seção entra na viewport. */
export function AnimatedSection({
  children,
  className = "",
  delay = 0,
  as = "section",
}: AnimatedSectionProps) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </Component>
  );
}
