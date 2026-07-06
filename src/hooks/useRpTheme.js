import { useState, useEffect } from 'react';

/**
 * Theme state for the GitHub-skinned routes (home + pricing + plataformas).
 *
 * System-first: with no explicit user choice the theme mirrors the OS
 * preference — live, following OS changes while browsing. Only pressing
 * the toggle persists a choice to localStorage; from then on that choice
 * wins over the OS setting.
 *
 * Sets `data-rp-theme` on <html> while the page is mounted; the attribute
 * is removed on unmount so non-skinned routes stay unthemed.
 */
export function useRpTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    const stored = localStorage.getItem('rp-theme');
    if (stored === 'light' || stored === 'dark') return stored;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-rp-theme', theme);
    return () => root.removeAttribute('data-rp-theme');
  }, [theme]);

  // Follow live OS theme changes until the user makes an explicit choice.
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (event) => {
      const stored = localStorage.getItem('rp-theme');
      if (stored === 'light' || stored === 'dark') return; // explicit choice wins
      setTheme(event.matches ? 'dark' : 'light');
    };
    mq.addEventListener('change', handleChange);
    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    setTheme((t) => {
      const next = t === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem('rp-theme', next);
      } catch (e) {
        /* localStorage unavailable — ignore */
      }
      return next;
    });
  };

  return { theme, toggleTheme };
}
