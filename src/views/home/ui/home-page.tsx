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
          description="10년 이상의 개발 경력을 바탕으로 대규모 서비스의 아키텍처 설계, 인증 플랫폼 구축, 프론트엔드 리딩 및 공통 플랫폼 개발을 수행하고 있습니다."
        />
        <ExperienceTimeline />
      </section>
    </>
  );
}
