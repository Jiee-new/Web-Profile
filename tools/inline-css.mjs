import { readFileSync, writeFileSync } from 'node:fs';

const root = new URL('../', import.meta.url);
const START = '<!-- tailwind:start -->';
const END = '<!-- tailwind:end -->';

const css = readFileSync(new URL('./build.css', import.meta.url), 'utf8').trim();
const htmlPath = new URL('index.html', root);
const html = readFileSync(htmlPath, 'utf8');

const startIndex = html.indexOf(START);
const endIndex = html.indexOf(END);

if (startIndex === -1 || endIndex === -1) {
  throw new Error(`Marker "${START}" / "${END}" tidak ditemukan di index.html`);
}

const note = [
  START,
  '  <!-- CSS di bawah ini hasil build Tailwind. Jangan edit manual.',
  '       Setelah mengubah class di index.html, jalankan: npm run build:css -->',
  `  <style>${css}</style>`,
  '  ',
  END,
].join('\n');

// Ganti isi antara marker (termasuk marker lama) dengan CSS terbaru.
const next = html.slice(0, startIndex) + note + html.slice(endIndex + END.length);
writeFileSync(htmlPath, next);

const size = (Buffer.byteLength(css) / 1024).toFixed(1);
console.log(`✓ CSS ${size} KB berhasil di-inline ke index.html`);
