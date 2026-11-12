import { forwardRef, useEffect, useRef, useState } from 'react';
import styles from './Lightbox.module.css';

const Lightbox = forwardRef(function Lightbox({ images, title, initialIndex = 0, onClose }, ref) {
  const [index, setIndex] = useState(initialIndex);
  const touchStartX = useRef(null);
  const total = images.length;

  const goTo = (i) => setIndex(((i % total) + total) % total);
  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [index, total]);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 40) prev();
    else if (deltaX < -40) next();
    touchStartX.current = null;
  };

  const showNav = total > 1;

  return (
    <div
      ref={ref}
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`Capturas de ${title}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button className={styles.closeBtn} onClick={onClose} aria-label="Cerrar galería">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </svg>
      </button>

      <img
        key={index}
        src={images[index]}
        alt={`${title} - captura ${index + 1} de ${total}`}
        className={styles.image}
        onClick={(e) => e.stopPropagation()}
        draggable="false"
      />

      {showNav && (
        <div className={styles.controls} onClick={(e) => e.stopPropagation()}>
          <button className={styles.navBtn} onClick={prev} aria-label="Captura anterior">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          <span className={styles.counter} aria-live="polite" aria-atomic="true">
            {index + 1} / {total}
          </span>
          <button className={styles.navBtn} onClick={next} aria-label="Captura siguiente">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
});

export default Lightbox;
