import ButtonLink from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import RevealText from "@/components/ui/RevealText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StatusTag from "@/components/ui/StatusTag";
import ProjectRecord from "@/components/projects/ProjectRecord";
import { getProject } from "@/lib/data";

export default function EyeVisionShowcase() {
  const project = getProject("eyevision");
  if (!project) return null;

  return (
    <div
      id="eyevision"
      className="surface-ivory scroll-mt-20 bg-ivory py-20 text-deep md:py-28"
    >
      <div className="u-container">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="annotation text-deep/40">Project 02</span>
              <span aria-hidden className="h-px w-8 bg-deep/20" />
              <span className="annotation text-deep/40">{project.category}</span>
            </div>
            <RevealText
              as="h3"
              lines={["EyeVision"]}
              className="t-project mt-5 text-deep"
            />
          </div>

          <div className="lg:col-span-5">
            <p className="t-lead max-w-md text-deep/70">{project.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              <StatusTag label={project.status} state="pending" tone="light" />
              <StatusTag label="Computer vision" state="proposed" tone="light" />
            </div>
          </div>
        </div>

        <Figure
          photo={project.hero}
          aspect="aspect-[16/9] lg:aspect-[21/9]"
          sizes="(min-width: 1440px) 1376px, 100vw"
          annotation="FIG. 04 / Vision hardware"
          caption="Reference imagery — sensor module"
          className="mt-12"
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <ProjectRecord
              project={project}
              tone="light"
              rows={[
                { label: "Problem statement", value: project.problem },
                {
                  label: "Research objectives",
                  value: project.objectives.length ? project.objectives.join(" ") : null,
                },
                { label: "Technical approach", value: project.approach },
                { label: "Technologies", value: project.tech.length ? project.tech.join(", ") : null },
              ]}
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <ScrollReveal>
              <p className="annotation text-brick">Scope note</p>
              <p className="mt-3 text-[0.9375rem] leading-relaxed text-deep/[0.65]">
                {project.statusNote}
              </p>
              <ButtonLink
                href={`/projects/${project.slug}`}
                variant="outlineDark"
                className="mt-8"
              >
                Explore EyeVision
              </ButtonLink>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
