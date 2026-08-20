import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { _ as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/radix-ui__react-context+react.mjs";
import { a as DialogOverlay$1, i as DialogDescription$1, l as Slot, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { i as PRESET_REAIS, r as MIN_DONATION_CENTS } from "./campaign-C8xvh2Oh.mjs";
import { a as Map, c as HeartHandshake, d as Check, f as ArrowDown, i as ShieldCheck, l as Copy, n as Users, o as LoaderCircle, s as Landmark, t as X, u as ChevronDown } from "../_libs/lucide-react.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { n as Route, r as createDonation } from "./router-B3NJ4Lv3.mjs";
import { n as clsx, t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Root } from "../_libs/radix-ui__react-label.mjs";
import { n as formatDistanceToNow, t as ptBR } from "../_libs/date-fns.mjs";
import { n as Root$1, t as Indicator } from "../_libs/radix-ui__react-progress.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DHvag3kR.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-[color,background-color,box-shadow,transform,opacity] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 active:not-disabled:scale-[0.96] [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground hover:bg-primary/90",
			secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
			outline: "border border-border bg-transparent text-foreground hover:bg-muted",
			ghost: "text-foreground hover:bg-muted",
			link: "text-primary underline-offset-4 hover:underline active:scale-100"
		},
		size: {
			default: "h-11 px-4",
			sm: "h-9 rounded-md px-3 text-xs",
			lg: "h-12 rounded-xl px-6 text-base",
			icon: "size-11"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
var Input = import_react.forwardRef(({ className, type, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type,
		suppressHydrationWarning: true,
		className: cn("flex h-11 w-full rounded-lg border border-input bg-card px-3 text-base text-foreground shadow-none transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Input.displayName = "Input";
var Label = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root, {
	ref,
	className: cn("text-sm font-medium text-foreground leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className),
	...props
}));
Label.displayName = Root.displayName;
var Textarea = import_react.forwardRef(({ className, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		suppressHydrationWarning: true,
		className: cn("flex min-h-20 w-full rounded-lg border border-input bg-card px-3 py-2.5 text-base text-foreground transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm", className),
		ref,
		...props
	});
});
Textarea.displayName = "Textarea";
var Dialog = Dialog$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-foreground/40 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-1/2 top-1/2 z-50 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 gap-4 rounded-2xl border border-border bg-card p-6 text-card-foreground shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-3 top-3 rounded-md p-2 text-muted-foreground opacity-80 transition-opacity hover:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Fechar"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
function DialogHeader({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("flex flex-col gap-1.5 text-left", className),
		...props
	});
}
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("font-display text-xl font-semibold leading-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground leading-relaxed", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function hashString(value) {
	let h = 2166136261;
	for (let i = 0; i < value.length; i += 1) {
		h ^= value.charCodeAt(i);
		h = Math.imul(h, 16777619);
	}
	return h >>> 0;
}
function PixMark({ seed }) {
	const size = 25;
	const bits = [];
	let h = hashString(seed);
	for (let i = 0; i < 625; i += 1) {
		h = Math.imul(h ^ h >>> 13, 2246822507);
		bits.push((h >>> 24) % 2 === 0);
	}
	const isFinder = (x, y) => {
		const inFinder = (ox, oy) => x >= ox && x < ox + 7 && y >= oy && y < oy + 7;
		return inFinder(0, 0) || inFinder(18, 0) || inFinder(0, 18);
	};
	const finderCell = (x, y, ox, oy) => {
		const lx = x - ox;
		const ly = y - oy;
		return lx === 0 || ly === 0 || lx === 6 || ly === 6 || lx >= 2 && lx <= 4 && ly >= 2 && ly <= 4;
	};
	const on = (x, y) => {
		if (isFinder(x, y)) {
			if (x < 7 && y < 7) return finderCell(x, y, 0, 0);
			if (x >= 18 && y < 7) return finderCell(x, y, 18, 0);
			return finderCell(x, y, 0, 18);
		}
		return bits[y * size + x] ?? false;
	};
	const cell = 8;
	const pad = 12;
	const dim = 224;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: `0 0 ${dim} ${dim}`,
		className: "size-40 rounded-lg bg-card text-foreground",
		role: "img",
		"aria-label": "Código PIX ilustrativo",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			width: dim,
			height: dim,
			className: "fill-card",
			rx: "8"
		}), Array.from({ length: size }, (_, y) => Array.from({ length: size }, (_, x) => on(x, y) ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
			x: pad + x * cell,
			y: pad + y * cell,
			width: cell,
			height: cell,
			className: "fill-foreground"
		}, `${x}-${y}`) : null))]
	});
}
var brl = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
	maximumFractionDigits: 2
});
var brlCompact = new Intl.NumberFormat("pt-BR", {
	style: "currency",
	currency: "BRL",
	maximumFractionDigits: 0
});
function formatBRL(cents, opts) {
	const value = cents / 100;
	return (opts?.compact ? brlCompact : brl).format(value);
}
function reaisToCents(reais) {
	return Math.round(reais * 100);
}
function parseReais(raw) {
	const normalized = raw.replace(/\s/g, "").replace(",", ".");
	if (!normalized) return null;
	const value = Number(normalized);
	if (!Number.isFinite(value)) return null;
	return value;
}
function DonateCard() {
	const router = useRouter();
	const [preset, setPreset] = (0, import_react.useState)(50);
	const [custom, setCustom] = (0, import_react.useState)("");
	const [alias, setAlias] = (0, import_react.useState)("");
	const [note, setNote] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)(null);
	const [open, setOpen] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)("pix");
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [copied, setCopied] = (0, import_react.useState)(false);
	const amountReais = custom ? parseReais(custom) : preset;
	const amountCents = amountReais != null ? reaisToCents(amountReais) : null;
	const pixPayload = (0, import_react.useMemo)(() => {
		if (!amountCents) return "APOIE-SEU-PRESIDENTE";
		return `0002012636BR.GOV.BCB.PIX|APOIESEUPRESIDENTE|${amountCents}|COMITE`;
	}, [amountCents]);
	function validate() {
		if (amountCents == null || amountReais == null) return "Escolha ou digite um valor.";
		if (amountCents < 1e3) return "A doação mínima é de R$ 10.";
		if (amountCents > 5e6) return "O valor máximo por doação é R$ 50.000.";
		return null;
	}
	function startPix() {
		const message = validate();
		if (message) {
			setError(message);
			return;
		}
		setError(null);
		setPhase("pix");
		setCopied(false);
		setOpen(true);
	}
	async function confirmDonation() {
		const message = validate();
		if (message || amountCents == null) {
			setError(message ?? "Valor inválido.");
			return;
		}
		setSubmitting(true);
		try {
			await createDonation({ data: {
				amountCents,
				publicAlias: alias.trim() || null,
				note: note.trim() || null
			} });
			await router.invalidate();
			setPhase("success");
			setCustom("");
			setPreset(50);
			setAlias("");
			setNote("");
		} catch (err) {
			const text = err instanceof Error ? err.message : "Não foi possível registrar o apoio.";
			toast.error(text);
		} finally {
			setSubmitting(false);
		}
	}
	async function copyPix() {
		try {
			await navigator.clipboard.writeText(pixPayload);
			setCopied(true);
			toast.success("Código PIX copiado.");
		} catch {
			toast.error("Não foi possível copiar. Selecione o código manualmente.");
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "doar",
		className: "scroll-mt-24 rounded-2xl bg-card p-5 shadow-[var(--shadow-border)] sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
				children: "Doar agora"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-2xl font-semibold tracking-tight",
				children: "Escolha o valor"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: "Mínimo de R$ 10. O valor entra no total da campanha assim que você confirmar o PIX."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 grid grid-cols-3 gap-2",
				children: PRESET_REAIS.map((value) => {
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							setPreset(value);
							setCustom("");
							setError(null);
						},
						className: cn("h-11 rounded-lg border text-sm font-medium tabular-nums transition-[background-color,border-color,color] duration-150", !custom && preset === value ? "border-primary bg-primary text-primary-foreground" : "border-border bg-background text-foreground hover:bg-muted"),
						children: ["R$ ", value]
					}, value);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "valor-custom",
					children: "Outro valor"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground",
						children: "R$"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						id: "valor-custom",
						inputMode: "decimal",
						placeholder: "10,00",
						value: custom,
						onChange: (event) => {
							setCustom(event.target.value);
							setPreset(null);
							setError(null);
						},
						className: "pl-10 tabular-nums"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "alias",
					children: "Nome no mural (opcional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "alias",
					maxLength: 40,
					placeholder: "Como você quer aparecer",
					value: alias,
					onChange: (event) => setAlias(event.target.value),
					autoComplete: "nickname"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 space-y-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "note",
					children: "Recado (opcional)"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
					id: "note",
					maxLength: 140,
					placeholder: "Uma frase para o presidente",
					value: note,
					onChange: (event) => setNote(event.target.value)
				})]
			}),
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm text-destructive",
				role: "alert",
				children: error
			}) : null,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
				type: "button",
				className: "mt-5 w-full",
				size: "lg",
				onClick: startPix,
				children: "Continuar para o PIX"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5" }),
					"Doação única · a partir de ",
					formatBRL(MIN_DONATION_CENTS)
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open,
				onOpenChange: (next) => {
					setOpen(next);
					if (!next) setPhase("pix");
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: phase === "pix" && amountCents != null ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "PIX da vaquinha" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [
						"Confirme ",
						formatBRL(amountCents),
						" para o Comitê Apoie seu Presidente. Nesta prévia, o apoio é registrado na hora."
					] })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center gap-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PixMark, { seed: pixPayload }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-2xl font-semibold tabular-nums",
								children: formatBRL(amountCents)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: copyPix,
								className: "flex w-full items-center justify-between gap-3 rounded-xl bg-muted px-3 py-3 text-left text-xs text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "min-w-0 truncate font-mono",
									children: pixPayload
								}), copied ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-foreground" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-4 shrink-0 text-foreground" })]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						size: "lg",
						className: "w-full",
						onClick: confirmDonation,
						disabled: submitting,
						children: submitting ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "animate-spin" }), "Registrando"] }) : "Já paguei · registrar apoio"
					})
				] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Obrigado pelo apoio" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Seu valor já entrou no total da campanha. O presidente — e quem caminha com ele — seguem com você." })] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex justify-center py-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
								className: "size-7",
								strokeWidth: 2.2
							})
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						className: "w-full",
						onClick: () => setOpen(false),
						children: "Fechar"
					})
				] }) })
			})
		]
	});
}
var items = [
	{
		q: "Qual é o valor mínimo?",
		a: "R$ 10. Você pode doar esse valor ou qualquer quantia acima, pelos atalhos ou digitando um valor próprio."
	},
	{
		q: "Os R$ 215 mil já entram na conta?",
		a: "Sim. A campanha parte de R$ 215.000 já arrecadados. Cada novo apoio soma a esse total — nada é zerado."
	},
	{
		q: "Posso doar sem aparecer no mural?",
		a: "Pode. Deixe o nome em branco e o apoio entra como anônimo. O valor continua contando no total."
	},
	{
		q: "Para onde vai o dinheiro?",
		a: "Para o Comitê Apoie seu Presidente: presença nos estados, comunicação cívica e estrutura de apoio popular. Não é tesouro oficial nem conta de governo."
	}
];
function FaqList() {
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "divide-y divide-border border-y border-border",
		children: items.map((item, index) => {
			const isOpen = open === index;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				"aria-expanded": isOpen,
				onClick: () => setOpen(isOpen ? null : index),
				className: "flex w-full items-center justify-between gap-4 py-4 text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-medium text-foreground",
					children: item.q
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 shrink-0 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180") })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cn("grid transition-[grid-template-rows] duration-200 ease-[cubic-bezier(0.22,1,0.36,1)]", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "overflow-hidden text-sm leading-relaxed text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mb-4 block",
						children: item.a
					})
				})
			})] }, item.q);
		})
	});
}
function RaisedCounter({ cents, className }) {
	const [display, setDisplay] = (0, import_react.useState)(cents);
	const fromRef = (0, import_react.useRef)(cents);
	const first = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
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
		const tick = (now) => {
			const t = Math.min(1, (now - start) / duration);
			const eased = 1 - (1 - t) ** 3;
			setDisplay(Math.round(from + (cents - from) * eased));
			if (t < 1) frame = requestAnimationFrame(tick);
		};
		frame = requestAnimationFrame(tick);
		return () => cancelAnimationFrame(frame);
	}, [cents]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: cn("font-display text-4xl font-semibold tracking-tight text-foreground tabular-nums sm:text-5xl", className),
		children: formatBRL(display, { compact: true })
	});
}
function PresidentMark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 32 32",
		className: cn("size-8", className),
		"aria-hidden": "true",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				width: "32",
				height: "32",
				rx: "8",
				className: "fill-primary"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("text", {
				x: "16",
				y: "19",
				textAnchor: "middle",
				className: "fill-primary-foreground",
				style: {
					fontFamily: "Georgia, ui-serif, serif",
					fontSize: "15px",
					fontWeight: 700
				},
				children: "P"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "9",
				y: "23.5",
				width: "14",
				height: "1.4",
				rx: "0.7",
				className: "fill-primary-foreground"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("rect", {
				x: "11",
				y: "26",
				width: "10",
				height: "1.4",
				rx: "0.7",
				className: "fill-primary-foreground/70"
			})
		]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-primary pb-24 text-primary-foreground sm:pb-0",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresidentMark, { className: "size-9 brightness-0 invert" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-lg font-semibold",
					children: "Comitê Apoie seu Presidente"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 max-w-sm text-sm text-primary-foreground/70",
					children: "Vaquinha cívica de apoio popular. Doação mínima de R$ 10. Cada novo apoio soma aos R$ 215 mil já arrecadados."
				})] })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-primary-foreground/55",
				children: "Campanha de apoio popular, não oficial. O PIX desta prévia registra o apoio na hora, sem cobrança bancária real."
			})]
		})
	});
}
var links = [
	{
		href: "#historia",
		label: "A campanha"
	},
	{
		href: "#apoiadores",
		label: "Apoiadores"
	},
	{
		href: "#transparencia",
		label: "Transparência"
	}
];
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border/80 bg-background/90 backdrop-blur-md",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "#topo",
					className: "flex min-w-0 items-center gap-2.5",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PresidentMark, { className: "size-8 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "truncate font-display text-base font-semibold tracking-tight text-foreground sm:text-lg",
						children: "Apoie seu Presidente"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-6 text-sm text-muted-foreground md:flex",
					children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "transition-colors duration-150 hover:text-foreground",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					size: "sm",
					className: "hidden sm:inline-flex",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#doar",
						children: "Apoiar agora"
					})
				})
			]
		})
	});
}
function displayName(alias) {
	return alias?.trim() || "Apoiador anônimo";
}
function RelativeTime({ iso }) {
	const [text, setText] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const date = new Date(iso);
		if (Number.isNaN(date.getTime())) return;
		setText(formatDistanceToNow(date, {
			addSuffix: true,
			locale: ptBR
		}));
	}, [iso]);
	if (!text) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-block min-h-4" });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children: text });
}
function SupportersWall({ donations }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "apoiadores",
		className: "scroll-mt-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-end justify-between gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground",
				children: "Mural"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-1 font-display text-3xl font-semibold tracking-tight",
				children: "Quem já apoiou"
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "hidden text-sm text-muted-foreground sm:block",
				children: [donations.length, " apoios recentes"]
			})]
		}), donations.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-8 text-sm text-muted-foreground",
			children: "Seja o primeiro a somar nesta etapa da campanha."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-8 divide-y divide-border rounded-2xl bg-card shadow-[var(--shadow-border)]",
			children: donations.map((donation) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-start justify-between gap-4 px-5 py-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "truncate font-medium text-foreground",
							children: displayName(donation.publicAlias)
						}),
						donation.note ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-0.5 text-sm text-muted-foreground",
							children: donation.note
						}) : null,
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-muted-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RelativeTime, { iso: donation.createdAt })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "shrink-0 font-medium tabular-nums text-foreground",
					children: formatBRL(donation.amountCents)
				})]
			}, donation.id))
		})]
	});
}
var Progress = import_react.forwardRef(({ className, value, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root$1, {
	ref,
	className: cn("relative h-2 w-full overflow-hidden rounded-full bg-muted", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Indicator, {
		className: "h-full w-full flex-1 bg-primary transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
		style: { transform: `translateX(-${100 - (value || 0)}%)` }
	})
}));
Progress.displayName = Root$1.displayName;
var impacts = [
	{
		icon: Map,
		label: "Estados com comitê",
		value: "27",
		detail: "presença em todo o país"
	},
	{
		icon: Users,
		label: "Núcleos locais",
		value: "1.400",
		detail: "voluntários na ponta"
	},
	{
		icon: Landmark,
		label: "Atos cívicos",
		value: "186",
		detail: "neste semestre"
	}
];
function Home() {
	const { campaign, donations } = Route.useLoaderData();
	const overGoal = campaign.raisedCents >= campaign.goalCents;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "topo",
		className: "min-h-dvh bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "mx-auto grid max-w-6xl gap-10 px-4 pb-8 pt-5 sm:px-6 sm:pt-8 lg:grid-cols-2 lg:items-start lg:gap-12 lg:pt-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
							children: "Comitê · vaquinha cívica"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-2 max-w-xl font-display text-3xl font-semibold leading-tight tracking-tight text-foreground sm:mt-3 sm:text-5xl",
							children: "Apoie seu presidente. Agora."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-3 max-w-lg text-base leading-relaxed text-muted-foreground sm:mt-4 sm:text-lg",
							children: [
								"Campanha popular para quem quer caminhar junto. Cada apoio soma aos ",
								formatBRL(campaign.baseRaisedCents, { compact: true }),
								" já arrecadados — presença nos estados, comunicação e estrutura de base."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 sm:mt-7",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: "Arrecadado até agora"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RaisedCounter, {
									cents: campaign.raisedCents,
									className: "mt-1"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-4 flex items-end justify-between gap-4 text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-muted-foreground",
										children: [
											"Meta ",
											formatBRL(campaign.goalCents, { compact: true }),
											overGoal ? " · meta superada" : ""
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "tabular-nums text-foreground",
										children: [campaign.percent, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Progress, {
									value: campaign.percent,
									className: "mt-2 h-2.5"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-3 text-sm text-muted-foreground",
									children: [campaign.supporterCount, " pessoas no mural · doação mínima de R$ 10"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 overflow-hidden rounded-2xl bg-hero",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/images/hero.jpg",
								alt: "Gabinete vazio ao entardecer, com a faixa presidencial sobre a mesa",
								className: "aspect-[16/9] w-full object-cover outline outline-1 -outline-offset-1 outline-black/15",
								width: 1600,
								height: 900
							})
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:sticky lg:top-24 max-lg:mb-16",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonateCard, {})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "border-y border-border bg-card/60",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mx-auto grid max-w-6xl gap-px px-4 sm:grid-cols-3 sm:px-6",
						children: impacts.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex gap-3 py-7 sm:px-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
								className: "mt-0.5 size-5 text-primary",
								strokeWidth: 1.75
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-2xl font-semibold tabular-nums",
									children: item.value
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm font-medium text-foreground",
									children: item.label
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground",
									children: item.detail
								})
							] })]
						}, item.label))
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					id: "historia",
					className: "mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "overflow-hidden rounded-2xl bg-hero",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/images/still.jpg",
							alt: "Faixa presidencial verde e amarela sobre a mesa de trabalho",
							className: "aspect-[4/3] w-full object-cover outline outline-1 -outline-offset-1 outline-black/15",
							width: 1200,
							height: 900
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
							children: "O comitê"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-2 font-display text-3xl font-semibold tracking-tight sm:text-4xl",
							children: "Política se faz com quem está na rua."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 space-y-4 text-base leading-relaxed text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Presidente não governa sozinho. Esta vaquinha reúne quem quer bancar a presença cívica — comitês, deslocamento, material e o trabalho miúdo que não aparece no noticiário." }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
								"Os ",
								formatBRL(campaign.baseRaisedCents, { compact: true }),
								" já arrecadados sustentaram a primeira etapa. O que entra daqui para frente soma a esse total. Doação mínima de R$ 10. Campanha de apoio popular, não oficial."
							] })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							asChild: true,
							variant: "outline",
							className: "mt-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#doar",
								children: ["Somar o meu apoio", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-4" })]
							})
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					className: "mx-auto max-w-6xl px-4 pb-16 sm:px-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SupportersWall, { donations })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
					id: "transparencia",
					className: "border-t border-border bg-card/50",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
								children: "Transparência"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-2 font-display text-3xl font-semibold tracking-tight",
								children: "Como o total é composto"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
								className: "mt-8 space-y-4 text-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-4 border-b border-border pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Já arrecadado (base)"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium tabular-nums",
											children: formatBRL(campaign.baseRaisedCents)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-4 border-b border-border pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Novos apoios desta etapa"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium tabular-nums",
											children: formatBRL(campaign.newCents)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-4 border-b border-border pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Total público"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-display text-lg font-semibold tabular-nums",
											children: formatBRL(campaign.raisedCents)
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-baseline justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
											className: "text-muted-foreground",
											children: "Doação mínima"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
											className: "font-medium tabular-nums",
											children: "R$ 10"
										})]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-6 flex items-start gap-2 text-sm leading-relaxed text-muted-foreground",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "mt-0.5 size-4 shrink-0 text-primary" }), "Destino: comitê de apoio popular, com prestação de contas trimestral. Não é conta de governo."]
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-2xl font-semibold tracking-tight",
							children: "Perguntas frequentes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqList, {})
						})] })]
					})
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#doar",
				className: "fixed inset-x-4 bottom-4 z-40 flex h-12 items-center justify-center rounded-xl bg-primary text-sm font-medium text-primary-foreground shadow-lg sm:hidden",
				style: { marginBottom: "env(safe-area-inset-bottom)" },
				children: "Apoiar agora · a partir de R$ 10"
			})
		]
	});
}
//#endregion
export { Home as component };
