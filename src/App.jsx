import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import FooterTerminal from './components/FooterTerminal';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b0d10] font-mono">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3 text-slate-200">
          <a href="#" className="text-sm tracking-widest text-teal-300">VIDIT</a>
          <nav className="flex items-center gap-5 text-xs">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#experience" className="hover:text-white">Experience</a>
            <a href="#projects" className="hover:text-white">Projects</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
      </main>

      <FooterTerminal />
    </div>
  );
}
