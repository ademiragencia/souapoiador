import { PresidentMark } from "@/components/president-mark";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#historia", label: "A campanha" },
  { href: "#apoiadores", label: "Apoiadores" },
  { href: "#transparencia", label: "Transparência" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-hero/95 text-primary-foreground backdrop-blur-md">
      <div className="h-1 bg-accent" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#topo" className="flex min-w-0 items-center gap-2.5">
          <PresidentMark className="size-8 shrink-0" />
          <span className="truncate font-display text-base font-semibold tracking-tight sm:text-lg">
            Apoie seu Presidente
          </span>
        </a>
        <nav className="hidden items-center gap-6 text-sm text-primary-foreground/75 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-primary-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild size="sm" className="hidden sm:inline-flex">
          <a href="#doar">Apoiar agora</a>
        </Button>
      </div>
    </header>
  );
}
