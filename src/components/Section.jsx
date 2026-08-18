import useScrollReveal from '../hooks/useScrollReveal';
import styles from './Section.module.css';

export default function Section({ id, title, children }) {
  const [sectionRef, isVisible] = useScrollReveal();

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`${styles.section} ${isVisible ? styles.sectionVisible : styles.sectionHidden}`}
    >
      {title && <h2 className={styles.title}>{title}</h2>}
      <div>{children}</div>
    </section>
  );
}
