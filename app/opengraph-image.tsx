import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Aniket Vishwakarma — Full-Stack Developer & ML Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          background: "linear-gradient(135deg, #070b14 0%, #0c1220 50%, #070b14 100%)",
          padding: "60px 80px",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grid overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(6,182,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,0.06) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow top-right */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,58,237,0.25) 0%, transparent 70%)",
          }}
        />

        {/* Glow bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            left: "-80px",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6,182,212,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Avatar circle */}
        <div
          style={{
            position: "absolute",
            top: "50px",
            right: "80px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #06b6d4, #7c3aed)",
            padding: "3px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "214px",
              height: "214px",
              borderRadius: "50%",
              background: "#0c1220",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "72px",
              fontWeight: "bold",
              color: "#06b6d4",
            }}
          >
            AV
          </div>
        </div>

        {/* Content */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px", position: "relative", zIndex: 10 }}>
          {/* Available badge */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.4)",
              borderRadius: "20px",
              padding: "6px 14px",
              width: "fit-content",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                background: "#10b981",
              }}
            />
            <span style={{ color: "#10b981", fontSize: "14px", fontWeight: 600 }}>
              Available for Opportunities
            </span>
          </div>

          {/* Name */}
          <div
            style={{
              fontSize: "62px",
              fontWeight: 800,
              lineHeight: 1.1,
              background: "linear-gradient(135deg, #f8fafc 40%, #06b6d4 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Aniket Vishwakarma
          </div>

          {/* Title */}
          <div style={{ fontSize: "24px", color: "#94a3b8", fontWeight: 500 }}>
            Full-Stack Developer & ML Engineer
          </div>

          {/* Tech chips */}
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginTop: "8px" }}>
            {["React · Next.js", "WebRTC", "Python · FastAPI", "YOLOv8 · NVIDIA NIM", "Web3"].map(
              (tag) => (
                <div
                  key={tag}
                  style={{
                    background: "rgba(6,182,212,0.1)",
                    border: "1px solid rgba(6,182,212,0.3)",
                    borderRadius: "8px",
                    padding: "5px 12px",
                    color: "#67e8f9",
                    fontSize: "13px",
                    fontWeight: 500,
                  }}
                >
                  {tag}
                </div>
              )
            )}
          </div>

          {/* Stats row */}
          <div style={{ display: "flex", gap: "32px", marginTop: "12px" }}>
            {[
              { val: "8+", label: "Projects" },
              { val: "🏆", label: "Hackathon Winner" },
              { val: "Mumbai", label: "India" },
            ].map(({ val, label }) => (
              <div key={label} style={{ display: "flex", flexDirection: "column" }}>
                <span style={{ color: "#06b6d4", fontSize: "22px", fontWeight: 700 }}>{val}</span>
                <span style={{ color: "#64748b", fontSize: "13px" }}>{label}</span>
              </div>
            ))}
          </div>

          {/* URL */}
          <div style={{ color: "#475569", fontSize: "15px", marginTop: "8px" }}>
            aniketvishwakarma.me
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
