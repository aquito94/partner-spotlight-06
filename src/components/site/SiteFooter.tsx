import { Link } from "@tanstack/react-router";
import { Download } from "lucide-react";

import guia from "@/assets/guia-comercial.pdf.asset.json";
import { trustBadges, trustStatement } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/70 bg-surface/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">Netlife business</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Soluciones digitales · IA · desarrollos In-House
          </p>
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{trustStatement}</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Explorar
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/soluciones" className="text-muted-foreground hover:text-foreground">
                Portafolio de soluciones
              </Link>
            </li>
            <li>
              <Link to="/diagnostico" className="text-muted-foreground hover:text-foreground">
                Diagnóstico guiado
              </Link>
            </li>
            <li>
              <Link to="/cotizador" className="text-muted-foreground hover:text-foreground">
                Cotizador referencial
              </Link>
            </li>
            <li>
              <Link to="/guia" className="text-muted-foreground hover:text-foreground">
                Guía del aliado
              </Link>
            </li>
            <li>
              <Link to="/oportunidad" className="text-muted-foreground hover:text-foreground">
                Registrar oportunidad
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            Respaldo
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {trustBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground"
              >
                {badge}
              </li>
            ))}
          </ul>
          <a
            href={guia.url}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Download className="size-4" /> Descargar guía comercial 2026 (PDF)
          </a>
        </div>
      </div>
      <div className="border-t border-border/70 px-5 py-5 text-center text-xs text-muted-foreground">
        Guía comercial para partners · Edición 2026 · Netlife Business
      </div>
    </footer>
  );
}
