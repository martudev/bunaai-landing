/**
 * Precios vigentes "por ahora": 49 / 99 / 249.
 *
 * Por qué el piso es USD 49 y no menos: cada cliente corre sobre
 * infraestructura propia, que cuesta ~USD 20/mes solo en servidores. Es una
 * decisión de producto, no un sobrecosto a eliminar: el aislamiento es lo que
 * evita que la falla de un cliente afecte a otro. Con Starter a USD 25 ese
 * costo se comía todo el margen, antes incluso de la comisión de Stripe.
 *
 * El consumo de IA todavía no entra en esta cuenta. Cuando entre, conviene
 * revisar si cada plan necesita un crédito de IA con tope.
 *
 * El schema de SoftwareApplication lee lowPrice/highPrice de acá, así que
 * cambiando los planes se actualiza también lo que ve Google.
 */

export const CURRENCY = "USD";

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 49,
    tagline: "Para validar el primer caso de uso",
    description:
      "Un negocio que quiere dejar de responder a mano las mismas diez preguntas.",
    features: [
      "1 número de WhatsApp",
      "Integración con Tiendanube",
      "Automatizaciones ilimitadas",
      "Versionado y rollback",
      "Métricas básicas",
      "Soporte por email y WhatsApp",
    ],
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: 99,
    tagline: "Para el e-commerce que ya vende todos los días",
    description:
      "Carritos abandonados, seguimiento de pagos y difusiones corriendo en simultáneo.",
    features: [
      "Todo lo de Starter",
      "Difusiones segmentadas",
      "Alertas en Slack",
      "Métricas a medida",
      "Tests automáticos en cada publicación",
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

/**
 * Tabla comparativa de /precios.
 *
 * Es el detalle de las listas de `PLANS.features` de arriba: las tarjetas
 * resumen ("Todo lo de Starter"), la tabla muestra cada fila completa. Si se
 * agrega, saca o mueve una feature de plan, hay que tocar los dos lugares.
 *
 * Cada valor va en el orden de PLANS (starter, growth, business):
 *  - `true`: incluido · `false`: no incluido · string: el valor concreto.
 */
type ComparisonValue = boolean | string;

export const PLAN_COMPARISON: {
  group: string;
  rows: { feature: string; values: [ComparisonValue, ComparisonValue, ComparisonValue] }[];
}[] = [
  {
    group: "Infraestructura",
    rows: [
      { feature: "Servidores y base de datos dedicados", values: [true, true, true] },
    ],
  },
  {
    group: "Canales e integraciones",
    rows: [
      { feature: "Números de WhatsApp", values: ["1", "1", "Varios"] },
      { feature: "Integración con Tiendanube", values: [true, true, true] },
      { feature: "Alertas en Slack", values: [false, true, true] },
      { feature: "Integraciones a medida por API", values: [false, false, true] },
    ],
  },
  {
    group: "Automatizaciones",
    rows: [
      { feature: "Automatizaciones", values: ["Ilimitadas", "Ilimitadas", "Ilimitadas"] },
      { feature: "Difusiones segmentadas", values: [false, true, true] },
    ],
  },
  {
    group: "Publicación y control de cambios",
    rows: [
      { feature: "Versionado y rollback", values: [true, true, true] },
      { feature: "Tests automáticos en cada publicación", values: [false, true, true] },
      { feature: "Deploys programados", values: [false, true, true] },
    ],
  },
  {
    group: "Métricas",
    rows: [{ feature: "Métricas", values: ["Básicas", "A medida", "A medida"] }],
  },
  {
    group: "Equipo y soporte",
    rows: [
      { feature: "Usuarios y permisos", values: [false, false, true] },
      { feature: "Acompañamiento en la implementación", values: [false, false, true] },
      { feature: "Soporte", values: ["Email y WhatsApp", "Prioritario", "Canal directo"] },
    ],
  },
];

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
      "Sí, y no es compartida: cada cliente tiene sus propios servidores y su propia base de datos, así que la falla o el pico de otro negocio no te afecta. Servidores, almacenamiento, monitoreo y deploys están incluidos. Montar algo equivalente por tu cuenta costaría parecido solo en servidores, antes de sumar el tiempo de mantenerlo.",
  },
] as const;
