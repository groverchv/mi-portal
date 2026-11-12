// One-off script: converts project PNGs to WebP, renames spaces to dashes.
// Usage: npm install --no-save sharp && node scripts/optimize-images.mjs
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dir = path.join(__dirname, '../public/app');

const files = fs.readdirSync(dir).filter((f) => f.toLowerCase().endsWith('.png'));

for (const file of files) {
  const src = path.join(dir, file);
  const outName = file.replace(/\s+/g, '-').replace(/\.png$/i, '.webp');
  const dest = path.join(dir, outName);

  const info = await sharp(src)
    .resize({ width: 1200, withoutEnlargement: true })
    .webp({ quality: 82 })
    .toFile(dest);

  const srcKb = (fs.statSync(src).size / 1024).toFixed(0);
  const outKb = (info.size / 1024).toFixed(0);
  console.log(`${file} (${srcKb}KB) -> ${outName} (${outKb}KB) [${info.width}x${info.height}]`);
}
