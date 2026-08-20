import { cn } from "@/lib/utils";

export function PresidentMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn("size-8", className)}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" className="fill-accent" />
      <text
        x="16"
        y="20"
        textAnchor="middle"
        className="fill-hero"
        style={{
          fontFamily: "Oswald, Arial Narrow, sans-serif",
          fontSize: "16px",
          fontWeight: 700,
        }}
      >
        B
      </text>
      <rect x="8" y="23.4" width="16" height="1.5" rx="0.7" className="fill-primary" />
      <rect x="10" y="26.1" width="12" height="1.5" rx="0.7" className="fill-navy" />
    </svg>
  );
}
