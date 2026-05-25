import { BadgeCheck, PenLine, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Author } from "@/types";

/** Human-readable label for an author role. */
export const ROLE_LABEL: Record<Author["role"], string> = {
  writer: "Health Writer",
  editor: "Editor",
  "medical-reviewer": "Medical Reviewer",
};

/**
 * A small pill identifying an author's editorial role — writer, editor
 * or medical reviewer. Medical reviewers get an accent treatment so
 * the YMYL signal stands out.
 */
export function RoleBadge({
  role,
  className,
}: {
  role: Author["role"];
  className?: string;
}) {
  const config = {
    writer: {
      icon: PenLine,
      classes: "bg-brand-50 text-brand-700",
    },
    editor: {
      icon: Pencil,
      classes: "bg-brand-50 text-brand-700",
    },
    "medical-reviewer": {
      icon: BadgeCheck,
      classes: "bg-accent-50 text-accent-700",
    },
  }[role];

  const IconComp = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-sm px-2.5 py-1 text-xs font-semibold uppercase tracking-wide",
        config.classes,
        className,
      )}
    >
      <IconComp className="h-3.5 w-3.5" aria-hidden />
      {ROLE_LABEL[role]}
    </span>
  );
}
