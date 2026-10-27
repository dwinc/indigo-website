import Image from "next/image";
import { Reveal } from "./Reveal";

const habits = [
  { emoji: "🌅", tint: "bg-[#fff1d6]", label: "Morning Sunlight" },
  { emoji: "💧", tint: "bg-[#e0f0ff]", label: "2L Water" },
  { emoji: "🚶", tint: "bg-[#ffe9d9]", label: "After-meal Walk" },
  { emoji: "🍎", tint: "bg-[#e6f7e4]", label: "5 Servings Fruit & Veg" },
];

// Jagged "wearable" trace: dense, noisy and meaningless at a glance, on purpose.
const noise = Array.from({ length: 40 }, (_, i) => `${i * 4},${20 - 14 * Math.abs(Math.sin(i * 1.7) * Math.cos(i * 0.6))}`).join(" ");

const card =
  "absolute rounded-2xl bg-[#2a2540] p-2.5 text-white/85 shadow-[0_18px_34px_-12px_rgba(0,0,0,0.7)] ring-1 ring-white/10 sm:p-3";
const label = "text-[9px] font-bold uppercase tracking-[0.14em] text-white/45";

/**
 * Store-screenshot "no homework" frame, as a before/after section.
 * Top: generic tech-heavy health-app clutter around a dizzy Indigo.
 * Bottom: a light sheet with the habit checklist. The clutter is deliberately
 * generic so it reads as "other apps" without copying any one of them.
 */
export function NoHomework() {
  return (
    <section id="why" className="px-2 py-6 sm:px-3 sm:py-10">
      <div className="relative isolate overflow-hidden rounded-[2rem] sm:rounded-[2.75rem]">
        {/* Dark half: the homework other apps assign you. */}
        <div className="relative bg-[linear-gradient(180deg,#120f1f_0%,#1c1830_60%,#262040_100%)] px-6 pb-24 pt-16 text-white sm:px-10 sm:pb-32 sm:pt-24">
          <div className="dot-grid absolute inset-0" aria-hidden />
          <div className="absolute -right-16 top-32 h-64 w-64 rounded-full bg-[#f43f5e]/12 blur-[90px]" aria-hidden />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-6">
            <Reveal className="text-center lg:text-left">
              <p className="font-display text-[1.7rem] font-extrabold leading-[1.08] tracking-[-0.035em] sm:text-5xl lg:text-[3.4rem]">
                No calorie counting.
                <br />
                No confusing charts.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <ClutterVisual />
            </Reveal>
          </div>
        </div>

        {/* Light sheet, sliding up over the dark zone like the store frame. */}
        <div className="relative z-10 -mt-16 overflow-hidden rounded-t-[2.5rem] bg-[linear-gradient(180deg,#f4f1ff_0%,#fff8f2_45%,#fff3ea_100%)] px-6 pb-16 pt-12 shadow-[0_-20px_40px_-20px_rgba(0,0,0,0.5)] sm:-mt-20 sm:px-10 sm:pb-20 sm:pt-16">
          <div className="absolute -left-20 -top-8 h-80 w-80 rounded-full bg-[rgba(99,102,241,0.22)] blur-[60px]" aria-hidden />
          <div className="absolute left-[55%] top-[20%] h-72 w-72 rounded-full bg-[rgba(139,92,246,0.18)] blur-[60px]" aria-hidden />
          <div className="absolute -left-16 top-[70%] h-72 w-72 rounded-full bg-[rgba(251,191,146,0.3)] blur-[60px]" aria-hidden />

          <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <Reveal>
              <h2 className="text-center font-display text-[2.15rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-balance sm:text-5xl lg:text-left lg:text-[3.4rem]">
                A health app that doesn&rsquo;t feel like{" "}
                <span className="text-gradient-ink">homework.</span>
              </h2>
              <p className="mx-auto mt-5 max-w-md text-center text-lg leading-relaxed text-ink-soft lg:mx-0 lg:text-left">
                Tick a few simple habits. Indigo keeps score, so you don&rsquo;t have to live in the numbers.
              </p>
            </Reveal>
            <Reveal delay={100}>
              <HabitChecklist />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClutterVisual() {
  return (
    <div className="relative mx-auto h-[18.5rem] w-full max-w-[19.5rem] sm:h-[22rem] sm:max-w-[26rem] lg:max-w-[28rem] lg:h-[24rem]" aria-hidden>
      <div className={`${card} left-1 top-[12%] w-[9rem] -rotate-[8deg] sm:left-2 sm:top-[16%] sm:w-[10.5rem]`}>
        <div className={label}>Calories</div>
        <div className="mt-1 whitespace-nowrap font-display text-[20px] font-bold leading-none sm:text-[22px]">
          1,847<span className="text-[10px] text-white/45 sm:text-[11px]"> / 2,150 kcal</span>
        </div>
        <div className="mt-2 space-y-1">
          {[78, 52, 91].map((w) => (
            <div key={w} className="h-1 rounded-full bg-white/10">
              <div className="h-1 rounded-full bg-[#f97316]/75" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
      </div>

      <div className={`${card} right-1 top-[8%] w-[8.8rem] rotate-[7deg] sm:right-2 sm:top-[12%] sm:w-[10.5rem]`}>
        <div className="flex items-baseline justify-between">
          <span className={label}>HRV</span>
          <span className="font-display text-[15px] font-bold">
            64<span className="text-[10px] text-white/45"> ms</span>
          </span>
        </div>
        <svg viewBox="0 0 156 22" className="mt-1.5 w-full">
          <polyline points={noise} fill="none" stroke="#60a5fa" strokeWidth="1.5" />
        </svg>
      </div>

      <div className={`${card} left-0 bottom-[8%] flex w-[10rem] rotate-[5deg] items-center gap-3 sm:left-3 sm:bottom-[14%] sm:w-[11.5rem]`}>
        <svg viewBox="0 0 36 36" className="h-11 w-11 shrink-0 -rotate-90">
          <circle cx="18" cy="18" r="14" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#f43f5e" strokeWidth="5" strokeDasharray="30 88" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#facc15" strokeWidth="5" strokeDasharray="0 31 34 88" />
          <circle cx="18" cy="18" r="14" fill="none" stroke="#22d3ee" strokeWidth="5" strokeDasharray="0 66 20 88" />
        </svg>
        <div className="min-w-0 text-[10px] leading-tight text-white/65">
          <div className={label}>Macros</div>
          <div className="mt-1 truncate">Protein 142g</div>
          <div className="truncate">Carbs 198g</div>
          <div className="truncate">Fat 61g</div>
        </div>
      </div>

      <div className={`${card} right-0 bottom-[6%] w-[8.4rem] -rotate-[6deg] sm:right-3 sm:bottom-[12%] sm:w-[9.8rem]`}>
        <div className={label}>VO₂ max</div>
        <div className="mt-1 font-display text-[22px] font-bold leading-none">
          46.1<span className="text-[10px] text-white/45"> ml/kg/min</span>
        </div>
      </div>

      <Image
        src="/mascot/indigo-dizzy.webp"
        alt=""
        width={640}
        height={631}
        className="absolute left-1/2 top-[46%] z-10 h-auto w-[9.5rem] -translate-x-1/2 -translate-y-1/2 animate-float drop-shadow-[0_20px_30px_rgba(0,0,0,0.55)] sm:w-[12rem]"
      />
    </div>
  );
}

function HabitChecklist() {
  return (
    <div className="relative mx-auto w-full max-w-md rounded-[1.75rem] bg-white p-4 shadow-[0_30px_60px_-20px_rgba(60,40,140,0.35)] sm:p-5">
      <Image
        src="/mascot/indigo-talking.webp"
        alt=""
        width={640}
        height={707}
        className="absolute -right-2 -top-10 h-auto w-[4.75rem] drop-shadow-[0_16px_24px_rgba(99,102,241,0.4)] sm:-right-3 sm:-top-12 sm:w-[5.75rem]"
      />
      <div className="flex items-baseline gap-2 px-1">
        <span className="font-display text-[19px] font-bold">Today</span>
        <span className="text-[12px] font-semibold text-mint">✓ All done</span>
      </div>
      <ul className="mt-3 space-y-2">
        {habits.map((h) => (
          <li key={h.label} className="flex items-center gap-3 rounded-2xl bg-cream px-2.5 py-2.5">
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-[18px] ${h.tint}`}>{h.emoji}</span>
            <span className="min-w-0 flex-1 truncate text-[15px] font-semibold">{h.label}</span>
            <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,#34d399,#10b981)] text-white shadow-[0_6px_12px_-4px_rgba(16,185,129,0.7)]" aria-hidden>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12.5l4.5 4.5L19 7.5" />
              </svg>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
