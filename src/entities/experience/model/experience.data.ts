import type { ExperienceItem } from "./experience.types";

export const EXPERIENCES: ExperienceItem[] = [
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
    image: "/images/experience/cjone_bizcenter.png",
    imageAlt: "CJ ONE 비즈니스 센터 관리 화면",
    gallery: [
      {
        src: "/images/experience/biz-ads-center.png",
        alt: "비즈니스 센터와 광고 센터 화면"
      }
    ],
    links: [
      { label: "비즈니스 센터", href: "https://biz.cjone.com" },
      { label: "광고 센터", href: "https://ad.cjone.com" }
    ],
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
    ],
    isRecent: true
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

