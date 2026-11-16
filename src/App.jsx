import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ComingSoon from './components/ComingSoon';
import GitHubRepos from './components/GitHubRepos';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:px-5 focus:py-3 focus:rounded-full focus:bg-slate-900 focus:text-white dark:focus:bg-white dark:focus:text-slate-900 focus:shadow-xl focus:font-semibold transition"
      >
        Lewati ke konten utama
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <ComingSoon />
        <GitHubRepos />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
