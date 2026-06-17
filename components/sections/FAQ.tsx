"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { FAQ_ITEMS } from "@/lib/constants";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper background="gray">
      <header className="mx-auto max-w-4xl text-center">
        <h2>Perguntas Frequentes sobre Saúde Ocupacional</h2>
        <p className="mt-6 text-lg font-medium text-gray-text">
          Respostas diretas sobre PGR, NR-1, risco psicossocial, ASO e atendimento in loco.
        </p>
      </header>

      <div className="mx-auto mt-12 max-w-3xl space-y-4">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;

          return (
            <article
              key={item.question}
              className={`rounded-2xl border bg-white shadow-navy-md transition ${
                isOpen ? "border-l-4 border-green" : "border-gray-100"
              }`}
            >
              <h3 className="text-base normal-case tracking-normal">
                <button
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-navy"
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  <ChevronRight
                    aria-hidden="true"
                    className={`shrink-0 text-green transition ${isOpen ? "rotate-90" : ""}`}
                    size={22}
                  />
                </button>
              </h3>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 font-medium text-gray-text">{item.answer}</p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
