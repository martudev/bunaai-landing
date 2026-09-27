/**
 * Todo el copy de la home en un solo archivo.
 *
 * Está separado de los componentes a propósito: el contenido es lo que se
 * itera cuando se hace SEO (títulos, preguntas, ejemplos), y no debería haber
 * que tocar markup para cambiar una frase.
 */

export const NAV = [
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Qué le podés pedir", href: "/#casos" },
  { label: "La plataforma", href: "/#plataforma" },
  { label: "Integraciones", href: "/#integraciones" },
  { label: "Precios", href: "/precios" },
] as const;

export const HERO = {
  eyebrow: "Agentes de IA para WhatsApp",
  title: "Automatizá tu negocio en WhatsApp describiéndolo en una frase",
  subtitle:
    "Buna es la plataforma donde le contás en castellano qué necesitás que pase y ella construye, prueba y despliega la automatización. Sin armar flujos nodo por nodo, sin código y sin servidores.",
  bullets: [
    "Conectás WhatsApp escaneando un QR",
    "Se integra con Tienda Nube en tiempo real",
    "Cada cambio queda versionado y se puede revertir",
  ],
  note: "Sin tarjeta de crédito para empezar.",
} as const;

/**
 * El demo del hero. Se renderiza como HTML plano, no como video ni imagen:
 * pesa nada, es texto indexable y no mueve el layout al cargar.
 */
export const HERO_DEMO = {
  prompt:
    "Cuando alguien abandone un carrito de más de $100.000, escribile por WhatsApp a las 2 horas. Si contesta que le parece caro, ofrecele envío gratis. Si sigue sin comprar, avisame por Slack.",
  steps: [
    "Creé el trigger de carrito abandonado sobre Tienda Nube",
    "Filtré por total mayor a $100.000 y esperé 2 horas",
    "Escribí el mensaje de WhatsApp y la respuesta con envío gratis",
    "Conecté la alerta de Slack a tu canal #ventas",
  ],
  reply: "Guardado como versión 12. ¿Lo deployamos ahora o lo programamos?",
  whatsapp: {
    business: "Hola Sofi 👋 Vi que dejaste la campera en el carrito.",
    customer: "Sí, me gustó pero me pareció cara con el envío",
    businessReply:
      "Te entiendo. Te dejo el envío sin cargo si lo cerrás hoy 🙌 Te paso el link.",
  },
} as const;

/**
 * El contraste con el status quo. Es la sección que explica por qué Buna no es
 * "otro chatbot": el eje no es la IA, es quién decide qué se puede cambiar.
 */
export const CONTRAST = {
  title: "Las otras plataformas te hacen configurar la suya. Buna construye la tuya.",
  subtitle:
    "La diferencia no es que tenga IA. Es que no estás limitado a las opciones que alguien decidió ponerte en un panel.",
  before: {
    label: "Como se hace hoy",
    items: [
      "Armás el flujo nodo por nodo y cada excepción es una rama nueva",
      "Solo podés cambiar lo que el producto decidió que se puede cambiar",
      "Para una métrica que no viene, exportás a una planilla",
      "Si algo rompe un domingo, no hay versión anterior a la que volver",
      "Cada ajuste pasa por un dev, una agencia o un ticket de soporte",
    ],
  },
  after: {
    label: "Como se hace con Buna",
    items: [
      "Lo describís en una frase y Buna escribe la lógica que hace falta",
      "Cambiás cualquier comportamiento hablando, incluso los que nadie previó",
      "Pedís la métrica y aparece en tu dashboard",
      "Cada cambio es una versión: volvés atrás en un click",
      "Lo ajustás vos, el mismo día, sin esperar a nadie",
    ],
  },
} as const;

export const STEPS = [
  {
    title: "Se lo contás",
    body: "Le escribís qué querés que pase, igual que se lo explicarías a alguien de tu equipo. No hay sintaxis que aprender ni nodos que conectar.",
  },
  {
    title: "Buna lo construye",
    body: "Interpreta la intención, escribe la lógica, la conecta con tus herramientas y te muestra exactamente qué va a hacer antes de tocar nada.",
  },
  {
    title: "Lo probás y lo deployás",
    body: "Lo probás en un entorno separado. Cuando te cierra, va a producción. Podés programar el deploy para una fecha y hora concretas.",
  },
  {
    title: "Corre y se mide",
    body: "Queda ejecutándose sobre infraestructura administrada. Ves conversaciones, resultados y costos. Si algo no funciona, rollback a la versión anterior.",
  },
] as const;

/**
 * Los casos de uso van escritos como prompts literales porque son, a la vez,
 * la mejor demo del producto y la mejor fuente de long tail: cada tarjeta es
 * una búsqueda real de alguien con ese problema.
 */
export const USE_CASES = [
  {
    tag: "Ventas",
    prompt:
      "Cuando alguien abandone un carrito de más de $100.000, escribile a las 2 horas y si dice que es caro, ofrecele envío gratis.",
    result: "Recuperación de carritos abandonados por WhatsApp",
  },
  {
    tag: "Leads",
    prompt:
      "Si alguien pregunta por precios mayoristas, pedile CUIT y rubro, y mandame el resumen por Slack.",
    result: "Calificación y seguimiento de leads mayoristas",
  },
  {
    tag: "Cobranzas",
    prompt:
      "Cuando manden un comprobante de transferencia, verificá el monto contra el pedido y confirmá el envío.",
    result: "Seguimiento de pagos por transferencia",
  },
  {
    tag: "Atención",
    prompt:
      "Respondé consultas de envíos, talles, cambios y stock consultando Tienda Nube en tiempo real.",
    result: "Atención al cliente 24/7 con datos reales",
  },
  {
    tag: "Campañas",
    prompt:
      "Mandale a los que compraron hace más de 90 días y no volvieron un 15% off, de a 200 por hora.",
    result: "Difusiones segmentadas con control de ritmo",
  },
  {
    tag: "Datos",
    prompt:
      "Creame una métrica que mida cuántas conversaciones terminan en compra después de preguntar por envíos.",
    result: "Métricas a medida, creadas hablando",
  },
  {
    tag: "Equipo",
    prompt:
      "Si el cliente se enoja o pide hablar con una persona, pasame la conversación y frená al agente.",
    result: "Derivación a un humano cuando hace falta",
  },
  {
    tag: "Programado",
    prompt:
      "A partir del lunes a las 9, los pedidos de más de $200.000 llevan otro seguimiento.",
    result: "Cambios programados con fecha y hora",
  },
] as const;

/**
 * La capa que Buna se come por el cliente. Es el argumento contra "esto lo
 * hago con ChatGPT": el modelo es la parte fácil, todo esto es lo difícil.
 */
export const PLATFORM = [
  {
    title: "Versionado y rollback",
    body: "Cada cambio genera una versión con su historial. Programás cuándo se activa y volvés a la anterior en un click si algo sale mal.",
  },
  {
    title: "Infraestructura administrada",
    body: "Servidores, base de datos, colas, escalado y monitoreo corren de nuestro lado. No configurás ni mantenés nada.",
  },
  {
    title: "Observabilidad real",
    body: "Conversaciones, logs, métricas y el gasto de IA en dólares. Sabés qué hizo el agente y cuánto costó.",
  },
  {
    title: "Entorno de prueba",
    body: "Probás los cambios antes de que los vea un cliente. Staging y producción están separados de verdad.",
  },
  {
    title: "Alertas donde mirás",
    body: "Un lead grande, un reclamo o una caída te llegan por Slack en el momento, sin entrar al panel.",
  },
  {
    title: "Confirmación antes de actuar",
    body: "Las acciones que tocan tu tienda o tus clientes te piden aprobación explícita. Nada irreversible pasa solo.",
  },
] as const;

export const INTEGRATIONS = {
  live: [
    {
      name: "WhatsApp",
      body: "Conectás tu número escaneando un QR. El agente lee, responde y manda difusiones.",
    },
    {
      name: "Tienda Nube",
      body: "Consulta productos, stock, pedidos y clientes en tiempo real, y puede modificarlos con tu confirmación.",
    },
    {
      name: "Slack",
      body: "Alertas y avisos en el canal que elijas, con el contexto de la conversación.",
    },
  ],
  soon: ["Instagram", "Facebook", "Chat web", "Shopify", "API y webhooks"],
} as const;

/**
 * Comparativa. Se nombran categorías y no solo marcas para que la sección
 * siga siendo cierta cuando cambie el competidor de turno.
 */
export const COMPARISON = {
  columns: ["Buna", "Chatbots configurables", "n8n / Make / Zapier", "Agencia a medida"],
  rows: [
    {
      feature: "Cómo creás una automatización",
      values: [
        "La describís en una frase",
        "Armás el flujo en un panel",
        "Conectás nodos y mapeás campos",
        "Pedís presupuesto y esperás",
      ],
    },
    {
      feature: "Cambiar algo que no estaba previsto",
      values: ["Se lo pedís", "No se puede", "Rehacés el flujo", "Otro presupuesto"],
    },
    {
      feature: "Tiempo hasta el primer cambio en vivo",
      values: ["Minutos", "Horas", "Horas o días", "Semanas"],
    },
    {
      feature: "Versionado y rollback",
      values: ["Incluido", "Casi nunca", "Manual", "Depende del proveedor"],
    },
    {
      feature: "Infraestructura",
      values: ["Administrada", "Administrada", "La ponés vos", "La ponés vos"],
    },
    {
      feature: "Métricas nuevas",
      values: ["Las pedís hablando", "Las que vengan", "Las armás aparte", "Se cotizan"],
    },
  ],
} as const;

export const FAQS = [
  {
    question: "¿Necesito saber programar para usar Buna?",
    answer:
      "No. Le describís en castellano qué querés que haga tu negocio y Buna escribe la lógica, la conecta con tus herramientas y la deja corriendo. Si sabés explicarle una tarea a alguien de tu equipo, sabés usar Buna.",
  },
  {
    question: "¿Cómo conecto mi WhatsApp?",
    answer:
      "Entrás a Conexiones en el panel y escaneás un código QR con el teléfono, igual que WhatsApp Web. Tarda unos dos minutos y podés usar el número que ya venís usando con tus clientes.",
  },
  {
    question: "¿Funciona con Tienda Nube?",
    answer:
      "Sí. Conectando tu tienda, el agente consulta productos, stock, precios, pedidos y clientes en tiempo real, así responde con datos reales en lugar de respuestas genéricas. También puede modificar datos de la tienda, siempre pidiéndote confirmación antes.",
  },
  {
    question: "¿En qué se diferencia de un chatbot común o de ManyChat?",
    answer:
      "Un chatbot configurable te deja cambiar lo que su panel previó: mensajes, horarios, algunas reglas. Con Buna cambiás cualquier comportamiento describiéndolo, incluso cosas que nadie anticipó, y cada cambio queda versionado y se puede revertir. No estás configurando nuestro producto: estás construyendo el tuyo.",
  },
  {
    question: "¿Qué pasa si el agente responde algo que no quiero?",
    answer:
      "Tres cosas. Antes de que salga a producción lo probás en un entorno separado. Las acciones que tocan tu tienda o tus clientes piden tu confirmación explícita. Y si algo igual sale mal, volvés a la versión anterior en un click, sin perder el resto de lo que construiste.",
  },
  {
    question: "¿Puedo hacer que me pase la conversación a mí?",
    answer:
      "Sí. Le decís en qué situaciones tiene que frenar y derivarte: un cliente enojado, un pedido grande, alguien que pide hablar con una persona, o la condición que se te ocurra. El agente se detiene y te avisa.",
  },
  {
    question: "¿Cuánto tarda en estar funcionando?",
    answer:
      "Conectar WhatsApp y Tienda Nube lleva unos minutos. La primera automatización útil, como responder preguntas frecuentes con datos de tu tienda, suele quedar andando el mismo día.",
  },
  {
    question: "¿Qué pasa con los datos de mis clientes?",
    answer:
      "Cada cuenta corre aislada del resto, con su propia base de datos y credenciales. Las conversaciones se usan para que tu agente responda mejor en tu cuenta, no para entrenar modelos de terceros.",
  },
] as const;

export const FINAL_CTA = {
  title: "Contale a Buna qué necesitás que haga tu negocio",
  subtitle:
    "Conectás WhatsApp, le pedís lo primero que se te ocurra y lo ves funcionando el mismo día.",
} as const;
