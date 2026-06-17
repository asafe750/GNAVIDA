import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { IN_LOCO_STATS, IN_LOCO_STEPS, SITE } from "@/lib/constants";

export function InLoco() {
  return (
    <SectionWrapper background="gray" id="inloco">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <article className="lg:col-span-7">
          <Badge>Exclusivo para empresas</Badge>
          <h2 className="mt-6 max-w-4xl">
            Atendimento In Loco em Camaçari e Região
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-medium text-gray-text">
            A GNAVIDA vai até a sua empresa com toda a estrutura necessária para realizar os exames ocupacionais no local. Sem deslocamento de colaboradores, sem perda de produtividade.
          </p>

          <ol className="mt-8 space-y-4">
            {IN_LOCO_STEPS.map((step, index) => (
              <li key={step} className="flex gap-4">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-green text-sm font-black text-navy">
                  {index + 1}
                </span>
                <span className="pt-1 font-semibold text-navy">{step}</span>
              </li>
            ))}
          </ol>

          <Button
            className="mt-10"
            href={SITE.whatsappLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            Solicitar Atendimento In Loco
          </Button>
        </article>

        <aside className="rounded-2xl bg-navy p-8 text-white shadow-navy-lg lg:col-span-5">
          <div className="grid gap-6 sm:grid-cols-2">
            {IN_LOCO_STATS.map((stat) => (
              <article key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <CheckCircle2 aria-hidden="true" className="text-green" size={24} />
                <strong className="mt-5 block text-4xl font-black uppercase tracking-tight">
                  {stat.value}
                </strong>
                <p className="mt-2 text-sm font-semibold text-white/70">{stat.label}</p>
              </article>
            ))}
          </div>
        </aside>
      </div>
    </SectionWrapper>
  );
}
