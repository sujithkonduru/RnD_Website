import { cn } from "@/lib/utils";

type SectionMarkerProps = {
  index: string;
  label: string;
  note?: string;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * The chapter marker that runs across the site: a mono index, the section name,
 * a hairline and an optional technical note. It replaces the repeated eyebrow
 * label pattern with something closer to an annotated research notebook.
 */
export default function SectionMarker({
  index,
  label,
  note,
  tone = "dark",
  className,
}: SectionMarkerProps) {
  const light = tone === "light";

  return (
    <div className={cn("flex items-center gap-4", className)}>
      <span
        aria-hidden
        className={cn("h-3 w-[3px] shrink-0", light ? "bg-brick" : "bg-brick-bright")}
      />
      <span
        className={cn(
          "annotation shrink-0",
          light ? "text-deep/[0.55]" : "text-biscuit/70",
        )}
      >
        {index}
      </span>
      <span
        className={cn(
          "annotation shrink-0",
          light ? "text-deep/75" : "text-ivory/75",
        )}
      >
        {label}
      </span>
      <span
        aria-hidden
        className={cn(
          "h-px flex-1",
          light ? "bg-deep/[0.15]" : "bg-biscuit/[0.15]",
        )}
      />
      {note && (
        <span
          className={cn(
            "annotation hidden shrink-0 sm:block",
            light ? "text-deep/50" : "text-sage",
          )}
        >
          {note}
        </span>
      )}
    </div>
  );
}
