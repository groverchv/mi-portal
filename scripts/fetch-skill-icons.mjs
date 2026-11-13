// Genera src/constants/skillIcons.js con paths SVG (simple-icons) para los
// tipos que antes usaban la fuente Devicon. Los glifos se pintan con currentColor.
// Uso: node scripts/fetch-skill-icons.mjs
import { writeFileSync } from 'node:fs';

const MAP = {
  java: 'openjdk',
  spring: 'spring',
  python: 'python',
  django: 'django',
  react: 'react',
  angular: 'angular',
  sveltekit: 'svelte',
  javascript: 'javascript',
  typescript: 'typescript',
  html5: 'html5',
  css3: 'css3',
  postgresql: 'postgresql',
  mysql: 'mysql',
  sqlserver: 'microsoftsqlserver',
  mongodb: 'mongodb',
  supabase: 'supabase',
  git: 'git',
  github: 'github',
  postman: 'postman',
  jira: 'jira',
  trello: 'trello',
};

const result = {};
for (const [type, slug] of Object.entries(MAP)) {
  const url = `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg`;
  const res = await fetch(url);
  if (!res.ok) { console.warn(`${type} (${slug}): HTTP ${res.status}`); continue; }
  const svg = await res.text();
  const d = svg.match(/\bd="([^"]+)"/)?.[1];
  if (!d) { console.warn(`${type} (${slug}): sin path`); continue; }
  result[type] = d;
  console.log(`${type}: ok (${d.length} chars)`);
}

const js = `// Generado por scripts/fetch-skill-icons.mjs — paths de simple-icons (CC0).
export const SKILL_ICON_PATHS = ${JSON.stringify(result, null, 2)};
`;
writeFileSync('src/constants/skillIcons.js', js);
console.log(`skillIcons.js generado con ${Object.keys(result).length} iconos`);
