// Trigger hot reload
import Layout from './components/Layout';
import HeroSection from './features/hero/HeroSection';
import ExperienciaSection from './features/experiencia/ExperienciaSection';
import SkillsSection from './features/skills/SkillsSection';
import ProyectosSection from './features/proyectos/ProyectosSection';
import ContactoSection from './features/contacto/ContactoSection';

export default function App() {
  return (
    <Layout>
      <HeroSection />
      <ExperienciaSection />
      <SkillsSection />
      <ProyectosSection />
      <ContactoSection />
    </Layout>
  );
}
