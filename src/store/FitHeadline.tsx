"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { Headline } from "./Headline";

/**
 * Store headline that never wraps a line: it measures the widest line and scales the font down
 * until it fits (longer languages). Sets data-fitted once done so the export can wait for it.
 */
export function FitHeadline({ text, dark, base, className }: { text: string; dark: boolean; base: number; className: string }) {
  const ref = useRef<HTMLHeadingElement>(null);
  const [size, setSize] = useState<number | null>(null);

  useLayoutEffect(() => {
    let cancelled = false;
    // Measure with the real web font, not the fallback.
    document.fonts.ready.then(() => {
      const el = ref.current;
      if (!el || cancelled) return;
      el.style.fontSize = `${base}px`;
      const widest = Math.max(...Array.from(el.querySelectorAll(":scope > span"), (line) => (line as HTMLElement).offsetWidth));
      setSize(Math.floor(base * Math.min(1, el.clientWidth / widest)));
    });
    return () => {
      cancelled = true;
    };
  }, [base, text]);

  return (
    <h1 ref={ref} data-fit="" data-fitted={size !== null} className={className} style={{ fontSize: size ?? base }}>
      <Headline text={text} dark={dark} />
    </h1>
  );
}
