import { useCallback, useEffect, useMemo, useState } from 'react';
import { flushSync } from 'react-dom';
import { ThemeContext } from './ThemeContext';

const STORAGE_KEY = 'theme';
const META_COLORS = { light: '#fbf6fb', dark: '#14091b' };

// index.html sets data-theme before first paint; read it back as the initial state.
const getInitialTheme = () =>
  document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';

const applyToDocument = (theme) => {
  document.documentElement.setAttribute('data-theme', theme);
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', META_COLORS[theme]);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => applyToDocument(theme), [theme]);

  const toggleTheme = useCallback(
    (event) => {
      const next = theme === 'dark' ? 'light' : 'dark';
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        /* storage unavailable (private mode) — theme still works for this session */
      }

      const root = document.documentElement;
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Preferred: circular reveal expanding from the toggle button (View Transitions API).
      if (document.startViewTransition && !reduceMotion) {
        const rect = event?.currentTarget?.getBoundingClientRect?.();
        const x = rect ? rect.left + rect.width / 2 : window.innerWidth - 60;
        const y = rect ? rect.top + rect.height / 2 : 32;
        const radius = Math.hypot(Math.max(x, window.innerWidth - x), Math.max(y, window.innerHeight - y));

        const transition = document.startViewTransition(() => {
          flushSync(() => setTheme(next));
          applyToDocument(next);
        });

        transition.ready
          .then(() =>
            root.animate(
              { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${radius}px at ${x}px ${y}px)`] },
              { duration: 550, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', pseudoElement: '::view-transition-new(root)' }
            )
          )
          .catch(() => {});
        return;
      }

      // Fallback: short cross-fade of colours.
      root.classList.add('theme-transition');
      window.setTimeout(() => root.classList.remove('theme-transition'), 400);
      setTheme(next);
    },
    [theme]
  );

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
