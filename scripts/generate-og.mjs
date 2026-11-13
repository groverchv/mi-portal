// Genera public/og-cover.png (1200x630) para Open Graph / Twitter Cards.
// Uso: npm install sharp --no-save && node scripts/generate-og.mjs
import sharp from 'sharp';
import { createWriteStream } from 'node:fs';

const W = 1200;
const H = 630;

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <rect width="${W}" height="${H}" fill="#0f172a"/>
  <rect x="40" y="40" width="${W - 80}" height="${H - 80}" rx="12" fill="none" stroke="#1e293b" stroke-width="1.5"/>
  <rect x="72" y="64" width="56" height="4" rx="2" fill="#22c55e"/>

  <text x="72" y="200" font-family="Segoe UI, Arial, sans-serif" font-size="30" font-weight="600" fill="#22c55e" letter-spacing="4">PORTAFOLIO</text>
  <text x="72" y="290" font-family="Segoe UI, Arial, sans-serif" font-size="72" font-weight="700" fill="#f8fafc">Grover Choque Villca</text>
  <text x="72" y="352" font-family="Segoe UI, Arial, sans-serif" font-size="34" font-weight="500" fill="#cbd5e1">Desarrollador Full Stack | Ingeniería de Sistemas</text>

  <line x1="72" y1="410" x2="${W - 72}" y2="410" stroke="#1e293b" stroke-width="1.5"/>

  <g font-family="Segoe UI, Arial, sans-serif" font-size="24" fill="#94a3b8">
    <text x="72" y="466">Inteligencia Artificial · Arquitecturas Web · Productos Escalables</text>
    <text x="72" y="540" fill="#64748b">Santa Cruz, Bolivia</text>
  </g>
  <text x="${W - 72}" y="540" text-anchor="end" font-family="Consolas, monospace" font-size="24" fill="#22c55e">grover-choque-villca.netlify.app</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og-cover.png');
console.log('og-cover.png generado en public/ (1200x630)');
