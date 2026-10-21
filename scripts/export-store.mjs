// Exports every store frame as a PNG at the exact App Store / Google Play pixel size.
//
//   npm run dev            (in another terminal)
//   npm run store:export        → store-screenshots/<lang>/{ios,android,play}/*.png
//   npm run store:export -- de  → one language only
//
// What gets captured comes from /store/manifest.json (src/store/devices.ts + copy).
// Uses your installed Microsoft Edge, or Chrome with BROWSER=chrome, via playwright-core.
import fs from "node:fs";
import path from "node:path";
import { chromium } from "playwright-core";

const BASE = process.env.BASE_URL ?? "http://localhost:3000";
const OUT = "store-screenshots";
const only = process.argv[2];

let shots;
try {
  shots = await (await fetch(`${BASE}/store/manifest.json`)).json();
} catch {
  console.error(`Can't reach ${BASE}. Start the site first with: npm run dev`);
  process.exit(1);
}

// Windows (antivirus, Explorer thumbnails, open previews) can briefly lock a freshly written PNG.
async function writeWithRetry(file, data, attempts = 8) {
  for (let i = 1; ; i++) {
    try {
      return fs.writeFileSync(file, data);
    } catch (err) {
      if (i >= attempts) throw err;
      await new Promise((r) => setTimeout(r, 250 * i));
    }
  }
}

if (only) shots = shots.filter((s) => s.file.startsWith(`${only}/`));

const browser = await chromium.launch({ channel: process.env.BROWSER ?? "msedge" });

for (const { path: route, file, width, height, scale } of shots) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: scale });
  await page.goto(`${BASE}${route}`, { waitUntil: "networkidle" });
  // Hide the Next.js dev-mode indicator.
  await page.addStyleTag({ content: "nextjs-portal { display: none !important; }" });
  // Headlines size themselves to fit once fonts load (FitHeadline); wait for that.
  await page.waitForFunction(() => !document.querySelector('[data-fit][data-fitted="false"]'));
  await page.evaluate(async () => {
    await document.fonts.ready;
    await Promise.all([...document.images].map((img) => (img.complete ? null : new Promise((r) => (img.onload = img.onerror = r)))));
  });
  const out = path.join(OUT, file);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const png = await page.screenshot({ clip: { x: 0, y: 0, width, height } });
  await writeWithRetry(out, png);
  await page.close();
  console.log(`✓ ${out}  (${width * scale}×${height * scale})`);
}

await browser.close();
