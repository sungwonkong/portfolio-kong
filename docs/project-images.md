# 프로젝트 이미지 출처

2026-10-30에 Chromium 데스크톱 뷰포트 1440 × 900 (DPR 1)로 실제 공개 사이트를 캡처했다. 페이지 내용을 재구성하거나 합성하지 않고 WebP(quality 88)로 저장했다.

| 프로젝트 | 이미지 | 출처 / 캡처 위치 |
| --- | --- | --- |
| newGms | `newgms-membership-desktop.webp` | https://membership.cjone.com/ · scrollY 720, 멤버십 소개 구간 |
| Biz Center | `cjone-biz-desktop.webp` | https://biz.cjone.com/ · 첫 화면 |
| Ad Center | `cjone-ad-desktop.webp` | https://ad.cjone.com/ · 첫 화면 |
| AI 직원 | `/ai-office.svg` | 기존 메타버스 사무실 콘셉트 원본 유지 |
| Global OAuth | 원본 수신 대기 | 대화 첨부와 main 저장소에서 원본을 찾을 수 없어 기존 상태 유지 |

멤버십센터 첫 화면의 MOV 영상은 캡처 환경에서 `DEMUXER_ERROR_NO_SUPPORTED_STREAMS`로 재생되지 않아, 정상 표시되는 멤버십 소개 구간을 사용했다. 이 이미지는 요청한 공개 사이트의 화면이며 내부 newGms 관리 화면을 의미하지 않는다.

메인 카드와 선택 패널, 프로젝트 상세 페이지는 동일한 프로젝트 이미지 데이터를 사용한다. Biz/Ad Center 선택 패널과 상세 페이지에는 두 센터의 캡처가 모두 표시된다.

## 검증 결과

- `pnpm install --frozen-lockfile`, `pnpm build`, `pnpm lint`, `git diff --check` 통과.
- 프로덕션 서버를 Chromium으로 확인: 1440 × 1000에서 카드 4개가 한 행에 배치되고 베이지 배경 유지.
- 대표 프로젝트 4개 선택 및 상세 경로 4개 HTTP 200 확인.
- newGms 1장, Biz/Ad 2장, AI 사무실 1장의 이미지 디코딩 확인. OAuth 이미지는 원본 수신 대기.
- 390px 모바일에서 수평 넘침 없음.
- 페이지 JavaScript 오류와 프로젝트 이미지 요청 실패 없음. 기존 `/favicon.ico` 요청의 404는 별도 확인.
- `ai-office.svg`는 main과 SHA-256 동일.
