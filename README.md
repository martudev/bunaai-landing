# Landing de Buna

Sitio estático en Astro para [buna.ai](https://buna.ai). La app del producto vive
aparte, en `app.buna.ai` (repo `bunaai-app`).

El sitio está construido con dos objetivos que se tensionan entre sí y que
conviene tener presentes antes de tocar nada: **posicionar el producto por
encima de su categoría** y **capturar la demanda de búsqueda que existe dentro
de esa categoría**.

---

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview   # sirve dist/ como en producción
npm run check     # type check de .astro y .ts
npm run og        # regenera public/og/default.png
```

---

## La decisión de arquitectura de contenido

Buna no se vende como "un chatbot". Se vende como *decile a Buna qué necesitás
que haga tu negocio y ella lo construye, lo despliega y lo opera*.

El problema es que nadie busca eso en Google. La gente busca "chatbot whatsapp",
"automatizaciones" o "recuperar carritos abandonados".

La solución es la separación de roles entre páginas:

- **La home (`/`) vende la visión.** Su H1 habla de automatizar el negocio
  describiéndolo, no de chatbots.
- **Las páginas de `src/data/solutions.ts` capturan las búsquedas de categoría**
  y llevan a la visión. Cada una ataca una intención concreta con contenido
  propio.

Hoy son cinco: chatbot de WhatsApp con IA, automatizaciones de WhatsApp,
Tienda Nube + WhatsApp, recuperación de carritos abandonados y alternativa a
ManyChat.

### Agregar una página de keyword

Agregás una entrada a `SOLUTIONS` en `src/data/solutions.ts` y listo: la ruta,
el sitemap, el schema y los links del footer salen solos.

Reglas que conviene respetar:

- `title` de 50 a 60 caracteres, con la keyword al principio.
- `description` de 140 a 160. Más largo lo corta Google.
- `h1` distinto del `title`: uno es para el resultado de búsqueda y el otro
  para la página.
- `related` con 2 o 3 slugs. El enlazado interno es lo que reparte autoridad
  entre las páginas y evita que queden huérfanas.
- Contenido real y propio. Una plantilla con una palabra cambiada no rankea:
  Google la trata como contenido duplicado.

---

## Estructura

```
src/
├── data/                     Todo el contenido, separado del markup
│   ├── site.ts               Dominio, nombre, URLs de la app, CTAs
│   ├── content.ts            Copy de la home
│   ├── solutions.ts          Páginas de keyword
│   ├── pricing.ts            Planes  ⚠️ ver nota abajo
│   └── schema.ts             Constructores de JSON-LD
├── components/
│   ├── seo/                  Meta tags y datos estructurados
│   ├── layout/               Header y Footer
│   ├── sections/             Bloques de la home
│   └── ui/                   Botón, sección, íconos, migas de pan
├── layouts/Layout.astro      <head>, fuentes, schema global
├── pages/
│   ├── index.astro           Home
│   ├── [slug].astro          Una ruta por entrada de SOLUTIONS
│   ├── precios.astro
│   ├── demo.astro
│   ├── 404.astro
│   └── robots.txt.ts         Generado, para que apunte siempre al dominio real
└── styles/global.css         Tokens de diseño y @font-face
```

El contenido está separado de los componentes a propósito: iterar SEO significa
cambiar títulos, preguntas y ejemplos, y eso no debería obligar a tocar markup.

---

## Por qué el sitio es rápido

Números reales del build, comprimidos con brotli, que es lo que viaja:

| Recurso                        | Transferencia |
| ------------------------------ | ------------- |
| Home (HTML + CSS inline)       | ~16 KB        |
| Página de keyword              | ~13 KB        |
| JavaScript                     | ~1 KB         |
| Fuentes (2 archivos)           | ~86 KB        |

Cinco peticiones en total, todas del mismo origen. Las decisiones detrás:

- **Cero JavaScript de framework.** No hay React ni islas hidratadas. El único
  JS del sitio es el toggle del menú mobile y el prefetch de Astro.
- **CSS inline.** `inlineStylesheets: "always"` mete el CSS en el HTML y
  elimina el único recurso que bloqueaba el render.
- **Fuentes self-hosted y precargadas.** Nada de `fonts.googleapis.com`: evita
  DNS y TLS con un tercero en el camino crítico del LCP.
- **El demo del hero es HTML, no un video ni una imagen.** Pesa nada, se indexa
  y no genera CLS.
- **Íconos SVG inline** en vez de una librería de íconos.

Si vas a agregar algo interactivo, agregalo como isla (`client:visible`) y no
globalmente. La ventaja de este sitio es frágil: una sola dependencia hidratada
en el layout se la lleva puesta.

---

## SEO: lo que ya está resuelto

- Canonical absoluto derivado de `Astro.url`, imposible de olvidar o copiar mal.
- Open Graph y Twitter Card completos, con imagen generada (`npm run og`).
- JSON-LD: `Organization` y `WebSite` en todas las páginas con el mismo `@id`,
  más `SoftwareApplication`, `FAQPage` y `BreadcrumbList` donde corresponde.
- `sitemap-index.xml` y `robots.txt` generados en el build.
- Jerarquía de headings correcta y un solo `<h1>` por página.
- `hreflang`: **no está**, y está bien así mientras el sitio sea solo en
  español. Cuando exista `/en` hay que agregarlo.

---

## Pendientes antes de publicar

1. **Confirmar los precios de `src/data/pricing.ts`.** Los montos actuales
   (USD 25 / 80 / 249) son los de la última estructura discutida, no una
   decisión cerrada. Es el dato más caro de cambiar después, porque queda
   cacheado en Google y citado por terceros.
2. **Enchufar el link de agenda en `src/pages/demo.astro`** (`BOOKING_URL`).
   Mientras esté en `null`, la página ofrece email, que funciona.
3. **Confirmar el dominio.** Todo sale de `SITE.url` en `src/data/site.ts`.
4. **Redes sociales** en `SITE.social`: las que estén en `null` no se
   renderizan. Verificar que el LinkedIn sea el correcto.
5. Dar de alta el sitio en Google Search Console y mandar el sitemap.
