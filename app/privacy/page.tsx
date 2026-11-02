import type { Metadata } from "next";
import SectionMarker from "@/components/ui/SectionMarker";

export const metadata: Metadata = {
  title: "Privacy",
  description: "How Stackenzo Research & Development handles information submitted through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

const sections = [
  {
    index: "01",
    title: "Information you submit",
    body: "The enquiry form asks for your name, organisation, email address, an optional phone number, collaboration type, research area and a description of the problem or project. It is used to assess and respond to your enquiry.",
  },
  {
    index: "02",
    title: "How it is transmitted",
    body: "Submissions are sent from this website to Stackenzo's configured email delivery service and forwarded to the team inbox configured for the site. No enquiry data is stored in this website's own database.",
  },
  {
    index: "03",
    title: "Cookies and analytics",
    body: "This website does not set advertising or analytics cookies. Media is delivered from third-party image and video CDNs, which may receive standard request information such as your IP address.",
  },
  {
    index: "04",
    title: "Retention and removal",
    body: "Enquiries are retained only as long as needed to handle the conversation and any resulting engagement. You can ask for an enquiry to be removed by submitting a request through the contact form.",
  },
];

export default function PrivacyPage() {
  return (
    <section className="bg-deep pb-24 pt-[calc(4.5rem+3.5rem)] md:pt-[calc(4.5rem+5rem)]">
      <div className="u-container max-w-4xl">
        <SectionMarker index="01" label="Privacy" note="Website enquiry data" />
        <h1 className="t-h2 mt-8 max-w-[18ch] text-ivory">Privacy notice.</h1>
        <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-ivory/60">
          This notice describes the current behaviour of this website. It will be replaced by a
          counsel-reviewed policy before launch.
        </p>

        <dl className="mt-12 border-t border-biscuit/[0.18]">
          {sections.map((section) => (
            <div
              key={section.index}
              className="grid gap-3 border-b border-biscuit/[0.12] py-7 sm:grid-cols-[3rem_minmax(0,12rem)_1fr] sm:gap-8"
            >
              <dt className="annotation text-biscuit/[0.35]">{section.index}</dt>
              <dt className="annotation pt-1 text-biscuit/60">{section.title}</dt>
              <dd className="max-w-xl text-[0.9375rem] leading-relaxed text-ivory/70">
                {section.body}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
