import { useEffect, useState } from "react";
import { CTAButton } from "./primitives";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setShow(true);
    }
  }, []);

  const handleConsent = (granted: boolean) => {
    localStorage.setItem("cookie_consent", granted ? "granted" : "denied");
    setShow(false);

    if (granted) {
      window.dataLayer = window.dataLayer || [];
      function gtag(_key: string, _action: string, _config: Record<string, string>){
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      }
      gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_user_data': 'granted',
        'ad_personalization': 'granted',
        'analytics_storage': 'granted'
      });
      window.dataLayer.push({ event: "consent_update", consent: "granted" });
    }
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] border-t border-steel-line bg-void/95 p-4 shadow-2xl backdrop-blur-md md:bottom-5 md:left-auto md:right-5 md:max-w-sm md:rounded-sm md:border md:border-steel-line/50">
      <h3 className="mb-2 text-sm font-700 text-paper">نحترم خصوصيتك</h3>
      <p className="mb-4 text-xs leading-relaxed text-paper-dim">
        نستخدم ملفات تعريف الارتباط لتحسين تجربتك وفهم كيفية استخدامك للموقع. يمكنك قبول أو رفض استخدامها للأغراض الإعلانية والتحليلية.
      </p>
      <div className="flex items-center gap-3">
        <button 
          onClick={() => handleConsent(true)}
          className="flex-1 bg-signal-500 py-2 text-xs font-700 text-white transition-colors hover:bg-signal-400"
        >
          موافق
        </button>
        <button 
          onClick={() => handleConsent(false)}
          className="flex-1 border border-steel-line/50 bg-transparent py-2 text-xs font-700 text-paper transition-colors hover:bg-steel-line/30"
        >
          رفض
        </button>
      </div>
    </div>
  );
}
