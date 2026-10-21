import Link from "next/link";
import { Footer } from "./Footer";
import { Logo } from "./Logo";

export type LegalSection = { heading: string; body: string[]; list?: boolean };

/** Shared layout for /privacy and /terms. Text mirrors the in-app copy in SettingsPage.tsx. */
export function LegalPage({ title, updated, intro, sections }: { title: string; updated: string; intro: string; sections: LegalSection[] }) {
  return (
    <>
      <header className="px-5 py-5">
        <div className="mx-auto flex max-w-3xl items-center justify-between">
          <Link href="/" aria-label="Indigo home">
            <Logo />
          </Link>
          <Link href="/" className="text-sm font-semibold text-indigo hover:underline">
            ← Back to home
          </Link>
        </div>
      </header>
      <main className="px-5 pb-24 pt-10">
        <article className="mx-auto max-w-3xl">
          <h1 className="font-display text-4xl font-bold tracking-[-0.03em] sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-muted">Last updated: {updated}</p>
          <p className="mt-8 text-lg leading-relaxed text-ink-soft">{intro}</p>
          <div className="mt-10 space-y-6">
            {sections.map((s, i) => (
              <section key={s.heading} className="rounded-3xl bg-white p-6 shadow-card sm:p-8">
                <h2 className="font-display text-lg font-bold">
                  {i + 1}. {s.heading}
                </h2>
                {s.list ? (
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-[15px] leading-relaxed text-ink-soft">
                    {s.body.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                ) : (
                  s.body.map((b) => (
                    <p key={b} className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                      {b}
                    </p>
                  ))
                )}
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
