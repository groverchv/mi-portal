import { useState } from 'react';
import { RESUME_DATA } from '../../constants/resumeData';
import Section from '../../components/Section';
import ProyectoCard from './components/ProyectoCard';
import styles from './ProyectosSection.module.css';

export default function ProyectosSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activePreview, setActivePreview] = useState(null);

  const handlePreview = (link, title) => {
    setActivePreview({ link, title });
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  const filteredProjects = RESUME_DATA.projects.filter((proj) => {
    if (activeFilter === 'all') return true;
    return proj.category === activeFilter;
  });

  const filterOptions = [
    { value: 'all', label: 'Todos' },
    { value: 'web', label: 'Full Stack / ERP' },
    { value: 'blockchain', label: 'Blockchain & Web3' },
    { value: 'ia', label: 'Inteligencia Artificial' }
  ];

  return (
    <Section id="proyectos" title="Proyectos Destacados">
      <div className={styles.filterContainer}>
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            className={`${styles.filterBtn} ${activeFilter === opt.value ? styles.active : ''}`}
            onClick={() => setActiveFilter(opt.value)}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {filteredProjects.map((proj) => (
          <div key={proj.title} className="fade-in">
            <ProyectoCard
              title={proj.title}
              description={proj.description}
              tags={proj.tags}
              link={proj.link}
              previewType={proj.previewType}
              onPreview={handlePreview}
            />
          </div>
        ))}
      </div>

      {activePreview && (
        <div className={styles.modalOverlay} onClick={closePreview}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3 className={styles.modalTitle}>{activePreview.title}</h3>
              <div className={styles.modalActions}>
                <a
                  href={activePreview.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalLink}
                >
                  Abrir en pestaña nueva
                </a>
                <button className={styles.closeBtn} onClick={closePreview} aria-label="Cerrar previsualización">
                  X
                </button>
              </div>
            </div>
            <div className={styles.iframeContainer}>
              <iframe
                src={activePreview.link}
                title={`Previsualización de ${activePreview.title}`}
                className={styles.iframe}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>
        </div>
      )}
    </Section>
  );
}
