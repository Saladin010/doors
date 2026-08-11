import { Kicker } from "./primitives";

export default function Accessories() {
  return (
    <section id="accessories" className="relative border-t border-steel-line bg-graphite-900 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Kicker index="05 / ACCESSORIES">الإكسسوارات</Kicker>
        <h2 className="mt-3 text-3xl font-800 leading-tight text-paper md:text-5xl">ملحقات أبواب معتمدة</h2>
        
        {/* Placeholder for future content */}
        <div className="mt-12 min-h-[300px] rounded-sm border border-dashed border-steel-line/40 bg-void/30"></div>
      </div>
    </section>
  );
}
