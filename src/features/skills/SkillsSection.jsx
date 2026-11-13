import Section from '../../components/Section';
import Reveal from '../../components/Reveal';
import { SKILL_ICON_PATHS } from '../../constants/skillIcons';
import styles from './SkillsSection.module.css';

function SkillIcon({ type }) {
  const path = SKILL_ICON_PATHS[type];
  if (path) {
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
        <path d={path} />
      </svg>
    );
  }

  // Fallbacks for AI/ML/custom/etc.
  if (['yolo', 'mediapipe', 'llama', 'lmstudio', 'lmsys', 'llms', 'vision', 'ocr'].includes(type)) {
    // Neural network/Brain/Robot icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8v4a6 6 0 0 0 6 6h4a6 6 0 0 0 6-6v-4a8 8 0 0 0-8-8z"/>
        <circle cx="9" cy="11" r="1.2" fill="currentColor"/>
        <circle cx="15" cy="11" r="1.2" fill="currentColor"/>
        <path d="M9 16h6"/>
      </svg>
    );
  }

  if (['gemini', 'aistudio', 'notebooklm'].includes(type)) {
    // Sparkle icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      </svg>
    );
  }

  if (['elevenlabs', 'stitch'].includes(type)) {
    // Audio / Voice Wave icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5v14M22 9v6M7 5v14M2 9v6"/>
      </svg>
    );
  }

  if (['blockchain', 'smartcontracts'].includes(type)) {
    // Blockchain Cube
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
      </svg>
    );
  }

  if (['staruml', 'lucidchart', 'drawio'].includes(type)) {
    // Diagram / Flowchart Nodes icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
        <path d="M10 6h4v8h-4"/>
      </svg>
    );
  }

  if (type === 'websockets') {
    // Bidirectional arrows icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 16V4M7 4 3 8M7 4l4 4"/>
        <path d="M17 8v12m0 0 4-4m-4 4-4-4"/>
      </svg>
    );
  }

  if (type === 'rest') {
    // Code brackets icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    );
  }

  if (type === 'dynamodb') {
    // Database cylinder icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3"/>
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
      </svg>
    );
  }

  if (type === 'responsivelyapp') {
    // Smartphone icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    );
  }

  if (type === 'workspace') {
    // Grid / apps icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7"/>
        <rect x="14" y="3" width="7" height="7"/>
        <rect x="14" y="14" width="7" height="7"/>
        <rect x="3" y="14" width="7" height="7"/>
      </svg>
    );
  }

  if (['spanish', 'english'].includes(type)) {
    // Globe icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <line x1="2" y1="12" x2="22" y2="12"/>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    );
  }

  return null;
}

const SKILLS_DATA = [
  {
    category: "Backend y APIs",
    skills: [
      { name: "Java", type: "java" },
      { name: "Spring Boot", type: "spring" },
      { name: "Python", type: "python" },
      { name: "Django", type: "django" },
      { name: "WebSockets", type: "websockets" },
      { name: "REST APIs", type: "rest" }
    ]
  },
  {
    category: "Frontend",
    skills: [
      { name: "React 19", type: "react" },
      { name: "Angular", type: "angular" },
      { name: "SvelteKit", type: "sveltekit" },
      { name: "JavaScript", type: "javascript" },
      { name: "TypeScript", type: "typescript" },
      { name: "HTML5", type: "html5" },
      { name: "CSS3", type: "css3" }
    ]
  },
  {
    category: "Inteligencia Artificial",
    skills: [
      { name: "Integración de LLMs", type: "llms" },
      { name: "Visión Computacional", type: "vision" },
      { name: "MediaPipe", type: "mediapipe" },
      { name: "OCR", type: "ocr" }
    ]
  },
  {
    category: "Bases de Datos y BaaS",
    skills: [
      { name: "PostgreSQL", type: "postgresql" },
      { name: "MySQL", type: "mysql" },
      { name: "SQL Server", type: "sqlserver" },
      { name: "MongoDB", type: "mongodb" },
      { name: "DynamoDB", type: "dynamodb" },
      { name: "Supabase", type: "supabase" }
    ]
  },
  {
    category: "Calidad y Herramientas",
    skills: [
      { name: "Git", type: "git" },
      { name: "GitHub", type: "github" },
      { name: "Postman", type: "postman" },
      { name: "ResponsivelyApp", type: "responsivelyapp" },
      { name: "Jira Software", type: "jira" },
      { name: "Trello", type: "trello" },
      { name: "Google Workspace", type: "workspace" }
    ]
  },
  {
    category: "Idiomas",
    skills: [
      { name: "Español (Nativo)", type: "spanish" },
      { name: "Inglés (En curso)", type: "english" }
    ]
  }
];

export default function SkillsSection() {
  return (
    <Section id="habilidades" title="Tecnologías y Herramientas" index="02">
      <div className={styles.container}>
        {SKILLS_DATA.map((group, gIdx) => (
          <Reveal key={group.category} className={styles.group} delay={Math.min(gIdx * 80, 320)}>
            <h3 className={styles.groupTitle}>{group.category}</h3>
            <div className={styles.skillsList}>
              {group.skills.map((skill) => (
                <span 
                  key={skill.name} 
                  className={`${styles.badge} ${styles[skill.type]}`}
                >
                  <SkillIcon type={skill.type} />
                  {skill.name}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
