import { motion } from 'framer-motion';
import { BookOpen, ExternalLink } from 'lucide-react';

const pubs = [
  {
    title: 'Guided Video Editing with Programmatic Prompts',
    venue: 'Workshop @ ML for Creativity',
    year: '2024',
    link: '#',
    summary: 'A prompt-to-edit pipeline aligning text intent to timeline operations.'
  },
  {
    title: 'Retrieval-augmented Assistants for Campus Knowledge',
    venue: 'Undergrad Thesis, IIT Bombay',
    year: '2023',
    link: '#',
    summary: 'Hybrid sparse+dense retrieval with citation grounding and subject routing.'
  },
  {
    title: 'Streaming Anomaly Detection in Service Meshes',
    venue: 'Industry Report',
    year: '2022',
    link: '#',
    summary: 'Windowed sketches and adaptive thresholds for low-latency alerting.'
  },
];

export default function Research() {
  return (
    <section id="research" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-8 flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-teal-300" />
        <h2 className="text-3xl font-semibold">Research & Publications</h2>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {pubs.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group relative block overflow-hidden rounded-xl border border-white/10 bg-slate-900/70 p-5 backdrop-blur-md"
          >
            <div className="pointer-events-none absolute -inset-10 -z-0 bg-gradient-to-br from-sky-500/5 via-teal-500/5 to-purple-500/5 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
            <div className="flex items-start justify-between">
              <div>
                <div className="font-medium text-slate-100">{p.title}</div>
                <div className="mt-1 text-xs text-slate-400">{p.venue} • {p.year}</div>
              </div>
              <ExternalLink className="h-4 w-4 text-teal-300 opacity-80" />
            </div>
            <p className="mt-3 text-sm text-slate-300">{p.summary}</p>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="mt-3 text-xs text-slate-400">Read more →</div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
