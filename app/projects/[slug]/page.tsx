import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetailTemplate from "@/components/projects/ProjectDetailTemplate";
import { getProject, projects } from "@/lib/data";

type RouteParams = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: RouteParams): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project not found" };

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projects/${project.slug}` },
    openGraph: {
      title: `${project.title} | Stackenzo R&D`,
      description: project.summary,
      url: `/projects/${project.slug}`,
      type: "article",
    },
  };
}

export default function ProjectPage({ params }: RouteParams) {
  const project = getProject(params.slug);
  if (!project) notFound();

  return <ProjectDetailTemplate project={project} />;
}
