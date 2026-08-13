import styles from './Section.module.css';

export default function Section({ id, title, children }) {
  return (
    <section id={id} className={styles.section}>
      {title && <h2 className={styles.title}>{title}</h2>}
      <div>{children}</div>
    </section>
  );
}
