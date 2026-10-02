import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

export function createOgImage({
  kicker,
  title,
  footer,
}: {
  kicker: string;
  title: string;
  footer: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          backgroundColor: "#0c1210",
          color: "#e8f0ec",
        }}
      >
        <div
          style={{
            width: "14px",
            height: "630px",
            backgroundColor: "#2dd4bf",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "1186px",
            padding: "68px 72px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 28,
              letterSpacing: 0.4,
              color: "#5eead4",
            }}
          >
            {kicker}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 58,
              fontWeight: 600,
              lineHeight: 1.12,
              letterSpacing: -1.4,
              maxWidth: "980px",
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#9aada6" }}>
            {footer}
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
