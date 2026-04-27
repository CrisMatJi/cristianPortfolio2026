"use client";

interface DotProps {
  ac: string;
  green?: boolean;
}

export function Dot({ ac, green }: DotProps) {
  return (
    <span
      style={{
        display: "inline-block",
        width: 7,
        height: 7,
        borderRadius: "50%",
        background: green ? "#22C55E" : ac,
        animation: "pulse-ac 2.5s ease-in-out infinite",
        flexShrink: 0,
      }}
    />
  );
}

interface BadgeProps {
  children: React.ReactNode;
  ac: string;
  filled?: boolean;
}

export function Badge({ children, ac, filled }: BadgeProps) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 12,
        fontWeight: 500,
        padding: "6px 14px",
        borderRadius: 100,
        whiteSpace: "nowrap",
        background: filled ? ac : `${ac}12`,
        color: filled ? "var(--ac-text)" : ac,
        border: `1px solid ${ac}30`,
      }}
    >
      {children}
    </span>
  );
}

interface SectionTagProps {
  children: React.ReactNode;
  ac: string;
}

export function SectionTag({ children, ac }: SectionTagProps) {
  return (
    <div
      style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}
    >
      <Dot ac={ac} />
      <span
        style={{
          fontSize: 11,
          fontWeight: 600,
          letterSpacing: ".12em",
          textTransform: "uppercase",
          color: ac,
        }}
      >
        {children}
      </span>
    </div>
  );
}
