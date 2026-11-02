import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "outlineDark";

const variants: Record<Variant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  outlineDark: "btn-outline-dark",
};

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: "default" | "small";
  className?: string;
  showArrow?: boolean;
  prefetch?: boolean;
};

export default function ButtonLink({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
  showArrow = true,
  prefetch,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      prefetch={prefetch}
      className={cn(
        "btn group",
        variants[variant],
        size === "small" && "btn-small",
        className,
      )}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight size={size === "small" ? 14 : 16} strokeWidth={1.6} data-shift aria-hidden />
      )}
    </Link>
  );
}
