import { motion } from "framer-motion";
import { certifications } from "@/lib/data";
import { Kicker, Reveal } from "./primitives";

function Seal({ code, line1, line2, range }: (typeof certifications)[number]) {
  return (
    <Reveal className="flex flex-col items-center text-center">
      {/* engraved metal seal */}
      <div className="relative mb-6 h-40 w-40 md:h-48 md:w-48">
        <div className="metal-seal absolute inset-0 flex flex-col items-center justify-center rounded-full">
          {/* DrawSVG-style line-draw rings (stroke-dashoffset via pathLength) */}
          <svg viewBox="0 0 100 100" className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]" aria-hidden>
            <motion.circle
              cx="50"
              cy="50"
              r="47"
              fill="none"
              stroke="#5a5e64"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#3a3d42"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut", delay: 0.15 }}
            />
            <circle cx="50" cy="50" r="43.5" fill="none" stroke="#3a3d42" strokeWidth="0.4" strokeDasharray="1 4" />
          </svg>
          <span className="mono text-xl font-700 text-signal-500 md:text-2xl" dir="ltr">
            {code}
          </span>
          <span className="mt-1.5 h-px w-8 bg-steel-line" />
        </div>
      </div>
      <h3 className="text-base font-700 text-paper">{line1}</h3>
      <p className="mt-1 text-sm text-paper-dim">{line2}</p>
      <span
        className="mono mt-3 inline-block border border-steel-line px-3 py-1 text-[0.65rem] tracking-[0.15em] text-signal-500"
        dir="ltr"
      >
        {range}
      </span>
    </Reveal>
  );
}

export default function Certifications() {
  return (
    <section id="certs" className="relative border-t border-steel-line bg-graphite-900 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-[0.03]" />
      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex justify-center">
            <Kicker index="03 / CERT">الاعتماد والمعايير</Kicker>
          </div>
          <h2 className="mt-3 text-3xl font-800 leading-tight text-paper md:text-5xl">معيار. اختبار. تصنيف.</h2>
          <p className="mt-4 text-sm leading-relaxed text-paper-dim">
            لا نصف الأبواب بالصفقات — نذكر المعيار، ونوع الاختبار، ونطاق التصنيف المعتمد.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((c) => (
            <Seal key={c.code} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
}
