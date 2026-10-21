import Image from "next/image";
import type { ReactNode } from "react";
import { PhoneFrame } from "@/components/PhoneFrame";
import { area, baselineY, H, line, W } from "@/lib/agingChart";
import { DESIGN_WIDTH, designHeight, type Device } from "./devices";
import { FitHeadline } from "./FitHeadline";
import type { ChatMessage, FrameCopy, FrameLayout, UiCopy } from "./types";

type Props = { frame: FrameCopy; device: Device; ui: UiCopy; locale: string };

const themes: Record<FrameLayout, { bg: string; dark: boolean }> = {
  hero: { bg: "bg-[linear-gradient(160deg,#5a3fdc_0%,#3f4bd2_30%,#2459b0_58%,#1d3f86_80%,#33287f_100%)]", dark: true },
  chat: { bg: "bg-[linear-gradient(180deg,#fff8f2_0%,#f6efff_100%)]", dark: false },
  aging: { bg: "bg-[linear-gradient(165deg,#2b1c63_0%,#1d1650_55%,#170f3a_100%)]", dark: true },
  track: { bg: "bg-[linear-gradient(180deg,#f1ebff_0%,#f7f3ff_40%,#fff4ea_100%)]", dark: false },
  together: { bg: "bg-[linear-gradient(180deg,#2b1c63_0%,#4a2380_22%,#9a3460_44%,#e2581a_68%,#fb923c_100%)]", dark: true },
};

/** One store screenshot, laid out at DESIGN_WIDTH px wide. Scale it with <ScaledFrame>. */
export function StoreFrame({ frame, device, ui, locale }: Props) {
  const theme = themes[frame.layout];
  const compact = device === "android";

  return (
    <div
      lang={locale}
      className={`relative isolate flex flex-col overflow-hidden font-sans ${theme.bg} ${theme.dark ? "text-white" : "text-ink"}`}
      style={{ width: DESIGN_WIDTH, height: designHeight(device) }}
    >
      {theme.dark && <div className="dot-grid absolute inset-0 -z-10" />}
      <Glows layout={frame.layout} />

      <header className={`relative z-10 px-8 text-center ${compact ? "pt-7" : "pt-[3.25rem]"}`}>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full py-1 pl-1 pr-3.5 text-[13px] font-bold ${
            theme.dark ? "bg-white/12 text-white/90 ring-1 ring-white/15" : "bg-white text-indigo shadow-card"
          }`}
        >
          <Image src="/mascot/indigo.webp" alt="" width={44} height={44} className="h-[22px] w-[22px]" priority />
          {frame.eyebrow}
        </span>
        <FitHeadline
          text={frame.headline}
          dark={theme.dark}
          base={compact ? 40 : 44}
          className={`${compact ? "mt-3" : "mt-4"} font-display font-extrabold leading-[1.02] tracking-[-0.035em]`}
        />
        <p className={`mx-auto ${compact ? "mt-2" : "mt-3"} max-w-[20rem] text-[17px] font-medium leading-snug ${theme.dark ? "text-white/75" : "text-ink-soft"}`}>
          {frame.sub}
        </p>
      </header>

      <div className="relative flex-1">
        <Visual frame={frame} device={device} ui={ui} locale={locale} />
      </div>
    </div>
  );
}

/** Renders a frame at any pixel width using CSS zoom, so layout stays crisp at every size. */
export function ScaledFrame({ width, ...props }: Props & { width: number }) {
  const zoom = width / DESIGN_WIDTH;
  return (
    <div style={{ width, height: designHeight(props.device) * zoom }}>
      <div style={{ zoom }}>
        <StoreFrame {...props} />
      </div>
    </div>
  );
}

function Glows({ layout }: { layout: FrameLayout }) {
  const glow = "absolute -z-10 rounded-full";
  if (layout === "hero")
    return (
      <>
        <div className={`${glow} -left-24 top-20 h-72 w-72 bg-[#a78bfa]/30 blur-[90px]`} />
        <div className={`${glow} -right-16 bottom-24 h-80 w-80 bg-[#7c5cfc]/40 blur-[100px]`} />
        <div className={`${glow} right-0 top-1/3 h-56 w-56 bg-[#ffb800]/20 blur-[90px]`} />
      </>
    );
  if (layout === "aging") return <div className={`${glow} -right-20 top-1/2 h-80 w-80 bg-[#14b8a6]/20 blur-[100px]`} />;
  if (layout === "together") return <div className={`${glow} -left-20 top-1/3 h-80 w-80 bg-[#ffb800]/30 blur-[100px]`} />;
  // Soft wash of the Track screen's category colours: sleep purple, hydration blue, exercise orange.
  if (layout === "track")
    return (
      <>
        <div className={`${glow} -right-20 -top-16 h-80 w-80 bg-[#8b5cf6]/35 blur-[80px]`} />
        <div className={`${glow} -left-32 top-[30%] h-96 w-80 bg-[#3b9ef5]/35 blur-[80px]`} />
        <div className={`${glow} -right-28 bottom-16 h-96 w-80 bg-[#ff7a00]/30 blur-[80px]`} />
        <div className={`${glow} -left-16 -bottom-10 h-72 w-72 bg-[#ffb800]/30 blur-[80px]`} />
      </>
    );
  return <div className={`${glow} -right-24 top-1/2 h-80 w-80 bg-[#7c5cfc]/15 blur-[100px]`} />;
}

function Visual({ frame, device, ui }: Props) {
  const compact = device === "android";
  const phoneWidth = compact ? 258 : 310;
  const phone = (statusBg: string, statusDark: boolean, children?: ReactNode) => (
    <div className={`absolute left-1/2 -translate-x-1/2 ${compact ? "top-4" : "top-7"}`} style={{ width: phoneWidth }}>
      <PhoneFrame src={frame.screen!} alt="" statusBg={statusBg} statusDark={statusDark} priority />
      {children}
    </div>
  );

  switch (frame.layout) {
    case "hero":
      return phone(
        "#7333dd",
        false,
        <>
          <Image
            src="/mascot/indigo.webp"
            alt=""
            width={240}
            height={240}
            priority
            className="absolute -right-12 -top-12 h-28 w-28 drop-shadow-[0_16px_24px_rgba(23,15,58,0.5)]"
          />
          {frame.bubble && <IndigoBubble className="-left-12 top-[47%]" text={frame.bubble} badge={ui.aiCoach} />}
        </>,
      );

    case "track":
      return phone(
        "#fff7f1",
        true,
        <Chip
          className="-right-12 top-[40%]"
          icon={device === "ios" ? "❤️" : "💚"}
          tint="bg-[#ffe9ee]"
          label={ui.synced}
          value={device === "ios" ? "Apple Health" : "Health Connect"}
        />,
      );

    case "together":
      return phone(
        "#b53e0d",
        false,
        <>
          <Image src="/mascot/indigo-friends.webp" alt="" width={300} height={200} priority className="absolute -right-16 -top-10 h-auto w-36" />
          <Leaderboard className="-left-12 top-[52%]" squad={ui.squad} />
        </>,
      );

    case "chat":
      return <Chat compact={compact} messages={ui.chat} />;

    case "aging":
      return <Aging compact={compact} t={ui.aging} />;
  }
}

/** A floating message from Indigo, styled like the app's coach bubbles. */
function IndigoBubble({ className, text, badge }: { className: string; text: string; badge: string }) {
  return (
    <div
      className={`absolute z-20 w-[15.5rem] rounded-[1.4rem] rounded-bl-md bg-white px-4 py-3.5 text-ink shadow-[0_24px_48px_-14px_rgba(23,15,58,0.6)] ${className}`}
    >
      <div className="flex items-center gap-2">
        <Image src="/mascot/indigo.webp" alt="" width={44} height={44} priority className="h-[22px] w-[22px]" />
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Indigo</span>
        <span className="ml-auto rounded-full bg-lilac px-2 py-0.5 text-[10px] font-bold text-indigo">{badge}</span>
      </div>
      <p className="mt-1.5 text-[15px] leading-snug">{text}</p>
    </div>
  );
}

function Chip({ className, icon, tint, label, value }: { className: string; icon: string; tint: string; label: string; value: string }) {
  return (
    <div
      className={`absolute z-20 flex items-center gap-2.5 rounded-2xl bg-white px-3.5 py-2.5 text-ink shadow-[0_20px_40px_-14px_rgba(23,15,58,0.5)] ${className}`}
    >
      <span className={`grid h-9 w-9 place-items-center rounded-xl text-base ${tint}`}>{icon}</span>
      <span className="leading-tight">
        <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-muted">{label}</span>
        <span className="font-display text-[15px] font-bold">{value}</span>
      </span>
    </div>
  );
}

function Chat({ compact, messages: all }: { compact: boolean; messages: ChatMessage[] }) {
  const messages = compact ? all.filter((m) => !m.hideOnAndroid) : all;
  return (
    <>
      <div className="absolute inset-x-6 top-8 flex flex-col gap-3">
        {messages.map((m, i) =>
          m.from === "you" ? (
            <div
              key={i}
              className="ml-auto max-w-[78%] rounded-[1.4rem] bg-[linear-gradient(120deg,#6366f1,#8b5cf6)] px-4 py-3 text-white shadow-[0_12px_24px_-12px_rgba(99,102,241,0.8)]"
            >
              <div className="text-right text-[11px] font-medium text-white/70">{m.time}</div>
              <p className="mt-0.5 text-[16px] leading-snug">{m.text}</p>
            </div>
          ) : (
            <div key={i} className="max-w-[90%] rounded-[1.4rem] bg-white px-4 py-3.5 shadow-card">
              <div className="flex items-center gap-2">
                <Image src="/mascot/indigo.webp" alt="" width={44} height={44} priority className="h-[22px] w-[22px]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">Indigo</span>
                <span className="ml-auto text-[11px] font-medium text-muted">{m.time}</span>
              </div>
              <p className="mt-1.5 text-[16px] leading-snug text-ink">{m.text}</p>
              {m.action && (
                <span className="mt-2.5 inline-flex items-center gap-1.5 rounded-full bg-lilac px-3 py-1.5 text-[12px] font-semibold text-indigo">
                  ✓ {m.action}
                </span>
              )}
            </div>
          ),
        )}
      </div>
      <Image
        src="/mascot/indigo-complete.webp"
        alt=""
        width={320}
        height={320}
        priority
        className={`absolute right-6 ${compact ? "bottom-4 h-28 w-28" : "bottom-10 h-36 w-36"} drop-shadow-[0_20px_30px_rgba(99,102,241,0.35)]`}
      />
    </>
  );
}

function Aging({ compact, t }: { compact: boolean; t: UiCopy["aging"] }) {
  return (
    <div className="absolute inset-x-6 top-8">
      <div className="relative rounded-[1.75rem] bg-white p-5 text-ink shadow-[0_30px_60px_-24px_rgba(0,0,0,0.7)]">
        <Image src="/mascot/indigo-insights.webp" alt="" width={240} height={240} priority className="absolute -right-5 -top-14 h-24 w-24" />
        <div className="flex items-center gap-2.5">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-[#e3f5ef] text-teal">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 12h4l3-8 4 16 3-8h4" />
            </svg>
          </span>
          <span className="leading-tight">
            <span className="block font-display text-[17px] font-bold">{t.title}</span>
            <span className="text-[12px] text-muted">{t.subtitle}</span>
          </span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-[40px] font-extrabold text-teal">
            {t.value}
            <span className="text-[20px]">×</span>
          </span>
          <span className="text-[13px] font-semibold text-mint">{t.saved}</span>
        </div>
        <svg viewBox={`0 0 ${W} ${H + 8}`} className="mt-2 w-full overflow-visible">
          <defs>
            <linearGradient id="store-roa" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#0f9d8a" stopOpacity="0.2" />
              <stop offset="1" stopColor="#0f9d8a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" x2={W} y1={baselineY} y2={baselineY} stroke="#c9b9a6" strokeDasharray="8 8" strokeWidth="2" />
          <text x={W} y={baselineY - 10} textAnchor="end" fill="#8c7a65" fontSize="20" fontWeight="600">
            {t.average}
          </text>
          <path d={area} fill="url(#store-roa)" />
          <path d={line} fill="none" stroke="#0f9d8a" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <Stat label={t.rateOfAging} value={t.rateStat} unit="×" />
        <Stat label={t.lifestyleAge} value={t.ageStat} delta={t.ageDelta} />
      </div>
      {!compact && <p className="mt-5 text-center text-[11px] text-white/45">{t.disclaimer}</p>}
    </div>
  );
}

function Stat({ label, value, unit, delta }: { label: string; value: string; unit?: string; delta?: string }) {
  return (
    <div className="flex flex-col rounded-[1.4rem] border border-white/10 bg-white/8 p-4">
      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-white/55">{label}</div>
      <div className="mt-auto pt-1 font-display text-[30px] font-bold leading-none">
        {value}
        {unit && <span className="text-[16px] text-white/50">{unit}</span>}
        {delta && <span className="ml-1.5 text-[13px] font-semibold text-[#34d399]">{delta}</span>}
      </div>
    </div>
  );
}

function Leaderboard({ className, squad }: { className: string; squad: UiCopy["squad"] }) {
  return (
    <div className={`absolute z-20 w-56 rounded-[1.4rem] bg-white p-3 text-ink shadow-[0_24px_48px_-16px_rgba(60,20,0,0.55)] ${className}`}>
      <div className="flex items-center gap-2 px-1">
        <span className="grid h-8 w-8 place-items-center rounded-lg bg-[linear-gradient(135deg,#84cc16,#4d9a0f)] font-display text-sm font-bold text-white">
          {squad.initial}
        </span>
        <span className="leading-tight">
          <span className="block font-display text-[13px] font-bold">{squad.name}</span>
          <span className="text-[10px] font-medium text-muted">{squad.subtitle}</span>
        </span>
      </div>
      <ol className="mt-2 space-y-1">
        {squad.rows.map((m, i) => (
          <li key={m.name} className={`flex items-center gap-2 rounded-xl px-2.5 py-1.5 text-[12px] ${m.you ? "bg-[#eef8dc]" : "bg-cream"}`}>
            <span className="w-2 font-bold text-muted">{i + 1}</span>
            <span className="font-semibold">{m.name}</span>
            <span className="ml-auto font-display font-bold">{m.steps}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
