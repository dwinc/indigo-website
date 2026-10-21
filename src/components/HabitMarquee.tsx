const habits = [
  { emoji: "😴", label: "Restorative sleep" },
  { emoji: "💧", label: "2L water" },
  { emoji: "🏃", label: "Cardio / Zone 2" },
  { emoji: "🏋️", label: "Strength training" },
  { emoji: "🥦", label: "5 servings fruit & veg" },
  { emoji: "🕙", label: "Consistent bedtime" },
  { emoji: "🧘", label: "Stretch & balance" },
  { emoji: "📖", label: "Read 10 pages" },
  { emoji: "👟", label: "Base movement" },
  { emoji: "🧠", label: "Meditation" },
  { emoji: "✍️", label: "Gratitude journal" },
  { emoji: "🚶", label: "After-meal walk" },
];

export function HabitMarquee() {
  const row = [...habits, ...habits];
  return (
    <section aria-label="Example habits" className="py-14 sm:py-20">
      <p className="text-center text-sm font-bold uppercase tracking-[0.16em] text-muted">
        Built around the everyday habits that add healthy years
      </p>
      <div className="marquee-mask mt-7 overflow-hidden">
        <ul className="flex w-max animate-marquee gap-3 hover:[animation-play-state:paused]">
          {row.map((h, i) => (
            <li
              key={i}
              aria-hidden={i >= habits.length}
              className="flex items-center gap-2 whitespace-nowrap rounded-full border border-sand-deep bg-[#fdf6ee] px-5 py-3 text-[15px] font-semibold text-ink"
            >
              <span aria-hidden>{h.emoji}</span>
              {h.label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
