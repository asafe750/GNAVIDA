"use client";

import { ChevronDown, CircleCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SITE, TRUST_METRICS } from "@/lib/constants";

const HERO_PHOTOS = [
  {
    src: "/images/recepcao.jpg",
    label: "Recepção",
    alt: "Recepção da clínica de saúde ocupacional GNAVIDA em Camaçari",
    className: "col-span-2 aspect-[2/1]",
  },
  {
    src: "/images/clinico.jpg",
    label: "Sala do Clínico",
    alt: "Sala do clínico para exames ocupacionais da GNAVIDA em Camaçari",
    className: "aspect-square",
  },
  {
    src: "/images/laboratorio.jpg",
    label: "Laboratório",
    alt: "Laboratório da GNAVIDA para exames de saúde ocupacional em Camaçari",
    className: "aspect-square",
  },
  {
    src: "/images/raio-x.jpg",
    label: "Raio-X",
    alt: "Equipamento de raio-X para atendimento ocupacional da GNAVIDA",
    className: "aspect-square",
  },
  {
    src: "/images/acuidade-esteira.jpg",
    label: "Acuidade e Esteira Ergométrica",
    alt: "Área de acuidade visual e esteira ergométrica da GNAVIDA",
    className: "aspect-square",
  },
  {
    src: "/images/eeg.jpg",
    label: "EEG",
    alt: "Equipamento de EEG para exames ocupacionais na GNAVIDA",
    className: "aspect-square",
  },
  {
    src: "/images/audiometria.jpg",
    label: "Audiometria",
    alt: "Sala de audiometria para exames ocupacionais da GNAVIDA em Camaçari",
    className: "aspect-square",
  },
] as const;

export function Hero() {
  return (
    <SectionWrapper
      background="navy"
      className="relative flex min-h-screen items-center overflow-hidden bg-[url('/images/recepcao-gnavida-camacari.jpg')] bg-cover bg-center before:absolute before:inset-0 before:bg-navy before:opacity-80 before:content-['']"
    >
      <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
        <article className="lg:col-span-7">
          <Badge>Saúde Ocupacional Completa em Camaçari</Badge>
          <h1 className="mt-6 max-w-5xl text-[clamp(3.25rem,7vw,4.5rem)] text-white">
            Saúde Ocupacional em Camaçari com estrutura própria — Exames, PGR, PCMSO e NR-1 em um só lugar
          </h1>
          <p className="mt-6 max-w-3xl text-xl font-medium text-white/80">
            A GNAVIDA atende empresas de 1 a 300+ funcionários com exames ocupacionais, documentação SST completa e adequação à nova NR-1. ASO em até 48h, sem intermediários.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button
              href={SITE.whatsappLink}
              rel="noopener noreferrer"
              target="_blank"
              variant="primary"
            >
              Solicitar Orçamento
            </Button>
            <Button
              className="!border-white !text-white hover:!bg-white hover:!text-navy"
              href="#servicos"
              variant="secondary"
            >
              Ver Serviços
            </Button>
          </div>

          <ul className="mt-10 grid gap-5 sm:grid-cols-3">
            {TRUST_METRICS.map((metric) => (
              <li key={metric.label} className="flex items-start gap-3 text-white">
                <CircleCheck aria-hidden="true" className="mt-1 text-green" size={22} />
                <span>
                  <strong className="block text-2xl font-black uppercase tracking-tight">
                    {metric.value}
                  </strong>
                  <span className="text-sm font-semibold text-white/70">
                    {metric.label}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </article>

        <aside className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:col-span-5" aria-label="Fotos da estrutura GNAVIDA">
          {HERO_PHOTOS.map((photo) => (
            <figure
              key={photo.src}
              className={[
                "group relative overflow-hidden rounded-2xl bg-navy shadow-navy-lg",
                photo.className,
              ].join(" ")}
            >
              <img
                alt={photo.alt}
                className="h-full w-full object-cover opacity-75 transition duration-300 group-hover:scale-105 group-hover:opacity-90"
                loading="eager"
                onError={(event) => event.currentTarget.classList.add("hidden")}
                src={photo.src}
              />
              <figcaption className="absolute inset-x-0 bottom-0 z-10 bg-navy/80 px-4 py-3 text-sm font-black uppercase tracking-wide text-white">
                {photo.label}
              </figcaption>
            </figure>
          ))}
        </aside>
      </div>

      <motion.a
        aria-label="Ir para a próxima seção"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-green"
        href="#nr1"
        animate={{ y: [0, 8, 0], opacity: [0.65, 1, 0.65] }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown aria-hidden="true" size={34} />
      </motion.a>
    </SectionWrapper>
  );
}
