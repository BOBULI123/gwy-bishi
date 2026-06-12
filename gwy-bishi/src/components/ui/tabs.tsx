"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

type TabsContextValue = {
  value: string;
  setValue: (value: string) => void;
};

const TabsContext = React.createContext<TabsContextValue | null>(null);

export function Tabs({
  defaultValue,
  value,
  onValueChange,
  children,
  className,
}: {
  defaultValue: string;
  value?: string;
  onValueChange?: (value: string) => void;
  children: React.ReactNode;
  className?: string;
}) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const currentValue = value ?? internalValue;
  const setValue = React.useCallback(
    (next: string) => {
      setInternalValue(next);
      onValueChange?.(next);
    },
    [onValueChange],
  );

  return (
    <TabsContext.Provider value={{ value: currentValue, setValue }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

function useTabs() {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("Tabs components must be used inside Tabs");
  return context;
}

export function TabsList({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("inline-flex rounded-card border border-ink/10 bg-white p-1", className)}
      {...props}
    />
  );
}

export function TabsTrigger({
  value,
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & { value: string }) {
  const tabs = useTabs();
  const active = tabs.value === value;

  return (
    <button
      className={cn(
        "rounded-md px-3 py-2 text-sm font-semibold text-ink/62 transition",
        active && "bg-ink text-white shadow-sm",
        className,
      )}
      onClick={() => tabs.setValue(value)}
      type="button"
      {...props}
    />
  );
}

export function TabsContent({
  value,
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement> & { value: string }) {
  const tabs = useTabs();
  if (tabs.value !== value) return null;
  return <div className={cn("mt-4", className)} {...props} />;
}
