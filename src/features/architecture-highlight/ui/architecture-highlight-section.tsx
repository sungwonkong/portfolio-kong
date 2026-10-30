"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { SectionTitle } from "@/shared/ui/section-title";
import { EXPERIENCES } from "@/entities/experience/model/experience.data";

const FEATURED = [
  { id: "cjone-newgms-backoffice", number: "01", label: "PLATFORM ARCHITECTURE", gradient: "from-cyan-500/25 via-blue-500/10 to-transparent" },
  { id: "cjone-global-oauth-platform", number: "02", label: "IDENTITY PLATFORM", gradient: "from-emerald-500/25 via-teal-500/10 to-transparent" },
  { id: "biz-ads-center-aws-optimization", number: "03", label: "CLOUD & DELIVERY", gradient: "from-orange-500/20 via-amber-500/10 to-transparent" },
  { id: "agent-harness-and-ai-workforce", number: "04", label: "AGENTIC AI ENGINEERING", gradient: "from-violet-500/25 via-fuchsia-500/10 to-transparent" }
];

export function ArchitectureHighlightSection() {
  const [active, setActive] = useState(0);
  const selected = FEATURED[active];
  const item = EXPERIENCES.find((exp) => exp.id === selected.id);

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
                {exp?.image ? (
                  <span className="mt-4 block overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
                    <Image
                      src={exp.image}
                      alt={exp.imageAlt ?? exp.title}
                      width={exp.imageWidth ?? 1440}
                      height={exp.imageHeight ?? 900}
                      unoptimized={exp.id === "cjone-global-oauth-platform"}
                      sizes="(min-width: 1024px) 240px, 45vw"
                      className="aspect-[8/5] w-full object-contain"
                    />
                    <span className="block px-3 py-2 text-[10px] text-stone-600">
                      {project.id === "agent-harness-and-ai-workforce" ? "AI 직원 · 3D 사무실 콘셉트 이미지" : project.id === "biz-ads-center-aws-optimization" ? "Biz / Ad Center · 데스크톱 실제 화면" : project.id === "cjone-global-oauth-platform" ? "CJ ONE Global · 제공 원본 이미지" : "멤버십센터 · 데스크톱 실제 화면"}
                    </span>
                  </span>
                ) : null}
                <span className="mt-3 block text-xs text-slate-600">{active === index ? "선택됨 · 아래 상세 보기 ↓" : "클릭하여 상세 보기 ↗"}</span>
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
            {item?.image && (
              <div className="mt-6 grid gap-4">
                {[{ src: item.image, alt: item.imageAlt ?? item.title }, ...(item.gallery ?? [])].map((picture) => (
                  <figure key={picture.src} className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
                    <Image src={picture.src} alt={picture.alt ?? item.title} width={item.imageWidth ?? 1440} height={item.imageHeight ?? 900} unoptimized={item.id === "cjone-global-oauth-platform"} sizes="(min-width: 1152px) 1000px, 90vw" className={item.imageHeight && item.imageWidth && item.imageHeight > item.imageWidth ? "mx-auto h-auto max-h-[640px] w-auto max-w-full object-contain" : "h-auto w-full"} />
                    <figcaption className="border-t border-stone-200 px-4 py-2 text-xs text-stone-600">{picture.alt ?? item.title}</figcaption>
                  </figure>
                ))}
              </div>
            )}
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
              {item?.links?.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer" className="mb-3 mr-3 inline-flex items-center rounded-xl border border-violet-200 bg-white px-5 py-3 text-sm font-bold text-violet-700 transition hover:bg-violet-50">{link.label} 보기 ↗</a>)}
              {item && <Link href={`/experience/${item.id}`} className="inline-flex items-center rounded-xl bg-violet-600 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300">프로젝트 전체 보기 <span className="ml-2">↗</span></Link>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
