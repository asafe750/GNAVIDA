import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type BaseButtonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type AnchorButtonProps = BaseButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className"> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

export type ButtonProps = AnchorButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-green text-navy font-bold hover:brightness-110 hover:scale-[1.02]",
  secondary:
    "border-2 border-green text-green hover:bg-green hover:text-navy",
  ghost: "text-white underline-offset-4 hover:underline",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

function classNames(...classes: Array<string | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export function Button(props: ButtonProps) {
  if (isAnchorButtonProps(props)) {
    const {
      children,
      className,
      size = "md",
      variant = "primary",
      ...anchorProps
    } = props;
    const classes = getButtonClasses(variant, size, className);

    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const {
    children,
    className,
    size = "md",
    variant = "primary",
    ...buttonProps
  } = props;
  const classes = getButtonClasses(variant, size, className);

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

function isAnchorButtonProps(props: ButtonProps): props is AnchorButtonProps {
  return typeof props.href === "string";
}

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className?: string,
): string {
  return classNames(
    "inline-flex items-center justify-center rounded-full transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-green",
    variantClasses[variant],
    sizeClasses[size],
    className,
  );
}
