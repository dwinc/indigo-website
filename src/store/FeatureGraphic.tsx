import Image from "next/image";
import { featureGraphic } from "./devices";
import { FitHeadline } from "./FitHeadline";

/** Google Play feature graphic (1024 × 500). */
export function FeatureGraphic({ headline, sub, locale }: { headline: string; sub: string; locale: string }) {
  return (
    <div
      lang={locale}
      className="relative isolate flex items-center overflow-hidden bg-[linear-gradient(160deg,#5a3fdc_0%,#3f4bd2_35%,#2459b0_70%,#33287f_100%)] px-20 font-sans text-white"
      style={{ width: featureGraphic.width, height: featureGraphic.height }}
    >
      <div className="dot-grid absolute inset-0 -z-10" />
      <div className="absolute -right-10 top-10 -z-10 h-96 w-96 rounded-full bg-[#7c5cfc]/50 blur-[110px]" />
      <div className="absolute left-1/3 -top-20 -z-10 h-72 w-72 rounded-full bg-[#ffb800]/20 blur-[100px]" />

      <div className="relative z-10 max-w-[30rem]">
        <span className="inline-flex items-center gap-2">
          <Image src="/mascot/indigo.webp" alt="" width={80} height={80} priority className="h-10 w-10" />
          <span className="font-display text-[28px] font-extrabold leading-none tracking-tight">INDIGO</span>
        </span>
        <FitHeadline text={headline} dark base={68} className="mt-6 font-display font-extrabold leading-[0.98] tracking-[-0.035em]" />
        <p className="mt-4 text-[22px] font-medium text-white/75">{sub}</p>
      </div>

      <Image
        src="/mascot/indigo-friends.webp"
        alt=""
        width={640}
        height={427}
        priority
        className="absolute -right-4 bottom-6 h-auto w-[30rem] drop-shadow-[0_30px_40px_rgba(23,15,58,0.5)]"
      />
    </div>
  );
}
