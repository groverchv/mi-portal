import { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants/resumeData';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    // Determine if it is night time in Bolivia (UTC-4)
    const utcHour = new Date().getUTCHours();
    const boliviaHour = (utcHour - 4 + 24) % 24;
    const isNightInBolivia = boliviaHour >= 19 || boliviaHour < 6; // 7 PM to 6 AM

    if (isNightInBolivia) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      // Fallback to standard system preferences if it is day in Bolivia
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (prefersDark) {
        setIsDark(true);
        document.documentElement.classList.add('dark');
      } else {
        setIsDark(false);
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
        <div className={`container ${styles.nav}`}>
          <a href="#" className={styles.logo} aria-label="Volver al inicio">
            {RESUME_DATA.personal.name}
          </a>
          <nav>
            <ul className={styles.navList}>
              <li>
                <a href="#experiencia" className={styles.navLink}>
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#habilidades" className={styles.navLink}>
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#proyectos" className={styles.navLink}>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className={styles.navLink}>
                  Contacto
                </a>
              </li>
              <li>
                <button 
                  onClick={toggleTheme} 
                  className={styles.themeBtn}
                  aria-label="Alternar tema visual"
                >
                  {isDark ? 'Tema Claro' : 'Tema Oscuro'}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className={`container ${styles.main}`}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <p>© {new Date().getFullYear()} {RESUME_DATA.personal.name}. Diseñado con sobriedad y profesionalismo.</p>
        </div>
      </footer>

      {showBackToTop && (
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
          className={styles.backToTop}
          aria-label="Volver al inicio de la página"
        >
          ↑
        </button>
      )}
    </div>
  );
}
