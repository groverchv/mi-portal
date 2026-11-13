// Descarga los woff2 de Plus Jakarta Sans (variable, latin + latin-ext) a public/fonts/
// y genera src/styles/fonts.css con @font-face self-hosted.
// Uso: node scripts/fetch-fonts.mjs
import { writeFileSync, mkdirSync } from 'node:fs';

const CSS_URL = 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300..700&display=swap';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36';

const css = await (await fetch(CSS_URL, { headers: { 'User-Agent': UA } })).text();

mkdirSync('public/fonts', { recursive: true });

const blocks = css.match(/\/\* ([a-z-]+) \*\/[\s\S]*?@font-face \{[\s\S]*?\}/g) || [];
const wanted = ['latin', 'latin-ext'];
let out = '/* Self-hosted Plus Jakarta Sans — generado por scripts/fetch-fonts.mjs */\n';

for (const block of blocks) {
  const subset = block.match(/\/\* ([a-z-]+) \*\//)[1];
  if (!wanted.includes(subset)) continue;
  const url = block.match(/url\((https:[^)]+)\)/)[1];
  const unicode = block.match(/unicode-range: ([^;]+);/)[1];
  const file = `plus-jakarta-sans-${subset}.woff2`;
  const buf = Buffer.from(await (await fetch(url)).arrayBuffer());
  writeFileSync(`public/fonts/${file}`, buf);
  out += `
@font-face {
  font-family: 'Plus Jakarta Sans';
  font-style: normal;
  font-weight: 300 700;
  font-display: swap;
  src: url('/fonts/${file}') format('woff2');
  unicode-range: ${unicode};
}
`;
  console.log(`${file} <- ${buf.length}B`);
}

writeFileSync('src/styles/fonts.css', out);
console.log('fonts.css generado');
