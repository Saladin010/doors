import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { productionStages } from "@/lib/data";
import { useIsMobile, useReducedMotion } from "@/lib/hooks";
import { CornerFrame, Kicker } from "./primitives";

gsap.registerPlugin(ScrollTrigger);

export default function ProductionLine() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const native = isMobile || reduced;
  const [progress, setProgress] = useState(0);

  // Desktop: GSAP-pinned horizontal scroll
  useEffect(() => {
    if (isMobile || reduced) return;
    const track = trackRef.current;
    const section = sectionRef.current;
    if (!track || !section) return;

    const getDistance = () => track.scrollWidth - window.innerWidth;

    const st = gsap.to(track, {
      x: () => -getDistance(),
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: () => "+=" + getDistance(),
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (self) => setProgress(self.progress),
      },
    });

    return () => {
      st.scrollTrigger?.kill();
      st.kill();
    };
  }, [isMobile, reduced]);

  // Native swipe (mobile or reduced motion) — sync progress bar to horizontal scroll
  useEffect(() => {
    if (!native) return;
    const el = scrollRef.current;
    if (!el) return;
    const onScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? el.scrollLeft / max : 0);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, [native]);

  const stages = productionStages;
  const heightClass = native ? "" : "min-h-screen";

  return (
    <section ref={sectionRef} id="line" className="relative bg-void">
      <div className={`${heightClass} flex flex-col`}>
        {/* progress + heading (sticky-feel top bar) */}
        <div className="border-b border-steel-line">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 md:flex-row md:items-end md:justify-between md:px-8 md:py-9">
            <div>
              <Kicker index="01 / LINE">خط الإنتاج</Kicker>
              <h2 className="mt-3 max-w-xl text-3xl font-800 leading-tight text-paper md:text-5xl">
                من اللفة إلى الباب المختوم
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-paper-dim">
              ثماني مراحل تصنيع مُراقبة — كل باب يمر باختبار حريق معتمد قبل الختم.
            </p>
          </div>
          {/* progress line */}
          <div className="h-0.5 w-full bg-steel-line/60">
            <div
              ref={fillRef}
              className="h-full bg-signal-500 transition-[width] duration-150"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>

        {/* track */}
        <div
          ref={scrollRef}
          className={`flex flex-1 items-center ${native ? "overflow-x-auto no-scrollbar snap-x snap-mandatory" : "overflow-hidden"}`}
          dir="ltr"
        >
          <div
            ref={trackRef}
            className="flex gap-5 px-5 py-10 md:gap-8 md:px-12 md:py-14"
            style={{ willChange: "transform" }}
          >
            {stages.map((s, i) => (
              <article
                key={s.idx}
                className="group relative w-[80vw] shrink-0 snap-center sm:w-[55vw] md:w-[40vw] lg:w-[30vw]"
              >
                <CornerFrame className="overflow-hidden border border-steel-line">
                  <div className="relative aspect-[4/3] overflow-hidden bg-graphite-900">
                    <img
                      src={s.img}
                      alt={s.ar}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-80 transition-all duration-500 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-transparent" />
                    <span className="mono absolute right-3 top-3 text-[0.65rem] tracking-[0.2em] text-signal-500" dir="ltr">
                      {s.idx}
                    </span>
                  </div>
                </CornerFrame>
                <div className="mt-3 flex items-baseline justify-between gap-2 border-t border-steel-line pt-3">
                  <h3 className="text-base font-700 text-paper md:text-lg">{s.ar}</h3>
                  <span className="mono text-[0.55rem] tracking-[0.15em] text-paper-dim" dir="ltr">
                    {String(i + 1).padStart(2, "0")}/{String(stages.length).padStart(2, "0")}
                  </span>
                </div>
                <div className="mono mt-1 text-[0.62rem] tracking-wide text-signal-500" dir="ltr">
                  {s.spec}
                </div>
              </article>
            ))}
            {/* tail spacer */}
            <div className="w-[2vw] shrink-0" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
