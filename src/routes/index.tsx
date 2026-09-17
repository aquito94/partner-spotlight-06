import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calculator, ClipboardList, Compass, Sparkles } from "lucide-react";

import { SolutionDemo } from "@/components/site/SolutionDemo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { priceDisclaimer, solutions, trustBadges, trustStatement } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Netlife Business · Portafolio de automatización, datos e IA" },
      {
        name: "description",
        content:
          "Explora el portafolio de Netlife Business: agentes de IA, CRM, dashboards, integraciones, automatizaciones y más. Diagnóstico guiado y cotizador referencial.",
      },
      { property: "og:title", content: "Netlife Business · Portafolio para partners y clientes" },
      {
        property: "og:description",
        content:
          "Detecta el problema, encuentra la solución y estima la inversión. Portafolio interactivo de automatización, datos e IA.",
      },
    ],
  }),
  component: Home,
});

const tools = [
  {
    to: "/soluciones",
    icon: Compass,
    title: "Explorar soluciones",
    text: "Nueve puertas de entrada, filtrables por sector, problema y precio.",
  },
  {
    to: "/diagnostico",
    icon: Sparkles,
    title: "Diagnóstico guiado",
    text: "Responde por síntomas y recibe una recomendación priorizada.",
  },
  {
    to: "/cotizador",
    icon: Calculator,
    title: "Cotizador referencial",
    text: "Estima un rango mensual e implementación según el alcance.",
  },
  {
    to: "/oportunidad",
    icon: ClipboardList,
    title: "Registrar oportunidad",
    text: "Arma el caso con todo el contexto para escalarlo a Netlife.",
  },
] as const;

const fronts = [
  { title: "ERP", subtitle: "Operación" },
  { title: "CRM", subtitle: "Clientes" },
  { title: "Datos", subtitle: "Registro" },
  { title: "IA", subtitle: "Decisión" },
];

function Home() {
  const featured = solutions.filter((s) =>
    ["agente-ia", "crm-cx", "dashboards", "automatizaciones"].includes(s.slug),
  );

  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/70">
        <div className="absolute inset-0 line-grid opacity-30" />
        <div className="absolute inset-0 grid-backdrop" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs tracking-widest text-primary uppercase">
              Programa aliado estratégico
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold sm:text-5xl lg:text-6xl">
              No vendemos <span className="text-muted-foreground line-through">un bot</span>.
              <br />
              <span className="text-gradient-brand">Resolvemos el problema del negocio.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-muted-foreground">
              Detecta dónde una empresa pierde tiempo, oportunidades, dinero o visibilidad. Desde
              ese problema construimos la solución con automatización, datos e Inteligencia
              Artificial.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link to="/soluciones">
                  Ver portafolio <ArrowRight className="ml-1 size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/diagnostico">Hacer el diagnóstico</Link>
              </Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {trustBadges.map((b) => (
                <span
                  key={b}
                  className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
                >
                  {b}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <SolutionDemo demo="dashboards" name="Dashboards ejecutivos" />
            <Card className="border-border/70 bg-surface/80 p-5">
              <p className="text-sm text-muted-foreground">{trustStatement}</p>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">Cuatro frentes. Un objetivo.</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Que el cliente opere mejor: conectar datos, automatizar procesos y dar visibilidad para
          decidir.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-4">
          {fronts.map((f) => (
            <Card key={f.title} className="border-border/70 bg-surface/70 p-6">
              <p className="font-display text-xl font-semibold text-primary">{f.title}</p>
              <p className="mt-1 text-xs tracking-widest text-muted-foreground uppercase">
                {f.subtitle}
              </p>
            </Card>
          ))}
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Card className="border-primary/30 bg-primary/5 p-6">
            <p className="text-xs tracking-widest text-primary uppercase">Automatización</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Elimina trabajo repetitivo y puntos de error entre sistemas y equipos.
            </p>
          </Card>
          <Card className="border-primary/30 bg-primary/5 p-6">
            <p className="text-xs tracking-widest text-primary uppercase">Dashboard ejecutivo</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Lo que estaba oculto se vuelve visible para decidir a tiempo.
            </p>
          </Card>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16">
        <h2 className="text-2xl font-semibold sm:text-3xl">Herramientas de esta plataforma</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t) => (
            <Link key={t.to} to={t.to} className="group">
              <Card className="h-full border-border/70 bg-surface/70 p-6 transition-colors group-hover:border-primary/50">
                <t.icon className="size-6 text-primary" />
                <p className="mt-4 font-display text-lg font-semibold">{t.title}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.text}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-primary">
                  Entrar <ArrowRight className="size-4" />
                </span>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold sm:text-3xl">Puertas de entrada más usadas</h2>
            <p className="mt-2 text-muted-foreground">
              La solución se elige después del problema.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link to="/soluciones">Ver las 9 soluciones</Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {featured.map((s) => (
            <Card key={s.slug} className="overflow-hidden border-border/70 bg-surface/70 p-0">
              <SolutionDemo demo={s.demo} name={s.name} className="rounded-none border-0" />
              <div className="p-6">
                <p className="text-xs tracking-widest text-muted-foreground">{s.code}</p>
                <p className="mt-1 font-display text-xl font-semibold">{s.name}</p>
                <p className="mt-2 text-sm text-muted-foreground">{s.pitch}</p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="text-sm text-primary">{s.entryPrice}</span>
                  <Link
                    to="/soluciones/$slug"
                    params={{ slug: s.slug }}
                    className="inline-flex items-center gap-1 text-sm hover:underline"
                  >
                    Ver detalle <ArrowRight className="size-4" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">{priceDisclaimer}</p>
      </section>
    </div>
  );
}
