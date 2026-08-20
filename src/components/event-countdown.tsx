import { useEffect, useState } from "react";
import { EVENT_ISO } from "@/lib/campaign";

const EVENT_AT = Date.parse(EVENT_ISO);

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export function EventCountdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  if (now == null) {
    return (
      <p className="text-sm text-primary-foreground/70">
        15 de setembro · o relógio já corre
      </p>
    );
  }

  const diff = EVENT_AT - now;
  if (diff <= 0) {
    return (
      <p className="text-sm font-medium text-accent">O ato é hoje. Venha ao MASP.</p>
    );
  }

  const totalSec = Math.floor(diff / 1000);
  const days = Math.floor(totalSec / 86400);
  const hours = Math.floor((totalSec % 86400) / 3600);
  const minutes = Math.floor((totalSec % 3600) / 60);
  const seconds = totalSec % 60;

  return (
    <div className="flex flex-wrap items-end gap-3">
      {[
        { n: days, l: "dias" },
        { n: hours, l: "horas" },
        { n: minutes, l: "min" },
        { n: seconds, l: "seg" },
      ].map((part) => (
        <div key={part.l} className="min-w-12">
          <p className="font-display text-2xl font-semibold tabular-nums leading-none text-accent">
            {pad(part.n)}
          </p>
          <p className="mt-1 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-primary-foreground/65">
            {part.l}
          </p>
        </div>
      ))}
    </div>
  );
}
