import { notFound } from "next/navigation";
import { devices, type Device } from "@/store/devices";
import { FeatureGraphic } from "@/store/FeatureGraphic";
import { getCopy, getFrame, isLocale, localeCodes } from "@/store/frames";
import { ScaledFrame } from "@/store/StoreFrame";

// One frame rendered at the device's exact CSS size; scripts/export-store.mjs screenshots these.
export function generateStaticParams() {
  return localeCodes.flatMap((locale) => [
    ...(Object.keys(devices) as Device[]).flatMap((device) => getCopy(locale).frames.map((f) => ({ locale, device, id: f.id }))),
    { locale, device: "play", id: "feature" },
  ]);
}

export default async function StoreFramePage({ params }: PageProps<"/store/[locale]/[device]/[id]">) {
  const { locale, device, id } = await params;
  if (!isLocale(locale)) notFound();
  const copy = getCopy(locale);

  if (device === "play" && id === "feature") {
    return <FeatureGraphic {...copy.feature} locale={locale} />;
  }

  if (!(device in devices)) notFound();
  const frame = getFrame(id, device as Device, locale);
  if (!frame) notFound();

  return <ScaledFrame frame={frame} device={device as Device} ui={copy.ui} locale={locale} width={devices[device as Device].width} />;
}
