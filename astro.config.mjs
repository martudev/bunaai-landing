// @ts-check
import fs from "node:fs";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

import { SITE } from "./src/data/site.ts";

// HTTPS local en https://local.buna.ai:4321. Los certificados los genera
// mkcert en .certs/ (ignorado por git); si no existen, el dev server sigue en
// HTTP y el build en Vercel no se entera.
const CERT = ".certs/local.buna.ai.pem";
const KEY = ".certs/local.buna.ai-key.pem";
const https =
  fs.existsSync(CERT) && fs.existsSync(KEY)
    ? { cert: fs.readFileSync(CERT), key: fs.readFileSync(KEY) }
    : undefined;

// https://astro.build/config
export default defineConfig({
  // `site` es obligatorio para que el sitemap y los canonical se generen con
  // URLs absolutas. Sin esto Google indexa rutas relativas y se pierde la
  // consolidación de señales entre la home y las páginas de keyword.
  site: SITE.url,
  trailingSlash: "never",

  // Sin adapter: todo el sitio es HTML estático. Es la razón por la que puede
  // servirse desde CDN con TTFB ~0 y sin runtime de servidor.
  output: "static",

  integrations: [
    sitemap({
      // La 404 no debe indexarse y no aporta nada al sitemap.
      filter: (page) => !page.includes("/404"),
      changefreq: "weekly",
      lastmod: new Date(),
    }),
  ],

  build: {
    // El CSS entero va inline en el HTML. Son ~7KB comprimidos y a cambio se
    // elimina el único recurso que bloqueaba el render: el navegador puede
    // pintar con lo que llegó en la primera respuesta, sin un segundo viaje.
    // La mayoría del tráfico entra desde Google a una sola página, así que
    // perder el cacheo del CSS entre páginas no compensa el round-trip.
    inlineStylesheets: "always",
  },

  // Precarga el HTML de una página cuando el usuario pasa el mouse sobre su
  // link. Son ~2KB de JS y hacen que la navegación interna se sienta instantánea.
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "hover",
  },

  server: {
    host: "local.buna.ai",
    port: 4321,
  },

  vite: {
    plugins: [tailwindcss()],
    server: {
      https,
      allowedHosts: ["local.buna.ai"],
    },
  },
});
