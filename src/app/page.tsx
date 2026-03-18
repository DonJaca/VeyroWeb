import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { Services } from "@/components/sections/Services";
import { Works } from "@/components/sections/Works";
import { ApproachPreview } from "@/components/sections/ApproachPreview";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { SocialProof } from "@/components/sections/SocialProof";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-grow">
        <Hero />
        <ValueProposition />
        <Services />
        <Works />
        <ApproachPreview />
        <AboutPreview />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
