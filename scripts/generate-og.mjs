import sharp from "sharp";
import { mkdirSync, readFileSync } from "node:fs";

const root = "/Users/martu-mac/martu-workspace/bunaai/landing-web";

// El logo se reusa del favicon para que la imagen social y el sitio no se
// desincronicen si la marca cambia.
const mark = readFileSync(`${root}/public/favicon.svg`, "utf8")
  .replace(/<\?xml[^>]*\?>/, "")
  .replace(/<!DOCTYPE[^>]*>/, "")
  .replace(/width="100%"/, 'width="96"')
  .replace(/height="100%"/, 'height="96"');

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <radialGradient id="glow" cx="78%" cy="8%" r="68%">
      <stop offset="0%" stop-color="#2fac6a" stop-opacity="0.42"/>
      <stop offset="100%" stop-color="#2fac6a" stop-opacity="0"/>
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="#050a34"/>
  <rect width="1200" height="630" fill="url(#glow)"/>

  <g transform="translate(80, 72)">${mark}</g>
  <text x="196" y="138" font-family="Helvetica, Arial, sans-serif" font-size="40" font-weight="700" fill="#ffffff">Buna</text>

  <text x="80" y="292" font-family="Helvetica, Arial, sans-serif" font-size="66" font-weight="700" fill="#ffffff">Automatizá tu negocio en</text>
  <text x="80" y="372" font-family="Helvetica, Arial, sans-serif" font-size="66" font-weight="700" fill="#ffffff">WhatsApp describiéndolo</text>
  <text x="80" y="452" font-family="Helvetica, Arial, sans-serif" font-size="66" font-weight="700" fill="#4ade9a">en una frase</text>

  <text x="80" y="540" font-family="Helvetica, Arial, sans-serif" font-size="29" fill="#ffffff" fill-opacity="0.62">Agentes de IA para WhatsApp · Integrado con Tienda Nube</text>

  <rect x="80" y="576" width="120" height="5" rx="2.5" fill="#2fac6a"/>
</svg>`;

mkdirSync(`${root}/public/og`, { recursive: true });
await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(`${root}/public/og/default.png`);
console.log("generada public/og/default.png");
