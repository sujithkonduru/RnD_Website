import { cn } from "@/lib/utils";

type StatusTagProps = {
  label: string;
  state?: "active" | "pending" | "proposed" | "implemented";
  tone?: "dark" | "light";
  className?: string;
};

const dotColor: Record<NonNullable<StatusTagProps["state"]>, string> = {
  active: "bg-brick-bright",
  pending: "bg-sage",
  proposed: "bg-sage",
  implemented: "bg-[#7f9a7e]",
};

export default function StatusTag({
  label,
  state = "pending",
  tone = "dark",
  className,
}: StatusTagProps) {
  return (
    <span
      className={cn(
        "annotation inline-flex items-center gap-2 border px-2.5 py-1",
        tone === "light"
          ? "border-deep/20 text-deep/70"
          : "border-biscuit/25 text-biscuit/80",
        className,
      )}
    >
      <span aria-hidden className={cn("h-1.5 w-1.5 rounded-full", dotColor[state])} />
      {label}
    </span>
  );
}
