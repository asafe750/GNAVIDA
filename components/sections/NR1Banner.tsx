import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { NR1_CHECKLIST, SITE } from "@/lib/constants";

export function NR1Banner() {
  return (
    <SectionWrapper background="white" className="!bg-green !text-navy" id="nr1">
      <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
        <article className="lg:col-span-7">
          <Badge className="!bg-navy !text-white">Em vigor desde maio de 2026</Badge>
          <h2 className="mt-6 max-w-4xl text-navy">
            A NR-1 já está valendo. Sua empresa está regular?
          </h2>
          <p className="mt-6 max-w-3xl text-lg font-semibold text-navy/80">
            A nova NR-1 exige que todas as empresas com funcionários CLT identifiquem, avaliem e gerenciem os riscos psicossociais no trabalho. Quem não se adequar está sujeito a multas de R$ 400 a R$ 10.000+ por item irregular.
          </p>
        </article>

        <aside className="rounded-2xl bg-navy p-8 shadow-navy-lg lg:col-span-5">
          <h3 className="text-2xl text-white">GNAVIDA resolve para você</h3>
          <ul className="mt-6 space-y-4">
            {NR1_CHECKLIST.map((item) => (
              <li key={item} className="flex items-start gap-3 text-white">
                <CheckCircle2 aria-hidden="true" className="mt-0.5 text-green" size={22} />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
          <Button
            className="mt-8 !bg-navy-mid !text-green hover:!brightness-125"
            href={SITE.whatsappLink}
            rel="noopener noreferrer"
            target="_blank"
            variant="primary"
          >
            Adequar minha empresa agora
          </Button>
        </aside>
      </div>
    </SectionWrapper>
  );
}
