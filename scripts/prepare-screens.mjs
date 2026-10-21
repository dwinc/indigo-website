// Turns raw phone screenshots into the cropped WebPs used by the site and store frames.
//
//   1. Drop screenshots in screenshots-raw/ named after the screen, e.g. today.png, track.jpg
//   2. npm run screens
//
// Localized captures: put them in screenshots-raw/<lang>/ and run npm run screens -- --locale=de
// (writes public/screens/de/; any screen without a localized version falls back to English).
//
// Crops the phone's status bar (top) and system nav bar (bottom). Defaults suit the
// 1080x2340 Android captures; override with --top=<px> --bottom=<px> for other devices.
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const locale = process.argv.find((a) => a.startsWith("--locale="))?.split("=")[1];
const SRC = locale ? `screenshots-raw/${locale}` : "screenshots-raw";
const OUT = locale ? `public/screens/${locale}` : "public/screens";

const arg = (name, fallback) => {
  const hit = process.argv.find((a) => a.startsWith(`--${name}=`));
  return hit ? Number(hit.split("=")[1]) : fallback;
};
const top = arg("top", 110);
const bottom = arg("bottom", 125);

fs.mkdirSync(OUT, { recursive: true });
const files = fs.readdirSync(SRC, { withFileTypes: true }).filter((d) => d.isFile()).map((d) => d.name).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
if (!files.length) {
  console.error(`No screenshots found in ${SRC}/`);
  process.exit(1);
}

for (const file of files) {
  const img = sharp(path.join(SRC, file));
  const { width, height } = await img.metadata();
  const name = path.parse(file).name;
  await img
    .extract({ left: 0, top, width, height: height - top - bottom })
    .resize({ width: 1080, withoutEnlargement: true })
    .webp({ quality: 90 })
    .toFile(path.join(OUT, `${name}.webp`));
  console.log(`✓ ${name}.webp`);
}
