import { useEffect, useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileText, Github, Linkedin, Mail, BookOpen } from 'lucide-react';
import Spline from '@splinetool/react-spline';

const words = [
  'systems',
  'platforms',
  'models',
  'features',
  'tools',
  'things that actually ship',
];

export default function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % words.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const icons = useMemo(
    () => [
      {
        label: 'Resume',
        href: '#',
        Icon: FileText,
      },
      {
        label: 'GitHub',
        href: 'https://github.com/',
        Icon: Github,
      },
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/',
        Icon: Linkedin,
      },
      {
        label: 'Scholar',
        href: 'https://scholar.google.com/',
        Icon: BookOpen,
      },
      {
        label: 'Email',
        href: 'mailto:hello@vidit.is',
        Icon: Mail,
      },
    ],
    []
  );

  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* soft gradient overlay for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 pt-28 text-center text-white">
        <motion.p
          className="mb-4 text-sm tracking-[0.2em] text-teal-300/90"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          VIDIT KHAZANCHI
        </motion.p>

        <motion.h1
          className="font-display mb-4 text-4xl leading-tight sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I’m Vidit Khazanchi — I build intelligent
          <br className="hidden sm:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-teal-300 to-purple-300"> systems and software </span>
          that scale.
        </motion.h1>

        <div className="mt-4 h-10 text-xl sm:text-2xl text-slate-300">
          <div className="inline">I build&nbsp;</div>
          <span className="inline-block min-w-[12ch] align-baseline">
            <AnimatePresence mode="wait">
              <motion.span
                key={index}
                className="inline-block text-white"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35 }}
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
        </div>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {icons.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="group relative flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 backdrop-blur-sm transition hover:border-teal-300/50 hover:bg-white/5"
            >
              <Icon className="h-4 w-4 text-slate-200 transition group-hover:text-teal-300" />
              <span className="text-sm text-slate-200 group-hover:text-white">{label}</span>
              <span className="pointer-events-none absolute inset-0 z-0 rounded-full bg-gradient-to-r from-sky-400/0 via-teal-400/10 to-purple-400/0 opacity-0 blur-md transition duration-500 group-hover:opacity-100" />
            </a>
          ))}
        </motion.div>

        <div className="mt-12 text-xs text-slate-400">
          Hover and explore — the system responds.
        </div>
      </div>
    </section>
  );
}
