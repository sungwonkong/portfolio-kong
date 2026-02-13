import React from "react";
import { HeroSection } from "@/widgets/hero/ui/hero-section";
import { ArchitectureHighlightSection } from "@/features/architecture-highlight/ui/architecture-highlight-section";
import { SectionTitle } from "@/shared/ui/section-title";
import { ExperienceTimeline } from "@/entities/experience/ui/experience-timeline";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ArchitectureHighlightSection />
      <section id="experience" className="scroll-mt-24 space-y-6">
        <SectionTitle
          eyebrow="Experience"
          title="주요 경력"
          description="최근 경력을 중심으로 아키텍처·서비스·DevOps 경험을 묶어서 정리했습니다. 이전 회사 경력은 요약 형태로만 제공합니다."
        />
        <ExperienceTimeline />
      </section>
    </>
  );
}

