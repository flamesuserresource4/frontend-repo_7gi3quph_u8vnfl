import { useRef } from 'react';
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
  const scroller = useRef(null);

  return (
    <section id="experience" className="mx-auto max-w-[100vw] overflow-hidden px-0 py-24 text-white">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-6 text-3xl font-semibold">Experience</h2>
      </div>
      <div
        ref={scroller}
        className="no-scrollbar relative flex w-full snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4"
      >
        {roles.map(({ company, role, icon: Icon, accent, desc }) => (
          <div
            key={company}
            className="group relative h-64 w-[80%] min-w-[320px] max-w-md snap-center overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-md"
          >
            <div className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
            <div className="flex items-start gap-4">
              <div className="rounded-lg bg-white/5 p-2"><Icon className="h-5 w-5 text-teal-300" /></div>
              <div>
                <div className="text-lg font-medium">{company}</div>
                <div className="text-sm text-slate-400">{role}</div>
                <p className="mt-2 text-slate-300">{desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
