import { ContactCTA } from "@/components/sections/ContactCTA";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { InLoco } from "@/components/sections/InLoco";
import { NR1Banner } from "@/components/sections/NR1Banner";
import { Services } from "@/components/sections/Services";
import { SocialProof } from "@/components/sections/SocialProof";

export default function HomePage() {
  return (
    <main id="conteudo-principal" className="min-h-screen bg-white">
      <Hero />
      <NR1Banner />
      <Services />
      <InLoco />
      <SocialProof />
      <FAQ />
      <ContactCTA />
    </main>
  );
}
