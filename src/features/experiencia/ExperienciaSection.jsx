import { useEffect, useRef } from 'react';
import { RESUME_DATA } from '../../constants/resumeData';
import Section from '../../components/Section';
import Reveal from '../../components/Reveal';
import ExperienciaCard from './components/ExperienciaCard';
import styles from './ExperienciaSection.module.css';

export default function ExperienciaSection() {
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--progress', '1');
      return;
    }

    let ticking = false;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.65 - rect.top) / rect.height));
      el.style.setProperty('--progress', progress.toFixed(3));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <Section id="experiencia" title="Experiencia Profesional" index="01">
      <div ref={timelineRef} className={styles.timeline}>
        <div>
          {RESUME_DATA.experience.map((exp, idx) => (
            <Reveal key={idx} delay={idx * 70}>
              <ExperienciaCard
                role={exp.role}
                company={exp.company}
                period={exp.period}
                description={exp.description}
                tags={exp.tags}
              />
            </Reveal>
          ))}
        </div>

        <h3 className={styles.subTitle}>Educación</h3>
        <div>
          {RESUME_DATA.education.map((edu, idx) => (
            <Reveal key={idx} delay={idx * 70}>
              <ExperienciaCard
                role={edu.role}
                company={edu.company}
                period={edu.period}
              />
            </Reveal>
          ))}
        </div>

        <h3 className={styles.subTitle}>Formación Adicional y Liderazgo</h3>
        <div>
          {RESUME_DATA.certifications.map((cert, idx) => (
            <Reveal key={idx} delay={idx * 70}>
              <ExperienciaCard
                role={cert.role}
                company={cert.company}
                period={cert.period}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
