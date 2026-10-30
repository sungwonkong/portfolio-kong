import React from "react";
import Link from "next/link";

const expertise = ["MSA · BFF · Domain Architecture", "Enterprise Agentic AI", "OAuth 2.0 · PKCE", "Next.js · Frontend Platform"];

export function HeroSection() {
  return (
    <section data-spotlight className="motion-spotlight hero-motion relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-950 px-6 py-12 shadow-2xl shadow-black/30 sm:px-10 sm:py-16">
      <div aria-hidden="true" className="hero-grid pointer-events-none absolute inset-0" />
      <div aria-hidden="true" className="hero-signal pointer-events-none absolute inset-x-0 bottom-0 h-32"><span /><span /><span /></div>
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl portfolio-orb" aria-hidden="true" />
      <div className="relative max-w-4xl space-y-7">
        <p data-reveal className="inline-flex rounded-full border border-indigo-400/40 bg-slate-800 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-200">Full-stack Engineer · Application Architect · AI Engineering</p>
        <div className="space-y-4">
          <h1 data-reveal data-motion-delay="80" className="text-4xl font-bold leading-tight tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
            복잡한 시스템을 설계하고,<br /><span className="text-violet-300">팀이 실행할 수 있는 구조</span>로 만듭니다.
          </h1>
          <p data-reveal data-motion-delay="160" className="max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
            공성원 · Full-stack Engineer & Application Architect. CJ ONE 플랫폼에서 MSA 도메인 분리, BFF, 공통 인증·인가와 프론트엔드 코어를 설계·개발하고 있습니다. 사내 지식과 업무 도구를 연결하는 실행형 AI 에이전트 플랫폼도 엔드투엔드로 구현했습니다.
          </p>
        </div>
        <div data-reveal data-motion-delay="240" className="flex flex-wrap gap-2">
          {expertise.map((item) => <span key={item} className="rounded-lg border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-medium text-slate-300">{item}</span>)}
        </div>
        <div data-reveal data-motion-delay="320" className="flex flex-wrap gap-3">
          <Link href="#architecture" className="motion-button inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-violet-600">핵심 아키텍처 보기 <span aria-hidden="true" className="motion-arrow">→</span></Link>
          <Link href="#experience" className="rounded-xl border border-indigo-400/40 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-slate-800">전체 경력 살펴보기</Link>
        </div>
      </div>
    </section>
  );
}
