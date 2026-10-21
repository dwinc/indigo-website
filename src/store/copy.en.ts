import type { StoreCopy } from "./types";

// Store screenshot copy (English). Frame order = upload order in the stores.
// Wrap words in *asterisks* to give them the highlight colour; \n breaks the headline.
// `android` overrides any field for the Google Play version.
export const en: StoreCopy = {
  frames: [
    {
      id: "1",
      slug: "live-healthy-longer",
      layout: "hero",
      eyebrow: "Your AI longevity friend",
      headline: "Live healthy,\n*longer.*",
      sub: "Small daily habits that add healthy years.",
      screen: "today.webp",
      bubble: "You mentioned 3pm is when the snacking hits. Want me to nudge you with a walk instead?",
    },
    {
      id: "2",
      slug: "a-friend-not-a-robot",
      layout: "chat",
      eyebrow: "Meet Indigo",
      headline: "A friend,\n*not a robot.*",
      sub: "Checks in, remembers your routine and has your back.",
    },
    {
      id: "3",
      slug: "habits-add-up-to-years",
      layout: "aging",
      eyebrow: "Rate of aging",
      headline: "See your habits\nadd up to *years.*",
      sub: "Watch your rate of aging and lifestyle age move as you go.",
    },
    {
      id: "4",
      slug: "every-habit-one-tap",
      layout: "track",
      eyebrow: "Track",
      headline: "Every habit,\n*one tap away.*",
      sub: "Or let Apple Health fill in steps, sleep and workouts.",
      android: { sub: "Or let Health Connect fill in steps, sleep and workouts." },
      screen: "track.webp",
    },
    {
      id: "5",
      slug: "better-together",
      layout: "together",
      eyebrow: "Friends & challenges",
      headline: "Better\n*together.*",
      sub: "Squads, weekly step races and 30-day challenges.",
      screen: "challenge.webp",
    },
  ],
  feature: {
    headline: "Live healthy,\n*longer.*",
    sub: "Your AI longevity friend",
  },
  ui: {
    aiCoach: "AI coach",
    synced: "Synced",
    chat: [
      { from: "indigo", time: "7:00 AM", text: "Morning Sam. Strength and cardio are both on the board today. How's the morning shaping up?" },
      { from: "you", time: "7:38 AM", text: "Gym this morning 💪" },
      { from: "indigo", time: "7:38 AM", text: "Nice. Ease into it, you've had a busy week. I'll tick off Strength when you're back.", hideOnAndroid: true },
      { from: "indigo", time: "6:34 PM", text: "You're 3 habits away from a perfect day 🎉", action: "Strength training done" },
    ],
    aging: {
      title: "Rate of Aging",
      subtitle: "Pace over time",
      value: "0.95",
      saved: "Habits saved −0.020",
      average: "Average 1.00×",
      rateOfAging: "Rate of aging",
      lifestyleAge: "Lifestyle age",
      rateStat: "0.96",
      ageStat: "42.6",
      ageDelta: "−1.4 yrs",
      disclaimer: "Estimates based on lifestyle factors. Not a clinical measurement.",
    },
    squad: {
      name: "Weekend Warriors",
      initial: "W",
      subtitle: "Steps this week",
      rows: [
        { name: "You", steps: "26,931", you: true },
        { name: "Maya", steps: "18,738" },
        { name: "Tom", steps: "12,402" },
      ],
    },
  },
};
