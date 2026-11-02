"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import RevealText from "@/components/ui/RevealText";
import SectionMarker from "@/components/ui/SectionMarker";
import { lifecycle, lifecycleNote } from "@/lib/data";
import { photoSrcSet, photoUrl } from "@/lib/media";
import { cn } from "@/lib/utils";

export default function ResearchLifecycle() {
  const listRef = useRef<HTMLOListElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(0);

  /* Sticky visual tracks whichever stage the reader is on. */
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;
    const stages = Array.from(list.querySelectorAll<HTMLElement>("[data-stage]"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number((entry.target as HTMLElement).dataset.index);
          if (!Number.isNaN(index)) setActive(index);
        });
      },
      { rootMargin: "-44% 0px -44% 0px" },
    );

    stages.forEach((stage) => observer.observe(stage));
    return () => observer.disconnect();
  }, []);

  /* Scroll-scrubbed progress rail. */
  useEffect(() => {
    const list = listRef.current;
    const fill = progressRef.current;
    if (!list || !fill) return;

    gsap.registerPlugin(ScrollTrigger);
    const media = gsap.matchMedia();

    media.add(
      {
        animate: "(prefers-reduced-motion: no-preference)",
        still: "(prefers-reduced-motion: reduce)",
      },
      ({ conditions }) => {
        if (conditions?.still) {
          gsap.set(fill, { scaleY: 1 });
          return;
        }
        const tween = gsap.fromTo(
          fill,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: list,
              start: "top 65%",
              end: "bottom 75%",
              scrub: 0.4,
            },
          },
        );
        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      },
    );

    return () => media.revert();
  }, []);

  return (
    <section
      id="process"
      aria-labelledby="process-heading"
      className="scroll-mt-24 bg-deep py-24 md:py-32 lg:py-36"
    >
      <div className="u-container">
        <SectionMarker index="02" label="Research process" note="Lifecycle / 7 stages" />

        <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <RevealText
              as="h2"
              id="process-heading"
              lines={["From a problem statement", "to a practical solution."]}
              className="t-h2 max-w-[17ch] text-ivory"
            />

            <p className="t-lead mt-6 max-w-md text-ivory/[0.62]">
              Seven stages, applied proportionally. A feasibility question does not need a
              prototype; a prototype does not count until it has been measured.
            </p>

            <div className="mt-10 hidden items-center gap-6 lg:flex">
              <p className="font-display text-[2.5rem] leading-none tracking-[-0.04em] text-biscuit">
                {String(active + 1).padStart(2, "0")}
                <span className="ml-2 font-mono text-[0.75rem] tracking-[0.1em] text-sage/60">
                  / 07
                </span>
              </p>
              <div className="relative h-px flex-1 bg-biscuit/[0.15]">
                <span
                  className="absolute inset-y-0 left-0 bg-brick-bright transition-[width] duration-500 ease-out"
                  style={{ width: `${((active + 1) / lifecycle.length) * 100}%` }}
                />
              </div>
            </div>

            <div className="relative mt-8 lg:mt-10">
              <span
                aria-hidden
                className="absolute left-0 top-0 hidden h-full w-px bg-biscuit/[0.12] lg:block"
              >
                <span
                  ref={progressRef}
                  className="block h-full w-full origin-top bg-brick-bright"
                />
              </span>

              <ol ref={listRef} className="lg:pl-8">
                {lifecycle.map((stage, index) => (
                  <li
                    key={stage.id}
                    data-stage
                    data-index={index}
                    className={cn(
                      "border-t border-biscuit/[0.12] py-7 transition-opacity duration-500 lg:opacity-40",
                      index === active && "lg:opacity-100",
                    )}
                  >
                    <div className="flex gap-4 sm:gap-6">
                      <span
                        className={cn(
                          "annotation pt-1.5 transition-colors duration-500",
                          index === active ? "text-brick-bright" : "text-biscuit/[0.35]",
                        )}
                      >
                        {stage.index}
                      </span>
                      <div className="min-w-0 flex-1">
                        <h3 className="t-h3 text-ivory">{stage.title}</h3>
                        <p className="t-small mt-3 max-w-md text-ivory/[0.65]">{stage.body}</p>

                        <div className="mt-5 lg:hidden">
                          <div className="relative aspect-[16/10] overflow-hidden">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={photoUrl(stage.media, 900)}
                              srcSet={photoSrcSet(stage.media, [480, 720, 900])}
                              sizes="(min-width: 640px) 70vw, 92vw"
                              alt={stage.media.alt}
                              width={stage.media.width}
                              height={stage.media.height}
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="border-t border-biscuit/[0.12]" />
            </div>
          </div>

          {/* Sticky stage visual */}
          <div className="hidden lg:col-span-6 lg:block">
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] max-h-[calc(100dvh-13rem)] overflow-hidden bg-ink">
                {lifecycle.map((stage, index) => (
                  <div
                    key={stage.id}
                    aria-hidden={index !== active}
                    className={cn(
                      "absolute inset-0 transition-[opacity,transform] duration-[900ms] ease-out",
                      index === active ? "scale-100 opacity-100" : "scale-[1.04] opacity-0",
                    )}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photoUrl(stage.media, 1200)}
                      srcSet={photoSrcSet(stage.media, [720, 1080, 1400])}
                      sizes="(min-width: 1024px) 44vw, 100vw"
                      alt={stage.media.alt}
                      width={stage.media.width}
                      height={stage.media.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/[0.85] via-transparent to-ink/25"
                />

                <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-5">
                  <span className="annotation bg-ink/[0.45] px-2 py-1 text-biscuit/[0.85] backdrop-blur-sm">
                    Stage {lifecycle[active].index} / 07
                  </span>
                  <span className="annotation text-biscuit/[0.65]">
                    {lifecycle[active].annotation}
                  </span>
                </div>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-end gap-1.5">
                    {lifecycle.map((stage, index) => (
                      <span
                        key={stage.id}
                        className={cn(
                          "h-8 w-px transition-all duration-500",
                          index <= active ? "bg-biscuit/80" : "bg-biscuit/20",
                          index === active && "h-12 w-[2px] bg-brick-bright",
                        )}
                      />
                    ))}
                    <span className="annotation ml-auto text-biscuit/60">
                      {lifecycle[active].title}
                    </span>
                  </div>
                </div>
              </div>

              <p className="annotation mt-4 text-sage/60">
                Sticky visual — one frame per stage as you scroll
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-biscuit/[0.15] pt-6 sm:flex-row sm:items-start sm:gap-10">
          <p className="annotation shrink-0 text-biscuit/[0.45]">Note</p>
          <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-ivory/50">
            {lifecycleNote}
          </p>
        </div>
      </div>
    </section>
  );
}
