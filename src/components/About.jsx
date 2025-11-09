import { motion } from 'framer-motion';
import { Brain, CircuitBoard, Binary, Sparkles } from 'lucide-react';

export default function About() {
  const items = [
    { icon: Binary, title: 'Code', desc: 'Strong foundations across algorithms, systems, and product craft.' },
    { icon: Brain, title: 'Neurons', desc: 'Applied ML for real products: retrieval pipelines, editing copilots, ranking.' },
    { icon: CircuitBoard, title: 'Systems', desc: 'From prototypes to infra: containers, monitoring, and performance.' },
  ];

  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/40 p-8">
        <div className="pointer-events-none absolute -inset-16 bg-[radial-gradient(60%_60%_at_20%_20%,rgba(56,189,248,0.12),transparent_60%),radial-gradient(40%_40%_at_80%_30%,rgba(168,85,247,0.10),transparent_60%)]" />
        <div className="relative z-10 grid grid-cols-1 gap-10 md:grid-cols-2">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-semibold"
            >
              About
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="mt-4 leading-relaxed text-slate-300"
            >
              I design and ship systems where AI motion meets software logic. From editing tools that understand context to infra that never blinks, my work blends research intuition with engineering discipline.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 flex flex-wrap gap-2 text-sm text-slate-300"
            >
              <span className="rounded bg-white/5 px-2 py-1">IIT Bombay</span>
              <span className="rounded bg-white/5 px-2 py-1">Adobe Express</span>
              <span className="rounded bg-white/5 px-2 py-1">senzcraft</span>
              <span className="rounded bg-white/5 px-2 py-1">Infra + Ops</span>
              <span className="rounded bg-white/5 px-2 py-1">Applied AI</span>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i + 0.2 }}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/60 p-4"
              >
                <div className="flex items-center gap-2">
                  <div className="rounded-lg bg-white/5 p-2"><Icon className="h-5 w-5 text-teal-300" /></div>
                  <div className="font-medium">{title}</div>
                </div>
                <p className="mt-2 text-sm text-slate-300">{desc}</p>
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(120px_120px_at_80%_20%,rgba(56,189,248,0.18),transparent_60%)]" />
              </motion.div>
            ))}
            <div className="col-span-full mt-2 rounded-xl border border-white/10 bg-black/60 p-4 text-sm text-slate-300">
              <div className="mb-2 flex items-center gap-2 text-slate-200"><Sparkles className="h-4 w-4 text-teal-300" /> Signature</div>
              code → neurons → systems — and always production.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
