import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, RotateCcw } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  discoveryObjective,
  discoveryQuestions,
  kpis,
  qualificationRule,
  sectors,
  solutions,
  symptoms,
  type Sector,
} from "@/data/portfolio";
import { getCapabilityName } from "@/data/enterprise";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico guiado · Netlife Business" },
      {
        name: "description",
        content:
          "Responde por síntomas del negocio y recibe soluciones recomendadas, preguntas de discovery y KPIs para medir el resultado.",
      },
      { property: "og:title", content: "Diagnóstico guiado · Netlife Business" },
      {
        property: "og:description",
        content: "Del problema y su impacto a una arquitectura priorizada de capacidades.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Diagnostico,
});

function Diagnostico() {
  const [sector, setSector] = useState<Sector | "">("");
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const toggle = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]));

  const ranking = useMemo(() => {
    const scores = new Map<string, number>();
    selected.forEach((id) => {
      const symptom = symptoms.find((s) => s.id === id);
      symptom?.recommends.forEach((slug, index) => {
        scores.set(slug, (scores.get(slug) ?? 0) + (3 - index));
      });
    });
    return [...scores.entries()]
      .map(([slug, score]) => {
        const solution = solutions.find((s) => s.slug === slug);
        if (!solution) return undefined;
        const sectorFit = sector && solution.sectors.includes(sector) ? 1 : 0;
        return { solution, score: score + sectorFit };
      })
      .filter((item): item is { solution: (typeof solutions)[number]; score: number } => Boolean(item))
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);
  }, [selected, sector]);

  const reset = () => {
    setSelected([]);
    setSector("");
    setSubmitted(false);
  };

  return (
    <div className="mx-auto max-w-5xl px-5 py-14">
      <p className="text-xs tracking-widest text-primary uppercase">Detectar oportunidades</p>
      <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
        Identifica qué problema vale la pena resolver
      </h1>
      <p className="mt-3 text-muted-foreground">
        Selecciona las señales operativas. Construiremos una hipótesis de impacto, capacidades
        combinadas y métricas para validar en el diagnóstico.
      </p>

      <Card className="mt-8 border-border/70 bg-surface/70 p-6">
        <p className="text-xs tracking-widest text-muted-foreground uppercase">
          1. Sector del cliente (opcional)
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {sectors.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSector(sector === s ? "" : s)}
              className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
                sector === s
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
              }`}
            >
              {s}
            </button>
          ))}
        </div>

        <p className="mt-8 text-xs tracking-widest text-muted-foreground uppercase">
          2. Síntomas que menciona
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {symptoms.map((s) => {
            const active = selected.includes(s.id);
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => toggle(s.id)}
                className={`rounded-lg border p-4 text-left transition-colors ${
                  active
                    ? "border-primary bg-primary/10"
                    : "border-border bg-secondary/30 hover:border-primary/40"
                }`}
              >
                <p className="text-sm font-medium">{s.label}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.detail}</p>
              </button>
            );
          })}
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button disabled={selected.length === 0} onClick={() => setSubmitted(true)}>
            Ver recomendación <ArrowRight className="ml-1 size-4" />
          </Button>
          <Button variant="outline" onClick={reset}>
            <RotateCcw className="mr-1 size-4" /> Reiniciar
          </Button>
        </div>
      </Card>

      {submitted && ranking.length > 0 && (
        <div className="mt-10 space-y-8">
          <section>
            <h2 className="text-3xl font-normal">Arquitectura de capacidades recomendada</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Priorizadas según los síntomas marcados{sector ? ` y el sector ${sector}` : ""}.
            </p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {ranking.map(({ solution }, i) => (
                <Card key={solution.slug} className="border-border/70 bg-surface/70 p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary">
                      Prioridad {i + 1}
                    </span>
                    <span className="text-xs text-muted-foreground">{solution.entryPrice}</span>
                  </div>
                  <p className="mt-3 font-display text-2xl font-semibold">{getCapabilityName(solution.slug, solution.name)}</p>
                  <p className="mt-1 text-sm text-primary">{solution.tagline}</p>
                  <p className="mt-3 text-sm text-muted-foreground">{solution.sellsAs}</p>
                  <Link
                    to="/soluciones/$slug"
                    params={{ slug: solution.slug }}
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    Explorar capacidad <ArrowRight className="size-4" />
                  </Link>
                </Card>
              ))}
            </div>
          </section>

          <Card className="border-primary/30 bg-primary/5 p-6">
            <p className="text-xs tracking-widest text-primary uppercase">Regla de calificación</p>
            <p className="mt-2 font-display text-lg leading-snug">{qualificationRule}</p>
          </Card>

          <section className="grid gap-6 md:grid-cols-2">
            <Card className="border-border/70 bg-surface/70 p-6">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Preguntas para el discovery
              </p>
              <ol className="mt-3 space-y-2 text-sm text-muted-foreground">
                {discoveryQuestions.slice(0, 7).map((q, i) => (
                  <li key={q}>
                    <span className="text-primary">{String(i + 1).padStart(2, "0")}</span> {q}
                  </li>
                ))}
              </ol>
              <p className="mt-4 text-xs text-muted-foreground">{discoveryObjective}</p>
            </Card>
            <Card className="border-border/70 bg-surface/70 p-6">
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                KPIs para medir
              </p>
              <div className="mt-3 space-y-4">
                {kpis.map((k) => (
                  <div key={k.area}>
                    <p className="text-sm font-medium">{k.area}</p>
                    <p className="text-sm text-muted-foreground">{k.indicators.join(" · ")}</p>
                  </div>
                ))}
              </div>
            </Card>
          </section>

          <div className="flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/oportunidad">Preparar brief consultivo</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/cotizador">Estimar inversión</Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
