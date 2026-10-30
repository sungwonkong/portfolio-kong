# 프로젝트 이미지 출처

2026-10-30에 Chromium 데스크톱 뷰포트 1440 × 900 (DPR 1)로 실제 공개 사이트를 캡처했다. 페이지 내용을 재구성하거나 합성하지 않고 WebP(quality 88)로 저장했다.

| 프로젝트 | 이미지 | 출처 / 캡처 위치 |
| --- | --- | --- |
| newGms | `newgms-membership-desktop.webp` | https://membership.cjone.com/ · scrollY 720, 멤버십 소개 구간 |
| Biz Center | `cjone-biz-desktop.webp` | https://biz.cjone.com/ · 첫 화면 |
| Ad Center | `cjone-ad-desktop.webp` | https://ad.cjone.com/ · 첫 화면 |
| AI 직원 | `/ai-office.svg` | 기존 메타버스 사무실 콘셉트 원본 유지 |
| Global OAuth | `global-oauth-original.jpg` | 사용자 제공 591 × 1280 JPG 원본을 바이트 변경 없이 복사, 크롭 없이 표시 |

멤버십센터 첫 화면의 MOV 영상은 캡처 환경에서 `DEMUXER_ERROR_NO_SUPPORTED_STREAMS`로 재생되지 않아, 정상 표시되는 멤버십 소개 구간을 사용했다.

메인 카드와 선택 패널, 프로젝트 상세 페이지는 동일한 프로젝트 이미지 데이터를 사용한다. Biz/Ad Center 선택 패널과 상세 페이지에는 두 센터의 캡처가 모두 표시된다.

newGms·정산센터·Partner Front·멤버십센터는 동일 프로젝트로 통합했다. 이전 정산센터 상세 URL은 newGms 상세 페이지로 308 리다이렉트한다. 대표 프로젝트는 상단 선택 패널에서만 노출하고 하단 경력 목록의 중복 카드를 제거했다.

## 검증 결과

- `pnpm install --frozen-lockfile`, `pnpm build`, `pnpm lint`, `git diff --check` 통과.
- 프로덕션 서버를 Chromium으로 확인: 1440 × 1000에서 카드 4개가 한 행에 배치됨. 배경은 가독성 개선 후 slate-950 어두운 테마로 변경.
- 대표 프로젝트 4개 선택 및 상세 경로 4개 HTTP 200 확인.
- newGms 1장, Biz/Ad 2장, AI 사무실 1장의 이미지 디코딩 확인. OAuth는 사용자 제공 원본 이미지.
- 390px 모바일에서 수평 넘침 없음.
- 페이지 JavaScript 오류와 프로젝트 이미지 요청 실패 없음. 기존 `/favicon.ico` 요청의 404는 별도 확인.
- `ai-office.svg`는 main과 SHA-256 동일.
- Global OAuth는 원본 파일과 HTTP로 제공되는 파일의 바이트가 동일함을 검증했다. 패널에서 591:1280 비율과 크롭 없는 표시를 확인했다.
- 이전 정산센터 URL의 HTTP 308 및 newGms 목적지, 대표 프로젝트의 하단 경력 중복 제거를 검증했다.
