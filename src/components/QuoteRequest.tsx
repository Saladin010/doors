import { useState } from "react";
import { Check } from "lucide-react";
import { contact, products } from "@/lib/data";
import { CTAButton, Kicker } from "./primitives";

const ratings = ["60 دقيقة", "90 دقيقة", "120 دقيقة", "150 دقيقة", "غير محدد"];

function Field({
  label,
  children,
  hint,
}: {
  label: string;
  children: React.ReactNode;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="mono mb-2 block text-[0.6rem] uppercase tracking-[0.2em] text-paper-dim" dir="ltr">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1 block text-[0.7rem] text-paper-dim/70">{hint}</span>}
    </label>
  );
}

const inputCls =
  "w-full border-b border-steel-line bg-transparent py-2.5 text-paper outline-none transition-colors placeholder:text-paper-dim/50 focus:border-signal-500";

export default function QuoteRequest() {
  const [sent, setSent] = useState(false);

  return (
    <section id="quote" className="relative border-t border-steel-line bg-graphite-900 py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-[0.035]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-8">
        {/* left — copy */}
        <div>
          <Kicker index="05 / RFQ">طلب عرض سعر</Kicker>
          <h2 className="mt-3 text-3xl font-800 leading-tight text-paper md:text-5xl">
            حدّد المواصفة،<br />ونحن نحدّد السعر.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-paper-dim">
            هذا ليس نموذج تواصل عام — إنه طلب مواصفة. اذكر نوع الباب والتصنيف المطلوب والكمية،
            ويعود إليك فريقنا بعرض سعر هندسي خلال 48 ساعة عمل.
          </p>
          <div className="mt-6 border-r-2 border-signal-500 pr-4">
            <span className="block text-[0.65rem] text-signal-500 mb-1 font-700">لمين الخدمة دي؟</span>
            <span className="text-sm text-paper-dim font-700">المقاولين، الاستشاريين، الشركات، والمصانع</span>
          </div>

          <div className="mt-8 space-y-3 border-t border-steel-line pt-6">
            <a 
              href={contact.phoneHref} 
              onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'phone_click' }); }}
              className="mono flex items-center gap-3 text-sm text-paper hover:text-signal-500" 
              dir="ltr"
            >
              <span className="h-px w-5 bg-signal-500" /> {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`} className="mono flex items-center gap-3 text-sm text-paper hover:text-signal-500" dir="ltr">
              <span className="h-px w-5 bg-signal-500" /> {contact.email}
            </a>
            <p className="flex items-center gap-3 text-sm text-paper-dim">
              <span className="h-px w-5 bg-steel-line" /> {contact.address}
            </p>
          </div>
        </div>

        {/* right — form */}
        <div className="relative">
          {sent ? (
            <div className="flex h-full min-h-[24rem] flex-col items-center justify-center border border-signal-500/50 bg-graphite-800 p-8 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-signal-500 text-void">
                <Check className="h-7 w-7" />
              </div>
              <h3 className="text-xl font-800 text-paper">تم استلام طلب المواصفة</h3>
              <p className="mono mt-2 text-[0.7rem] tracking-wide text-paper-dim" dir="ltr">
                TICKET #RFQ-{Math.floor(1000 + Math.random() * 9000)}
              </p>
              <p className="mt-4 max-w-xs text-sm text-paper-dim">
                سيتواصل معك فريق الهندسة خلال 48 ساعة عمل بعرض سعر تفصيلي.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);

                const formData = new FormData(e.currentTarget);
                const data = Object.fromEntries(formData.entries());

                // Send email via FormSubmit
                fetch("https://formsubmit.co/ajax/smartdoors6@gmail.com", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                  },
                  body: JSON.stringify({
                    _subject: "طلب تسعير جديد من الموقع",
                    Name: data.name,
                    Phone: data.phone,
                    Door_Type: data.type,
                    Rating: data.rating,
                    Quantity: data.qty,
                    Notes: data.notes,
                  }),
                }).catch(err => console.error(err));
                
                // Track conversion
                const utmData = {
                  utm_source: sessionStorage.getItem('utm_source') || '',
                  utm_medium: sessionStorage.getItem('utm_medium') || '',
                  utm_campaign: sessionStorage.getItem('utm_campaign') || '',
                  utm_term: sessionStorage.getItem('utm_term') || '',
                  utm_content: sessionStorage.getItem('utm_content') || '',
                };
                
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: "quote_form_submit",
                  ...utmData
                });
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="NAME">
                  <input required name="name" placeholder="الاسم بالكامل" className={inputCls} />
                </Field>
                <Field label="PHONE">
                  <input required name="phone" type="tel" placeholder="01xxxxxxxxx" className={`${inputCls} mono`} dir="ltr" />
                </Field>
              </div>

              <Field label="DOOR TYPE">
                <select required name="type" defaultValue="" className={`${inputCls} appearance-none`}>
                  <option value="" disabled className="bg-graphite-800">
                    اختر نوع الباب
                  </option>
                  {products.map((p) => (
                    <option key={p.cat} value={p.cat} className="bg-graphite-800">
                      {p.cat}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <Field label="RATING">
                  <select name="rating" defaultValue="غير محدد" className={`${inputCls} appearance-none`}>
                    {ratings.map((r) => (
                      <option key={r} value={r} className="bg-graphite-800">
                        {r}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="QTY">
                  <input name="qty" type="number" min="1" placeholder="الكمية" className={`${inputCls} mono`} dir="ltr" />
                </Field>
              </div>

              <Field label="NOTES" hint="أبعاد خاصة، ألوان، أقفال، موعد التسليم…">
                <textarea name="notes" rows={3} placeholder="ملاحظات إضافية" className={`${inputCls} resize-none`} />
              </Field>

              <CTAButton className="w-full">إرسال طلب المواصفة</CTAButton>
              <p className="mono text-center text-[0.6rem] tracking-wide text-paper-dim/60" dir="ltr">
                YOUR DATA IS USED ONLY TO QUOTE THIS REQUEST
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
