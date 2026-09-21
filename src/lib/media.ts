// Archivos servidos directamente desde la carpeta public/ para que funcionen
// en cualquier hosting estático (Netlify incluido).
export const mediaUrls = {
  logo: "/media/netlife-business-logo.png",
  guiaPdf: "/media/guia-comercial.pdf",
  demos: {
    "agente-ia": "/media/demo-agente-ia.mp4",
    "crm-cx": "/media/demo-crm-cx.mp4",
    dashboards: "/media/demo-dashboards.mp4",
    automatizaciones: "/media/demo-automatizaciones.mp4",
    gastro: "/media/demo-gastro.mp4",
  } as Record<string, string>,
};
