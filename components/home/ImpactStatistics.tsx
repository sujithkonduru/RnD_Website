import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import CountUp from "@/components/ui/CountUp";
import RevealText from "@/components/ui/RevealText";
import SectionMarker from "@/components/ui/SectionMarker";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { stats } from "@/lib/data";

export default function ImpactStatistics() {
  const hasPlaceholders = stats.some((stat) => stat.value === null);

  return (
    <section id="impact" aria-labelledby="impact-heading" className="scroll-mt-20 bg-ink py-24 md:py-32">
      <div className="u-container">
        <SectionMarker index="04" label="Research impact" note="Verified figures only" />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              id="impact-heading"
              lines={["Research is measured by", "the problems it helps solve."]}
              className="t-h2 max-w-[17ch] text-ivory"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="t-lead max-w-md text-ivory/[0.62]">
              Progress is recorded as it is verified. Where a figure is still being confirmed,
              it is shown as pending rather than estimated.
            </p>
          </div>
        </div>

        <div className="mt-14 grid border-t border-biscuit/[0.15] sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.key}
              delay={index * 0.05}
              className="border-b border-biscuit/[0.15] lg:border-r lg:last:border-r-0"
            >
              <Link
                href={stat.href}
                className="group relative flex h-full flex-col justify-between py-8 transition-colors duration-500 hover:bg-navy/25 sm:px-6"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-0 h-[2px] w-0 bg-brick-bright transition-[width] duration-500 ease-out group-hover:w-full"
                />
                <div className="flex items-start justify-between gap-4">
                  <span className="annotation text-biscuit/[0.35]">{stat.index}</span>
                  <span className="annotation flex items-center gap-1.5 text-biscuit/30 transition-colors duration-300 group-hover:text-biscuit/80">
                    {stat.action}
                    <ArrowUpRight
                      size={12}
                      strokeWidth={1.6}
                      aria-hidden
                      className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>

                <div className="mt-12">
                  <p className="font-display text-[clamp(3rem,6vw,5.25rem)] leading-none tracking-[-0.05em] text-biscuit">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-5 text-[0.9375rem] text-ivory/[0.85]">{stat.label}</p>
                  <p className="mt-2 max-w-[26ch] text-[0.8125rem] leading-relaxed text-ivory/[0.45]">
                    {stat.description}
                  </p>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        {hasPlaceholders && (
          <p className="annotation mt-6 text-sage/60">
            Figures pending verification — placeholders are intentional and are not estimates.
          </p>
        )}
      </div>
    </section>
  );
}
