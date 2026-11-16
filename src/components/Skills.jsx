import { skills } from '../data/portfolio';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Reveal className="text-center mb-14">
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">
            Keahlian
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Skill &amp; Teknologi
          </h3>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Reveal
              as="article"
              key={skill.title}
              delay={(index % 3) * 60}
              className="group bg-white dark:bg-slate-900 p-7 rounded-2xl border border-slate-100 dark:border-slate-800 hover:border-brand-200 dark:hover:border-brand-600 hover:shadow-xl hover:shadow-brand-500/5 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className={`w-14 h-14 ${skill.iconClass} text-2xl rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
                aria-hidden="true"
              >
                {skill.icon}
              </div>
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {skill.title}
              </h4>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
                {skill.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
