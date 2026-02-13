import React from "react";
import { Badge } from "@/shared/ui/badge";

export function HeroSection() {
  return (
    <section className="space-y-6 py-10">
      <Badge>Fullstack · Architecture · Blockchain</Badge>
      <div className="space-y-4">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50 sm:text-4xl md:text-5xl">
          아키텍처 설계가 가능한
          <br />
          풀스택 개발자 <span className="text-teal-300">공성원</span>입니다.
        </h1>
        <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
          CJONE 멤버십/포인트 도메인에서 MSA &amp; CQRS 기반 아키텍처 설계와
          프론트엔드·백엔드 전 구간을 경험했습니다. 비즈센터·광고센터, 다양한
          Web3/NFT 프로젝트, DevOps 툴체인 전환까지 설계–구현–운영을
          End-to-End로 리드하고 있습니다.
        </p>
      </div>
      <div className="flex flex-wrap gap-2 text-xs text-slate-300">
        <span className="rounded-full bg-slate-800/80 px-3 py-1">
          AWS · Kubernetes · MSA · CQRS
        </span>
        <span className="rounded-full bg-slate-800/80 px-3 py-1">
          React · Next.js · TypeScript · FSD
        </span>
        <span className="rounded-full bg-slate-800/80 px-3 py-1">
          Blockchain · NFT · Web3
        </span>
      </div>
    </section>
  );
}

