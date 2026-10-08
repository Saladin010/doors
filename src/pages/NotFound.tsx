import { Link } from "react-router-dom";
import SEO from "@/components/SEO";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-5 text-center">
      <SEO 
        title="الصفحة غير موجودة" 
        description="عذراً، الصفحة التي تبحث عنها غير موجودة في موقع سمارت لتصنيع الأبواب."
        noindex={true}
      />
      <h1 className="mb-4 text-6xl font-900 text-signal-500">404</h1>
      <h2 className="mb-6 text-2xl font-700 text-paper">عذراً، الصفحة غير موجودة</h2>
      <p className="mb-8 max-w-md text-paper-dim">
        يبدو أنك وصلت إلى رابط غير صحيح أو تم نقل الصفحة. يمكنك العودة إلى الصفحة الرئيسية لمتابعة تصفح منتجاتنا.
      </p>
      <Link 
        to="/"
        className="rounded bg-signal-500 px-6 py-3 font-700 text-void transition-colors hover:bg-signal-400"
      >
        العودة للرئيسية
      </Link>
    </main>
  );
}
