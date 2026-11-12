import { RESUME_DATA } from '../../constants/resumeData';
import Section from '../../components/Section';
import ExperienciaCard from './components/ExperienciaCard';
import styles from './ExperienciaSection.module.css';

export default function ExperienciaSection() {
  return (
    <Section id="experiencia" title="Experiencia Profesional" index="01">
      <div>
        {RESUME_DATA.experience.map((exp, idx) => (
          <ExperienciaCard
            key={idx}
            role={exp.role}
            company={exp.company}
            period={exp.period}
            description={exp.description}
            tags={exp.tags}
          />
        ))}
      </div>

      <h3 className={styles.subTitle}>Educación</h3>
      <div>
        {RESUME_DATA.education.map((edu, idx) => (
          <ExperienciaCard
            key={idx}
            role={edu.role}
            company={edu.company}
            period={edu.period}
          />
        ))}
      </div>

      <h3 className={styles.subTitle}>Formación Adicional y Liderazgo</h3>
      <div>
        {RESUME_DATA.certifications.map((cert, idx) => (
          <ExperienciaCard
            key={idx}
            role={cert.role}
            company={cert.company}
            period={cert.period}
          />
        ))}
      </div>
    </Section>
  );
}
