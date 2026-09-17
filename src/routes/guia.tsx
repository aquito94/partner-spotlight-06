import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Download, X } from "lucide-react";

import guia from "@/assets/guia-comercial.pdf.asset.json";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  caseDisclaimer,
  commercialRule,
  discoveryObjective,
  discoveryQuestions,
  escalationMinimum,
  inHouse,
  kpiRecommendation,
  kpis,
  pitch30,
  roles,
  scopeRules,
  sectorCases,
  stages,
} from "@/data/portfolio";

export const Route = createFileRoute("/guia")({
  head: () => ({
    meta: [
      { title: "Guía del aliado · Netlife Business" },
      {
        name: "description",
        content:
          "Flujo de oportunidad en 12 etapas, roles, control de alcance, pitch de 30 segundos, casos por sector y KPIs de éxito.",
      },
      { property: "og:title", content: "Guía del aliado · Netlife Business" },
      {
        property: "og:description",
        content: "Cómo detectar, construir y escalar oportunidades con Netlife Business.",
      },
    ],
  }),
  component: Guia,
});

function Guia() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs tracking-widest text-primary uppercase">Programa aliado estratégico</p>
      <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Guía del aliado</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        El partner que más vende no es el que más habla de tecnología. Es el que mejor detecta el
        problema: detecta → cuantifica → prioriza → construye con Netlife → mide → expande.
      </p>
      <Button asChild variant="outline" className="mt-6">
        <a href={guia.url} target="_blank" rel="noreferrer">
          <Download className="mr-1 size-4" /> Descargar la guía en PDF
        </a>
      </Button>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">De oportunidad a proyecto</h2>
        <p className="mt-2 text-muted-foreground">
          12 etapas para avanzar sin prometer antes de validar.
        </p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {stages.map((s, i) => (
            <Card key={s} className="border-border/70 bg-surface/70 p-4">
              <p className="text-xs text-primary">{String(i + 1).padStart(2, "0")}</p>
              <p className="mt-1 text-sm font-medium">{s}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-4 border-primary/30 bg-primary/5 p-5 text-sm text-muted-foreground">
          <span className="font-medium text-primary">Importante: </span>
          la solución no sale a producción sin validación previa del flujo y criterios de aceptación
          definidos con el cliente.
        </Card>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <Card className="border-border/70 bg-surface/70 p-6">
          <p className="text-xs tracking-widest text-primary uppercase">Aliado estratégico</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {roles.partner.map((r) => (
              <li key={r} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {r}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="border-border/70 bg-surface/70 p-6">
          <p className="text-xs tracking-widest text-primary uppercase">Netlife Business</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {roles.netlife.map((r) => (
              <li key={r} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {r}
              </li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Capacidades In-House</h2>
        <p className="mt-2 text-muted-foreground">
          Cuando el problema no cabe en una caja: evaluamos, diseñamos e implementamos sobre los
          procesos y sistemas del cliente.
        </p>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {inHouse.map((c) => (
            <Card key={c.name} className="border-border/70 bg-surface/70 p-6">
              <p className="font-display text-lg font-semibold">{c.name}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.description}</p>
            </Card>
          ))}
        </div>
        <Card className="mt-4 border-border/70 bg-surface/70 p-6">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Mínimo para escalar un requerimiento
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {escalationMinimum.map((m) => (
              <span
                key={m}
                className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
              >
                {m}
              </span>
            ))}
          </div>
        </Card>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <Card className="border-border/70 bg-surface/70 p-6">
          <p className="text-xs tracking-widest text-primary uppercase">Sí</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {scopeRules.yes.map((r) => (
              <li key={r} className="flex gap-2">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {r}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="border-border/70 bg-surface/70 p-6">
          <p className="text-xs tracking-widest text-destructive uppercase">No</p>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {scopeRules.no.map((r) => (
              <li key={r} className="flex gap-2">
                <X className="mt-0.5 size-4 shrink-0 text-destructive" /> {r}
              </li>
            ))}
          </ul>
        </Card>
        <Card className="border-primary/30 bg-primary/5 p-6 md:col-span-2">
          <p className="text-xs tracking-widest text-primary uppercase">Regla comercial</p>
          <p className="mt-2 font-display text-lg leading-snug">{commercialRule}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Eso no frena la venta. La hace defendible.
          </p>
        </Card>
      </section>

      <section className="mt-14 grid gap-6 md:grid-cols-2">
        <Card className="border-border/70 bg-surface/70 p-6">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Pitch de 30 segundos
          </p>
          <p className="mt-4 text-sm text-muted-foreground">{pitch30.intro}</p>
          <p className="mt-2 text-sm text-muted-foreground">{pitch30.body}</p>
          <p className="mt-2 text-sm font-medium">{pitch30.close}</p>
        </Card>
        <Card className="border-border/70 bg-surface/70 p-6">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Preguntas que abren
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {pitch30.openers.map((o) => (
              <li key={o}>· {o}</li>
            ))}
          </ul>
        </Card>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Las preguntas del discovery</h2>
        <p className="mt-2 text-muted-foreground">{discoveryObjective}</p>
        <div className="mt-6 grid gap-3 md:grid-cols-2">
          {discoveryQuestions.map((q, i) => (
            <Card key={q} className="border-border/70 bg-surface/70 p-4 text-sm">
              <span className="text-primary">{String(i + 1).padStart(2, "0")}</span> {q}
            </Card>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">Casos por sector</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {sectorCases.map((c) => (
            <Card key={c.sector} className="border-border/70 bg-surface/70 p-6">
              <p className="text-xs tracking-widest text-primary uppercase">{c.sector}</p>
              <p className="mt-2 text-sm text-muted-foreground">{c.situation}</p>
              <p className="mt-3 text-sm font-medium">{c.solution}</p>
              <p className="mt-1 text-sm text-muted-foreground">{c.result}</p>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{caseDisclaimer}</p>
      </section>

      <section className="mt-14">
        <h2 className="text-2xl font-semibold">KPIs de éxito</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {kpis.map((k) => (
            <Card key={k.area} className="border-border/70 bg-surface/70 p-6">
              <p className="font-display text-lg font-semibold">{k.area}</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {k.indicators.map((i) => (
                  <li key={i}>· {i}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
        <p className="mt-4 text-xs text-muted-foreground">{kpiRecommendation}</p>
      </section>

      <div className="mt-14 flex flex-wrap gap-3">
        <Button asChild>
          <Link to="/oportunidad">Registrar oportunidad</Link>
        </Button>
        <Button asChild variant="outline">
          <Link to="/diagnostico">Hacer el diagnóstico</Link>
        </Button>
      </div>
    </div>
  );
}
