import Image from "next/image";
import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function Features() {
  return (
    <section id="features" className="px-5 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.16em] text-indigo">Inside the app</p>
          <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-[3.4rem]">
            Everything you need to make habits stick.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {/* Track */}
          <Card className="bg-white lg:row-span-2" delay={0}>
            <CardText
              eyebrow="Track"
              title="Your whole day, at a glance"
              body="Sleep, hydration, movement, nutrition and mind, grouped and colour-coded. Swipe to skip a day without breaking your flow."
            />
            <ScreenCrop src="/screens/track.webp" alt="The Track screen listing sleep, hydration and exercise habits" height="h-[26rem] lg:h-[34rem]" />
          </Card>

          {/* Insights */}
          <Card className="bg-lilac lg:col-span-2" delay={80}>
            <div className="grid items-end gap-6 sm:grid-cols-[1fr_1fr]">
              <CardText
                eyebrow="Insights"
                title="See what's actually working"
                body="Daily habit scores, coloured by their impact on your longevity. Spot the good weeks, the slips and the patterns behind them."
              />
              <ScreenCrop src="/screens/habit-score.webp" alt="Monthly habit score chart with positive, neutral and negative days" height="h-72" offset="-top-[42%]" />
            </div>
          </Card>

          {/* Streaks */}
          <Card className="bg-white" delay={140}>
            <CardText eyebrow="Streaks" title="Show up, keep the flame" body="Per-habit streaks and monthly heatmaps that make consistency visible." />
            <ScreenCrop src="/screens/streaks.webp" alt="Monthly heatmaps for sleep, water and cardio habits" height="h-60" offset="-top-[26%]" />
          </Card>

          {/* Friends */}
          <Card className="bg-white" delay={200}>
            <CardText eyebrow="Friends" title="Better together" body="Start a squad, race each other on weekly steps, and send a wave when a friend's gone quiet." />
            <Leaderboard />
          </Card>

          {/* Challenges */}
          <Card className="bg-[linear-gradient(160deg,#c2410c_0%,#ea580c_55%,#fb923c_100%)] text-white lg:col-span-2" delay={80}>
            <div className="grid items-center gap-6 sm:grid-cols-[1.1fr_0.9fr]">
              <div className="p-1">
                <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/70">Challenges</p>
                <h3 className="mt-2 font-display text-2xl font-bold tracking-tight sm:text-3xl">Turn a goal into a game</h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-white/80">
                  Join a 30-day challenge, climb the ranks and watch your progress grid fill up. A little friendly competition goes a long way.
                </p>
                <Image src="/mascot/indigo-challenge.webp" alt="" width={140} height={140} className="mt-6 h-28 w-28 animate-float" />
              </div>
              <ScreenCrop src="/screens/challenge.webp" alt="The 30-Day Cardio Burn challenge with your rank and progress" height="h-80" dark />
            </div>
          </Card>

          {/* Health sync */}
          <Card className="bg-white" delay={140}>
            <CardText
              eyebrow="Syncs with your phone"
              title="Less logging, more living"
              body="Connect Apple Health or Health Connect and your steps, sleep and workouts check themselves off. Available on Premium."
            />
            <div className="mt-6 flex flex-wrap gap-3">
              <span className="flex items-center gap-2 whitespace-nowrap rounded-full bg-sand px-4 py-2 text-sm font-semibold">
                <span className="text-base" aria-hidden>❤️</span> Apple Health
              </span>
              <span className="flex items-center gap-2 whitespace-nowrap rounded-full bg-sand px-4 py-2 text-sm font-semibold">
                <span className="text-base" aria-hidden>💚</span> Health Connect
              </span>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Card({ className = "", delay, children }: { className?: string; delay: number; children: ReactNode }) {
  return (
    <Reveal delay={delay} className={`overflow-hidden rounded-[2rem] p-7 shadow-card ${className}`}>
      {children}
    </Reveal>
  );
}

function CardText({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-indigo">{eyebrow}</p>
      <h3 className="mt-2 font-display text-2xl font-bold tracking-tight">{title}</h3>
      <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">{body}</p>
    </div>
  );
}

/** A window onto part of a screenshot, styled like the top of a phone screen. */
function ScreenCrop({
  src,
  alt,
  height,
  offset = "top-0",
  dark = false,
}: {
  src: string;
  alt: string;
  height: string;
  offset?: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative mt-7 overflow-clip rounded-t-[1.75rem] border-[6px] border-b-0 ${
        dark ? "border-white/25" : "border-[#141029]"
      } ${height} -mb-7`}
    >
      <Image src={src} alt={alt} width={720} height={1403} sizes="(max-width: 1024px) 90vw, 380px" className={`absolute inset-x-0 w-full ${offset}`} />
    </div>
  );
}

const squad = [
  { name: "You", steps: "26,931", you: true },
  { name: "Maya", steps: "18,738" },
  { name: "Tom", steps: "12,402" },
];

function Leaderboard() {
  return (
    <div className="mt-7 rounded-3xl border border-line bg-cream p-4">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 place-items-center rounded-xl bg-[linear-gradient(135deg,#84cc16,#4d9a0f)] font-display font-bold text-white">W</span>
        <span className="leading-tight">
          <span className="block font-display font-bold">Weekend Warriors</span>
          <span className="text-xs font-medium text-muted">3 members · resets Sunday</span>
        </span>
        <Image src="/mascot/indigo-friends.webp" alt="" width={64} height={43} className="ml-auto h-9 w-auto" />
      </div>
      <ol className="mt-4 space-y-1.5">
        {squad.map((m, i) => (
          <li
            key={m.name}
            className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm ${m.you ? "bg-[#eef8dc]" : "bg-white"}`}
          >
            <span className="w-3 font-bold text-muted">{i + 1}</span>
            <span className="font-semibold">{m.name}</span>
            <span className="ml-auto font-display font-bold">{m.steps}</span>
            {!m.you && (
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#eef8dc] text-sm" aria-label={`Wave at ${m.name}`}>
                👋
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
