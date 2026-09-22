import {
  BarChart3,
  Binary,
  Bot,
  BrainCircuit,
  Camera,
  FileSearch,
  GitBranch,
  Network,
  Sparkles,
  Users,
  type LucideIcon,
} from "lucide-react";

export type BusinessGoal = {
  label: string;
  signal: string;
  processes: string[];
  capabilities: string[];
  metrics: string[];
};

export const businessGoals: BusinessGoal[] = [
  {
    label: "Aumentar ingresos",
    signal: "Oportunidades que llegan, pero no avanzan con la velocidad necesaria.",
    processes: [
      "Calificación y distribución de leads",
      "Seguimiento comercial",
      "Venta cruzada y recuperación",
    ],
    capabilities: ["Inteligencia conversacional", "Omnicanalidad", "Scoring predictivo"],
    metrics: ["Conversión", "Ingresos", "Tiempo de contacto"],
  },
  {
    label: "Reducir costos operativos",
    signal: "Personas dedicadas a copiar, validar o perseguir información.",
    processes: ["Validaciones", "Carga entre sistemas", "Aprobaciones y reportes"],
    capabilities: ["Automatización", "Integraciones", "Inteligencia documental"],
    metrics: ["Costo por operación", "Horas ahorradas", "Errores"],
  },
  {
    label: "Responder más rápido",
    signal: "La demanda supera la capacidad de atención en momentos críticos.",
    processes: ["Primera respuesta", "Clasificación", "Escalamiento y seguimiento"],
    capabilities: ["Inteligencia conversacional", "Omnicanalidad", "Automatización"],
    metrics: ["Primera respuesta", "SLA", "FCR"],
  },
  {
    label: "Automatizar procesos",
    signal: "El resultado depende de tareas manuales y conocimiento disperso.",
    processes: ["Workflows de aprobación", "Notificaciones", "Actualización de sistemas"],
    capabilities: ["Orquestación", "Integraciones", "IA documental"],
    metrics: ["Tiempo de ciclo", "Productividad", "Errores"],
  },
  {
    label: "Mejorar la experiencia del cliente",
    signal: "El cliente repite información o pierde continuidad entre canales.",
    processes: ["Atención omnicanal", "Postventa", "Gestión de solicitudes"],
    capabilities: ["Plataforma omnicanal", "Inteligencia conversacional", "Analítica CX"],
    metrics: ["NPS", "CSAT", "Retención"],
  },
  {
    label: "Tener control de mi operación",
    signal: "La dirección recibe información cuando ya es tarde para actuar.",
    processes: ["Consolidación de indicadores", "Alertas", "Trazabilidad de procesos"],
    capabilities: ["Inteligencia de datos", "Integraciones", "Automatización"],
    metrics: ["Tiempo de decisión", "SLA", "Desviaciones"],
  },
  {
    label: "Tomar decisiones con datos",
    signal: "Existen datos, pero no una lectura común para decidir.",
    processes: ["Forecast", "Rentabilidad", "Análisis comercial y operativo"],
    capabilities: ["Business Intelligence", "IA predictiva", "Modelos de decisión"],
    metrics: ["Precisión del forecast", "Margen", "Conversión"],
  },
  {
    label: "Reducir errores y riesgos",
    signal: "Controles manuales permiten inconsistencias y poca trazabilidad.",
    processes: ["Validación documental", "Control de excepciones", "Auditoría"],
    capabilities: ["IA documental", "Computer Vision", "Automatización"],
    metrics: ["Errores", "Incidentes", "Cumplimiento"],
  },
  {
    label: "Escalar sin aumentar proporcionalmente mi equipo",
    signal: "Cada incremento de volumen exige más personas.",
    processes: ["Atención repetitiva", "Back office", "Gestión de demanda"],
    capabilities: ["IA conversacional", "Automatización", "Copilotos internos"],
    metrics: ["Productividad", "Costo por caso", "Capacidad"],
  },
  {
    label: "Conectar mis sistemas",
    signal: "Cada área opera con una versión diferente de la información.",
    processes: ["Sincronización de clientes", "Pedidos y facturación", "Inventario y canales"],
    capabilities: ["Integraciones", "Orquestación", "Gobierno de datos"],
    metrics: ["Reprocesos", "Latencia de datos", "Trazabilidad"],
  },
  {
    label: "Implementar IA y definir por dónde empezar",
    signal: "Hay interés en IA, pero todavía no existe un caso de negocio priorizado.",
    processes: ["Mapa de oportunidades", "Priorización por impacto", "Piloto medible"],
    capabilities: ["Diagnóstico", "Arquitectura a medida", "Gobierno de IA"],
    metrics: ["ROI", "Adopción", "Horas liberadas"],
  },
];

export type Capability = {
  id: string;
  title: string;
  description: string;
  examples: string[];
  message: string;
  icon: LucideIcon;
  featured?: boolean;
};

export const capabilities: Capability[] = [
  {
    id: "conversacional",
    title: "Inteligencia conversacional",
    description:
      "Sistemas que conversan, atienden, venden, califican, recomiendan, gestionan solicitudes y ejecutan acciones dentro de procesos empresariales.",
    examples: [
      "WhatsApp, web, voz, email y redes",
      "Ventas, servicio, cobranzas y reservas",
      "Consulta y actualización de sistemas",
      "Escalamiento de excepciones a personas",
    ],
    message: "No es un chatbot. Es una operación conectada capaz de actuar.",
    icon: Bot,
  },
  {
    id: "omnicanal",
    title: "Plataforma omnicanal inteligente",
    description:
      "Centralizamos conversaciones, clientes, oportunidades y equipos en una sola operación omnicanal.",
    examples: [
      "WhatsApp, Instagram, Facebook y webchat",
      "Email, telefonía, formularios y campañas",
      "Asignación, distribución de leads y SLA",
      "Historial, supervisión, calidad y analítica",
    ],
    message: "Una conversación nunca debería perderse porque cambió de canal o de asesor.",
    icon: Users,
  },
  {
    id: "orquestacion",
    title: "Orquestación y automatización",
    description:
      "Diseñamos flujos donde personas, sistemas e inteligencia artificial trabajan como una sola operación.",
    examples: [
      "Lead → calificación → asesor → cierre",
      "Pedido → inventario → factura → despacho",
      "Solicitud → aprobación → ejecución",
      "Factura → negociación → pago → actualización",
    ],
    message: "Ventas, finanzas, operaciones, compras, logística, talento humano, servicio y legal.",
    icon: GitBranch,
  },
  {
    id: "datos",
    title: "Inteligencia de datos y decisiones",
    description:
      "Conectamos información comercial, operativa y financiera para detectar desviaciones antes del cierre del mes.",
    examples: [
      "Business Intelligence, KPIs y alertas",
      "Forecasting, segmentación y scoring",
      "Rentabilidad, churn y conversión",
      "Productividad, demanda, cartera y CX",
    ],
    message:
      "No más reportes que explican qué pasó. Diseñamos inteligencia que ayuda a decidir qué hacer después.",
    icon: BarChart3,
  },
  {
    id: "predictiva",
    title: "IA predictiva y modelos inteligentes",
    description:
      "Modelos que priorizan decisiones usando el comportamiento y los datos reales del negocio.",
    examples: [
      "Ventas, demanda y forecast financiero",
      "Propensión, abandono y scoring",
      "Fraude y prioridad de cobranza",
      "Inventario, anomalías y Next Best Action",
    ],
    message: "De analizar el pasado a anticipar lo que probablemente sucederá.",
    icon: BrainCircuit,
  },
  {
    id: "integraciones",
    title: "Integraciones y ecosistemas conectados",
    description:
      "Conectamos los sistemas que hoy funcionan separados sin obligarte a reemplazar toda tu tecnología.",
    examples: [
      "ERP, CRM, e-commerce y facturación",
      "Inventarios, pagos, web y apps internas",
      "Microsoft, Google, Meta y Odoo",
      "APIs, bases, sistemas legacy y propios",
    ],
    message: "Muchas veces el problema es que lo que ya tienes no conversa entre sí.",
    icon: Network,
  },
  {
    id: "medida",
    title: "Soluciones y desarrollo a medida",
    description:
      "Partimos del proceso real y diseñamos la arquitectura tecnológica necesaria cuando una plataforma estándar no es suficiente.",
    examples: [
      "IA generativa y Machine Learning",
      "Aplicaciones, portales, APIs y workflows",
      "Computer Vision y procesamiento documental",
      "Dashboards, bases y sistemas personalizados",
    ],
    message: "Si tu proceso no cabe en una plataforma estándar, diseñamos la solución.",
    icon: Binary,
    featured: true,
  },
  {
    id: "vision",
    title: "Computer Vision y operaciones inteligentes",
    description:
      "Convertimos video en información operativa para supervisar espacios, eventos y cumplimiento.",
    examples: [
      "Conteo, aforo, filas y espera",
      "Mapas de calor y comportamiento",
      "Eventos, seguridad y anomalías",
      "Retail, industria, logística, salud y HORECA",
    ],
    message: "Una cámara puede registrar. La visión inteligente puede interpretar.",
    icon: Camera,
  },
  {
    id: "documental",
    title: "Automatización documental",
    description:
      "Leemos, clasificamos, extraemos y validamos información para integrarla directamente al proceso.",
    examples: [
      "OCR, facturas, contratos y órdenes",
      "Formularios y expedientes",
      "Resúmenes y comparación documental",
      "Generación automática de documentos",
    ],
    message: "Aplicable a legal, finanzas, compras, salud, seguros, RRHH y operaciones.",
    icon: FileSearch,
  },
  {
    id: "productividad",
    title: "IA para productividad corporativa",
    description:
      "Reducimos trabajo administrativo con copilotos y conocimiento interno conectado al contexto de la empresa.",
    examples: [
      "Búsqueda y bases de conocimiento",
      "Asistentes y consultas sobre políticas",
      "Documentos, minutas y reuniones",
      "Procesamiento de información y tareas",
    ],
    message: "El objetivo no es que tu equipo use IA. Es reducir horas que no generan valor.",
    icon: Sparkles,
  },
];

export type BusinessArea = {
  name: string;
  problem: string;
  cause: string;
  impact: string;
  capability: string;
  result: string;
};
export const businessAreas: BusinessArea[] = [
  {
    name: "Comercial",
    problem: "Leads sin seguimiento.",
    cause: "Asignación manual y poca visibilidad del siguiente paso.",
    impact: "Ingresos perdidos.",
    capability: "Inteligencia conversacional + automatización + omnicanalidad + scoring.",
    result: "Mayor velocidad de respuesta, seguimiento y conversión.",
  },
  {
    name: "Marketing",
    problem: "Campañas sin conexión con ventas.",
    cause: "Audiencias, conversaciones y resultados viven en sistemas separados.",
    impact: "CAC alto y atribución incompleta.",
    capability: "Integraciones + segmentación + modelos de propensión.",
    result: "Mejor priorización, conversión y lectura del retorno.",
  },
  {
    name: "Servicio al cliente",
    problem: "Solicitudes repetidas y tiempos impredecibles.",
    cause: "Canales aislados y clasificación manual.",
    impact: "Abandono, reclamos y costo por atención.",
    capability: "Omnicanalidad + IA conversacional + orquestación.",
    result: "Menor respuesta, mayor FCR, SLA y satisfacción.",
  },
  {
    name: "Operaciones",
    problem: "Procesos lentos y dependientes de personas.",
    cause: "Controles manuales y sistemas desconectados.",
    impact: "Costos, errores y baja capacidad.",
    capability: "Automatización + integraciones + analítica operativa.",
    result: "Menor ciclo, trazabilidad y más productividad.",
  },
  {
    name: "Finanzas",
    problem: "Cierres y validaciones tardías.",
    cause: "Documentos dispersos y conciliación manual.",
    impact: "Decisiones tardías y mayor riesgo.",
    capability: "IA documental + integraciones + BI financiero.",
    result: "Control, velocidad y visibilidad de desviaciones.",
  },
  {
    name: "Cobranzas",
    problem: "Cartera priorizada por intuición.",
    cause: "Seguimiento manual sin scoring ni contexto unificado.",
    impact: "Mayor mora y costo de recuperación.",
    capability: "Scoring + IA conversacional + automatización.",
    result: "Gestión priorizada y recuperación más oportuna.",
  },
  {
    name: "Logística",
    problem: "Poca visibilidad de pedidos e inventario.",
    cause: "Eventos y datos no sincronizados.",
    impact: "Demoras, quiebres y reclamos.",
    capability: "Integraciones + alertas + modelos de demanda.",
    result: "Trazabilidad, anticipación y mejor nivel de servicio.",
  },
  {
    name: "Compras",
    problem: "Aprobaciones y comparaciones manuales.",
    cause: "Documentos y criterios fuera del flujo.",
    impact: "Ciclos largos y baja auditabilidad.",
    capability: "IA documental + workflows + analítica.",
    result: "Decisiones más rápidas y controladas.",
  },
  {
    name: "Talento Humano",
    problem: "El equipo pierde horas en gestión administrativa.",
    cause: "Solicitudes, políticas y documentos dispersos.",
    impact: "Menor productividad y experiencia interna.",
    capability: "Copilotos + automatización documental + workflows.",
    result: "Autoservicio, trazabilidad y horas liberadas.",
  },
  {
    name: "Legal",
    problem: "Contratos y expedientes se revisan uno a uno.",
    cause: "Contenido no estructurado y poca automatización.",
    impact: "Demoras, riesgo y difícil trazabilidad.",
    capability: "Inteligencia documental + búsqueda + reglas.",
    result: "Revisión asistida, consistencia y control.",
  },
  {
    name: "Tecnología",
    problem: "Demanda creciente y deuda de integración.",
    cause: "Aplicaciones aisladas y trabajo reactivo.",
    impact: "Cuellos de botella y riesgo operativo.",
    capability: "Arquitectura + APIs + observabilidad + gobierno.",
    result: "Ecosistema sostenible, seguro y escalable.",
  },
  {
    name: "Gerencia General",
    problem: "La información llega tarde y sin contexto.",
    cause: "Indicadores fragmentados entre áreas.",
    impact: "Decisiones reactivas.",
    capability: "Inteligencia ejecutiva + predicción + alertas.",
    result: "Control transversal y decisiones anticipadas.",
  },
];

export const industries = [
  ["Retail", "Demanda, inventario, experiencia en tienda y prevención de pérdidas."],
  ["E-commerce", "Conversión, abandono, atención, pagos y despacho."],
  ["HORECA", "Pedidos, reservas, cocina, inventario, aforo y satisfacción."],
  ["Hotelería", "Reservas, experiencia del huésped, ocupación y operación."],
  ["Salud", "Agenda, confirmaciones, expedientes, atención y capacidad."],
  ["Industria", "Órdenes, calidad, mantenimiento, trazabilidad y seguridad."],
  ["Logística", "Rutas, eventos, inventario, entregas y alertas."],
  ["Distribución", "Pedidos, cartera, inventario, vendedores y cobertura."],
  ["Servicios profesionales", "Prospección, proyectos, documentos y rentabilidad."],
  ["Educación", "Admisiones, soporte, retención y gestión documental."],
  ["Sector financiero", "Scoring, fraude, onboarding, documentos y cobranza."],
  ["Inmobiliario", "Leads, visitas, seguimiento, documentos y cierre."],
  ["Acuícola", "Producción, calidad, inventario, trazabilidad y anomalías."],
  ["Automotriz", "Prospectos, talleres, repuestos, citas y postventa."],
] as const;

export const methodology = [
  ["Diagnóstico", "¿Qué proceso está fallando?"],
  ["Línea base", "¿Cuánto cuesta actualmente?"],
  ["Oportunidad", "¿Qué puede eliminarse, automatizarse o mejorarse?"],
  ["Arquitectura", "¿Qué combinación tecnológica necesitamos?"],
  ["Implementación", "Integramos personas, procesos y tecnología."],
  ["Medición", "Medimos impacto y evolucionamos."],
] as const;

export const architecture = [
  { title: "Canales", items: ["WhatsApp", "Web", "Email", "Voz", "Redes", "Apps"] },
  {
    title: "Capa de inteligencia",
    items: ["IA generativa", "Agentes", "Machine Learning", "NLP", "Computer Vision"],
  },
  { title: "Orquestación", items: ["Automatizaciones", "Workflows", "Reglas", "Integraciones"] },
  {
    title: "Sistemas",
    items: ["ERP", "CRM", "E-commerce", "Facturación", "Inventario", "Bases", "APIs"],
  },
  {
    title: "Inteligencia",
    items: ["Dashboards", "KPIs", "Predicción", "Alertas", "Next Best Action"],
  },
  {
    title: "Resultado empresarial",
    items: [
      "Ingresos",
      "Ahorro",
      "Productividad",
      "Velocidad",
      "Control",
      "Experiencia",
      "Menor riesgo",
    ],
  },
] as const;

export const kpiList = [
  "Ingresos",
  "Conversión",
  "Tiempo",
  "Costo por operación",
  "Productividad",
  "Respuesta",
  "Abandono",
  "Retención",
  "FCR",
  "SLA",
  "Cobranza",
  "Errores",
  "Horas ahorradas",
  "CAC",
  "LTV",
  "NPS",
  "CSAT",
];
