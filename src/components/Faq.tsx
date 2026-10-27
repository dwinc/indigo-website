import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "What is Indigo?",
    a: "Indigo is an AI longevity and habit tracker for iPhone and Android. It helps you build small daily habits across sleep, hydration, movement, nutrition and mind, with an AI companion that knows your routine and checks in every day.",
  },
  {
    q: "How is Indigo different from other health apps?",
    a: "Most health apps bury you in calorie counts, macros and charts. Indigo is a short daily checklist of the habits that add healthy years, with an AI friend who checks in. No calorie counting, no confusing dashboards — it doesn't feel like homework.",
  },
  {
    q: "What is rate of aging?",
    a: "Your rate of aging is a score based on the habits you log. 1.00× is average and lower is better, so a good week of sleep, movement and nutrition pulls it down. It's an estimate based on lifestyle factors, not a clinical measurement.",
  },
  {
    q: "What is lifestyle age?",
    a: "Lifestyle age is how old your habits make you look on paper. You get a starting lifestyle age from a two-minute check-in, and it moves as your habits change.",
  },
  {
    q: "How does the AI companion work?",
    a: "Indigo runs on state-of-the-art AI models and talks like a friend, not a chatbot. It remembers your goals and routine, checks in at the right moments, and can add, pause or drop habits right from the chat when life changes.",
  },
  {
    q: "Is Indigo free?",
    a: "Yes, Indigo is free to download on the App Store and Google Play. Some features, like syncing with Apple Health and Health Connect, are part of Indigo Premium.",
  },
  {
    q: "Does Indigo work with Apple Health and Health Connect?",
    a: "Yes. On Premium, Indigo reads the steps, sleep and exercise duration you approve from Apple Health or Health Connect and checks those habits off for you. Access is read-only.",
  },
  {
    q: "Is my data private?",
    a: "Your conversations with Indigo are encrypted, and your data is never sold. You can request a copy or deletion of your data at any time.",
  },
  {
    q: "Is Indigo a medical app?",
    a: "No. Indigo is a wellness app, not a medical device, and doesn't provide medical advice.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function Faq() {
  return (
    <section id="faq" className="px-5 py-20 sm:py-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="mx-auto max-w-3xl">
        <Reveal className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo">FAQ</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-[3.4rem]">
            Questions, answered.
          </h2>
        </Reveal>

        <div className="mt-12 space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="group rounded-3xl bg-white px-6 py-5 shadow-card">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-lg font-bold [&::-webkit-details-marker]:hidden">
                <h3>{f.q}</h3>
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-lilac text-indigo transition-transform group-open:rotate-45" aria-hidden>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M7 1v12M1 7h12" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted">
          Something else? Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-indigo hover:underline">
            {site.email}
          </a>
          .
        </p>
      </div>
    </section>
  );
}
