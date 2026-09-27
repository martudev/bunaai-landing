/**
 * Constructores de JSON-LD. Están separados de los componentes para que el
 * mismo `@id` de Organization se reutilice en todas las páginas: así Google
 * entiende que es una sola entidad y no una por URL.
 */
import { SITE } from "./site";

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

export function organizationSchema() {
  // SITE.social es `as const`, así que sus valores son literales y no `string`:
  // el predicado tiene que excluir null en vez de afirmar `string`.
  const sameAs = Object.values(SITE.social).filter(
    (url): url is Exclude<typeof url, null> => url !== null,
  );

  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/favicon.svg`,
    },
    description: SITE.description,
    email: SITE.email,
    ...(sameAs.length > 0 && { sameAs }),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE.url,
    name: SITE.name,
    inLanguage: SITE.lang,
    publisher: { "@id": ORG_ID },
  };
}

/**
 * El producto en sí. `SoftwareApplication` es el tipo que Google usa para
 * mostrar precio y categoría en resultados enriquecidos.
 */
export function softwareSchema(opts: { lowPrice: number; highPrice: number; currency: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `${SITE.url}/#software`,
    name: SITE.name,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Marketing Automation Software",
    operatingSystem: "Web",
    url: SITE.url,
    description: SITE.description,
    publisher: { "@id": ORG_ID },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: opts.currency,
      lowPrice: opts.lowPrice,
      highPrice: opts.highPrice,
      offerCount: 3,
    },
    featureList: [
      "Agentes de IA para WhatsApp",
      "Automatizaciones descritas en lenguaje natural",
      "Recuperación de carritos abandonados",
      "Integración con Tienda Nube",
      "Versionado y rollback de automatizaciones",
      "Métricas y analíticas conversacionales",
    ],
  };
}

export function faqSchema(faqs: readonly { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

/**
 * Migas de pan. Google las muestra en lugar de la URL cruda en el resultado,
 * lo que sube el CTR en las páginas internas.
 */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: new URL(item.path, SITE.url).href,
    })),
  };
}
