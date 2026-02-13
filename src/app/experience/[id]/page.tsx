import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { EXPERIENCES } from "@/entities/experience/model/experience.data";
import type { ExperienceItem } from "@/entities/experience/model/experience.types";
import { SectionTitle } from "@/shared/ui/section-title";
import Link from "next/link";

type Props = {
  params: { id: string };
};

function getExperience(id: string): ExperienceItem | undefined {
  return EXPERIENCES.find((exp) => exp.id === id);
}

export function generateMetadata({ params }: Props): Metadata {
  const exp = getExperience(params.id);
  if (!exp) return {};

  return {
    title: `${exp.title} | 공성원 포트폴리오`,
    description: exp.summary
  };
}

export default function ExperienceDetailPage({ params }: Props) {
  const exp = getExperience(params.id);

  if (!exp) {
    notFound();
  }

  const isBizAds = exp.id === "biz-ads-center-aws-optimization";
  const isCjonePrism = exp.id === "cjone-prism-nft";
  const isEventAutomation = exp.id === "event-automation";
  const isPointsSeed = exp.id === "points-seed";
  const isDevops = exp.id === "devops-toolchain";
  const isWeb3 = exp.id === "web3-lab-summary";

  return (
    <div className="mx-auto max-w-3xl space-y-8 py-10">
      <Link
        href="/"
        className="text-xs text-slate-400 underline underline-offset-2 hover:text-teal-300"
      >
        ← 메인으로 돌아가기
      </Link>

      <SectionTitle
        eyebrow={exp.company}
        title={exp.title}
        description={exp.summary}
      />

      {exp.image && (
        <div className="mt-4 overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/60">
          <Image
            src={exp.image}
            alt={exp.imageAlt ?? exp.title}
            width={960}
            height={540}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      )}

      {exp.gallery && exp.gallery.length > 0 && (
        <div className="mt-4 space-y-4">
          {exp.gallery.map((img) => (
            <div
              key={img.src}
              className="overflow-hidden rounded-xl border border-slate-700/60 bg-slate-900/60"
            >
              <Image
                src={img.src}
                alt={img.alt ?? exp.title}
                width={960}
                height={540}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
        {exp.team && <span>{exp.team}</span>}
        <span>· {exp.period}</span>
      </div>

      <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
        {exp.techStack.map((t) => (
          <span
            key={t}
            className="rounded-full bg-slate-800/80 px-2 py-0.5"
          >
            {t}
          </span>
        ))}
      </div>

      {exp.links && exp.links.length > 0 && (
        <div className="space-y-1 text-xs text-teal-300">
          {exp.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="block underline underline-offset-2 hover:text-teal-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <section className="space-y-3 text-sm text-slate-200">
        <h3 className="text-sm font-semibold text-slate-50">주요 역할 &amp; 설계 포인트</h3>
        <ul className="space-y-1.5">
          {exp.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span className="mt-1 h-[3px] w-[3px] rounded-full bg-teal-400/70" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      </section>

      {isBizAds && (
        <section className="space-y-3 text-sm text-slate-200">
          <h3 className="text-sm font-semibold text-slate-50">
            프로젝트 맥락
          </h3>
          <p className="text-slate-300">
            광고주가 비즈니스 프로필을 생성·관리하는{" "}
            <strong>비즈니스 센터</strong>와, 직접 광고를 등록·운영하는{" "}
            <strong>광고 센터</strong>를 하나의 생태계로 묶는 플랫폼
            프로젝트였습니다. 프론트엔드 리드로서 아키텍처 설계부터
            공통 레이아웃/컴포넌트, 백엔드 일부 서비스까지 End-to-End로
            참여했습니다.
          </p>
          <p className="text-slate-300">
            React/Next.js 기반의 SSR/CSR 하이브리드 구조와 Redux 아키텍처,
            axios 모듈화를 통해 광고 등록·운영, 비즈니스 프로필 관리까지
            일관된 UX를 제공했고, 공통 모듈 기반으로 후속 기능 개발과
            신규 인원 온보딩 비용을 크게 줄였습니다.
          </p>
        </section>
      )}

      {isCjonePrism && (
        <section className="space-y-3 text-sm text-slate-200">
          <h3 className="text-sm font-semibold text-slate-50">
            ExportBlock 기반 상세
          </h3>
          <p className="text-slate-300">
            CJ ONE PRISM NFT 프로젝트에서는 IPFS를 CDN 대체재로 도입하고,
            자동화 스크립트를 통해 NFT 메타데이터·이미지 업로드를 파이프라인
            수준으로 정리했습니다. React/Next.js 대시보드를 통해 발행량,
            홀더 수 등 핵심 지표를 실시간으로 시각화해 운영자가 한눈에
            상태를 파악할 수 있도록 했습니다.
          </p>
        </section>
      )}

      {isEventAutomation && (
        <section className="space-y-3 text-sm text-slate-200">
          <h3 className="text-sm font-semibold text-slate-50">
            ExportBlock 기반 상세
          </h3>
          <p className="text-slate-300">
            이벤트 당첨자 PI는 기획·설계·개발을 단독으로 수행한 프로젝트로,
            이벤트 추출 조건을 정형화하고 UI·백엔드를 함께 설계해
            운영자가 스스로 조건을 조합할 수 있게 만든 것이 핵심입니다.
            추출·검증·발표 전 과정을 배치/스케줄러로 자동화해
            월 6MD 이상의 수작업을 제거했습니다.
          </p>
        </section>
      )}

      {isPointsSeed && (
        <section className="space-y-3 text-sm text-slate-200">
          <h3 className="text-sm font-semibold text-slate-50">
            ExportBlock 기반 상세
          </h3>
          <p className="text-slate-300">
            포인트 씨앗은 주기적으로 포인트를 지급하면서, 그 과정에서 광고를
            노출해 추가 매출을 만드는 구조로 설계되었습니다. 배치 스케줄러와
            DB 스키마, 관리자/앱 연동을 함께 설계해, 트래픽이 몰리는 시점에도
            안정적으로 포인트 지급이 이루어지도록 했습니다.
          </p>
        </section>
      )}

      {isDevops && (
        <section className="space-y-3 text-sm text-slate-200">
          <h3 className="text-sm font-semibold text-slate-50">
            ExportBlock 기반 상세
          </h3>
          <p className="text-slate-300">
            DevOps 툴체인 변경 프로젝트는 노후화된 CI/CD 환경을 분석하고,
            GitLab 기반의 표준 빌드·배포 파이프라인으로 전환하는 작업이
            핵심이었습니다. 브랜치 전략과 배포 전략을 재정의하고, 교육과
            가이드 문서까지 포함해 팀 전체가 일관된 방식으로 배포할 수
            있는 기반을 만들었습니다.
          </p>
        </section>
      )}

      {isWeb3 && (
        <section className="space-y-3 text-sm text-slate-200">
          <h3 className="text-sm font-semibold text-slate-50">
            블록체인/스마트컨트랙트 경험
          </h3>
          <p className="text-slate-300">
            Web3 Biz Lab에서는 CryptoonNight 환불 시스템, ADOCENT NFT,
            NFT 대시보드 등 여러 프로젝트를 1인 개발로 수행했습니다.
            Solidity(OpenZeppelin)와 Hardhat을 사용해 컨트랙트를 개발하고,
            테스트넷/메인넷 배포, 환불 로직 구현, 대량 민팅/전송 스크립트
            작성까지 End-to-End로 경험했습니다.
          </p>
          <p className="text-slate-300">
            프론트엔드에서는 React/Next.js를 기반으로, Klaytn(KAS/Klip/Kaikas),
            IPFS(web3.storage), Alchemy API 등을 연동해 실제 사용자가
            NFT를 발행·조회·환불할 수 있는 UX를 설계했습니다. 이 경험이
            현재의 블록체인/분산 시스템 이해도에 큰 밑바탕이 되었습니다.
          </p>
        </section>
      )}
    </div>
  );
}

