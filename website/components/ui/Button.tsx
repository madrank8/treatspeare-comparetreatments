import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

/**
 * Button / link styling variants (architecture §5).
 * `affiliate` is reserved for the green VISIT SITE CTA — the single
 * loudest element on the page.
 */
export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-semibold transition-all focus-visible:outline-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        affiliate:
          "rounded-md bg-accent-600 text-white shadow-card hover:bg-accent-700 hover:-translate-y-0.5 active:translate-y-0",
        primary:
          "rounded-md bg-brand-600 text-white hover:bg-brand-700",
        secondary:
          "rounded-md border border-line-200 bg-white text-brand-600 hover:bg-brand-50",
        ghost: "rounded-md text-brand-600 hover:bg-brand-50",
        "dark-outline":
          "rounded-md border border-white/30 text-white hover:bg-white/10",
      },
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-5 py-2.5 text-[0.95rem]",
        lg: "px-6 py-3 text-base",
      },
      block: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      block: false,
    },
  },
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

/** A styled internal link. */
export function ButtonLink({
  href,
  variant,
  size,
  block,
  className,
  children,
  ...rest
}: ButtonBaseProps & {
  href: string;
} & React.ComponentProps<typeof Link>) {
  return (
    <Link
      href={href}
      className={cn(buttonVariants({ variant, size, block }), className)}
      {...rest}
    >
      {children}
    </Link>
  );
}

/** A styled native button. */
export function Button({
  variant,
  size,
  block,
  className,
  children,
  ...rest
}: ButtonBaseProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, block }), className)}
      {...rest}
    >
      {children}
    </button>
  );
}
