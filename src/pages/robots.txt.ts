import type { APIRoute } from "astro";
import { SITE } from "../data/site";

/**
 * robots.txt generado, no escrito a mano: así la URL del sitemap sale de la
 * misma constante que los canonical y es imposible que queden apuntando a
 * dominios distintos después de un cambio de dominio.
 */
export const GET: APIRoute = () => {
  const body = `User-agent: *
Allow: /

# Los crawlers de IA también mandan tráfico: se les permite explícitamente.
User-agent: GPTBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

Sitemap: ${new URL("sitemap-index.xml", SITE.url).href}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
