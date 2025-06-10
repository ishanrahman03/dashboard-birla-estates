import * as React from "react";
import { cn } from "../../utils/cn";

export type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  secondary: "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300",
  destructive: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  outline: "border border-gray-200 text-gray-800 dark:border-gray-700 dark:text-gray-300"
};

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
          variantStyles[variant],
          className
        )}
        {...props}
      />
    );
  }
);

Badge.displayName = "Badge";