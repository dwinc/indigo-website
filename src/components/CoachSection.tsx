import { CoachChat } from "./CoachChat";
import { Reveal } from "./Reveal";

const points = [
  {
    title: "Remembers what matters to you",
    body: "Your goals, your routine, the knee that's still healing. Indigo keeps the context so you never have to repeat yourself.",
    icon: "M12 3a9 9 0 1 0 9 9M12 7v5l3 2M17 3h4v4",
  },
  {
    title: "Checks in at the right moments",
    body: "A nudge in the morning, a reflection in the evening, timed to your schedule. Never a wall of notifications.",
    icon: "M6 8a6 6 0 1 1 12 0c0 7 3 9 3 9H3s3-2 3-9M10.3 21a1.94 1.94 0 0 0 3.4 0",
  },
  {
    title: "Adapts when life changes",
    body: "Busy week, holiday, injury. Indigo adjusts your habits with you, and can add, pause or drop them right from the chat.",
    icon: "M21 12a9 9 0 0 1-15.5 6.2L3 16M3 12a9 9 0 0 1 15.5-6.2L21 8M21 3v5h-5M3 21v-5h5",
  },
  {
    title: "Private by design",
    body: "Your conversations with Indigo are encrypted, and your data is never sold.",
    icon: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
  },
];

export function CoachSection() {
  return (
    <section id="coach" className="px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo">Meet Indigo</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-[3.4rem]">
              A companion,
              <br />
              not a robot.
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink-soft">
              Indigo runs on state-of-the-art AI models, but it doesn&rsquo;t talk like a chatbot. It talks like a friend
              who&rsquo;s genuinely in your corner. It keeps you honest without the guilt trips.
            </p>
          </Reveal>

          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {points.map((p, i) => (
              <Reveal as="li" key={p.title} delay={i * 90}>
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-lilac text-indigo">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d={p.icon} />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{p.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{p.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal delay={120}>
          <CoachChat />
        </Reveal>
      </div>
    </section>
  );
}
