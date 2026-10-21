export type FrameLayout = "hero" | "chat" | "aging" | "track" | "together";

type FrameText = {
  eyebrow: string;
  headline: string;
  sub: string;
  /** Screenshot file in /public/screens shown in the phone, for layouts that have one. */
  screen?: string;
  /** Floating Indigo chat message, for layouts that show one. */
  bubble?: string;
};

export type FrameCopy = FrameText & {
  id: string;
  slug: string;
  layout: FrameLayout;
  android?: Partial<FrameText>;
};

export type ChatMessage = {
  from: "indigo" | "you";
  time: string;
  text: string;
  action?: string;
  /** Dropped on the shorter Google Play frame. */
  hideOnAndroid?: boolean;
};

/** Text that appears inside the frame visuals (chat, chart card, leaderboard…). */
export type UiCopy = {
  aiCoach: string;
  synced: string;
  chat: ChatMessage[];
  aging: {
    title: string;
    subtitle: string;
    value: string;
    saved: string;
    average: string;
    rateOfAging: string;
    lifestyleAge: string;
    rateStat: string;
    ageStat: string;
    ageDelta: string;
    disclaimer: string;
  };
  squad: {
    name: string;
    initial: string;
    subtitle: string;
    rows: { name: string; steps: string; you?: boolean }[];
  };
};

export type StoreCopy = {
  frames: FrameCopy[];
  feature: { headline: string; sub: string };
  ui: UiCopy;
};
