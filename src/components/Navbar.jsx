import { useEffect, useState } from 'react';
import { navItems } from '../data/portfolio';
import { useActiveSection } from '../hooks/useActiveSection';
import { useTheme } from '../hooks/useTheme';
import { CloseIcon, MenuIcon, MoonIcon, SunIcon } from './Icons';

function ThemeButton({ theme, onToggle, className = '' }) {
  const isDark = theme === 'dark';
  const label = isDark ? 'Aktifkan mode terang' : 'Aktifkan mode gelap';

  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label={label}
      aria-pressed={isDark}
      title={label}
      className={`w-10 h-10 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-200 dark:hover:border-brand-600 flex items-center justify-center transition-colors ${className}`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const activeId = useActiveSection(navItems.map((item) => item.id));

  const linkClass = (id) =>
    `transition-colors ${
      activeId === id
        ? 'text-brand-600 dark:text-brand-400'
        : 'hover:text-brand-600 dark:hover:text-brand-400'
    }`;

  useEffect(() => {
    if (!menuOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('resize', handleResize);
    };
  }, [menuOpen]);

  return (
    <nav
      aria-label="Navigasi utama"
      className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200/70 dark:border-slate-800/70"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative">
        <a
          href="#top"
          className="flex items-center gap-2 font-bold text-lg tracking-tight text-slate-900 dark:text-white"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-brand-500 to-brand-700 text-white flex items-center justify-center text-sm shadow-md shadow-brand-500/30">
            D
          </span>
          <span>
            Dhamar<span className="text-brand-500">.</span>
          </span>
        </a>

        {/* menu desktop */}
        <ul className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={linkClass(item.id)}
                aria-current={activeId === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li>
            <ThemeButton theme={theme} onToggle={toggle} />
          </li>
        </ul>

        {/* kontrol mobile */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeButton theme={theme} onToggle={toggle} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            title={menuOpen ? 'Tutup menu' : 'Buka menu'}
            className="w-10 h-10 text-slate-600 dark:text-slate-300 hover:text-brand-600 dark:hover:text-brand-400 flex items-center justify-center"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* menu mobile */}
      <div
        id="mobile-menu"
        className={`${menuOpen ? '' : 'hidden'} md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800 absolute w-full left-0 top-full shadow-lg`}
      >
        <ul className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={`block ${linkClass(item.id)}`}
                aria-current={activeId === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
