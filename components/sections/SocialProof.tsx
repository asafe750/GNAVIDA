import { Quote } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { CLIENTS } from "@/lib/constants";

export function SocialProof() {
  return (
    <SectionWrapper background="white">
      <header className="mx-auto max-w-4xl text-center">
        <h2>Empresas que confiam na GNAVIDA</h2>
        <p className="mt-6 text-lg font-medium text-gray-text">
          Atendemos desde pequenas empresas até grandes indústrias do Polo Industrial de Camaçari.
        </p>
      </header>

      <ul className="mt-10 flex flex-wrap justify-center gap-4" aria-label="Empresas atendidas">
        {CLIENTS.map((client) => (
          <li
            key={client}
            className="rounded-full bg-navy px-6 py-3 text-sm font-bold text-white shadow-navy-md"
          >
            {client}
          </li>
        ))}
      </ul>

      <figure className="mx-auto mt-12 max-w-4xl rounded-2xl bg-navy p-8 text-white shadow-navy-lg">
        <Quote aria-hidden="true" className="text-green" size={46} />
        <blockquote className="mt-6 text-xl font-semibold leading-relaxed text-white/90">
          A GNAVIDA atende nossa empresa com agilidade e organização. Toda a documentação SST está sempre em dia e o suporte é excelente.
        </blockquote>
        <figcaption className="mt-6 text-sm font-bold uppercase tracking-wide text-green">Gestor de RH, indústria do Polo de Camaçari
        </figcaption>
      </figure>
    </SectionWrapper>
  );
}
