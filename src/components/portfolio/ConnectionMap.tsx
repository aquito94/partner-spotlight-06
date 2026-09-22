const nodes = ["Clientes", "Canales", "IA", "Datos", "Automatización", "Sistemas", "Decisiones"];

export function ConnectionMap() {
  return (
    <div className="enterprise-panel relative overflow-hidden p-5 sm:p-7" aria-label="Flujo de empresa conectada">
      <div className="absolute inset-0 enterprise-grid opacity-25" />
      <div className="relative flex min-h-[390px] flex-col justify-between">
        <div className="flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.2em] text-enterprise-muted">
          <span>Arquitectura conectada</span>
          <span className="flex items-center gap-2"><span className="size-1.5 animate-pulse rounded-full bg-primary" /> En operación</span>
        </div>
        <div className="relative mx-auto flex w-full max-w-md flex-col items-center py-5">
          {nodes.map((node, index) => (
            <div key={node} className="contents">
              <div className={`relative z-10 flex w-full items-center justify-between border px-4 py-3 ${index === nodes.length - 1 ? "border-primary bg-primary text-primary-foreground" : "border-enterprise-line bg-enterprise/75 text-enterprise-foreground backdrop-blur"}`}>
                <span className="text-[10px] font-medium tracking-[0.18em]">0{index + 1}</span>
                <span className="text-xs font-semibold uppercase tracking-[0.12em]">{node}</span>
                <span className={`size-1.5 rounded-full ${index === nodes.length - 1 ? "bg-primary-foreground" : "bg-primary"}`} />
              </div>
              {index < nodes.length - 1 && <div className="data-line h-3 w-px" />}
            </div>
          ))}
        </div>
        <p className="text-xs leading-relaxed text-enterprise-muted">Una capa activa a la siguiente. Cada señal conserva contexto, trazabilidad y propósito.</p>
      </div>
    </div>
  );
}

export function ArchitectureStack({ layers }: { layers: readonly { title: string; items: readonly string[] }[] }) {
  return (
    <div className="relative mx-auto max-w-5xl">
      <div className="absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-enterprise-line md:block" />
      <div className="space-y-3">
        {layers.map((layer, index) => (
          <div key={layer.title} className="group relative grid gap-3 border border-enterprise-line bg-enterprise/85 p-4 backdrop-blur transition-colors hover:border-primary/60 md:grid-cols-[190px_1fr] md:items-center md:p-5">
            <div className="flex items-center gap-4">
              <span className="flex size-8 shrink-0 items-center justify-center border border-primary/50 text-xs font-semibold text-primary">0{index + 1}</span>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-enterprise-foreground">{layer.title}</p>
            </div>
            <div className="flex flex-wrap gap-x-5 gap-y-2 md:justify-end">
              {layer.items.map((item) => <span key={item} className="text-sm text-enterprise-muted">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}