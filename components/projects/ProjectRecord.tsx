import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

type ProjectRecordProps = {
  project: Project;
  tone?: "dark" | "light";
  className?: string;
  rows?: Array<{
    label: string;
    value: string | null;
  }>;
};

/**
 * Structured, honest project record. Every field that Stackenzo has not
 * verified is labelled as pending instead of being filled with plausible copy.
 */
export default function ProjectRecord({ project, tone = "dark", className, rows }: ProjectRecordProps) {
  const light = tone === "light";

  const record =
    rows ??
    [
      { label: "Problem statement", value: project.problem },
      {
        label: "Research objectives",
        value: project.objectives.length ? project.objectives.join(" ") : null,
      },
      { label: "Technical approach", value: project.approach },
      { label: "Technologies", value: project.tech.length ? project.tech.join(", ") : null },
      { label: "Development and validation", value: project.validation },
      { label: "Verified outcomes", value: project.outcomes },
      { label: "Limitations and future work", value: project.limitations },
    ];

  return (
    <dl
      className={cn(
        "border-t",
        light ? "border-deep/[0.18]" : "border-biscuit/[0.18]",
        className,
      )}
    >
      {record.map((row) => (
        <div
          key={row.label}
          className={cn(
            "grid gap-2 border-b py-5 sm:grid-cols-[minmax(0,13rem)_1fr] sm:gap-10",
            light ? "border-deep/[0.12]" : "border-biscuit/[0.12]",
          )}
        >
          <dt className={cn("annotation pt-1", light ? "text-deep/[0.45]" : "text-biscuit/[0.45]")}>
            {row.label}
          </dt>
          <dd
            className={cn(
              row.value
                ? cn("text-[0.9375rem] leading-relaxed", light ? "text-deep/[0.78]" : "text-ivory/[0.78]")
                : cn("annotation pt-1", light ? "text-deep/40" : "text-sage/60"),
            )}
          >
            {row.value ?? "Pending verification"}
          </dd>
        </div>
      ))}
    </dl>
  );
}
