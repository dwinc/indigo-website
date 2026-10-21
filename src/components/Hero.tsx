import Image from "next/image";
import { PhoneFrame } from "./PhoneFrame";
import { StoreButtons } from "./StoreButtons";

export function Hero() {
  return (
    <section id="top" className="px-2 sm:px-3">
      <div className="relative isolate overflow-hidden rounded-b-[2rem] bg-[linear-gradient(160deg,#0f9d8a_0%,#128f9e_14%,#1f7fc4_30%,#2f5fe0_46%,#4f3fd8_60%,#5a32cc_74%,#4a239f_90%,#351a78_100%)] sm:rounded-b-[2.75rem]">
        <div className="dot-grid absolute inset-0 -z-10" aria-hidden />
        {/* Soft glows */}
        <div className="absolute -left-32 -top-20 -z-10 h-[28rem] w-[28rem] rounded-full bg-[#5eead4]/20 blur-[120px]" aria-hidden />
        <div className="absolute -right-24 bottom-10 -z-10 h-[30rem] w-[30rem] rounded-full bg-[#7c5cfc]/25 blur-[130px]" aria-hidden />
        <div className="absolute right-[8%] top-16 -z-10 h-[18rem] w-[18rem] rounded-full bg-[#ffb800]/20 blur-[110px]" aria-hidden />

        <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 sm:gap-12 pb-0 pt-24 sm:px-10 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:pt-36">
          {/* Copy */}
          <div className="relative z-10 pb-4 text-center lg:pb-28 lg:text-left">
            <p className="hidden items-center sm:inline-flex gap-2 rounded-full border border-white/15 bg-white/10 py-1.5 pl-1.5 pr-4 text-sm font-semibold text-white/90 backdrop-blur">
              <Image src="/mascot/indigo.webp" alt="" width={24} height={24} className="h-6 w-6" />
              Your AI longevity friend
            </p>

            <h1 className="font-display text-[2.6rem] sm:mt-6 font-extrabold leading-[0.98] tracking-[-0.035em] text-white sm:text-7xl lg:text-[5.4rem]">
              Live healthy,
              <br />
              <span className="text-gradient">longer.</span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed sm:mt-6 sm:text-lg text-white/75 lg:mx-0">
              Indigo is an AI longevity habit tracker. Build the small daily habits that add healthy years, with a friend
              who knows your routine and checks in every day. Watch your lifestyle age move as you go.
            </p>

            <StoreButtons variant="light" className="mt-6 justify-center sm:mt-9 lg:justify-start" />
            <p className="mt-3 text-xs sm:mt-4 sm:text-sm font-medium text-white/55">Free to download · iPhone &amp; Android</p>
          </div>

          {/* Visual */}
          <div className="relative mx-auto w-full max-w-[22rem] lg:mr-4 lg:max-w-[23rem]">
            {/* App gauge arc, echoing the Today screen */}
            <svg className="absolute -top-10 left-1/2 -z-0 w-[150%] -translate-x-1/2 opacity-60" viewBox="0 0 400 220" aria-hidden>
              <defs>
                <linearGradient id="arc" x1="0" x2="1">
                  <stop offset="0" stopColor="#c4b5fd" stopOpacity="0.1" />
                  <stop offset="0.6" stopColor="#a78bfa" stopOpacity="0.7" />
                  <stop offset="1" stopColor="#ffc24a" />
                </linearGradient>
              </defs>
              <path d="M20 210 A180 180 0 0 1 380 210" fill="none" stroke="white" strokeOpacity="0.08" strokeWidth="14" strokeLinecap="round" />
              <path d="M20 210 A180 180 0 0 1 250 40" fill="none" stroke="url(#arc)" strokeWidth="14" strokeLinecap="round" />
            </svg>

            <Image
              src="/mascot/indigo.webp"
              alt=""
              width={160}
              height={160}
              priority
              className="absolute -top-14 left-1/2 z-20 h-28 w-28 -translate-x-1/2 animate-float drop-shadow-[0_20px_30px_rgba(23,15,58,0.5)] sm:left-auto sm:-right-14 sm:h-36 sm:w-36 sm:translate-x-0"
            />

            <PhoneFrame
              src="/screens/today.webp"
              alt="Indigo's Today screen showing a habit score of 65 points, a rate of aging of 0.96 and a 62 day streak"
              statusBg="#7333dd"
              statusDark={false}
              priority
              className="relative z-10 translate-y-6 lg:translate-y-10"
            />

            {/* Floating cards */}
            <div className="absolute -left-10 top-[60%] z-20 hidden w-60 animate-float-slow rounded-2xl bg-white p-4 shadow-float sm:block lg:-left-28">
              <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                <Image src="/mascot/indigo.webp" alt="" width={22} height={22} className="h-5 w-5" />
                Indigo · 7:00 AM
              </div>
              <p className="mt-2 text-[15px] leading-snug text-ink">
                Morning! Strength and cardio are on the board today. How&rsquo;s the morning shaping up?
              </p>
            </div>

            <div className="absolute -right-6 top-[84%] z-20 hidden items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-float sm:flex lg:-right-16">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#fff0e0] text-lg" aria-hidden>
                🔥
              </span>
              <span className="leading-tight">
                <span className="block text-[11px] font-bold uppercase tracking-[0.12em] text-muted">Streak</span>
                <span className="font-display text-lg font-bold text-ink">62 days</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
