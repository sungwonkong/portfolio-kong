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
        "group relative h-full rounded-2xl border border-slate-700/70 bg-slate-900/85 p-5 shadow-lg shadow-black/10 transition duration-200 hover:-translate-y-1 hover:border-teal-400/60 hover:shadow-xl hover:shadow-teal-950/30 sm:p-6",
        item.isSpotlight ? "border-teal-400/30" : "",
        emphasizeArchitecture && isArchitecture ? "ring-1 ring-teal-400/25" : ""
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <Link href={`/experience/${item.id}`} className="block">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-bold leading-snug tracking-tight text-white sm:text-xl group-hover:text-teal-200">
              {item.title}
            </h3>
            <p className="text-xs text-slate-400">
              {item.company}
              {item.team && ` · ${item.team}`}
            </p>
            {item.roles && item.roles.length > 0 && (
              <p className="mt-1 text-[11px] font-medium text-teal-200">
                {item.roles.join(" · ")}
              </p>
            )}
          </div>
          <div className="flex flex-col items-end gap-1">
            {item.badgeLabel ? (
              <Badge className="border-teal-400/40 bg-teal-400/10 text-teal-200">
                {item.badgeLabel}
              </Badge>
            ) : (
              item.isRecent && <Badge>Recent</Badge>
            )}
            {item.isCondensed && (
              <span className="text-[10px] text-slate-500">
                요약
              </span>
            )}
            <span className="text-[11px] text-slate-400">{item.period}</span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-7 text-slate-200">{item.summary}</p>

        <ul className="mt-4 space-y-2 text-xs leading-5 text-slate-400">
          {item.highlights.slice(0, emphasizeArchitecture ? 3 : 2).map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1 h-[3px] w-[3px] rounded-full bg-teal-400/70" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs font-semibold text-teal-300">프로젝트 상세 보기 →</p>
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
