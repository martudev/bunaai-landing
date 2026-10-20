/**
 * Precios vigentes "por ahora": USD 29 / 99 / desde 249 convertidos a pesos
 * (ver USD_TO_ARS), con opción anual.
 *
 * Cada cliente corre sobre infraestructura propia (~USD 12/mes en servidores):
 * el aislamiento es lo que evita que la falla de un cliente afecte a otro.
 * Starter a USD 29 deja un margen fino a propósito: es la puerta de entrada,
 * y Growth es donde está el margen.
 *
 * La IA no está incluida en ningún plan: se paga aparte, por uso, al costo
 * exacto del proveedor y sin margen. Cada cliente elige en su panel si la
 * quiere sin límite (paga a fin de mes) o con un límite mensual, por separado
 * para el agente de la web y para el bot.
 *
 * El schema de SoftwareApplication lee lowPrice/highPrice de acá, así que
 * cambiando los planes se actualiza también lo que ve Google.
 */

import { CTA, whatsappLink } from "./site";

/**
 * Los precios se publican en pesos y se cobran con Mercado Pago. La base sigue
 * pensada en dólares (los costos de infraestructura e IA son en USD), así que
 * cada plan se define en USD y se convierte con este tipo de cambio fijo.
 * Para actualizar todos los precios alcanza con cambiar este número.
 */
export const USD_TO_ARS = 1530;

/** Código ISO para el schema de Google. */
export const CURRENCY = "ARS";

function ars(usd: number) {
  return usd * USD_TO_ARS;
}

/** "$44.370": el formato con el que se muestra cualquier monto en pesos. */
export function formatPrice(amount: number) {
  return `$${amount.toLocaleString("es-AR")}`;
}

/**
 * Pago anual: se pagan 10 meses y se usan 12 ("2 meses gratis").
 * Business no tiene precio anual publicado porque su precio final se arma
 * con cada cliente.
 */
export const ANNUAL_MONTHS_PAID = 10;

export function annualTotal(price: number) {
  return price * ANNUAL_MONTHS_PAID;
}

/**
 * Equivalente mensual del pago anual. Redondea para arriba: nunca mostrar un
 * precio por mes más bajo que el que realmente se paga.
 */
export function annualMonthly(price: number) {
  return Math.ceil(annualTotal(price) / 12);
}

export const PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: ars(29),
    priceFrom: false,
    tagline: "Para validar el primer caso de uso",
    description:
      "Un negocio que quiere dejar de responder a mano las mismas diez preguntas.",
    features: [
      "1 número de WhatsApp",
      "Integración con Tiendanube",
      "Recuperación de carritos abandonados",
      "Automatizaciones ilimitadas",
      "IA al costo exacto, sin margen",
      "Historial de cambios y vuelta atrás en un click",
      "Métricas a medida",
      "Soporte por email y WhatsApp",
    ],
    featured: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: ars(99),
    priceFrom: false,
    tagline: "Para vender más con los clientes que ya tenés",
    description:
      "Difusiones a tus clientes, tu equipo trabajando en el mismo panel y avisos cuando algo importa.",
    // Ordenadas por lo que mueve a pasarse desde Starter: primero lo que
    // genera ventas (difusiones), después el equipo; las funciones técnicas
    // de publicación van al final. La IA no está acá: se paga por uso en
    // todos los planes.
    features: [
      "Todo lo de Starter",
      "Difusiones segmentadas",
      "Hasta 5 usuarios para tu equipo, con permisos",
      "Alertas por WhatsApp, email y Slack",
      "Soporte prioritario",
      "Cambios programados con fecha y hora",
      "Aviso automático si un cambio publicado no responde bien",
    ],
    featured: true,
  },
  {
    // `priceFrom` muestra "Desde" antes del monto: Business se arma según la
    // operación de cada cliente, así que el monto es el piso y no el precio final.
    id: "business",
    name: "Business",
    price: ars(249),
    priceFrom: true,
    tagline: "Para operaciones con volumen, equipo o sistemas propios",
    description:
      "Varios canales, varios usuarios y procesos particulares. Definimos el alcance y el precio final con vos.",
    features: [
      "Todo lo de Growth",
      "Varios números y canales",
      "Usuarios ilimitados para tu equipo, con permisos",
      "Conexión con tus propios sistemas (ERP, CRM)",
      "Implementación a medida de tus procesos",
      "Canal directo de soporte",
    ],
    featured: false,
  },
] as const;

/**
 * Planes que no arrancan con la demo sino con una charla por WhatsApp:
 * Business se arma según la operación de cada cliente y hoy los varios
 * números se configuran con nosotros. El resto va a "Pedir una demo".
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
      { feature: "Consumo de IA", values: ["Al costo exacto", "Al costo exacto", "Al costo exacto"] },
      { feature: "Límite de gasto de IA configurable", values: [true, true, true] },
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
      { feature: "Usuarios para tu equipo, con permisos", values: [false, "Hasta 5", "Ilimitados"] },
      { feature: "Implementación a medida de tus procesos", values: [false, false, true] },
      { feature: "Soporte", values: ["Email y WhatsApp", "Prioritario", "Canal directo"] },
    ],
  },
];

export const PRICING_FAQS = [
  {
    question: "¿Puedo verlo antes de pagar?",
    answer:
      "Sí: se empieza con una demo de media hora, sin compromiso, donde armamos en vivo una automatización con tus casos reales. Si te sirve, te creamos la cuenta y activás el plan desde Configuración, con Mercado Pago. Si no es para vos todavía, te lo decimos.",
  },
  {
    question: "¿Cómo se paga?",
    answer:
      "En pesos, con Mercado Pago: tarjeta de crédito, débito o dinero en cuenta. El plan se cobra solo todos los meses (o una vez al año si elegís el pago anual), y podés cancelarlo cuando quieras.",
  },
  {
    question: "¿Cómo se cobra la IA?",
    answer:
      "Aparte del plan, por lo que uses, y al costo exacto que nos cobra el proveedor de IA: no le sumamos margen. Desde tu panel elegís, por separado para el agente y para el bot, si la querés sin límite o con un límite mensual y un aviso por email al porcentaje que elijas. Si llega al límite, la IA se frena hasta el mes siguiente o hasta que lo subas. El consumo se mide en dólares, que es como lo cobra el proveedor, y a fin de mes te lo cobramos en pesos con Mercado Pago, al dólar oficial del día del cobro. En el panel ves cuánto llevás gastado en tiempo real.",
  },
  {
    question: "¿Hay descuento si pago por año?",
    // Los montos salen de PLANS para que no queden desfasados si cambia un precio.
    answer: `Sí: con el pago anual pagás ${ANNUAL_MONTHS_PAID} meses y usás 12, o sea 2 meses gratis. Starter queda en ${formatPrice(annualTotal(PLANS[0].price))} por año y Growth en ${formatPrice(annualTotal(PLANS[1].price))} por año. Para Business el precio anual lo armamos con vos.`,
  },
  {
    question: "¿Puedo cambiar de plan o darme de baja?",
    answer:
      "Sí, cuando quieras. Entre Starter y Growth lo cambiás desde el panel; para pasar a Business escribinos y lo armamos con vos. Si bajás de plan mantenés tus automatizaciones y tu historial de versiones; solo cambian los límites.",
  },
  {
    question: "¿El precio incluye la infraestructura?",
    answer:
      "Sí, y no es compartida: cada cliente tiene servidores y base de datos exclusivos para su cuenta, así que la falla o el pico de otro negocio no te afecta. Servidores, almacenamiento, monitoreo y actualizaciones están incluidos.",
  },
] as const;
