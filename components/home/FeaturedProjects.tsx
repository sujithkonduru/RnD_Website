import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealText from "@/components/ui/RevealText";
import SectionMarker from "@/components/ui/SectionMarker";
import EyeVisionShowcase from "@/components/projects/EyeVisionShowcase";
import FisheriesShowcase from "@/components/projects/FisheriesShowcase";
import SkillEngineShowcase from "@/components/projects/SkillEngineShowcase";

export default function FeaturedProjects() {
  return (
    <section id="featured" aria-labelledby="featured-heading" className="bg-deep">
      <div className="u-container py-24 md:py-32">
        <SectionMarker index="05" label="Featured projects" note="Selected R&D work" />

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <RevealText
              as="h2"
              id="featured-heading"
              lines={["Ideas become meaningful", "when they are put to work."]}
              className="t-h2 max-w-[16ch] text-ivory"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="t-lead max-w-md text-ivory/[0.62]">
              Selected projects that investigate practical challenges through technology,
              engineering and applied research.
            </p>
            <Link
              href="/projects"
              className="link-rule group mt-6 inline-flex text-[0.875rem] text-biscuit"
            >
              View the full portfolio
              <ArrowUpRight
                size={15}
                strokeWidth={1.6}
                aria-hidden
                className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </div>

      <SkillEngineShowcase />
      <EyeVisionShowcase />
      <FisheriesShowcase />
    </section>
  );
}
