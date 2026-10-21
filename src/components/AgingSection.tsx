"use client";

import { useRef } from "react";
import { Reveal, useInView } from "./Reveal";

// Roughly the September curve from the app's Rate of Aging chart.
const points = [0.97, 0.958, 0.955, 0.958, 0.958, 0.958, 0.955, 0.953, 0.945, 0.941, 0.939, 0.943, 0.948, 0.949, 0.948, 0.95, 0.955, 0.962, 0.966, 0.96, 0.954, 0.952, 0.951, 0.953];
const min = 0.91;
const max = 0.99;
const W = 560;
const H = 220;

function toXY(v: number, i: number) {
  const x = (i / (points.length - 1)) * W;
  const y = ((max - v) / (max - min)) * H;
  return [x, y] as const;
}

const line = points.map((v, i) => toXY(v, i)).map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
const area = `${line} L${W} ${H} L0 ${H} Z`;
const baselineY = ((max - 0.985) / (max - min)) * H;

export function AgingSection() {
  const chartRef = useRef<HTMLDivElement>(null);
  const drawn = useInView(chartRef, 0.4);

  return (
    <section className="px-2 py-10 sm:px-3">
      <div className="relative isolate overflow-hidden rounded-[2rem] bg-[linear-gradient(160deg,#2b1c63_0%,#1d1650_55%,#170f3a_100%)] px-6 py-20 text-white sm:rounded-[2.75rem] sm:px-10 sm:py-28">
        <div className="dot-grid absolute inset-0 -z-10 opacity-60" aria-hidden />
        <div className="absolute right-0 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#14b8a6]/15 blur-[140px]" aria-hidden />

        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#5eead4]">Rate of aging</p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-[3.4rem]">
              See your habits add up to <span className="text-gradient">years.</span>
            </h2>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">
              Every habit you log feeds two numbers: your <strong className="text-white">rate of aging</strong>, where 1.00× is
              average and lower is better, and your <strong className="text-white">lifestyle age</strong>, how old your habits make you look on paper.
              Good weeks pull them down. You&rsquo;ll see it happen.
            </p>

            <dl className="mt-10 grid max-w-md grid-cols-2 gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Rate of aging</dt>
                <dd className="mt-2 font-display text-4xl font-bold">
                  0.96<span className="text-xl text-white/50">×</span>
                </dd>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
                <dt className="text-xs font-bold uppercase tracking-[0.14em] text-white/55">Lifestyle age</dt>
                <dd className="mt-2 font-display text-4xl font-bold">
                  42.6<span className="ml-1 text-sm font-semibold text-[#34d399]">−1.4</span>
                </dd>
              </div>
            </dl>
            <p className="mt-5 text-xs text-white/40">Example figures. Estimates are based on lifestyle factors and are not a clinical measurement.</p>
          </Reveal>

          <Reveal delay={120}>
            <div ref={chartRef} className="rounded-[2rem] bg-white p-6 text-ink shadow-[0_40px_80px_-30px_rgba(0,0,0,0.6)] sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#e3f5ef] text-teal">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M3 12h4l3-8 4 16 3-8h4" />
                    </svg>
                  </span>
                  <span className="leading-tight">
                    <span className="block font-display text-lg font-bold">Rate of Aging</span>
                    <span className="text-sm text-muted">Pace over time</span>
                  </span>
                </div>
                <span className="text-right">
                  <span className="font-display text-4xl font-extrabold text-teal">
                    0.95<span className="text-lg">×</span>
                  </span>
                  <span className="block text-xs font-semibold text-mint">Habits saved −0.020</span>
                </span>
              </div>

              <svg viewBox={`0 0 ${W} ${H + 30}`} className="mt-6 w-full overflow-visible" role="img" aria-label="Line chart: rate of aging dipping from 0.97 to 0.94 and settling around 0.95 over a month">
                <defs>
                  <linearGradient id="roa-fill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0" stopColor="#0f9d8a" stopOpacity="0.18" />
                    <stop offset="1" stopColor="#0f9d8a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <line x1="0" x2={W} y1={baselineY} y2={baselineY} stroke="#c9b9a6" strokeDasharray="6 6" strokeWidth="1.5" />
                <text x={W} y={baselineY - 8} textAnchor="end" className="fill-muted text-[12px] font-semibold">
                  Average 1.00×
                </text>
                <path d={area} fill="url(#roa-fill)" className={`transition-opacity delay-700 duration-1000 ${drawn ? "opacity-100" : "opacity-0"}`} />
                <path
                  d={line}
                  fill="none"
                  stroke="#0f9d8a"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  strokeDasharray="1"
                  strokeDashoffset={drawn ? 0 : 1}
                  style={{ transition: "stroke-dashoffset 1.8s cubic-bezier(0.4, 0, 0.2, 1)" }}
                />
                {["Sep 1", "Sep 8", "Sep 15", "Sep 22", "Sep 29"].map((d, i) => (
                  <text key={d} x={(i / 4) * W} y={H + 26} textAnchor={i === 0 ? "start" : i === 4 ? "end" : "middle"} className="fill-muted text-[13px]">
                    {d}
                  </text>
                ))}
              </svg>

              <p className="mt-6 rounded-2xl bg-cream px-4 py-3 text-sm text-ink-soft">
                <span className="font-semibold text-indigo">Day impact</span> · 16 positive, 13 neutral, 1 negative
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
