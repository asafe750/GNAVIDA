import type { HTMLAttributes, ReactNode } from "react";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  children: ReactNode;
};

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full bg-green/15 px-4 py-1.5 text-sm font-semibold text-green",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </span>
  );
}
