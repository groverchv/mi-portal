import useScrollReveal from '../hooks/useScrollReveal';
import styles from './Section.module.css';

export default function Section({ id, title, index, children }) {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.sectionVisible : styles.sectionHidden}`}
    >
      {title && (
        <h2 className={styles.title}>
          {index && <span className={styles.index} aria-hidden="true">{index}</span>}
          <span>{title}</span>
        </h2>
      )}
      <div>{children}</div>
    </section>
  );
}
