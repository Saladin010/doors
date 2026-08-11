import { Mail, MapPin, Phone } from "lucide-react";
import { Logo } from "./Logo";

const socials = [
  {
    label: "Facebook",
    path: "M14 9h3l.4-3H14V4.5c0-.9.3-1.5 1.6-1.5H17V.3C16.7.3 15.6.2 14.4.2 11.9.2 10.2 1.7 10.2 4.4V6H7.3v3h2.9v8h3.8V9Z",
    href: "https://www.facebook.com/share/19AeRhbUg8/",
  },
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.86s0 3.6-.07 4.86c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.86.07s-3.6 0-4.86-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.43-.36-1.06-.41-2.23C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.86c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.4 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.52.01-4.76.07-.9.04-1.38.19-1.7.31-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.12.32-.27.8-.31 1.7C3.21 8.48 3.2 8.85 3.2 12s.01 3.52.07 4.76c.04.9.19 1.38.31 1.7.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.12.8.27 1.7.31 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c.9-.04 1.38-.19 1.7-.31.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.12-.32.27-.8.31-1.7.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.04-.9-.19-1.38-.31-1.7a2.85 2.85 0 0 0-.69-1.06 2.85 2.85 0 0 0-1.06-.69c-.32-.12-.8-.27-1.7-.31C15.52 4.01 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 12 16.94 4.94 4.94 0 0 1 12 7.06Zm0 1.8a3.14 3.14 0 1 0 0 6.28 3.14 3.14 0 0 0 0-6.28Zm5.13-.9a1.15 1.15 0 1 1-2.3 0 1.15 1.15 0 0 1 2.3 0Z",
    href: "https://www.instagram.com/smartdoors6?igsh=cm41d3d6bHR4bXhm",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm6 0h3.8v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.5c0-1.31-.02-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21H9V9Z",
    href: "#",
  },
];
import { contact, navLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative border-t border-steel-line bg-graphite-900">
      <div className="pointer-events-none absolute inset-0 blueprint-grid opacity-[0.03]" />
      <div className="relative mx-auto max-w-7xl px-5 py-14 md:px-8 md:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {/* brand */}
          <div className="col-span-2 md:col-span-1">
            <Logo />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper-dim">
              تُعد شركة سمارت لتصنيع ابواب الطوارئ من الشركات الرائدة في تصنيع وتوريد وتركيب الأبواب المقاومة للحريق وأبواب الطوارئ.
            </p>
          </div>

          {/* links */}
          <div>
            <h4 className="mono mb-4 text-[0.6rem] uppercase tracking-[0.25em] text-signal-500" dir="ltr">
              QUICK LINKS
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-paper-dim transition-colors hover:text-paper">
                    {l.ar}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* contact */}
          <div>
            <h4 className="mono mb-4 text-[0.6rem] uppercase tracking-[0.25em] text-signal-500" dir="ltr">
              CONTACT
            </h4>
            <ul className="space-y-3 text-sm text-paper-dim">
              <li>
                <a 
                  href={contact.phoneHref} 
                  onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'phone_click' }); }}
                  className="mono flex items-center gap-2 hover:text-paper" 
                  dir="ltr"
                >
                  <Phone className="h-3.5 w-3.5 shrink-0" /> {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="mono flex items-center gap-2 break-all hover:text-paper" dir="ltr">
                  <Mail className="h-3.5 w-3.5 shrink-0" /> {contact.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0" /> {contact.address}
              </li>
            </ul>
          </div>

          {/* social */}
          <div>
            <h4 className="mono mb-4 text-[0.6rem] uppercase tracking-[0.25em] text-signal-500" dir="ltr">
              FOLLOW
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-9 w-9 items-center justify-center border border-steel-line text-paper-dim transition-colors hover:border-signal-500 hover:text-signal-500"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-steel-line pt-6 md:flex-row">
          <p className="mono text-[0.65rem] tracking-[0.2em] text-paper-dim" dir="ltr">
            © 2026 SMART DOORS — ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="text-[0.75rem] text-paper-dim hover:text-signal-500 transition-colors">
              سياسة الخصوصية
            </a>
            <p className="mono text-[0.7rem] font-700 tracking-wide text-signal-500" dir="rtl">
              توريد وتركيب لجميع أنحاء مصر
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
