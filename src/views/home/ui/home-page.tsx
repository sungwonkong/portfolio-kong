import React from "react";
import { PortfolioMotion } from "@/shared/ui/portfolio-motion";
import { HeroSection } from "@/widgets/hero/ui/hero-section";
import { ArchitectureHighlightSection } from "@/features/architecture-highlight/ui/architecture-highlight-section";
import { SectionTitle } from "@/shared/ui/section-title";
import { ExperienceTimeline } from "@/entities/experience/ui/experience-timeline";

export function HomePage() {
  return (
    <PortfolioMotion>
      <HeroSection />
      <ArchitectureHighlightSection />
      <section aria-labelledby="recognition-title" className="rounded-2xl border border-stone-300/60 bg-stone-100/80 p-6 text-stone-800 shadow-sm sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Recognition · 2026</p>
        <h2 id="recognition-title" className="mt-3 text-xl font-bold sm:text-2xl">CJ OliveNetworks 핵심인재(HCL) 선정</h2>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-stone-600 sm:text-base">신규 서비스 구축과 Full-stack 아키텍처 설계, 프론트엔드 기술 리딩 등 다양한 프로젝트에서 쌓은 경험을 바탕으로 사내 핵심인재 프로그램에 선정되었습니다.</p>
      </section>
      <section id="experience" className="scroll-mt-24 space-y-6">
        <SectionTitle
          eyebrow="Experience"
          title="주요 경력"
          description="10년 이상의 개발 경력을 바탕으로 대규모 서비스의 아키텍처 설계, 인증 플랫폼 구축, 프론트엔드 리딩 및 공통 플랫폼 개발을 수행하고 있습니다."
        />
        <ExperienceTimeline />
      </section>
    </PortfolioMotion>
  );
}
