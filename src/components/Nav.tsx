"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { href: "#coach", label: "Your friend" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Features" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Over the purple hero the nav is light; once scrolled onto cream it turns dark.
  const solid = scrolled || open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 sm:px-5 ${
          solid ? "bg-cream/85 shadow-card backdrop-blur-xl" : "bg-transparent"
        }`}
        aria-label="Main"
      >
        <a href="#top" aria-label="Indigo home" onClick={() => setOpen(false)}>
          <Logo tone={solid ? "dark" : "light"} />
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  solid ? "text-ink-soft hover:bg-sand hover:text-ink" : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#download"
            className={`rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 hover:-translate-y-px ${
              solid ? "bg-indigo text-white shadow-[0_8px_20px_-8px_rgba(99,102,241,0.8)]" : "bg-white text-plum"
            }`}
          >
            Get the app
          </a>
          <button
            type="button"
            className={`grid h-10 w-10 place-items-center rounded-full md:hidden ${solid ? "text-ink" : "text-white"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {open ? <path d="M5 5l10 10M15 5L5 15" /> : <path d="M3 6h14M3 14h14" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="mx-auto mt-2 max-w-6xl rounded-2xl bg-cream/95 p-2 shadow-card backdrop-blur-xl md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 font-semibold text-ink hover:bg-sand">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
