/**
 * ⚠️ REVISAR ANTES DE PUBLICAR
 *
 * Estos precios salen de la última estructura que se discutió (Starter 25 /
 * Growth 80 / Business 249), pero el pricing todavía estaba en exploración.
 * Confirmá montos, límites y qué cuenta como "conversación" antes de que la
 * página sea pública: es el dato que más caro sale cambiar después, porque
 * queda cacheado en Google y citado por terceros.
 *
 * El schema de SoftwareApplication lee lowPrice/highPrice de acá, así que
 * cambiando los planes se actualiza también lo que ve Google.
 */

export const CURRENCY = "USD";

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 25,
    tagline: "Para validar el primer caso de uso",
    description:
      "Un negocio que quiere dejar de responder a mano las mismas diez preguntas.",
    features: [
      "1 número de WhatsApp",
      "Integración con Tienda Nube",
      "Automatizaciones ilimitadas",
      "Versionado y rollback",
      "Métricas básicas",
      "Soporte por email",
    ],
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: 80,
    tagline: "Para el e-commerce que ya vende todos los días",
    description:
      "Carritos abandonados, seguimiento de pagos y difusiones corriendo en simultáneo.",
    features: [
      "Todo lo de Starter",
      "Difusiones segmentadas",
      "Alertas en Slack",
      "Métricas a medida",
      "Entorno de prueba",
      "Deploys programados",
      "Soporte prioritario",
    ],
    featured: true,
  },
  {
    id: "business",
    name: "Business",
    price: 249,
    tagline: "Para operaciones con volumen y equipo",
    description:
      "Varios canales, varios usuarios y automatizaciones que tocan más de un sistema.",
    features: [
      "Todo lo de Growth",
      "Varios números y canales",
      "Usuarios y permisos",
      "Integraciones a medida por API",
      "Acompañamiento en la implementación",
      "Canal directo de soporte",
    ],
    featured: false,
  },
] as const;

export const PRICING_FAQS = [
  {
    question: "¿Hay un plan gratis o una prueba?",
    answer:
      "Podés crear tu cuenta y armar tu primera automatización sin cargar una tarjeta. Recién pagás cuando querés dejarla corriendo en producción con tus clientes reales.",
  },
  {
    question: "¿Qué cuenta como conversación de IA?",
    answer:
      "Una conversación es un ida y vuelta con un cliente dentro de una misma ventana de atención, no cada mensaje suelto. En el panel ves el consumo en dólares en tiempo real, así que nunca hay una factura sorpresa.",
  },
  {
    question: "¿Puedo cambiar de plan o darme de baja?",
    answer:
      "Sí, cuando quieras y desde el panel. Si bajás de plan mantenés tus automatizaciones y tu historial de versiones; solo cambian los límites.",
  },
  {
    question: "¿El precio incluye la infraestructura?",
    answer:
      "Sí. Servidores, base de datos, almacenamiento, monitoreo y deploys están incluidos. No hay costos de hosting aparte ni tenés que contratar nada por tu cuenta.",
  },
] as const;
