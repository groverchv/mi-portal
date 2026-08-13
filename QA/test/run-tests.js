import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '../../');

console.log('Iniciando auditoría de calidad y estructura de la SPA...');

const requiredFiles = [
  'src/styles/variables.css',
  'src/styles/index.css',
  'src/constants/resumeData.js',
  'src/components/Layout.jsx',
  'src/components/Section.jsx',
  'src/features/hero/HeroSection.jsx',
  'src/features/experiencia/ExperienciaSection.jsx',
  'src/features/proyectos/ProyectosSection.jsx',
  'src/features/contacto/ContactoSection.jsx',
  'src/hooks/useForm.js',
  'netlify.toml'
];

let hasErrors = false;

// 1. Verificar existencia de archivos obligatorios de la arquitectura
console.log('\n--- 1. Verificación de Arquitectura Feature-based ---');
requiredFiles.forEach(file => {
  const filePath = path.join(projectRoot, file);
  if (fs.existsSync(filePath)) {
    console.log(`[OK] Archivo detectado: ${file}`);
  } else {
    console.error(`[ERROR] Archivo faltante: ${file}`);
    hasErrors = true;
  }
});

// 2. Verificar que no se usen emojis en los componentes
console.log('\n--- 2. Verificación de restricciones visuales (No Emojis) ---');
const jsxFiles = [
  'src/components/Layout.jsx',
  'src/components/Section.jsx',
  'src/features/hero/HeroSection.jsx',
  'src/features/experiencia/components/ExperienciaCard.jsx',
  'src/features/experiencia/ExperienciaSection.jsx',
  'src/features/proyectos/components/ProyectoCard.jsx',
  'src/features/proyectos/ProyectosSection.jsx',
  'src/features/contacto/components/ContactoForm.jsx',
  'src/features/contacto/ContactoSection.jsx',
];

const emojiRegex = /[\u{1F300}-\u{1F9FF}]|[\u{1F600}-\u{1F64F}]|[\u{1F680}-\u{1F6FF}]|[\u{2600}-\u{26FF}]|[\u{2700}-\u{27BF}]/u;

jsxFiles.forEach(file => {
  const filePath = path.join(projectRoot, file);
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    if (emojiRegex.test(content)) {
      console.error(`[ERROR] Se detectaron emojis en el archivo: ${file}`);
      hasErrors = true;
    } else {
      console.log(`[OK] Sin emojis en: ${file}`);
    }
  }
});

// 3. Verificar seguridad (netlify.toml CSP presence)
console.log('\n--- 3. Verificación de Seguridad y CSP ---');
const netlifyPath = path.join(projectRoot, 'netlify.toml');
if (fs.existsSync(netlifyPath)) {
  const content = fs.readFileSync(netlifyPath, 'utf-8');
  if (content.includes('Content-Security-Policy')) {
    console.log('[OK] Cabeceras de seguridad CSP configuradas.');
  } else {
    console.error('[ERROR] Falta directiva Content-Security-Policy en netlify.toml');
    hasErrors = true;
  }
}

if (hasErrors) {
  console.error('\nAuditoría finalizada: Se encontraron fallos de calidad.');
  process.exit(1);
} else {
  console.log('\nAuditoría finalizada: El proyecto cumple con la arquitectura y restricciones de calidad.');
  process.exit(0);
}
