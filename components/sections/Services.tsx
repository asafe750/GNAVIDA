import {
  Brain,
  ClipboardList,
  FileSearch,
  FileText,
  MapPin,
  ShieldAlert,
  Stethoscope,
  Upload,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { SERVICES } from "@/lib/constants";

type ServiceIconName = (typeof SERVICES)[number]["icon"];

const serviceIcons: Record<ServiceIconName, LucideIcon> = {
  Stethoscope,
  FileText,
  ClipboardList,
  Upload,
  MapPin,
  Brain,
  FileSearch,
  ShieldAlert,
  Zap,
};

export function Services() {
  return (
    <SectionWrapper background="gray" id="servicos">
      <header className="mx-auto max-w-4xl text-center">
        <h2>Serviços de Saúde Ocupacional em Camaçari</h2>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = serviceIcons[service.icon];

          return (
            <article
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-7 shadow-navy-md transition duration-200 hover:-translate-y-1 hover:border-green"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute right-0 top-0 h-32 w-32 bg-gradient-to-bl from-navy/5 to-transparent"
              />
              {"badge" in service ? (
                <Badge className="absolute right-5 top-5 z-10">{service.badge}</Badge>
              ) : null}
              <span className="relative z-10 inline-flex rounded-full border border-navy/10 bg-navy/10 p-3 text-green transition duration-200 group-hover:bg-green/20">
                <Icon aria-hidden="true" size={32} />
              </span>
              <h3 className="relative z-10 mt-8 pr-10 text-navy">{service.title}</h3>
              <p className="relative z-10 mt-5 font-medium text-gray-text">{service.description}</p>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
