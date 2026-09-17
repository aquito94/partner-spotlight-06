export type Sector =
  | "Inmobiliario"
  | "Salud"
  | "Educación"
  | "Retail"
  | "HORECA"
  | "Servicios"
  | "Industria"
  | "Financiero";

export const sectors: Sector[] = [
  "Inmobiliario",
  "Salud",
  "Educación",
  "Retail",
  "HORECA",
  "Servicios",
  "Industria",
  "Financiero",
];

export type ProblemTag =
  | "atencion"
  | "ventas"
  | "procesos"
  | "visibilidad"
  | "datos"
  | "equipo"
  | "seguridad";

export const problemTags: { id: ProblemTag; label: string }[] = [
  { id: "atencion", label: "Atención al cliente" },
  { id: "ventas", label: "Ventas y seguimiento" },
  { id: "procesos", label: "Procesos manuales" },
  { id: "visibilidad", label: "Falta de visibilidad" },
  { id: "datos", label: "Datos desconectados" },
  { id: "equipo", label: "Adopción del equipo" },
  { id: "seguridad", label: "Control y seguridad" },
];

export type Solution = {
  id: string;
  slug: string;
  code: string;
  name: string;
  tagline: string;
  pitch: string;
  sellsAs: string;
  useCases: string[];
  outcomes: string[];
  entryPrice: string;
  monthlyFrom: number | null;
  setupFrom: number | null;
  tags: ProblemTag[];
  sectors: Sector[];
  demo: "agente-ia" | "crm-cx" | "dashboards" | "automatizaciones" | "gastro" | null;
};

export const solutions: Solution[] = [
  {
    id: "01",
    slug: "agente-ia",
    code: "01",
    name: "Agente IA",
    tagline: "Atención, ventas y seguimiento 24/7",
    pitch:
      "Responder, calificar y dar seguimiento sin dejar al cliente esperando. La puerta de entrada conversacional.",
    sellsAs:
      "La forma de convertir más conversaciones en citas, oportunidades o ventas.",
    useCases: [
      "WhatsApp y canales digitales con respuesta inmediata",
      "FAQs y catálogo conversacional",
      "Agendamiento y confirmación de citas",
      "Calificación de leads y derivación a humano",
      "Pagos, crédito y seguimiento post-venta",
    ],
    outcomes: [
      "Menor tiempo de primera respuesta",
      "Más conversaciones convertidas en citas",
      "Menos leads perdidos por demora",
    ],
    entryPrice: "Desde $75/mes",
    monthlyFrom: 75,
    setupFrom: 0,
    tags: ["atencion", "ventas"],
    sectors: ["Inmobiliario", "Salud", "Educación", "Retail", "Servicios", "Financiero", "HORECA"],
    demo: "agente-ia",
  },
  {
    id: "02",
    slug: "crm-cx",
    code: "02",
    name: "CRM / CX",
    tagline: "Pipeline, trazabilidad y productividad",
    pitch:
      "Ordena la gestión comercial: cada lead con dueño, etapa, próximo paso y registro completo de la relación.",
    sellsAs:
      "Control del embudo: nada se queda sin seguimiento y el equipo trabaja con la misma información.",
    useCases: [
      "Pipeline por etapas y probabilidad",
      "Trazabilidad completa de cada cuenta",
      "Tareas, recordatorios y flujos de seguimiento",
      "Omnicanalidad y experiencia de cliente",
      "Reportes de productividad comercial",
    ],
    outcomes: [
      "Mayor tasa de conversión por etapa",
      "Forecast más preciso",
      "Menos oportunidades olvidadas",
    ],
    entryPrice: "Desde $300/mes + implementación desde $500",
    monthlyFrom: 300,
    setupFrom: 500,
    tags: ["ventas", "visibilidad", "atencion"],
    sectors: ["Inmobiliario", "Salud", "Educación", "Retail", "Servicios", "Industria", "Financiero"],
    demo: "crm-cx",
  },
  {
    id: "03",
    slug: "power-inbox-ai",
    code: "03",
    name: "Power Inbox AI",
    tagline: "Conversaciones y bandejas unificadas",
    pitch:
      "Todas las conversaciones del negocio en una sola bandeja, con asistencia de IA para responder mejor y más rápido.",
    sellsAs:
      "Un solo lugar para atender WhatsApp, redes, correo y web sin perder el hilo.",
    useCases: [
      "Bandeja unificada multicanal",
      "Asignación por equipo y turno",
      "Respuestas sugeridas con IA",
      "Etiquetado y clasificación automática",
      "Métricas de atención por agente",
    ],
    outcomes: [
      "Menos mensajes sin responder",
      "Tiempos de respuesta medibles",
      "Historial único por cliente",
    ],
    entryPrice: "Según canales y usuarios",
    monthlyFrom: 120,
    setupFrom: 250,
    tags: ["atencion", "equipo"],
    sectors: ["Retail", "Servicios", "Salud", "Educación", "Inmobiliario", "HORECA"],
    demo: "agente-ia",
  },
  {
    id: "04",
    slug: "dashboards",
    code: "04",
    name: "Dashboards",
    tagline: "Visibilidad ejecutiva y decisiones",
    pitch: "Lo que estaba oculto se vuelve visible para decidir con datos y no con percepción.",
    sellsAs: "Indicadores en tiempo real para decidir el mismo día, no a fin de mes.",
    useCases: [
      "Tableros ejecutivos por área",
      "Indicadores comerciales y operativos",
      "Alertas por desvío de métricas",
      "Consolidación de fuentes distintas",
      "Reportes automáticos programados",
    ],
    outcomes: [
      "Decisiones más rápidas y sustentadas",
      "Línea base clara para medir ROI",
      "Menos horas armando reportes",
    ],
    entryPrice: "Según fuentes de datos y tableros",
    monthlyFrom: 150,
    setupFrom: 600,
    tags: ["visibilidad", "datos"],
    sectors: ["Retail", "Industria", "Financiero", "Servicios", "Salud", "Educación", "HORECA", "Inmobiliario"],
    demo: "dashboards",
  },
  {
    id: "05",
    slug: "integraciones",
    code: "05",
    name: "Integraciones",
    tagline: "Conectar CRM, ERP, APIs y datos",
    pitch: "Cada nueva pieza debe convivir con el ecosistema actual del cliente.",
    sellsAs: "Que los sistemas se hablen entre sí y la información deje de copiarse a mano.",
    useCases: [
      "Conexión CRM ↔ ERP ↔ facturación",
      "APIs con proveedores y pasarelas de pago",
      "Sincronización de catálogos e inventario",
      "Migración y limpieza de datos",
      "Webhooks y eventos entre sistemas",
    ],
    outcomes: [
      "Menos errores de digitación",
      "Información consistente entre áreas",
      "Procesos con trazabilidad extremo a extremo",
    ],
    entryPrice: "Según sistemas y volumen",
    monthlyFrom: 100,
    setupFrom: 800,
    tags: ["datos", "procesos"],
    sectors: ["Retail", "Industria", "Financiero", "Servicios", "Salud", "HORECA"],
    demo: "automatizaciones",
  },
  {
    id: "06",
    slug: "automatizaciones",
    code: "06",
    name: "Automatizaciones",
    tagline: "Eliminar tareas repetitivas y errores",
    pitch: "Todo proceso repetitivo, manual y frecuente es una oportunidad de automatización.",
    sellsAs: "Menos trabajo repetitivo, menos puntos de error y más capacidad sin contratar más gente.",
    useCases: [
      "Flujos de aprobación y notificación",
      "Procesamiento documental (facturas, contratos, CVs)",
      "Carga y validación de información",
      "Cobranzas y recordatorios automáticos",
      "Onboarding de clientes y colaboradores",
    ],
    outcomes: [
      "Menor tiempo de ciclo por proceso",
      "Reducción de errores operativos",
      "Horas del equipo liberadas",
    ],
    entryPrice: "Según procesos y volumen",
    monthlyFrom: 90,
    setupFrom: 500,
    tags: ["procesos", "datos"],
    sectors: ["Industria", "Financiero", "Servicios", "Retail", "Salud", "Educación"],
    demo: "automatizaciones",
  },
  {
    id: "07",
    slug: "adopcion-ia",
    code: "07",
    name: "Adopción IA",
    tagline: "Formación práctica para equipos",
    pitch: "La tecnología genera valor solo si el equipo la incorpora en su trabajo diario.",
    sellsAs: "Capacitación aplicada al proceso real del cliente, no teoría de IA.",
    useCases: [
      "Talleres por área (ventas, marketing, operaciones)",
      "Casos y plantillas del propio negocio",
      "Buenas prácticas de uso y seguridad",
      "Medición de adopción por equipo",
      "Acompañamiento posterior",
    ],
    outcomes: [
      "Uso real de las herramientas implementadas",
      "Equipos más productivos por tarea",
      "Menor resistencia al cambio",
    ],
    entryPrice: "Según número de participantes y sesiones",
    monthlyFrom: null,
    setupFrom: 400,
    tags: ["equipo"],
    sectors: ["Servicios", "Educación", "Retail", "Industria", "Financiero", "Salud", "Inmobiliario", "HORECA"],
    demo: null,
  },
  {
    id: "08",
    slug: "gastro-ec",
    code: "08",
    name: "Gastro.ec",
    tagline: "Operación integral para HORECA",
    pitch:
      "Del pedido al cobro en un solo sistema: restaurantes, hosterías, cafeterías y bares.",
    sellsAs:
      "Control operativo: menos demoras, menos errores, mejor experiencia y más trazabilidad.",
    useCases: [
      "Atención: menú QR y app de pedidos",
      "Operación: POS, cocina y bar",
      "Control: inventario y administración",
      "Crecimiento: reportes y satisfacción",
      "Integración con facturación",
    ],
    outcomes: [
      "Menor tiempo de atención por mesa",
      "Control de inventario y mermas",
      "Reportes de venta por producto y turno",
    ],
    entryPrice: "ERP Gastro desde $100/mes",
    monthlyFrom: 100,
    setupFrom: 300,
    tags: ["procesos", "atencion", "visibilidad"],
    sectors: ["HORECA"],
    demo: "gastro",
  },
  {
    id: "09",
    slug: "camaras",
    code: "09",
    name: "Cámaras",
    tagline: "Monitoreo preventivo y control visual",
    pitch:
      "No se vende una cámara. Se vende control perimetral, prevención y visibilidad continua.",
    sellsAs: "Detecta y alerta: seguridad que previene en lugar de solo grabar.",
    useCases: [
      "Monitoreo remoto de locales y bodegas",
      "Alertas por movimiento o zona restringida",
      "Control de aforo y flujo de personas",
      "Verificación de procedimientos operativos",
      "Almacenamiento y respaldo de video",
    ],
    outcomes: [
      "Menos pérdidas e incidentes",
      "Verificación visual de la operación",
      "Respuesta más rápida ante eventos",
    ],
    entryPrice: "Desde $10/mes por cámara",
    monthlyFrom: 10,
    setupFrom: 0,
    tags: ["seguridad", "visibilidad"],
    sectors: ["Retail", "Industria", "HORECA", "Servicios", "Educación", "Salud"],
    demo: null,
  },
];

export const priceDisclaimer =
  "Valores de entrada. El precio final depende de alcance, usuarios, módulos, volumen, integraciones y personalización.";

export const inHouse = [
  {
    name: "Plataformas a medida",
    description: "Portales, back-offices y aplicaciones sobre el proceso real del cliente.",
  },
  {
    name: "Procesamiento documental",
    description: "Lectura, extracción y validación de facturas, contratos y formularios.",
  },
  {
    name: "IA para reclutamiento",
    description: "Lectura de CV, matching y preclasificación de candidatos.",
  },
  {
    name: "Segmentación inteligente",
    description: "Mensajes, campañas y seguimiento según comportamiento del cliente.",
  },
  {
    name: "Motores de decisión",
    description: "Scoring, priorización y recomendaciones sobre datos propios.",
  },
  {
    name: "Integraciones complejas",
    description: "Sistemas legados, APIs propietarias y flujos entre múltiples plataformas.",
  },
];

export const escalationMinimum = [
  "Problema concreto",
  "Proceso actual",
  "Volumen",
  "Usuarios",
  "Sistemas involucrados",
  "Resultado esperado",
  "Responsable",
  "Fecha objetivo",
];

export type Symptom = {
  id: string;
  label: string;
  detail: string;
  recommends: string[];
};

export const symptoms: Symptom[] = [
  {
    id: "demora",
    label: "Respondemos tarde a los clientes",
    detail: "Mensajes de WhatsApp o web que se quedan sin respuesta o se contestan horas después.",
    recommends: ["agente-ia", "power-inbox-ai", "crm-cx"],
  },
  {
    id: "leads-frios",
    label: "Los leads se enfrían sin seguimiento",
    detail: "Hay interesados, pero nadie confirma quién hace el siguiente contacto.",
    recommends: ["crm-cx", "agente-ia", "automatizaciones"],
  },
  {
    id: "manual",
    label: "Hacemos mucho trabajo manual repetitivo",
    detail: "Copiar datos entre sistemas, armar reportes a mano, revisar documentos uno por uno.",
    recommends: ["automatizaciones", "integraciones"],
  },
  {
    id: "visibilidad",
    label: "No veo los indicadores cuando los necesito",
    detail: "La información existe, pero llega tarde o en archivos distintos.",
    recommends: ["dashboards", "integraciones"],
  },
  {
    id: "datos",
    label: "Los sistemas no se hablan entre sí",
    detail: "CRM, ERP, facturación y catálogo mantienen información distinta.",
    recommends: ["integraciones", "dashboards", "automatizaciones"],
  },
  {
    id: "experiencia",
    label: "Los clientes se quejan de la experiencia",
    detail: "Reclamos por demoras, errores o falta de información en la atención.",
    recommends: ["agente-ia", "power-inbox-ai", "crm-cx"],
  },
  {
    id: "operacion-horeca",
    label: "La operación de servicio se nos desordena",
    detail: "Pedidos, cocina, inventario y cobro sin un sistema único (restaurantes, bares, hosterías).",
    recommends: ["gastro-ec", "dashboards"],
  },
  {
    id: "equipo",
    label: "El equipo no usa las herramientas que ya tenemos",
    detail: "Se compró tecnología, pero cada persona trabaja a su manera.",
    recommends: ["adopcion-ia", "crm-cx"],
  },
  {
    id: "seguridad",
    label: "No tengo control de lo que pasa en los locales",
    detail: "Pérdidas, incidentes o procedimientos que no se cumplen sin verificación visual.",
    recommends: ["camaras", "dashboards"],
  },
];

export const qualificationRule =
  "Frecuente + medible + impacto económico + información suficiente para intervenir = vale la pena levantar el caso.";

export const discoveryQuestions = [
  "¿Qué proceso quieres mejorar y por qué ahora?",
  "¿Cómo se hace hoy, paso a paso?",
  "¿Qué volumen maneja ese proceso al mes?",
  "¿Cuántas personas participan y en qué rol?",
  "¿Qué sistemas se usan hoy (CRM, ERP, hojas de cálculo)?",
  "¿Dónde se pierde más tiempo o dinero?",
  "¿Qué indicador quieres mejorar y en cuánto?",
  "¿Cuál es la línea base actual de ese indicador?",
  "¿Quién decide y quién aprueba el presupuesto?",
  "¿Qué pasa si no se resuelve este trimestre?",
  "¿Existe fecha objetivo o urgencia?",
];

export const discoveryObjective =
  "Problema → causa → impacto → prioridad → métrica → decisor → solución → ROI → siguiente paso.";

export const stages = [
  "Identificar",
  "Calificar",
  "Registrar",
  "Discovery",
  "Validar viabilidad",
  "Diseñar solución",
  "Cotizar",
  "Presentar",
  "Cerrar",
  "Implementar",
  "Medir",
  "Evolucionar",
];

export const roles = {
  partner: [
    "Prospección: identifica cuentas, necesidades y genera la oportunidad.",
    "Relación: lidera la conversación y la confianza con el cliente.",
    "Contexto: levanta el problema, el proceso y el impacto.",
    "Acompañamiento: participa en la presentación y el cierre.",
  ],
  netlife: [
    "Validación técnica: arquitectura, viabilidad y alcance.",
    "Diseño: levantamiento funcional y propuesta de solución.",
    "Implementación: configuración, integraciones y pruebas.",
    "Upselling: opera, soporta y expande la cuenta.",
  ],
};

export const scopeRules = {
  yes: [
    "Hablar del problema, impacto y resultado esperado.",
    "Explicar capacidades In-House sujetas a evaluación.",
    "Presentar valores de entrada como referenciales.",
    "Acordar indicador y línea base antes de prometer mejoras.",
  ],
  no: [
    "Comprometer una fecha de salida sin validación técnica.",
    "Asegurar un porcentaje exacto de mejora antes del discovery.",
    "Prometer integraciones sin conocer los sistemas del cliente.",
    "Cerrar alcance sin definir qué no incluye el proyecto.",
  ],
};

export const commercialRule =
  "No comprometas un desarrollo ni un resultado antes de tener proceso, datos, integraciones, responsables y criterio de éxito.";

export const pitch30 = {
  intro:
    "Trabajamos con empresas que están perdiendo tiempo, oportunidades o visibilidad en procesos que hoy se hacen a mano.",
  body: "Con automatización, datos e IA conectamos lo que ya tienen, eliminamos el trabajo repetitivo y ponemos los indicadores a la vista.",
  close: "¿Qué proceso te gustaría que dejara de depender de una persona revisándolo?",
  openers: [
    "¿Qué proceso te consume más tiempo del equipo?",
    "¿Qué consultas recibe el equipo repetitivamente?",
    "¿Qué indicador quieres ver en tiempo real y hoy no puedes?",
    "Si automatizaras un proceso este trimestre, ¿cuál tendría mayor impacto?",
  ],
};

export const kpis = [
  {
    area: "Atención",
    indicators: ["Tiempo de primera respuesta", "Conversaciones resueltas sin humano", "Satisfacción del cliente"],
  },
  {
    area: "Ventas",
    indicators: ["Conversión por etapa", "Leads contactados en menos de 5 minutos", "Ciclo de venta"],
  },
  {
    area: "Operación",
    indicators: ["Tiempo de ciclo del proceso", "Errores por lote", "Horas manuales liberadas"],
  },
  {
    area: "Dirección",
    indicators: ["Precisión del forecast", "Contacto a leads prioritarios", "Disponibilidad de indicadores"],
  },
];

export const kpiRecommendation =
  "No comprometas una cifra exacta de mejora antes del discovery. Acuerda el indicador, define la línea base y luego fija el objetivo.";

export const sectorCases: {
  sector: Sector;
  situation: string;
  solution: string;
  result: string;
  slugs: string[];
}[] = [
  {
    sector: "Inmobiliario",
    situation: "Los leads se enfrían por demora en WhatsApp.",
    solution: "Agente IA + CRM con seguimiento automático",
    result: "Más visitas agendadas y menos leads perdidos.",
    slugs: ["agente-ia", "crm-cx"],
  },
  {
    sector: "Salud",
    situation: "Agenda saturada y pacientes que no confirman.",
    solution: "Agente IA para agendamiento y recordatorios",
    result: "Menos ausencias y agenda mejor ocupada.",
    slugs: ["agente-ia", "automatizaciones"],
  },
  {
    sector: "Retail",
    situation: "Consultas repetidas de stock, precios y despacho.",
    solution: "Power Inbox AI + integración de catálogo",
    result: "Atención más rápida con información consistente.",
    slugs: ["power-inbox-ai", "integraciones"],
  },
  {
    sector: "HORECA",
    situation: "Demoras en pedidos y descontrol de inventario.",
    solution: "Gastro.ec: menú QR, POS, cocina e inventario",
    result: "Menos errores y control operativo real.",
    slugs: ["gastro-ec"],
  },
  {
    sector: "Industria",
    situation: "Reportes manuales y trazabilidad incompleta.",
    solution: "Automatización + procesamiento documental",
    result: "Menor tiempo de ciclo y mayor trazabilidad.",
    slugs: ["automatizaciones", "dashboards"],
  },
  {
    sector: "Financiero",
    situation: "Validación de documentos lenta y dispersa.",
    solution: "Procesamiento documental + integraciones",
    result: "Aprobaciones más rápidas y auditables.",
    slugs: ["automatizaciones", "integraciones"],
  },
  {
    sector: "Educación",
    situation: "Cientos de consultas de admisión en temporada.",
    solution: "Agente IA + CRM de admisiones",
    result: "Más postulantes atendidos sin ampliar el equipo.",
    slugs: ["agente-ia", "crm-cx"],
  },
  {
    sector: "Servicios",
    situation: "Cada área maneja su propia versión de la información.",
    solution: "Integraciones + dashboards ejecutivos",
    result: "Decisiones con un solo set de datos.",
    slugs: ["integraciones", "dashboards"],
  },
];

export const caseDisclaimer =
  "Resultados ilustrativos. Deben validarse y reemplazarse con datos reales una vez medidos.";

export const trustBadges = [
  "Meta Business Partner",
  "ISO/IEC 27001 (AENOR)",
  "PCI DSS Verified",
  "Meta Tech Provider",
];

export const trustStatement =
  "Identidad · firma electrónica · cifrado · protección de datos · cumplimiento y trazabilidad, de extremo a extremo.";

export const getSolution = (slug: string) => solutions.find((s) => s.slug === slug);
