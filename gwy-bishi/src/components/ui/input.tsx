import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      className={cn(
        "h-11 w-full rounded-card border border-ink/12 bg-white px-3 text-sm text-ink outline-none transition placeholder:text-ink/38 focus:border-mint focus:ring-2 focus:ring-mint/15",
        className,
      )}
      {...props}
    />
  ),
);
Input.displayName = "Input";
