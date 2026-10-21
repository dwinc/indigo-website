import { AgingSection } from "@/components/AgingSection";
import { CoachSection } from "@/components/CoachSection";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { HabitMarquee } from "@/components/HabitMarquee";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <HabitMarquee />
        <CoachSection />
        <HowItWorks />
        <AgingSection />
        <Features />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
