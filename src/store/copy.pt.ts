import type { StoreCopy } from "./types";

// Store screenshot copy (Brazilian Portuguese, matching the app). See copy.en.ts for the format.
export const pt: StoreCopy = {
  frames: [
    {
      id: "1",
      slug: "live-healthy-longer",
      layout: "hero",
      eyebrow: "Seu amigo de longevidade com IA",
      headline: "Viva bem,\n*por mais tempo.*",
      sub: "Pequenos hábitos diários que somam anos de saúde.",
      screen: "today.webp",
      bubble: "Você comentou que às 15h bate a vontade de beliscar. Quer que eu te lembre de dar uma caminhada?",
    },
    {
      id: "2",
      slug: "a-friend-not-a-robot",
      layout: "chat",
      eyebrow: "Conheça o Indigo",
      headline: "Um amigo,\n*não um robô.*",
      sub: "Puxa conversa, lembra da sua rotina e está sempre do seu lado.",
    },
    {
      id: "3",
      slug: "habits-add-up-to-years",
      layout: "aging",
      eyebrow: "Ritmo de envelhecimento",
      headline: "Veja seus hábitos\n*virarem anos.*",
      sub: "Acompanhe seu ritmo de envelhecimento e sua idade estilo de vida.",
    },
    {
      id: "4",
      slug: "every-habit-one-tap",
      layout: "track",
      eyebrow: "Registrar",
      headline: "Cada hábito,\n*a um toque.*",
      sub: "Ou deixe o Apple Health preencher passos, sono e treinos.",
      android: { sub: "Ou deixe o Health Connect preencher passos, sono e treinos." },
      screen: "track.webp",
    },
    {
      id: "5",
      slug: "better-together",
      layout: "together",
      eyebrow: "Amigos e desafios",
      headline: "Melhor\n*juntos.*",
      sub: "Grupos, corridas semanais de passos e desafios de 30 dias.",
      screen: "challenge.webp",
    },
  ],
  feature: {
    headline: "Viva bem,\n*por mais tempo.*",
    sub: "Seu amigo de longevidade com IA",
  },
  ui: {
    aiCoach: "Coach IA",
    synced: "Sincronizado",
    chat: [
      { from: "indigo", time: "7:00", text: "Bom dia, Sam. Hoje tem força e cardio na lista. Como está a manhã?" },
      { from: "you", time: "7:38", text: "Academia hoje de manhã 💪" },
      { from: "indigo", time: "7:38", text: "Boa! Vai com calma, a semana foi puxada. Marco Força quando você voltar.", hideOnAndroid: true },
      { from: "indigo", time: "18:34", text: "Faltam 3 hábitos para um dia perfeito 🎉", action: "Treino de força feito" },
    ],
    aging: {
      title: "Ritmo de envelhecimento",
      subtitle: "Evolução ao longo do tempo",
      value: "0,95",
      saved: "Hábitos pouparam −0,020",
      average: "Média 1,00×",
      rateOfAging: "Ritmo de envelhecimento",
      lifestyleAge: "Idade estilo de vida",
      rateStat: "0,96",
      ageStat: "42,6",
      ageDelta: "−1,4 anos",
      disclaimer: "Estimativas baseadas no estilo de vida. Não é uma medição clínica.",
    },
    squad: {
      name: "Turma da Caminhada",
      initial: "T",
      subtitle: "Passos nesta semana",
      rows: [
        { name: "Você", steps: "26.931", you: true },
        { name: "Ana", steps: "18.738" },
        { name: "Lucas", steps: "12.402" },
      ],
    },
  },
};
