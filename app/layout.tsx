import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import type { ReactNode } from "react";
import { Navbar } from "@/components/Navbar";
import { FAQ_ITEMS, SCHEMA_NAP, SITE } from "@/lib/constants";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const seoDescription =
  "A GNAVIDA é referência em saúde ocupacional em Camaçari e região. Realizamos exames ocupacionais (ASO em até 48h), PGR, PCMSO, LTCAT, Laudo de Insalubridade, medição de Risco Psicossocial e adequação completa à nova NR-1. Atendimento in loco disponível. Sem intermediários.";

// Global metadata concentrates local-intent keywords for occupational health searches in Camaçari.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Clínica de Saúde Ocupacional em Camaçari | GNAVIDA",
    template: "%s | GNAVIDA Saúde Ocupacional",
  },
  description: seoDescription,
  keywords: [
    "saúde ocupacional Camaçari",
    "clínica saúde ocupacional Camaçari",
    "exames ocupacionais Camaçari",
    "PGR Camaçari",
    "PCMSO Camaçari",
    "NR-1 Camaçari",
    "risco psicossocial NR-1",
    "LTCAT Camaçari",
    "laudo de insalubridade Camaçari",
    "ASO Camaçari",
    "medicina do trabalho Camaçari",
    "saúde ocupacional Polo Industrial Camaçari",
    "GNAVIDA",
    "gestão de saúde ocupacional Bahia",
    "atendimento in loco saúde ocupacional",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.fullName,
    title: "GNAVIDA | Saúde Ocupacional Completa em Camaçari",
    description: seoDescription,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "GNAVIDA | Saúde Ocupacional em Camaçari",
    description: seoDescription,
  },
  alternates: {
    canonical: SITE.url,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const medicalClinicJsonLd = {
  "@context": "https://schema.org",
  "@type": ["MedicalClinic", "LocalBusiness"],
  name: SCHEMA_NAP.name,
  image: `${SITE.url}/og-image.jpg`,
  url: SITE.url,
  telephone: SCHEMA_NAP.telephone,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SCHEMA_NAP.streetAddress,
    addressLocality: SCHEMA_NAP.addressLocality,
    addressRegion: SCHEMA_NAP.addressRegion,
    postalCode: SCHEMA_NAP.postalCode,
    addressCountry: SCHEMA_NAP.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -12.7025249,
    longitude: -38.3249465,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "16:00",
      description: "Exams: 07:00 a 11:00 | Administrative: 07:00 a 16:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "07:00",
      closes: "10:00",
    },
  ],
  medicalSpecialty: "OccupationalMedicine",
  priceRange: "$$",
  areaServed: [
    "Camaçari",
    "Região Metropolitana de Salvador",
    "Bahia",
    "Brasil",
  ],
  sameAs: [SITE.instagramUrl],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: SITE.url,
    },
  ],
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" className={montserrat.variable}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(medicalClinicJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqPageJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbJsonLd),
          }}
        />
        <Navbar />
        {children}
        <footer className="bg-navy px-6 py-12 text-white md:px-20">
          <div className="mx-auto grid max-w-content gap-8 md:grid-cols-3">
            <section aria-labelledby="footer-name">
              <h2 id="footer-name" className="text-xl font-black uppercase">
                {SCHEMA_NAP.name}
              </h2>
              <p className="mt-3 text-sm font-medium text-white/75">
                Saúde ocupacional com estrutura própria em Camaçari.
              </p>
            </section>

            <address className="not-italic" aria-label="Endereço GNAVIDA">
              <p>{SCHEMA_NAP.streetAddress}</p>
              <p>{SCHEMA_NAP.addressLocality}</p>
              <p>{SCHEMA_NAP.addressRegion}</p>
              <p>{SCHEMA_NAP.postalCode}</p>
              <p>{SCHEMA_NAP.addressCountry}</p>
            </address>

            <section aria-label="Contatos GNAVIDA">
              <a className="block transition hover:text-green" href={`tel:${SCHEMA_NAP.telephone[0]}`}>
                {SITE.phone}
              </a>
              <a className="mt-2 block transition hover:text-green" href={`tel:${SCHEMA_NAP.telephone[1]}`}>
                {SITE.phone2}
              </a>
              <a
                className="mt-4 block font-bold text-green transition hover:brightness-110"
                href={SITE.whatsappLink}
                rel="noopener noreferrer"
                target="_blank"
              >
                WhatsApp {SITE.whatsappDisplay}
              </a>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
