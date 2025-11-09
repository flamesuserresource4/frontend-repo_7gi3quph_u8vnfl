import { useEffect, useRef, useState } from 'react';
import { Film, ShieldCheck, ServerCog, Repeat } from 'lucide-react';
import { motion } from 'framer-motion';

const roles = [
  {
    company: 'Adobe',
    role: 'ML + Product Engineering',
    icon: Film,
    accent: 'from-pink-500/20 to-orange-500/20',
    desc: 'Auto-edit timelines that cut themselves and media that reorganizes into stories.'
  },
  {
    company: 'Bosch',
    role: 'Security Analytics',
    icon: ShieldCheck,
    accent: 'from-red-500/20 to-blue-500/20',
    desc: 'Mesh turns red → blue as attacks get filtered and blocked.'
  },
  {
    company: 'IIT Bombay SysAdmin',
    role: 'Infra + Ops',
    icon: ServerCog,
    accent: 'from-teal-500/20 to-sky-500/20',
    desc: 'Terminals upgrading servers; network graphs glowing alive.'
  },
  {
    company: 'senzcraft',
    role: 'Applied AI',
    icon: Repeat,
    accent: 'from-purple-500/20 to-teal-500/20',
    desc: 'Human ↔ model loop passing a glowing data sphere.'
  }
];

// Simple forward-prop/attention lanes
function AttentionLanes() {
  return (
    <div className="mt-4 space-y-1">
      {[0, 1, 2, 3].map((lane) => (
        <div key={lane} className="relative h-1.5 w-full overflow-hidden rounded bg-white/10">
          <div
            className="absolute inset-y-0 left-0 w-1/3 rounded bg-gradient-to-r from-teal-400/0 via-teal-300/70 to-purple-400/0"
            style={{ animation: `flow-${lane} 1.8s linear infinite` }}
          />
        </div>
      ))}
      <style>{`
        @keyframes flow-0 { 0% { transform: translateX(-120%);} 100% { transform: translateX(220%);} }
        @keyframes flow-1 { 0% { transform: translateX(-200%);} 100% { transform: translateX(180%);} }
        @keyframes flow-2 { 0% { transform: translateX(-150%);} 100% { transform: translateX(200%);} }
        @keyframes flow-3 { 0% { transform: translateX(-180%);} 100% { transform: translateX(210%);} }
      `}</style>
    </div>
  );
}

export default function Experience() {
  const scroller = useRef(null);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(0);

  // auto-scroll
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;

    let last = performance.now();
    const speed = 0.25; // px per ms

    const loop = (t) => {
      const dt = t - last;
      last = t;
      el.scrollLeft += speed * dt;
      if (el.scrollLeft >= el.scrollWidth - el.clientWidth - 1) {
        el.scrollLeft = 0; // loop
      }
      setProgress(el.scrollLeft / (el.scrollWidth - el.clientWidth));
      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);
    const onScroll = () => {
      setProgress(el.scrollLeft / (el.scrollWidth - el.clientWidth));
    };
    el.addEventListener('scroll', onScroll);
    return () => {
      cancelAnimationFrame(rafRef.current);
      el.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <section id="experience" className="mx-auto max-w-[100vw] overflow-hidden px-0 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-2 text-3xl font-semibold">Experience</h2>
        <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded bg-white/10">
          <div
            className="h-full rounded bg-gradient-to-r from-teal-400 via-sky-400 to-purple-400"
            style={{ width: `${Math.max(5, Math.floor(progress * 100))}%` }}
          />
        </div>
        <div className="mt-1 text-xs text-slate-400">auto-scroll • drag to explore</div>
      </div>

      <div
        ref={scroller}
        className="no-scrollbar relative mt-6 flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4"
      >
        {roles.map(({ company, role, icon: Icon, accent, desc }) => (
          <motion.div
            key={company}
            className="group relative h-72 w-[82%] min-w-[340px] max-w-md snap-center overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-md"
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className={`pointer-events-none absolute inset-0 bg-gradient-to-r ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            <div className="relative z-10 flex items-start gap-4">
              <div className="rounded-lg bg-white/5 p-2"><Icon className="h-5 w-5 text-teal-300" /></div>
              <div className="flex-1">
                <div className="text-lg font-medium">{company}</div>
                <div className="text-sm text-slate-400">{role}</div>
                <p className="mt-2 text-slate-300">{desc}</p>
                <div className="mt-3 text-xs uppercase tracking-wide text-slate-400">forward pass · attention weights</div>
                <AttentionLanes />
              </div>
            </div>

            {/* mini node graph */}
            <div className="pointer-events-none absolute bottom-2 right-2 flex items-center gap-1 opacity-80">
              {[0,1,2].map((i) => (
                <span key={i} className="relative inline-flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-400/40" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-teal-300" />
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
