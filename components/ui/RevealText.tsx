"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

type RevealTextProps = {
  lines: React.ReactNode[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  lineClassName?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
  id?: string;
};

/**
 * Masked, line-by-line headline reveal. Each line sits inside its own clipping
 * frame so the type rises into place rather than fading in.
 */
export default function RevealText({
  lines,
  as = "h2",
  className,
  lineClassName,
  delay = 0,
  stagger = 0.075,
  once = true,
  id,
}: RevealTextProps) {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as];

  return (
    <Tag
      id={id}
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once, amount: 0.05, margin: "0px 0px -6% 0px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: reduceMotion ? 0 : stagger, delayChildren: delay } },
      }}
    >
      {lines.map((line, index) => (
        <span
          key={index}
          className={cn("block overflow-hidden pb-[0.12em] -mb-[0.12em]", lineClassName)}
        >
          <motion.span
            className="block will-change-transform"
            variants={{
              hidden: reduceMotion ? { opacity: 0 } : { y: "118%" },
              visible: {
                y: "0%",
                opacity: 1,
                transition: { duration: reduceMotion ? 0.01 : 1.05, ease: EASE },
              },
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
