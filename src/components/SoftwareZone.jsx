import { useEffect, useRef } from 'react';
import { Boxes, Cpu, Server, GitBranch } from 'lucide-react';
import { motion } from 'framer-motion';

// Rotating tech sphere using CSS keyframes
function TechSphere() {
  return (
    <div className="relative mx-auto h-40 w-40">
      <div className="absolute inset-0 animate-spin-slow rounded-full border border-white/10" />
      {[...Array(12)].map((_, i) => (
        <span
          key={i}
          className="absolute left-1/2 top-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-teal-300"
          style={{ transform: `rotate(${i * 30}deg) translateY(-70px)` }}
        />
      ))}
    </div>
  );
}

export default function SoftwareZone() {
  const canvasRef = useRef(null);

  // Lightweight interactive architecture nodes on canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf = 0;
    const nodes = Array.from({ length: 18 }).map((_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
    }));

    function tick() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      // links
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 120 * 120) {
            ctx.strokeStyle = 'rgba(94,234,212,0.12)';
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }
      // nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        ctx.fillStyle = '#5eead4';
        ctx.beginPath();
        ctx.arc(n.x, n.y, 2, 0, Math.PI * 2);
        ctx.fill();
      });
      raf = requestAnimationFrame(tick);
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * devicePixelRatio;
      canvas.height = rect.height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
    };

    resize();
    tick();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <section id="software" className="mx-auto max-w-6xl px-6 py-24 text-white">
      <div className="mb-8 flex items-center gap-2">
        <Boxes className="h-5 w-5 text-teal-300" />
        <h2 className="text-3xl font-semibold">Software Engineering Zone</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="mb-4 flex items-center gap-2 text-slate-200"><Cpu className="h-4 w-4 text-teal-300" /> Rotating Tech Sphere</div>
          <TechSphere />
          <p className="mt-4 text-sm text-slate-300">A visual of skills orbiting a core — infra, data, ML, UX. Balanced, in motion.</p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="mb-4 flex items-center gap-2 text-slate-200"><Server className="h-4 w-4 text-teal-300" /> Interactive Architecture Nodes</div>
          <div className="relative h-48 w-full overflow-hidden rounded-lg border border-white/10">
            <canvas ref={canvasRef} className="h-full w-full" />
          </div>
          <p className="mt-4 text-sm text-slate-300">Services and links shimmer as a living diagram you can just watch breathe.</p>
        </div>
      </div>
    </section>
  );
}
