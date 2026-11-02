import ButtonLink from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StatusTag from "@/components/ui/StatusTag";
import ProjectRecord from "@/components/projects/ProjectRecord";
import { getProject } from "@/lib/data";

export default function SkillEngineShowcase() {
  const project = getProject("skillengine");
  if (!project) return null;

  return (
    <div id="skillengine" className="scroll-mt-20 bg-deep">
      <div className="u-container py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-3">
                <span className="annotation text-biscuit/[0.45]">Project 01</span>
                <span aria-hidden className="h-px w-8 bg-biscuit/25" />
                <span className="annotation text-biscuit/[0.45]">{project.category}</span>
              </div>

              <h3 className="t-project mt-5 text-ivory">{project.title}</h3>

              <p className="t-lead mt-5 max-w-sm text-ivory/[0.65]">{project.summary}</p>

              <div className="mt-7 flex flex-wrap gap-2">
                <StatusTag label={project.status} state="pending" />
                <StatusTag label="Software & AI" state="proposed" />
              </div>

              <dl className="mt-9 border-t border-biscuit/[0.15]">
                <div className="flex items-baseline justify-between gap-6 border-b border-biscuit/[0.12] py-3">
                  <dt className="annotation text-biscuit/40">Research area</dt>
                  <dd className="text-[0.875rem] text-ivory/75">Skill development and assessment</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-biscuit/[0.12] py-3">
                  <dt className="annotation text-biscuit/40">Technologies</dt>
                  <dd className="annotation text-sage/70">Pending verification</dd>
                </div>
                <div className="flex items-baseline justify-between gap-6 border-b border-biscuit/[0.12] py-3">
                  <dt className="annotation text-biscuit/40">Published outcomes</dt>
                  <dd className="annotation text-sage/70">None yet</dd>
                </div>
              </dl>

              <ButtonLink href={`/projects/${project.slug}`} variant="outline" className="mt-8">
                Explore SkillEngine
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Figure
              photo={project.hero}
              aspect="aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5]"
              sizes="(min-width: 1024px) 54vw, 100vw"
              annotation="FIG. 03 / Product environment"
              caption="Reference imagery — not a SkillEngine interface"
            />

            <ScrollReveal delay={0.05} className="mt-10">
              <ProjectRecord
                project={project}
                rows={[
                  { label: "Problem statement", value: project.problem },
                  {
                    label: "Research objectives",
                    value: project.objectives.length ? project.objectives.join(" ") : null,
                  },
                  { label: "Technical approach", value: project.approach },
                ]}
              />
              <p className="mt-5 max-w-lg text-[0.8125rem] leading-relaxed text-sage/70">
                {project.statusNote}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
