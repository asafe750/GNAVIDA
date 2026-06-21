"use client";

import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CLIENT_SECTORS } from "@/lib/constants";

export function SocialProof() {
  return (
    <SectionWrapper background="white">
      <header className="mx-auto max-w-4xl text-center">
        <h2>Empresas que confiam na GNAVIDA</h2>
        <p className="mt-6 text-lg font-medium text-gray-text">
          Atendemos desde pequenas empresas até grandes indústrias do Polo Industrial de Camaçari.
        </p>
      </header>

      <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4" aria-label="Empresas atendidas">
        {CLIENT_SECTORS.map((client) => (
          <li
            key={client.name}
            className="rounded-2xl border border-gray-100 bg-white p-4 shadow-navy-md"
          >
            <figure>
              <div className="relative h-[120px] overflow-hidden rounded-xl bg-navy">
                <img
                  alt={client.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  onError={(event) => event.currentTarget.classList.add("hidden")}
                  src={client.image}
                />
                <span aria-hidden="true" className="absolute inset-0 bg-navy/20" />
              </div>
              <figcaption className="mt-4 text-center text-base font-black text-navy">
                {client.name}
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>

      <figure className="mx-auto mt-12 max-w-4xl rounded-2xl bg-navy p-8 text-white shadow-navy-lg">
        <Quote aria-hidden="true" className="text-green" size={46} />
        <blockquote className="mt-6 text-xl font-semibold leading-relaxed text-white/90">
          A GNAVIDA atende nossa empresa com agilidade e organização. Toda a documentação SST está sempre em dia e o suporte é excelente.
        </blockquote>
        <figcaption className="mt-6 text-sm font-bold uppercase tracking-wide text-green">
          Gestor de RH, indústria do Polo de Camaçari
        </figcaption>
      </figure>
    </SectionWrapper>
  );
}
