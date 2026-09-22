import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { mediaUrls } from "@/lib/media";

const nav = [
  { href: "/#resultados", label: "Resultados" },
  { href: "/#capacidades", label: "Capacidades" },
  { href: "/#areas", label: "Áreas" },
  { href: "/#industrias", label: "Industrias" },
  { href: "/#arquitectura", label: "Arquitectura" },
  { href: "/#seguridad", label: "Seguridad" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link to="/" className="group flex items-center" onClick={() => setOpen(false)}>
          <img
            src={mediaUrls.logo}
            alt="Netlife Business"
            width={218}
            height={124}
            className="h-11 w-auto shrink-0 object-contain"
          />
        </Link>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-2.5 py-2 text-xs text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild size="sm" variant="ghost">
            <Link to="/diagnostico">Diagnóstico</Link>
          </Button>
          <Button asChild size="sm">
            <Link to="/oportunidad">Hablar con un consultor</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground xl:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/70 px-5 pb-5 xl:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {nav.map(
              (item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  {item.label}
                </a>
              ),
            )}
            <Link to="/diagnostico" onClick={() => setOpen(false)} className="rounded-md px-3 py-2.5 text-sm text-muted-foreground">Diagnóstico</Link>
            <Link to="/oportunidad" onClick={() => setOpen(false)} className="rounded-md bg-primary px-3 py-2.5 text-sm text-primary-foreground">Contacto</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
