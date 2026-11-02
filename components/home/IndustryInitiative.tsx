import ButtonLink from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { initiatives } from "@/lib/data";

export default function IndustryInitiative() {
  const { industry } = initiatives;

  return (
    <section
      id={industry.id}
      aria-labelledby="industry-heading"
      className="scroll-mt-20 bg-deep pt-16 md:pt-20"
    >
      <div className="u-container">
        <Figure
          photo={industry.media}
          aspect="h-[58vh] min-h-[24rem] max-h-[36rem]"
          sizes="(min-width: 1440px) 1376px, 100vw"
          priority={false}
          annotation="Reference imagery / industrial automation"
          overlay={
            <div className="absolute inset-0 z-10 flex flex-col justify-between">
              <div
                aria-hidden
                className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,41,43,0.35)_0%,rgba(22,41,43,0.28)_30%,rgba(22,41,43,0.82)_68%,rgba(22,41,43,0.96)_100%)]"
              />
              <div className="relative flex items-start justify-between p-5">
                <span className="annotation text-biscuit/80">{industry.kicker}</span>
                <span className="annotation border border-biscuit/30 px-2 py-1 text-biscuit/80">
                  07 stage workflow
                </span>
              </div>
              <div className="relative p-5 sm:p-8 lg:p-10">
                <h3
                  id="industry-heading"
                  className="t-h2 max-w-[20ch] text-ivory text-shadow-deep"
                >
                  {industry.title}
                </h3>
              </div>
            </div>
          }
        />
      </div>

      <div className="u-container py-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <ScrollReveal>
              <p className="t-lead text-ivory/[0.72]">{industry.body}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.08} className="mt-9">
              <p className="annotation text-biscuit/[0.45]">Potential research areas</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {industry.areas.map((area) => (
                  <li
                    key={area}
                    className="border border-biscuit/20 px-3 py-1.5 text-[0.8125rem] text-ivory/[0.78] transition-colors duration-300 hover:border-biscuit/[0.55] hover:text-ivory"
                  >
                    {area}
                  </li>
                ))}
              </ul>
              <p className="mt-6 max-w-sm text-[0.8125rem] leading-relaxed text-sage/[0.85]">
                {industry.note}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.12} className="mt-9">
              <ButtonLink href={industry.cta.href} variant="primary">
                {industry.cta.label}
              </ButtonLink>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ScrollReveal>
              <div className="flex items-baseline justify-between">
                <p className="annotation text-biscuit/[0.45]">Partnership workflow</p>
                <p className="annotation text-biscuit/25">Scope dependent</p>
              </div>
              <ol className="mt-4 border-t border-biscuit/[0.15]">
                {industry.workflow.map((step, index) => (
                  <li
                    key={step}
                    className="group grid grid-cols-[2.25rem_1fr_auto] items-baseline gap-4 border-b border-biscuit/[0.12] py-4"
                  >
                    <span className="annotation text-biscuit/30 transition-colors duration-300 group-hover:text-brick-bright">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.9375rem] leading-snug text-ivory/[0.78] transition-colors duration-300 group-hover:text-ivory">
                      {step}
                    </span>
                    <span
                      aria-hidden
                      className="hidden h-px w-0 bg-brick-bright transition-all duration-500 ease-out group-hover:w-12 sm:block"
                    />
                  </li>
                ))}
              </ol>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
