"use client";

import { motion, useReducedMotion } from "motion/react";
import { photoSrcSet, photoUrl, type Photo } from "@/lib/media";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type FigureProps = {
  photo: Photo;
  sizes?: string;
  aspect?: string;
  className?: string;
  imgClassName?: string;
  reveal?: boolean;
  priority?: boolean;
  caption?: string;
  annotation?: string;
  tone?: "dark" | "light";
  overlay?: React.ReactNode;
};

/**
 * Photographic figure with a curtain reveal.
 *
 * The image is never clipped: a solid panel wipes away above it instead. Clipping
 * the image itself stops the browser's lazy loader from ever fetching it, which
 * previously left whole bands empty.
 */
export default function Figure({
  photo,
  sizes = "(min-width: 1024px) 46vw, 100vw",
  aspect = "aspect-[4/3]",
  className,
  imgClassName,
  reveal = true,
  priority = false,
  caption,
  annotation,
  tone = "dark",
  overlay,
}: FigureProps) {
  const reduceMotion = useReducedMotion();
  const light = tone === "light";
  const showReveal = reveal && !reduceMotion;

  return (
    <figure className={cn("group relative", className)}>
      <div className={cn("relative overflow-hidden bg-navy/30", aspect)}>
        <motion.div
          className="h-full w-full"
          initial={showReveal ? { scale: 1.055 } : false}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: showReveal ? 1.6 : 0.01, ease: EASE }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={photoUrl(photo, 1600)}
            srcSet={photoSrcSet(photo)}
            sizes={sizes}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading={priority ? "eager" : "lazy"}
            decoding={priority ? "sync" : "async"}
            fetchPriority={priority ? "high" : "auto"}
            className={cn("h-full w-full object-cover saturate-[0.94] contrast-[1.02]", imgClassName)}
          />
        </motion.div>

        {showReveal && (
          <motion.span
            aria-hidden
            className={cn("pointer-events-none absolute inset-0", light ? "bg-ivory" : "bg-deep")}
            style={{ transformOrigin: "top" }}
            initial={{ scaleY: 1 }}
            whileInView={{ scaleY: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 1.05, ease: EASE }}
          />
        )}

        {overlay}

        {annotation && (
          <span
            className={cn(
              "annotation absolute bottom-3 left-3 z-20 px-2 py-1 backdrop-blur-sm",
              light ? "bg-ivory/70 text-deep/70" : "bg-ink/[0.45] text-biscuit/80",
            )}
          >
            {annotation}
          </span>
        )}
      </div>

      {caption && (
        <figcaption
          className={cn(
            "mt-3 flex items-center gap-3",
            light ? "text-deep/50" : "text-sage/70",
          )}
        >
          <span aria-hidden className={cn("h-px w-6", light ? "bg-deep/25" : "bg-sage/40")} />
          <span className="annotation">{caption}</span>
        </figcaption>
      )}
    </figure>
  );
}
