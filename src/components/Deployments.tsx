import { deployments } from "@/lib/data";
import { CornerFrame, Kicker, Reveal } from "./primitives";

export default function Deployments() {
  return (
    <section id="deploy" className="relative border-t border-steel-line bg-void py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker index="04 / DEPLOY">مواقع التنفيذ</Kicker>
            <h2 className="mt-3 text-3xl font-800 leading-tight text-paper md:text-5xl">ملفات تنفيذ</h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-paper-dim">
            مشاريع سابقة موثقة كملفات هندسية: النوع، عدد الأبواب المركبة، والتصنيف المستخدم.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {deployments.map((d, i) => (
            <Reveal key={d.title + i} delay={(i % 3) * 0.08}>
              <article className="group border border-steel-line bg-graphite-900">
                <CornerFrame className="relative overflow-hidden">
                  <div className="relative aspect-[16/10] overflow-hidden bg-graphite-800">
                    <img
                      src={d.img}
                      alt={d.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover opacity-75 transition-all duration-700 group-hover:scale-105 group-hover:opacity-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void/90 via-void/20 to-transparent" />
                    <span className="mono absolute right-3 top-3 text-[0.6rem] tracking-[0.2em] text-signal-500" dir="ltr">
                      CASE / {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </CornerFrame>

                <div className="p-4 md:p-5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-lg font-800 text-paper">{d.title}</h3>
                    <span className="text-xs text-paper-dim">{d.location}</span>
                  </div>
                  {/* metadata row — engineering case file */}
                  <div className="mono mt-3 flex items-center justify-between border-t border-steel-line pt-3 text-[0.7rem]" dir="ltr">
                    <span className="text-paper-dim">{d.type}</span>
                    <span className="text-signal-500">{d.rating}</span>
                    <span className="text-paper">{d.doors} doors</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
