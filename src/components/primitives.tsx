import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { useReducedMotion } from "@/lib/hooks";

/* LTR-isolated technical text (numerals, codes, measurements) inside RTL flow. */
export function Mono({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span className={cn("mono text-paper-dim", className)} dir="ltr">
      {children}
    </span>
  );
}

/* Section kicker: mono index + Arabic label + hairline. */
export function Kicker({
  index,
  children,
  className,
}: {
  index: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <span className="mono text-[0.7rem] font-500 uppercase tracking-[0.3em] text-signal-500" dir="ltr">
        {index}
      </span>
      <span className="h-px w-8 bg-steel-line" />
      <span className="text-sm font-500 tracking-wide text-paper-dim">{children}</span>
    </div>
  );
}

/* Corner-bracket framing — the site's visual signature motif. */
export function CornerFrame({
  children,
  className,
  color = "signal",
}: {
  children: ReactNode;
  className?: string;
  color?: "signal" | "paper";
}) {
  const c = color === "signal" ? "border-signal-500" : "border-paper-dim";
  return (
    <div className={cn("relative", className)}>
      <span className={cn("pointer-events-none absolute left-0 top-0 h-3.5 w-3.5 border-l border-t", c)} />
      <span className={cn("pointer-events-none absolute right-0 top-0 h-3.5 w-3.5 border-r border-t", c)} />
      <span className={cn("pointer-events-none absolute bottom-0 left-0 h-3.5 w-3.5 border-b border-l", c)} />
      <span className={cn("pointer-events-none absolute bottom-0 right-0 h-3.5 w-3.5 border-b border-r", c)} />
      {children}
    </div>
  );
}

/* Reveal-on-scroll wrapper — cheap GPU transforms only. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const reduced = useReducedMotion();
  const variants: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : y },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay } },
  };
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-10% 0px" }}
    >
      {children}
    </motion.div>
  );
}

/* CTA buttons — primary (signal fill) / secondary (outline only). Sharp corners. */
export function CTAButton({
  children,
  variant = "primary",
  href,
  onClick,
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
  href?: string;
  onClick?: () => void;
  className?: string;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-600 tracking-wide transition-colors";
  const styles =
    variant === "primary"
      ? "bg-signal-500 text-void hover:bg-signal-400"
      : "border border-steel-line text-paper hover:border-paper";
  const inner = (
    <motion.span
      whileHover={useReducedMotion() ? undefined : { y: -1 }}
      whileTap={useReducedMotion() ? undefined : { scale: 0.97 }}
      className={cn(base, styles, className)}
    >
      {children}
    </motion.span>
  );
  if (href) {
    return (
      <a href={href} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return <button onClick={onClick}>{inner}</button>;
}

/* Blueprint grid backdrop — SVG hairlines at low opacity. */
export function BlueprintGrid({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute inset-0 blueprint-grid opacity-[0.04]",
        className
      )}
    />
  );
}
