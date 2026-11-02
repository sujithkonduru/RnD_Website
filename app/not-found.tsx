import ButtonLink from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80dvh] items-center bg-ink pb-20 pt-[calc(4.5rem+4rem)]">
      <div className="u-container">
        <p className="annotation text-biscuit/50">Error 404</p>
        <h1 className="t-h1 mt-6 max-w-[16ch] text-ivory">
          This page is not part of the record.
        </h1>
        <p className="mt-5 max-w-md text-[0.9375rem] leading-relaxed text-ivory/[0.55]">
          The address may have changed, or the page may not have been published yet.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <ButtonLink href="/" variant="primary">
            Return home
          </ButtonLink>
          <ButtonLink href="/projects" variant="outline">
            Browse projects
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
