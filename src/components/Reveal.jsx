import useScrollReveal from '../hooks/useScrollReveal';

export default function Reveal({ delay = 0, className = '', children }) {
  const [ref, isVisible] = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'reveal-visible' : 'reveal-hidden'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
