import type { StoreCopy } from "./types";

// Store screenshot copy (French, informal "tu"). See copy.en.ts for the format.
// French typography: a non-breaking space before ? ! : and as the thousands separator.
export const fr: StoreCopy = {
  frames: [
    {
      id: "1",
      slug: "live-healthy-longer",
      layout: "hero",
      eyebrow: "Ton ami longévité IA",
      headline: "Vivre sain,\n*plus longtemps.*",
      sub: "De petites habitudes au quotidien pour des années en bonne santé.",
      screen: "today.webp",
      bubble: "Tu m'as dit que l'envie de grignoter arrive vers 15 h. Je te propose plutôt une petite marche ?",
    },
    {
      id: "2",
      slug: "a-friend-not-a-robot",
      layout: "chat",
      eyebrow: "Voici Indigo",
      headline: "Un ami,\n*pas un robot.*",
      sub: "Il prend des nouvelles, connaît ta routine et te soutient.",
    },
    {
      id: "3",
      slug: "habits-add-up-to-years",
      layout: "aging",
      eyebrow: "Rythme de vieillissement",
      headline: "Tes habitudes\n*valent des années.*",
      sub: "Suis ton rythme de vieillissement et ton âge style de vie au fil des jours.",
    },
    {
      id: "4",
      slug: "every-habit-one-tap",
      layout: "track",
      eyebrow: "Suivi",
      headline: "Chaque habitude,\n*en un geste.*",
      sub: "Ou laisse Apple Health remplir pas, sommeil et entraînements.",
      android: { sub: "Ou laisse Health Connect remplir pas, sommeil et entraînements." },
      screen: "track.webp",
    },
    {
      id: "5",
      slug: "better-together",
      layout: "together",
      eyebrow: "Amis & défis",
      headline: "Mieux\n*ensemble.*",
      sub: "Équipes, courses de pas chaque semaine et défis de 30 jours.",
      screen: "challenge.webp",
    },
  ],
  feature: {
    headline: "Vivre sain,\n*plus longtemps.*",
    sub: "Ton ami longévité IA",
  },
  ui: {
    aiCoach: "Coach IA",
    synced: "Synchronisé",
    chat: [
      { from: "indigo", time: "7:00", text: "Bonjour Sam. Muscu et cardio au programme aujourd'hui. Comment se passe ta matinée ?" },
      { from: "you", time: "7:38", text: "Salle de sport ce matin 💪" },
      { from: "indigo", time: "7:38", text: "Top. Vas-y doucement, la semaine a été chargée. Je coche Muscu à ton retour.", hideOnAndroid: true },
      { from: "indigo", time: "18:34", text: "Plus que 3 habitudes pour une journée parfaite 🎉", action: "Séance de muscu faite" },
    ],
    aging: {
      title: "Rythme de vieillissement",
      subtitle: "Évolution dans le temps",
      value: "0,95",
      saved: "Gain grâce aux habitudes −0,020",
      average: "Moyenne 1,00×",
      rateOfAging: "Rythme de vieillissement",
      lifestyleAge: "Âge style de vie",
      rateStat: "0,96",
      ageStat: "42,6",
      ageDelta: "−1,4 an",
      disclaimer: "Estimations basées sur le mode de vie. Pas une mesure clinique.",
    },
    squad: {
      name: "Les Marcheurs",
      initial: "M",
      subtitle: "Pas cette semaine",
      rows: [
        { name: "Toi", steps: "26 931", you: true },
        { name: "Camille", steps: "18 738" },
        { name: "Hugo", steps: "12 402" },
      ],
    },
  },
};
