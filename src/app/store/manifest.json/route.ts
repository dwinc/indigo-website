import { devices, featureGraphic, type Device } from "@/store/devices";
import { getCopy, localeCodes } from "@/store/frames";

export const dynamic = "force-static";

type Shot = { path: string; file: string; width: number; height: number; scale: number };

// Tells scripts/export-store.mjs what to capture, so languages, devices and frames live in one place.
export function GET() {
  const shots: Shot[] = localeCodes.flatMap((locale) => {
    const frames = getCopy(locale).frames;
    return [
      ...(Object.keys(devices) as Device[]).flatMap((device) => {
        const { width, height, scale } = devices[device];
        return frames.map((f) => ({ path: `/store/${locale}/${device}/${f.id}`, file: `${locale}/${device}/0${f.id}-${f.slug}.png`, width, height, scale }));
      }),
      { path: `/store/${locale}/play/feature`, file: `${locale}/play/feature-graphic.png`, ...featureGraphic },
    ];
  });
  return Response.json(shots);
}
