import Link from "next/link";
import { localeCodes, localeLabels } from "@/store/frames";

export default function StoreIndex() {
  return (
    <main className="min-h-dvh bg-[#e9e4dd] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-3xl">
        <h1 className="font-display text-3xl font-bold tracking-tight">Store screenshots</h1>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">
          Copy lives in <code className="rounded bg-white px-1.5 py-0.5">src/store/copy.&lt;lang&gt;.ts</code>. Export every language with{" "}
          <code className="rounded bg-white px-1.5 py-0.5">npm run store:export</code> while the dev server runs.
        </p>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {localeCodes.map((locale) => (
            <li key={locale}>
              <Link href={`/store/${locale}`} className="flex items-center justify-between rounded-2xl bg-white px-5 py-4 font-semibold shadow-card hover:-translate-y-0.5">
                {localeLabels[locale]}
                <span className="text-sm font-medium uppercase text-muted">{locale}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
