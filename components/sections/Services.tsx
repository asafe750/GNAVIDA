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
    <SectionWrapper background="white" id="servicos">
      <header className="mx-auto max-w-4xl text-center">
        <h2>Serviços de Saúde Ocupacional em Camaçari</h2>
      </header>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((service) => {
          const Icon = serviceIcons[service.icon];

          return (
            <article
              key={service.title}
              className="relative rounded-2xl border border-gray-100 bg-white p-7 shadow-navy-md transition duration-300 hover:-translate-y-1 hover:border-green"
            >
              {"badge" in service ? (
                <Badge className="absolute right-5 top-5">{service.badge}</Badge>
              ) : null}
              <Icon aria-hidden="true" className="text-green" size={34} />
              <h3 className="mt-8 pr-10 text-navy">{service.title}</h3>
              <p className="mt-5 font-medium text-gray-text">{service.description}</p>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
