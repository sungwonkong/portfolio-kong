"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionTitle } from "@/shared/ui/section-title";
import { EXPERIENCES } from "@/entities/experience/model/experience.data";
import { ExperienceCard } from "@/entities/experience/ui/experience-card";

const FEATURED = [
  { id: "cjone-newgms-backoffice", number: "01", label: "PLATFORM ARCHITECTURE", gradient: "from-cyan-500/25 via-blue-500/10 to-transparent" },
  { id: "cjone-global-oauth-platform", number: "02", label: "IDENTITY PLATFORM", gradient: "from-emerald-500/25 via-teal-500/10 to-transparent" },
  { id: "biz-ads-center-aws-optimization", number: "03", label: "CLOUD & DELIVERY", gradient: "from-orange-500/20 via-amber-500/10 to-transparent" },
  { id: "agent-harness-and-ai-workforce", number: "04", label: "AGENTIC AI ENGINEERING", gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent" }
];
const LIVE_SITES: Record<string, string> = { "cjone-newgms-backoffice": "https://membership.cjone.com", "biz-ads-center-aws-optimization": "https://biz.cjone.com" };
const OTHERS = ["cjone-partner-settlement-center", "cjone-msa-cqrs-points"];

export function ArchitectureHighlightSection() {
  const [active, setActive] = useState(0);
  const selected = FEATURED[active];
  const item = EXPERIENCES.find((exp) => exp.id === selected.id);
  const others = OTHERS.map((id) => EXPERIENCES.find((exp) => exp.id === id)).filter((exp): exp is (typeof EXPERIENCES)[number] => Boolean(exp));

  return (
    <section id="architecture" className="scroll-mt-24 space-y-7">
      <SectionTitle eyebrow="Selected Work / 2026" title="아키텍처를 탐색해 보세요" description="프로젝트를 선택하면 설계 관점과 기술적 의사결정이 인터랙티브 패널에 나타납니다." />
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {FEATURED.map((project, index) => {
            const exp = EXPERIENCES.find((entry) => entry.id === project.id);
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                aria-controls="architecture-detail"
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:p-5 ${active === index ? "scale-[1.01] border-violet-300 bg-white shadow-[0_14px_35px_rgba(100,80,130,0.12)]" : "border-stone-200 bg-white/70 hover:-translate-y-1 hover:border-violet-200 hover:bg-white"}`}
              >
                <span className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300 to-violet-400 transition-opacity duration-500 ${active === index ? "opacity-100" : "opacity-0"}`} />
                <span className="text-[10px] font-bold tracking-[0.2em] text-violet-600">{project.number} / {project.label}</span>
                <span className="mt-2 block text-sm font-bold leading-snug text-slate-900 sm:text-lg">{exp?.title ?? project.id}</span>
                <span className="mt-4 block overflow-hidden rounded-xl border border-white/70 bg-gradient-to-br from-white via-violet-50 to-sky-100 p-4 shadow-inner"><span className="block rounded-lg border border-stone-200 bg-white/90 p-3 shadow-sm"><span className="mb-2 flex gap-1"><i className="h-1.5 w-1.5 rounded-full bg-rose-300" /><i className="h-1.5 w-1.5 rounded-full bg-amber-300" /><i className="h-1.5 w-1.5 rounded-full bg-emerald-300" /></span><span className="block h-2 w-2/3 rounded bg-violet-100" /><span className="mt-2 block h-2 w-full rounded bg-sky-100" /><span className="mt-2 block h-2 w-4/5 rounded bg-stone-100" /></span><span className="mt-3 block text-[10px] font-medium text-stone-500">데스크톱 실제 화면 캡처 준비 중</span></span><span className="mt-3 block text-xs text-slate-600">{active === index ? "선택됨 · 아래 상세 보기 ↓" : "클릭하여 상세 보기 ↗"}</span>
              </button>
            );
          })}
        </div>
        <div id="architecture-detail" aria-live="polite" className="relative min-h-[360px] overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-[0_20px_65px_rgba(105,86,117,0.10)]">
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${selected.gradient} transition-all duration-700`} />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-violet-200/40 shadow-[0_0_90px_rgba(56,189,248,0.13)]" />
          <div key={selected.id} className="portfolio-reveal relative flex h-full flex-col p-6 sm:p-9">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-slate-700">{selected.label}</span>
              <span className="text-4xl font-black text-violet-100 sm:text-6xl">{selected.number}</span>
            </div>
            <h3 className="mt-7 text-2xl font-bold leading-tight tracking-tight text-slate-900 sm:text-3xl">{item?.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item?.summary}</p>
            <div className="my-6 h-px bg-gradient-to-r from-violet-300/50 via-stone-200 to-transparent" />
            <p className="text-[11px] font-semibold tracking-[0.16em] text-violet-600">ARCHITECTURE DECISIONS</p>
            <ul className="mt-4 space-y-3">
              {item?.highlights.slice(0, 4).map((highlight, index) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-700">
                  <span className="shrink-0 font-mono text-violet-600">{String(index + 1).padStart(2, "0")}</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              <div className="mb-5 flex flex-wrap gap-2">
                {item?.techStack.slice(0, 6).map((tech) => <span key={tech} className="rounded-full border border-stone-200 bg-stone-50 px-3 py-1 text-[11px] text-slate-600">{tech}</span>)}
              </div>
              {item && LIVE_SITES[item.id] && <a href={LIVE_SITES[item.id]} target="_blank" rel="noopener noreferrer" className="mr-3 inline-flex items-center rounded-xl border border-violet-200 bg-white px-5 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50">실제 서비스 보기 ↗</a>}
              {item && <Link href={`/experience/${item.id}`} className="inline-flex items-center rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">프로젝트 전체 보기 <span className="ml-2">↗</span></Link>}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 border-t border-stone-200 pt-7">
        <h3 className="text-lg font-semibold text-slate-900">더 많은 플랫폼 설계 경험</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {others.map((exp) => <ExperienceCard key={exp.id} item={exp} />)}
        </div>
      </div>
    </section>
  );
}
