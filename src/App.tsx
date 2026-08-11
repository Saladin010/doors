import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionConfig } from "framer-motion";
import { useReducedMotion } from "@/lib/hooks";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsApp from "@/components/WhatsApp";
import Home from "@/pages/Home";
import Doors from "./pages/Doors";
import Accessories from "./pages/Accessories";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import CookieConsent from "./components/CookieConsent";

gsap.registerPlugin(ScrollTrigger);

// Utility component to handle hash scrolling and scroll restoration on route change
function ScrollHandler({ lenis }: { lenis: Lenis | null }) {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!lenis) return;
    
    // If there's a hash, let the custom hash scroller in App handle it.
    // If no hash, scroll to top when pathname changes.
    if (!hash) {
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, hash, lenis]);

  return null;
}

export default function App() {
  const reduced = useReducedMotion();
  let lenisInstance: Lenis | null = null;

  useEffect(() => {
    if (reduced) {
      ScrollTrigger.refresh();
      return;
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(raf);
    gsap.ticker.lagSmoothing(0);

    // Smooth in-page anchor navigation (account for fixed header)
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const a = target?.closest('a[href^="#"], a[href^="/#"]') as HTMLAnchorElement | null;
      if (!a) return;
      
      const href = a.getAttribute("href") || "";
      const hashIndex = href.indexOf('#');
      if (hashIndex === -1) return;
      
      const id = href.substring(hashIndex);
      if (id === "#") return;
      
      // If the link is for the home page (e.g., /#about), but we're on /doors, let default behavior route us there first
      const isHomeLink = href.startsWith('/#') || href.startsWith('#');
      if (isHomeLink && window.location.pathname !== "/") {
        // Let React Router handle the route change; ScrollHandler / native browser will handle scrolling
        return;
      }

      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el as HTMLElement, { offset: -64, duration: 1.2 });
      }
    };
    
    document.addEventListener("click", onClick);

    // Refresh ScrollTrigger once layout / images settle.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = window.setTimeout(refresh, 900);

    return () => {
      gsap.ticker.remove(raf);
      document.removeEventListener("click", onClick);
      window.removeEventListener("load", refresh);
      window.clearTimeout(t);
      lenis.destroy();
    };
  }, [reduced]);

  // UTM Capture
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const utms = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    utms.forEach(utm => {
      const val = params.get(utm);
      if (val) {
        sessionStorage.setItem(utm, val);
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <ScrollHandler lenis={lenisInstance} />
      <MotionConfig reducedMotion="user">
        <div className="relative bg-void">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/doors" element={<Doors />} />
            <Route path="/accessories" element={<Accessories />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
          <Footer />
          <WhatsApp />
          <CookieConsent />
        </div>
      </MotionConfig>
    </BrowserRouter>
  );
}
