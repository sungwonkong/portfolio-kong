import React from "react";
import { SectionTitle } from "@/shared/ui/section-title";
import { EXPERIENCES } from "@/entities/experience/model/experience.data";
import { ExperienceCard } from "@/entities/experience/ui/experience-card";

const ARCH_IDS = [
  "biz-ads-center-aws-optimization",
  "cjone-msa-cqrs-points",
  "frontend-conventions-design-system"
];

export function ArchitectureHighlightSection() {
  const items = EXPERIENCES.filter((exp) => ARCH_IDS.includes(exp.id));

  return (
    <section id="architecture" className="scroll-mt-24 space-y-6">
      <SectionTitle
        eyebrow="Architecture"
        title="아키텍처 설계가 가능한 풀스택 개발자"
        description="AWS·MSA·CQRS·DevOps·프론트엔드 아키텍처까지 설계 단계에서부터 참여한 경험을 중심으로 정리했습니다."
      />

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item) => (
          <ExperienceCard
            key={item.id}
            item={item}
            emphasizeArchitecture
          />
        ))}
      </div>
    </section>
  );
}

