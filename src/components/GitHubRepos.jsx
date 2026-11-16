import { repos } from '../data/portfolio';
import Reveal from './Reveal';
import { GitHubIcon } from './Icons';

export default function GitHubRepos() {
  return (
    <section id="github" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">
            Open Source
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Riwayat Repositori GitHub
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-4">
            Semua repo publik dari akun{' '}
            <span className="font-semibold text-slate-700 dark:text-slate-300">@Jiee-new</span>.
          </p>
        </Reveal>

        <div className="grid gap-4">
          {repos.map((repo) => (
            <Reveal
              as="a"
              key={repo.name}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col sm:flex-row sm:items-center gap-4 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-brand-300 dark:hover:border-brand-600 hover:shadow-lg transition-all"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <h4 className="font-bold text-slate-900 dark:text-white">{repo.name}</h4>
                  {repo.badges.map((badge) => (
                    <span
                      key={badge.label}
                      className={`px-2 py-0.5 rounded-full text-[11px] font-semibold ${badge.className}`}
                    >
                      {badge.label}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                  {repo.description}
                </p>
              </div>
              <div className="flex items-center gap-5 text-xs text-slate-500 dark:text-slate-400 shrink-0">
                <span className="inline-flex items-center gap-1.5">
                  <span className={`w-2.5 h-2.5 rounded-full ${repo.languageClass}`} />
                  {repo.language}
                </span>
                <span>{repo.updated}</span>
                <span className="text-brand-600 dark:text-brand-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                  Buka ↗
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="text-center mt-10">
          <a
            href="https://github.com/Jiee-new"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-300 hover:border-brand-300 dark:hover:border-brand-600 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            <GitHubIcon className="w-4 h-4" />
            Lihat semua di GitHub
          </a>
        </Reveal>
      </div>
    </section>
  );
}
