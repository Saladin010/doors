import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";

interface ImageCatalogPageProps {
  title: string;
  description: string;
  images: string[];
  imageAltPrefix?: string;
}

export default function ImageCatalogPage({ title, description, images, imageAltPrefix = "صورة" }: ImageCatalogPageProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Close lightbox on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight" && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : prev));
      }
      if (e.key === "ArrowLeft" && lightboxIndex !== null) {
        setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : prev));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxIndex, images.length]);

  return (
    <main className="min-h-screen pt-24 pb-16 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        
        {/* Page Header */}
        <div className="mb-12 border-b border-steel-line pb-8 md:mb-16">
          <h1 className="text-3xl font-700 text-paper md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-2xl text-paper-dim md:text-lg">{description}</p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              transition={{ duration: 0.5, delay: (idx % 4) * 0.1 }}
              className="group relative cursor-pointer"
              onClick={() => setLightboxIndex(idx)}
            >
              {/* Corner brackets motif */}
              <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-signal-500/50 transition-colors group-hover:border-signal-400" />
              <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-signal-500/50 transition-colors group-hover:border-signal-400" />
              <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-signal-500/50 transition-colors group-hover:border-signal-400" />
              <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-signal-500/50 transition-colors group-hover:border-signal-400" />
              
              <div className="overflow-hidden bg-steel-line/20 p-2">
                <img
                  src={src}
                  alt={`${imageAltPrefix} ${idx + 1}`}
                  loading="lazy"
                  className="aspect-[3/4] w-full object-cover transition-all duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          ))}
          
          {images.length === 0 && (
            <div className="col-span-full py-12 text-center text-paper-dim">
              سيتم إضافة الصور قريباً.
            </div>
          )}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-void/95 backdrop-blur-xl"
          >
            {/* Top Bar */}
            <div className="absolute left-0 right-0 top-0 flex items-center justify-between p-4 md:p-6">
              <div className="mono text-sm text-paper-dim">
                {lightboxIndex + 1} / {images.length}
              </div>
              <button
                onClick={() => setLightboxIndex(null)}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-steel-line/20 text-paper transition-colors hover:bg-steel-line"
                aria-label="إغلاق"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-5 w-5" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Main Image */}
            <div className="relative flex h-[80vh] w-full max-w-4xl items-center justify-center p-4">
              <motion.img
                key={lightboxIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                src={images[lightboxIndex]}
                alt={`${imageAltPrefix} ${lightboxIndex + 1}`}
                className="max-h-full max-w-full object-contain shadow-2xl"
              />
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-y-0 left-4 flex items-center md:left-8">
              <button
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full bg-steel-line/20 text-paper backdrop-blur transition-all hover:bg-signal-500",
                  lightboxIndex === 0 && "pointer-events-none opacity-30"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : prev));
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            
            <div className="absolute inset-y-0 right-4 flex items-center md:right-8">
              <button
                className={cn(
                  "flex h-12 w-12 items-center justify-center rounded-full bg-steel-line/20 text-paper backdrop-blur transition-all hover:bg-signal-500",
                  lightboxIndex === images.length - 1 && "pointer-events-none opacity-30"
                )}
                onClick={(e) => {
                  e.stopPropagation();
                  setLightboxIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : prev));
                }}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="h-6 w-6" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
