import clsx from "clsx";
import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "ghost-light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[12px] font-medium transition-all duration-200 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform select-none";

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-[14px]",
  lg: "h-12 px-6 text-[15px]",
};

const variants: Record<Variant, string> = {
  primary:
    "bg-aqua text-white shadow-[0_8px_24px_-12px_rgba(0,179,192,0.55)] hover:bg-aqua-deep hover:shadow-[0_14px_36px_-14px_rgba(0,179,192,0.7)] active:translate-y-[1px]",
  secondary:
    "border border-aqua text-aqua bg-white hover:bg-aqua-soft active:translate-y-[1px]",
  ghost:
    "text-graphite hover:text-aqua",
  "ghost-light":
    "text-white/85 hover:text-white",
};

type AnchorProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;

export function ButtonLink({
  href,
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: AnchorProps) {
  const isExternal = /^(https?:|mailto:|tel:)/.test(href) || href.startsWith("#");
  const classes = clsx(base, sizes[size], variants[variant], className);
  if (isExternal) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
      >
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} {...rest}>
      {children}
    </Link>
  );
}

type ButtonProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
} & ComponentProps<"button">;

export function Button({
  variant = "primary",
  size = "lg",
  className,
  children,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={clsx(base, sizes[size], variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
