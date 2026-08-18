import { useState, useEffect } from 'react';
import { RESUME_DATA } from '../constants/resumeData';
import styles from './Layout.module.css';

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
        <div className={`container ${styles.nav}`}>
          <a href="#" className={styles.logo} aria-label="Volver al inicio" onClick={closeMobileMenu}>
            {RESUME_DATA.personal.name}
          </a>

          <div className={styles.navActionsMobile}>
            <button 
              onClick={toggleTheme} 
              className={styles.themeBtnMobile}
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
              title={isDark ? 'Modo Claro' : 'Modo Oscuro'}
            >
              {isDark ? (
                <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="4" />
                  <path d="M12 2v2" />
                  <path d="M12 20v2" />
                  <path d="m4.93 4.93 1.41 1.41" />
                  <path d="m17.66 17.66 1.41 1.41" />
                  <path d="M2 12h2" />
                  <path d="M20 12h2" />
                  <path d="m6.34 17.66-1.41 1.41" />
                  <path d="m19.07 4.93-1.41 1.41" />
                </svg>
              ) : (
                <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                </svg>
              )}
            </button>
            <button
              className={styles.hamburgerBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.openTop : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.openMid : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.openBot : ''}`} />
            </button>
          </div>

          <nav className={`${styles.navMenu} ${mobileMenuOpen ? styles.navMenuOpen : ''}`}>
            <ul className={styles.navList}>
              <li>
                <a href="#experiencia" className={styles.navLink} onClick={closeMobileMenu}>
                  Experiencia
                </a>
              </li>
              <li>
                <a href="#habilidades" className={styles.navLink} onClick={closeMobileMenu}>
                  Habilidades
                </a>
              </li>
              <li>
                <a href="#proyectos" className={styles.navLink} onClick={closeMobileMenu}>
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#contacto" className={styles.navLink} onClick={closeMobileMenu}>
                  Contacto
                </a>
              </li>
              <li className={styles.desktopThemeItem}>
                <button 
                  onClick={toggleTheme} 
                  className={styles.themeBtn}
                  aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
                >
                  {isDark ? (
                    <>
                      <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="4" />
                        <path d="M12 2v2" />
                        <path d="M12 20v2" />
                        <path d="m4.93 4.93 1.41 1.41" />
                        <path d="m17.66 17.66 1.41 1.41" />
                        <path d="M2 12h2" />
                        <path d="M20 12h2" />
                        <path d="m6.34 17.66-1.41 1.41" />
                        <path d="m19.07 4.93-1.41 1.41" />
                      </svg>
                      <span>Claro</span>
                    </>
                  ) : (
                    <>
                      <svg className={styles.themeIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
                      </svg>
                      <span>Oscuro</span>
                    </>
                  )}
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
