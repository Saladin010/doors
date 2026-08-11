import { motion } from "framer-motion";
import { contact } from "@/lib/data";
import { CTAButton } from "./primitives";

export default function Closing() {
  return (
    <section className="relative overflow-hidden border-t border-steel-line bg-void py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-[0.04]" />
      {/* framing corner brackets */}
      <span className="pointer-events-none absolute left-4 top-4 h-8 w-8 border-l border-t border-signal-500/40" />
      <span className="pointer-events-none absolute right-4 top-4 h-8 w-8 border-r border-t border-signal-500/40" />
      <span className="pointer-events-none absolute bottom-4 left-4 h-8 w-8 border-b border-l border-signal-500/40" />
      <span className="pointer-events-none absolute bottom-4 right-4 h-8 w-8 border-b border-r border-signal-500/40" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-5 text-center">
        {/* large cert badge motif with line-draw rings */}
        <div className="relative mb-10 h-44 w-44 md:h-52 md:w-52">
          <div className="metal-seal absolute inset-0 flex flex-col items-center justify-center rounded-full">
            <svg viewBox="0 0 100 100" className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)]" aria-hidden>
              <motion.circle
                cx="50"
                cy="50"
                r="46"
                fill="none"
                stroke="#5a5e64"
                strokeWidth="0.4"
                strokeDasharray="1 3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="#3a3d42"
                strokeWidth="0.5"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.6, ease: "easeOut" }}
              />
            </svg>
            <span className="mono text-3xl font-700 text-signal-500 md:text-4xl" dir="rtl">
              150 دقيقة
            </span>
            <span className="mt-2 h-px w-10 bg-steel-line" />
            <span className="mono mt-2 text-[0.55rem] tracking-[0.15em] text-paper-dim" dir="rtl">
              معتمد من معمل البحوث
            </span>
          </div>
        </div>

        <h2 className="font-display text-3xl font-900 leading-[1.1] text-paper md:text-5xl lg:text-6xl">
          سمارت لتصنيع ابواب الطوارئ
        </h2>

        <p className="mt-6 max-w-md text-sm leading-relaxed text-paper-dim md:text-base">
          شريكك الموثوق في حلول الأبواب المقاومة للحريق التي تجمع بين الجودة والمتانة والأمان.
        </p>

        <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href="#quote">تواصل الآن</CTAButton>
          <CTAButton href={contact.whatsapp} variant="secondary">
            واتساب مباشر
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
