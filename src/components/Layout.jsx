import { useState, useEffect, useRef } from 'react';
import { RESUME_DATA } from '../constants/resumeData';
import styles from './Layout.module.css';

function getInitialTheme() {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored === 'dark';

  // Determine if it is night time in Bolivia (UTC-4)
  const utcHour = new Date().getUTCHours();
  const boliviaHour = (utcHour - 4 + 24) % 24;
  if (boliviaHour >= 19 || boliviaHour < 6) return true; // 7 PM to 6 AM

  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function ThemeIcon({ isDark }) {
  return isDark ? (
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
  );
}

export default function Layout({ children }) {
  const [isDark, setIsDark] = useState(getInitialTheme);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const headerRef = useRef(null);

  // Scrollspy: marks the nav link of the section currently in the reading band
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const ids = ['experiencia', 'habilidades', 'proyectos', 'contacto'];
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -60% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
        if (totalScroll > 0) {
          setScrollProgress((window.scrollY / totalScroll) * 100);
        }
        setShowBackToTop(window.scrollY > 400);
        ticking = false;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape, outside tap, or resize to desktop; lock body scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    const onPointerDown = (e) => {
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setMobileMenuOpen(false);
      }
    };
    const desktopMedia = window.matchMedia('(min-width: 769px)');
    const onMediaChange = (e) => {
      if (e.matches) setMobileMenuOpen(false);
    };
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('touchstart', onPointerDown, { passive: true });
    desktopMedia.addEventListener('change', onMediaChange);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('touchstart', onPointerDown);
      desktopMedia.removeEventListener('change', onMediaChange);
    };
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.add('theme-anim');
    window.setTimeout(() => root.classList.remove('theme-anim'), 400);
    setIsDark((prev) => {
      const next = !prev;
      localStorage.setItem('theme', next ? 'dark' : 'light');
      return next;
    });
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const themeLabel = isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro';

  return (
    <div className={styles.wrapper}>
      <a href="#main" className="skip-link">Saltar al contenido</a>
      <header className={styles.header} ref={headerRef}>
        <div className={styles.progressBar} style={{ width: `${scrollProgress}%` }} />
        <div className={`container ${styles.nav}`}>
          <a href="#main" className={styles.logo} aria-label="Volver al inicio" onClick={closeMobileMenu}>
            {RESUME_DATA.personal.name}
          </a>

          <div className={styles.navActionsMobile}>
            <button
              onClick={toggleTheme}
              className={styles.themeBtnMobile}
              aria-label={themeLabel}
              title={isDark ? 'Modo Claro' : 'Modo Oscuro'}
            >
              <ThemeIcon isDark={isDark} />
            </button>
            <button
              className={styles.hamburgerBtn}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
              aria-controls="nav-menu"
            >
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.openTop : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.openMid : ''}`} />
              <span className={`${styles.hamburgerLine} ${mobileMenuOpen ? styles.openBot : ''}`} />
            </button>
          </div>

          <nav id="nav-menu" className={`${styles.navMenu} ${mobileMenuOpen ? styles.navMenuOpen : ''}`}>
            <ul className={styles.navList}>
              {[
                ['experiencia', 'Experiencia'],
                ['habilidades', 'Habilidades'],
                ['proyectos', 'Proyectos'],
                ['contacto', 'Contacto'],
              ].map(([id, label]) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`${styles.navLink} ${activeSection === id ? styles.navLinkActive : ''}`}
                    aria-current={activeSection === id ? 'true' : undefined}
                    onClick={closeMobileMenu}
                  >
                    {label}
                  </a>
                </li>
              ))}
              <li className={styles.desktopThemeItem}>
                <button
                  onClick={toggleTheme}
                  className={styles.themeBtn}
                  aria-label={themeLabel}
                >
                  <ThemeIcon isDark={isDark} />
                  <span>{isDark ? 'Claro' : 'Oscuro'}</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" className={`container ${styles.main}`}>
        {children}
      </main>

      <footer className={styles.footer}>
        <div className="container">
          <nav className={styles.footerNav} aria-label="Redes sociales">
            {RESUME_DATA.personal.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.footerLink}
                aria-label={social.label}
              >
                {social.name}
              </a>
            ))}
          </nav>
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
