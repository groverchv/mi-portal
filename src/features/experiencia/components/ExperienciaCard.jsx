import styles from './ExperienciaCard.module.css';

export default function ExperienciaCard({ role, company, period, description, tags }) {
  return (
    <article className={styles.card}>
      <header className={styles.header}>
        <h3 className={styles.roleTitle}>
          {role} <span className={styles.company}>en {company}</span>
        </h3>
        <time className={styles.period}>{period}</time>
      </header>
      {description && <p className={styles.description}>{description}</p>}
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
