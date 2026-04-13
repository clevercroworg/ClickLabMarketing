import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Services } from "@/components/sections/Services";
import { ToolsCarousel } from "@/components/sections/ToolsCarousel";
import { Process } from "@/components/sections/Process";
import { Philosophy } from "@/components/sections/Philosophy";
import { Expertise } from "@/components/sections/Expertise";
import { Portfolio } from "@/components/sections/Portfolio";
import { WorldwideClients } from "@/components/sections/WorldwideClients";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Hero />
      <ClientLogos />
      <Services />
      <ToolsCarousel />
      <Process />
      <Philosophy />
      <Expertise />
      <Portfolio />
      <WorldwideClients />
      <TestimonialsCarousel options={{ loop: true, align: "start" }} />
      <CTA />
    </main>
  );
}
