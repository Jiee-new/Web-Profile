import { stats } from '../data/portfolio';
import { GitHubIcon } from './Icons';

export default function Hero() {
  return (
    <section id="top" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 px-6 overflow-hidden">
      <div className="absolute inset-0 hero-grid -z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-200/40 dark:bg-brand-600/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-5xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/70 dark:bg-slate-900/70 text-brand-600 dark:text-brand-400 text-sm font-medium mb-6 border border-brand-100 dark:border-brand-600/30 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            Terbuka untuk kolaborasi &amp; proyek baru
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white leading-[1.1] mb-6">
            Halo, saya{' '}
            <span className="relative inline-block whitespace-nowrap">
              <span className="absolute inset-x-0 bottom-2 h-3/5 bg-yellow-300/80 dark:bg-yellow-400/30 -z-10 transform -skew-x-12 rounded-sm" />
              <span className="relative">Dhamar</span>
            </span>
          </h1>

          <p className="text-sm text-slate-500 dark:text-slate-400 mb-4 font-medium">
            juga dikenal sebagai <span className="text-brand-600 dark:text-brand-400">Jieehar</span> /{' '}
            <a
              href="https://github.com/Jiee-new"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @Jiee-new
            </a>
          </p>

          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-lg mx-auto md:mx-0">
            Web &amp; Android developer pemula yang senang membangun produk nyata — dari sistem
            informasi akademik berbasis{' '}
            <strong className="text-slate-900 dark:text-slate-200">Next.js</strong> sampai launcher
            Android ringan dengan <strong className="text-slate-900 dark:text-slate-200">Java</strong>.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold hover:bg-brand-600 dark:hover:bg-brand-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 text-center"
            >
              Lihat Portofolio →
            </a>
            <a
              href="https://github.com/Jiee-new"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-semibold border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-500 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <GitHubIcon />
              GitHub Saya
            </a>
          </div>

          <dl className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-lg mx-auto md:mx-0 border-t border-slate-200 dark:border-slate-800 pt-6">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col-reverse">
                <dt className="text-xs text-slate-500 dark:text-slate-400">{stat.label}</dt>
                <dd className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative shrink-0">
          <div className="absolute -inset-4 bg-gradient-to-tr from-brand-500/20 to-yellow-300/20 rounded-full blur-2xl -z-10" />
          <div className="w-44 h-44 md:w-72 md:h-72 rounded-full p-1.5 bg-gradient-to-tr from-brand-500 via-brand-400 to-yellow-300 shadow-2xl">
            <img
              src="/JieeHar-Profile.png"
              alt="Foto Dhamar (Jieehar)"
              width="288"
              height="288"
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover rounded-full border-4 border-white dark:border-slate-950"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 md:bottom-4 md:right-0 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl px-3 py-2 shadow-lg flex items-center gap-2">
            <span className="text-lg">💻</span>
            <span className="text-xs font-semibold">Web &amp; Android</span>
          </div>
        </div>
      </div>
    </section>
  );
}
