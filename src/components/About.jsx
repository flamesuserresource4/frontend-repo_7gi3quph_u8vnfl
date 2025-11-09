import { Cpu, Terminal, Network, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">About</h2>
          <p className="mt-4 leading-relaxed text-slate-300">
            I build reliable, intelligent systems that actually ship. I studied at IIT Bombay, built at Adobe,
            tinkered with infra and ML, and shipped products at startups like ResoBin and senzcraft.
          </p>
          <ul className="mt-6 space-y-3 text-slate-300">
            <li className="group inline-block cursor-pointer">
              <span className="rounded bg-white/5 px-2 py-1 text-sm text-teal-200/90">debugging things at 3AM</span>
              <span className="ml-2 text-xs text-slate-500 transition group-hover:text-slate-300">// Error: no one admitted to breaking it</span>
            </li>
            <li className="group inline-block cursor-pointer">
              <span className="rounded bg-white/5 px-2 py-1 text-sm text-sky-200/90">Adobe Express</span>
              <span className="ml-2 text-xs text-slate-500 transition group-hover:text-slate-300">// auto-edit timeline adjusts itself</span>
            </li>
            <li className="group inline-block cursor-pointer">
              <span className="rounded bg-white/5 px-2 py-1 text-sm text-purple-200/90">ResoBin</span>
              <span className="ml-2 text-xs text-slate-500 transition group-hover:text-slate-300">// courses connect, reviews fade in</span>
            </li>
          </ul>
        </div>

        <div className="relative">
          <div className="relative h-72 w-full rounded-xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-4">
            <div className="grid h-full grid-cols-3 grid-rows-3 gap-3">
              <div className="flex items-center justify-center rounded-lg bg-white/5"><Terminal className="h-6 w-6 text-teal-300" /></div>
              <div className="flex items-center justify-center rounded-lg bg-white/5"><Cpu className="h-6 w-6 text-sky-300" /></div>
              <div className="flex items-center justify-center rounded-lg bg-white/5"><Network className="h-6 w-6 text-purple-300" /></div>
              <div className="col-span-3 flex items-center justify-center rounded-lg bg-white/5">
                <Sparkles className="mr-2 h-5 w-5 text-teal-300" />
                <span className="text-slate-200">code → neurons → systems</span>
              </div>
              <div className="col-span-3 rounded-lg bg-gradient-to-r from-sky-400/10 via-teal-400/10 to-purple-400/10" />
            </div>
          </div>
          <div className="pointer-events-none absolute -inset-6 z-0 rounded-3xl bg-gradient-to-r from-sky-500/10 via-teal-500/10 to-purple-500/10 blur-2xl" />
        </div>
      </div>
    </section>
  );
}
