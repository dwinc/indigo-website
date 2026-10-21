import Link from "next/link";
import { site } from "@/lib/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-sm">
          <Link href="/" aria-label="Indigo home">
            <Logo />
          </Link>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            {site.tagline} Indigo is a wellness app, not a medical device, and doesn&rsquo;t provide medical advice.
          </p>
        </div>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold text-ink-soft">
          <Link href="/privacy" className="hover:text-indigo">Privacy</Link>
          <Link href="/terms" className="hover:text-indigo">Terms</Link>
          <a href={`mailto:${site.email}`} className="hover:text-indigo">{site.email}</a>
        </nav>
      </div>
      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted">© 2026 Indigo. All rights reserved.</p>
    </footer>
  );
}
