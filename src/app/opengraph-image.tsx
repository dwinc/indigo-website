import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Indigo: AI longevity and habit tracker app";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const icon = await readFile(join(process.cwd(), "src/app/icon.png"));
  const iconSrc = `data:image/png;base64,${icon.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: 64,
          padding: "0 96px",
          color: "white",
          background: "linear-gradient(160deg, #5a3fdc 0%, #3f4bd2 30%, #2459b0 60%, #33287f 100%)",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={iconSrc} width={300} height={300} alt="" style={{ borderRadius: 72 }} />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 4, textTransform: "uppercase", opacity: 0.7 }}>
            AI longevity &amp; habit tracker
          </div>
          <div style={{ fontSize: 112, fontWeight: 800, lineHeight: 1, marginTop: 20 }}>Indigo</div>
          <div style={{ fontSize: 48, fontWeight: 600, marginTop: 24, color: "#ffc24a" }}>Live healthy, longer.</div>
          <div style={{ fontSize: 28, marginTop: 36, opacity: 0.75 }}>Free on iPhone &amp; Android · joinindigo.app</div>
        </div>
      </div>
    ),
    size,
  );
}
