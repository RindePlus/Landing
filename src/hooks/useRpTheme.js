import { useState, useEffect } from 'react';

/**
 * Theme state for the GitHub-skinned routes (home + pricing).
 * Sets `data-rp-theme` on <html> while the page is mounted and persists
 * the choice in localStorage; the attribute is removed on unmount so
 * non-skinned routes stay unthemed.
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
    try {
      localStorage.setItem('rp-theme', theme);
    } catch (e) {
      /* localStorage unavailable — ignore */
    }
    return () => root.removeAttribute('data-rp-theme');
  }, [theme]);

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));

  return { theme, toggleTheme };
}
