import type { Solution } from "@/data/portfolio";
import { mediaUrls } from "@/lib/media";

const clips = mediaUrls.demos;

export function SolutionDemo({
  demo,
  name,
  className = "",
}: {
  demo: Solution["demo"];
  name: string;
  className?: string;
}) {
  const src = demo ? clips[demo] : undefined;

  if (!src) {
    return (
      <div
        className={`relative aspect-video overflow-hidden rounded-xl border border-border bg-surface-strong ${className}`}
      >
        <div className="absolute inset-0 line-grid opacity-40" />
        <div className="absolute inset-0 grid-backdrop" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <p className="text-sm text-muted-foreground">
            Demo visual de {name} disponible próximamente.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative aspect-video overflow-hidden rounded-xl border border-border bg-surface-strong ${className}`}
    >
      <video
        src={src}
        muted
        loop
        autoPlay
        playsInline
        preload="metadata"
        aria-label={`Demo de ${name}`}
        className="size-full object-cover"
      />
      <span className="pointer-events-none absolute top-3 left-3 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-[11px] tracking-wide text-primary uppercase">
        Demo
      </span>
    </div>
  );
}
