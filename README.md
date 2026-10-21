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

## App Store / Google Play screenshots

Store screenshots are built from the same components as the site and live at `/store` (noindex).

1. Edit copy in `src/store/copy.en.ts` (`*word*` = highlight colour, `android: {…}` overrides for Google Play).
2. Preview at http://localhost:3000/store while `npm run dev` runs.
3. `npm run store:export` → `store-screenshots/en/` (gitignored):
   - `ios/` — 1290 × 2796 (iPhone 6.9")
   - `android/` — 1080 × 1920
   - `play/feature-graphic.png` — 1024 × 500

Export uses your installed Edge via `playwright-core` (`BROWSER=chrome npm run store:export` for Chrome).
Sizes live in `src/store/devices.ts`; frame layouts in `src/store/StoreFrame.tsx`.

### Swapping app screenshots

Put raw phone screenshots in `screenshots-raw/` using the same names (`today`, `track`, `challenge`, …),
then run `npm run screens`. It crops the status/nav bars (defaults suit 1080×2340 Android captures;
use `npm run screens -- --top=<px> --bottom=<px>` for other devices) and writes `public/screens/*.webp`.
Both the website and the store frames pick them up.
