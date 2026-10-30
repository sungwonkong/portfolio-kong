import React from "react";
import { SectionTitle } from "@/shared/ui/section-title";
import { EXPERIENCES } from "@/entities/experience/model/experience.data";
import { ExperienceCard } from "@/entities/experience/ui/experience-card";

const FEATURED = ["cjone-newgms-backoffice", "agent-harness-and-ai-workforce", "cjone-global-oauth-platform", "biz-ads-center-aws-optimization"];
const OTHERS = ["cjone-partner-settlement-center", "cjone-msa-cqrs-points"];

export function ArchitectureHighlightSection() {
  const featured = FEATURED.map((id) => EXPERIENCES.find((item) => item.id === id)).filter((item): item is (typeof EXPERIENCES)[number] => Boolean(item));
  const others = OTHERS.map((id) => EXPERIENCES.find((item) => item.id === id)).filter((item): item is (typeof EXPERIENCES)[number] => Boolean(item));

  return (
    <section id="architecture" className="scroll-mt-24 space-y-7">
      <SectionTitle eyebrow="Selected Work" title="핵심 아키텍처 프로젝트" description="MSA·BFF 코어 설계, AI 업무 실행 플랫폼, OAuth 인증, AWS 기반 비즈니스·광고센터 구축까지 핵심 프로젝트를 선별했습니다." />
      <div className="grid gap-5 lg:grid-cols-3">
        {featured.map((item, index) => (
          <div key={item.id} className={index === 0 ? "lg:col-span-2" : ""}>
            <ExperienceCard item={item} emphasizeArchitecture />
          </div>
        ))}
      </div>
      <div className="space-y-4 border-t border-slate-800 pt-7">
        <h3 className="text-lg font-semibold text-slate-100">함께 수행한 플랫폼 설계 경험</h3>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {others.map((item) => <ExperienceCard key={item.id} item={item} />)}
        </div>
      </div>
    </section>
  );
}
