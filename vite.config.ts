// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
    // nitro/vite builds from this
    server: { entry: "server" },
    // `pages` must be a sibling of `prerender` — nested inside `prerender` it is ignored.
    pages: [
      { path: "/" },
      { path: "/soluciones" },
      { path: "/soluciones/agente-ia" },
      { path: "/soluciones/crm-cx" },
      { path: "/soluciones/power-inbox-ai" },
      { path: "/soluciones/dashboards" },
      { path: "/soluciones/integraciones" },
      { path: "/soluciones/automatizaciones" },
      { path: "/soluciones/adopcion-ia" },
      { path: "/soluciones/gastro-ec" },
      { path: "/soluciones/camaras" },
      { path: "/diagnostico" },
      { path: "/cotizador" },
      { path: "/guia" },
      { path: "/oportunidad" },
    ],
    prerender: {
      enabled: true,
      // Solo pre-renderizamos las rutas listadas arriba (evita seguir enlaces a archivos como el PDF).
      autoStaticPathsDiscovery: false,
    },
  },
});
