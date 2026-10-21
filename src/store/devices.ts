// Export targets. Frames are laid out at a 430px-wide design size and zoomed to each
// device's CSS width, then captured at `scale` to hit the exact store pixel size.
export const devices = {
  ios: {
    label: "App Store · iPhone 6.9\"",
    width: 430,
    height: 932,
    scale: 3, // → 1290 × 2796
  },
  android: {
    label: "Google Play · phone",
    width: 360,
    height: 640,
    scale: 3, // → 1080 × 1920
  },
} as const;

export type Device = keyof typeof devices;

export const DESIGN_WIDTH = 430;

/** Height of the frame in design pixels for a device (width is always DESIGN_WIDTH). */
export function designHeight(device: Device) {
  const d = devices[device];
  return Math.round((d.height / d.width) * DESIGN_WIDTH);
}

/** Google Play feature graphic, exported separately. */
export const featureGraphic = { width: 1024, height: 500, scale: 1 } as const;
