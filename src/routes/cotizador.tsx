import { createFileRoute, Link } from "@tanstack/react-router";
import { Info } from "lucide-react";
import { useMemo, useState } from "react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { priceDisclaimer, solutions } from "@/data/portfolio";

export const Route = createFileRoute("/cotizador")({
  head: () => ({
    meta: [
      { title: "Cotizador referencial · Netlife Business" },
      {
        name: "description",
        content:
          "Estima un rango mensual y de implementación según las soluciones, usuarios y cámaras que necesita el cliente.",
      },
      { property: "og:title", content: "Cotizador referencial · Netlife Business" },
      {
        property: "og:description",
        content: "Valores de entrada para orientar la conversación antes del discovery.",
      },
    ],
  }),
  component: Cotizador,
});

const money = (n: number) =>
  n.toLocaleString("es-EC", { style: "currency", currency: "USD", maximumFractionDigits: 0 });

function Cotizador() {
  const [picked, setPicked] = useState<string[]>(["agente-ia"]);
  const [users, setUsers] = useState(5);
  const [cameras, setCameras] = useState(4);

  const toggle = (slug: string) =>
    setPicked((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  const estimate = useMemo(() => {
    let monthly = 0;
    let setup = 0;

    picked.forEach((slug) => {
      const s = solutions.find((x) => x.slug === slug);
      if (!s) return;
      setup += s.setupFrom ?? 0;
      if (s.monthlyFrom === null) return;
      if (s.slug === "camaras") {
        monthly += s.monthlyFrom * cameras;
        return;
      }
      const extraUsers = Math.max(0, users - 3);
      const perUser = s.slug === "crm-cx" ? 25 : s.slug === "power-inbox-ai" ? 15 : 8;
      monthly += s.monthlyFrom + extraUsers * perUser;
    });

    return { monthly, setup, monthlyMax: Math.round(monthly * 1.45), setupMax: Math.round(setup * 1.6) };
  }, [picked, users, cameras]);

  const summary = `Estimación referencial Netlife Business
Soluciones: ${picked
    .map((p) => solutions.find((s) => s.slug === p)?.name)
    .filter(Boolean)
    .join(", ")}
Usuarios: ${users} · Cámaras: ${cameras}
Mensual estimado: ${money(estimate.monthly)} – ${money(estimate.monthlyMax)}
Implementación estimada: ${money(estimate.setup)} – ${money(estimate.setupMax)}
${priceDisclaimer}`;

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs tracking-widest text-primary uppercase">Modelo comercial</p>
      <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">Cotizador referencial</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Sirve para ordenar la conversación, no para cerrar precio. El valor final depende de alcance,
        módulos, volumen e integraciones.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <Card className="border-border/70 bg-surface/70 p-6">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            1. Soluciones a considerar
          </p>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
            {solutions.map((s) => {
              const active = picked.includes(s.slug);
              return (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => toggle(s.slug)}
                  className={`rounded-lg border p-4 text-left transition-colors ${
                    active
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary/30 hover:border-primary/40"
                  }`}
                >
                  <p className="text-sm font-medium">{s.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{s.entryPrice}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <div className="flex items-center justify-between text-xs tracking-widest text-muted-foreground uppercase">
                <span>Usuarios</span>
                <span className="text-primary">{users}</span>
              </div>
              <Slider
                className="mt-4"
                value={[users]}
                min={1}
                max={100}
                step={1}
                onValueChange={(v) => setUsers(v[0] ?? 1)}
              />
            </div>
            <div>
              <div className="flex items-center justify-between text-xs tracking-widest text-muted-foreground uppercase">
                <span>Cámaras</span>
                <span className="text-primary">{cameras}</span>
              </div>
              <Slider
                className="mt-4"
                value={[cameras]}
                min={0}
                max={64}
                step={1}
                onValueChange={(v) => setCameras(v[0] ?? 0)}
              />
            </div>
          </div>
        </Card>

        <div className="space-y-5">
          <Card className="border-primary/30 bg-primary/5 p-6">
            <div className="flex items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 p-4">
              <Info className="mt-0.5 size-5 shrink-0 text-primary" />
              <p className="text-sm text-foreground">
                <span className="font-semibold">Cotización final siempre con el asesor.</span>{" "}
                Los valores de este cotizador son solo estimaciones referenciales; el precio real
                se define directamente con tu asesor Netlife Business.
              </p>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Rango mensual estimado</p>
            <p className="font-display text-3xl font-semibold">
              {money(estimate.monthly)}{" "}
              <span className="text-lg text-muted-foreground">– {money(estimate.monthlyMax)}</span>
            </p>
            <p className="mt-4 text-sm text-muted-foreground">Implementación estimada (una vez)</p>
            <p className="font-display text-2xl font-semibold">
              {money(estimate.setup)}{" "}
              <span className="text-base text-muted-foreground">– {money(estimate.setupMax)}</span>
            </p>
            <p className="mt-4 text-xs text-muted-foreground">{priceDisclaimer}</p>
          </Card>

          <Card className="border-border/70 bg-surface/70 p-6">
            <p className="text-xs tracking-widest text-muted-foreground uppercase">
              Resumen para copiar
            </p>
            <pre className="mt-3 max-h-56 overflow-auto rounded-md bg-background/60 p-3 text-xs whitespace-pre-wrap text-muted-foreground">
              {summary}
            </pre>
            <Button
              className="mt-4 w-full"
              variant="outline"
              onClick={() => navigator.clipboard?.writeText(summary)}
            >
              Copiar resumen
            </Button>
            <Button asChild className="mt-2 w-full">
              <Link to="/oportunidad">Registrar oportunidad</Link>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
