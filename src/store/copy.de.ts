import type { StoreCopy } from "./types";

// Store screenshot copy (German, informal "du"). See copy.en.ts for the format.
export const de: StoreCopy = {
  frames: [
    {
      id: "1",
      slug: "live-healthy-longer",
      layout: "hero",
      eyebrow: "Dein KI-Begleiter für Longevity",
      headline: "Gesund leben,\n*länger leben.*",
      sub: "Kleine tägliche Gewohnheiten für mehr gesunde Jahre.",
      screen: "today.webp",
      bubble: "Du meintest, um 15 Uhr kommt der Snack-Hunger. Soll ich dich lieber an einen Spaziergang erinnern?",
    },
    {
      id: "2",
      slug: "a-friend-not-a-robot",
      layout: "chat",
      eyebrow: "Lerne Indigo kennen",
      headline: "Ein Freund,\n*kein Roboter.*",
      sub: "Fragt nach, kennt deine Routine und steht hinter dir.",
    },
    {
      id: "3",
      slug: "habits-add-up-to-years",
      layout: "aging",
      eyebrow: "Alterungsrate",
      headline: "Aus Gewohnheiten\nwerden *Jahre.*",
      sub: "Verfolge deine Alterungsrate und dein Lebensstil-Alter.",
    },
    {
      id: "4",
      slug: "every-habit-one-tap",
      layout: "track",
      eyebrow: "Erfassen",
      headline: "Jede Gewohnheit,\n*mit einem Tipp.*",
      sub: "Oder lass Apple Health Schritte, Schlaf und Workouts eintragen.",
      android: { sub: "Oder lass Health Connect Schritte, Schlaf und Workouts eintragen." },
      screen: "track.webp",
    },
    {
      id: "5",
      slug: "better-together",
      layout: "together",
      eyebrow: "Freunde & Challenges",
      headline: "Gemeinsam\n*stärker.*",
      sub: "Squads, wöchentliche Schritt-Duelle und 30-Tage-Challenges.",
      screen: "challenge.webp",
    },
  ],
  feature: {
    headline: "Gesund leben,\n*länger leben.*",
    sub: "Dein KI-Begleiter für Longevity",
  },
  ui: {
    aiCoach: "KI-Coach",
    synced: "Synchronisiert",
    chat: [
      { from: "indigo", time: "7:00", text: "Guten Morgen, Sam. Heute stehen Kraft und Cardio an. Wie läuft der Morgen?" },
      { from: "you", time: "7:38", text: "Heute früh ins Gym 💪" },
      { from: "indigo", time: "7:38", text: "Super. Mach langsam, die Woche war voll. Ich hake Kraft ab, wenn du zurück bist.", hideOnAndroid: true },
      { from: "indigo", time: "18:34", text: "Nur noch 3 Gewohnheiten bis zum perfekten Tag 🎉", action: "Krafttraining erledigt" },
    ],
    aging: {
      title: "Alterungsrate",
      subtitle: "Verlauf über die Zeit",
      value: "0,95",
      saved: "Gewohnheiten sparten −0,020",
      average: "Durchschnitt 1,00×",
      rateOfAging: "Alterungsrate",
      lifestyleAge: "Lebensstil-Alter",
      rateStat: "0,96",
      ageStat: "42,6",
      ageDelta: "−1,4 J.",
      disclaimer: "Schätzungen auf Basis deines Lebensstils. Keine klinische Messung.",
    },
    squad: {
      name: "Wochenend-Krieger",
      initial: "W",
      subtitle: "Schritte diese Woche",
      rows: [
        { name: "Du", steps: "26.931", you: true },
        { name: "Lena", steps: "18.738" },
        { name: "Jonas", steps: "12.402" },
      ],
    },
  },
};
