import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import PendingNote from "@/components/ui/PendingNote";
import RevealText from "@/components/ui/RevealText";
import StatusTag from "@/components/ui/StatusTag";
import SystemDiagram from "@/components/projects/SystemDiagram";
import { getRelatedProjects, type Project } from "@/lib/data";
import { photoSrcSet, photoUrl } from "@/lib/media";
import { cn } from "@/lib/utils";

const sections = [
  { id: "overview", index: "01", label: "Overview" },
  { id: "problem", index: "02", label: "Problem statement" },
  { id: "objectives", index: "03", label: "Research objectives" },
  { id: "approach", index: "04", label: "Technical approach" },
  { id: "architecture", index: "05", label: "System architecture" },
  { id: "technologies", index: "06", label: "Technologies used" },
  { id: "validation", index: "07", label: "Development and validation" },
  { id: "outcomes", index: "08", label: "Verified findings" },
  { id: "limitations", index: "09", label: "Limitations and future work" },
  { id: "related", index: "10", label: "Related projects" },
  { id: "collaborate", index: "11", label: "Collaborate" },
];

function SectionTitle({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 border-t border-biscuit/[0.18] pt-5">
      <span className="annotation text-brick-bright">{index}</span>
      <h2 className="t-h3 text-ivory">{children}</h2>
    </div>
  );
}

export default function ProjectDetailTemplate({ project }: { project: Project }) {
  const related = getRelatedProjects(project.related);

  return (
    <article>
      <header className="bg-ink pb-16 pt-[calc(4.5rem+3rem)] md:pb-20 md:pt-[calc(4.5rem+5rem)]">
        <div className="u-container">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-[0.8125rem] text-ivory/[0.55] transition-colors duration-300 hover:text-ivory"
          >
            <ArrowLeft size={14} strokeWidth={1.6} aria-hidden />
            All projects
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <div className="flex flex-wrap items-center gap-3">
                <StatusTag
                  label={project.status}
                  state={
                    project.status === "Documentation in preparation" ? "pending" : "active"
                  }
                />
                <span className="annotation text-biscuit/[0.45]">{project.category}</span>
              </div>

              <RevealText
                as="h1"
                lines={[project.title]}
                className="t-h1 mt-6 text-ivory"
              />

              <p className="t-lead mt-6 max-w-xl text-ivory/[0.68]">{project.summary}</p>

              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-biscuit/[0.15] pt-5 sm:grid-cols-3">
                <div>
                  <dt className="annotation text-biscuit/40">Research area</dt>
                  <dd className="mt-1.5 text-[0.875rem] text-ivory/80">{project.category}</dd>
                </div>
                <div>
                  <dt className="annotation text-biscuit/40">Status</dt>
                  <dd className="mt-1.5 text-[0.875rem] text-ivory/80">{project.status}</dd>
                </div>
                <div>
                  <dt className="annotation text-biscuit/40">Year</dt>
                  <dd className="mt-1.5 text-[0.875rem] text-ivory/80">
                    {project.year ?? "To be confirmed"}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-5">
              <Figure
                photo={project.hero}
                aspect="aspect-[4/3]"
                sizes="(min-width: 1024px) 36vw, 100vw"
                annotation="Reference imagery"
                priority
              />
            </div>
          </div>
        </div>
      </header>

      <div className="bg-deep py-16 md:py-20">
        <div className="u-container grid gap-14 lg:grid-cols-12 lg:gap-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <nav aria-label="Project sections" className="sticky top-28">
              <p className="annotation text-biscuit/40">On this page</p>
              <ol className="mt-4 border-t border-biscuit/[0.15]">
                {sections.map((section) => (
                  <li key={section.id} className="border-b border-biscuit/10">
                    <a
                      href={`#${section.id}`}
                      className="group flex items-baseline gap-3 py-2.5 text-[0.8125rem] text-ivory/[0.55] transition-colors duration-300 hover:text-ivory"
                    >
                      <span className="annotation text-biscuit/25 transition-colors group-hover:text-brick-bright">
                        {section.index}
                      </span>
                      {section.label}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          <div className="space-y-16 lg:col-span-8 lg:col-start-5">
            <section id="overview" aria-labelledby="overview-title" className="scroll-mt-28">
              <SectionTitle index="01">
                <span id="overview-title">Overview</span>
              </SectionTitle>
              <p className="t-body mt-5 max-w-2xl text-ivory/[0.72]">{project.summary}</p>
              <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-sage/80">
                {project.statusNote}
              </p>
            </section>

            <section id="problem" aria-labelledby="problem-title" className="scroll-mt-28">
              <SectionTitle index="02">
                <span id="problem-title">Problem statement</span>
              </SectionTitle>
              <div className="mt-5 max-w-2xl">
                {project.problem ? (
                  <p className="t-body text-ivory/[0.72]">{project.problem}</p>
                ) : (
                  <PendingNote label="Problem statement pending">
                    The documented problem statement will be published once it has been agreed
                    with the partner and verified for publication.
                  </PendingNote>
                )}
              </div>
            </section>

            <section id="objectives" aria-labelledby="objectives-title" className="scroll-mt-28">
              <SectionTitle index="03">
                <span id="objectives-title">Research objectives</span>
              </SectionTitle>
              <div className="mt-5 max-w-2xl">
                {project.objectives.length ? (
                  <ol className="space-y-4 border-t border-biscuit/[0.12]">
                    {project.objectives.map((objective, index) => (
                      <li
                        key={objective}
                        className="grid grid-cols-[2rem_1fr] gap-4 border-b border-biscuit/[0.12] py-4"
                      >
                        <span className="annotation pt-1 text-biscuit/30">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="text-[0.9375rem] leading-relaxed text-ivory/75">
                          {objective}
                        </span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <PendingNote label="Objectives pending">
                    Research objectives are being defined with the project team and will be
                    published when confirmed.
                  </PendingNote>
                )}
              </div>
            </section>

            <section id="approach" aria-labelledby="approach-title" className="scroll-mt-28">
              <SectionTitle index="04">
                <span id="approach-title">Technical approach</span>
              </SectionTitle>
              <div className="mt-5 max-w-2xl">
                {project.approach ? (
                  <p className="t-body text-ivory/[0.72]">{project.approach}</p>
                ) : (
                  <PendingNote label="Approach pending">
                    The technical approach will be described here once the investigation has been
                    scoped.
                  </PendingNote>
                )}
              </div>
            </section>

            <section id="architecture" aria-labelledby="architecture-title" className="scroll-mt-28">
              <SectionTitle index="05">
                <span id="architecture-title">System architecture</span>
              </SectionTitle>
              <div className="mt-5">
                {project.architecture ? (
                  <SystemDiagram
                    title={project.architecture.title}
                    note={project.architecture.note}
                    stages={project.architecture.stages}
                  />
                ) : (
                  <PendingNote label="Architecture not published">
                    No architecture is published for this project yet. Where a diagram is shown on
                    this site, it is labelled conceptual until validated.
                  </PendingNote>
                )}
              </div>
            </section>

            <section id="technologies" aria-labelledby="technologies-title" className="scroll-mt-28">
              <SectionTitle index="06">
                <span id="technologies-title">Technologies used</span>
              </SectionTitle>
              <div className="mt-5">
                {project.tech.length ? (
                  <ul className="flex flex-wrap gap-2">
                    {project.tech.map((technology) => (
                      <li
                        key={technology}
                        className="border border-biscuit/20 px-3 py-1.5 text-[0.8125rem] text-ivory/75"
                      >
                        {technology}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <PendingNote label="Technology stack pending">
                    Component and platform choices are confirmed during feasibility work and are not
                    published before that point.
                  </PendingNote>
                )}
              </div>
            </section>

            <section id="validation" aria-labelledby="validation-title" className="scroll-mt-28">
              <SectionTitle index="07">
                <span id="validation-title">Development and validation</span>
              </SectionTitle>
              <div className="mt-5">
                {project.features.length ? (
                  <div className="border-t border-biscuit/[0.15]">
                    {project.features.map((feature) => (
                      <div
                        key={feature.name}
                        className="grid grid-cols-[1fr_auto] items-center gap-4 border-b border-biscuit/[0.12] py-3"
                      >
                        <span className="text-[0.9375rem] text-ivory/[0.78]">{feature.name}</span>
                        <span
                          className={cn(
                            "annotation",
                            feature.state === "Implemented"
                              ? "text-sage"
                              : "text-biscuit/[0.45]",
                          )}
                        >
                          {feature.state}
                        </span>
                      </div>
                    ))}
                    <p className="annotation mt-5 text-sage/60">
                      Status reflects the project record at the time of publication.
                    </p>
                  </div>
                ) : (
                  <PendingNote label="Validation record pending">
                    Development status and validation criteria will be published here.
                  </PendingNote>
                )}
              </div>
            </section>

            <section id="outcomes" aria-labelledby="outcomes-title" className="scroll-mt-28">
              <SectionTitle index="08">
                <span id="outcomes-title">Verified findings</span>
              </SectionTitle>
              <div className="mt-5 max-w-2xl">
                {project.outcomes ? (
                  <p className="t-body text-ivory/[0.72]">{project.outcomes}</p>
                ) : (
                  <PendingNote label="No verified findings published">
                    Findings appear here only after they have been measured and reviewed. Nothing
                    on this page is an estimated result.
                  </PendingNote>
                )}
              </div>
            </section>

            <section id="limitations" aria-labelledby="limitations-title" className="scroll-mt-28">
              <SectionTitle index="09">
                <span id="limitations-title">Limitations and future work</span>
              </SectionTitle>
              <div className="mt-5 max-w-2xl">
                {project.limitations ? (
                  <p className="t-body text-ivory/[0.72]">{project.limitations}</p>
                ) : (
                  <PendingNote label="Limitations pending">
                    Open questions and constraints will be documented alongside the project record.
                  </PendingNote>
                )}
              </div>
            </section>

            <section id="related" aria-labelledby="related-title" className="scroll-mt-28">
              <SectionTitle index="10">
                <span id="related-title">Related projects</span>
              </SectionTitle>
              <div className="mt-5 grid gap-6 sm:grid-cols-2">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/projects/${item.slug}`}
                    className="group block border border-biscuit/[0.15] transition-colors duration-500 hover:border-biscuit/40"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photoUrl(item.hero, 720)}
                        srcSet={photoSrcSet(item.hero, [480, 720, 1080])}
                        sizes="(min-width: 640px) 30vw, 90vw"
                        alt={item.hero.alt}
                        width={item.hero.width}
                        height={item.hero.height}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    <div className="flex items-center justify-between gap-4 p-4">
                      <div>
                        <p className="annotation text-biscuit/40">{item.category}</p>
                        <p className="mt-1.5 text-[0.9375rem] text-ivory group-hover:text-biscuit">
                          {item.title}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={16}
                        strokeWidth={1.5}
                        aria-hidden
                        className="text-biscuit/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            <section id="collaborate" aria-labelledby="collaborate-title" className="scroll-mt-28">
              <SectionTitle index="11">
                <span id="collaborate-title">Collaborate</span>
              </SectionTitle>
              <div className="mt-5 border border-biscuit/20 p-6 sm:p-8">
                <p className="t-h3 max-w-lg text-ivory">
                  Working on something adjacent? We investigate defined problems, not open-ended
                  proposals.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="primary">
                    Start a conversation
                  </ButtonLink>
                  <ButtonLink href="/initiatives" variant="outline">
                    See how we work
                  </ButtonLink>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </article>
  );
}
