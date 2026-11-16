import Reveal from './Reveal';
import { GitHubIcon, MailIcon } from './Icons';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <Reveal className="max-w-4xl mx-auto bg-slate-900 dark:bg-slate-900 rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden border border-slate-800">
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-48 h-48 bg-brand-500 rounded-full opacity-20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-48 h-48 bg-cyan-400 rounded-full opacity-20 blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Mari Berkolaborasi!
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
            Punya ide proyek, butuh bantuan membangun website, atau ingin berdiskusi soal web &amp;
            Android? Jangan ragu untuk menghubungi saya.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/message/TQQFB3DRFDJAJ1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-brand-500 text-white font-semibold hover:bg-brand-400 hover:scale-105 hover:shadow-[0_0_24px_rgba(59,130,246,0.5)] transition-all duration-300"
            >
              <MailIcon />
              Hubungi via WhatsApp
            </a>
            <a
              href="https://github.com/Jiee-new"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <GitHubIcon />
              GitHub
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
