import Image from "next/image";

export function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  return (
    <span className="inline-flex items-center gap-2">
      <Image src="/mascot/indigo.webp" alt="" width={36} height={36} className="h-9 w-9" />
      <span
        className={`font-display text-[1.6rem] leading-none font-extrabold tracking-tight transition-colors duration-300 ${tone === "light" ? "text-white" : "text-ink"}`}
      >
        INDIGO
      </span>
    </span>
  );
}
