import type { Metadata } from "next";
import CinematicHero from "@/components/home/CinematicHero";
import CollaborationCTA from "@/components/home/CollaborationCTA";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import ImpactStatistics from "@/components/home/ImpactStatistics";
import InitiativesChapter from "@/components/home/InitiativesChapter";
import ResearchIntroduction from "@/components/home/ResearchIntroduction";
import ResearchLifecycle from "@/components/home/ResearchLifecycle";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <ResearchIntroduction />
      <ResearchLifecycle />
      <InitiativesChapter />
      <ImpactStatistics />
      <FeaturedProjects />
      <CollaborationCTA />
    </>
  );
}
