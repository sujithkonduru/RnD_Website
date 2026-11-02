import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import LeadershipProfiles from "@/components/about/LeadershipProfiles";
import PageCTA from "@/components/layout/PageCTA";
import ButtonLink from "@/components/ui/Button";
import Figure from "@/components/ui/Figure";
import RevealText from "@/components/ui/RevealText";
import ScrollReveal from "@/components/ui/ScrollReveal";
import SectionMarker from "@/components/ui/SectionMarker";
import { methodology, principles } from "@/lib/data";
import { photos } from "@/lib/media";

export const metadata: Metadata = {
  title: "About R&D",
  description:
    "Stackenzo Research & Development connects industry, engineering and education through applied research, prototyping and capability building.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About R&D | Stackenzo R&D",
    description:
      "A company driven by curiosity, engineering and innovation. How Stackenzo approaches research and collaboration.",
    url: "/about",
  },
};

const routes = [
  {
    label: "Industry R&D partnerships",
    detail: "Defined operational problems investigated with the partner.",
    href: "/initiatives#industry",
  },
  {
    label: "R&D in schools",
    detail: "Research cells, awareness programmes and student projects.",
    href: "/initiatives#schools",
  },
  {
    label: "R&D in colleges",
    detail: "Applied projects, final-year work and industry-academia links.",
    href: "/initiatives#colleges",
  },
];

export default function AboutPage() {
  return (
    <article>
      <header className="bg-navy pb-16 pt-[calc(4.5rem+3.5rem)] md:pb-20 md:pt-[calc(4.5rem+5rem)]">
        <div className="u-container">
          <SectionMarker index="01" label="About Stackenzo R&D" note="Company profile" />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-8">
              <RevealText
                as="h1"
                lines={["A company driven by curiosity,", "engineering and innovation."]}
                className="t-h1 max-w-[18ch] text-ivory"
              />
            </div>
            <p className="t-lead max-w-md text-ivory/[0.65] lg:col-span-4">
              Stackenzo works at the intersection of industry, engineering, education and
              emerging technology — where a question becomes a build, and a build becomes
              evidence.
            </p>
          </div>
        </div>
      </header>

      <div className="bg-deep pb-24 pt-14 md:pb-32">
        <div className="u-container">
          <Figure
            photo={photos.aboutLab}
            aspect="aspect-[16/9] md:aspect-[21/9]"
            sizes="(min-width: 1440px) 1376px, 100vw"
            annotation="Reference imagery / laboratory"
            caption="Reference imagery — not a Stackenzo facility"
            reveal
          />
        </div>
      </div>

      {/* Overview */}
      <section aria-labelledby="overview-heading" className="surface-ivory bg-ivory py-24 text-deep md:py-28">
        <div className="u-container">
          <SectionMarker tone="light" index="02" label="Who we are" note="Overview" />
          <div className="mt-12 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-6">
              <RevealText
                as="h2"
                id="overview-heading"
                lines={["Research and development,", "run as a practice."]}
                className="t-h2 max-w-[15ch] text-deep"
              />
            </div>
            <div className="space-y-6 lg:col-span-5 lg:col-start-8">
              <p className="t-body text-deep/[0.72]">
                Stackenzo R&amp;D brings together technical expertise, research and collaboration
                to solve practical challenges — from applied research and prototyping to
                innovation in education and interdisciplinary engineering.
              </p>
              <p className="t-body text-deep/[0.72]">
                Our work is structured around investigation: understanding a problem properly,
                researching what is already known, assessing what is achievable, then building
                something that can be tested rather than merely presented.
              </p>
              <ButtonLink href="/projects" variant="outlineDark" className="!mt-8">
                See the work
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and vision */}
      <section aria-labelledby="mission-heading" className="bg-deep py-24 md:py-28">
        <div className="u-container">
          <SectionMarker index="03" label="Mission and vision" note="Stated plainly" />
          <div id="mission-heading" className="sr-only">
            Mission and vision
          </div>

          <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10">
            <ScrollReveal>
              <div className="border-t border-biscuit/20 pt-6">
                <p className="annotation text-brick-bright">Mission</p>
                <p className="mt-5 max-w-md font-display text-[clamp(1.6rem,2.9vw,2.4rem)] leading-[1.1] tracking-[-0.03em] text-ivory">
                  To turn real problems into working solutions by connecting research,
                  engineering and education.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="border-t border-biscuit/20 pt-6">
                <p className="annotation text-brick-bright">Vision</p>
                <p className="mt-5 max-w-md font-display text-[clamp(1.6rem,2.9vw,2.4rem)] leading-[1.1] tracking-[-0.03em] text-ivory">
                  Research capability built into industry and education, not held apart from
                  them.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section aria-labelledby="philosophy-heading" className="bg-navy py-24 md:py-28">
        <div className="u-container">
          <SectionMarker index="04" label="R&D philosophy" note="Three working principles" />
          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <RevealText
                as="h2"
                id="philosophy-heading"
                lines={["How we decide", "what to build."]}
                className="t-h2 max-w-[12ch] text-ivory"
              />
              <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-ivory/[0.55]">
                These principles govern how a problem statement becomes a project — and how we
                report what came out of it.
              </p>
            </div>

            <ol className="lg:col-span-6 lg:col-start-7">
              {principles.map((principle, index) => (
                <ScrollReveal key={principle.title} delay={index * 0.05}>
                  <li className="grid gap-3 border-t border-biscuit/[0.15] py-6 sm:grid-cols-[3rem_1fr] sm:gap-6">
                    <span className="annotation pt-1 text-biscuit/[0.35]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="t-h4 text-ivory">{principle.title}</h3>
                      <p className="mt-2 max-w-md text-[0.9375rem] leading-relaxed text-ivory/60">
                        {principle.body}
                      </p>
                    </div>
                  </li>
                </ScrollReveal>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section aria-labelledby="methodology-heading" className="bg-deep py-24 md:py-28">
        <div className="u-container">
          <SectionMarker index="05" label="Problem-solving methodology" note="Applied per project" />
          <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end">
            <h2 id="methodology-heading" className="t-h2 max-w-[18ch] text-ivory lg:col-span-7">
              Four moves, repeated at whatever depth the problem needs.
            </h2>
            <p className="max-w-md text-[0.9375rem] leading-relaxed text-ivory/[0.55] lg:col-span-5">
              A feasibility study may stop after the second move. A full build runs all four, then
              returns to the first as new constraints appear.
            </p>
          </div>

          <ol className="mt-14 grid gap-px bg-biscuit/[0.15] sm:grid-cols-2 lg:grid-cols-4">
            {methodology.map((step) => (
              <li key={step.index} className="bg-deep p-6">
                <p className="annotation text-brick-bright">{step.index}</p>
                <p className="mt-8 font-display text-[1.5rem] leading-none tracking-[-0.02em] text-ivory">
                  {step.title}
                </p>
                <p className="mt-3 text-[0.875rem] leading-relaxed text-ivory/[0.55]">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Where we work */}
      <section aria-labelledby="routes-heading" className="surface-ivory bg-ivory py-24 text-deep md:py-28">
        <div className="u-container">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionMarker tone="light" index="06" label="Where we work" note="Three routes" />
              <RevealText
                as="h2"
                id="routes-heading"
                lines={["Industry, schools", "and colleges."]}
                className="t-h2 mt-8 max-w-[12ch] text-deep"
              />
              <p className="mt-6 max-w-sm text-[0.9375rem] leading-relaxed text-deep/60">
                Collaboration takes one of three forms. Each uses the same research discipline at
                a different scale.
              </p>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ul className="border-t border-deep/20">
                {routes.map((route) => (
                  <li key={route.href}>
                    <Link
                      href={route.href}
                      className="group flex items-start justify-between gap-6 border-b border-deep/[0.12] py-6"
                    >
                      <span>
                        <span className="t-h4 block text-deep transition-transform duration-500 ease-out group-hover:translate-x-1">
                          {route.label}
                        </span>
                        <span className="mt-2 block text-[0.9375rem] text-deep/[0.55]">
                          {route.detail}
                        </span>
                      </span>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        aria-hidden
                        className="mt-1 shrink-0 text-brick transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <Figure
                  photo={photos.aboutHands}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 1024px) 22vw, 44vw"
                  tone="light"
                />
                <Figure
                  photo={photos.aboutTeam}
                  aspect="aspect-[4/3]"
                  sizes="(min-width: 1024px) 22vw, 44vw"
                  tone="light"
                  className="mt-6"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="bg-deep pt-24 md:pt-32">
        <LeadershipProfiles />
      </div>

      <PageCTA
        title={
          <>
            Work with a team
            <br />
            that documents its reasoning.
          </>
        }
        primary={{ label: "Start a conversation", href: "/contact" }}
      />
    </article>
  );
}
