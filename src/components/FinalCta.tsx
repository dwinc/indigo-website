import Image from "next/image";
import { Reveal } from "./Reveal";
import { StoreButtons } from "./StoreButtons";

export function FinalCta() {
  return (
    <section id="download" className="px-5 py-20 sm:py-28">
      <Reveal className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-[linear-gradient(140deg,#2f5fe0_0%,#1f7fc4_40%,#128f9e_72%,#0f9d8a_100%)] px-6 pb-0 pt-16 text-center text-white sm:px-12 sm:pt-20">
        <div className="dot-grid absolute inset-0" aria-hidden />
        <div className="absolute -bottom-24 left-1/2 h-[22rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#d9fff6]/25 blur-[90px]" aria-hidden />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-6xl">
            Your future self is cheering you on.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg text-white/75">
            A health app that doesn&rsquo;t feel like homework. Start with one habit today.
          </p>
          <StoreButtons variant="light" className="mt-9 justify-center" />
          <p className="mt-4 text-sm font-medium text-white/60">Free to download</p>
          <Image
            src="/mascot/indigo-friends.webp"
            alt="Two Indigo characters waving"
            width={420}
            height={280}
            className="mx-auto mt-10 h-auto w-64 translate-y-3 sm:w-80"
          />
        </div>
      </Reveal>
    </section>
  );
}
