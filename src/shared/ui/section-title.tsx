import React from "react";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export function SectionTitle({ eyebrow, title, description }: SectionTitleProps) {
  return (
    <header className="space-y-2">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold text-slate-50 sm:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="max-w-2xl text-sm text-slate-400 sm:text-base">
          {description}
        </p>
      )}
    </header>
  );
}

