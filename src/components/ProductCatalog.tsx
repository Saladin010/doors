import { useState } from "react";
import { products, type Product } from "@/lib/data";
import { Kicker, Reveal } from "./primitives";
import { cn } from "@/utils/cn";

function ProductCard({ p }: { p: Product }) {
  const [open, setOpen] = useState(false);
  return (
    <Reveal className="h-full">
      <div
        className="group relative h-full cursor-pointer overflow-hidden border border-steel-line bg-graphite-900"
        onClick={() => setOpen((o) => !o)}
      >
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={p.img}
            alt={p.cat}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 via-graphite-900/10 to-transparent" />

          {/* rating / classification stamp */}
          <div className="absolute right-3 top-3">
            <div
              className="metal-seal flex -rotate-6 items-center justify-center rounded-[2px] px-2.5 py-1.5 ring-1 ring-signal-500/60"
              style={{ boxShadow: "0 2px 0 rgba(0,0,0,.6)" }}
            >
              <span className="mono text-[0.7rem] font-700 text-signal-500" dir="ltr">
                {p.badge}
              </span>
            </div>
          </div>

          {/* category label (always visible) */}
          <div className="absolute inset-x-0 bottom-0 p-4">
            <h3 className="text-lg font-800 text-paper md:text-xl">{p.cat}</h3>
            <span className="mono text-[0.55rem] tracking-[0.2em] text-paper-dim" dir="ltr">
              TAP / HOVER FOR SPECS
            </span>
          </div>
        </div>

        {/* spec datasheet — slides up from bottom edge */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 border-t border-signal-500/50 bg-graphite-800/95 px-4 py-4 backdrop-blur transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]",
            "translate-y-full group-hover:translate-y-0",
            open && "translate-y-0"
          )}
        >
          <div className="mono mb-3 flex items-center justify-between text-[0.55rem] tracking-[0.2em] text-signal-500" dir="ltr">
            DATA SHEET
            <span className="h-px w-6 bg-signal-500" />
          </div>
          <dl className="space-y-2.5">
            {p.specs.map((s) => (
              <div key={s.label} className="flex items-center justify-between border-b border-steel-line/60 pb-2">
                <dt className="text-xs text-paper-dim">{s.label}</dt>
                <dd className="mono text-xs font-500 text-paper" dir="ltr">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </Reveal>
  );
}

export default function ProductCatalog() {
  return (
    <section id="products" className="relative border-t border-steel-line bg-void py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <Kicker index="02 / CAT">المنتجات</Kicker>
            <h2 className="mt-3 text-3xl font-800 leading-tight text-paper md:text-5xl">كتالوج الأبواب</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-paper-dim">
            أبواب مقاومة للحريق حتى 150 دقيقة · أبواب طوارئ · تصنيع حسب المقاسات والمواصفات المطلوبة · توريد وتركيب لجميع أنحاء مصر
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.cat} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
