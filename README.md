# Indigo website

Marketing site for the Indigo app — joinindigo.app. Next.js 16 (App Router) + Tailwind v4, fully static.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

- **Links & contact** (App Store / Play URLs, email): `src/lib/site.ts`
- **Brand tokens** (colours, fonts): `src/app/globals.css` — mirrored from the app's theme
- **Sections**: `src/components/*` composed in `src/app/page.tsx`
- **Legal**: `/privacy` and `/terms` — text mirrors the in-app copy in the app repo's `SettingsPage.tsx`; keep them in sync
- **Assets**: `public/screens` (cropped device screenshots), `public/mascot` (character art from the app repo's `assets/indigo-character`)

Deploy: import the repo in Vercel (framework preset Next.js, no config needed) and point joinindigo.app at it.

## App screenshots

The phone screenshots on the site live in `public/screens/`. To swap them, put raw phone screenshots in
`screenshots-raw/` using the same names (`today`, `track`, `challenge`, …) and run `npm run screens`.
It crops the status/nav bars (defaults suit 1080×2340 Android captures; use
`npm run screens -- --top=<px> --bottom=<px>` for other devices) and writes `public/screens/*.webp`.

App Store / Google Play screenshots are generated in the app repo: `v2-ai-prototype/store-screenshots/`.
