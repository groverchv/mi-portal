import { RESUME_DATA } from '../../constants/resumeData';
import styles from './HeroSection.module.css';

export default function HeroSection() {
  const { name, role, bio, socials, avatarUrl } = RESUME_DATA.personal;

  const getSocialIcon = (name) => {
    switch (name.toLowerCase()) {
      case 'github':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        );
      case 'telegram':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.56 8.18l-1.92 9.07c-.14.63-.52.79-1.05.49l-2.93-2.16-1.41 1.36c-.16.16-.29.29-.6.29l.21-3.01 5.48-4.95c.24-.22-.05-.34-.37-.13l-6.78 4.27-2.92-.91c-.64-.2-.65-.64.13-.94l11.39-4.39c.53-.19 1 .13.8 1.1z"/>
          </svg>
        );
      case 'email':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </svg>
        );
      case 'teléfono':
      case 'telefono':
      case 'phone':
        return (
          <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={styles.hero} aria-label="Introducción">
      <div className={styles.heroContent}>
        <div className={styles.textContent}>
          <div className={styles.statusPill}>
            <span className={styles.statusDot} />
            <span>Disponible para nuevos desafíos profesionales</span>
          </div>
          <h1 className={styles.name}>{name}</h1>
          <p className={styles.role}>{role}</p>
          <p className={styles.bio}>{bio}</p>

          <div className={styles.links}>
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                {getSocialIcon(social.name)}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
        {avatarUrl && (
          <div className={styles.avatarContainer}>
            <img src={avatarUrl} alt={`Foto de perfil de ${name}`} className={styles.avatar} />
          </div>
        )}
      </div>
    </section>
  );
}
