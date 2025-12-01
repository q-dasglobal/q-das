import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface SectionBadgeProps {
  children: React.ReactNode;
  icon?: LucideIcon | React.ComponentType<{ className?: string }>;
  className?: string;
}

export function SectionBadge({
  children,
  icon: Icon = Star,
  className,
}: SectionBadgeProps) {
  return (
    <span
      className={cn(
        "border-primary/20 bg-primary-light text-primary inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm",
        className,
      )}
    >
      <Icon className="h-4 w-4 shrink-0" />
      <span>{children}</span>
    </span>
  );
}
