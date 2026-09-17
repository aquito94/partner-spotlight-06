import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import { SolutionDemo } from "@/components/site/SolutionDemo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  getSolution,
  priceDisclaimer,
  problemTags,
  sectorCases,
  solutions,
} from "@/data/portfolio";

export const Route = createFileRoute("/soluciones/$slug")({
  loader: ({ params }) => {
    const solution = getSolution(params.slug);
    if (!solution) throw notFound();
    return { solution };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Solución no encontrada · Netlife Business" }, { name: "robots", content: "noindex" }],
      };
    }
    const { solution } = loaderData;
    const description = `${solution.pitch} ${solution.entryPrice}.`;
    return {
      meta: [
        { title: `${solution.name} · Netlife Business` },
        { name: "description", content: description },
        { property: "og:title", content: `${solution.name} · Netlife Business` },
        { property: "og:description", content: description },
      ],
    };
  },
  component: SolutionDetail,
});

function SolutionDetail() {
  const { solution } = Route.useLoaderData();
  const related = solutions.filter((s) => s.slug !== solution.slug).slice(0, 3);
  const cases = sectorCases.filter((c) => c.slugs.includes(solution.slug));

  return (
    <div className="mx-auto max-w-7xl px-5 py-12">
      <Link
        to="/soluciones"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Volver al portafolio
      </Link>

      <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <p className="text-xs tracking-widest text-primary uppercase">
            Solución {solution.code}
          </p>
          <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{solution.name}</h1>
          <p className="mt-2 text-lg text-primary">{solution.tagline}</p>
          <p className="mt-5 text-muted-foreground">{solution.pitch}</p>

          <Card className="mt-8 border-primary/30 bg-primary/5 p-6">
            <p className="text-xs tracking-widest text-primary uppercase">Se vende como</p>
            <p className="mt-2 font-display text-xl leading-snug">{solution.sellsAs}</p>
          </Card>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            <div>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Casos de uso
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {solution.useCases.map((u) => (
                  <li key={u} className="flex gap-2">
                    <Check className="mt-0.5 size-4 shrink-0 text-primary" /> {u}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-xs tracking-widest text-muted-foreground uppercase">
                Resultado esperado
              </p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {solution.outcomes.map((o) => (
                  <li key={o} className="flex gap-2">
                    <ArrowRight className="mt-0.5 size-4 shrink-0 text-primary" /> {o}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <SolutionDemo demo={solution.demo} name={solution.name} />

          <Card className="border-border/70 bg-surface/70 p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Valor de entrada
            </p>
            <p className="mt-2 font-display text-2xl font-semibold text-primary">
              {solution.entryPrice}
            </p>
            <p className="mt-3 text-xs text-muted-foreground">{priceDisclaimer}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {solution.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                >
                  {problemTags.find((p) => p.id === t)?.label}
                </span>
              ))}
            </div>
            <div className="mt-6 grid gap-2">
              <Button asChild>
                <Link to="/cotizador">Estimar inversión</Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/oportunidad">Registrar oportunidad</Link>
              </Button>
            </div>
          </Card>

          <Card className="border-border/70 bg-surface/70 p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Sectores donde abre mejor
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {solution.sectors.map((s) => (
                <span key={s} className="rounded-md bg-secondary/60 px-2.5 py-1 text-xs">
                  {s}
                </span>
              ))}
            </div>
          </Card>
        </div>
      </div>

      {cases.length > 0 && (
        <section className="mt-16">
          <h2 className="text-2xl font-semibold">Conversaciones típicas</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {cases.map((c) => (
              <Card key={c.sector} className="border-border/70 bg-surface/70 p-6">
                <p className="text-xs tracking-widest text-primary uppercase">{c.sector}</p>
                <p className="mt-2 text-sm text-muted-foreground">{c.situation}</p>
                <p className="mt-3 text-sm font-medium">{c.solution}</p>
                <p className="mt-1 text-sm text-muted-foreground">{c.result}</p>
              </Card>
            ))}
          </div>
        </section>
      )}

      <section className="mt-16">
        <h2 className="text-2xl font-semibold">Otras puertas de entrada</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {related.map((s) => (
            <Link key={s.slug} to="/soluciones/$slug" params={{ slug: s.slug }} className="group">
              <Card className="h-full border-border/70 bg-surface/70 p-6 transition-colors group-hover:border-primary/50">
                <p className="font-display text-lg font-semibold">{s.name}</p>
                <p className="mt-1 text-sm text-primary">{s.tagline}</p>
                <p className="mt-3 text-sm text-muted-foreground">{s.entryPrice}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
