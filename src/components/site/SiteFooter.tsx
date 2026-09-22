import { Link } from "@tanstack/react-router";
import { Download } from "lucide-react";

import { mediaUrls } from "@/lib/media";
import { trustStatement } from "@/data/portfolio";

const verifiedBadges = ["ISO/IEC 27001 (AENOR)", "PCI DSS Verified"];

export function SiteFooter() {
  return (
    <footer className="border-t border-border/70 bg-ink text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <img
            src={mediaUrls.logo}
            alt="Netlife Business"
            width={218}
            height={124}
            loading="lazy"
            className="mb-3 h-16 w-auto object-contain"
          />
          <p className="text-sm text-primary-foreground/70">Estrategia · IA · automatización · datos · desarrollo a medida</p>
          <p className="mt-4 max-w-sm text-sm text-primary-foreground/60">{trustStatement}</p>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-primary-foreground/50 uppercase">
            Explorar
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link to="/soluciones" className="text-primary-foreground/70 hover:text-primary-foreground">
                Capacidades empresariales
              </Link>
            </li>
            <li>
              <Link to="/diagnostico" className="text-primary-foreground/70 hover:text-primary-foreground">
                Diagnosticar una oportunidad
              </Link>
            </li>
            <li>
              <Link to="/cotizador" className="text-primary-foreground/70 hover:text-primary-foreground">
                Inversión referencial
              </Link>
            </li>
            <li>
              <Link to="/guia" className="text-primary-foreground/70 hover:text-primary-foreground">
                Guía del aliado
              </Link>
            </li>
            <li>
              <Link to="/oportunidad" className="text-primary-foreground/70 hover:text-primary-foreground">
                Hablar con un consultor
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold tracking-widest text-primary-foreground/50 uppercase">
            Seguridad y respaldo
          </p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {verifiedBadges.map((badge) => (
              <li
                key={badge}
                className="rounded-full border border-primary-foreground/15 bg-primary-foreground/5 px-3 py-1 text-xs text-primary-foreground/65"
              >
                {badge}
              </li>
            ))}
          </ul>
          <a
            href={mediaUrls.guiaPdf}
            target="_blank"
            rel="noreferrer"
            className="mt-5 inline-flex items-center gap-2 text-sm text-cyan hover:underline"
          >
            <Download className="size-4" /> Descargar guía comercial 2026 (PDF)
          </a>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-5 text-center text-xs text-primary-foreground/50">
        Arquitecturas empresariales diseñadas desde el problema · Netlife Business 2026
      </div>
    </footer>
  );
}
