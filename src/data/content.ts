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
    "BunaAI es la plataforma donde le contás en castellano qué necesitás que pase y ella construye la automatización y la publica. Sin armar flujos nodo por nodo, sin código y sin servidores.",
  bullets: [
    "Conectás WhatsApp escaneando un QR",
    "Se integra con Tiendanube en tiempo real",
    "Cada cambio queda versionado y se puede revertir",
  ],
  note: "Demo de media hora con tus casos reales, sin compromiso.",
} as const;

/**
 * El demo del hero. Se renderiza como HTML plano, no como video ni imagen:
 * pesa nada, es texto indexable y no mueve el layout al cargar.
 */
export const HERO_DEMO = {
  prompt:
    "Cuando alguien abandone un carrito de más de $100.000, escribile por WhatsApp a las 2 horas. Si contesta que le parece caro, ofrecele envío gratis. Si sigue sin comprar, avisame por Slack.",
  steps: [
    "Creé el trigger de carrito abandonado sobre Tiendanube",
    "Filtré por total mayor a $100.000 y esperé 2 horas",
    "Escribí el mensaje de WhatsApp y la respuesta con envío gratis",
    "Conecté la alerta de Slack a tu canal #ventas",
  ],
  reply: "Guardado como versión 12. Publicala ahora o programala con fecha y hora desde Versiones.",
  whatsapp: {
    business: "Hola Sofi 👋 Vi que dejaste la campera en el carrito.",
    customer: "Sí, me gustó pero me pareció cara con el envío",
    businessReply:
      "Te entiendo. Te dejo el envío sin cargo si lo cerrás hoy 🙌 Te paso el link.",
  },
} as const;

/**
 * El contraste con el status quo. Es la sección que explica por qué BunaAI no es
 * "otro chatbot": el eje no es la IA, es quién decide qué se puede cambiar.
 */
export const CONTRAST = {
  title: "Las otras plataformas te hacen configurar la suya. BunaAI construye la tuya.",
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
    label: "Como se hace con BunaAI",
    items: [
      "Lo describís en una frase y BunaAI escribe la lógica que hace falta",
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
    title: "BunaAI lo construye",
    body: "Interpreta la intención, escribe la lógica, la conecta con tus herramientas y te muestra exactamente qué va a hacer antes de tocar nada.",
  },
  {
    title: "Lo publicás",
    body: "Lo publicás al instante o lo programás con fecha y hora. Con el plan Growth, BunaAI prueba cada cambio apenas queda publicado y te avisa si algo no responde como debería.",
  },
  {
    title: "Corre y se mide",
    body: "Queda ejecutándose sobre infraestructura administrada. Ves conversaciones, resultados y costos, y podés chatear con tu agente desde el panel. Si algo no funciona, volvés a la versión anterior.",
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
      "Respondé consultas de envíos, talles, cambios y stock consultando Tiendanube en tiempo real.",
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
    tag: "Reglas",
    prompt:
      "A partir del lunes a las 9, los pedidos de más de $200.000 llevan otro seguimiento.",
    result: "Reglas con fecha de inicio",
  },
] as const;

/**
 * La capa que BunaAI se come por el cliente. Es el argumento contra "esto lo
 * hago con ChatGPT": el modelo es la parte fácil, todo esto es lo difícil.
 */
export const PLATFORM = [
  {
    title: "Historial de cambios",
    body: "Cada cambio queda guardado en un historial. Programás cuándo se activa y volvés a la anterior en un click si algo sale mal.",
  },
  {
    title: "Infraestructura dedicada",
    body: "Tu agente corre en servidores y base de datos exclusivos para tu cuenta, sin compartir recursos con otros clientes: el pico o la falla de otro negocio no te afecta. Y la administramos nosotros.",
  },
  {
    title: "Todo a la vista",
    body: "Conversaciones, registro de actividad, métricas y el gasto de IA en dólares. Sabés qué hizo el agente y cuánto costó.",
  },
  {
    title: "Aviso si algo falla",
    body: "En el plan Growth, cada vez que publicás un cambio BunaAI lo prueba ya en funcionamiento y te avisa si algo no responde como debería, para que lo corrijas hablándole o vuelvas atrás en un click.",
  },
  {
    title: "Alertas donde mirás",
    body: "Un lead grande, un reclamo o una caída te llegan por WhatsApp, email o Slack en el momento, sin entrar al panel.",
  },
  {
    title: "Confirmación antes de actuar",
    body: "Las acciones que tocan tu tienda o tus clientes te piden aprobación explícita. Nada irreversible pasa solo.",
  },
] as const;

export const INTEGRATIONS = {
  // `logo` viaja junto al nombre y no en un array aparte: si estuviera
  // separado, reordenar esta lista dejaría cada tarjeta con el logo de otra.
  live: [
    {
      name: "WhatsApp",
      logo: "whatsapp",
      body: "Conectás tu número escaneando un QR. El agente lee, responde y manda difusiones.",
    },
    {
      name: "Telegram",
      logo: "telegram",
      body: "Otro canal para tu agente: atiende las conversaciones que te llegan por Telegram, además de WhatsApp.",
    },
    {
      name: "Tiendanube",
      logo: "tiendanube",
      body: "Consulta productos, stock, pedidos y clientes en tiempo real, y puede modificarlos con tu confirmación.",
    },
    {
      name: "Slack",
      logo: "slack",
      body: "Alertas y avisos en el canal que elijas, con el contexto de la conversación.",
    },
  ],
  /**
   * La integración a medida. No va como una cuarta tarjeta junto a las otras
   * porque no es lo mismo: WhatsApp y Tiendanube se conectan solos desde el
   * panel, y esto arranca con una conversación. Mezclarlas prometería un
   * autoservicio que no existe.
   *
   * "API y webhooks" salió de la lista de "En camino" al escribirse esto: si
   * conectamos sistemas propios hoy, no puede figurar como pendiente.
   */
  custom: {
    title: "¿Tu negocio corre sobre un sistema propio?",
    body: "Un ERP a medida, un CRM interno, la base de datos que armó tu equipo. Si expone una API o webhooks, el agente puede consultarlo y operarlo igual que a Tiendanube: leer un stock, crear un pedido, actualizar un estado.",
    note: "Si tu sistema no tiene API, contanos igual. Casi siempre hay una forma de llegar.",
    examples: ["API REST", "Webhooks", "Bases de datos", "ERP y CRM internos"],
    cta: { label: "Contanos qué usás", href: "/demo" },
  },
  soon: ["Instagram", "Facebook", "Chat web", "Shopify"],
} as const;

/**
 * Comparativa. Se nombran categorías y no solo marcas para que la sección
 * siga siendo cierta cuando cambie el competidor de turno.
 */
export const COMPARISON = {
  columns: ["BunaAI", "Chatbots configurables", "n8n / Make / Zapier", "Agencia a medida"],
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
      feature: "Historial de cambios y vuelta atrás",
      values: ["Incluido", "Casi nunca", "Manual", "Depende del proveedor"],
    },
    {
      feature: "Infraestructura",
      values: ["Dedicada y administrada", "Compartida entre clientes", "La ponés vos", "La ponés vos"],
    },
    {
      feature: "Métricas nuevas",
      values: ["Las pedís hablando", "Las que vengan", "Las armás aparte", "Se cotizan"],
    },
  ],
} as const;

export const FAQS = [
  {
    question: "¿Necesito saber programar para usar BunaAI?",
    answer:
      "No. Le describís en castellano qué querés que haga tu negocio y BunaAI escribe la lógica, la conecta con tus herramientas y la deja corriendo. Si sabés explicarle una tarea a alguien de tu equipo, sabés usar BunaAI.",
  },
  {
    question: "¿Cómo conecto mi WhatsApp?",
    answer:
      "Entrás a Conexiones en el panel y escaneás un código QR con el teléfono, igual que WhatsApp Web. Tarda unos dos minutos y podés usar el número que ya venís usando con tus clientes.",
  },
  {
    question: "¿Funciona con Tiendanube?",
    answer:
      "Sí. Conectando tu tienda, el agente consulta productos, stock, precios, pedidos y clientes en tiempo real, así responde con datos reales en lugar de respuestas genéricas. También puede modificar datos de la tienda, siempre pidiéndote confirmación antes.",
  },
  {
    question: "¿En qué se diferencia de un chatbot común o de ManyChat?",
    answer:
      "Un chatbot configurable te deja cambiar lo que su panel previó: mensajes, horarios, algunas reglas. Con BunaAI cambiás cualquier comportamiento describiéndolo, incluso cosas que nadie anticipó, y cada cambio queda versionado y se puede revertir. No estás configurando nuestro producto: estás construyendo el tuyo.",
  },
  {
    question: "¿Qué pasa si el agente responde algo que no quiero?",
    answer:
      "Varias cosas. Podés chatear con tu agente desde el panel para ver cómo responde. Con el plan Growth, cada vez que publicás un cambio BunaAI lo prueba ya en funcionamiento y te avisa si algo no responde como debería. Las acciones que tocan tu tienda o tus clientes piden tu confirmación explícita. Y si algo igual sale mal, volvés a la versión anterior en un click, sin perder el resto de lo que construiste.",
  },
  {
    question: "¿Puedo hacer que me pase la conversación a mí?",
    answer:
      "Sí. Le decís en qué situaciones tiene que frenar y derivarte: un cliente enojado, un pedido grande, alguien que pide hablar con una persona, o la condición que se te ocurra. El agente se detiene y te avisa.",
  },
  {
    question: "¿Cuánto tarda en estar funcionando?",
    answer:
      "Conectar WhatsApp y Tiendanube lleva unos minutos. La primera automatización útil, como responder preguntas frecuentes con datos de tu tienda, suele quedar andando el mismo día.",
  },
  {
    question: "¿Qué pasa con los datos de mis clientes?",
    answer:
      "Cada cuenta corre en su propia infraestructura, con servidores, base de datos y credenciales exclusivos para tu cuenta: no compartís nada con otros clientes. Las conversaciones se usan para que tu agente responda mejor en tu cuenta, no para entrenar modelos de terceros.",
  },
] as const;

export const FINAL_CTA = {
  title: "Contale a BunaAI qué necesitás que haga tu negocio",
  subtitle:
    "En una demo de media hora armamos en vivo tu primera automatización, con tus casos reales.",
} as const;
