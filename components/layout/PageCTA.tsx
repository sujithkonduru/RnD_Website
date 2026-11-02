import ButtonLink from "@/components/ui/Button";

type PageCTAProps = {
  title?: React.ReactNode;
  lead?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string };
  note?: string;
};

export default function PageCTA({
  title = (
    <>
      Have a problem
      <br />
      worth solving?
    </>
  ),
  lead = "Let's explore how research, engineering and collaboration can help turn your challenge into a practical solution.",
  primary = { label: "Collaborate with us", href: "/contact" },
  secondary = { label: "See our initiatives", href: "/initiatives" },
  note = "We respond to problem statements from industry, schools, colleges and research groups.",
}: PageCTAProps) {
  return (
    <section aria-label="Collaboration" className="relative bg-navy">
      <div aria-hidden className="h-[2px] w-full bg-brick" />
      <div className="u-container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="t-h2 max-w-[14ch] text-ivory">{title}</h2>
          </div>
          <div className="lg:col-span-5">
            <p className="t-lead max-w-md text-ivory/[0.65]">{lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <ButtonLink href={primary.href} variant="primary">
                {primary.label}
              </ButtonLink>
              {secondary && (
                <ButtonLink href={secondary.href} variant="outline">
                  {secondary.label}
                </ButtonLink>
              )}
            </div>
            <p className="annotation mt-7 max-w-sm leading-relaxed tracking-[0.12em] text-sage/70">
              {note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
