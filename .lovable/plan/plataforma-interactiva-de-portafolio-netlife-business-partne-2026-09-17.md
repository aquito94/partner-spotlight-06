# Plataforma interactiva de portafolio — Netlife Business Partners

Sitio abierto (sin registro) donde un aliado o cliente explora el portafolio de servicios de la Guía Comercial 2026, recibe recomendaciones según su problema, estima una inversión referencial y arma el registro de una oportunidad.

## Estilo

Se conserva la identidad del PDF: base oscura corporativa, acento cian/azul Netlife, tipografía sans geométrica, tarjetas con bordes suaves, textos cortos y jerarquía tipo presentación. Todo el contenido sale del documento (9 soluciones, precios de entrada, síntomas, matriz por sector, preguntas de discovery, casos por sector, KPIs).

## Páginas

1. **Inicio** — mensaje central ("no vendas un bot, detecta el problema"), 4 frentes (ERP/CRM/Datos/IA → automatización → dashboard), sellos de confianza (Meta Partner, ISO 27001, PCI DSS) y accesos a las herramientas.
2. **Soluciones** — las 9 puertas de entrada (Agente IA, CRM/CX, Power Inbox AI, Dashboards, Integraciones, Automatizaciones, Adopción IA, Gastro.ec, Cámaras) en tarjetas filtrables por sector, tipo de problema y rango de precio. Cada tarjeta abre un detalle con: cómo se vende, casos de uso, resultado esperado, precio de entrada y su clip demo.
3. **Diagnóstico guiado** — 5–7 preguntas basadas en los síntomas del PDF (demoras, procesos manuales, falta de visibilidad, leads fríos, mala experiencia). Al final muestra soluciones recomendadas priorizadas, preguntas de discovery sugeridas y KPIs a medir.
4. **Cotizador referencial** — selección de soluciones, número de usuarios, módulos y cámaras; calcula un rango mensual + implementación con la nota de que los valores son de entrada y el precio final depende del alcance.
5. **Guía del aliado** — flujo de 12 etapas, quién hace qué, reglas de alcance ("sí / no prometer"), pitch de 30 segundos y KPIs por área.
6. **Registrar oportunidad** — formulario con los campos mínimos del PDF (empresa, sector, contacto, problema, proceso actual, volumen, usuarios, sistemas, resultado esperado, responsable, fecha objetivo). Muestra un resumen listo para copiar o descargar; no se guarda nada en la nube en esta etapa.

## Clips demo

Se generan clips cortos de movimiento (5–8 s, sin sonido) para las soluciones principales: Agente IA, CRM/CX, Dashboards, Automatizaciones y Gastro.ec. Se reproducen dentro del detalle de cada solución, en silencio y en bucle. Los demás servicios usan una animación visual hasta que existan clips propios.

## Detalles técnicos

- Rutas TanStack: `/`, `/soluciones`, `/soluciones/$slug`, `/diagnostico`, `/cotizador`, `/guia`, `/oportunidad`, cada una con su propio `head()` (título y descripción distintos).
- Contenido en módulos de datos tipados en `src/data/` (soluciones, síntomas → recomendaciones, matriz sector, precios, KPIs, etapas), para editarlo sin tocar la interfaz.
- Tokens de color/tipografía nuevos en `src/styles.css` (sin clases de color fijas en los componentes); componentes shadcn existentes para tarjetas, tabs, sliders y formularios.
- El PDF original se publica como descarga mediante un asset del proyecto.
- Sin base de datos: diagnóstico, cotizador y registro se resuelven en el navegador (resultado en pantalla, copiar/descargar). Queda listo para conectar almacenamiento en la nube después si lo pides.

## Fuera de alcance por ahora

- Login de aliados y zona privada.
- Guardado de oportunidades y envío por correo.
- Precios contractuales exactos (todo se presenta como referencial).
