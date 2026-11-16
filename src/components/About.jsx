import Reveal from './Reveal';

const details = [
  { label: 'Nama', value: 'Dhamar (Jieehar)' },
  { label: 'Fokus', value: 'Web & Android' },
  { label: 'Stack', value: 'Next.js · React · Java' },
  { label: 'Status', value: 'Terbuka kolaborasi', accent: true },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-slate-900/40 border-y border-slate-100 dark:border-slate-800"
    >
      <div className="max-w-4xl mx-auto">
        <Reveal className="text-center mb-12">
          <h2 className="text-sm font-bold tracking-widest text-brand-500 uppercase mb-3">
            Tentang Saya
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            Mengenal Lebih Dekat
          </h3>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          <p className="md:col-span-2 text-slate-600 dark:text-slate-400 leading-relaxed text-lg">
            Halo! Saya <strong className="text-slate-900 dark:text-white">Dhamar</strong> — dikenal
            juga sebagai <strong className="text-slate-900 dark:text-white">Jieehar</strong> dengan
            handle{' '}
            <a
              href="https://github.com/Jiee-new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-600 dark:text-brand-400 font-semibold hover:underline"
            >
              @Jiee-new
            </a>{' '}
            di GitHub. Saya suka mengubah ide menjadi produk yang benar-benar bisa dipakai: website
            responsif, aplikasi Android ringan, sampai sistem informasi akademik untuk sekolah. Saya
            percaya cara terbaik belajar adalah dengan membangun, merilis, lalu memperbaiki.
          </p>

          <Reveal className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 text-sm space-y-3">
            {details.map((detail) => (
              <div key={detail.label} className="flex justify-between gap-4">
                <span className="text-slate-500 dark:text-slate-400">{detail.label}</span>
                <span
                  className={`font-semibold ${
                    detail.accent
                      ? 'text-emerald-600 dark:text-emerald-400'
                      : 'text-slate-900 dark:text-white'
                  }`}
                >
                  {detail.value}
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
