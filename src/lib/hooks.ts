import { useEffect, useRef, useState } from "react";

/* Reduced-motion preference — disable choreographed motion everywhere. */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

/* Mobile detection for swapping heavy pinned scenes for native-friendly ones. */
export function useIsMobile(breakpoint = 768): boolean {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint}px)`);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [breakpoint]);
  return mobile;
}

type CountUpOptions = {
  target: number;
  duration?: number;
  decimals?: number;
  start?: boolean;
};

/* Scroll-linked count-up. Eased via rAF; jumps instantly under reduced motion. */
export function useCountUp({ target, duration = 1600, decimals = 0, start = true }: CountUpOptions) {
  const reduced = useReducedMotion();
  const [value, setValue] = useState(0);
  const raf = useRef<number | null>(null);

  useEffect(() => {
    if (!start) return;
    if (reduced) {
      setValue(target);
      return;
    }
    let startTime: number | null = null;
    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3);
    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const p = Math.min((now - startTime) / duration, 1);
      setValue(target * easeOut(p));
      if (p < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, [target, duration, start, reduced]);

  const factor = Math.pow(10, decimals);
  return decimals > 0
    ? (value / factor).toFixed(decimals)
    : Math.round(value).toLocaleString("en-US");
}
