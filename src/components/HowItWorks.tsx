import Image from "next/image";
import { Reveal } from "./Reveal";

const steps = [
  {
    mascot: "/mascot/indigo.webp",
    title: "Tell Indigo about you",
    body: "A two-minute check-in on your sleep, movement, food and stress gives you a starting lifestyle age and a habit plan that fits your life.",
    tint: "bg-lilac",
  },
  {
    mascot: "/mascot/indigo-complete.webp",
    title: "Check off your day",
    body: "Tap through your habits in seconds, or let Apple Health and Health Connect fill in steps, sleep and workouts for you.",
    tint: "bg-[#fff0e0]",
  },
  {
    mascot: "/mascot/indigo-insights.webp",
    title: "Watch the trend",
    body: "Your habit score, streaks and rate of aging update as you go, so you can see which habits are really paying off.",
    tint: "bg-[#e3f5ef]",
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-orange">How it works</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-[3.4rem]">
            Small habits.
            <br />
            Real momentum.
          </h2>
        </Reveal>

        <ol className="mt-14 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 120} className="relative rounded-[2rem] bg-white p-7 shadow-card">
              <div className={`grid h-28 place-items-center rounded-3xl ${s.tint}`}>
                <Image src={s.mascot} alt="" width={120} height={120} className="h-24 w-24 object-contain" />
              </div>
              <span className="mt-6 block font-display text-sm font-bold text-muted">0{i + 1}</span>
              <h3 className="mt-1 font-display text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{s.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
