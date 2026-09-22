import { Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, Check, LockKeyhole, ShieldCheck } from "lucide-react";

import enterpriseOperations from "@/assets/netlife-enterprise-operations.jpg";
import { ArchitectureStack, ConnectionMap } from "@/components/portfolio/ConnectionMap";
import { AreaSelector, GoalSelector } from "@/components/portfolio/InteractiveSelectors";
import { Button } from "@/components/ui/button";
import { architecture, capabilities, industries, kpiList, methodology } from "@/data/enterprise-portfolio";
import { priceDisclaimer, trustBadges } from "@/data/portfolio";

const sectionNav = [
  ["Resultados", "resultados"], ["Capacidades", "capacidades"], ["Áreas", "areas"], ["Industrias", "industrias"], ["Arquitectura", "arquitectura"], ["Seguridad", "seguridad"], ["Casos", "casos"],
] as const;

export function EnterprisePortfolio() {
  return (
    <div className="overflow-hidden bg-background">
      <nav aria-label="Secciones del portafolio" className="sticky top-[81px] z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-5 py-3">
          {sectionNav.map(([label, id]) => <a key={id} href={`#${id}`} className="whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-primary">{label}</a>)}
        </div>
      </nav>

      <section className="relative border-b border-border">
        <div className="absolute inset-0 enterprise-paper-grid opacity-50" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-24">
          <div>
            <p className="eyebrow">Arquitectura empresarial · IA aplicada</p>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] font-semibold sm:text-6xl lg:text-7xl">Transformamos problemas de negocio en <em className="font-serif font-normal text-primary">sistemas inteligentes.</em></h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-foreground/80">Conectamos inteligencia artificial, automatización, datos, canales e integraciones para transformar ventas, servicio, operaciones y toma de decisiones.</p>
            <p className="mt-5 max-w-xl border-l border-primary pl-4 text-sm leading-relaxed text-muted-foreground">No comenzamos por la tecnología. Comenzamos identificando dónde tu empresa pierde ingresos, tiempo, productividad, información o clientes.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg"><Link to="/diagnostico">Diagnosticar una oportunidad <ArrowRight /></Link></Button>
              <Button asChild size="lg" variant="outline"><a href="#capacidades">Explorar capacidades <ArrowDown /></a></Button>
            </div>
          </div>
          <ConnectionMap />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-14">
          <div className="relative h-56 overflow-hidden sm:h-72">
            <img src={enterpriseOperations} alt="Centro empresarial conectado con analítica operativa" width={1600} height={1200} className="h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-gradient-to-r from-enterprise/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 max-w-sm text-sm text-enterprise-foreground sm:bottom-7 sm:left-7">Una operación conectada hace visible el costo, la señal y la decisión.</p>
          </div>
        </div>
      </section>

      <Section id="resultados" eyebrow="Resultados de negocio" title="¿Dónde está perdiendo valor tu empresa?" intro="Selecciona el resultado que buscas. La conversación comienza en el proceso y la métrica, no en una herramienta."><GoalSelector /></Section>

      <section id="capacidades" className="border-y border-border bg-surface py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5">
          <Header eyebrow="Capacidades empresariales" title="Una arquitectura. Múltiples capacidades." intro="Combinamos las capacidades necesarias alrededor del problema. Ninguna opera como una isla." />
          <div className="mt-12 grid gap-px overflow-hidden border border-border bg-border md:grid-cols-2">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return <article key={capability.id} className={`group bg-background p-6 transition-colors hover:bg-card sm:p-8 ${capability.featured ? "md:col-span-2 md:grid md:grid-cols-[0.8fr_1.2fr] md:gap-12 bg-enterprise text-enterprise-foreground" : ""}`}>
                <div>
                  <div className="flex items-center justify-between"><span className="flex size-10 items-center justify-center border border-primary/40 text-primary"><Icon className="size-5" /></span><span className={`text-[10px] tracking-[0.18em] ${capability.featured ? "text-enterprise-muted" : "text-muted-foreground"}`}>0{index + 1}</span></div>
                  <h3 className="mt-7 text-2xl leading-tight sm:text-3xl">{capability.title}</h3>
                  <p className={`mt-4 text-sm leading-relaxed ${capability.featured ? "text-enterprise-muted" : "text-muted-foreground"}`}>{capability.description}</p>
                </div>
                <div className={capability.featured ? "mt-8 md:mt-0" : ""}>
                  <ul className="mt-6 grid gap-2 sm:grid-cols-2">{capability.examples.map((example) => <li key={example} className={`flex gap-2 text-sm ${capability.featured ? "text-enterprise-muted" : "text-foreground/80"}`}><Check className="mt-0.5 size-4 shrink-0 text-primary" />{example}</li>)}</ul>
                  <p className={`mt-7 border-t pt-5 font-display text-lg leading-snug ${capability.featured ? "border-enterprise-line text-enterprise-foreground" : "border-border"}`}>{capability.message}</p>
                  {capability.featured && <><div className="mt-8 flex flex-wrap gap-2">{["Diagnóstico", "Proceso", "Oportunidad", "Arquitectura", "Caso de negocio", "Desarrollo", "Integración", "Pruebas", "Implementación", "Medición"].map((step) => <span key={step} className="border border-enterprise-line px-2.5 py-1 text-[10px] uppercase tracking-[0.1em] text-enterprise-muted">{step}</span>)}</div><p className="mt-5 text-xs text-enterprise-muted">Inversión definida según diagnóstico, alcance, integraciones y complejidad.</p></>}
                </div>
              </article>;
            })}
          </div>
        </div>
      </section>

      <Section id="areas" eyebrow="Transformación transversal" title="Transformar por área de negocio" intro="El mismo problema tecnológico tiene un impacto distinto según el área. Selecciona una función para ver la cadena completa."><AreaSelector /></Section>

      <section id="industrias" className="border-y border-border bg-card py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5"><Header eyebrow="Contexto sectorial" title="La arquitectura cambia con la operación." intro="No trasladamos una solución genérica. Entendemos el proceso que define el desempeño de cada industria." /><div className="mt-12 grid gap-x-10 border-t border-border sm:grid-cols-2 lg:grid-cols-3">{industries.map(([name, process], index) => <article key={name} className="group border-b border-border py-6"><div className="flex items-start justify-between gap-5"><div><p className="font-display text-xl">{name}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{process}</p></div><span className="text-[10px] text-primary">{String(index + 1).padStart(2, "0")}</span></div></article>)}</div></div></section>

      <Section id="casos" eyebrow="Metodología" title="Del problema al ROI" intro="Cada iniciativa se diseña alrededor de una línea base, un impacto económico y un criterio de éxito.">
        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-3">{methodology.map(([title, text], index) => <div key={title} className="bg-background p-6"><span className="text-xs text-primary">0{index + 1}</span><h3 className="mt-8 text-xl">{title}</h3><p className="mt-2 text-sm text-muted-foreground">{text}</p></div>)}</div>
        <div className="mt-10 border-l-2 border-primary bg-enterprise p-7 text-enterprise-foreground sm:p-10"><p className="max-w-4xl font-display text-2xl leading-tight uppercase sm:text-4xl">No implementamos IA para decir que usamos IA. <span className="text-primary">La implementamos cuando existe un caso de negocio.</span></p><div className="mt-8 flex flex-wrap gap-2">{kpiList.map((kpi) => <span key={kpi} className="border border-enterprise-line px-3 py-1.5 text-xs text-enterprise-muted">{kpi}</span>)}</div></div>
      </Section>

      <section className="border-y border-border bg-surface py-20"><div className="mx-auto max-w-7xl px-5"><Header eyebrow="Cambio operacional" title="De fragmentación a inteligencia operativa." /><div className="mt-10 grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center"><StatePanel title="Antes" items={["Excel", "WhatsApp", "Correos", "Personas copiando información", "Sistemas separados", "Seguimiento manual", "Datos dispersos", "Reportes atrasados"]} /><ArrowRight className="mx-auto size-7 rotate-90 text-primary md:rotate-0" /><StatePanel title="Después" after items={["Canales conectados", "Datos centralizados", "IA", "Automatización", "Integraciones", "Alertas", "Predicción", "Trazabilidad", "Decisiones"]} /></div></div></section>

      <section id="arquitectura" className="bg-enterprise py-20 text-enterprise-foreground sm:py-28"><div className="mx-auto max-w-7xl px-5"><Header dark eyebrow="Arquitectura visual" title="Cada capa convierte una señal en una decisión." intro="Canales, inteligencia y sistemas conectados sobre una arquitectura gobernable, medible y diseñada para evolucionar." /><div className="mt-12"><ArchitectureStack layers={architecture} /></div></div></section>

      <section id="seguridad" className="border-b border-border py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Seguridad y gobierno</p><h2 className="mt-4 text-4xl leading-tight sm:text-5xl">Velocidad con control.</h2><p className="mt-5 text-lg leading-relaxed text-muted-foreground">La innovación empresarial necesita velocidad. Pero también seguridad, gobierno y control.</p><div className="mt-8 flex gap-3"><ShieldCheck className="size-8 text-primary" /><LockKeyhole className="size-8 text-primary" /></div></div><div className="grid gap-px border border-border bg-border sm:grid-cols-2">{["Seguridad", "Protección de datos", "Control de accesos", "Integraciones seguras", "Trazabilidad", "Gobierno de información", "Arquitectura empresarial", "Cumplimiento"].map((item) => <div key={item} className="bg-card p-5 text-sm">{item}</div>)}</div><div className="lg:col-span-2 flex flex-wrap gap-2 border-t border-border pt-7">{trustBadges.map((badge) => <span key={badge} className="border border-border bg-card px-3 py-2 text-xs font-medium">{badge}</span>)}</div></div></section>

      <section className="bg-surface py-20"><div className="mx-auto max-w-7xl px-5"><Header eyebrow="Modelo de inversión" title="Primero definimos el caso. Luego dimensionamos la inversión." /><div className="mt-10 grid gap-5 md:grid-cols-2"><div className="border border-border bg-card p-7"><p className="eyebrow">Soluciones estandarizadas</p><h3 className="mt-4 text-2xl">Un punto de entrada definido.</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">Capacidades con alcance recurrente pueden presentar valores “desde”, sujetos a usuarios, volumen y configuración.</p></div><div className="border border-primary/40 bg-enterprise p-7 text-enterprise-foreground"><p className="eyebrow">Proyectos empresariales</p><h3 className="mt-4 text-2xl">Arquitectura según el reto.</h3><p className="mt-3 text-sm leading-relaxed text-enterprise-muted">Inversión según alcance, volumen, integraciones, complejidad y caso de negocio.</p></div></div><p className="mt-5 text-xs text-muted-foreground">{priceDisclaimer}</p></div></section>

      <section className="border-t border-border py-24 sm:py-32"><div className="mx-auto max-w-5xl px-5 text-center"><p className="eyebrow">Siguiente decisión</p><h2 className="mt-5 text-4xl leading-tight sm:text-6xl">No necesitas saber qué tecnología comprar. <em className="font-serif font-normal text-primary">Necesitas saber qué problema vale la pena resolver.</em></h2><p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-muted-foreground">Cuéntanos qué proceso quieres mejorar. Analizamos la operación, identificamos la oportunidad y diseñamos la arquitectura adecuada.</p><div className="mt-9 flex flex-wrap justify-center gap-3"><Button asChild size="lg"><Link to="/diagnostico">Quiero identificar una oportunidad <ArrowRight /></Link></Button><Button asChild size="lg" variant="outline"><Link to="/oportunidad">Hablar con un consultor</Link></Button></div></div></section>
    </div>
  );
}

function Header({ eyebrow, title, intro, dark = false }: { eyebrow: string; title: string; intro?: string; dark?: boolean }) { return <div className="max-w-3xl"><p className="eyebrow">{eyebrow}</p><h2 className={`mt-4 text-4xl leading-tight sm:text-5xl ${dark ? "text-enterprise-foreground" : ""}`}>{title}</h2>{intro && <p className={`mt-5 max-w-2xl text-base leading-relaxed ${dark ? "text-enterprise-muted" : "text-muted-foreground"}`}>{intro}</p>}</div>; }
function Section({ id, eyebrow, title, intro, children }: { id: string; eyebrow: string; title: string; intro: string; children: React.ReactNode }) { return <section id={id} className="scroll-mt-32 py-20 sm:py-28"><div className="mx-auto max-w-7xl px-5"><Header eyebrow={eyebrow} title={title} intro={intro} />{children}</div></section>; }
function StatePanel({ title, items, after = false }: { title: string; items: string[]; after?: boolean }) { return <div className={`border p-7 ${after ? "border-primary/40 bg-card shadow-premium" : "border-border bg-background"}`}><p className={`text-xs font-semibold uppercase tracking-[0.2em] ${after ? "text-primary" : "text-muted-foreground"}`}>{title}</p><div className="mt-6 grid grid-cols-2 gap-3">{items.map((item) => <span key={item} className="text-sm">{item}</span>)}</div></div>; }