import { ArrowRight } from "lucide-react";
import StatusTag from "@/components/ui/StatusTag";
import { cn } from "@/lib/utils";

type SystemDiagramProps = {
  title: string;
  note: string;
  stages: { label: string; detail: string }[];
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Labelled conceptual architecture. Deliberately not drawn as an engineering
 * schematic of a deployed system, because nothing here has been deployed.
 */
export default function SystemDiagram({
  title,
  note,
  stages,
  tone = "dark",
  className,
}: SystemDiagramProps) {
  const light = tone === "light";

  return (
    <figure
      className={cn(
        "border p-6 sm:p-8",
        light ? "border-deep/[0.18] bg-ivory" : "border-biscuit/20 bg-ink/40",
        className,
      )}
    >
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className={cn("annotation", light ? "text-deep/60" : "text-biscuit/70")}>{title}</p>
        <StatusTag label="Conceptual" state="proposed" tone={tone} />
      </div>

      <ol
        className={cn(
          "mt-8 grid gap-px sm:grid-cols-2 lg:grid-cols-5",
          light ? "bg-deep/[0.15]" : "bg-biscuit/[0.15]",
        )}
      >
        {stages.map((stage, index) => (
          <li
            key={stage.label}
            className={cn("relative p-4", light ? "bg-ivory" : "bg-deep")}
          >
            <div className="flex items-center justify-between">
              <span className={cn("annotation", light ? "text-deep/[0.35]" : "text-biscuit/[0.35]")}>
                {String(index + 1).padStart(2, "0")}
              </span>
              {index < stages.length - 1 && (
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  aria-hidden
                  className={cn(
                    "hidden lg:block",
                    light ? "text-brick/70" : "text-brick-bright",
                  )}
                />
              )}
            </div>
            <p className={cn("mt-8 text-[0.9375rem]", light ? "text-deep" : "text-ivory")}>
              {stage.label}
            </p>
            <p
              className={cn(
                "mt-2 text-[0.75rem] leading-relaxed",
                light ? "text-deep/[0.55]" : "text-ivory/50",
              )}
            >
              {stage.detail}
            </p>
          </li>
        ))}
      </ol>

      <figcaption
        className={cn(
          "annotation mt-5 leading-relaxed tracking-[0.1em]",
          light ? "text-deep/[0.45]" : "text-sage/[0.65]",
        )}
      >
        {note}
      </figcaption>
    </figure>
  );
}
