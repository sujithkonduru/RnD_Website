import { ArrowDownRight } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import SectionMarker from "@/components/ui/SectionMarker";
import CollegeInitiative from "./CollegeInitiative";
import IndustryInitiative from "./IndustryInitiative";
import SchoolInitiative from "./SchoolInitiative";
import { initiatives } from "@/lib/data";

const chapterLinks = [
  { id: initiatives.industry.id, label: "Industry R&D partnerships", kicker: "A" },
  { id: initiatives.schools.id, label: "R&D in schools", kicker: "B" },
  { id: initiatives.colleges.id, label: "R&D in colleges", kicker: "C" },
];

export default function InitiativesChapter() {
  return (
    <section
      id="initiatives"
      aria-labelledby="initiatives-heading"
      className="scroll-mt-20 bg-navy"
    >
      <div className="u-container pb-4 pt-24 md:pt-32">
        <SectionMarker
          index="03"
          label="Initiatives"
          note="Industry / Schools / Colleges"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              id="initiatives-heading"
              lines={initiatives.heading.title}
              className="t-h2 max-w-[18ch] text-ivory"
            />
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <p className="t-lead max-w-md text-ivory/[0.65]">{initiatives.heading.lead}</p>

            <nav aria-label="Initiatives on this page" className="mt-8 border-t border-biscuit/[0.15]">
              {chapterLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className="group flex items-center justify-between gap-4 border-b border-biscuit/[0.15] py-3.5"
                >
                  <span className="flex items-baseline gap-3">
                    <span className="annotation text-biscuit/[0.35]">{link.kicker}</span>
                    <span className="text-[0.9375rem] text-ivory/70 transition-colors duration-300 group-hover:text-ivory">
                      {link.label}
                    </span>
                  </span>
                  <ArrowDownRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden
                    className="text-biscuit/[0.35] transition-all duration-300 ease-out group-hover:translate-x-0.5 group-hover:translate-y-0.5 group-hover:text-biscuit"
                  />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <IndustryInitiative />
      <SchoolInitiative />
      <CollegeInitiative />
    </section>
  );
}
