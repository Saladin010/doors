import { Shield, Hammer, Clock, Factory } from "lucide-react";
import { Reveal, Kicker } from "./primitives";

const features = [
  {
    icon: Shield,
    title: "مقاومة حريق",
    desc: "تصنيع أبواب مقاومة للحريق حتى 150 دقيقة",
  },
  {
    icon: Factory,
    title: "حلول متكاملة",
    desc: "تصنيع، توريد، وتركيب في مكان واحد",
  },
  {
    icon: Clock,
    title: "دقة التنفيذ",
    desc: "الدقة في التنفيذ والالتزام بمواعيد التسليم",
  },
  {
    icon: Hammer,
    title: "خدمة احترافية",
    desc: "أسعار تنافسية وخدمة احترافية للمقاولين والاستشاريين والشركات والمصانع",
  },
];

export default function Features() {
  return (
    <section id="features" className="relative border-t border-steel-line bg-graphite-900 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Kicker index="02 / WHY">لماذا سمارت</Kicker>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="flex flex-col border-r border-steel-line/50 pr-6 h-full">
                <f.icon className="mb-4 h-8 w-8 text-signal-500" strokeWidth={1.5} />
                <h3 className="mb-2 text-lg font-700 text-paper">{f.title}</h3>
                <p className="text-sm leading-relaxed text-paper-dim">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
