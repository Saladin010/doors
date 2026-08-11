import { useEffect, useRef, useState } from "react";
import { stats, type Stat } from "@/lib/data";
import { useCountUp, useReducedMotion } from "@/lib/hooks";

function StatCell({ stat, last }: { stat: Stat; last?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [start, setStart] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setStart(true);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const value = useCountUp({ target: stat.value ?? 0, start });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col items-center justify-center px-4 py-7 text-center md:py-9 ${last ? "" : "border-b border-steel-line md:border-b-0 md:border-l"}`}
    >
      {stat.value !== undefined ? (
        <>
          <div className="flex items-baseline" dir="ltr">
            {stat.prefix && (
              <span className="mono text-lg font-500 text-paper-dim md:text-xl">{stat.prefix}</span>
            )}
            <span
              className={`mono text-4xl font-700 text-paper md:text-5xl lg:text-6xl ${reduced ? "" : ""}`}
            >
              {value}
            </span>
            {stat.suffix && (
              <span className="mono text-2xl font-500 text-signal-500 md:text-3xl">{stat.suffix}</span>
            )}
          </div>
          <div className="mt-2 text-xs font-500 tracking-wide text-paper-dim md:text-sm">{stat.label}</div>
        </>
      ) : (
        <div className="flex items-center justify-center h-full">
          <span className="text-sm font-700 text-paper md:text-base leading-relaxed">{stat.label}</span>
        </div>
      )}
    </div>
  );
}

export default function SystemsReadout() {
  return (
    <section className="border-y border-steel-line bg-graphite-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <StatCell key={s.label} stat={s} last={i === stats.length - 1} />
        ))}
      </div>
    </section>
  );
}
