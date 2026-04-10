import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ClientLogos } from "@/components/sections/ClientLogos";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { Philosophy } from "@/components/sections/Philosophy";
import { ToolsCarousel } from "@/components/sections/ToolsCarousel";
import { Expertise } from "@/components/sections/Expertise";
import { TestimonialsCarousel } from "@/components/sections/TestimonialsCarousel";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <Process />
      <Philosophy />
      <ToolsCarousel />
      <Expertise />
      <TestimonialsCarousel options={{ loop: true, align: "start" }} />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
