/**
 * Fuente de verdad de todo lo que se repite en el sitio: dominio, nombre,
 * URLs de la app y datos de contacto. Cambiar un dato acá lo propaga a los
 * canonical, el sitemap, el schema y todos los CTAs.
 */
export const SITE = {
  url: "https://buna.ai",
  name: "BunaAI",
  /** Se usa como sufijo de <title> en todas las páginas menos la home. */
  titleSuffix: "BunaAI",
  locale: "es_AR",
  lang: "es-AR",
  description:
    "BunaAI construye y opera las automatizaciones de tu negocio en WhatsApp. Le describís en una frase lo que necesitás y lo despliega: atención, ventas, carritos abandonados y seguimiento. Integrado con Tiendanube.",
  /** Imagen de Open Graph por defecto. 1200x630. */
  ogImage: "/og/default.png",
  email: "hola@buna.ai",
  app: {
    base: "https://app.buna.ai",
    register: "https://app.buna.ai/register",
    login: "https://app.buna.ai/login",
  },
  /** Dejar en null los que todavía no existan: no se renderiza el link. */
  social: {
    linkedin: "https://www.linkedin.com/company/bunaai",
    instagram: null,
    x: null,
    youtube: null,
  },
} as const;

/** Etiquetas de los CTAs, centralizadas para poder testear variantes. */
export const CTA = {
  primary: { label: "Empezar gratis", href: SITE.app.register },
  secondary: { label: "Ver una demo", href: "/demo" },
  login: { label: "Iniciar sesión", href: SITE.app.login },
} as const;
