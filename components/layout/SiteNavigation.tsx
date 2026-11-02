"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion, useScroll, useSpring } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { collaborationPaths, navLinks, site } from "@/lib/data";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function SiteNavigation() {
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [impactActive, setImpactActive] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Close the panel whenever the route changes. */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  /* Lock background scrolling and support Escape while the menu is open. */
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  /* Highlight "Impact" only while that chapter is actually on screen. */
  useEffect(() => {
    if (pathname !== "/") {
      setImpactActive(false);
      return;
    }
    const target = document.getElementById("impact");
    if (!target) return;
    const observer = new IntersectionObserver(
      ([entry]) => setImpactActive(entry.isIntersecting),
      { rootMargin: "-45% 0px -45% 0px" },
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/#impact") return impactActive;
    if (href === "/") return pathname === "/" && !impactActive;
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
          scrolled || open
            ? "border-b border-biscuit/[0.15] bg-ink/80 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent",
        )}
      >
        <nav
          aria-label="Primary"
          className="u-container flex h-[4.5rem] items-center justify-between gap-6"
        >
          <Link
            href="/"
            aria-label={`${site.shortName} — home`}
            className="group flex shrink-0 items-baseline gap-2"
          >
            <span className="font-display text-[15px] font-medium tracking-[0.16em] text-ivory transition-colors duration-300 group-hover:text-biscuit">
              STACKENZO
            </span>
            <span className="annotation text-biscuit/[0.55]">R&amp;D</span>
          </Link>

          <div className="hidden items-center gap-9 lg:flex">
            <ul className="flex items-center gap-7">
              {navLinks.map((link) => {
                const active = isActive(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={cn(
                        "relative block py-2 text-[13.5px] tracking-[0.01em] transition-colors duration-300",
                        active ? "text-ivory" : "text-ivory/60 hover:text-ivory",
                      )}
                    >
                      {link.label}
                      <span
                        aria-hidden
                        className={cn(
                          "absolute -bottom-px left-0 h-[2px] bg-brick transition-[width,opacity] duration-500 ease-out",
                          active ? "w-full opacity-100" : "w-0 opacity-0",
                        )}
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
            <Link
              href="/contact"
              className="btn btn-primary btn-small group"
            >
              Collaborate with us
              <ArrowUpRight size={14} strokeWidth={1.6} data-shift />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-navigation"
            className="group relative -mr-2 flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span aria-hidden className="relative block h-3 w-6">
              <span
                className={cn(
                  "absolute left-0 h-px w-full bg-current transition-transform duration-300 ease-out",
                  open ? "top-1.5 rotate-45" : "top-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 h-px bg-current transition-all duration-300 ease-out",
                  open ? "top-1.5 w-full -rotate-45" : "top-3 w-4 group-hover:w-full",
                )}
              />
            </span>
          </button>
        </nav>

        <motion.div
          aria-hidden
          style={{ scaleX: progress }}
          className={cn(
            "h-px origin-left bg-brick transition-opacity duration-500",
            scrolled ? "opacity-90" : "opacity-0",
          )}
        />
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-navigation"
            id="mobile-navigation"
            initial={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduceMotion ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.32, ease: EASE }}
            className="fixed inset-0 z-40 overflow-y-auto bg-ink lg:hidden"
          >
            <div className="u-container flex min-h-[100dvh] flex-col justify-between gap-10 pb-10 pt-[6.5rem]">
              <ul className="border-t border-biscuit/[0.15]">
                {navLinks.map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.05 + index * 0.05, ease: EASE }}
                    className="border-b border-biscuit/[0.15]"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline justify-between gap-4 py-4"
                    >
                      <span className="font-display text-[2rem] leading-none tracking-[-0.03em] text-ivory">
                        {link.label}
                      </span>
                      <span className="annotation text-biscuit/[0.45]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="space-y-6">
                <Link
                  href="/contact"
                  onClick={() => setOpen(false)}
                  className="btn btn-primary w-full justify-between"
                >
                  Collaborate with us
                  <ArrowUpRight size={16} strokeWidth={1.6} data-shift />
                </Link>
                <div>
                  <p className="annotation text-biscuit/[0.45]">Collaboration routes</p>
                  <ul className="mt-3 space-y-1.5">
                    {collaborationPaths.map((route) => (
                      <li key={route.id}>
                        <Link
                          href={route.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-ivory/[0.65] transition-colors hover:text-ivory"
                        >
                          {route.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
