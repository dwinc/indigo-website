import Image from "next/image";

type PhoneFrameProps = {
  src: string;
  alt: string;
  /** Colour behind the faux status bar, matched to the top of the screenshot. */
  statusBg?: string;
  statusDark?: boolean;
  priority?: boolean;
  className?: string;
};

// Screenshots are 720x1403 after cropping the Android system bars.
export function PhoneFrame({ src, alt, statusBg = "#fff8f2", statusDark = true, priority, className = "" }: PhoneFrameProps) {
  const fg = statusDark ? "#1a1207" : "#ffffff";
  return (
    <div
      className={`relative rounded-[2.75rem] bg-[#141029] p-[9px] shadow-[0_40px_80px_-30px_rgba(23,15,58,0.55),inset_0_0_0_1.5px_rgba(255,255,255,0.08)] ${className}`}
    >
      <div className="relative overflow-hidden rounded-[2.2rem]" style={{ background: statusBg }}>
        <div className="relative flex h-8 items-center justify-between px-6 text-[11px] font-semibold" style={{ color: fg }}>
          <span>9:41</span>
          <span className="absolute left-1/2 top-2 h-[18px] w-[76px] -translate-x-1/2 rounded-full bg-[#141029]" />
          <span className="flex items-center gap-1" aria-hidden>
            <svg width="16" height="10" viewBox="0 0 16 10" fill={fg}><rect x="0" y="6" width="3" height="4" rx="1" /><rect x="4.3" y="4" width="3" height="6" rx="1" /><rect x="8.6" y="2" width="3" height="8" rx="1" /><rect x="12.9" y="0" width="3" height="10" rx="1" /></svg>
            <svg width="22" height="11" viewBox="0 0 22 11" fill="none"><rect x="0.5" y="0.5" width="18" height="10" rx="3" stroke={fg} strokeOpacity="0.5" /><rect x="2" y="2" width="13" height="7" rx="1.6" fill={fg} /><rect x="19.5" y="3.5" width="1.5" height="4" rx="0.75" fill={fg} fillOpacity="0.5" /></svg>
          </span>
        </div>
        <Image src={src} alt={alt} width={720} height={1403} priority={priority} sizes="(max-width: 768px) 70vw, 320px" className="block h-auto w-full" />
      </div>
    </div>
  );
}
