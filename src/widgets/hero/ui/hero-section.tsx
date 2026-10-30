import React from "react";
import Link from "next/link";

const expertise = ["MSA · BFF · Domain Architecture", "Enterprise Agentic AI", "OAuth 2.0 · PKCE", "Next.js · Frontend Platform"];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-br from-slate-900 via-slate-900 to-teal-950/50 px-6 py-12 shadow-2xl shadow-black/20 sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" aria-hidden="true" />
      <div className="relative max-w-4xl space-y-7">
        <p className="inline-flex rounded-full border border-teal-400/40 bg-teal-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-teal-200">Application Architect · AI Engineering Lead</p>
        <div className="space-y-4">
          <h1 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            복잡한 시스템을 설계하고,<br /><span className="text-teal-300">팀이 실행할 수 있는 구조</span>로 만듭니다.
          </h1>
          <p className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            공성원 · Full-stack 기반 Application Architect. CJ ONE 플랫폼에서 MSA 도메인 분리, BFF, 공통 인증·인가와 프론트엔드 코어를 설계·개발하고 있습니다. 사내 지식과 업무 도구를 연결하는 실행형 AI 에이전트 플랫폼도 엔드투엔드로 구현했습니다.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          {expertise.map((item) => <span key={item} className="rounded-lg border border-slate-600/70 bg-slate-800/70 px-3 py-2 text-xs font-medium text-slate-200">{item}</span>)}
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="#architecture" className="rounded-xl bg-teal-300 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-teal-200">핵심 아키텍처 보기 →</Link>
          <Link href="#experience" className="rounded-xl border border-slate-500 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:bg-slate-800">전체 경력 살펴보기</Link>
        </div>
      </div>
    </section>
  );
}
