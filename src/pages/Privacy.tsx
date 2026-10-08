import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import { contact } from "@/lib/data";
import SEO from "@/components/SEO";

export default function Privacy() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <main className="min-h-screen pt-24 pb-16 md:pt-32">
      <SEO 
        title="سياسة الخصوصية" 
        description="سياسة الخصوصية لشركة سمارت لتصنيع ابواب الطوارئ. تعرف على كيفية جمعنا واستخدامنا لبياناتك الشخصية."
        canonical="/privacy"
      />
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <div className="mb-12 border-b border-steel-line pb-8">
          <h1 className="text-3xl font-700 text-paper md:text-5xl">سياسة الخصوصية</h1>
          <p className="mt-4 text-paper-dim md:text-lg">
            آخر تحديث: {new Date().toLocaleDateString('ar-EG')}
          </p>
        </div>

        <div className="prose prose-invert prose-p:text-paper-dim prose-headings:text-paper max-w-none space-y-8 text-sm md:text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-700 mb-4">1. مقدمة</h2>
            <p>
              تحترم شركة سمارت لتصنيع ابواب الطوارئ خصوصيتك وتلتزم بحماية بياناتك الشخصية. توضح سياسة الخصوصية هذه نوعية المعلومات التي نجمعها، وكيف نستخدمها، والخيارات المتاحة لك بشأنها.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-700 mb-4">2. البيانات التي نجمعها</h2>
            <p>
              عند استخدامك لنموذج "طلب عرض سعر" أو تواصلك معنا، نقوم بجمع المعلومات التالية:
            </p>
            <ul className="list-disc pr-5 mt-2 space-y-2 text-paper-dim">
              <li>الاسم بالكامل.</li>
              <li>رقم الهاتف.</li>
              <li>البريد الإلكتروني (إن وجد).</li>
              <li>المعلومات التي تقدمها طواعية في ملاحظات الطلب.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-700 mb-4">3. الغرض من استخدام البيانات</h2>
            <p>
              نستخدم المعلومات التي نجمعها للأغراض التالية حصراً:
            </p>
            <ul className="list-disc pr-5 mt-2 space-y-2 text-paper-dim">
              <li>الرد على استفساراتك وإرسال عروض الأسعار الهندسية المطلوبة.</li>
              <li>تحسين جودة الخدمة والتواصل لترتيب مواعيد التوريد والتركيب.</li>
              <li>أغراض تسويقية محدودة (إذا وافقت على ذلك) لفهم كيفية تفاعل المستخدمين مع إعلاناتنا وتحسينها.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-700 mb-4">4. حماية ومشاركة البيانات</h2>
            <p>
              نحن لا نقوم ببيع أو تأجير بياناتك الشخصية لأي طرف ثالث. قد نشارك بعض البيانات المجمعة والمجهولة الهوية مع مزودي خدمات التحليلات (مثل Google Analytics) لتحسين أداء موقعنا، وذلك فقط في حالة موافقتك الصريحة عبر نافذة ملفات تعريف الارتباط (Cookies).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-700 mb-4">5. حقوقك</h2>
            <p>
              لديك الحق في الوصول إلى بياناتك، أو طلب تصحيحها، أو حذفها في أي وقت. يمكنك إرسال طلب للحصول على نسخة من بياناتك أو حذفها عن طريق التواصل معنا.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-700 mb-4">6. التواصل معنا</h2>
            <p>
              إذا كان لديك أي أسئلة حول سياسة الخصوصية هذه، أو لطلب حذف أو تعديل بياناتك، يرجى التواصل معنا عبر:
            </p>
            <ul className="mt-2 space-y-2 text-paper-dim">
              <li><strong className="text-paper">البريد الإلكتروني:</strong> <a href={`mailto:${contact.email}`} className="text-signal-500 hover:underline">{contact.email}</a></li>
              <li><strong className="text-paper">الهاتف:</strong> <a href={contact.phoneHref} dir="ltr" className="text-signal-500 hover:underline inline-block">{contact.phone}</a></li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}
