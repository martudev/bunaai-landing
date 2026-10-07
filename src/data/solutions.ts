/**
 * Páginas de intención de búsqueda.
 *
 * La home vende la visión ("decile a BunaAI qué necesitás"), pero nadie busca
 * eso en Google: buscan "chatbot whatsapp" o "recuperar carritos abandonados".
 * Cada entrada de acá se convierte en una página que captura una de esas
 * búsquedas y lleva a la visión, con contenido propio y no una plantilla
 * rellenada — Google descarta las páginas que solo cambian una palabra.
 *
 * Reglas al agregar una página nueva:
 *  - `title` de 50-60 caracteres, con la keyword al principio.
 *  - `description` de 140-160, escrita para que alguien haga click, no para el bot.
 *  - `h1` distinto del `title`: uno es para la SERP y el otro para la página.
 *  - `related` siempre con 2-3 slugs: el enlazado interno es lo que reparte
 *    autoridad entre estas páginas y evita que queden huérfanas.
 */

export interface SolutionSection {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

export interface Solution {
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  lede: string;
  /** Se listan arriba como resumen escaneable y como señal de relevancia. */
  highlights: string[];
  body: SolutionSection[];
  prompts: { prompt: string; result: string }[];
  faqs: { question: string; answer: string }[];
  related: string[];
}

export const SOLUTIONS: Solution[] = [
  {
    slug: "chatbot-whatsapp-ia",
    title: "Chatbot de WhatsApp con IA para tu negocio | BunaAI",
    description:
      "Creá un chatbot de WhatsApp con IA sin programar: respondé con stock y pedidos reales de tu tienda y derivá a una persona cuando haga falta.",
    eyebrow: "Chatbot de WhatsApp con IA",
    h1: "Un chatbot de WhatsApp que entiende tu negocio, no solo un árbol de opciones",
    lede: "La mayoría de los chatbots de WhatsApp son menús: el cliente escribe 1, después 3, y si su pregunta no está en la lista, se va. BunaAI arma un agente que lee lo que le escriben, consulta los datos reales de tu tienda y contesta como contestaría alguien de tu equipo.",
    highlights: [
      "Responde con stock, precios y estado de pedidos en tiempo real",
      "Se configura describiendo lo que querés, no armando flujos",
      "Deriva a una persona cuando la conversación lo pide",
      "Cada cambio queda guardado y podés volver atrás",
    ],
    body: [
      {
        heading: "Por qué los chatbots de WhatsApp tradicionales frustran a tus clientes",
        paragraphs: [
          "Un chatbot de árbol de decisión solo puede responder lo que alguien anticipó al armarlo. Funciona cuando el cliente pregunta exactamente lo previsto y falla en todo lo demás, que en un e-commerce es la mayoría: si el talle M le va a quedar bien, si llega antes del viernes, si puede cambiarlo, si el precio que vio en Instagram sigue vigente.",
          "El problema de fondo no es que respondan mal, es que no tienen acceso a nada. No saben tu stock, no ven el pedido del cliente y no pueden consultar un precio. Están adivinando sobre un guion escrito hace meses.",
        ],
      },
      {
        heading: "Qué hace distinto a un agente de IA con datos conectados",
        paragraphs: [
          "Cuando el agente está conectado a tu tienda, la conversación cambia de naturaleza. Ante un “¿te queda el buzo negro en L?” no busca una respuesta parecida en un guion: consulta el stock en ese momento y contesta con el número real. Ante un “¿dónde está mi pedido?” pide el dato que necesita para identificarlo y devuelve el estado concreto.",
          "Eso también significa que puede hacer cosas, no solo decirlas: generar un link de pago, aplicar un descuento que autorizaste, registrar un reclamo o avisarle a tu equipo. Las acciones que tocan tu tienda o tus clientes piden tu confirmación antes de ejecutarse.",
        ],
        bullets: [
          "Consultas de stock, talles, precios y plazos de envío con datos en vivo",
          "Estado de pedidos y seguimiento sin que intervenga una persona",
          "Confirmación de pagos por transferencia contra el monto del pedido",
          "Reclamos y cambios registrados y derivados a quien corresponde",
        ],
      },
      {
        heading: "Cómo se configura: hablando, no armando flujos",
        paragraphs: [
          "En vez de abrir un editor de nodos, le escribís a BunaAI lo que querés que pase. “Si preguntan por envíos a Córdoba, aclarales que tarda 3 a 5 días hábiles.” “Si el pedido es mayor a $150.000, ofreceles envío sin cargo.” “Si alguien escribe fuera del horario, avisale cuándo le respondemos.”",
          "BunaAI interpreta la intención, escribe la lógica, te muestra qué va a hacer. Cuando te cierra, lo publicás, y con el plan Growth, apenas queda publicado, BunaAI lo prueba y te avisa si algo no responde bien. Si el resultado no es el que esperabas, volvés a la versión anterior sin perder el resto de lo que construiste.",
        ],
      },
      {
        heading: "Cuándo el agente te pasa la conversación",
        paragraphs: [
          "Un buen agente sabe cuándo frenar. Le definís en qué situaciones tiene que pasarte la conversación —un cliente molesto, un pedido grande, alguien que pide explícitamente hablar con una persona— y el agente se detiene y te avisa por donde le digas: WhatsApp, email, Slack o el mismo panel.",
          "Esa derivación es la diferencia entre un chatbot que protege la experiencia de tu cliente y uno que la arruina intentando resolver algo que no le corresponde.",
        ],
      },
    ],
    prompts: [
      {
        prompt: "Respondé consultas de talles y stock consultando Tiendanube en tiempo real.",
        result: "Atención con datos reales, sin respuestas genéricas",
      },
      {
        prompt: "Si alguien pregunta por el estado de su pedido, pedile el número y contale dónde está.",
        result: "Seguimiento de pedidos automático",
      },
      {
        prompt: "Si el cliente se enoja o pide hablar con una persona, frená y pasame la conversación.",
        result: "Derivación a un humano con contexto",
      },
      {
        prompt: "Fuera del horario de atención, avisá cuándo respondemos y tomá el mensaje.",
        result: "Cobertura 24/7 sin prometer de más",
      },
    ],
    faqs: [
      {
        question: "¿Puedo usar mi número de WhatsApp actual?",
        answer:
          "Sí. Conectás el número que ya usás con tus clientes escaneando un QR desde el panel, igual que WhatsApp Web. No tenés que migrar contactos ni avisarle a nadie que cambiaste de número.",
      },
      {
        question: "¿El chatbot responde con información inventada?",
        answer:
          "Cuando la pregunta es sobre stock, precios o pedidos, el agente consulta tu tienda y responde con ese dato, no con una estimación. Para el resto le definís qué puede afirmar y qué tiene que derivar, y las acciones que modifican algo piden tu confirmación.",
      },
      {
        question: "¿Cuánto tarda en estar andando?",
        answer:
          "Conectar WhatsApp lleva un par de minutos. Un agente que responda preguntas frecuentes con datos de tu tienda suele quedar funcionando el mismo día.",
      },
      {
        question: "¿Sirve si no tengo tienda online?",
        answer:
          "Sí, aunque rinde más con una tienda conectada. Sin integración el agente igual atiende consultas, califica leads, toma pedidos y te deriva conversaciones; lo que pierde es la capacidad de responder con stock y pedidos en vivo.",
      },
    ],
    related: ["automatizaciones-whatsapp", "tiendanube-whatsapp", "alternativa-manychat"],
  },

  {
    slug: "automatizaciones-whatsapp",
    title: "Automatizaciones de WhatsApp para e-commerce | BunaAI",
    description:
      "Automatizá ventas, cobranzas y atención en WhatsApp describiendo lo que necesitás. Sin nodos ni código: BunaAI escribe la lógica y la deja corriendo.",
    eyebrow: "Automatizaciones de WhatsApp",
    h1: "Automatizaciones de WhatsApp que describís en una frase",
    lede: "Automatizar no debería significar pasar una tarde conectando nodos y mapeando campos. Le contás a BunaAI qué querés que pase y cuándo, y ella construye la automatización y la deja corriendo sobre infraestructura que no tenés que administrar. Con el plan Growth, además, prueba cada cambio apenas lo publicás y te avisa si algo falla.",
    highlights: [
      "Triggers por evento, por horario o por lo que diga el cliente",
      "Se conecta con Tiendanube, Slack y tu WhatsApp",
      "Cambios programados con fecha y hora",
      "Historial de versiones y vuelta atrás en un click",
    ],
    body: [
      {
        heading: "El costo escondido de las herramientas de automatización",
        paragraphs: [
          "Zapier, Make y n8n resolvieron un problema real: conectar sistemas sin escribir código. Pero el trabajo se movió, no desapareció. Ahora armás el flujo, mapeás cada campo, manejás los errores, agregás una rama por cada excepción y mantenés todo eso cuando algo cambia del otro lado.",
          "Para un negocio de dos a veinte personas ese mantenimiento no tiene dueño. El flujo lo armó alguien que ya no está, nadie se anima a tocarlo, y cuando deja de funcionar la solución es volver a hacerlo a mano.",
        ],
      },
      {
        heading: "Describir el resultado en vez de dibujar el proceso",
        paragraphs: [
          "BunaAI invierte el orden. No describís los pasos, describís el resultado que querés, y ella resuelve los pasos. “Cuando alguien abandone un carrito de más de $100.000, escribile a las dos horas; si contesta que es caro, ofrecele envío gratis; si igual no compra, avisame por Slack.”",
          "Eso es un trigger, una condición sobre el monto, una espera, un mensaje, una rama según la respuesta del cliente y una notificación. Todo eso se construye solo, y vos podés seguir ajustándolo hablando: “esperá una hora en vez de dos”, “subí el corte a $150.000”, “no le escribas a los que ya compraron esta semana”.",
        ],
        bullets: [
          "Triggers de evento: carrito abandonado, pedido nuevo, pago acreditado",
          "Triggers de tiempo: recordatorios, seguimientos y tareas programadas",
          "Triggers de conversación: lo que el cliente pregunta o responde",
          "Acciones sobre tu tienda, siempre con confirmación previa",
        ],
      },
      {
        heading: "Cada cambio guardado, nada a ciegas",
        paragraphs: [
          "Cada modificación queda guardada en un historial de qué cambió y cuándo. Podés programar que un cambio se active un día y hora determinados, algo útil cuando el cambio acompaña una promo o un fin de semana largo.",
          "Con el plan Growth, apenas publicás un cambio, BunaAI lo prueba solo. Si algo no responde como debería, el cambio sigue activo y te avisa: podés volver a probarlo o pedirle al agente que lo corrija.",
          "Y si una automatización se comporta distinto a lo que esperabas, volvés a la versión anterior en un click. Es la diferencia entre poder experimentar y tenerle miedo a tocar lo que funciona.",
        ],
      },
      {
        heading: "Sin infraestructura de tu lado",
        paragraphs: [
          "Las automatizaciones corren sobre servidores, base de datos, colas y monitoreo dedicados a tu negocio, que no compartís con otros clientes y que administramos nosotros. No configurás un servidor, no pagás hosting aparte y no te enterás de que algo se cayó por un cliente enojado.",
          "En el panel ves qué ejecutó cada automatización, cuántas veces, con qué resultado y cuánto costó en dólares de consumo de IA.",
        ],
      },
    ],
    prompts: [
      {
        prompt: "Cuando se acredite un pago, mandale el seguimiento del envío apenas se despache.",
        result: "Postventa sin intervención manual",
      },
      {
        prompt: "Todos los lunes a las 10, mandame por Slack un resumen de las conversaciones que no cerraron.",
        result: "Reportes automáticos donde ya mirás",
      },
      {
        prompt: "Si un cliente no responde en 48 horas, mandale un recordatorio y después cerrá el caso.",
        result: "Seguimiento con reintentos y cierre",
      },
      {
        prompt: "A partir del lunes, los pedidos de más de $200.000 llevan otro seguimiento.",
        result: "Regla con fecha de inicio",
      },
    ],
    faqs: [
      {
        question: "¿En qué se diferencia de n8n, Make o Zapier?",
        answer:
          "En quién arma la lógica. En esas herramientas la armás vos nodo por nodo y después la mantenés. En BunaAI la describís y se construye sola, queda guardada con su historial de cambios y corre sobre servidores que administramos nosotros. Además no necesitás saber cómo se conectan los sistemas por dentro.",
      },
      {
        question: "¿Puedo tener varias automatizaciones a la vez?",
        answer:
          "Sí, y es lo habitual: atención de consultas, recuperación de carritos, seguimiento de pagos y difusiones conviviendo. BunaAI las coordina para que un mismo cliente no reciba tres mensajes en simultáneo.",
      },
      {
        question: "¿Qué pasa si quiero frenar una automatización?",
        answer:
          "La pausás desde el panel o se lo pedís a BunaAI. También podés volver a una versión anterior si el problema es un cambio puntual en vez de la automatización entera.",
      },
      {
        question: "¿Se puede automatizar algo que toque datos de mi tienda?",
        answer:
          "Sí, con una salvedad importante: las acciones que modifican tu tienda o impactan en un cliente te piden confirmación explícita antes de ejecutarse. Podés aprobarlas en el momento o dejarlas para cuando publiques el cambio.",
      },
    ],
    related: ["recuperar-carritos-abandonados", "chatbot-whatsapp-ia", "tiendanube-whatsapp"],
  },

  {
    slug: "tiendanube-whatsapp",
    title: "Conectar Tiendanube con WhatsApp y IA | BunaAI",
    description:
      "Conectá Tiendanube con WhatsApp y dejá que un agente de IA responda con stock, precios y pedidos reales, recupere carritos y siga pagos. Se configura hablando.",
    eyebrow: "Tiendanube + WhatsApp",
    h1: "Tu Tiendanube atendiendo por WhatsApp con datos reales",
    lede: "Si vendés con Tiendanube, la mitad de tu operación pasa por WhatsApp: consultas antes de comprar, comprobantes de transferencia, seguimiento de envíos, cambios. BunaAI conecta las dos puntas para que esas conversaciones se resuelvan con la información real de tu tienda.",
    highlights: [
      "Stock, precios, pedidos y clientes consultados en vivo",
      "Recuperación de carritos abandonados por WhatsApp",
      "Verificación de pagos por transferencia contra el pedido",
      "Cambios en la tienda con confirmación previa",
    ],
    body: [
      {
        heading: "El agujero entre la tienda y la conversación",
        paragraphs: [
          "Tiendanube sabe todo sobre tu catálogo y tus pedidos. WhatsApp es donde tus clientes efectivamente preguntan. Entre las dos cosas suele haber una persona copiando datos de una pantalla a la otra: buscar si hay stock, fijarse si entró la transferencia, revisar en qué anda el envío.",
          "Ese trabajo manual es el que limita cuánto podés vender sin sumar gente. Y es también donde se pierden las ventas: el cliente que pregunta un sábado a la noche y recibe respuesta el lunes ya compró en otro lado.",
        ],
      },
      {
        heading: "Qué puede leer y hacer el agente en tu tienda",
        paragraphs: [
          "Con la tienda conectada, el agente consulta la información en el momento en que la necesita. No trabaja con una copia desactualizada ni con un catálogo que alguien cargó a mano hace tres meses.",
        ],
        bullets: [
          "Productos, variantes, talles, colores y stock disponible",
          "Precios vigentes, incluidas promociones activas",
          "Pedidos, estado de pago y estado de envío",
          "Clientes y su historial de compras",
          "Modificaciones sobre la tienda, previa confirmación tuya",
        ],
      },
      {
        heading: "Los tres casos que más rinden al principio",
        paragraphs: [
          "No hace falta automatizar todo el primer día. En los negocios que venden con Tiendanube hay tres cosas que suelen justificar la herramienta solas.",
          "La primera es responder consultas de producto con stock real, que es el grueso del volumen. La segunda es recuperar carritos abandonados por WhatsApp, que va directo a ingresos que hoy se pierden. La tercera es la verificación de transferencias, que es tedioso, pasa a toda hora y es fácil de equivocar.",
        ],
      },
      {
        heading: "Cómo se conecta",
        paragraphs: [
          "Desde Conexiones en el panel cargás el ID de tu tienda y el token de tu app de Tiendanube, y escaneás el QR de WhatsApp con el teléfono. Son dos pasos y unos minutos.",
          "A partir de ahí le pedís a BunaAI lo que necesites y ella resuelve qué datos consultar. No tenés que saber qué endpoint devuelve qué ni mapear campos.",
        ],
      },
    ],
    prompts: [
      {
        prompt: "Si preguntan por un producto, fijate el stock en Tiendanube y contestá con los talles disponibles.",
        result: "Consultas de catálogo resueltas en el momento",
      },
      {
        prompt: "Cuando manden un comprobante, verificá el monto contra el pedido y confirmá el envío.",
        result: "Pagos por transferencia sin chequeo manual",
      },
      {
        prompt: "Si abandonan un carrito, esperá dos horas y escribiles con lo que dejaron adentro.",
        result: "Carritos recuperados por WhatsApp",
      },
      {
        prompt: "Avisame por Slack cuando entre un pedido de más de $300.000.",
        result: "Alertas de pedidos importantes",
      },
    ],
    faqs: [
      {
        question: "¿Qué necesito para conectar Tiendanube?",
        answer:
          "El ID de tu tienda y un access token de tu app de Tiendanube. Los cargás una vez desde la sección Conexiones del panel y quedan guardados de forma cifrada.",
      },
      {
        question: "¿El agente puede modificar cosas en mi tienda?",
        answer:
          "Sí, pero nunca por su cuenta. Cualquier acción que modifique la tienda te pide confirmación explícita, y podés elegir aplicarla en el momento o dejarla guardada para que se aplique cuando publiques el cambio.",
      },
      {
        question: "¿Funciona con Shopify o WooCommerce?",
        answer:
          "Hoy la integración nativa es con Tiendanube. Shopify está en camino, y otras plataformas se pueden conectar con una integración a medida. Si estás en esa situación, escribinos y te decimos con franqueza si te sirve hoy o conviene esperar.",
      },
      {
        question: "¿Los datos de la tienda se comparten con otros?",
        answer:
          "No. Cada cuenta corre en su propia infraestructura, con servidores, base de datos y credenciales exclusivos para tu cuenta, sin compartir nada con otros clientes. Los datos de tu tienda se usan para responder en tu cuenta y nada más.",
      },
    ],
    related: ["recuperar-carritos-abandonados", "chatbot-whatsapp-ia", "automatizaciones-whatsapp"],
  },

  {
    slug: "recuperar-carritos-abandonados",
    title: "Recuperar carritos abandonados por WhatsApp | BunaAI",
    description:
      "Recuperá carritos abandonados escribiendo por WhatsApp en el momento justo, con el producto que dejaron y una respuesta distinta según la objeción del cliente.",
    eyebrow: "Carritos abandonados",
    h1: "Recuperá carritos abandonados donde tu cliente sí responde",
    lede: "El mail de carrito abandonado se abre poco y se responde menos. WhatsApp se lee casi siempre, pero solo funciona si el mensaje llega en el momento justo, menciona lo que la persona dejó y sabe qué contestar cuando dice que le parece caro.",
    highlights: [
      "Mensaje disparado por el carrito real de Tiendanube",
      "Esperas y montos mínimos que definís vos",
      "Respuestas distintas según la objeción del cliente",
      "Alertas a tu equipo cuando el carrito es grande",
    ],
    body: [
      {
        heading: "Por qué la mayoría de las recuperaciones no recuperan nada",
        paragraphs: [
          "El mensaje genérico de “te quedó algo en el carrito” tiene dos problemas. Llega igual para un carrito de $8.000 que para uno de $300.000, y termina la conversación en vez de abrirla: el cliente lo lee, no contesta, y ahí muere.",
          "La venta se recupera en la respuesta, no en el primer mensaje. Cuando alguien contesta “me pareció caro”, “no sabía si me iba a quedar bien” o “estoy viendo otras opciones”, ahí hay una objeción concreta que se puede trabajar. Un mail automático no puede hacerlo. Una persona sí, pero no a las once de la noche ni para cincuenta carritos por día.",
        ],
      },
      {
        heading: "Un mensaje que sabe qué dejó la persona y cuánto vale",
        paragraphs: [
          "El agente se dispara con el carrito real de tu tienda, así que sabe qué productos quedaron adentro, cuánto suman y quién es el cliente. Con eso podés tratar distinto un carrito chico de uno que justifica ofrecer algo.",
          "Vos definís las reglas en lenguaje común: a partir de qué monto escribir, cuánto esperar, qué ofrecer y en qué casos avisarle a alguien del equipo en lugar de seguir solo.",
        ],
        bullets: [
          "Monto mínimo para que el agente escriba",
          "Tiempo de espera antes del primer mensaje y de los recordatorios",
          "Qué concesión ofrecer y con qué límite",
          "Cuándo derivar el caso a una persona",
        ],
      },
      {
        heading: "La conversación después del primer mensaje",
        paragraphs: [
          "Acá está la diferencia real. Si el cliente responde que el precio le parece alto, el agente puede ofrecer el envío sin cargo que autorizaste. Si duda con el talle, consulta el stock y le sugiere la alternativa disponible. Si dice que lo compra la semana que viene, programa el recordatorio en vez de insistir.",
          "Y si la conversación se pone delicada o el carrito es lo bastante grande como para que quieras meterte vos, el agente frena y te pasa el caso con todo el contexto.",
        ],
      },
      {
        heading: "Medir la recuperación en ventas, no en mensajes",
        paragraphs: [
          "La métrica que importa no es cuántos mensajes salieron, es cuántos carritos terminaron en compra y cuánta plata representan. Eso lo ves en el panel, y podés pedir cortes nuevos hablando: por rango de monto, por producto, por objeción más frecuente.",
          "Ese último dato suele ser el más valioso. Si la objeción que más aparece es el costo de envío, el problema no es el mensaje de recuperación: es tu política de envíos.",
        ],
      },
    ],
    prompts: [
      {
        prompt: "Si abandonan un carrito de más de $100.000, escribiles a las 2 horas con lo que dejaron adentro.",
        result: "Primer contacto con contexto real",
      },
      {
        prompt: "Si contestan que es caro, ofrecé envío gratis solo si el carrito supera $150.000.",
        result: "Concesión acotada a lo que te conviene",
      },
      {
        prompt: "Si no contestan en 24 horas, mandá un recordatorio y después cerrá el caso.",
        result: "Insistencia con límite",
      },
      {
        prompt: "Avisame por Slack cuando el carrito abandonado supere $300.000.",
        result: "Los casos grandes los agarrás vos",
      },
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo conviene esperar antes de escribir?",
        answer:
          "Entre una y tres horas suele ser el rango razonable: pasó el tiempo suficiente como para que la compra no se estuviera completando sola, y todavía está fresco. Lo definís vos y lo podés cambiar cuando quieras para probar qué funciona mejor en tu negocio.",
      },
      {
        question: "¿No es invasivo escribir por WhatsApp?",
        answer:
          "Depende de cómo se haga. Un mensaje por carrito, con contexto de lo que la persona estaba comprando y con la opción clara de no recibir más, se lee como atención. Tres mensajes seguidos genéricos se leen como spam y te hacen perder el número. Las reglas de frecuencia y corte las ponés vos.",
      },
      {
        question: "¿Qué pasa si el cliente ya compró por otro lado?",
        answer:
          "El agente verifica el estado del carrito y del pedido antes de escribir, así que no le manda un recordatorio a alguien que ya completó la compra.",
      },
      {
        question: "¿Necesito Tiendanube para esto?",
        answer:
          "Para el disparo automático sí, porque el evento de carrito abandonado viene de la tienda. Sin esa integración podés armar seguimientos basados en la conversación, pero no vas a tener el carrito real como disparador.",
      },
    ],
    related: ["tiendanube-whatsapp", "automatizaciones-whatsapp", "chatbot-whatsapp-ia"],
  },

  {
    slug: "alternativa-manychat",
    title: "Alternativa a ManyChat para e-commerce en WhatsApp | BunaAI",
    description:
      "¿Buscás una alternativa a ManyChat que no te limite a lo que su panel permite? En BunaAI describís el comportamiento que querés y se construye solo.",
    eyebrow: "Comparativa",
    h1: "Una alternativa a ManyChat para cuando el panel se te queda corto",
    lede: "ManyChat y las plataformas parecidas resuelven bien el arranque: armás un flujo, conectás WhatsApp y empezás. El techo aparece después, cuando querés algo que su editor no contempla y la respuesta es que no se puede.",
    highlights: [
      "Cambiás cualquier comportamiento describiéndolo, no eligiendo opciones",
      "Datos de tu tienda consultados en vivo, no variables cargadas a mano",
      "Historial de cambios, cambios programados y vuelta atrás en un click",
      "Métricas nuevas creadas hablando",
    ],
    body: [
      {
        heading: "Dónde aparece el techo",
        paragraphs: [
          "Las plataformas de chatbot están construidas alrededor de un editor visual, y un editor visual tiene que decidir de antemano qué bloques existen. Eso está bien para los casos comunes y se vuelve un problema para los propios de tu negocio, que son justamente los que te diferencian.",
          "El síntoma es reconocible: querés que el seguimiento cambie según el tipo de cliente, o cruzar el historial de compras con lo que está preguntando, o medir algo que el dashboard no trae, y la única salida es un workaround, exportar a una planilla o contratar a alguien.",
        ],
      },
      {
        heading: "El cambio de enfoque",
        paragraphs: [
          "BunaAI no te da un editor con bloques. Le describís el comportamiento que querés y escribe la lógica que hace falta, incluida la que nadie previó al diseñar un panel.",
          "La frase que mejor resume la diferencia es esta: en las otras plataformas configurás su producto, en BunaAI construís el tuyo. Lo que en un editor visual es “esa opción no existe”, acá es una frase más.",
        ],
      },
      {
        heading: "Comparación concreta",
        paragraphs: [
          "Para que la comparación sea útil conviene mirar cuatro cosas: cómo creás una automatización, qué pasa cuando querés algo no previsto, qué control tenés sobre los cambios y de dónde salen los datos con los que responde el agente.",
        ],
        bullets: [
          "Creación: en ManyChat armás el flujo; en BunaAI lo describís",
          "Fuera del catálogo: en ManyChat no se puede; en BunaAI se lo pedís",
          "Control de cambios: historial, cambios programados y vuelta atrás incluidos",
          "Datos: consulta de Tiendanube en vivo, no variables cargadas a mano",
          "Métricas: las nuevas se piden hablando y aparecen en el dashboard",
        ],
      },
      {
        heading: "Cuándo ManyChat sigue siendo la mejor opción",
        paragraphs: [
          "Vale decirlo: si tu caso es un flujo simple y estable, tu volumen es bajo y ya lo tenés andando, no hay razón urgente para cambiar. Migrar tiene un costo y la herramienta que ya funciona tiene valor.",
          "BunaAI rinde cuando el negocio empieza a pedir comportamientos propios, cuando el catálogo cambia seguido y las respuestas tienen que salir de datos reales, o cuando estás pagando a alguien para que toque el flujo cada vez que se te ocurre algo.",
        ],
      },
    ],
    prompts: [
      {
        prompt: "A los clientes que compraron más de tres veces, ofreceles el precio mayorista sin que lo pidan.",
        result: "Lógica basada en el historial del cliente",
      },
      {
        prompt: "Creame una métrica de cuántas conversaciones terminan en compra después de preguntar por envíos.",
        result: "Métrica nueva sin exportar a una planilla",
      },
      {
        prompt: "Probá durante siete días ofrecer envío gratis arriba de $150.000 y decime si conviene.",
        result: "Experimento medido y reversible",
      },
      {
        prompt: "Volvé a como respondía la semana pasada.",
        result: "Vuelta atrás a una versión anterior",
      },
    ],
    faqs: [
      {
        question: "¿Puedo migrar los flujos que ya tengo?",
        answer:
          "No hay una importación automática, pero en la práctica no suele hacer falta: le describís a BunaAI qué hace tu flujo actual y lo reconstruye. Suele tomar menos tiempo que haberlo armado la primera vez.",
      },
      {
        question: "¿BunaAI usa la API oficial de WhatsApp?",
        answer:
          "Hoy la conexión se hace vinculando tu número con un QR, como WhatsApp Web, lo que te deja empezar sin trámites ni aprobación previa. El soporte de WhatsApp Business Platform está en camino para las cuentas que necesiten volumen alto y plantillas oficiales.",
      },
      {
        question: "¿Qué pasa si quiero volver atrás?",
        answer:
          "Tus automatizaciones y su historial son tuyos y podés exportarlos. Y dentro de BunaAI, cualquier cambio puntual se revierte volviendo a una versión anterior, sin tener que rehacer nada.",
      },
      {
        question: "¿Cuál es la diferencia de precio?",
        answer:
          "Los planes arrancan en un rango comparable al de las plataformas de chatbot, con la diferencia de que la infraestructura, el historial de cambios y las integraciones están incluidos en vez de cobrarse aparte o requerir otra herramienta.",
      },
    ],
    related: ["chatbot-whatsapp-ia", "automatizaciones-whatsapp", "tiendanube-whatsapp"],
  },
];

export function getSolution(slug: string): Solution | undefined {
  return SOLUTIONS.find((solution) => solution.slug === slug);
}
