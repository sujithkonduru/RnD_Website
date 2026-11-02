import type { Metadata } from "next";
import PageCTA from "@/components/layout/PageCTA";
import CollegeInitiative from "@/components/home/CollegeInitiative";
import IndustryInitiative from "@/components/home/IndustryInitiative";
import SchoolInitiative from "@/components/home/SchoolInitiative";
import RevealText from "@/components/ui/RevealText";
import SectionMarker from "@/components/ui/SectionMarker";

export const metadata: Metadata = {
  title: "Initiatives",
  description:
    "Industry R&D partnerships, school R&D cells and college applied research programmes from Stackenzo Research & Development.",
  alternates: { canonical: "/initiatives" },
  openGraph: {
    title: "Initiatives | Stackenzo R&D",
    description:
      "Three routes into applied research: industry partnerships, school R&D cells and college R&D programmes.",
    url: "/initiatives",
  },
};

export default function InitiativesPage() {
  return (
    <>
      <header className="bg-navy pb-6 pt-[calc(4.5rem+3.5rem)] md:pt-[calc(4.5rem+5rem)]">
        <div className="u-container">
          <SectionMarker index="01" label="Initiatives" note="Industry / Schools / Colleges" />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8">
              <RevealText
                as="h1"
                lines={["Three routes into", "applied research."]}
                className="t-h1 text-ivory"
              />
            </div>
            <div className="lg:col-span-4">
              <p className="t-lead max-w-md text-ivory/[0.65]">
                Research moves forward when knowledge meets real problems. These are the three
                routes we work through.
              </p>
              <p className="annotation mt-6 leading-relaxed tracking-[0.12em] text-sage/70">
                Each route uses the same research discipline at a different scale.
              </p>
            </div>
          </div>
        </div>
      </header>

      <IndustryInitiative />
      <SchoolInitiative />
      <CollegeInitiative />

      <PageCTA
        title={
          <>
            Choose the route
            <br />
            that fits your problem.
          </>
        }
        primary={{ label: "Submit an enquiry", href: "/contact" }}
        secondary={{ label: "See our projects", href: "/projects" }}
      />
    </>
  );
}
