// Genera public/cv.pdf — CV en formato Harvard (monocromo, columna única, header centrado).
// Uso: npm install pdfkit --no-save && node scripts/generate-cv.mjs
import PDFDocument from 'pdfkit';
import { createWriteStream } from 'node:fs';

const INK = '#1a1a1a';
const MUTED = '#444444';
const RULE = '#1a1a1a';

const CV = {
  name: 'GROVER CHOQUE VILLCA',
  role: 'Desarrollador Full Stack | Estudiante de Ingeniería de Sistemas',
  contact: 'Santa Cruz, Bolivia  |  +591 78023575  |  groverchoquevillca80@gmail.com',
  links: 'linkedin.com/in/grover-choque-villca  |  github.com/groverchv  |  grover-choque-villca.netlify.app',
  profile:
    'Desarrollador Full Stack con mentalidad emprendedora e innovadora, especializado en transformar ideas de negocio y requerimientos complejos en productos digitales escalables de alto impacto. Combino visión estratégica de producto con dominio técnico en arquitecturas modernas e Inteligencia Artificial para optimizar procesos y crear soluciones disruptivas desde cero. Enfocado en la entrega continua de valor, validación rigurosa de lógica de negocio y diseño centrado en la experiencia del usuario bajo metodologías ágiles.',
  experience: [
    {
      role: 'Pasante de Desarrollo y Analítica de Datos',
      company: 'DataHub Analytics — Santa Cruz, Bolivia',
      period: 'agosto 2026 – actualmente',
      bullets: [
        'Colaboración en el desarrollo y optimización de soluciones tecnológicas orientadas al procesamiento y análisis de datos para la toma de decisiones estratégicas.'
      ]
    },
    {
      role: 'Miembro Investigador en el Área de Inteligencia Artificial',
      company: 'Observatorio de Inteligencia Artificial de la FICCT-UAGRM — Santa Cruz, Bolivia',
      period: 'agosto 2026 – actualmente',
      bullets: [
        'Impulso e investigación de iniciativas tecnológicas basadas en modelos de lenguaje (LLMs) y visión computacional aplicadas a la resolución de problemáticas reales.'
      ]
    },
    {
      role: 'Desarrollador Full Stack (Proyectos Académicos)',
      company: 'Universidad Autónoma Gabriel René Moreno (UAGRM) — Santa Cruz, Bolivia',
      period: 'agosto 2025 – junio 2026',
      bullets: [
        'ERP "Control Financiero": construcción de un sistema híbrido (React 19, Supabase, Hyperledger) validando flujos de integración para asegurar el 100% de inmutabilidad en auditorías de activos.',
        '"CoachVirtual": webapp con MediaPipe y LLaMA 3.1, con pruebas de diseño responsivo en ResponsivelyApp para detección y conteo automático de postura en tiempo real.',
        'IA de Generación de Código: herramienta con WebSockets y Spring Boot que acortó la maquetación en 40% tras validar la estabilidad de comunicación y probar endpoints con Postman.',
        'Detector de Placas: módulo OCR para identificar matrículas vehiculares, con pruebas de rendimiento ante diferentes condiciones de iluminación y registro correcto de datos.'
      ]
    },
    {
      role: 'Desarrollador Frontend (Pasantía)',
      company: 'Universidad Autónoma Gabriel René Moreno (UAGRM) — Santa Cruz, Bolivia',
      period: 'enero 2024 – junio 2025',
      bullets: [
        'Sistema Planificador Académico: integración del algoritmo de ruta crítica (CPM) validando exhaustivamente prerrequisitos y lógica de negocio, acelerando la planificación académica en un 35%.',
        'Gestión Logística: automatización de la asignación de horarios diseñando pruebas para escenarios límite (edge cases), disminuyendo en un 30% los conflictos por choques de materias.'
      ]
    }
  ],
  education: [
    {
      role: 'Ingeniería de Sistemas (Cursando 9no Semestre)',
      company: 'Universidad Autónoma Gabriel René Moreno (UAGRM)',
      period: ''
    },
    {
      role: 'Operador de Computadoras',
      company: 'IPTAB — Santa Cruz, Bolivia',
      period: '2017'
    }
  ],
  competencies: [
    ['Backend y APIs', 'Java (Spring Boot), Python (Django), WebSockets, REST APIs.'],
    ['Frontend', 'React 19, Angular, SvelteKit, JavaScript, HTML5, CSS3.'],
    ['Bases de Datos y BaaS', 'PostgreSQL, MySQL, SQL Server, MongoDB, DynamoDB, Supabase.'],
    ['Inteligencia Artificial', 'Integración de LLMs, Visión Computacional (MediaPipe, OCR).'],
    ['Calidad y Herramientas', 'Git, GitHub, Postman, ResponsivelyApp, Jira, Trello, Google Workspace.'],
    ['Idiomas', 'Español (Nativo), Inglés (Lectura técnica / En curso).']
  ],
  extra: [
    'Scrum Foundation Professional — CertiProf (2024).',
    'Programa Liderando con Inteligencia Artificial — Vital Dignity Academy (2026).'
  ]
};

const doc = new PDFDocument({ size: 'A4', margins: { top: 50, bottom: 50, left: 56, right: 56 } });
doc.pipe(createWriteStream('public/cv.pdf'));

const LEFT = doc.page.margins.left;
const WIDTH = doc.page.width - LEFT - doc.page.margins.right;

function section(title) {
  doc.moveDown(0.8);
  doc.font('Helvetica-Bold').fontSize(11).fillColor(INK).text(title.toUpperCase());
  doc.moveTo(LEFT, doc.y + 3).lineTo(LEFT + WIDTH, doc.y + 3).lineWidth(0.8).strokeColor(RULE).stroke();
  doc.y += 8;
  doc.x = LEFT;
}

function entry(role, company, period, bullets = []) {
  const y = doc.y;
  // Fecha a la derecha en la misma línea que el rol (ancho completo => doc.x queda en LEFT)
  if (period) {
    doc.font('Helvetica').fontSize(9).fillColor(MUTED)
      .text(period, LEFT, y, { width: WIDTH, align: 'right' });
  }
  doc.font('Helvetica-Bold').fontSize(10).fillColor(INK)
    .text(role, LEFT, y, { width: WIDTH - 110 });
  doc.font('Helvetica').fontSize(9).fillColor(MUTED).text(company, { width: WIDTH });
  for (const b of bullets) {
    doc.font('Helvetica').fontSize(9).fillColor(INK)
      .text(`•  ${b}`, { width: WIDTH - 14, indent: 12, lineGap: 1.2 });
  }
  doc.moveDown(0.6);
}

// ===== Header centrado (Harvard) =====
doc.font('Helvetica-Bold').fontSize(21).fillColor(INK).text(CV.name, { align: 'center', characterSpacing: 0.5 });
doc.moveDown(0.15);
doc.font('Helvetica').fontSize(10.5).fillColor(MUTED).text(CV.role, { align: 'center' });
doc.moveDown(0.35);
doc.font('Helvetica').fontSize(8.5).fillColor(MUTED).text(CV.contact, { align: 'center' });
doc.text(CV.links, { align: 'center' });

// ===== Perfil =====
section('Perfil Profesional');
doc.font('Helvetica').fontSize(9).fillColor(INK).text(CV.profile, { width: WIDTH, lineGap: 1.8, align: 'justify' });

// ===== Experiencia =====
section('Experiencia Profesional');
for (const e of CV.experience) entry(e.role, e.company, e.period, e.bullets);

// ===== Educación =====
section('Educación');
for (const e of CV.education) entry(e.role, e.company, e.period);

// ===== Competencias =====
section('Competencias');
for (const [cat, items] of CV.competencies) {
  doc.font('Helvetica-Bold').fontSize(9).fillColor(INK)
    .text(`•  ${cat}: `, { continued: true })
    .font('Helvetica').text(items, { width: WIDTH });
  doc.moveDown(0.2);
}

// ===== Formación adicional =====
section('Formación Adicional y Liderazgo');
for (const item of CV.extra) {
  doc.font('Helvetica').fontSize(9).fillColor(INK).text(`•  ${item}`, { width: WIDTH - 14, indent: 12 });
  doc.moveDown(0.2);
}

doc.end();
console.log('cv.pdf generado en public/ (formato Harvard)');
