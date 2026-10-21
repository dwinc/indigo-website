import fs from "node:fs";
import path from "node:path";
import { de } from "./copy.de";
import { en } from "./copy.en";
import { es } from "./copy.es";
import { fr } from "./copy.fr";
import { pt } from "./copy.pt";
import type { Device } from "./devices";
import type { FrameCopy, StoreCopy } from "./types";

// Same languages as the app (SUPPORTED_LANGUAGES in the app repo's i18n.tsx).
export const locales = { en, es, pt, de, fr } satisfies Record<string, StoreCopy>;
export type Locale = keyof typeof locales;
export const localeCodes = Object.keys(locales) as Locale[];

export const localeLabels: Record<Locale, string> = {
  en: "English",
  es: "Español",
  pt: "Português (BR)",
  de: "Deutsch",
  fr: "Français",
};

export function isLocale(value: string): value is Locale {
  return value in locales;
}

export function getCopy(locale: Locale) {
  return locales[locale];
}

/**
 * A frame with Android overrides applied and its phone screenshot resolved:
 * /screens/<locale>/<file> when that localized capture exists, else the English /screens/<file>.
 */
export function getFrame(id: string, device: Device, locale: Locale): FrameCopy | undefined {
  const base = locales[locale].frames.find((f) => f.id === id);
  if (!base) return undefined;
  const frame = device === "android" ? { ...base, ...base.android } : base;
  if (!frame.screen) return frame;

  const localized = path.join(process.cwd(), "public", "screens", locale, frame.screen);
  const screen = fs.existsSync(localized) ? `/screens/${locale}/${frame.screen}` : `/screens/${frame.screen}`;
  return { ...frame, screen };
}
