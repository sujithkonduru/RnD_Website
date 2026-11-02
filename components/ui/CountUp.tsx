"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";

type CountUpProps = {
  value: number | null;
  suffix?: string;
  className?: string;
  placeholderLabel?: string;
};

/**
 * Counts a verified figure once when it enters the viewport. Unverified figures
 * render an explicit placeholder instead of a fabricated number.
 */
export default function CountUp({
  value,
  suffix = "",
  className,
  placeholderLabel = "Awaiting verified figure",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || value === null) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      element.textContent = `${value}${suffix}`;
      return;
    }

    const counter = { current: 0 };
    let tween: gsap.core.Tween | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        tween = gsap.to(counter, {
          current: value,
          duration: 1.6,
          ease: "power2.out",
          onUpdate: () => {
            element.textContent = `${Math.round(counter.current)}${suffix}`;
          },
          onComplete: () => {
            element.textContent = `${value}${suffix}`;
          },
        });
      },
      { threshold: 0.4 },
    );

    element.textContent = `0${suffix}`;
    observer.observe(element);

    return () => {
      observer.disconnect();
      tween?.kill();
    };
  }, [value, suffix]);

  if (value === null) {
    return (
      <span className={cn("inline-flex items-baseline gap-3", className)}>
        <span aria-hidden className="text-[0.42em] tracking-[0.02em] text-biscuit/45">
          TBC
        </span>
        <span aria-hidden className="h-px w-10 bg-biscuit/25" />
        <span className="sr-only">{placeholderLabel}</span>
      </span>
    );
  }

  return (
    <span className={className}>
      <span ref={ref} aria-hidden>
        {value}
        {suffix}
      </span>
      <span className="sr-only">
        {value}
        {suffix}
      </span>
    </span>
  );
}
