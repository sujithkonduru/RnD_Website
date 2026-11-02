import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { collaborationPaths, projects, site } from "@/lib/data";
import { currentYear } from "@/lib/utils";

const navigate = [
  { label: "Home", href: "/" },
  { label: "About R&D", href: "/about" },
  { label: "Initiatives", href: "/initiatives" },
  { label: "Projects", href: "/projects" },
  { label: "Impact", href: "/#impact" },
  { label: "Contact", href: "/contact" },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-biscuit/[0.15] bg-ink text-ivory">
      <div className="u-container pb-10 pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <p className="annotation text-biscuit/50">Work with us</p>
            <p className="mt-5 max-w-md font-display text-[clamp(1.75rem,3.1vw,2.6rem)] leading-[1.06] tracking-[-0.03em]">
              A problem statement is the only thing we need to start.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8 group">
              Start a conversation
              <ArrowUpRight size={16} strokeWidth={1.6} data-shift />
            </Link>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            <nav aria-label="Footer navigation">
              <p className="annotation text-biscuit/[0.45]">Navigate</p>
              <ul className="mt-4 space-y-2">
                {navigate.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ivory/[0.65] transition-colors duration-300 hover:text-ivory"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Projects">
              <p className="annotation text-biscuit/[0.45]">Projects</p>
              <ul className="mt-4 space-y-2">
                {projects.map((project) => (
                  <li key={project.slug}>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="text-sm text-ivory/[0.65] transition-colors duration-300 hover:text-ivory"
                    >
                      {project.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <p className="annotation text-biscuit/[0.45]">Collaborate</p>
              <ul className="mt-4 space-y-2">
                {collaborationPaths.slice(0, 3).map((route) => (
                  <li key={route.id}>
                    <Link
                      href={route.href}
                      className="text-sm text-ivory/[0.65] transition-colors duration-300 hover:text-ivory"
                    >
                      {route.label.replace(" R&D", "")}
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="annotation mt-6 text-biscuit/[0.45]">Contact</p>
              <p className="mt-2 text-sm text-ivory/50">
                {site.email ?? "Official contact details pending verification."}
              </p>
            </div>
          </div>
        </div>

        <div aria-hidden className="mt-16 select-none border-t border-biscuit/[0.15] pt-10">
          <p className="font-display text-[clamp(2.9rem,13.2vw,11rem)] leading-[0.82] tracking-[-0.05em] text-biscuit/[0.12]">
            STACKENZO
          </p>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-biscuit/[0.15] pt-6 text-[11px] text-ivory/[0.45] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono tracking-[0.06em]">
            © {currentYear()} Stackenzo. All rights reserved.
          </p>
          <p className="font-mono tracking-[0.06em]">Engineering ideas. Solving real-world problems.</p>
          <div className="flex items-center gap-5 font-mono tracking-[0.06em]">
            <Link href="/privacy" className="transition-colors hover:text-ivory">
              Privacy
            </Link>
            <Link href="/terms" className="transition-colors hover:text-ivory">
              Terms
            </Link>
            <a href="#main-content" className="transition-colors hover:text-ivory">
              Back to top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
