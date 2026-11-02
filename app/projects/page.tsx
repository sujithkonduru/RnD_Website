import type { Metadata } from "next";
import ButtonLink from "@/components/ui/Button";
import ProjectPortfolio from "@/components/projects/ProjectPortfolio";
import RevealText from "@/components/ui/RevealText";
import SectionMarker from "@/components/ui/SectionMarker";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore how Stackenzo investigates challenges, develops prototypes and applies engineering to real-world problems across software, IoT and aquaculture research.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Stackenzo R&D",
    description:
      "Research in action. Solutions in progress. Explore Stackenzo's applied research portfolio.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      <section aria-labelledby="projects-heading" className="bg-navy pb-16 pt-[calc(4.5rem+4rem)] md:pb-20 md:pt-[calc(4.5rem+6rem)]">
        <div className="u-container">
          <SectionMarker index="01" label="Research portfolio" note="03 published projects" />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <RevealText
                as="h1"
                id="projects-heading"
                lines={["Research in action.", "Solutions in progress."]}
                className="t-h1 max-w-[16ch] text-ivory"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="t-lead max-w-md text-ivory/[0.65]">
                Explore how Stackenzo investigates challenges, develops prototypes and applies
                engineering to real-world problems.
              </p>
              <p className="annotation mt-6 leading-relaxed tracking-[0.12em] text-sage/70">
                Project records are published only once the scope and findings have been verified
                with Stackenzo.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Project list" className="bg-deep pb-24 pt-12 md:pb-32">
        <div className="u-container">
          <ProjectPortfolio />

          <div className="mt-20 flex flex-col gap-6 border-t border-biscuit/[0.15] pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-lg text-[0.9375rem] leading-relaxed text-ivory/[0.55]">
              Have a problem that belongs on this list? Industry and research partners can submit
              a problem statement at any time.
            </p>
            <ButtonLink href="/contact?type=industry" variant="primary">
              Submit a problem statement
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
