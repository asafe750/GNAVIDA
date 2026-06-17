"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionBackground = "white" | "gray" | "navy";

type SectionWrapperProps = {
  background?: SectionBackground;
  children: ReactNode;
  className?: string;
  id?: string;
};

const backgroundClasses: Record<SectionBackground, string> = {
  white: "bg-white text-navy",
  gray: "bg-gray-light text-navy",
  navy: "bg-navy text-white",
};

export function SectionWrapper({
  background = "white",
  children,
  className,
  id,
}: SectionWrapperProps) {
  return (
    <motion.section
      id={id}
      className={[
        "px-6 py-section-mobile md:px-20 md:py-section-desktop",
        backgroundClasses[background],
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="mx-auto max-w-content">{children}</div>
    </motion.section>
  );
}
