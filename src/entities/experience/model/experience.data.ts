import type { ExperienceItem } from "./experience.types";

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "cjone-newgms-backoffice",
    company: "CJ OliveNetworks",
    team: "CJ ONE 팀",
    period: "2026 ~ Present",
    title: "newGms 멤버십센터 | 정산·Partner Front 플랫폼",
    kind: "architecture",
    techStack: ["Next.js", "React", "TypeScript", "Java", "Spring Boot", "Redis", "TanStack Query", "Figma"],
    summary: "파트너사의 정산 및 운영 업무를 지원하는 newGms 멤버십센터(정산센터·Partner Front)의 MSA 도메인 경계, 공통 인증·인가, BFF 책임 분리, 프론트엔드 애플리케이션 프레임을 아우르는 코어 아키텍처를 설계·개발하고 있습니다. 개별 화면보다 서비스 간 책임과 개발 표준을 먼저 정의해 확장성과 팀 개발 일관성을 확보하는 데 집중했습니다.",
    highlights: [
      "MSA: 도메인별 데이터 소유권·업무 규칙·변경 주기·장애 경계를 고려한 서비스 분리와 연동 책임 설계",
      "BFF: Next.js 계층에 세션 처리·API 집계·화면별 응답 조합 등 애플리케이션 오케스트레이션을 배치하고, 도메인 규칙·트랜잭션·비즈니스 상태는 Spring Boot 서비스에 유지",
      "공통 인증·인가: BFF permission guard, Java 인증 API, Redis 권한 캐시, TanStack Query의 역할을 구분하고 동시 요청 최적화(singleflight, L1/L2 캐시)와 무효화 전략 검토",
      "프론트엔드 코어: 라우팅·레이아웃·API 클라이언트·상태 관리·오류 처리·공통 UI 구조를 표준화하는 Next.js 프레임워크 설계·개발",
      "디자인 시스템 도입: Figma 기반 디자인 토큰과 Filter·Chip·Table·Button·Pagination 등 공통 컴포넌트를 신규 백오피스 UI에 적용",
      "Orbit 의견관리 화면을 실제 적용 사례로 활용해 코어 구조의 API 연동과 UI 상태 흐름 검증"
    ],
    roles: ["Application Architect", "Frontend Architecture & Development Lead", "Core Platform Engineering"],
    responsibilities: [
      "도메인별 MSA 경계 및 서비스 간 책임 설계",
      "BFF 애플리케이션 로직과 백엔드 도메인 로직 분리",
      "공통 인증·인가와 권한 캐시 구조 검토",
      "프론트엔드 프레임워크 및 개발 표준 설계·구현",
      "디자인 시스템 도입과 공통 UI 기반 구축"
    ],
    challenges: [
      "도메인 규칙이 BFF에 유입되지 않도록 책임 경계 유지",
      "다수 API의 동시 권한 조회에 따른 중복 호출 및 캐시 정합성 문제",
      "독립적인 도메인 변경과 일관된 사용자 경험을 동시에 지원"
    ],
    image: "/images/experience/newgms-membership-desktop.webp",
    imageAlt: "CJ ONE 멤버십센터 데스크톱 화면 — 멤버십 플랫폼 소개",
    links: [{ label: "멤버십센터", href: "https://membership.cjone.com" }],
    achievements: [
      "파트너 정산·운영 플랫폼의 서비스 아키텍처와 프론트엔드 개발 표준 수립",
      "공통 컴포넌트 기반 UI 체계와 BFF 연동 구조를 구축해 개발 일관성 및 확장성 확보"
    ],
    badgeLabel: "Core Architecture",
    isSpotlight: true
  },
  {
    id: "agent-harness-and-ai-workforce",
    company: "CJ OliveNetworks",
    team: "AI Engineering Initiative",
    period: "2026 ~ Present",
    title: "Enterprise AI Employee | 사내 업무 실행형 AI 에이전트 플랫폼",
    kind: "architecture",
    techStack: ["Enterprise AI CLI/API", "GitLab", "Confluence", "Jira", "Microsoft Teams API", "Agent Orchestration", "Knowledge Base"],
    summary:
      "사내 인증을 거친 로컬 AI CLI/API를 실행 엔진으로 활용하고 GitLab·Confluence·Jira의 분산된 업무 지식을 연결해, Microsoft Teams에서 자연어로 업무를 지시하면 AI 에이전트가 Jira 티켓을 처리하고 실행 결과를 메신저로 보고하는 사내 AI 직원 플랫폼을 설계·구현했습니다. 단순 질의응답을 넘어 기업 내부 지식과 업무 실행 도구를 연결하는 Enterprise Agentic Workflow를 구축한 경험입니다.",
    highlights: [
      "Enterprise AI Integration: 사내 승인된 로컬 AI CLI/API를 기반으로 내부 시스템과 연동되는 AI 실행 구조 설계·구현",
      "Enterprise Knowledge Layer: GitLab의 코드·개발 이력, Confluence의 문서, Jira의 업무 정보를 연결한 통합 지식 저장소 구축",
      "Agentic Workflow: Teams 업무 지시 → 관련 사내 지식 조회 → Jira 티켓 처리 → 실행 결과 Teams 회신으로 이어지는 업무 자동화 흐름 구현",
      "Tool & System Integration: GitLab·Confluence·Jira·Teams API를 연결해 대화 인터페이스와 실제 업무 처리 시스템 간 경계 설계",
      "Architecture Ownership: 에이전트 실행 흐름, 사내 지식 연계, 업무 자동화 및 결과 피드백까지 엔드투엔드 설계·개발"
    ],
    roles: ["Solution Architect", "AI Agent Platform Engineering", "End-to-End Development"],
    responsibilities: [
      "사내 AI 실행 환경 및 업무 시스템 연동 아키텍처 설계",
      "GitLab·Confluence·Jira 기반 지식 저장소 구축",
      "Teams 기반 자연어 업무 지시 및 결과 회신 프로세스 구현",
      "Jira 티켓 자동 처리 에이전트 워크플로 개발"
    ],
    achievements: [
      "사내 업무 지식 검색과 실행 기능을 하나의 AI 에이전트 워크플로로 통합",
      "메신저에서 업무 지시부터 Jira 처리 결과 확인까지 연결되는 실행형 인터페이스 구현"
    ],
    challenges: [
      "서로 다른 사내 시스템의 지식과 업무 실행 흐름 통합",
      "AI 응답 생성과 실제 업무 시스템 변경 작업 간 책임 경계 설계",
      "사내 인증된 AI 실행 환경에서 여러 API를 조합하는 엔드투엔드 오케스트레이션"
    ],
    image: "/ai-office.svg",
    imageAlt: "AI 직원 메타버스 사무실 콘셉트 일러스트",
    badgeLabel: "Enterprise Agentic AI",
    isSpotlight: true
  },

  {
    id: "cjone-global-oauth-platform",
    company: "CJ OliveNetworks",
    team: "CJ ONE 팀",
    period: "2026.01 ~ Present",
    title: "CJ ONE Global OAuth Platform",
    kind: "architecture",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Java",
      "Spring Boot",
      "OAuth 2.0",
      "PKCE",
      "Redis"
    ],
    summary:
      "CJ ONE 글로벌 서비스 전반에서 공통으로 사용할 수 있는 OAuth 기반 인증 플랫폼 구축 프로젝트입니다. 분산되어 있던 인증 연동 방식을 표준화하고, 공통 SDK와 토큰 관리 정책을 통해 서비스별 중복 구현을 줄이는 플랫폼 아키텍처를 설계하고 있습니다.",
    highlights: [
      "OAuth 2.0 Authorization Code Flow 및 PKCE 전환을 고려한 글로벌 공통 인증 흐름 설계",
      "공통 SDK 개발을 리드해 서비스별 인증 연동 방식을 표준화하고 중복 구현을 줄이는 방향 수립",
      "Access/Refresh Token 수명주기와 Redis 기반 임시 인증 상태 관리 전략을 검토하며 보안성과 확장성을 함께 고려"
    ],
    roles: [
      "Application Architect",
      "Frontend Development Lead",
      "SDK Development Lead"
    ],
    responsibilities: [
      "OAuth 인증 플랫폼 아키텍처 설계",
      "프론트엔드 구조 설계 및 인증 흐름 설계",
      "인증 SDK 설계 및 개발 리딩",
      "서비스 연동 표준 및 토큰 관리 정책 수립",
      "개발 조직 간 기술 협의 주도"
    ],
    achievements: [
      "글로벌 인증 플랫폼 표준 수립",
      "인증 로직 공통화 및 SDK 기반 연동 체계 구축",
      "서비스별 중복 인증 개발 감소",
      "향후 글로벌 서비스 확장을 고려한 인증 아키텍처 설계"
    ],
    challenges: [
      "OAuth 2.0 Authorization Code Flow 기반 인증 흐름 설계",
      "Refresh Token 관리 전략 수립",
      "Redis 기반 토큰 저장 구조 설계",
      "다수 서비스가 사용할 수 있는 SDK 중심 플랫폼 구조 설계",
      "보안성과 확장성을 동시에 고려한 인증 체계 구축"
    ],
    image: "/images/experience/global-oauth-original.jpg",
    imageAlt: "CJ ONE Global 서비스 대표 화면 — 사용자 제공 원본",
    imageWidth: 591,
    imageHeight: 1280,
    badgeLabel: "Core Platform",
    isSpotlight: true
  },

  // 현재 진행형/핵심 아키텍처
  {
    id: "cjone-msa-cqrs-points",
    company: "CJ OliveNetworks",
    team: "CJ ONE 팀",
    period: "2023 ~ 현재",
    title: "CJONE 포인트 도메인 분리 및 MSA + CQRS 아키텍처 설계",
    kind: "architecture",
    techStack: [
      "Java",
      "Spring Boot",
      "Spring Cloud",
      "OracleDB",
      "Kafka/MQ",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS"
    ],
    summary:
      "CJONE 포인트 도메인을 별도 서비스로 분리하고 CQRS 패턴을 적용하여, 대용량 트래픽에서의 확장성과 정합성을 모두 고려한 아키텍처를 설계했습니다.",
    highlights: [
      "포인트 적립/사용/정산 요구사항을 분석해 쓰기 모델과 읽기 모델을 분리하는 CQRS 패턴 도입",
      "포인트 도메인을 MSA 형태로 분리하면서 경계 컨텍스트를 재정의하고 주변 도메인과 연동 규칙 정립",
      "이벤트 소싱/메시지 브로커를 활용하여 포인트 변경 이력을 중심으로 다른 도메인으로 이벤트를 전파하는 구조 설계",
      "기존 모놀리식 구조와 공존 가능한 마이그레이션 전략 수립(dual write, feature toggle, 점진적 트래픽 전환)"
    ],
    isRecent: true
  },

  // 2025년에 마무리된 아키텍처 프로젝트들
  {
    id: "biz-ads-center-aws-optimization",
    company: "CJ OliveNetworks",
    team: "CJ ONE 팀",
    period: "2024 ~ 2025",
    title: "비즈니스센터/광고센터 AWS 파드 간 통신 최적화 설계",
    kind: "architecture",
    techStack: [
      "AWS EKS",
      "Kubernetes",
      "Spring Boot",
      "React",
      "Next.js",
      "TypeScript",
      "Nginx",
      "gRPC/REST",
      "Redis"
    ],
    summary:
      "비즈니스센터와 광고센터 간 트래픽 특성을 분석하고, 파드 간 통신 경로를 최적화하여 레이턴시를 낮추고 장애 도메인을 분리한 프로젝트입니다.",
    highlights: [
      "광고 트래픽/관리 트래픽을 분리하여, 비즈니스센터 파드와 광고센터 파드 간 통신 패턴(동기/비동기)을 재설계",
      "내부 서비스 간 통신에서 불필요한 게이트웨이 경유를 제거하고, 서비스 디스커버리 기반 직접 통신 구조로 변경",
      "핵심 조회·쓰기 API에 대해 read/write 패스를 분리하고 캐시 계층(Redis)을 도입하여 응답 속도 및 비용 최적화",
      "장애 전파 범위를 컨트롤하기 위해 도메인 단위 헤드리스 서비스(파드 그룹)로 경계를 재설정하고 HPA/리소스 리밋 재조정"
    ],
    image: "/images/experience/cjone-biz-desktop.webp",
    imageAlt: "CJ ONE 비즈니스센터 데스크톱 메인 화면",
    gallery: [
      {
        src: "/images/experience/cjone-ad-desktop.webp",
        alt: "CJ ONE 광고센터 데스크톱 메인 화면"
      }
    ],
    links: [
      { label: "비즈니스 센터", href: "https://biz.cjone.com" },
      { label: "광고 센터", href: "https://ad.cjone.com" }
    ],
    isSpotlight: true,
    isRecent: true
  },
  {
    id: "frontend-conventions-design-system",
    company: "CJ OliveNetworks",
    team: "CJ ONE 팀",
    period: "2023 ~ 2025",
    title: "프론트엔드 컨벤션 및 디자인 시스템/개발 패턴 수립",
    kind: "architecture",
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Storybook",
      "FSD"
    ],
    summary:
      "디자인 시스템과 코드 레벨 개발 패턴을 정의하여, 팀 내 프론트엔드 개발 생산성과 일관성을 높이기 위한 컨벤션 정립을 주도했습니다.",
    highlights: [
      "FSD(Feature-Sliced Design) 기반 레이아웃을 도입해 페이지/위젯/피처/엔티티/공유 레이어로 UI 아키텍처 재구성",
      "디자이너와 함께 컴포넌트 토큰(색상, 타이포, 간격, 모양)을 정의하고 디자인 시스템/컴포넌트 라이브러리 구축",
      "Storybook 기반 UI 컴포넌트 문서화/시각적 테스트 환경 도입으로 QA 및 신규 인원 온보딩 속도 향상",
      "API 통신, 상태 관리, 폼 처리, 에러 핸들링 패턴을 정의하고 코드 리뷰 기준으로 운영"
    ],
    isRecent: true
  },
  {
    id: "cjone-prism-nft",
    company: "CJ OliveNetworks",
    team: "CJ ONE 팀",
    period: "2023",
    title: "CJ ONE PRISM NFT 대시보드 및 IPFS 기반 아키텍처",
    kind: "product",
    techStack: ["React", "Next.js", "TypeScript", "Chart.js", "Vercel", "IPFS"],
    summary:
      "NFT 발행/홀더/트랜잭션 지표를 실시간 모니터링하는 대시보드와 IPFS 기반 이미지 호스팅 구조를 설계·구현했습니다.",
    highlights: [
      "IPFS를 CDN 대체 구조로 도입하고 자동 업로드 스크립트로 NFT 메타데이터/이미지 배포 파이프라인 구축",
      "NFT 지표를 실시간 조회 가능한 대시보드 UI/UX 설계 및 Next.js 기반 SSR/CSR 하이브리드 패턴 적용"
    ]
  },
  {
    id: "event-automation",
    company: "CJ OliveNetworks",
    team: "CJ ONE 팀",
    period: "2022 ~ 2023",
    title: "이벤트 당첨자 발표 100% 자동화 PI",
    kind: "product",
    techStack: ["Java", "Spring", "OracleDB"],
    summary:
      "당첨자 추출·검증·발표를 완전 자동화하여, 반복 업무를 제거하고 오류를 줄인 백엔드/배치 개선 프로젝트입니다.",
    highlights: [
      "이벤트 추출 조건을 정형화하고 관리자가 직접 조건을 설정할 수 있는 UI/백엔드 API 설계",
      "스케줄러/배치를 재구성해 사람 개입 없이 발표까지 자동화, 월 6MD 이상 업무 절감"
    ]
  },
  {
    id: "points-seed",
    company: "CJ OliveNetworks",
    team: "CJ ONE 팀",
    period: "2022",
    title: "CJ ONE 포인트 씨앗 서비스",
    kind: "product",
    techStack: ["Java", "Spring Batch", "OracleDB"],
    summary:
      "정기적으로 포인트를 지급하고 광고 노출로 추가 매출을 확보하는 포인트 씨앗 서비스 개발을 담당했습니다.",
    highlights: [
      "배치 스케줄링/DB 스키마 설계 및 관리자/앱 연동 로직 구현",
      "포인트 지급 로직과 광고 노출 로직을 분리해 확장성과 안정성을 확보"
    ],
    image: "/images/experience/points-seed.png",
    imageAlt: "CJ ONE 포인트 씨앗 서비스 UI"
  },
  {
    id: "devops-toolchain",
    company: "CJ OliveNetworks",
    team: "CJ ONE 팀",
    period: "2022",
    title: "DevOps 툴체인 전환(CI/CD 고도화)",
    kind: "devops",
    techStack: ["GitLab CI/CD", "Docker", "Nginx"],
    summary:
      "노후화된 CI/CD 환경을 GitLab 기반 컨테이너 빌드/배포 파이프라인으로 전환해 배포 안정성과 협업 생산성을 높였습니다.",
    highlights: [
      "브랜치 전략/배포 전략을 재정의하고 GitLab Pipeline 템플릿을 팀 공용으로 제작",
      "실패 시 롤백 전략과 승인 플로우를 설계하여 배포 리스크를 줄임"
    ]
  },
  {
    id: "web3-lab-summary",
    company: "CJ OliveNetworks",
    team: "Web3 Biz Lab",
    period: "2022 ~ 2023",
    title: "Web3/NFT 서비스 경험 (요약)",
    kind: "legacy",
    techStack: ["React", "Next.js", "TypeScript", "Solidity", "Hardhat", "Klaytn"],
    summary:
      "CryptoonNight 환불, ADOCENT NFT, NFT 대시보드 등 Web3 관련 프로젝트를 1인 개발 위주로 수행하며 블록체인/스마트컨트랙트와 프론트엔드를 모두 경험했습니다.",
    highlights: [
      "Solidity/Hardhat 기반 스마트 컨트랙트 개발 및 테스트, 프론트엔드와의 통합 경험",
      "KAS, Kaikas, IPFS(web3.storage) 등 Web3 인프라를 활용한 실전 아키텍처 설계"
    ],
    isCondensed: true
  },
  {
    id: "ecommerce-summary",
    company: "CJ OliveNetworks / GS ITM / 파츠몰",
    period: "2016 ~ 2022",
    title: "이커머스·ERP 백엔드/풀스택 경험 (축약)",
    kind: "legacy",
    techStack: ["Java", "Spring", "JSP", "ASP", "MS-SQL", "Oracle"],
    summary:
      "이커머스, 모바일 발주, ERP 시스템 등에서 백엔드·풀스택으로 다양한 유지보수/고도화 프로젝트를 경험하며, 트랜잭션/배치/DB 설계 역량을 쌓았습니다.",
    highlights: [
      "주문/정산·ERP 업무 도메인에 대한 이해를 바탕으로 안정적인 운영과 성능 개선 작업 수행",
      "레거시 시스템을 점진적으로 개선/마이그레이션하는 경험을 통해 실무적인 리팩토링 감각 확보"
    ],
    isCondensed: true
  }
];
