import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { RESUME_DATA } from '../../constants/resumeData';
import Section from '../../components/Section';
import Reveal from '../../components/Reveal';
import ProyectoCard from './components/ProyectoCard';
import Lightbox from './components/Lightbox';
import styles from './ProyectosSection.module.css';

export default function ProyectosSection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activePreview, setActivePreview] = useState(null);
  const [iframeLoading, setIframeLoading] = useState(true);
  const modalRef = useRef(null);
  const lastFocusedRef = useRef(null);

  const handlePreview = (previewData) => {
    lastFocusedRef.current = document.activeElement;
    if (typeof previewData === 'string') {
      setActivePreview({ link: previewData, title: '' });
      setIframeLoading(true);
    } else {
      setActivePreview(previewData);
      if (previewData.type === 'iframe') setIframeLoading(true);
    }
  };

  const closePreview = () => {
    setActivePreview(null);
  };

  // Keyboard navigation, focus trap & body scroll lock for iframe demo modal
  useEffect(() => {
    if (!activePreview) return;

    const modal = modalRef.current;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // Move focus into the dialog on open
    modal?.querySelector('button')?.focus();

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        closePreview();
        return;
      }
      if (e.key !== 'Tab' || !modal) return;

      const focusable = modal.querySelectorAll(
        'a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        last.focus();
        e.preventDefault();
      } else if (!e.shiftKey && document.activeElement === last) {
        first.focus();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      // Restore focus to the element that opened the dialog
      if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === 'function') {
        lastFocusedRef.current.focus();
      }
    };
  }, [activePreview]);

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
    <Section id="proyectos" title="Proyectos Destacados" index="03">
      <div className={styles.filterContainer}>
        {filterOptions.map((opt) => (
          <button
            key={opt.value}
            className={`${styles.filterBtn} ${activeFilter === opt.value ? styles.active : ''}`}
            onClick={() => setActiveFilter(opt.value)}
            aria-pressed={activeFilter === opt.value}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <p className={styles.srOnly} role="status" aria-live="polite">
        Mostrando {filteredProjects.length} {filteredProjects.length === 1 ? 'proyecto' : 'proyectos'}
      </p>

      <div className={styles.grid}>
        {filteredProjects.map((proj, idx) => (
          <Reveal
            key={proj.title}
            className={styles.gridItem}
            delay={Math.min(idx * 70, 350)}
          >
            <ProyectoCard
              title={proj.title}
              status={proj.status}
              description={proj.description}
              tags={proj.tags}
              link={proj.link}
              previewType={proj.previewType}
              images={proj.images}
              onPreview={handlePreview}
            />
          </Reveal>
        ))}
      </div>

      {activePreview && activePreview.type === 'gallery' && activePreview.images && createPortal(
        <Lightbox
          ref={modalRef}
          images={activePreview.images}
          title={activePreview.title}
          initialIndex={activePreview.startIndex || 0}
          onClose={closePreview}
        />,
        document.body
      )}

      {activePreview && activePreview.link && createPortal(
        <div className={styles.modalOverlay} onClick={closePreview}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="preview-modal-title"
            ref={modalRef}
          >
            <div className={styles.modalHeader}>
              <h3 id="preview-modal-title" className={styles.modalTitle}>{activePreview.title}</h3>
              <div className={styles.modalActions}>
                <a
                  href={activePreview.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.modalLink}
                >
                  Abrir enlace
                </a>
                <button className={styles.closeBtn} onClick={closePreview} aria-label="Cerrar previsualización">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>
            <div className={styles.iframeContainer}>
              {iframeLoading && (
                <div className={styles.spinnerWrap} aria-hidden="true">
                  <div className={styles.spinner} />
                </div>
              )}
              <iframe
                src={activePreview.link}
                title={`Previsualización de ${activePreview.title}`}
                className={styles.iframe}
                loading="lazy"
                onLoad={() => setIframeLoading(false)}
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
              />
            </div>
          </div>
        </div>,
        document.body
      )}
    </Section>
  );
}
