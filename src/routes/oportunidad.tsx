import { createFileRoute } from "@tanstack/react-router";
import { Copy, Download } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { escalationMinimum, sectors, solutions } from "@/data/portfolio";
import { getCapabilityName } from "@/data/enterprise";

export const Route = createFileRoute("/oportunidad")({
  head: () => ({
    meta: [
      { title: "Brief consultivo · Netlife Business" },
      {
        name: "description",
        content:
          "Prepara un brief del proceso, impacto, volumen, sistemas y resultado esperado para conversar con un consultor Netlife Business.",
      },
      { property: "og:title", content: "Brief consultivo · Netlife Business" },
      {
        property: "og:description",
        content: "Un buen registro acelera preventa, validación y propuesta.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Oportunidad,
});

const initial = {
  empresa: "",
  sector: "",
  contacto: "",
  email: "",
  telefono: "",
  problema: "",
  proceso: "",
  volumen: "",
  usuarios: "",
  sistemas: "",
  resultado: "",
  responsable: "",
  fecha: "",
  notas: "",
};

function Oportunidad() {
  const [form, setForm] = useState(initial);
  const [interes, setInteres] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  const set = (key: keyof typeof initial, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const toggle = (slug: string) =>
    setInteres((prev) => (prev.includes(slug) ? prev.filter((s) => s !== slug) : [...prev, slug]));

  const summary = useMemo(
    () =>
      [
        "BRIEF DE OPORTUNIDAD · NETLIFE BUSINESS",
        `Empresa: ${form.empresa}`,
        `Sector: ${form.sector}`,
        `Contacto: ${form.contacto} · ${form.email} · ${form.telefono}`,
        `Capacidades consideradas: ${interes
          .map((i) => {
            const solution = solutions.find((s) => s.slug === i);
            return solution ? getCapabilityName(solution.slug, solution.name) : undefined;
          })
          .filter(Boolean)
          .join(", ")}`,
        "",
        `Problema: ${form.problema}`,
        `Proceso actual: ${form.proceso}`,
        `Volumen: ${form.volumen}`,
        `Usuarios: ${form.usuarios}`,
        `Sistemas actuales: ${form.sistemas}`,
        `Resultado esperado: ${form.resultado}`,
        `Responsable en el cliente: ${form.responsable}`,
        `Fecha objetivo: ${form.fecha}`,
        `Notas: ${form.notas}`,
      ].join("\n"),
    [form, interes],
  );

  const missing = ["empresa", "problema", "proceso", "resultado"].filter(
    (k) => !form[k as keyof typeof initial].trim(),
  );

  const download = () => {
    const blob = new Blob([summary], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `oportunidad-${form.empresa.toLowerCase().replace(/\s+/g, "-") || "netlife"}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-auto max-w-6xl px-5 py-14">
      <p className="text-xs tracking-widest text-primary uppercase">Conversación consultiva</p>
      <h1 className="mt-3 text-4xl font-normal sm:text-5xl">
        Cuéntanos qué proceso quieres mejorar
      </h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        Organizamos el problema, el proceso actual, el impacto y el resultado esperado para diseñar
        una conversación útil con un consultor. Nada se almacena en línea.
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {escalationMinimum.map((m) => (
          <span
            key={m}
            className="rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground"
          >
            {m}
          </span>
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
        <Card className="border-border/70 bg-surface/70 p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Empresa" value={form.empresa} onChange={(v) => set("empresa", v)} />
            <div>
              <Label className="text-xs tracking-widest text-muted-foreground uppercase">
                Sector
              </Label>
              <div className="mt-2 flex flex-wrap gap-2">
                {sectors.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => set("sector", form.sector === s ? "" : s)}
                    className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                      form.sector === s
                        ? "border-primary bg-primary/15 text-primary"
                        : "border-border bg-secondary/40 text-muted-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <Field label="Contacto" value={form.contacto} onChange={(v) => set("contacto", v)} />
            <Field label="Correo" value={form.email} onChange={(v) => set("email", v)} />
            <Field label="Teléfono" value={form.telefono} onChange={(v) => set("telefono", v)} />
            <Field
              label="Responsable en el cliente"
              value={form.responsable}
              onChange={(v) => set("responsable", v)}
            />
            <Field
              label="Volumen del proceso (al mes)"
              value={form.volumen}
              onChange={(v) => set("volumen", v)}
            />
            <Field
              label="Usuarios involucrados"
              value={form.usuarios}
              onChange={(v) => set("usuarios", v)}
            />
            <Field
              label="Fecha objetivo"
              type="date"
              value={form.fecha}
              onChange={(v) => set("fecha", v)}
            />
            <Field
              label="Sistemas actuales"
              value={form.sistemas}
              onChange={(v) => set("sistemas", v)}
            />
          </div>

          <div className="mt-6 grid gap-5">
            <AreaField
              label="Problema detectado"
              value={form.problema}
              onChange={(v) => set("problema", v)}
            />
            <AreaField
              label="Cómo se hace hoy (proceso actual)"
              value={form.proceso}
              onChange={(v) => set("proceso", v)}
            />
            <AreaField
              label="Resultado esperado"
              value={form.resultado}
              onChange={(v) => set("resultado", v)}
            />
            <AreaField
              label="Notas y próximo paso"
              value={form.notas}
              onChange={(v) => set("notas", v)}
            />
          </div>

          <div className="mt-6">
            <Label className="text-xs tracking-widest text-muted-foreground uppercase">
              Capacidades que podrían intervenir
            </Label>
            <div className="mt-2 flex flex-wrap gap-2">
              {solutions.map((s) => (
                <button
                  key={s.slug}
                  type="button"
                  onClick={() => toggle(s.slug)}
                  className={`rounded-full border px-3 py-1 text-xs transition-colors ${
                    interes.includes(s.slug)
                      ? "border-primary bg-primary/15 text-primary"
                      : "border-border bg-secondary/40 text-muted-foreground"
                  }`}
                >
                  {getCapabilityName(s.slug, s.name)}
                </button>
              ))}
            </div>
          </div>

          <Button
            className="mt-8 w-full"
            onClick={() => {
              if (missing.length > 0) {
                toast.error("Falta información clave: empresa, problema, proceso y resultado.");
                return;
              }
              setDone(true);
              toast.success("Resumen generado. Cópialo o descárgalo.");
            }}
          >
            Generar brief
          </Button>
        </Card>

        <Card className="h-fit border-border/70 bg-surface/70 p-6">
          <p className="text-xs tracking-widest text-muted-foreground uppercase">
            Brief de la oportunidad
          </p>
          {done ? (
            <>
              <pre className="mt-3 max-h-[26rem] overflow-auto rounded-md bg-background/60 p-3 text-xs whitespace-pre-wrap text-muted-foreground">
                {summary}
              </pre>
              <div className="mt-4 grid gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    navigator.clipboard?.writeText(summary);
                    toast.success("Resumen copiado");
                  }}
                >
                  <Copy className="mr-1 size-4" /> Copiar
                </Button>
                <Button variant="outline" onClick={download}>
                  <Download className="mr-1 size-4" /> Descargar
                </Button>
              </div>
            </>
          ) : (
            <p className="mt-3 text-sm text-muted-foreground">
              Completa el formulario y presiona “Generar resumen” para obtener el texto listo para
              enviar a Netlife Business.
            </p>
          )}
        </Card>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <Label className="text-xs tracking-widest text-muted-foreground uppercase">{label}</Label>
      <Input className="mt-2" type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
  );
}

function AreaField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <Label className="text-xs tracking-widest text-muted-foreground uppercase">{label}</Label>
      <Textarea
        className="mt-2 min-h-24"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
