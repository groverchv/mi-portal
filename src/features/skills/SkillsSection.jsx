import Section from '../../components/Section';
import styles from './SkillsSection.module.css';

const DEVICON_MAP = {
  java: "devicon-java-plain",
  spring: "devicon-spring-original",
  python: "devicon-python-plain",
  django: "devicon-django-plain",
  fastapi: "devicon-fastapi-plain",
  laravel: "devicon-laravel-original",
  javascript: "devicon-javascript-plain",
  typescript: "devicon-typescript-plain",
  react: "devicon-react-original",
  vue: "devicon-vuejs-plain",
  angular: "devicon-angularjs-plain",
  flutter: "devicon-flutter-plain",
  hyperledger: "devicon-hyperledger-plain",
  solidity: "devicon-solidity-plain",
  threejs: "devicon-threejs-original",
  oci: "devicon-oracle-original",
  supabase: "devicon-supabase-plain",
  postgresql: "devicon-postgresql-plain",
  mongodb: "devicon-mongodb-plain",
  mysql: "devicon-mysql-plain",
  sqlserver: "devicon-microsoftsqlserver-plain",
  jira: "devicon-jira-plain",
  trello: "devicon-trello-plain",
  sqlite: "devicon-sqlite-plain"
};

function SkillIcon({ type }) {
  const deviconClass = DEVICON_MAP[type];
  if (deviconClass) {
    return <i className={deviconClass} />;
  }

  // Fallbacks for AI/ML/custom/etc.
  if (type === 'yolo' || type === 'mediapipe' || type === 'llama' || type === 'lmstudio' || type === 'lmsys') {
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

  if (type === 'gemini' || type === 'aistudio' || type === 'notebooklm') {
    // Sparkle icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
      </svg>
    );
  }

  if (type === 'elevenlabs' || type === 'stitch') {
    // Audio / Voice Wave icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5v14M22 9v6M7 5v14M2 9v6"/>
      </svg>
    );
  }

  if (type === 'blockchain' || type === 'smartcontracts') {
    // Blockchain Cube
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/>
      </svg>
    );
  }

  if (type === 'staruml' || type === 'lucidchart' || type === 'drawio') {
    // Diagram / Flowchart Nodes icon
    return (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1"/>
        <rect x="14" y="14" width="7" height="7" rx="1"/>
        <path d="M10 6h4v8h-4"/>
      </svg>
    );
  }

  return null;
}

const SKILLS_DATA = [
  {
    category: "Lenguajes y Frameworks",
    skills: [
      { name: "Java", type: "java" },
      { name: "Spring Boot", type: "spring" },
      { name: "Python", type: "python" },
      { name: "Django", type: "django" },
      { name: "FastAPI", type: "fastapi" },
      { name: "Laravel", type: "laravel" },
      { name: "JavaScript", type: "javascript" },
      { name: "TypeScript", type: "typescript" },
      { name: "React", type: "react" },
      { name: "Vue.js", type: "vue" },
      { name: "Angular", type: "angular" },
      { name: "Flutter", type: "flutter" }
    ]
  },
  {
    category: "Inteligencia Artificial y ML",
    skills: [
      { name: "YOLOv9 & Vision", type: "yolo" },
      { name: "MediaPipe", type: "mediapipe" },
      { name: "LLaMA 3.1 / LLMs", type: "llama" },
      { name: "Google Gemini API", type: "gemini" },
      { name: "Google AI Studio", type: "aistudio" },
      { name: "LM Studio", type: "lmstudio" },
      { name: "NotebookLM", type: "notebooklm" },
      { name: "LMSYS Chatbot Arena", type: "lmsys" },
      { name: "ElevenLabs", type: "elevenlabs" },
      { name: "Voice & Audio Stitching", type: "stitch" }
    ]
  },
  {
    category: "Web3, Blockchain y AR",
    skills: [
      { name: "Hyperledger Fabric", type: "hyperledger" },
      { name: "Solidity", type: "solidity" },
      { name: "Three.js & AR", type: "threejs" },
      { name: "Blockchain", type: "blockchain" },
      { name: "Smart Contracts", type: "smartcontracts" }
    ]
  },
  {
    category: "Infraestructura, Gestión y BD",
    skills: [
      { name: "Oracle Cloud (OCI)", type: "oci" },
      { name: "Supabase", type: "supabase" },
      { name: "PostgreSQL", type: "postgresql" },
      { name: "MongoDB", type: "mongodb" },
      { name: "MySQL", type: "mysql" },
      { name: "SQL Server", type: "sqlserver" },
      { name: "SQLite", type: "sqlite" },
      { name: "Jira Software", type: "jira" },
      { name: "Trello", type: "trello" },
      { name: "StarUML", type: "staruml" },
      { name: "Lucidchart", type: "lucidchart" },
      { name: "Draw.io", type: "drawio" }
    ]
  }
];

export default function SkillsSection() {
  return (
    <Section id="habilidades" title="Tecnologías y Herramientas">
      <div className={styles.container}>
        {SKILLS_DATA.map((group) => (
          <div key={group.category} className={styles.group}>
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
          </div>
        ))}
      </div>
    </Section>
  );
}
