import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import RevealText from "@/components/ui/RevealText";
import SectionMarker from "@/components/ui/SectionMarker";
import { contact, site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Submit an industry problem statement, bring R&D to your school or college, or discuss a research collaboration with Stackenzo R&D.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | Stackenzo R&D",
    description:
      "Have a problem worth solving? Start a research collaboration with Stackenzo.",
    url: "/contact",
  },
};

export default function ContactPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  return (
    <>
      <header className="bg-ink pb-14 pt-[calc(4.5rem+3.5rem)] md:pb-16 md:pt-[calc(4.5rem+5rem)]">
        <div className="u-container">
          <SectionMarker index="01" label="Contact and collaboration" note="Response within 2 working days" />

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
            <div className="lg:col-span-7">
              <RevealText
                as="h1"
                lines={contact.title}
                className="t-h1 max-w-[14ch] text-ivory"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="t-lead max-w-md text-ivory/[0.65]">{contact.lead}</p>
              <p className="annotation mt-6 text-sage/70">
                Official email and phone numbers are pending verification.
              </p>
            </div>
          </div>
        </div>
      </header>

      <section aria-labelledby="enquiry-heading" className="bg-deep py-16 md:py-20">
        <div className="u-container">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-12">
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <p className="annotation text-biscuit/[0.45]">What happens next</p>
                <ol className="mt-4 border-t border-biscuit/[0.15]">
                  {contact.next.map((step) => (
                    <li key={step.index} className="border-b border-biscuit/[0.12] py-5">
                      <div className="flex items-baseline gap-3">
                        <span className="annotation text-brick-bright">{step.index}</span>
                        <p className="text-[0.9375rem] text-ivory">{step.title}</p>
                      </div>
                      <p className="mt-2 pl-8 text-[0.8125rem] leading-relaxed text-ivory/50">
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 border-t border-biscuit/[0.15] pt-5">
                  <p className="annotation text-biscuit/[0.45]">Direct contact</p>
                  <dl className="mt-3 space-y-2 text-[0.875rem] text-ivory/60">
                    <div className="flex gap-2">
                      <dt className="text-ivory/40">Email</dt>
                      <dd>{site.email ?? "Pending verification"}</dd>
                    </div>
                    <div className="flex gap-2">
                      <dt className="text-ivory/40">Phone</dt>
                      <dd>{site.phone ?? "Pending verification"}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 max-w-xs text-[0.75rem] leading-relaxed text-ivory/[0.35]">
                    The enquiry form below is the monitored route until official contact details
                    are published.
                  </p>
                </div>
              </div>
            </aside>

            <div className="lg:col-span-7 lg:col-start-6">
              <h2 id="enquiry-heading" className="t-h3 text-ivory">
                Enquiry form
              </h2>
              <p className="mt-2 max-w-lg text-[0.9375rem] leading-relaxed text-ivory/[0.55]">
                Fields marked required are needed before we can assess the problem. Everything
                else helps us route the enquiry properly.
              </p>

              <div className="mt-8">
                <ContactForm initialType={searchParams.type} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
