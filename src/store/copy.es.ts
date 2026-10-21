import type { StoreCopy } from "./types";

// Store screenshot copy (Spanish). See copy.en.ts for the format.
export const es: StoreCopy = {
  frames: [
    {
      id: "1",
      slug: "live-healthy-longer",
      layout: "hero",
      eyebrow: "Tu amigo de longevidad con IA",
      headline: "Vive sano,\n*más tiempo.*",
      sub: "Pequeños hábitos diarios que suman años de salud.",
      screen: "today.webp",
      bubble: "Me dijiste que a las 3 te entra el picoteo. ¿Te aviso para dar un paseo en su lugar?",
    },
    {
      id: "2",
      slug: "a-friend-not-a-robot",
      layout: "chat",
      eyebrow: "Conoce a Indigo",
      headline: "Un amigo,\n*no un robot.*",
      sub: "Te pregunta, recuerda tu rutina y siempre te apoya.",
    },
    {
      id: "3",
      slug: "habits-add-up-to-years",
      layout: "aging",
      eyebrow: "Ritmo de envejecimiento",
      headline: "Tus hábitos,\n*años de vida.*",
      sub: "Tu ritmo de envejecimiento y tu edad de estilo de vida, día a día.",
    },
    {
      id: "4",
      slug: "every-habit-one-tap",
      layout: "track",
      eyebrow: "Seguimiento",
      headline: "Cada hábito,\n*a un toque.*",
      sub: "O deja que Apple Health registre pasos, sueño y entrenamientos.",
      android: { sub: "O deja que Health Connect registre pasos, sueño y entrenamientos." },
      screen: "track.webp",
    },
    {
      id: "5",
      slug: "better-together",
      layout: "together",
      eyebrow: "Amigos y retos",
      headline: "Mejor\n*juntos.*",
      sub: "Grupos, carreras de pasos semanales y retos de 30 días.",
      screen: "challenge.webp",
    },
  ],
  feature: {
    headline: "Vive sano,\n*más tiempo.*",
    sub: "Tu amigo de longevidad con IA",
  },
  ui: {
    aiCoach: "Coach IA",
    synced: "Sincronizado",
    chat: [
      { from: "indigo", time: "7:00", text: "Buenos días, Sam. Hoy tocan fuerza y cardio. ¿Qué tal empieza la mañana?" },
      { from: "you", time: "7:38", text: "Gimnasio esta mañana 💪" },
      { from: "indigo", time: "7:38", text: "Genial. Tómatelo con calma, ha sido una semana intensa. Marco Fuerza cuando vuelvas.", hideOnAndroid: true },
      { from: "indigo", time: "18:34", text: "Te faltan 3 hábitos para un día perfecto 🎉", action: "Entrenamiento de fuerza hecho" },
    ],
    aging: {
      title: "Ritmo de envejecimiento",
      subtitle: "Evolución en el tiempo",
      value: "0,95",
      saved: "Ahorro por hábitos −0,020",
      average: "Media 1,00×",
      rateOfAging: "Ritmo de envejecimiento",
      lifestyleAge: "Edad estilo de vida",
      rateStat: "0,96",
      ageStat: "42,6",
      ageDelta: "−1,4 años",
      disclaimer: "Estimaciones basadas en el estilo de vida. No es una medición clínica.",
    },
    squad: {
      name: "Guerreros del finde",
      initial: "G",
      subtitle: "Pasos esta semana",
      rows: [
        { name: "Tú", steps: "26.931", you: true },
        { name: "Lucía", steps: "18.738" },
        { name: "Pablo", steps: "12.402" },
      ],
    },
  },
};
