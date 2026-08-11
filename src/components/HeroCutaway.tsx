import { useRef } from "react";
import { motion } from "framer-motion";
import { heroImg } from "@/lib/data";
import { useReducedMotion } from "@/lib/hooks";
import { CTAButton } from "./primitives";

export default function HeroCutaway() {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={sectionRef} id="top" style={{ height: "100vh" }} className="relative">
      <div className="relative h-screen w-full overflow-hidden">
        {/* blueprint backdrop */}
        <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-[0.05]" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-void/40 via-transparent to-void" />

        {/* ---- Door PHOTO ---- */}
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="شركة سمارت لتصنيع ابواب الطوارئ"
            className="h-full w-full object-cover object-center opacity-90"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-void via-void/30 to-void/60" />
          <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-void/70" />
        </div>

        {/* ---- Headline + sub (top) ---- */}
        <div className="absolute inset-x-0 top-0 z-10 px-5 pt-20 opacity-100 transition-opacity duration-500 md:px-12 md:pt-24">
          <div className="mono mb-5 flex items-center gap-3 text-[0.65rem] tracking-[0.35em] text-signal-500" dir="ltr">
            <span className="h-px w-8 bg-signal-500" /> شركة سمارت لتصنيع ابواب الطوارئ
          </div>
          <h1 className="font-display text-[2.15rem] font-900 leading-[1.08] text-paper sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            {["حماية فائقة.", "لأقصى درجات الأمان."].map((line, i) => (
              <span key={i} className="block overflow-hidden">
                <motion.span
                  className="block"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 + i * 0.18 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.div
            className="mono mt-4 text-[0.7rem] tracking-[0.3em] text-paper-dim sm:text-sm"
            dir="ltr"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            EI30 • EI60 • EI90 • EI120 - CERTIFIED
          </motion.div>
        </div>

        {/* ---- CTAs ---- */}
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col items-center gap-3 px-5 pb-8 sm:flex-row sm:justify-center md:pb-10">
          <CTAButton href="#quote" className="w-full sm:w-auto">
            اطلب عرض سعر
          </CTAButton>
          <CTAButton href="#products" variant="secondary" className="w-full sm:w-auto">
            تصفح المنتجات
          </CTAButton>
        </div>
      </div>
    </section>
  );
}
