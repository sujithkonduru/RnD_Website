import Figure from "@/components/ui/Figure";
import RevealText from "@/components/ui/RevealText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionMarker from "@/components/ui/SectionMarker";
import { introduction } from "@/lib/data";
import { photos } from "@/lib/media";

export default function ResearchIntroduction() {
  return (
    <section
      id="introduction"
      aria-labelledby="introduction-heading"
      className="surface-ivory scroll-mt-24 bg-ivory py-24 text-deep md:py-32 lg:py-40"
    >
      <div className="u-container">
        <SectionMarker
          tone="light"
          index={introduction.index}
          label={introduction.label}
          note="Research practice"
        />

        <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              id="introduction-heading"
              lines={[
                introduction.title[0],
                <>
                  It is a <span className="text-brick">{introduction.highlight}</span>.
                </>,
              ]}
              className="t-h2 max-w-[16ch] text-deep"
            />

            <div className="mt-10 max-w-xl space-y-6">
              {introduction.paragraphs.map((paragraph, index) => (
                <ScrollReveal key={paragraph.slice(0, 24)} delay={index * 0.06}>
                  <p className="t-body text-deep/[0.72]">{paragraph}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.12} className="mt-14">
              <p className="annotation text-deep/[0.45]">What we actually do</p>
              <dl className="mt-4 border-t border-deep/[0.15]">
                {introduction.capabilities.map((capability) => (
                  <div
                    key={capability.label}
                    className="group flex flex-col gap-1 border-b border-deep/[0.12] py-4 transition-colors duration-300 hover:border-deep/30 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
                  >
                    <dt className="t-h4 text-deep transition-transform duration-500 ease-out group-hover:translate-x-1">
                      {capability.label}
                    </dt>
                    <dd className="text-[0.8125rem] leading-relaxed text-deep/50 sm:text-right">
                      {capability.note}
                    </dd>
                  </div>
                ))}
              </dl>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="relative">
                <span
                  aria-hidden
                  className="absolute -left-4 -top-4 h-24 w-24 border-l border-t border-brick/[0.45]"
                />
                <Figure
                  photo={photos.introBench}
                  aspect="aspect-[4/5]"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  annotation="FIG. 01 / Bench work"
                  caption="Reference imagery — prototype assembly"
                  tone="light"
                />
                <span
                  aria-hidden
                  className="absolute -bottom-4 -right-4 h-24 w-24 border-b border-r border-deep/20"
                />
              </div>

              <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-deep/[0.15] pt-5">
                {introduction.annotations.map((annotation, index) => (
                  <div key={annotation}>
                    <dt className="annotation text-deep/[0.35]">
                      {String(index + 1).padStart(2, "0")}
                    </dt>
                    <dd className="mt-1.5 text-[0.8125rem] leading-snug text-deep/[0.65]">
                      {annotation}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
