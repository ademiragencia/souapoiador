function hashString(value: string) {
  let h = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    h ^= value.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

export function PixMark({ seed }: { seed: string }) {
  const size = 25;
  const bits: boolean[] = [];
  let h = hashString(seed);
  for (let i = 0; i < size * size; i += 1) {
    h = Math.imul(h ^ (h >>> 13), 0x85ebca6b);
    bits.push((h >>> 24) % 2 === 0);
  }

  const isFinder = (x: number, y: number) => {
    const inFinder = (ox: number, oy: number) =>
      x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
    return inFinder(0, 0) || inFinder(size - 7, 0) || inFinder(0, size - 7);
  };

  const finderCell = (x: number, y: number, ox: number, oy: number) => {
    const lx = x - ox;
    const ly = y - oy;
    const ring = lx === 0 || ly === 0 || lx === 6 || ly === 6;
    const core = lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
    return ring || core;
  };

  const on = (x: number, y: number) => {
    if (isFinder(x, y)) {
      if (x < 7 && y < 7) return finderCell(x, y, 0, 0);
      if (x >= size - 7 && y < 7) return finderCell(x, y, size - 7, 0);
      return finderCell(x, y, 0, size - 7);
    }
    return bits[y * size + x] ?? false;
  };

  const cell = 8;
  const pad = 12;
  const dim = size * cell + pad * 2;

  return (
    <svg
      viewBox={`0 0 ${dim} ${dim}`}
      className="size-40 rounded-lg bg-card text-foreground"
      role="img"
      aria-label="Código PIX ilustrativo"
    >
      <rect width={dim} height={dim} className="fill-card" rx="8" />
      {Array.from({ length: size }, (_, y) =>
        Array.from({ length: size }, (_, x) =>
          on(x, y) ? (
            <rect
              key={`${x}-${y}`}
              x={pad + x * cell}
              y={pad + y * cell}
              width={cell}
              height={cell}
              className="fill-foreground"
            />
          ) : null,
        ),
      )}
    </svg>
  );
}
