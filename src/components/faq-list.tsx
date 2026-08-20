import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  {
    q: "Qual é o valor mínimo?",
    a: "R$ 10. Você escolhe um atalho ou digita outro valor. Cada real entra no total na hora e ajuda a bancar o ato.",
  },
  {
    q: "Para que serve esta vaquinha?",
    a: "Para financiar a manifestação de 15 de setembro na Avenida Paulista, ponto de encontro no MASP: som, palco, telão, faixas, bandeiras, ônibus dos comitês e estrutura no dia. É a petição viva pela liberdade do capitão.",
  },
  {
    q: "Os R$ 11.880 já entram na conta?",
    a: "Sim. A campanha parte de R$ 11.880 já arrecadados. Cada novo apoio soma a esse total — nada é zerado. O número fica gravado no banco e sobe no site em tempo real.",
  },
  {
    q: "SBT e Record vão cobrir?",
    a: "Sim. O ato na Paulista terá cobertura da SBT e da Record. Quanto mais gente e estrutura no MASP, mais o Brasil vê o pedido de liberdade.",
  },
  {
    q: "Posso doar sem aparecer no mural?",
    a: "Pode. Deixe o nome em branco e o apoio entra como anônimo. O valor continua contando no total público.",
  },
  {
    q: "Para onde vai o dinheiro?",
    a: "Para o comitê popular do ato: som, palco, material, deslocamento e operação no MASP. Não é conta de governo nem tesouro oficial.",
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
