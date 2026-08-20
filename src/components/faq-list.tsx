import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    q: "Qual é o valor mínimo?",
    a: "R$ 10. Você pode doar esse valor ou qualquer quantia acima, pelos atalhos ou digitando um valor próprio.",
  },
  {
    q: "Por que a meta é de R$ 5 milhões?",
    a: "Porque as eleições estão chegando. A campanha precisa de presença nacional. Os R$ 215 mil já arrecadados continuam na conta — a meta nova não apaga o que já entrou.",
  },
  {
    q: "Os R$ 215 mil já entram na conta?",
    a: "Sim. A campanha parte de R$ 215.000 já arrecadados. Cada novo apoio soma a esse total — nada é zerado.",
  },
  {
    q: "Posso doar sem aparecer no mural?",
    a: "Pode. Deixe o nome em branco e o apoio entra como anônimo. O valor continua contando no total.",
  },
  {
    q: "Para onde vai o dinheiro?",
    a: "Para o Comitê Apoie seu Presidente: presença nos estados, comunicação e estrutura de apoio popular. Campanha patriota, não tesouro oficial nem conta de governo.",
  },
];

export function FaqList() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, index) => {
        const isOpen = open === index;
        return (
          <div key={item.q}>
            <button
              type="button"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-4 py-4 text-left"
            >
              <span className="font-medium text-foreground">{item.q}</span>
              <ChevronDown
                className={cn(
                  "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
                  isOpen && "rotate-180",
                )}
              />
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <p className="overflow-hidden text-sm leading-relaxed text-muted-foreground">
                <span className="mb-4 block">{item.a}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
