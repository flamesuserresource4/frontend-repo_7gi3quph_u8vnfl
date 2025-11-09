import { useState } from 'react';
import { Code, ExternalLink, Play } from 'lucide-react';

const projects = [
  {
    name: 'ResoBin',
    desc: 'Retrieval → LLM pipeline that answers campus queries with citations.',
    stack: ['React', 'FastAPI', 'Vector DB'],
    links: { demo: '#', github: '#' },
    preview: `fetch('/api/ask?query=best-mess')\n  .then(r => r.json())\n  .then(({ answer, sources }) => render(answer, sources))`,
  },
  {
    name: 'Server Metrics',
    desc: 'Live dashboard tracking services, latency, and throughput.',
    stack: ['Next.js', 'Timeseries DB', 'WebSockets'],
    links: { demo: '#', github: '#' },
    preview: `socket.on('metrics', (m) => {\n  chart.addPoint(m.latency)\n})`,
  },
  {
    name: 'API Visualizer',
    desc: 'Animated view of requests processed through microservices.',
    stack: ['React', 'D3', 'Docker'],
    links: { demo: '#', github: '#' },
    preview: `nodes.forEach(n => tick(n))\nlinks.forEach(l => draw(l))`,
  },
];

function CodePreview({ text }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative mt-4 h-28 overflow-hidden rounded-lg border border-white/10 bg-black/50"
    >
      <pre className="pointer-events-none absolute inset-0 z-10 h-full w-full overflow-hidden p-3 text-xs text-slate-200">
        <code>{text}</code>
      </pre>
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(56,189,248,0.18),transparent_40%)] transition-opacity"
        style={{ opacity: hover ? 1 : 0, '--x': '50%', '--y': '50%' }}
      />
      <div className="absolute -inset-8 -z-0 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 bg-gradient-to-br from-sky-500/10 via-teal-500/10 to-purple-500/10" />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <h2 className="mb-8 text-3xl font-semibold">Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <div key={p.name} className="group relative overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-md">
            <div className="pointer-events-none absolute -inset-8 -z-0 bg-gradient-to-br from-sky-500/5 via-teal-500/5 to-purple-500/5 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="flex items-start justify-between">
              <div>
                <div className="text-lg font-medium">{p.name}</div>
                <p className="mt-1 text-sm text-slate-300">{p.desc}</p>
              </div>
              <Code className="h-5 w-5 text-teal-300" />
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="rounded-full border border-white/10 px-2 py-0.5 text-xs text-slate-300">{s}</span>
              ))}
            </div>

            <CodePreview text={p.preview} />

            <div className="mt-5 flex items-center gap-3">
              <a href={p.links.demo} className="inline-flex items-center gap-1 rounded-full border border-teal-400/30 px-3 py-1 text-sm text-teal-200 transition hover:bg-teal-400/10">
                <Play className="h-4 w-4" /> Live
              </a>
              <a href={p.links.github} className="inline-flex items-center gap-1 rounded-full border border-white/20 px-3 py-1 text-sm text-slate-200 transition hover:bg-white/10">
                <ExternalLink className="h-4 w-4" /> Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
