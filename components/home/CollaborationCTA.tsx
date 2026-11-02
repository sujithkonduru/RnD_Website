import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import ButtonLink from "@/components/ui/Button";
import RevealText from "@/components/ui/RevealText";
import SectionMarker from "@/components/ui/SectionMarker";
import { collaborationPaths, contact } from "@/lib/data";

export default function CollaborationCTA() {
  return (
    <section aria-labelledby="collaboration-heading" className="relative bg-navy">
      <div aria-hidden className="h-[2px] w-full bg-brick" />

      <div className="u-container py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionMarker index="06" label="Collaboration" note="Open to new problems" />

            <RevealText
              as="h2"
              id="collaboration-heading"
              lines={["Have a problem", "worth solving?"]}
              className="t-h1 mt-8 max-w-[12ch] text-ivory"
            />

            <p className="t-lead mt-6 max-w-md text-ivory/[0.65]">{contact.lead}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/contact" variant="primary">
                Collaborate with us
              </ButtonLink>
              <ButtonLink href="/initiatives" variant="outline">
                See our initiatives
              </ButtonLink>
            </div>
          </div>

          <div className="lg:col-span-5">
            <p className="annotation text-biscuit/[0.45]">Collaboration routes</p>
            <ul className="mt-4 border-t border-biscuit/[0.15]">
              {collaborationPaths.map((route, index) => (
                <li key={route.id}>
                  <Link
                    href={route.href}
                    className="group grid grid-cols-[2rem_1fr_auto] items-start gap-3 border-b border-biscuit/[0.12] py-4"
                  >
                    <span className="annotation pt-1 text-biscuit/30">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[0.9375rem] text-ivory transition-colors duration-300 group-hover:text-biscuit">
                        {route.label}
                      </span>
                      <span className="mt-1 block text-[0.8125rem] leading-relaxed text-ivory/[0.45]">
                        {route.description}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      aria-hidden
                      className="mt-1 text-biscuit/30 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-biscuit"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
