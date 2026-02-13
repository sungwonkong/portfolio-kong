"use client";

import React from "react";
import type { ExperienceItem } from "../model/experience.types";
import { Badge } from "@/shared/ui/badge";
import Link from "next/link";

type Props = {
  item: ExperienceItem;
  emphasizeArchitecture?: boolean;
};

export function ExperienceCard({ item, emphasizeArchitecture }: Props) {
  const isArchitecture = item.kind === "architecture";

  return (
    <article
      className={[
        "relative rounded-xl border border-slate-700/60 bg-slate-900/60 p-4 shadow-sm backdrop-blur-sm transition hover:border-teal-400/60 hover:shadow-teal-500/10 hover:-translate-y-0.5",
        emphasizeArchitecture && isArchitecture ? "ring-1 ring-teal-400/80" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link href={`/experience/${item.id}`} className="block">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-slate-50 sm:text-lg">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400">
              {item.company}
              {item.team && ` · ${item.team}`}
            </p>
          </div>
          <div className="flex flex-col items-end gap-1">
            {item.isRecent && <Badge>Recent</Badge>}
            {item.isCondensed && (
              <span className="text-[10px] text-slate-500">
                요약
              </span>
            )}
            <span className="text-[11px] text-slate-400">{item.period}</span>
          </div>
        </div>

        <p className="mt-3 text-sm text-slate-300">{item.summary}</p>

        <ul className="mt-3 space-y-1.5 text-xs text-slate-400">
          {item.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1 h-[3px] w-[3px] rounded-full bg-teal-400/70" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </Link>

      {item.links && item.links.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-teal-300">
          {item.links.map((link) => (
            <button
              key={link.href}
              type="button"
              className="underline underline-offset-2 hover:text-teal-200"
              onClick={(e) => {
                e.stopPropagation();
                window.open(link.href, "_blank", "noopener,noreferrer");
              }}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}

        <div className="mt-3 flex flex-wrap gap-1.5">
          {item.techStack.slice(0, 6).map((t) => (
            <span
              key={t}
              className="rounded-full bg-slate-800/80 px-2 py-0.5 text-[10px] text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>
      </article>
  );
}

