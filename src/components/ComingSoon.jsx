import { upcomingProjects } from '../data/portfolio';
import Reveal from './Reveal';
import { ArrowUpRightIcon, LockIcon } from './Icons';

export default function ComingSoon() {
  const isSingle = upcomingProjects.length === 1;

  return (
    <section
      id="coming-soon"
      className="py-20 px-6 bg-white dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">
            Sedang Dikembangkan
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Coming Soon
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            Proyek yang sedang saya bangun. Pantau terus — begitu rilis, link demo &amp; repo-nya
            akan aktif di sini.
          </p>
        </Reveal>

        <div
          className={
            isSingle
              ? 'grid grid-cols-1 gap-8 max-w-2xl mx-auto'
              : 'grid grid-cols-1 md:grid-cols-2 gap-8'
          }
        >
          {upcomingProjects.map((project) => (
            <Reveal
              as="article"
              key={project.id}
              className="relative overflow-hidden rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 p-7 md:p-8 flex flex-col hover:border-brand-300 dark:hover:border-brand-600 transition-colors"
            >
              <div className="absolute -top-10 -right-10 w-36 h-36 bg-brand-100 dark:bg-brand-600/10 rounded-full blur-2xl" />

              <div className="relative flex items-start justify-between gap-4 mb-5">
                <div
                  className="w-14 h-14 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 text-2xl flex items-center justify-center shadow-sm"
                  aria-hidden="true"
                >
                  {project.icon}
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 text-xs font-semibold border border-amber-100 dark:border-amber-500/20">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-amber-500" />
                  </span>
                  {project.status}
                </span>
              </div>

              <h4 className="relative text-xl font-bold text-slate-900 dark:text-white mb-1">
                {project.title}
              </h4>
              <p className="relative text-xs font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400 mb-4">
                {project.subtitle}
              </p>
              <p className="relative text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="relative flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="relative mt-auto flex flex-wrap items-center justify-between gap-3 pt-5 border-t border-slate-200 dark:border-slate-800">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
                  >
                    Coba Sekarang
                    <ArrowUpRightIcon />
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-sm font-semibold cursor-default">
                    🚧 Segera hadir
                  </span>
                )}

                {project.repo &&
                  (project.repoPrivate ? (
                    <span className="text-xs font-medium text-slate-400 dark:text-slate-500 inline-flex items-center gap-1">
                      <LockIcon />
                      Repo masih privat
                    </span>
                  ) : (
                    <a
                      href={project.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-600 dark:text-brand-400 text-sm font-semibold hover:underline inline-flex items-center gap-1"
                    >
                      Repo ↗
                    </a>
                  ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
