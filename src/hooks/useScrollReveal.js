import { useEffect, useRef, useState } from 'react';

/**
 * High-performance hook that triggers visibility states once elements enter viewport.
 * Uses native IntersectionObserver with zero layout thrashing or CPU overhead.
 */
export default function useScrollReveal(options = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, options);

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return [ref, isVisible];
}
