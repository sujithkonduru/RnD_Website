import ButtonLink from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import RevealText from "@/components/ui/RevealText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { initiatives } from "@/lib/data";

export default function CollegeInitiative() {
  const { colleges } = initiatives;

  return (
    <section
      id={colleges.id}
      aria-labelledby="colleges-heading"
      className="scroll-mt-20 bg-navy py-24 md:py-32"
    >
      <div className="u-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <p className="annotation text-biscuit/75">{colleges.kicker}</p>
            <RevealText
              as="h3"
              id="colleges-heading"
              lines={["Connecting academic knowledge", "with real-world engineering."]}
              className="t-h2 mt-4 max-w-[17ch] text-ivory"
            />
          </div>
          <p className="t-lead max-w-md text-ivory/[0.65] lg:col-span-5">{colleges.body}</p>
        </div>

        <Figure
          photo={colleges.media[0]}
          aspect="aspect-[21/9]"
          sizes="(min-width: 1440px) 1376px, 100vw"
          annotation="Reference imagery / campus laboratory"
          className="mt-12"
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {colleges.modules.map((module, index) => (
            <ScrollReveal key={module.title} delay={index * 0.05}>
              <div className="border-l border-biscuit/25 pl-5">
                <p className="annotation text-biscuit/[0.35]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h4 className="t-h4 mt-2 text-ivory">{module.title}</h4>
                <ul className="mt-3.5 space-y-2">
                  {module.items.map((item) => (
                    <li key={item} className="text-[0.875rem] leading-snug text-ivory/[0.62]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-biscuit/[0.15] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-[0.8125rem] leading-relaxed text-sage/80">
            Academic teams are matched to problems that suit their discipline, timeline and
            available equipment. Documentation and validation are part of the engagement, not
            an afterthought.
          </p>
          <ButtonLink href={colleges.cta.href} variant="outline">
            {colleges.cta.label}
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
