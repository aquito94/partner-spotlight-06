import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, ChevronRight, ShieldCheck } from "lucide-react";
import { useState } from "react";

import executiveOperationsImage from "@/assets/netlife-executive-operations.jpg";
import { Button } from "@/components/ui/button";
import {
  architectureLayers,
  businessAreas,
  businessObjectives,
  enterpriseCapabilities,
  industries,
  outcomeKpis,
  roiMethod,
  securityPillars,
} from "@/data/enterprise";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Netlife Business · Sistemas inteligentes para resultados empresariales" },
      { name: "description", content: "Diagnosticamos problemas empresariales y diseñamos arquitecturas con IA, automatización, datos, integraciones y desarrollo a medida." },
      { property: "og:title", content: "Netlife Business · Del problema a un sistema inteligente" },
      { property: "og:description", content: "Estrategia, IA, automatización, datos, omnicanalidad e integraciones conectadas a resultados de negocio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const before = ["Excel y correos", "Seguimiento manual", "Sistemas separados", "Datos dispersos", "Reportes atrasados"];
const after = ["Canales conectados", "Datos centralizados", "IA y automatización", "Alertas y predicción", "Decisiones trazables"];

function Home() {
  const [objective, setObjective] = useState(businessObjectives[0]);
  const [area, setArea] = useState<(typeof businessAreas)[number]>(businessAreas[0]);
  const [industry, setIndustry] = useState<(typeof industries)[number]>(industries[0]);

  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-border bg-card">
        <div className="absolute inset-0 enterprise-grid opacity-45" />
        <div className="relative mx-auto grid max-w-[90rem] items-center gap-14 px-5 py-16 lg:min-h-[46rem] lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Arquitectura empresarial orientada a resultados</p>
            <h1 className="mt-6 text-5xl leading-[0.98] font-normal text-balance sm:text-6xl lg:text-7xl">
              Transformamos problemas de negocio en <span className="italic text-primary">sistemas inteligentes.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80 sm:text-xl">
              Conectamos inteligencia artificial, automatización, datos, canales e integraciones para transformar ventas, servicio, operaciones y toma de decisiones.
            </p>
            <p className="mt-5 max-w-xl border-l-2 border-cyan pl-4 text-sm leading-relaxed text-muted-foreground">
              No comenzamos por la tecnología. Comenzamos identificando dónde tu empresa pierde ingresos, tiempo, productividad, información o clientes.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/diagnostico">Diagnosticar una oportunidad <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><a href="#capacidades">Explorar capacidades <ArrowDown /></a></Button>
            </div>
          </div>
          <EnterpriseFlow />
        </div>
      </section>

      <section className="border-b border-border bg-foreground text-background">
        <div className="mx-auto grid max-w-[90rem] lg:grid-cols-[1.08fr_0.92fr]">
          <figure className="relative min-h-[22rem] overflow-hidden lg:min-h-[34rem]">
            <img
              src={executiveOperationsImage}
              alt="Equipo ejecutivo analizando indicadores operativos y recorridos de clientes"
              width={1600}
              height={900}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/15" aria-hidden="true" />
          </figure>
          <div className="flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-16">
            <p className="text-xs font-semibold tracking-[0.18em] text-cyan uppercase">Visión integral de la operación</p>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-background sm:text-5xl">
              Una decisión tecnológica comienza con una lectura precisa del negocio.
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-background/70">
              Conectamos procesos, experiencia del cliente, datos y sistemas para revelar dónde existe fricción y qué arquitectura puede producir un resultado medible.
            </p>
            <div className="mt-9 grid grid-cols-3 gap-4 border-t border-background/20 pt-6">
              {[["01", "Diagnóstico"], ["02", "Arquitectura"], ["03", "Medición"]].map(([number, label]) => (
                <div key={number}>
                  <span className="font-mono text-xs text-cyan">{number}</span>
                  <p className="mt-2 text-sm text-background/80">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="resultados" className="scroll-mt-24 border-b border-border bg-background py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Diagnóstico ejecutivo" title="¿Dónde está perdiendo valor tu empresa?" text="Selecciona el objetivo. Traducimos la intención en procesos observables y métricas que permitan construir un caso de negocio." />
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
              {businessObjectives.map((item) => (
                <button key={item.id} type="button" onClick={() => setObjective(item)} aria-pressed={objective.id === item.id} className={`flex min-h-12 items-center justify-between rounded-md border px-4 py-3 text-left text-sm transition-all ${objective.id === item.id ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:border-primary/50"}`}>
                  <span>{item.label}</span><ChevronRight className="size-4 shrink-0" />
                </button>
              ))}
            </div>
            <div className="relative min-h-[32rem] overflow-hidden rounded-lg bg-ink p-7 text-primary-foreground sm:p-10">
              <div className="absolute inset-0 enterprise-grid opacity-10" />
              <div className="relative">
                <p className="text-xs tracking-[0.18em] text-cyan uppercase">Señal operativa</p>
                <h3 className="mt-4 text-3xl font-normal sm:text-4xl">{objective.label}</h3>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-primary-foreground/70">{objective.signal}</p>
                <div className="mt-10 grid gap-8 sm:grid-cols-2">
                  <div><p className="text-xs uppercase text-primary-foreground/40">Procesos a revisar</p><ul className="mt-4 space-y-3">{objective.processes.map((item) => <li key={item} className="flex gap-3 text-sm"><ArrowRight className="mt-0.5 size-4 text-cyan" />{item}</li>)}</ul></div>
                  <div><p className="text-xs uppercase text-primary-foreground/40">Métricas de referencia</p><div className="mt-4 flex flex-wrap gap-2">{objective.metrics.map((item) => <span key={item} className="rounded-md border border-primary-foreground/15 px-3 py-2 text-sm">{item}</span>)}</div></div>
                </div>
                <Button asChild variant="secondary" className="mt-10"><Link to="/diagnostico">Profundizar diagnóstico <ArrowRight /></Link></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="capacidades" className="scroll-mt-24 bg-card py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Sistema modular" title="Una arquitectura. Múltiples capacidades." text="No desplegamos piezas aisladas. Combinamos capacidades según el proceso, los sistemas existentes y el resultado que necesita medir la organización." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
            {enterpriseCapabilities.map((capability) => <CapabilityCard key={capability.id} capability={capability} />)}
          </div>
          <div className="mt-8 flex justify-end"><Button asChild variant="outline"><Link to="/soluciones">Ver mapa completo de capacidades <ArrowRight /></Link></Button></div>
        </div>
      </section>

      <section id="areas" className="scroll-mt-24 bg-surface py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Impacto transversal" title="Transformar por área de negocio" text="La misma arquitectura puede resolver fricciones distintas. El punto de entrada siempre es el proceso y su impacto." />
          <div className="mt-10 flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Áreas de negocio">
            {businessAreas.map((item) => <button key={item.name} type="button" role="tab" aria-selected={area.name === item.name} onClick={() => setArea(item)} className={`shrink-0 rounded-md border px-4 py-2.5 text-sm ${area.name === item.name ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-muted-foreground"}`}>{item.name}</button>)}
          </div>
          <div className="mt-6 grid overflow-hidden rounded-lg border border-border bg-card md:grid-cols-5">
            {[{ label: "Problema", value: area.problem }, { label: "Causa", value: area.cause }, { label: "Impacto", value: area.impact }, { label: "Capacidad tecnológica", value: area.capability }, { label: "Resultado esperado", value: area.result }].map((item, index) => <div key={item.label} className="border-b border-border p-6 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0"><p className="text-xs font-semibold text-primary uppercase">0{index + 1} · {item.label}</p><p className="mt-4 text-sm leading-relaxed text-foreground/75">{item.value}</p></div>)}
          </div>
        </div>
      </section>

      <section id="industrias" className="scroll-mt-24 bg-card py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Escenarios de aplicación" title="La industria cambia. El método permanece." text="Entendemos el flujo operativo antes de definir la combinación tecnológica." />
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-2">{industries.map((item) => <button type="button" key={item.name} onClick={() => setIndustry(item)} className={`rounded-md border p-4 text-left text-sm transition-colors ${industry.name === item.name ? "border-primary bg-secondary text-primary" : "border-border bg-background hover:border-primary/50"}`}>{item.name}</button>)}</div>
            <div className="rounded-lg border border-border bg-background p-8 sm:p-10"><p className="text-xs text-primary uppercase">{industry.name}</p><h3 className="mt-3 text-3xl">Procesos donde suele existir valor por recuperar.</h3><div className="mt-8 space-y-3">{industry.processes.map((process, index) => <div key={process} className="flex items-center gap-4 border-b border-border pb-3"><span className="text-xs text-muted-foreground">0{index + 1}</span><span>{process}</span></div>)}</div><p className="mt-8 text-xs text-muted-foreground">Escenario representativo. La arquitectura y los resultados se definen después del diagnóstico.</p></div>
          </div>
        </div>
      </section>

      <section className="bg-ink py-24 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading dark eyebrow="Caso de negocio" title="Del problema al ROI" text="Antes de elegir tecnología construimos una línea base, cuantificamos la oportunidad y acordamos cómo medir el resultado." />
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-primary-foreground/15 bg-primary-foreground/15 md:grid-cols-3 lg:grid-cols-6">{roiMethod.map((item) => <div key={item.step} className="bg-ink p-6"><p className="text-xs text-cyan">{item.step}</p><h3 className="mt-5 text-xl">{item.title}</h3><p className="mt-3 text-sm leading-relaxed text-primary-foreground/55">{item.question}</p></div>)}</div>
          <div className="mt-10 flex flex-wrap gap-2">{outcomeKpis.map((kpi) => <span key={kpi} className="rounded-md border border-primary-foreground/15 px-3 py-2 text-xs text-primary-foreground/65">{kpi}</span>)}</div>
          <p className="mt-16 max-w-4xl font-display text-3xl leading-tight sm:text-5xl">No implementamos IA para decir que usamos IA. <span className="italic text-cyan">La implementamos cuando existe un caso de negocio.</span></p>
        </div>
      </section>

      <section id="casos" className="scroll-mt-24 bg-background py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Cambio operativo" title="De fragmentación a una operación conectada" />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="rounded-lg border border-border bg-card p-8"><p className="text-xs text-muted-foreground uppercase">Antes</p><ul className="mt-6 space-y-4">{before.map((item) => <li key={item} className="flex items-center gap-3 text-muted-foreground"><span className="size-1.5 bg-muted-foreground" />{item}</li>)}</ul></div>
            <div className="rounded-lg border border-primary/30 bg-secondary p-8"><p className="text-xs text-primary uppercase">Después</p><ul className="mt-6 space-y-4">{after.map((item) => <li key={item} className="flex items-center gap-3"><Check className="size-4 text-primary" />{item}</li>)}</ul></div>
          </div>
        </div>
      </section>

      <section id="arquitectura" className="scroll-mt-24 bg-card py-24">
        <div className="mx-auto max-w-7xl px-5">
          <SectionHeading eyebrow="Arquitectura visual" title="Cada capa conectada al resultado empresarial" text="La inteligencia funciona cuando puede leer contexto, ejecutar acciones y devolver señales útiles a toda la organización." />
          <ArchitectureMap />
        </div>
      </section>

      <section id="seguridad" className="scroll-mt-24 border-y border-border bg-surface py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div><p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Seguridad y gobierno</p><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">La innovación empresarial necesita velocidad. <span className="italic text-primary">También control.</span></h2><p className="mt-6 text-muted-foreground">Diseñamos trazabilidad, accesos e integración segura como parte de la arquitectura, no como una revisión posterior.</p></div>
          <div><div className="grid gap-3 sm:grid-cols-2">{securityPillars.map((item) => <div key={item} className="flex items-center gap-3 rounded-md border border-border bg-card p-4 text-sm"><ShieldCheck className="size-5 text-primary" />{item}</div>)}</div><div className="mt-5 flex flex-wrap gap-2"><span className="rounded-md border border-border bg-card px-3 py-2 text-xs">ISO/IEC 27001 (AENOR)</span><span className="rounded-md border border-border bg-card px-3 py-2 text-xs">PCI DSS Verified</span></div></div>
        </div>
      </section>

      <section className="bg-card py-24">
        <div className="mx-auto max-w-5xl px-5 text-center"><p className="text-xs font-semibold tracking-[0.18em] text-primary uppercase">Siguiente decisión</p><h2 className="mt-5 text-4xl leading-tight sm:text-6xl">No necesitas saber qué tecnología comprar. <span className="italic text-primary">Necesitas saber qué problema vale la pena resolver.</span></h2><p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">Cuéntanos qué proceso quieres mejorar. Analizamos la operación, identificamos la oportunidad y diseñamos la arquitectura adecuada.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild size="lg"><Link to="/diagnostico">Quiero identificar una oportunidad <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/oportunidad">Hablar con un consultor</Link></Button></div></div>
      </section>
    </div>
  );
}

function SectionHeading({ eyebrow, title, text, dark = false }: { eyebrow: string; title: string; text?: string; dark?: boolean }) {
  return <div className="max-w-3xl"><p className={`text-xs font-semibold tracking-[0.18em] uppercase ${dark ? "text-cyan" : "text-primary"}`}>{eyebrow}</p><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">{title}</h2>{text && <p className={`mt-5 max-w-2xl leading-relaxed ${dark ? "text-primary-foreground/60" : "text-muted-foreground"}`}>{text}</p>}</div>;
}

function CapabilityCard({ capability }: { capability: (typeof enterpriseCapabilities)[number] }) {
  const Icon = capability.icon;
  return <article className={`relative bg-card p-7 ${capability.featured ? "md:col-span-2 lg:col-span-2" : ""}`}><div className="flex items-start justify-between gap-4"><div className="flex size-10 items-center justify-center rounded-md bg-secondary"><Icon className="size-5 text-primary" /></div>{capability.featured && <span className="text-xs text-primary uppercase">Arquitectura a medida</span>}</div><h3 className="mt-8 text-2xl leading-tight">{capability.title}</h3><p className="mt-4 text-sm leading-relaxed text-muted-foreground">{capability.description}</p><ul className="mt-6 space-y-2">{capability.items.map((item) => <li key={item} className="flex gap-2 text-sm"><span className="mt-2 size-1 shrink-0 bg-cyan" />{item}</li>)}</ul>{capability.statement && <p className="mt-6 border-t border-border pt-5 text-sm font-medium text-primary">{capability.statement}</p>}</article>;
}

function EnterpriseFlow() {
  const nodes = ["Clientes", "Canales", "IA", "Datos", "Automatización", "Sistemas empresariales", "Decisiones"];
  return <div className="relative rounded-lg border border-border bg-background/90 p-6 shadow-xl shadow-primary/5 sm:p-8"><div className="absolute inset-0 enterprise-grid opacity-40" /><div className="relative"><div className="flex items-center justify-between"><p className="text-xs tracking-[0.18em] text-primary uppercase">Sistema conectado</p><span className="flex items-center gap-2 text-xs text-muted-foreground"><span className="size-2 rounded-full bg-cyan" /> Flujo activo</span></div><div className="mt-8 space-y-2">{nodes.map((node, i) => <div key={node}>{i > 0 && <div className="mx-auto h-6 w-px signal-line" />}<div className={`flex min-h-14 items-center justify-between rounded-md border px-5 ${i === nodes.length - 1 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}><span className="text-xs text-muted-foreground">0{i + 1}</span><span className="font-medium">{node}</span><span className="size-2 rounded-full border border-cyan bg-cyan/20" /></div></div>)}</div></div></div>;
}

function ArchitectureMap() {
  return <div className="relative mt-14 rounded-lg border border-border bg-background p-5 sm:p-8"><div className="absolute inset-0 enterprise-grid opacity-30" /><div className="relative grid gap-3">{architectureLayers.map((layer, i) => <div key={layer.name}>{i > 0 && <div className="mx-auto h-6 w-px signal-line" />}<div className={`grid gap-4 rounded-md border p-5 md:grid-cols-[0.35fr_1fr] md:items-center ${i === architectureLayers.length - 1 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}><div><span className={`text-xs ${i === architectureLayers.length - 1 ? "text-primary-foreground/60" : "text-primary"}`}>0{i + 1}</span><h3 className="mt-1 text-xl">{layer.name}</h3></div><div className="flex flex-wrap gap-2">{layer.items.map((item) => <span key={item} className={`rounded-md border px-3 py-2 text-xs ${i === architectureLayers.length - 1 ? "border-primary-foreground/20" : "border-border bg-background"}`}>{item}</span>)}</div></div></div>)}</div></div>;
}