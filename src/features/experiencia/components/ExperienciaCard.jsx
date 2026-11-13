import { useId, useState } from 'react';
import styles from './ExperienciaCard.module.css';

const COLLAPSE_THRESHOLD = 200;

export default function ExperienciaCard({ role, company, period, description, tags }) {
  const [expanded, setExpanded] = useState(false);
  const descId = useId();
  const isLong = description && description.length > COLLAPSE_THRESHOLD;

  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.roleTitle}>
          {role} <span className={styles.company}>en {company}</span>
        </h3>
        <time className={styles.period}>{period}</time>
      </header>
      {description && (
        <>
          <p
            id={descId}
            className={`${styles.description} ${isLong && !expanded ? styles.clamped : ''}`}
          >
            {description}
          </p>
          {isLong && (
            <button
              type="button"
              className={styles.expandToggle}
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
              aria-controls={descId}
            >
              {expanded ? 'Ver menos' : 'Ver más'}
              <svg
                className={`${styles.chevron} ${expanded ? styles.chevronUp : ''}`}
                viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor"
                strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
          )}
        </>
      )}
      {tags && tags.length > 0 && (
        <div className={styles.tags} aria-label="Tecnologías usadas">
          {tags.map((tag) => (
            <span key={tag} className={styles.tag}>
              {tag}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
