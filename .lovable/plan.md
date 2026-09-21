# Corregir el build de Netlify

## Diagnóstico confirmado
Las 15 páginas se generan correctamente. El fallo ocurre después porque el pre-renderizador sigue el enlace de descarga de la guía e intenta tratar el PDF alojado en el CDN como una página del sitio; esa URL no existe dentro del servidor temporal de compilación y devuelve 404.

`autoStaticPathsDiscovery: false` limita el descubrimiento inicial de rutas, pero no desactiva el rastreo de enlaces encontrados dentro de las páginas ya generadas.

## Cambio
- Mantener las 15 rutas explícitas actuales.
- Añadir `crawlLinks: false` a la configuración de pre-renderizado para impedir que enlaces a PDF, videos u otros archivos sean añadidos como páginas.
- Mantener el preset y la configuración actual de Netlify, que ya corrigieron el problema anterior de ubicación del servidor.

## Verificación
- Ejecutar la compilación con la misma variable usada por Netlify.
- Confirmar que el reporte muestre 15 páginas generadas, ninguna omitida y que ya no aparezca la URL del PDF en “Crawling”.
- Confirmar que la salida estática esperada para Netlify siga disponible.
