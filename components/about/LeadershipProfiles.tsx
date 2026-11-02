import SectionMarker from "@/components/ui/SectionMarker";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { leadership } from "@/lib/data";

export default function LeadershipProfiles() {
  return (
    <section aria-labelledby="leadership-heading" className="bg-ink py-24 md:py-32">
      <div className="u-container">
        <SectionMarker
          index="07"
          label="Leadership"
          note="Profiles pending verification"
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-16">
          <h2 id="leadership-heading" className="t-h2 max-w-[16ch] text-ivory lg:col-span-7">
            The people accountable for the work.
          </h2>
          <p className="max-w-md text-[0.9375rem] leading-relaxed text-ivory/[0.55] lg:col-span-5">
            Portraits, names and biographies are published only from material supplied and
            approved by Stackenzo. Placeholders below are deliberate.
          </p>
        </div>

        <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-10">
          {leadership.map((leader, index) => (
            <ScrollReveal key={leader.id} delay={index * 0.08}>
              <article className="border-t border-biscuit/20 pt-6">
                <div className="grid gap-6 sm:grid-cols-[9.5rem_1fr] sm:gap-7">
                  <div
                    className="relative aspect-[3/4] overflow-hidden border border-biscuit/25 bg-navy/25"
                    role="img"
                    aria-label="Portrait placeholder — official photograph pending"
                  >
                    <span
                      aria-hidden
                      className="absolute inset-0 bg-[linear-gradient(to_right,rgba(231,215,184,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(231,215,184,0.12)_1px,transparent_1px)] bg-[size:24px_24px]"
                    />
                    <span
                      aria-hidden
                      className="absolute left-1/2 top-0 h-full w-px bg-biscuit/20"
                    />
                    <span
                      aria-hidden
                      className="absolute left-0 top-1/2 h-px w-full bg-biscuit/20"
                    />
                    <span className="annotation absolute inset-x-0 bottom-3 text-center text-biscuit/[0.45]">
                      Portrait pending
                    </span>
                  </div>

                  <div>
                    <p className="annotation text-brick-bright">
                      {leader.role}
                    </p>
                    <h3 className="t-h3 mt-2 text-ivory">
                      {leader.name ?? "Name pending verification"}
                    </h3>
                    <p className="mt-3 text-[0.875rem] leading-relaxed text-ivory/[0.55]">
                      {leader.bio ??
                        "A verified professional biography and leadership perspective will be published here once supplied by Stackenzo."}
                    </p>

                    <p className="annotation mt-5 text-biscuit/40">Responsibility</p>
                    <p className="mt-1 text-[0.875rem] leading-relaxed text-ivory/70">
                      {leader.scope}
                    </p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
