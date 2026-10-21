// Roughly the September curve from the app's Rate of Aging chart.
// Shared by the website's AgingSection and the store screenshot frames.
const points = [0.97, 0.958, 0.955, 0.958, 0.958, 0.958, 0.955, 0.953, 0.945, 0.941, 0.939, 0.943, 0.948, 0.949, 0.948, 0.95, 0.955, 0.962, 0.966, 0.96, 0.954, 0.952, 0.951, 0.953];
const min = 0.91;
const max = 0.99;
export const W = 560;
export const H = 220;

function toXY(v: number, i: number) {
  const x = (i / (points.length - 1)) * W;
  const y = ((max - v) / (max - min)) * H;
  return [x, y] as const;
}

export const line = points.map((v, i) => toXY(v, i)).map(([x, y], i) => `${i ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)}`).join(" ");
export const area = `${line} L${W} ${H} L0 ${H} Z`;
export const baselineY = ((max - 0.985) / (max - min)) * H;
