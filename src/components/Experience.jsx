import { motion } from 'framer-motion';
import { Film, ShieldCheck, ServerCog, Repeat } from 'lucide-react';

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

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <h2 className="mb-8 text-3xl font-semibold">Experience</h2>
      <div className="relative">
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/40 via-sky-500/40 to-purple-500/40" />
        <div className="space-y-6">
          {roles.map(({ company, role, icon: Icon, accent, desc }, i) => (
            <motion.div
              key={company}
              className="relative ml-10 rounded-xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-md"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className={`pointer-events-none absolute -left-9 top-5 h-5 w-5 rounded-full bg-gradient-to-r ${accent}`} />
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-white/5 p-2"><Icon className="h-5 w-5 text-teal-300" /></div>
                <div>
                  <div className="text-lg font-medium">{company}</div>
                  <div className="text-sm text-slate-400">{role}</div>
                  <p className="mt-2 text-slate-300">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
