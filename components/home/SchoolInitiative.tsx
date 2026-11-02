import ButtonLink from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import RevealText from "@/components/ui/RevealText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { initiatives } from "@/lib/data";

export default function SchoolInitiative() {
  const { schools } = initiatives;

  return (
    <section
      id={schools.id}
      aria-labelledby="schools-heading"
      className="surface-ivory scroll-mt-20 bg-ivory py-24 text-deep md:py-32"
    >
      <div className="u-container">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-6">
            <p className="annotation text-brick">{schools.kicker}</p>
            <RevealText
              as="h3"
              id="schools-heading"
              lines={["Building a research mindset", "from the classroom."]}
              className="t-h2 mt-4 max-w-[16ch] text-deep"
            />
            <p className="t-lead mt-6 max-w-lg text-deep/[0.68]">{schools.body}</p>
            <ButtonLink href={schools.cta.href} variant="primary" className="mt-8">
              {schools.cta.label}
            </ButtonLink>
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <div className="grid grid-cols-2 items-start gap-4 sm:gap-5">
              <Figure
                photo={schools.media[0]}
                aspect="aspect-[3/4]"
                sizes="(min-width: 1024px) 20vw, 44vw"
                caption="Reference imagery"
                tone="light"
              />
              <Figure
                photo={schools.media[1]}
                aspect="aspect-[3/4]"
                sizes="(min-width: 1024px) 20vw, 44vw"
                className="mt-12 sm:mt-16"
                tone="light"
              />
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-x-12 gap-y-0 sm:grid-cols-2">
          {schools.modules.map((module, index) => (
            <ScrollReveal key={module.title} delay={index * 0.05}>
              <div className="border-t border-deep/20 py-7">
                <div className="flex items-baseline justify-between gap-4">
                  <h4 className="t-h3 text-deep">{module.title}</h4>
                  <span className="annotation text-deep/30">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <ul className="mt-4 space-y-2.5">
                  {module.items.map((item) => (
                    <li key={item} className="flex gap-3 text-[0.9375rem] leading-snug text-deep/70">
                      <span aria-hidden className="mt-[0.55rem] h-1 w-1 shrink-0 bg-brick" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
