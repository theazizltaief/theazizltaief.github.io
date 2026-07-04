import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Aziz Ltaief — Fullstack Developer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background:
            "linear-gradient(135deg, #050505 0%, #0a0a15 50%, #050505 100%)",
          position: "relative",
        }}
      >
        {/* Ambient glow — top right */}
        <div
          style={{
            position: "absolute",
            top: "-250px",
            right: "-250px",
            width: "700px",
            height: "700px",
            background:
              "radial-gradient(circle, rgba(99, 102, 241, 0.18) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Ambient glow — bottom left */}
        <div
          style={{
            position: "absolute",
            bottom: "-250px",
            left: "-250px",
            width: "600px",
            height: "600px",
            background:
              "radial-gradient(circle, rgba(168, 85, 247, 0.12) 0%, transparent 70%)",
            borderRadius: "50%",
            display: "flex",
          }}
        />

        {/* Subtle grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
            display: "flex",
          }}
        />

        {/* Top badge — premium */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            padding: "12px 24px",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "999px",
            background:
              "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)",
            color: "rgba(255,255,255,0.75)",
            fontSize: "18px",
            letterSpacing: "3px",
            textTransform: "uppercase",
            fontWeight: 500,
            alignSelf: "flex-start",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            
          </span>
          Shipping software that scales
          <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            
          </span>
        </div>

        {/* Center content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          <div
            style={{
              fontSize: "26px",
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "6px",
              textTransform: "uppercase",
              fontWeight: 300,
            }}
          >
            Mohamed Aziz Ltaief
          </div>
          <div
            style={{
              fontSize: "108px",
              fontWeight: 300,
              color: "white",
              lineHeight: 0.95,
              letterSpacing: "-3px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span>Fullstack Developer</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgba(255,255,255,0.5) 0%, rgba(255,255,255,0.2) 100%)",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              .NET · Rails · AI
            </span>
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "rgba(255,255,255,0.5)",
              maxWidth: "900px",
              lineHeight: 1.4,
              marginTop: "8px",
              fontWeight: 300,
            }}
          >
            Building production-grade web apps and AI-powered solutions.
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <div
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                background:
                  "linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.03) 100%)",
                border: "1px solid rgba(255,255,255,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              A
            </div>
            <div
              style={{
                fontSize: "26px",
                color: "white",
                fontWeight: 500,
                letterSpacing: "0.5px",
              }}
            >
              azizltaief.me
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "18px",
              fontSize: "20px",
              color: "rgba(255,255,255,0.4)",
              alignItems: "center",
              fontWeight: 300,
            }}
          >
            <span>Rails 8</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span>ASP.NET Core</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span>Next.js</span>
            <span style={{ color: "rgba(255,255,255,0.15)" }}>·</span>
            <span>Ollama</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}