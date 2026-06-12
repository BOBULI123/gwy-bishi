import * as React from "react";
import { cn } from "@/lib/utils";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  tone?: "mint" | "gold" | "red" | "ink" | "plain";
};

const tones = {
  mint: "bg-mint/10 text-mint border-mint/20",
  gold: "bg-gold/12 text-amber-800 border-gold/30",
  red: "bg-cinnabar/10 text-cinnabar border-cinnabar/20",
  ink: "bg-ink/8 text-ink border-ink/15",
  plain: "bg-white text-ink/70 border-ink/10",
};

export function Badge({ className, tone = "plain", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-semibold",
        tones[tone],
        className,
      )}
      {...props}
    />
  );
}
