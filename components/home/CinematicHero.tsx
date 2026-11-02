"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { hero } from "@/lib/data";
import { heroVideo, videoPosterUrl } from "@/lib/media";
import { cn } from "@/lib/utils";

export default function CinematicHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  /* Only fetch the film when it will actually be watched. */
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const connection = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    const slowConnection =
      connection?.saveData ||
      (connection?.effectiveType ? /(^|-)2g$/.test(connection.effectiveType) : false);

    if (reduceMotion || slowConnection) return;

    const query = window.matchMedia("(max-width: 900px)");
    setVideoSrc(query.matches ? heroVideo.mobile : heroVideo.desktop);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    gsap.registerPlugin(ScrollTrigger);

    const context = gsap.context(() => {
      if (reduceMotion) return;

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline
        .from("[data-hero-eyebrow]", { autoAlpha: 0, y: 8, duration: 0.6 }, 0.05)
        .from(
          "[data-hero-line]",
          { yPercent: 112, duration: 1.15, stagger: 0.09, ease: "expo.out" },
          0.16,
        )
        .from("[data-hero-lead]", { autoAlpha: 0, y: 14, duration: 0.8 }, 0.72)
        .from("[data-hero-cta]", { autoAlpha: 0, y: 12, duration: 0.7, stagger: 0.07 }, 0.86)
        .from("[data-hero-meta]", { autoAlpha: 0, y: 10, duration: 0.7 }, 1)
        .from("[data-hero-rail]", { autoAlpha: 0, duration: 0.9 }, 1.05);

      gsap.to("[data-hero-content]", {
        yPercent: -9,
        autoAlpha: 0.2,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom 40%",
          scrub: 0.5,
        },
      });

      gsap.to("[data-hero-media]", {
        scale: 1.1,
        yPercent: -3,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "bottom top",
          scrub: 0.7,
        },
      });
    }, section);

    return () => context.revert();
  }, []);

  /* Autoplay is a courtesy, never a requirement. */
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoSrc) return;
    const play = () => {
      video.play().catch(() => setVideoReady(false));
    };
    video.addEventListener("canplay", play, { once: true });
    play();
    return () => video.removeEventListener("canplay", play);
  }, [videoSrc]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[100dvh] flex-col overflow-hidden bg-ink"
    >
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
        <div data-hero-media className="absolute inset-0 will-change-transform">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={videoPosterUrl(1920)}
            alt=""
            width={heroVideo.width}
            height={heroVideo.height}
            fetchPriority="high"
            decoding="sync"
            className="h-full w-full object-cover object-center"
          />
          {videoSrc && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              autoPlay
              preload="metadata"
              disablePictureInPicture
              tabIndex={-1}
              poster={videoPosterUrl(1280)}
              onCanPlay={() => setVideoReady(true)}
              onError={() => setVideoReady(false)}
              className={cn(
                "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-[1400ms] ease-out",
                videoReady ? "opacity-100" : "opacity-0",
              )}
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          )}
        </div>
        <div className="absolute inset-0 gradient-hero-overlay" />
        <div className="absolute inset-0 bg-[radial-gradient(130%_100%_at_20%_45%,transparent_10%,rgba(22,41,43,0.45)_100%)]" />
      </div>

      {/* Technical rail, desktop only */}
      <div
        data-hero-rail
        aria-hidden
        className="pointer-events-none absolute right-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-4 xl:flex"
      >
        <span className="h-14 w-px bg-biscuit/25" />
        <span className="annotation writing-vertical text-biscuit/[0.55]">
          Applied research / Industry / Education
        </span>
        <span className="h-14 w-px bg-biscuit/25" />
      </div>

      <div className="u-container flex flex-1 flex-col justify-end pb-8 pt-[calc(4.5rem+5rem)] sm:pb-10 lg:pb-12">
        <div data-hero-content className="max-w-[64rem]">
          <div data-hero-eyebrow className="flex items-center gap-3">
            <span aria-hidden className="h-1.5 w-1.5 animate-pulse-dot bg-brick-bright" />
            <p className="annotation text-biscuit/[0.85]">{hero.eyebrow}</p>
          </div>

          <h1 id="hero-heading" className="t-hero mt-7 max-w-[76rem] text-ivory text-shadow-deep">
            <span className="block overflow-hidden pb-[0.13em] -mb-[0.13em]">
              <span data-hero-line className="block">
                {hero.lines[0]}
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.13em] -mb-[0.13em]">
              <span data-hero-line className="block">
                Solving <span className="text-biscuit">{hero.highlight}</span> Problems.
              </span>
            </span>
          </h1>

          <p data-hero-lead className="t-lead mt-7 max-w-xl text-ivory/[0.78]">
            {hero.lead}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              data-hero-cta
              href={hero.primaryCta.href}
              className="btn btn-primary group"
            >
              {hero.primaryCta.label}
              <ArrowUpRight size={16} strokeWidth={1.6} data-shift aria-hidden />
            </Link>
            <Link
              data-hero-cta
              href={hero.secondaryCta.href}
              className="btn btn-outline group"
            >
              {hero.secondaryCta.label}
              <ArrowUpRight size={16} strokeWidth={1.6} data-shift aria-hidden />
            </Link>
          </div>
        </div>
      </div>

      <div className="u-container relative">
        <div
          data-hero-meta
          className="flex flex-wrap items-end justify-between gap-6 border-t border-biscuit/[0.18] py-6"
        >
          <dl className="flex flex-wrap gap-x-12 gap-y-4">
            {hero.meta.map((item) => (
              <div key={item.label}>
                <dt className="annotation text-biscuit/50">{item.label}</dt>
                <dd className="mt-1 text-[0.9375rem] text-ivory/[0.85]">{item.value}</dd>
              </div>
            ))}
          </dl>

          <div className="flex items-center gap-4">
            <span className="annotation text-biscuit/50">Scroll</span>
            <span
              aria-hidden
              className="relative hidden h-10 w-px overflow-hidden bg-biscuit/20 sm:block"
            >
              <span className="absolute inset-x-0 top-0 h-1/2 animate-cue-slide bg-biscuit/80" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
