"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import StatusTag from "@/components/ui/StatusTag";
import { photoSrcSet, photoUrl } from "@/lib/media";
import { projectCategories, projects } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type Filter = (typeof projectCategories)[number];

export default function ProjectPortfolio() {
  const [filter, setFilter] = useState<Filter>("All projects");
  const reduceMotion = useReducedMotion();

  const visible = useMemo(
    () =>
      projects
        .filter((project) => filter === "All projects" || project.category === filter)
        .sort((a, b) => a.order - b.order),
    [filter],
  );

  return (
    <div>
      <div className="flex flex-col gap-5 border-t border-biscuit/[0.15] pt-5 lg:flex-row lg:items-center lg:justify-between">
        <div
          role="group"
          aria-label="Filter projects by research area"
          className="flex flex-wrap gap-2"
        >
          {projectCategories.map((category) => {
            const active = filter === category;
            return (
              <button
                key={category}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(category)}
                className={cn(
                  "border px-3.5 py-2 text-[0.8125rem] transition-[background-color,border-color,color] duration-300",
                  active
                    ? "border-brick bg-brick text-ivory"
                    : "border-biscuit/25 text-ivory/60 hover:border-biscuit/60 hover:text-ivory",
                )}
              >
                {category}
              </button>
            );
          })}
        </div>

        <p aria-live="polite" className="annotation text-biscuit/40">
          {String(visible.length).padStart(2, "0")} shown
        </p>
      </div>

      <motion.ul
        key={filter}
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, ease: EASE }}
        className="mt-14"
      >
        {visible.map((project, index) => {
          const reversed = index % 2 === 1;

          return (
            <li
              key={project.slug}
              className="group border-b border-biscuit/[0.12] py-12 first:pt-0 last:border-b-0 md:py-16"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-12"
              >
                <div className={cn("lg:col-span-7", reversed && "lg:order-2")}>
                  <div className="relative aspect-[16/11] overflow-hidden bg-navy/30">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={photoUrl(project.hero, 1400)}
                      srcSet={photoSrcSet(project.hero, [720, 1080, 1400, 1800])}
                      sizes="(min-width: 1024px) 56vw, 100vw"
                      alt={project.hero.alt}
                      width={project.hero.width}
                      height={project.hero.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover saturate-[0.94] transition-transform duration-[1100ms] ease-out group-hover:scale-[1.035]"
                    />
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink/[0.55] via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-40"
                    />
                    <span className="annotation absolute left-4 top-4 bg-ink/[0.45] px-2 py-1 text-biscuit/80 backdrop-blur-sm">
                      {String(index + 1).padStart(2, "0")} / {project.category}
                    </span>
                  </div>
                </div>

                <div className={cn("lg:col-span-5 lg:py-2", reversed && "lg:order-1")}>
                  <div className="flex items-center justify-between gap-4">
                    <StatusTag
                      label={project.status}
                      state={
                        project.status === "Documentation in preparation" ? "pending" : "active"
                      }
                    />
                    <span className="annotation text-biscuit/[0.35]">
                      SRD / {String(project.order).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-[clamp(2rem,3.6vw,3.25rem)] leading-[0.96] tracking-[-0.035em] text-ivory transition-transform duration-500 ease-out group-hover:translate-x-1">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/60">
                    {project.summary}
                  </p>

                  <span
                    aria-hidden
                    className="mt-7 block h-px w-12 bg-biscuit/25 transition-all duration-500 ease-out group-hover:w-24 group-hover:bg-brick-bright"
                  />

                  <span className="mt-5 inline-flex items-center gap-2 text-[0.875rem] text-biscuit">
                    Explore project
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.6}
                      aria-hidden
                      className="transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </motion.ul>

      {visible.length === 0 && (
        <p className="mt-14 border-t border-biscuit/[0.15] pt-6 text-[0.9375rem] text-ivory/[0.55]">
          No projects are published in this category yet.
        </p>
      )}
    </div>
  );
}
