"use client";

import React, { useState } from "react";
import Link from "next/link";
import { SectionTitle } from "@/shared/ui/section-title";
import { EXPERIENCES } from "@/entities/experience/model/experience.data";
import { ExperienceCard } from "@/entities/experience/ui/experience-card";

const FEATURED = [
  { id: "cjone-newgms-backoffice", number: "01", label: "PLATFORM ARCHITECTURE", gradient: "from-cyan-500/25 via-blue-500/10 to-transparent" },
  { id: "agent-harness-and-ai-workforce", number: "02", label: "AGENTIC AI ENGINEERING", gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent" },
  { id: "cjone-global-oauth-platform", number: "03", label: "IDENTITY PLATFORM", gradient: "from-emerald-500/25 via-teal-500/10 to-transparent" },
  { id: "biz-ads-center-aws-optimization", number: "04", label: "CLOUD & DELIVERY", gradient: "from-orange-500/20 via-amber-500/10 to-transparent" }
];
const OTHERS = ["cjone-partner-settlement-center", "cjone-msa-cqrs-points"];

export function ArchitectureHighlightSection() {
  const [active, setActive] = useState(0);
  const selected = FEATURED[active];
  const item = EXPERIENCES.find((exp) => exp.id === selected.id);
  const others = OTHERS.map((id) => EXPERIENCES.find((exp) => exp.id === id)).filter((exp): exp is (typeof EXPERIENCES)[number] => Boolean(exp));

  return (
    <section id="architecture" className="scroll-mt-24 space-y-7">
      <SectionTitle eyebrow="Selected Work / 2026" title="아키텍처를 탐색해 보세요" description="프로젝트를 선택하면 설계 관점과 기술적 의사결정이 인터랙티브 패널에 나타납니다." />
      <div className="grid gap-4 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-1">
          {FEATURED.map((project, index) => {
            const exp = EXPERIENCES.find((entry) => entry.id === project.id);
            return (
              <button
                key={project.id}
                type="button"
                onClick={() => setActive(index)}
                aria-pressed={active === index}
                aria-controls="architecture-detail"
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 sm:p-5 ${active === index ? "scale-[1.01] border-cyan-300/70 bg-slate-800 shadow-[0_0_35px_rgba(34,211,238,0.12)]" : "border-slate-700/70 bg-slate-900/60 hover:-translate-y-1 hover:border-slate-500 hover:bg-slate-800/70"}`}
              >
                <span className={`absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300 to-violet-400 transition-opacity duration-500 ${active === index ? "opacity-100" : "opacity-0"}`} />
                <span className="text-[10px] font-bold tracking-[0.2em] text-cyan-300/80">{project.number} / {project.label}</span>
                <span className="mt-2 block text-sm font-bold leading-snug text-white sm:text-lg">{exp?.title ?? project.id}</span>
                <span className="mt-2 block text-xs text-slate-400">{active === index ? "현재 선택됨 · 오른쪽에서 상세 확인" : "클릭해서 아키텍처 살펴보기 ↗"}</span>
              </button>
            );
          })}
        </div>
        <div id="architecture-detail" aria-live="polite" className="relative min-h-[440px] overflow-hidden rounded-3xl border border-slate-600/70 bg-[#0b1224] shadow-[0_25px_80px_rgba(0,0,0,0.3)]">
          <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${selected.gradient} transition-all duration-700`} />
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10 shadow-[0_0_90px_rgba(56,189,248,0.13)]" />
          <div key={selected.id} className="portfolio-reveal relative flex h-full flex-col p-6 sm:p-9">
            <div className="flex items-center justify-between gap-3">
              <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-[10px] font-bold tracking-[0.18em] text-slate-200">{selected.label}</span>
              <span className="text-4xl font-black text-white/10 sm:text-6xl">{selected.number}</span>
            </div>
            <h3 className="mt-7 text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl">{item?.title}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-300">{item?.summary}</p>
            <div className="my-6 h-px bg-gradient-to-r from-cyan-300/50 via-white/20 to-transparent" />
            <p className="text-[11px] font-semibold tracking-[0.16em] text-cyan-300">ARCHITECTURE DECISIONS</p>
            <ul className="mt-4 space-y-3">
              {item?.highlights.slice(0, 4).map((highlight, index) => (
                <li key={highlight} className="flex gap-3 text-sm leading-6 text-slate-200">
                  <span className="shrink-0 font-mono text-cyan-300/80">{String(index + 1).padStart(2, "0")}</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="mt-auto pt-7">
              <div className="mb-5 flex flex-wrap gap-2">
                {item?.techStack.slice(0, 6).map((tech) => <span key={tech} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] text-slate-300">{tech}</span>)}
              </div>
              {item && <Link href={`/experience/${item.id}`} className="inline-flex items-center rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">프로젝트 전체 보기 <span className="ml-2">↗</span></Link>}
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-4 border-t border-slate-800 pt-7">
        <h3 className="text-lg font-semibold text-slate-100">더 많은 플랫폼 설계 경험</h3>
        <div className="grid gap-4 md:grid-cols-2">
          {others.map((exp) => <ExperienceCard key={exp.id} item={exp} />)}
        </div>
      </div>
    </section>
  );
}
