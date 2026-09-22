import { createFileRoute } from "@tanstack/react-router";

import { EnterprisePortfolio } from "@/components/portfolio/EnterprisePortfolio";

export const Route = createFileRoute("/soluciones/")({
  head: () => ({
    meta: [
      { title: "Sistemas inteligentes para resultados de negocio · Netlife Business" },
      {
        name: "description",
        content:
          "Diagnosticamos procesos empresariales y conectamos IA, automatización, datos, canales e integraciones para generar resultados medibles.",
      },
      { property: "og:title", content: "Transformamos problemas en sistemas inteligentes · Netlife Business" },
      {
        property: "og:description",
        content: "Arquitectura tecnológica integral para ventas, servicio, operaciones y decisiones.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: EnterprisePortfolio,
});
