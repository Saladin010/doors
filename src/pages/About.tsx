import { motion } from "framer-motion";
import { aboutDocuments } from "@/lib/data";

export default function About() {
  return (
    <main className="min-h-screen pt-24 pb-16 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Page Header */}
        <div className="mb-12 border-b border-steel-line pb-8 md:mb-16">
          <h1 className="text-3xl font-700 text-paper md:text-5xl">عن الشركة</h1>
          <p className="mt-4 max-w-2xl text-paper-dim md:text-lg">
            اكتشف المزيد عن شركة سمارت لتصنيع ابواب الطوارئ من خلال ملفات تعريف الشركة وكتالوجات المنتجات الخاصة بنا.
          </p>
        </div>

        {/* Document Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutDocuments.map((doc, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative flex flex-col bg-steel-line/10 p-6 transition-colors hover:bg-steel-line/20"
            >
              {/* Corner brackets motif */}
              <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-signal-500/50 transition-colors group-hover:border-signal-500" />
              <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-signal-500/50 transition-colors group-hover:border-signal-500" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-signal-500/50 transition-colors group-hover:border-signal-500" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-signal-500/50 transition-colors group-hover:border-signal-500" />
              
              {/* PDF Icon / Thumbnail */}
              <div className="mb-6 flex items-center justify-center rounded-sm bg-void p-8 shadow-inner ring-1 ring-steel-line/50">
                {doc.thumbnail ? (
                  <img src={doc.thumbnail} alt={doc.title} className="h-32 w-auto object-contain" />
                ) : (
                  <svg 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    className="h-16 w-16 text-signal-500"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                  </svg>
                )}
              </div>

              {/* Title */}
              <h2 className="mb-6 text-lg font-700 text-paper">{doc.title}</h2>

              {/* Actions */}
              <div className="mt-auto flex items-center gap-3">
                <a 
                  href={doc.file} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'pdf_view', file_name: doc.title }); }}
                  className="flex flex-1 items-center justify-center gap-2 bg-signal-500 px-4 py-2 text-sm font-700 text-white transition-colors hover:bg-signal-400"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  عرض
                </a>
                <a 
                  href={doc.file} 
                  download
                  onClick={() => { window.dataLayer = window.dataLayer || []; window.dataLayer.push({ event: 'pdf_download', file_name: doc.title }); }}
                  className="flex flex-1 items-center justify-center gap-2 bg-steel-line/30 px-4 py-2 text-sm font-700 text-paper transition-colors hover:bg-steel-line/50"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-4 w-4" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                  </svg>
                  تحميل
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
