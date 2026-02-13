import React from "react";
import { cn } from "../lib/cn";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement>;

export function Badge({ className, ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-teal-500/40 bg-teal-500/10 px-2.5 py-0.5 text-xs font-medium text-teal-300",
        className
      )}
      {...props}
    />
  );
}

