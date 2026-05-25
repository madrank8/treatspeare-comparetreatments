import {
  Activity,
  Calculator,
  Droplet,
  Flame,
  HeartPulse,
  type LucideIcon,
  Mars,
  ScanFace,
  Scale,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Venus,
} from "lucide-react";
import type { IconKey, ReviewStep } from "@/types";

/** Maps a category icon key to a lucide icon. */
const categoryIcons: Record<IconKey, LucideIcon> = {
  "weight-loss": Flame,
  "mens-health": Mars,
  "womens-health": Venus,
  ed: HeartPulse,
  "hair-loss": Sparkles,
  skin: ScanFace,
  "sexual-health": Activity,
  "blood-testing": Droplet,
  wellness: Stethoscope,
  trt: Mars,
  hrt: Venus,
};

/** Maps a review-step icon key to a lucide icon. */
const stepIcons: Record<ReviewStep["icon"], LucideIcon> = {
  search: Search,
  scale: Scale,
  calculator: Calculator,
  "shield-check": ShieldCheck,
  send: Send,
};

export function CategoryIcon({
  name,
  className,
}: {
  name: IconKey;
  className?: string;
}) {
  const LucideComp = categoryIcons[name] ?? Stethoscope;
  return <LucideComp className={className} aria-hidden />;
}

export function StepIcon({
  name,
  className,
}: {
  name: ReviewStep["icon"];
  className?: string;
}) {
  const LucideComp = stepIcons[name] ?? Search;
  return <LucideComp className={className} aria-hidden />;
}
