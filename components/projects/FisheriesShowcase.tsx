import ButtonLink from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import RevealText from "@/components/ui/RevealText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StatusTag from "@/components/ui/StatusTag";
import SystemDiagram from "@/components/projects/SystemDiagram";
import { getProject } from "@/lib/data";

export default function FisheriesShowcase() {
  const project = getProject("fisheries-iot");
  if (!project) return null;

  return (
    <div id="fisheries" className="scroll-mt-20 bg-deep py-20 md:py-28">
      <div className="u-container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap items-center gap-3">
              <span className="annotation text-biscuit/[0.45]">Project 03</span>
              <span aria-hidden className="h-px w-8 bg-biscuit/25" />
              <span className="annotation text-biscuit/[0.45]">{project.category}</span>
            </div>
            <RevealText
              as="h3"
              lines={["Fisheries IoT", "for aquaculture."]}
              className="t-project mt-5 max-w-[14ch] text-ivory"
            />
          </div>
          <div className="lg:col-span-5">
            <p className="t-lead max-w-md text-ivory/[0.65]">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <StatusTag label={project.status} state="active" />
              <StatusTag label="Conceptual architecture" state="proposed" />
            </div>
          </div>
        </div>

        <Figure
          photo={project.hero}
          aspect="aspect-[16/10] lg:aspect-[21/9]"
          sizes="(min-width: 1440px) 1376px, 100vw"
          annotation="Reference imagery / aquaculture site"
          className="mt-12"
        />

        <div className="mt-14 grid gap-10 border-t border-biscuit/[0.15] pt-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="annotation text-biscuit/[0.45]">Problem being investigated</p>
            <p className="t-body mt-4 text-ivory/75">{project.problem}</p>
          </div>
          <div className="lg:col-span-6 lg:col-start-7">
            <p className="annotation text-biscuit/[0.45]">Research objectives</p>
            <ul className="mt-4 space-y-3">
              {project.objectives.map((objective) => (
                <li key={objective} className="flex gap-3 text-[0.9375rem] leading-relaxed text-ivory/70">
                  <span aria-hidden className="mt-2 h-1 w-1 shrink-0 bg-brick-bright" />
                  <span>{objective}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {project.architecture && (
          <ScrollReveal className="mt-12">
            <SystemDiagram
              title={project.architecture.title}
              note={project.architecture.note}
              stages={project.architecture.stages}
            />
          </ScrollReveal>
        )}

        <div className="mt-12 flex flex-col gap-6 border-t border-biscuit/[0.15] pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-[0.8125rem] leading-relaxed text-sage/75">
            Proposed capabilities below are research targets, not deployed functionality.
          </p>
          <ButtonLink href={`/projects/${project.slug}`} variant="outline">
            Explore Fisheries IoT
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
