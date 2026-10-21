import { AgingSection } from "@/components/AgingSection";
import { CoachSection } from "@/components/CoachSection";
import { Faq } from "@/components/Faq";
import { Features } from "@/components/Features";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { HabitMarquee } from "@/components/HabitMarquee";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/site";

const app = {
  name: "Indigo: Longevity Habit Tracker",
  alternateName: site.name,
  description: site.description,
  url: `${site.url}/`,
  image: `${site.url}/icon.png`,
  applicationCategory: "HealthApplication",
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
  publisher: { "@id": `${site.url}/#organization` },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${site.url}/#organization`,
      name: site.name,
      url: `${site.url}/`,
      logo: `${site.url}/icon.png`,
      email: site.email,
      sameAs: [site.appStoreUrl, site.playStoreUrl],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      name: site.name,
      url: `${site.url}/`,
      publisher: { "@id": `${site.url}/#organization` },
    },
    { "@type": "MobileApplication", ...app, operatingSystem: "iOS", installUrl: site.appStoreUrl },
    { "@type": "MobileApplication", ...app, operatingSystem: "Android", installUrl: site.playStoreUrl },
  ],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <Nav />
      <main>
        <Hero />
        <HabitMarquee />
        <CoachSection />
        <HowItWorks />
        <AgingSection />
        <Features />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
