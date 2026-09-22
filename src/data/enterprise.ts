import {
  BarChart3,
  Blocks,
  Bot,
  BrainCircuit,
  Cable,
  FileSearch,
  MessagesSquare,
  ScanEye,
  Sparkles,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type BusinessObjective = {
  id: string;
  label: string;
  signal: string;
  processes: string[];
  metrics: string[];
};

export const businessObjectives = [
  { id: "ingresos", label: "Aumentar ingresos", signal: "Oportunidades que no avanzan o clientes que abandonan antes de comprar.", processes: ["Captura y calificación de leads", "Seguimiento comercial", "Venta cruzada y recuperación"], metrics: ["Conversión", "Ingresos", "LTV"] },
  { id: "costos", label: "Reducir costos operativos", signal: "Horas de equipo consumidas por tareas repetitivas y controles manuales.", processes: ["Digitación y validación", "Aprobaciones", "Conciliación y reportes"], metrics: ["Costo por operación", "Horas ahorradas", "Productividad"] },
  { id: "velocidad", label: "Responder más rápido", signal: "Solicitudes que esperan por disponibilidad, traspasos o búsqueda de información.", processes: ["Atención omnicanal", "Clasificación y asignación", "Resolución y escalamiento"], metrics: ["Tiempo de respuesta", "FCR", "SLA"] },
  { id: "automatizar", label: "Automatizar procesos", signal: "Personas copiando datos y persiguiendo pasos que podrían ejecutarse por reglas.", processes: ["Workflows y aprobaciones", "Notificaciones", "Actualización de sistemas"], metrics: ["Tiempo de ciclo", "Errores", "Costo operativo"] },
  { id: "experiencia", label: "Mejorar la experiencia del cliente", signal: "El cliente repite su historia y recibe respuestas distintas según el canal.", processes: ["Historial unificado", "Atención y postventa", "Gestión de reclamos"], metrics: ["NPS", "CSAT", "Retención"] },
  { id: "control", label: "Tener control de la operación", signal: "La gerencia descubre desviaciones cuando el cierre ya ocurrió.", processes: ["Monitoreo de KPIs", "Alertas operativas", "Trazabilidad de punta a punta"], metrics: ["SLA", "Desviaciones", "Productividad"] },
  { id: "datos", label: "Tomar decisiones con datos", signal: "La información existe, pero está dispersa, atrasada o no es comparable.", processes: ["Consolidación de fuentes", "Forecasting", "Análisis de rentabilidad"], metrics: ["Precisión", "Tiempo de decisión", "Margen"] },
  { id: "riesgos", label: "Reducir errores y riesgos", signal: "Los controles dependen de revisión humana y no dejan trazabilidad suficiente.", processes: ["Validación automática", "Detección de anomalías", "Control de accesos"], metrics: ["Errores", "Incidentes", "Cumplimiento"] },
  { id: "escala", label: "Escalar sin aumentar proporcionalmente el equipo", signal: "El volumen crece más rápido que la capacidad de atención u operación.", processes: ["Autoservicio inteligente", "Priorización", "Automatización de tareas"], metrics: ["Volumen por persona", "Costo unitario", "Capacidad"] },
  { id: "conectar", label: "Conectar mis sistemas", signal: "Cada área opera con una versión diferente del cliente, pedido o inventario.", processes: ["ERP y CRM", "E-commerce y pagos", "APIs y bases de datos"], metrics: ["Errores de sincronización", "Tiempo de ciclo", "Trazabilidad"] },
  { id: "iniciar-ia", label: "Implementar IA y definir por dónde empezar", signal: "Existen ideas, pero no un caso de negocio priorizado ni una línea base.", processes: ["Diagnóstico de oportunidades", "Priorización por impacto", "Piloto medible"], metrics: ["Viabilidad", "Adopción", "Retorno"] },
] satisfies [BusinessObjective, ...BusinessObjective[]];

export type EnterpriseCapability = {
  id: string;
  title: string;
  shortTitle: string;
  icon: LucideIcon;
  description: string;
  statement?: string;
  items: string[];
  areas: string[];
  featured?: boolean;
};

export const enterpriseCapabilities: EnterpriseCapability[] = [
  { id: "conversacional", title: "Inteligencia conversacional", shortTitle: "Conversación", icon: MessagesSquare, description: "Sistemas capaces de conversar, atender, vender, calificar, recomendar, gestionar solicitudes y ejecutar acciones dentro de procesos empresariales.", statement: "No es un chatbot: consulta información, actualiza sistemas y escala excepciones a una persona.", items: ["WhatsApp, web, voz, email y redes", "Ventas, servicio, cobranzas y reservas", "Calificación, seguimiento y postventa"], areas: ["Comercial", "Servicio", "Cobranzas"] },
  { id: "omnicanal", title: "Plataforma omnicanal inteligente", shortTitle: "Omnicanalidad", icon: Blocks, description: "Centralizamos conversaciones, clientes, oportunidades y equipos en una sola operación omnicanal.", statement: "Una conversación nunca debería perderse porque cambió de canal o de asesor.", items: ["Historial unificado y distribución de leads", "Embudo, SLA y supervisión", "Analítica, calidad y trazabilidad"], areas: ["Comercial", "Marketing", "Servicio"] },
  { id: "orquestacion", title: "Orquestación y automatización de procesos", shortTitle: "Orquestación", icon: Workflow, description: "Diseñamos flujos donde personas, sistemas e inteligencia artificial trabajan como una sola operación.", items: ["Leads, pedidos y solicitudes", "Facturación, cartera y aprobaciones", "Documentos, colaboradores y notificaciones"], areas: ["Operaciones", "Finanzas", "Talento Humano"] },
  { id: "datos", title: "Inteligencia de datos y decisiones", shortTitle: "Decisiones", icon: BarChart3, description: "Convertimos información dispersa en decisiones mediante BI, KPIs, alertas, segmentación y análisis operativo.", statement: "No más reportes que explican qué pasó. Diseñamos inteligencia que ayuda a decidir qué hacer después.", items: ["Dashboards ejecutivos y alertas", "Rentabilidad, churn y conversión", "Productividad, inventario y cartera"], areas: ["Gerencia General", "Finanzas", "Operaciones"] },
  { id: "predictiva", title: "IA predictiva y modelos inteligentes", shortTitle: "Predicción", icon: BrainCircuit, description: "Pasamos del análisis histórico a modelos que anticipan escenarios y priorizan la siguiente acción.", statement: "De analizar el pasado a anticipar lo que probablemente sucederá.", items: ["Demanda, ventas y forecast financiero", "Scoring, propensión y riesgo de abandono", "Fraude, inventario y Next Best Action"], areas: ["Comercial", "Finanzas", "Operaciones"] },
  { id: "integraciones", title: "Integraciones y ecosistemas conectados", shortTitle: "Integraciones", icon: Cable, description: "Conectamos los sistemas que hoy funcionan separados: ERP, CRM, comercio, pagos, inventarios, aplicaciones, APIs y bases de datos.", statement: "No necesitas reemplazar toda tu tecnología. Muchas veces el problema es que lo que ya tienes no conversa entre sí.", items: ["Microsoft, Google, Meta y Odoo", "Sistemas propios y legacy", "Datos y eventos sincronizados"], areas: ["Tecnología", "Operaciones", "Finanzas"] },
  { id: "medida", title: "Soluciones y desarrollo a medida", shortTitle: "A medida", icon: Sparkles, description: "Si tu proceso no cabe en una plataforma estándar, diseñamos la solución desde el proceso real y la arquitectura necesaria.", statement: "Inversión definida según diagnóstico, alcance, integraciones y complejidad.", items: ["IA generativa, Machine Learning y agentes", "Aplicaciones, portales, APIs y workflows", "Datos, visión, documentos y modelos predictivos"], areas: ["Tecnología", "Gerencia General", "Operaciones"], featured: true },
  { id: "vision", title: "Computer Vision y operaciones inteligentes", shortTitle: "Visión", icon: ScanEye, description: "Convertimos video en información operativa para interpretar aforos, filas, eventos, espacios y cumplimiento.", statement: "Una cámara puede registrar. La visión inteligente puede interpretar.", items: ["Conteo, tiempos de espera y mapas de calor", "Seguridad, supervisión y control", "Eventos, anomalías y protocolos"], areas: ["Operaciones", "Logística", "Tecnología"] },
  { id: "documental", title: "Automatización documental e inteligencia de contenido", shortTitle: "Documentos", icon: FileSearch, description: "Leemos, extraemos, clasificamos y validamos información para que los documentos avancen dentro del proceso.", items: ["OCR, facturas, contratos y órdenes", "Expedientes, formularios y resúmenes", "Comparación y generación documental"], areas: ["Legal", "Finanzas", "Compras"] },
  { id: "productividad", title: "IA para productividad corporativa", shortTitle: "Productividad", icon: Bot, description: "Copilotos, conocimiento y asistentes internos que reducen trabajo administrativo sin perder control.", statement: "El objetivo no es que tu equipo use IA. Es reducir horas de trabajo que no generan valor.", items: ["Búsqueda y bases de conocimiento", "Documentos, minutas y reuniones", "Políticas y tareas administrativas"], areas: ["Talento Humano", "Legal", "Gerencia General"] },
];

export const businessAreas = [
  { name: "Comercial", problem: "Leads sin seguimiento.", cause: "La información y el próximo paso dependen de cada asesor.", impact: "Ingresos perdidos y baja velocidad de respuesta.", capability: "Inteligencia conversacional + automatización + omnicanalidad + scoring.", result: "Mayor velocidad de respuesta, seguimiento y conversión." },
  { name: "Marketing", problem: "Campañas sin trazabilidad hasta la venta.", cause: "Canales, audiencias y gestión comercial operan separados.", impact: "CAC difícil de controlar y presupuesto mal asignado.", capability: "Integraciones + segmentación + datos + automatización.", result: "Atribución, audiencias accionables y seguimiento conectado." },
  { name: "Servicio al Cliente", problem: "Solicitudes repetidas y tiempos variables.", cause: "Historial fragmentado y asignación manual.", impact: "Abandono, reclamos y costos de atención.", capability: "Omnicanalidad + inteligencia conversacional + orquestación.", result: "Atención trazable, respuestas consistentes y mejor FCR." },
  { name: "Operaciones", problem: "Procesos que dependen de hojas, correos y coordinación manual.", cause: "Reglas no digitalizadas y sistemas desconectados.", impact: "Demoras, reprocesos y poca capacidad de escala.", capability: "Orquestación + integraciones + inteligencia operativa.", result: "Menor tiempo de ciclo, control y trazabilidad." },
  { name: "Finanzas", problem: "Cierres y reportes consumen demasiado tiempo.", cause: "Datos dispersos y conciliaciones manuales.", impact: "Decisiones tardías y riesgo de error.", capability: "Automatización documental + integraciones + BI.", result: "Información consolidada y alertas antes del cierre." },
  { name: "Cobranzas", problem: "Cartera gestionada de forma reactiva.", cause: "Priorización manual y contacto sin trazabilidad.", impact: "Mayor mora y alto costo de recuperación.", capability: "Modelos de prioridad + conversación + automatización.", result: "Gestión segmentada, seguimiento y actualización automática." },
  { name: "Logística", problem: "Excepciones detectadas tarde.", cause: "Eventos operativos aislados del inventario y la distribución.", impact: "Demoras, reclamos y costo adicional.", capability: "Integraciones + alertas + analítica predictiva.", result: "Visibilidad de punta a punta y respuesta anticipada." },
  { name: "Compras", problem: "Solicitudes y aprobaciones sin control del ciclo.", cause: "Documentos, proveedores y responsables trabajan por canales distintos.", impact: "Compras tardías, errores y poca trazabilidad.", capability: "Workflows + documentos inteligentes + integraciones.", result: "Aprobaciones ordenadas y expediente digital completo." },
  { name: "Talento Humano", problem: "Procesos internos repetitivos y conocimiento difícil de encontrar.", cause: "Solicitudes manuales y políticas dispersas.", impact: "Horas administrativas y experiencia inconsistente.", capability: "Copilotos internos + automatización + gestión documental.", result: "Autoservicio controlado y más tiempo para trabajo de valor." },
  { name: "Legal", problem: "Revisión documental lenta y difícil de auditar.", cause: "Contratos y versiones se comparan manualmente.", impact: "Cuellos de botella y exposición a errores.", capability: "Inteligencia documental + búsqueda + workflows.", result: "Clasificación, comparación y aprobación trazables." },
  { name: "Tecnología", problem: "Demasiadas integraciones puntuales y deuda operativa.", cause: "Arquitecturas fragmentadas sin gobierno común.", impact: "Cambios lentos, incidentes y alto mantenimiento.", capability: "Arquitectura + APIs + orquestación + gobierno.", result: "Ecosistema conectado, observable y escalable." },
  { name: "Gerencia General", problem: "Las decisiones llegan después que los resultados.", cause: "Cada área reporta con tiempos y criterios distintos.", impact: "Desviaciones tardías y prioridades sin evidencia.", capability: "Capa de datos + KPIs + predicción + alertas.", result: "Visión integrada, anticipación y decisiones accionables." },
] as const;

export const industries = [
  { name: "Retail", processes: ["Conversión por tienda y canal", "Inventario y demanda", "Aforos y experiencia"] },
  { name: "E-commerce", processes: ["Recuperación de compra", "Atención postventa", "Pagos y logística"] },
  { name: "HORECA", processes: ["Pedidos y cocina", "Reservas", "Inventario y servicio"] },
  { name: "Hotelería", processes: ["Reservas y confirmación", "Experiencia del huésped", "Operación y ocupación"] },
  { name: "Salud", processes: ["Citas y recordatorios", "Documentación", "Atención y capacidad"] },
  { name: "Industria", processes: ["Control de producción", "Calidad", "Mantenimiento e inventario"] },
  { name: "Logística", processes: ["Despacho y tracking", "Excepciones", "Capacidad y rutas"] },
  { name: "Distribución", processes: ["Pedidos", "Inventario", "Cartera y cobertura"] },
  { name: "Servicios profesionales", processes: ["Prospección", "Propuestas", "Gestión documental"] },
  { name: "Educación", processes: ["Admisiones", "Atención", "Retención estudiantil"] },
  { name: "Sector financiero", processes: ["Onboarding", "Riesgo", "Cobranzas y fraude"] },
  { name: "Inmobiliario", processes: ["Calificación de leads", "Visitas", "Seguimiento comercial"] },
  { name: "Acuícola", processes: ["Producción", "Calidad", "Trazabilidad y predicción"] },
  { name: "Automotriz", processes: ["Prospección", "Taller y postventa", "Inventario"] },
] as const;

export const roiMethod = [
  { step: "01", title: "Diagnóstico", question: "¿Qué proceso está fallando?" },
  { step: "02", title: "Línea base", question: "¿Cuánto cuesta actualmente?" },
  { step: "03", title: "Oportunidad", question: "¿Qué puede eliminarse, automatizarse o mejorarse?" },
  { step: "04", title: "Arquitectura", question: "¿Qué combinación tecnológica necesitamos?" },
  { step: "05", title: "Implementación", question: "Integramos personas, procesos y tecnología." },
  { step: "06", title: "Medición", question: "Medimos impacto y definimos la siguiente mejora." },
] as const;

export const architectureLayers = [
  { name: "Canales", items: ["WhatsApp", "Web", "Email", "Voz", "Redes", "Apps"] },
  { name: "Capa de inteligencia", items: ["IA generativa", "Agentes", "Machine Learning", "NLP", "Computer Vision"] },
  { name: "Orquestación", items: ["Automatizaciones", "Workflows", "Reglas", "Integraciones"] },
  { name: "Sistemas", items: ["ERP", "CRM", "E-commerce", "Facturación", "Inventario", "APIs"] },
  { name: "Inteligencia", items: ["Dashboards", "KPIs", "Predicción", "Alertas", "Next Best Action"] },
  { name: "Resultado empresarial", items: ["Ingresos", "Ahorro", "Productividad", "Velocidad", "Control", "Experiencia", "Menor riesgo"] },
] as const;

export const securityPillars = ["Seguridad", "Protección de datos", "Control de accesos", "Integraciones seguras", "Trazabilidad", "Gobierno de información", "Arquitectura empresarial", "Cumplimiento"] as const;

export const outcomeKpis = ["Ingresos", "Conversión", "Tiempo", "Costo por operación", "Productividad", "Tiempo de respuesta", "Abandono", "Retención", "FCR", "SLA", "Cobranza", "Errores", "Horas ahorradas", "CAC", "LTV", "NPS", "CSAT"] as const;

export const solutionCapabilityNames: Record<string, string> = {
  "agente-ia": "Inteligencia conversacional",
  "crm-cx": "Operación comercial y experiencia conectada",
  "power-inbox-ai": "Plataforma omnicanal inteligente",
  dashboards: "Inteligencia de datos y decisiones",
  integraciones: "Integraciones y ecosistemas conectados",
  automatizaciones: "Orquestación y automatización de procesos",
  "adopcion-ia": "IA para productividad corporativa",
  "gastro-ec": "Operaciones inteligentes para HORECA",
  camaras: "Computer Vision y operaciones inteligentes",
};

export const getCapabilityName = (slug: string, fallback: string) =>
  solutionCapabilityNames[slug] ?? fallback;