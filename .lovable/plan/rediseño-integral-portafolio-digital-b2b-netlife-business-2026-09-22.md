# Rediseño integral — Portafolio Digital B2B Netlife Business

Convertir `/soluciones` en una experiencia ejecutiva de una sola página que presenta a Netlife Business como socio de diagnóstico, arquitectura e implementación, no como catálogo de software.

## Dirección visual elegida

- Dirección **Executive strategic portfolio**: fondo claro editorial, mucho espacio, titulares de gran escala, composición asimétrica y lectura pausada.
- Mantener el logo oficial y el naranja/dorado Netlife como firma de marca. Usar grafito y azul petróleo profundo como contraste corporativo; ningún morado neón ni cyan dominante.
- Tipografía ejecutiva con serif editorial en titulares y sans limpia en contenido, conservando legibilidad empresarial.
- Bordes finos, radios pequeños, sombras discretas, iconografía lineal y paneles oscuros reservados para arquitectura, seguridad y cierres de alto impacto.
- Movimiento sutil: líneas de datos, aparición progresiva y cambios suaves en selectores, con alternativa sin movimiento.

## Nueva experiencia de `/soluciones`

1. **Hero consultivo**
   - Usar el headline, subheadline y texto secundario indicados.
   - CTA principal hacia `/diagnostico` y CTA secundario hacia capacidades.
   - Diagrama animado: Clientes → Canales → IA → Datos → Automatización → Sistemas → Decisiones.
   - Visual empresarial real integrado con capas de datos, sin robots, hologramas ni clichés.

2. **Resultados de negocio interactivos**
   - Selector con los 11 objetivos empresariales definidos.
   - Cada selección muestra procesos transformables, impacto, capacidades aplicables y métricas sugeridas.
   - Estado inicial útil y navegación accesible por teclado.

3. **Capacidades empresariales, no productos**
   - Presentar las nueve capacidades solicitadas: inteligencia conversacional, omnicanalidad, orquestación, inteligencia de datos, IA predictiva, integraciones, desarrollo a medida, computer vision, automatización documental e IA para productividad corporativa.
   - Organizar el contenido por problema, proceso, acción y resultado; evitar listas interminables con revelado progresivo.
   - Dar protagonismo especial a desarrollo a medida y mostrar su proceso completo sin precio fijo.

4. **Transformación por área**
   - Selector para las 12 áreas de negocio.
   - Panel dinámico con Problema → Causa → Impacto → Capacidad tecnológica → Resultado esperado.

5. **Industrias**
   - Incluir las 14 industrias indicadas.
   - Mostrar procesos concretos por industria, no descripciones genéricas.

6. **Del problema al ROI**
   - Metodología visual de seis etapas: diagnóstico, línea base, oportunidad, arquitectura, implementación y medición.
   - KPIs agrupados y headline exacto sobre implementar IA solo cuando existe un caso de negocio.

7. **Antes / después**
   - Comparación visual clara entre operación fragmentada y operación conectada, con flujo progresivo en lugar de dos listas planas.

8. **Arquitectura empresarial**
   - Infografía protagonista en seis capas: canales, inteligencia, orquestación, sistemas, inteligencia de decisión y resultado empresarial.
   - Líneas, nodos y flujo visual adaptados a escritorio y móvil.

9. **Seguridad y gobierno**
   - Bloque enterprise para seguridad, datos, accesos, trazabilidad, gobierno, arquitectura y cumplimiento.
   - Mostrar únicamente respaldos ya presentes en el contenido vigente: ISO 27001, PCI DSS y Meta Business Partner, sin inventar certificaciones.

10. **Modelo de inversión**
    - Separar soluciones estandarizadas con valores “desde” de proyectos empresariales cotizados por alcance.
    - Mantener de forma visible que todos los valores son estimados y la cotización final se realiza con un asesor.

11. **Cierre consultivo**
    - Usar el headline y texto final indicados.
    - CTA principal a diagnóstico y CTA secundario a registro/contacto con consultor.

## Navegación y continuidad

- Crear navegación por secciones dentro del portafolio: Resultados, Capacidades, Áreas, Industrias, Arquitectura, Seguridad y Casos; mantener accesos a Inicio, Diagnóstico y Contacto.
- La página principal dejará de destacar una grilla de nueve productos.
- Las páginas de detalle existentes seguirán disponibles para no romper enlaces publicados, pero sus nombres visibles se alinearán con el nuevo lenguaje consultivo donde corresponda.

## Contenido y estructura técnica

- Crear un módulo de contenido tipado para objetivos, capacidades, áreas, industrias, metodología, arquitectura y métricas.
- Dividir la página en componentes pequeños para selectores, diagramas y secciones; evitar un archivo monolítico.
- Actualizar los tokens visuales globales y la carga tipográfica sin introducir colores fijos en los componentes.
- Actualizar el título, descripción y etiquetas sociales de `/soluciones` para reflejar el nuevo posicionamiento B2B.
- Mantener el sitio estático, sin base de datos, y conservar la compatibilidad actual con Netlify.

## Validación

- Comprobar todos los selectores, CTAs y enlaces.
- Revisar escritorio y móvil para evitar desbordes, textos densos y solapamientos.
- Confirmar que las animaciones respetan reducción de movimiento.
- Verificar la generación estática de las 15 rutas y que logo, videos y PDF continúan incluidos en la publicación de Netlify.
