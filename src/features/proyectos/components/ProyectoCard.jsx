import styles from './ProyectoCard.module.css';

export default function ProyectoCard({ title, description, tags, link, previewType, onPreview }) {
  const isIframe = previewType === 'iframe';

  // Custom mockup styles based on project title
  const getMockupDetails = (projTitle) => {
    if (projTitle.includes("Control Financiero")) {
      return {
        gradient: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)",
        subtitle: "Sistema ERP Blockchain"
      };
    }
    if (projTitle.includes("Placas") || projTitle.includes("Registro de Placas")) {
      return {
        gradient: "linear-gradient(135deg, #0f172a 0%, #0369a1 100%)",
        subtitle: "Análisis & Registro de Placas"
      };
    }
    if (projTitle.includes("Inmobiliaria Web3")) {
      return {
        gradient: "linear-gradient(135deg, #1e3a8a 0%, #311042 100%)",
        subtitle: "Web3 & Realidad Aumentada"
      };
    }
    if (projTitle.includes("Mueblería CRUZ")) {
      return {
        gradient: "linear-gradient(135deg, #7c2d12 0%, #4c1d95 100%)",
        subtitle: "ERP Laravel & Vue"
      };
    }
    if (projTitle.includes("Planificador Académico") || projTitle.includes("Ruta Crítica")) {
      return {
        gradient: "linear-gradient(135deg, #065f46 0%, #075985 100%)",
        subtitle: "Algoritmo de Ruta Crítica (CPM)"
      };
    }
    if (projTitle.includes("CoachVirtual")) {
      return {
        gradient: "linear-gradient(135deg, #581c87 0%, #831843 100%)",
        subtitle: "MediaPipe Pose Detector"
      };
    }
    return {
      gradient: "linear-gradient(135deg, #1e293b 0%, #0f172a 100%)",
      subtitle: "Generador de Arquitecturas IA"
    };
  };

  const mockup = getMockupDetails(title);

  return (
    <article className={styles.card}>
      {link && (
        <div className={styles.browserMockup}>
          <div className={styles.browserHeader}>
            <span className={styles.browserUrl}>{link.replace('https://', '')}</span>
          </div>
          <div 
            className={styles.browserBody} 
            style={!isIframe ? { background: mockup.gradient } : { backgroundColor: '#ffffff' }}
          >
            {isIframe ? (
              <iframe
                src={link}
                title={`Previsualización de ${title}`}
                className={styles.iframePreview}
                loading="lazy"
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            ) : (
              <div 
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  padding: '16px',
                  textAlign: 'center',
                  color: '#ffffff',
                  width: '100%'
                }}
              >
                <span style={{ fontSize: '1rem', fontWeight: '600', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255, 255, 255, 0.95)' }}>
                  {mockup.subtitle}
                </span>
              </div>
            )}
          </div>
        </div>
      )}
      
      <div className={styles.cardContent}>
        <header className={styles.header}>
          <a href={link} className={styles.titleLink} target="_blank" rel="noopener noreferrer">
            {title}
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
              <polyline points="15 3 21 3 21 9" />
              <line x1="10" y1="14" x2="21" y2="3" />
            </svg>
          </a>
        </header>
        <p className={styles.description}>{description}</p>
        
        <div className={styles.cardFooter}>
          <div className={styles.tags} aria-label="Tecnologías empleadas">
            {tags.map((tag) => (
              <span key={tag} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          
          {link && (
            isIframe ? (
              <button 
                onClick={() => onPreview(link, title)} 
                className={styles.previewBtn}
                aria-label={`Ver previsualización en pantalla completa de ${title}`}
              >
                Ver Pantalla Completa
              </button>
            ) : (
              <a 
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.previewBtn}
                aria-label={`Visitar demo de ${title}`}
              >
                Ver Demo
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
}
