import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Logo } from "./Logo";
import { CTAButton } from "./primitives";
import ThemeToggle from "./ThemeToggle";
import { navLinks } from "@/lib/data";
import { cn } from "@/utils/cn";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open
          ? "border-b border-steel-line bg-void/90 backdrop-blur-md"
          : "border-b border-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-[4.5rem] md:px-8">
        <Link to="/" aria-label="سمارت — الرئيسية">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              className="group relative text-sm font-500 text-paper-dim transition-colors hover:text-paper"
            >
              {l.ar}
              <span className="absolute -bottom-1.5 right-0 h-px w-0 bg-signal-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <CTAButton href="/#quote" className="px-5 py-2.5 text-[0.8rem]">
            اطلب عرض سعر
          </CTAButton>
        </div>

        {/* mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center md:hidden"
          aria-label="القائمة"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="relative block h-3 w-6">
            <span className={cn("absolute left-0 top-0 h-px w-6 bg-paper transition-all", open && "top-1.5 rotate-45")} />
            <span className={cn("absolute bottom-0 left-0 h-px w-6 bg-paper transition-all", open && "bottom-1.5 -rotate-45")} />
          </span>
        </button>
      </div>

      {/* mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-steel-line bg-void/95 backdrop-blur-md transition-all duration-300 md:hidden",
          open ? "max-h-96" : "max-h-0 border-t-transparent"
        )}
      >
        <nav className="flex flex-col px-5 py-3">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              to={l.href}
              onClick={() => setOpen(false)}
              className="border-b border-steel-line/50 py-3 text-sm font-500 text-paper-dim last:border-0"
            >
              {l.ar}
            </Link>
          ))}
          <div className="flex items-center justify-between border-t border-steel-line/50 pt-3 mt-1">
            <span className="text-sm font-500 text-paper-dim">المظهر</span>
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
