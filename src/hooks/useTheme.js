import { useCallback, useEffect, useState } from 'react';

const STORAGE_KEY = 'theme';

function getInitialTheme() {
  if (typeof window === 'undefined') return 'light';

  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
  } catch (error) {
    /* localStorage bisa diblokir; pakai preferensi sistem. */
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const isDark = theme === 'dark';
    document.documentElement.classList.toggle('dark', isDark);

    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch (error) {
      /* abaikan */
    }
  }, [theme]);

  // Ikuti perubahan tema sistem hanya kalau user belum memilih secara manual.
  useEffect(() => {
    const media = window.matchMedia('(prefers-color-scheme: dark)');

    const handleChange = (event) => {
      try {
        if (!window.localStorage.getItem(STORAGE_KEY)) {
          setTheme(event.matches ? 'dark' : 'light');
        }
      } catch (error) {
        /* abaikan */
      }
    };

    media.addEventListener('change', handleChange);
    return () => media.removeEventListener('change', handleChange);
  }, []);

  const toggle = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  return { theme, toggle };
}
