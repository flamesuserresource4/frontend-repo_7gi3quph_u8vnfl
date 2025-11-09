import { useEffect, useRef, useState } from 'react';

export default function FooterTerminal() {
  const [output, setOutput] = useState('');
  const [done, setDone] = useState(false);
  const target = 'Vidit Khazanchi';
  const iRef = useRef(0);

  useEffect(() => {
    if (done) return;
    const id = setInterval(() => {
      const i = iRef.current;
      if (i >= target.length) {
        clearInterval(id);
        setDone(true);
        return;
      }
      setOutput(target.slice(0, i + 1));
      iRef.current = i + 1;
    }, 50);
    return () => clearInterval(id);
  }, [done]);

  return (
    <footer className="border-t border-white/10 bg-black/60 py-10 text-slate-200">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-lg border border-white/10 bg-black/70 p-4 font-mono text-sm">
          <div className="text-teal-300">$ whoami</div>
          <div className="mt-1 flex items-center gap-2">
            <span className="text-slate-100">→ {output}</span>
            {!done && <span className="h-4 w-2 animate-pulse bg-slate-400/70" />}
          </div>
        </div>
      </div>
    </footer>
  );
}
