"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useInView } from "./Reveal";

type Message =
  | { from: "indigo"; time: string; text: string; action?: string }
  | { from: "you"; time: string; text: string };

const conversation: Message[] = [
  { from: "indigo", time: "7:00 AM", text: "Morning Sam. Oatmeal made yet? Strength and cardio are both on the board today. How's the morning shaping up?" },
  { from: "you", time: "7:38 AM", text: "Gym this morning, it's on the schedule 💪" },
  { from: "indigo", time: "7:38 AM", text: "Nice. Ease into it, you've had a busy week. I'll tick off Strength when you're back." },
  { from: "indigo", time: "6:00 PM", text: "Noticed HIIT hasn't been touched in 45 days. Want me to drop it from your list, or keep it for when you're ready?" },
  { from: "you", time: "6:34 PM", text: "Drop it for now" },
  { from: "indigo", time: "6:34 PM", text: "Done, one less thing. You're 3 habits away from a perfect day 🎉", action: "Removed HIIT from your habits" },
];

/** Plays back a sample conversation once it scrolls into view. */
export function CoachChat() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, 0.3);
  const [shown, setShown] = useState(0);
  const done = shown >= conversation.length;
  // Indigo "types" before each of its messages; the user's replies just appear.
  const typing = inView && !done && conversation[shown].from === "indigo";

  useEffect(() => {
    if (!inView || done) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wait = reduced ? 0 : shown === 0 ? 300 : conversation[shown].from === "indigo" ? 1500 : 1100;
    const t = setTimeout(() => setShown((s) => (reduced ? conversation.length : s + 1)), wait);
    return () => clearTimeout(t);
  }, [inView, shown, done]);

  return (
    <div
      ref={ref}
      className="relative rounded-[2rem] bg-[#fbf3ea] p-4 shadow-[inset_0_0_0_1px_rgba(26,18,7,0.05)] sm:p-6"
      aria-label="Example conversation with Indigo"
      role="log"
    >
      <div className="flex min-h-[34rem] flex-col justify-end gap-3 sm:min-h-[36rem]">
        {conversation.slice(0, shown).map((m, i) => (
          <Bubble key={i} message={m} />
        ))}
        {typing && (
          <div className="flex w-fit items-center gap-2 rounded-3xl bg-white px-4 py-3 shadow-card animate-[bubble-in_0.4s_ease-out]">
            <Image src="/mascot/indigo.webp" alt="" width={24} height={24} className="h-6 w-6" />
            <span className="flex gap-1" aria-label="Indigo is typing">
              {[0, 1, 2].map((d) => (
                <span
                  key={d}
                  className="h-2 w-2 animate-bounce rounded-full bg-violet/60"
                  style={{ animationDelay: `${d * 150}ms` }}
                />
              ))}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

function Bubble({ message: m }: { message: Message }) {
  if (m.from === "you") {
    return (
      <div className="ml-auto max-w-[80%] rounded-3xl bg-[linear-gradient(120deg,#6366f1,#8b5cf6)] px-5 py-3.5 text-white shadow-[0_10px_24px_-12px_rgba(99,102,241,0.8)] animate-[bubble-in_0.45s_ease-out]">
        <div className="text-right text-xs font-medium text-white/70">{m.time}</div>
        <p className="mt-1 text-[15px] leading-snug">{m.text}</p>
      </div>
    );
  }
  return (
    <div className="max-w-[88%] rounded-3xl bg-white px-5 py-4 shadow-card animate-[bubble-in_0.45s_ease-out]">
      <div className="flex items-center gap-2">
        <Image src="/mascot/indigo.webp" alt="" width={24} height={24} className="h-6 w-6" />
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-muted">Indigo</span>
        <span className="ml-auto text-xs font-medium text-muted">{m.time}</span>
      </div>
      <p className="mt-2 text-[15px] leading-snug text-ink">{m.text}</p>
      {m.action && (
        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-lilac px-3 py-1.5 text-xs font-semibold text-indigo">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M2.5 6.2l2.2 2.2L9.5 3.6" />
          </svg>
          {m.action}
        </span>
      )}
    </div>
  );
}
