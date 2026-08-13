import { RESUME_DATA } from '../../constants/resumeData';
import Section from '../../components/Section';
import ExperienciaCard from './components/ExperienciaCard';

export default function ExperienciaSection() {
  return (
    <Section id="experiencia" title="Experiencia Profesional">
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
    </Section>
  );
}
