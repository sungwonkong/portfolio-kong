"use client";

import React, { useState } from "react";
import { EXPERIENCES } from "../model/experience.data";
import { ExperienceCard } from "./experience-card";

type Props = { onlyRecent?: boolean };

export function ExperienceTimeline({ onlyRecent }: Props) {
  const [showLegacy, setShowLegacy] = useState(false);
  const visible = EXPERIENCES.filter((item) => item.kind !== "legacy" && !item.isSpotlight);
  const legacy = EXPERIENCES.filter((item) => item.kind === "legacy");

  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-2">
        {visible.map((item) => (
          <ExperienceCard key={item.id} item={item} />
        ))}
      </div>
      {!onlyRecent && legacy.length > 0 && (
        <section className="rounded-2xl border border-slate-700/70 bg-slate-900/40 p-5 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-300">Career Archive</p>
              <h3 className="mt-2 text-lg font-semibold text-white">이전 경력 · Web3 및 백엔드 경험</h3>
              <p className="mt-1 text-sm text-slate-400">최근 핵심 프로젝트에 집중할 수 있도록 이전 경력은 접어두었습니다.</p>
            </div>
            <button
              type="button"
              aria-expanded={showLegacy}
              aria-controls="legacy-experiences"
              onClick={() => setShowLegacy((value) => !value)}
              className="rounded-xl border border-teal-400/50 bg-teal-400/10 px-4 py-2.5 text-sm font-semibold text-teal-100 transition hover:bg-teal-400/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
            >
              {showLegacy ? "이전 경력 접기 ↑" : `이전 경력 펼쳐보기 (${legacy.length}) ↓`}
            </button>
          </div>
          {showLegacy && (
            <div id="legacy-experiences" className="mt-5 grid gap-4 lg:grid-cols-2">
              {legacy.map((item) => <ExperienceCard key={item.id} item={item} />)}
            </div>
          )}
        </section>
      )}
    </div>
  );
}
