import { cn } from "@/lib/utils";

type PendingNoteProps = {
  label?: string;
  children?: React.ReactNode;
  tone?: "dark" | "light";
  className?: string;
};

/**
 * Honest empty state for content Stackenzo has not published yet. Styled as a
 * technical note so it reads as deliberate restraint rather than a missing
 * asset.
 */
export default function PendingNote({
  label = "Documentation pending",
  children = "This section will be completed once the project record is verified for publication.",
  tone = "dark",
  className,
}: PendingNoteProps) {
  const light = tone === "light";

  return (
    <div
      className={cn(
        "border-l pl-4",
        light ? "border-brick/70" : "border-brick-bright/70",
        className,
      )}
    >
      <p className={cn("annotation", light ? "text-brick" : "text-biscuit/75")}>{label}</p>
      <p
        className={cn(
          "mt-2 max-w-lg text-[0.9375rem] leading-relaxed",
          light ? "text-deep/60" : "text-ivory/50",
        )}
      >
        {children}
      </p>
    </div>
  );
}
