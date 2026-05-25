/**
 * Accent-color system for category icons, process steps and small UI
 * accents. A 6-hue color-coding set built on the design tokens in
 * globals.css.
 *
 * Tailwind v4 cannot compile dynamic class names (`bg-${x}-50`), so each
 * color key exposes a set of complete, literal class strings.
 */

/** The six accent color keys. */
export type AccentColor =
  | "blue"
  | "green"
  | "amber"
  | "teal"
  | "coral"
  | "violet";

/** A bundle of literal Tailwind classes for one accent color. */
export interface AccentClasses {
  /** Light tint background — for resting icon medallions. */
  tint: string;
  /** Colored foreground — icon / accent text on a light tint. */
  fg: string;
  /** Solid saturated background — for hover states / number badges. */
  solid: string;
  /** Hover background applied on a `group` parent. */
  groupHoverSolid: string;
  /** Subtle ring color — pairs with `tint`. */
  ring: string;
}

/**
 * The accent palette. `amber` (rating) peaks at the `-500` stop; every
 * other ramp peaks at `-600`.
 */
export const accentColors: Record<AccentColor, AccentClasses> = {
  blue: {
    tint: "bg-brand-50",
    fg: "text-brand-600",
    solid: "bg-brand-600",
    groupHoverSolid: "group-hover:bg-brand-600",
    ring: "ring-brand-100",
  },
  green: {
    tint: "bg-accent-50",
    fg: "text-accent-700",
    solid: "bg-accent-600",
    groupHoverSolid: "group-hover:bg-accent-600",
    ring: "ring-accent-600/15",
  },
  amber: {
    tint: "bg-rating-50",
    fg: "text-rating-500",
    solid: "bg-rating-500",
    groupHoverSolid: "group-hover:bg-rating-500",
    ring: "ring-rating-500/20",
  },
  teal: {
    tint: "bg-teal-50",
    fg: "text-teal-600",
    solid: "bg-teal-600",
    groupHoverSolid: "group-hover:bg-teal-600",
    ring: "ring-teal-100",
  },
  coral: {
    tint: "bg-coral-50",
    fg: "text-coral-600",
    solid: "bg-coral-600",
    groupHoverSolid: "group-hover:bg-coral-600",
    ring: "ring-coral-100",
  },
  violet: {
    tint: "bg-violet-50",
    fg: "text-violet-600",
    solid: "bg-violet-600",
    groupHoverSolid: "group-hover:bg-violet-600",
    ring: "ring-violet-100",
  },
};

/**
 * Category slug → accent color. Hues are spread so adjacent tiles in the
 * homepage grid and the nav category list are always different colors,
 * with sensible matches where obvious (Weight Loss → coral, Hair Loss →
 * amber, Advanced Wellness → violet, Blood Testing → teal).
 */
export const categoryAccent: Record<string, AccentColor> = {
  "weight-loss": "coral",
  "mens-health": "blue",
  "womens-health": "violet",
  ed: "green",
  "hair-loss": "amber",
  skin: "coral",
  "sexual-health": "blue",
  "blood-testing": "teal",
  wellness: "violet",
};

/** Resolve a category slug to its accent classes (falls back to blue). */
export function getCategoryAccent(slug: string): AccentClasses {
  return accentColors[categoryAccent[slug] ?? "blue"];
}

/**
 * Ordered color sequence for the five "How we review" step medallions —
 * one distinct hue per step.
 */
export const stepAccentOrder: AccentColor[] = [
  "blue",
  "teal",
  "violet",
  "coral",
  "green",
];

/** Resolve a 0-based step index to its accent classes (cycles if needed). */
export function getStepAccent(index: number): AccentClasses {
  return accentColors[stepAccentOrder[index % stepAccentOrder.length]];
}
