"use client";

import { cn } from "@/lib/utils";

export function RadioOption({
  checked,
  children,
  onClick,
}: {
  checked: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "flex w-full items-start gap-3 rounded-card border bg-white p-4 text-left text-base leading-7 transition",
        checked ? "border-mint ring-2 ring-mint/15" : "border-ink/10 hover:border-mint/45",
      )}
    >
      <span
        className={cn(
          "mt-1 h-4 w-4 shrink-0 rounded-full border",
          checked ? "border-mint bg-mint shadow-[inset_0_0_0_4px_white]" : "border-ink/25",
        )}
      />
      <span className="text-ink">{children}</span>
    </button>
  );
}
