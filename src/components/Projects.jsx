import { featuredProject, projects } from '../data/portfolio';
import Reveal from './Reveal';
import { ArrowUpRightIcon, CheckIcon } from './Icons';

function TechTag({ children }) {
  return (
    <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-xs font-medium text-slate-600 dark:text-slate-300">
      {children}
    </span>
  );
}

function FeaturedProject() {
  return (
    <Reveal
      as="article"
      className="lg:col-span-2 group bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:shadow-brand-500/10 transition-all duration-300"
    >
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[220px] md:min-h-full bg-gradient-to-br from-brand-600 via-brand-500 to-cyan-400 p-8 flex flex-col justify-between overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20% 20%, #fff 1px, transparent 1px)',
              backgroundSize: '24px 24px',
            }}
          />
          <div className="relative flex items-center justify-between">
            <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-white text-xs font-semibold tracking-wide uppercase">
              Featured
            </span>
            <span className="text-4xl" aria-hidden="true">
              🎓
            </span>
          </div>
          <div className="relative">
            <p className="text-white/70 text-sm font-medium mb-1">{featuredProject.subtitle}</p>
            <p className="text-white text-2xl md:text-3xl font-bold leading-tight">
              SIA SMKN 2
              <br />
              Magelang
            </p>
          </div>
        </div>

        <div className="p-8 flex flex-col">
          <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
            {featuredProject.title}
          </h4>
          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-5">
            {featuredProject.description}
          </p>

          <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2 mb-6">
            {featuredProject.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-brand-500" />
                {feature}
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-2 mb-6">
            {featuredProject.tech.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-3">
            <a
              href={featuredProject.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-600 text-white text-sm font-semibold hover:bg-brand-700 transition-colors"
            >
              Kunjungi Situs
              <ArrowUpRightIcon />
            </a>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project }) {
  const isRow = project.layout === 'row';

  if (isRow) {
    return (
      <Reveal
        as="article"
        className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 lg:col-span-2"
      >
        <div className="p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
          <div
            className={`w-16 h-16 shrink-0 rounded-2xl ${project.iconClass} text-3xl flex items-center justify-center`}
            aria-hidden="true"
          >
            {project.icon}
          </div>
          <div className="flex-1">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
              {project.title}
            </h4>
            <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {project.tech.map((tech) => (
              <TechTag key={tech}>{tech}</TechTag>
            ))}
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-brand-600 dark:text-brand-400 text-sm font-semibold hover:underline"
              >
                Repo ↗
              </a>
            )}
          </div>
        </div>
      </Reveal>
    );
  }

  return (
    <Reveal
      as="article"
      className="group flex flex-col bg-slate-50 dark:bg-slate-900 rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      <div className={`h-44 ${project.bannerClass} flex items-center justify-between px-8`}>
        <span className="text-5xl" aria-hidden="true">
          {project.icon}
        </span>
        <div className="text-right">
          <p className={`${project.eyebrowClass} text-xs uppercase tracking-widest`}>
            {project.eyebrow}
          </p>
          <p className={`${project.metaClass} font-bold`}>{project.meta}</p>
        </div>
      </div>
      <div className="p-7 flex flex-col flex-1">
        <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </div>
        <div className="mt-auto flex flex-wrap gap-3 text-sm font-semibold">
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 dark:text-brand-400 hover:underline inline-flex items-center gap-1"
            >
              Live Demo ↗
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:underline inline-flex items-center gap-1"
            >
              Repo ↗
            </a>
          )}
        </div>
      </div>
    </Reveal>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-white dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">
            Portofolio
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Proyek Pilihan
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-xl mx-auto">
            Kumpulan proyek yang sudah dibangun, dirilis, dan bisa dicoba langsung.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <FeaturedProject />
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
