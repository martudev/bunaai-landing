/**
 * Precios vigentes "por ahora": 49 / 99 / desde 249.
 *
 * Por qué el piso es USD 49 y no menos: cada cliente corre sobre
 * infraestructura propia, que cuesta ~USD 20/mes solo en servidores. Es una
 * decisión de producto, no un sobrecosto a eliminar: el aislamiento es lo que
 * evita que la falla de un cliente afecte a otro. Con Starter a USD 25 ese
 * costo se comía todo el margen, antes incluso de la comisión de Stripe.
 *
 * El consumo de IA está incluido en el precio: Starter trae USD 5 por mes y
 * desde Growth es ilimitado.
 *
 * El schema de SoftwareApplication lee lowPrice/highPrice de acá, así que
 * cambiando los planes se actualiza también lo que ve Google.
 */

import { CTA, whatsappLink } from "./site";

export const CURRENCY = "USD";

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 49,
    priceFrom: false,
    tagline: "Para validar el primer caso de uso",
    description:
      "Un negocio que quiere dejar de responder a mano las mismas diez preguntas.",
    features: [
      "1 número de WhatsApp",
      "Integración con Tiendanube",
      "Recuperación de carritos abandonados",
      "Automatizaciones ilimitadas",
      "USD 5 de consumo de IA incluidos por mes",
      "Historial de cambios y vuelta atrás en un click",
      "Métricas a medida",
      "Soporte por email y WhatsApp",
    ],
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: 99,
    priceFrom: false,
    tagline: "Para el e-commerce que ya vende todos los días",
    description:
      "IA sin tope para atender todo el volumen, difusiones a tus clientes y avisos cuando algo importa.",
    features: [
      "Todo lo de Starter",
      "Consumo de IA ilimitado",
      "Difusiones segmentadas",
      "Alertas por WhatsApp, email y Slack",
      "Aviso automático si un cambio publicado no responde bien",
      "Cambios programados con fecha y hora",
      "Soporte prioritario",
    ],
    featured: true,
  },
  {
    // `priceFrom` muestra "Desde" antes del monto: Business se arma según la
    // operación de cada cliente, así que 249 es el piso y no el precio final.
    id: "business",
    name: "Business",
    price: 249,
    priceFrom: true,
    tagline: "Para operaciones con volumen, equipo o sistemas propios",
    description:
      "Varios canales, varios usuarios y procesos particulares. Definimos el alcance y el precio final con vos.",
    features: [
      "Todo lo de Growth",
      "Varios números y canales",
      "Usuarios y permisos",
      "Conexión con tus propios sistemas (ERP, CRM)",
      "Implementación a medida de tus procesos",
      "Canal directo de soporte",
    ],
    featured: false,
  },
] as const;

/**
 * Planes que no arrancan con el registro sino con una charla por WhatsApp:
 * Business se arma según la operación de cada cliente y hoy los varios
 * números se configuran con nosotros. El resto va a "Empezar gratis".
 */
const SALES_PLANS: readonly string[] = ["business"];

/** El CTA de cada plan. El mensaje ya viene escrito con el nombre del plan. */
export function planCta(plan: (typeof PLANS)[number]) {
  if (!SALES_PLANS.includes(plan.id)) return CTA.primary;
  return {
    label: "Hablemos",
    href: whatsappLink(`Hola, quiero saber más del plan ${plan.name} de BunaAI.`),
  };
}

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
type Values = [ComparisonValue, ComparisonValue, ComparisonValue];

export const PLAN_COMPARISON: {
  group: string;
  rows: { feature: string; values: Values }[];
}[] = [
  {
    group: "Infraestructura e IA",
    rows: [
      { feature: "Servidores y base de datos dedicados", values: [true, true, true] },
      { feature: "Consumo de IA incluido", values: ["USD 5 por mes", "Ilimitado", "Ilimitado"] },
    ],
  },
  {
    group: "Canales e integraciones",
    rows: [
      { feature: "Números de WhatsApp", values: ["1", "1", "Varios"] },
      { feature: "Integración con Tiendanube", values: [true, true, true] },
      { feature: "Alertas por WhatsApp, email y Slack", values: [false, true, true] },
      { feature: "Conexión con tus propios sistemas (ERP, CRM)", values: [false, false, true] },
    ],
  },
  {
    group: "Automatizaciones",
    rows: [
      { feature: "Automatizaciones", values: ["Ilimitadas", "Ilimitadas", "Ilimitadas"] },
      { feature: "Recuperación de carritos abandonados", values: [true, true, true] },
      { feature: "Difusiones segmentadas", values: [false, true, true] },
    ],
  },
  {
    group: "Publicación y control de cambios",
    rows: [
      { feature: "Historial de cambios y vuelta atrás en un click", values: [true, true, true] },
      { feature: "Aviso automático si un cambio publicado no responde bien", values: [false, true, true] },
      { feature: "Cambios programados con fecha y hora", values: [false, true, true] },
    ],
  },
  {
    group: "Equipo y soporte",
    rows: [
      { feature: "Usuarios y permisos", values: [false, false, true] },
      { feature: "Implementación a medida de tus procesos", values: [false, false, true] },
      { feature: "Soporte", values: ["Email y WhatsApp", "Prioritario", "Canal directo"] },
    ],
  },
];

export const PRICING_FAQS = [
  {
    question: "¿Hay un plan gratis o una prueba?",
    answer:
      "Sí: tenés 15 días de prueba gratis, sin cargar una tarjeta. Creás tu cuenta, conectás WhatsApp y armás tus automatizaciones con tus clientes reales; recién pagás si decidís seguir. Si al terminar la prueba no cargaste una tarjeta, el agente se pausa hasta que hagas el pago, y tus automatizaciones quedan guardadas tal como las dejaste.",
  },
  {
    question: "¿El consumo de IA está incluido?",
    answer:
      "Sí. Starter incluye USD 5 de consumo de IA por mes, y desde Growth el consumo es ilimitado. En el panel ves cuánto llevás usado en tiempo real, así que nunca hay una factura sorpresa.",
  },
  {
    question: "¿Puedo cambiar de plan o darme de baja?",
    answer:
      "Sí, cuando quieras. Entre Starter y Growth lo cambiás desde el panel; para pasar a Business escribinos y lo armamos con vos. Si bajás de plan mantenés tus automatizaciones y tu historial de versiones; solo cambian los límites.",
  },
  {
    question: "¿El precio incluye la infraestructura?",
    answer:
      "Sí, y no es compartida: cada cliente tiene servidores y base de datos exclusivos para su cuenta, así que la falla o el pico de otro negocio no te afecta. Servidores, almacenamiento, monitoreo y actualizaciones están incluidos. Montar algo equivalente por tu cuenta costaría parecido solo en servidores, antes de sumar el tiempo de mantenerlo.",
  },
] as const;
