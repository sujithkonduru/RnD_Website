import type { Metadata } from "next";
import SectionMarker from "@/components/ui/SectionMarker";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of use for the Stackenzo Research & Development website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    index: "01",
    title: "Website content",
    body: "Content on this site is informational. Project descriptions are published only after the underlying record has been verified with Stackenzo, and any label marked conceptual, proposed or pending is exactly that.",
  },
  {
    index: "02",
    title: "No guarantee of outcome",
    body: "Nothing on this site offers a guarantee that a research route will reach commercial implementation, or that a described capability is already available.",
  },
  {
    index: "03",
    title: "Engagements",
    body: "Scope, intellectual property, confidentiality and deliverables for any collaboration are defined in a separate written agreement. Submitting an enquiry does not create an engagement.",
  },
  {
    index: "04",
    title: "Third-party media",
    body: "Photography and footage used for atmosphere are licensed from third-party libraries and are not representations of Stackenzo facilities, partners or projects.",
  },
];

export default function TermsPage() {
  return (
    <section className="bg-deep pb-24 pt-[calc(4.5rem+3.5rem)] md:pt-[calc(4.5rem+5rem)]">
      <div className="u-container max-w-4xl">
        <SectionMarker index="01" label="Terms" note="Website use" />
        <h1 className="t-h2 mt-8 max-w-[18ch] text-ivory">Terms of use.</h1>
        <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ivory/60">
          These terms describe how the information on this website should be read. They will be
          replaced by a counsel-reviewed version before launch.
        </p>

        <dl className="mt-12 border-t border-biscuit/[0.18]">
          {sections.map((section) => (
            <div
              key={section.index}
              className="grid gap-3 border-b border-biscuit/[0.12] py-7 sm:grid-cols-[3rem_minmax(0,12rem)_1fr] sm:gap-8"
            >
              <dt className="annotation text-biscuit/[0.35]">{section.index}</dt>
              <dt className="annotation pt-1 text-biscuit/60">{section.title}</dt>
              <dd className="max-w-xl text-[0.9375rem] leading-relaxed text-ivory/70">
                {section.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
