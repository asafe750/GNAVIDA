"use client";

import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const headerClass = isScrolled || isOpen
    ? "bg-navy/95 shadow-navy-md backdrop-blur-xl"
    : "bg-transparent";

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${headerClass}`}>
      <div className="mx-auto flex max-w-content items-center justify-between px-6 py-4 md:px-20">
        <a
          href="./"
          className="group inline-flex flex-col leading-none"
          aria-label={`${SITE.fullName} página inicial`}
        >
          <span className="font-montserrat text-2xl font-black uppercase tracking-tight text-white transition group-hover:text-green">
            {SITE.name}
          </span>
          <span className="mt-1 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-green">
            Gestão de Saúde Ocupacional
          </span>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-10 lg:flex"
        >
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className="text-sm font-semibold uppercase tracking-wide text-white transition hover:text-green"
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <Button
          className="hidden lg:inline-flex"
          href={SITE.whatsappLink}
          rel="noopener noreferrer"
          target="_blank"
          variant="primary"
        >
          Falar no WhatsApp
        </Button>

        <button
          aria-controls="mobile-navigation"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex rounded-full border border-white/20 p-2 text-white transition hover:border-green hover:text-green lg:hidden"
          type="button"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X aria-hidden="true" size={24} /> : <Menu aria-hidden="true" size={24} />}
        </button>
      </div>

      {isOpen ? (
        <motion.nav
          id="mobile-navigation"
          aria-label="Navegação principal mobile"
          className="fixed inset-x-0 top-[72px] z-50 bg-navy px-6 pb-8 pt-4 shadow-navy-lg lg:hidden"
          initial={{ opacity: 0, x: 28 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 28 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          <ul className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-2xl px-4 py-4 text-lg font-bold uppercase tracking-tight text-white transition hover:bg-white/10 hover:text-green"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Button
            className="mt-6 w-full"
            href={SITE.whatsappLink}
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Falar no WhatsApp
          </Button>
        </motion.nav>
      ) : null}
    </header>
  );
}
