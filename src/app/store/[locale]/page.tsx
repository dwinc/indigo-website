import Link from "next/link";
import { notFound } from "next/navigation";
import { devices, featureGraphic, type Device } from "@/store/devices";
import { FeatureGraphic } from "@/store/FeatureGraphic";
import { getCopy, getFrame, isLocale, localeCodes, localeLabels } from "@/store/frames";
import { ScaledFrame } from "@/store/StoreFrame";

const PREVIEW_WIDTH = 260;

export function generateStaticParams() {
  return localeCodes.map((locale) => ({ locale }));
}

export default async function StoreGallery({ params }: PageProps<"/store/[locale]">) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);

  return (
    <main className="min-h-dvh bg-[#e9e4dd] px-6 py-10 sm:px-10">
      <div className="mx-auto max-w-[90rem]">
        <nav className="flex flex-wrap gap-2 text-sm font-semibold">
          <Link href="/store" className="rounded-full px-3 py-1.5 text-muted hover:bg-white">
            ← All languages
          </Link>
          {localeCodes.map((l) => (
            <Link key={l} href={`/store/${l}`} className={`rounded-full px-3 py-1.5 ${l === locale ? "bg-ink text-white" : "bg-white hover:bg-sand"}`}>
              {localeLabels[l]}
            </Link>
          ))}
        </nav>
        <h1 className="mt-6 font-display text-3xl font-bold tracking-tight">Store screenshots · {localeLabels[locale]}</h1>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-ink-soft">
          Edit copy in <code className="rounded bg-white px-1.5 py-0.5">src/store/copy.{locale}.ts</code>. Click a frame to open it at full size.
        </p>

        {(Object.keys(devices) as Device[]).map((device) => {
          const d = devices[device];
          return (
            <section key={device} className="mt-12">
              <h2 className="font-display text-lg font-bold">
                {d.label}{" "}
                <span className="font-sans text-sm font-medium text-muted">
                  · {d.width * d.scale} × {d.height * d.scale}
                </span>
              </h2>
              <div className="mt-4 flex gap-5 overflow-x-auto pb-4">
                {copy.frames.map((f) => (
                  <Link
                    key={f.id}
                    href={`/store/${locale}/${device}/${f.id}`}
                    className="shrink-0 overflow-hidden rounded-2xl shadow-card transition hover:-translate-y-1"
                  >
                    <ScaledFrame frame={getFrame(f.id, device, locale)!} device={device} ui={copy.ui} locale={locale} width={PREVIEW_WIDTH} />
                  </Link>
                ))}
              </div>
            </section>
          );
        })}

        <section className="mt-12">
          <h2 className="font-display text-lg font-bold">
            Google Play · feature graphic{" "}
            <span className="font-sans text-sm font-medium text-muted">
              · {featureGraphic.width} × {featureGraphic.height}
            </span>
          </h2>
          <Link href={`/store/${locale}/play/feature`} className="mt-4 inline-block overflow-hidden rounded-2xl shadow-card">
            <div style={{ width: 640, height: (640 / featureGraphic.width) * featureGraphic.height }}>
              <div style={{ zoom: 640 / featureGraphic.width }}>
                <FeatureGraphic {...copy.feature} locale={locale} />
              </div>
            </div>
          </Link>
        </section>
      </div>
    </main>
  );
}
