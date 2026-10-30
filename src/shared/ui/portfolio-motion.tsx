"use client";

import { useEffect, useRef, type ReactNode } from "react";

export function PortfolioMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = root.current;
    if (!container) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    let frame = 0;
    let illuminated: HTMLElement | null = null;

    const resetSpotlight = () => {
      if (frame) cancelAnimationFrame(frame);
      frame = 0;
      illuminated?.removeAttribute("data-pointer-active");
      illuminated = null;
    };
    const setupReveal = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      resetSpotlight();
      if (reduced.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const element = entry.target as HTMLElement;
          const animation = element.animate(
            [{ opacity: 0, transform: "translateY(22px)" }, { opacity: 1, transform: "translateY(0)" }],
            { duration: 600, delay: Number(element.dataset.motionDelay ?? 0), easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "backwards" }
          );
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation)).catch(() => {});
          observer?.unobserve(element);
        });
      }, { threshold: 0.08 });
      container.querySelectorAll("[data-reveal]").forEach((element) => observer?.observe(element));
    };
    const move = (event: PointerEvent) => {
      if (reduced.matches || !finePointer.matches || event.pointerType !== "mouse") return;
      const target = event.target instanceof Element ? event.target.closest<HTMLElement>("[data-spotlight]") : null;
      if (target !== illuminated) {
        resetSpotlight();
        illuminated = target;
      }
      if (!target) return;
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const bounds = target.getBoundingClientRect();
        target.style.setProperty("--pointer-x", `${event.clientX - bounds.left}px`);
        target.style.setProperty("--pointer-y", `${event.clientY - bounds.top}px`);
        target.setAttribute("data-pointer-active", "");
        frame = 0;
      });
    };
    setupReveal();
    reduced.addEventListener("change", setupReveal);
    finePointer.addEventListener("change", resetSpotlight);
    container.addEventListener("pointermove", move, { passive: true });
    container.addEventListener("pointerleave", resetSpotlight);
    return () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      resetSpotlight();
      reduced.removeEventListener("change", setupReveal);
      finePointer.removeEventListener("change", resetSpotlight);
      container.removeEventListener("pointermove", move);
      container.removeEventListener("pointerleave", resetSpotlight);
    };
  }, []);

  return (
    <div ref={root} className="space-y-12">
      {children}
      <div aria-hidden="true" className="reading-progress" />
    </div>
  );
}
