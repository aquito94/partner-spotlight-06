import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Filter } from "lucide-react";
import { useMemo, useState } from "react";

import { SolutionDemo } from "@/components/site/SolutionDemo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  priceDisclaimer,
  problemTags,
  sectors,
  solutions,
  type ProblemTag,
  type Sector,
} from "@/data/portfolio";

export const Route = createFileRoute("/soluciones/")({
  head: () => ({
    meta: [
      { title: "Portafolio de soluciones · Netlife Business" },
      {
        name: "description",
        content:
          "Nueve soluciones: Agente IA, CRM/CX, Power Inbox AI, dashboards, integraciones, automatizaciones, adopción de IA, Gastro.ec y cámaras. Filtra por sector, problema y precio.",
      },
      { property: "og:title", content: "Portafolio de soluciones · Netlife Business" },
      {
        property: "og:description",
        content: "Filtra las soluciones por sector, tipo de problema y precio de entrada.",
      },
    ],
  }),
  component: SolutionsIndex,
});

function SolutionsIndex() {
  const [sector, setSector] = useState<Sector | "todos">("todos");
  const [tag, setTag] = useState<ProblemTag | "todos">("todos");
  const [maxMonthly, setMaxMonthly] = useState(400);

  const filtered = useMemo(
    () =>
      solutions.filter((s) => {
        if (sector !== "todos" && !s.sectors.includes(sector)) return false;
        if (tag !== "todos" && !s.tags.includes(tag)) return false;
        if (s.monthlyFrom !== null && s.monthlyFrom > maxMonthly) return false;
        return true;
      }),
    [sector, tag, maxMonthly],
  );

  return (
    <div className="mx-auto max-w-7xl px-5 py-14">
      <p className="text-xs tracking-widest text-primary uppercase">Portafolio base</p>
      <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
        Puertas de entrada para abrir conversaciones
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        La solución se elige después del problema. Filtra por sector, tipo de fricción y presupuesto
        aproximado.
      </p>

      <Card className="mt-8 border-border/70 bg-surface/70 p-6">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Filter className="size-4 text-primary" /> Filtros
        </div>

        <div className="mt-5 space-y-5">
          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Sector</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <FilterChip active={sector === "todos"} onClick={() => setSector("todos")}>
                Todos
              </FilterChip>
              {sectors.map((s) => (
                <FilterChip key={s} active={sector === s} onClick={() => setSector(s)}>
                  {s}
                </FilterChip>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs tracking-widest text-muted-foreground uppercase">Problema</p>
            <div className="mt-2 flex flex-wrap gap-2">
              <FilterChip active={tag === "todos"} onClick={() => setTag("todos")}>
                Todos
              </FilterChip>
              {problemTags.map((t) => (
                <FilterChip key={t.id} active={tag === t.id} onClick={() => setTag(t.id)}>
                  {t.label}
                </FilterChip>
              ))}
            </div>
          </div>

          <div className="max-w-md">
            <div className="flex items-center justify-between text-xs tracking-widest text-muted-foreground uppercase">
              <span>Precio de entrada mensual</span>
              <span className="text-primary">
                {maxMonthly >= 400 ? "Sin límite" : `hasta $${maxMonthly}`}
              </span>
            </div>
            <Slider
              className="mt-4"
              value={[maxMonthly]}
              min={10}
              max={400}
              step={10}
              onValueChange={(v) => setMaxMonthly(v[0] ?? 400)}
            />
          </div>
        </div>
      </Card>

      <p className="mt-6 text-sm text-muted-foreground">
        {filtered.length} de {solutions.length} soluciones
      </p>

      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <Card
            key={s.slug}
            className="flex flex-col overflow-hidden border-border/70 bg-surface/70 p-0"
          >
            <SolutionDemo demo={s.demo} name={s.name} className="rounded-none border-0" />
            <div className="flex flex-1 flex-col p-6">
              <p className="text-xs tracking-widest text-muted-foreground">{s.code}</p>
              <p className="mt-1 font-display text-xl font-semibold">{s.name}</p>
              <p className="text-sm text-primary">{s.tagline}</p>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{s.pitch}</p>
              <p className="mt-4 text-sm">{s.entryPrice}</p>
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link to="/soluciones/$slug" params={{ slug: s.slug }}>
                  Ver detalle <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {filtered.length === 0 && (
        <Card className="mt-6 border-border/70 bg-surface/70 p-8 text-center text-sm text-muted-foreground">
          Ninguna solución cumple esos filtros. Amplía el presupuesto o cambia el sector.
        </Card>
      )}

      <p className="mt-8 text-xs text-muted-foreground">{priceDisclaimer}</p>
    </div>
  );
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-sm transition-colors ${
        active
          ? "border-primary bg-primary/15 text-primary"
          : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground"
      }`}
    >
      {children}
    </button>
  );
}
