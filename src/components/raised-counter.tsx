import { useEffect, useRef, useState } from "react";
import { formatBRL } from "@/lib/money";
import { cn } from "@/lib/utils";

export function RaisedCounter({
  cents,
  className,
  tone = "default",
}: {
  cents: number;
  className?: string;
  tone?: "default" | "onDark";
}) {
  const [display, setDisplay] = useState(cents);
  const fromRef = useRef(cents);
  const first = useRef(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      fromRef.current = cents;
      setDisplay(cents);
      return;
    }
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const from = fromRef.current;
    fromRef.current = cents;
    if (reduce || from === cents) {
      setDisplay(cents);
      return;
    }
    const start = performance.now();
    const duration = 900;
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setDisplay(Math.round(from + (cents - from) * eased));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [cents]);

  return (
    <p
      className={cn(
        "font-display text-display font-semibold tracking-tight tabular-nums",
        tone === "onDark" ? "text-primary-foreground" : "text-foreground",
        className,
      )}
    >
      {formatBRL(display, { compact: true })}
    </p>
  );
}
