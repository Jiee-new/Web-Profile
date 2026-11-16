export default function Footer() {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p>
          © 2026 • Dibuat oleh{' '}
          <span className="font-semibold text-slate-700 dark:text-slate-300">Dhamar (Jieehar)</span>{' '}
          dengan React &amp; Tailwind CSS
        </p>
        <div className="flex items-center gap-5">
          <a
            href="https://github.com/Jiee-new"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            GitHub
          </a>
          <a
            href="https://simakademik.lunaradev.my.id/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            SIA SMKN 2 Magelang
          </a>
        </div>
      </div>
    </footer>
  );
}
