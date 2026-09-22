import { ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { businessAreas, businessGoals } from "@/data/enterprise-portfolio";

export function GoalSelector() {
  const [selected, setSelected] = useState(0);
  const goal = businessGoals[selected] ?? businessGoals[0];
  if (!goal) return null;

  return (
    <div className="mt-10 grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
      <div className="flex flex-wrap content-start gap-2">
        {businessGoals.map((item, index) => (
          <Button key={item.label} variant={selected === index ? "default" : "outline"} size="sm" onClick={() => setSelected(index)} aria-pressed={selected === index} className="h-auto whitespace-normal px-3 py-2 text-left text-xs shadow-none">
            {item.label}
          </Button>
        ))}
      </div>
      <div className="border-l-2 border-primary bg-card px-6 py-7 shadow-premium sm:px-8">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Señal de oportunidad</p>
        <h3 className="mt-3 text-2xl leading-tight sm:text-3xl">{goal.signal}</h3>
        <div className="mt-7 grid gap-6 sm:grid-cols-3">
          <InfoList title="Procesos" items={goal.processes} />
          <InfoList title="Capacidades" items={goal.capabilities} />
          <InfoList title="Métricas" items={goal.metrics} />
        </div>
      </div>
    </div>
  );
}

export function AreaSelector() {
  const [selected, setSelected] = useState(0);
  const area = businessAreas[selected] ?? businessAreas[0];
  if (!area) return null;

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-[240px_1fr]">
      <div className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {businessAreas.map((item, index) => (
          <Button key={item.name} variant="ghost" onClick={() => setSelected(index)} aria-pressed={selected === index} className={`h-auto min-w-fit justify-between rounded-none border-b px-3 py-3 text-left text-xs uppercase tracking-[0.1em] shadow-none lg:w-full ${selected === index ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground"}`}>
            {item.name}<ArrowRight className="size-3" />
          </Button>
        ))}
      </div>
      <div className="border border-border bg-card p-6 shadow-premium sm:p-9">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-primary">Área · {area.name}</p>
        <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
          <AreaFact label="Problema" value={area.problem} />
          <AreaFact label="Causa" value={area.cause} />
          <AreaFact label="Impacto" value={area.impact} accent />
          <AreaFact label="Capacidad tecnológica" value={area.capability} />
          <div className="sm:col-span-2 border-t border-border pt-6"><AreaFact label="Resultado esperado" value={area.result} accent /></div>
        </div>
      </div>
    </div>
  );
}

function InfoList({ title, items }: { title: string; items: string[] }) {
  return <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">{title}</p><ul className="mt-3 space-y-2">{items.map((item) => <li key={item} className="flex gap-2 text-sm leading-snug"><CheckCircle2 className="mt-0.5 size-3.5 shrink-0 text-primary" />{item}</li>)}</ul></div>;
}

function AreaFact({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return <div><p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">{label}</p><p className={`mt-2 leading-relaxed ${accent ? "font-display text-xl text-primary" : "text-sm"}`}>{value}</p></div>;
}