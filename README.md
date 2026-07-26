# career-portfolio (brasleybyun.com)

변재일(Brasley Byun)의 커리어 포트폴리오 웹사이트. 한국어/영어 2개 언어를 지원하는 Next.js App Router 정적 사이트이며, Vercel에 배포되어 있습니다.

- **운영 도메인**: https://www.brasleybyun.com (루트 접속 시 `/ko`로 리다이렉트)
- **GitHub**: https://github.com/byun5751-sketch/career-portfolio (visibility: **public**)
- **Vercel 프로젝트**: `brasley-byun` (team: `byun5751-sketchs-projects`), framework preset `nextjs`, Node 24.x, Turbopack 빌드
- **로컬 작업 경로**: `C:\Users\byun5\OneDrive\Desktop\Vibe coding\career-portfolio`

연결된 도메인/별칭: `brasleybyun.com`, `www.brasleybyun.com`, `brasley-byun.vercel.app`, `career-portfolio-one-alpha.vercel.app`

> 참고: GitHub 저장소 이름은 `career-portfolio`, Vercel 프로젝트 이름은 `brasley-byun`, 도메인은 `brasleybyun.com`으로 세 이름이 서로 다릅니다. 찾을 때 혼동하기 쉬운 지점입니다.

## 기술 스택

| 항목 | 버전/내용 |
| --- | --- |
| Framework | Next.js 16.2.7 (App Router, Server Components 기반) |
| React | 19.2.4 |
| 스타일 | Tailwind CSS v4 (`@tailwindcss/postcss`) + `src/app/globals.css` CSS 변수 |
| 아이콘 | lucide-react |
| 폰트 | `next/font/google` — Inter (본문), DM Serif Display (제목) |
| 언어 | TypeScript 5, ESLint 9 (`eslint-config-next`) |
| 스크린샷 | Playwright (`screenshot.mjs`, git 미추적) |
| 배포 | Vercel (GitHub `main` 브랜치 push 시 자동 프로덕션 배포) |

## 실행 방법

```bash
npm install
npm run dev     # http://localhost:3000 (루트 → /ko 리다이렉트)
npm run build   # 프로덕션 빌드
npm run start   # 빌드 결과 실행
npm run lint    # ESLint
```

로컬 스크린샷 촬영(dev 서버 실행 중일 때):

```bash
node screenshot.mjs   # ss-home-en.png, ss-home-ko.png, ss-exp-en.png, ss-edu-en.png 생성
```

## 디렉터리 구조

```
src/
├── app/
│   ├── layout.tsx              # 루트 레이아웃, 폰트, 전역 metadata(OG/Twitter/robots/verification)
│   ├── page.tsx                # `/` → `/ko` 리다이렉트
│   ├── globals.css             # CSS 변수 팔레트 + Tailwind theme 매핑 + .site-shell / .education-* 레이아웃
│   ├── robots.ts               # robots.txt (sitemap 링크)
│   ├── sitemap.ts              # 8개 URL (4페이지 × 2언어) + hreflang alternates
│   └── [lang]/                 # 언어 세그먼트 (en | ko)
│       ├── layout.tsx          # Header/Footer 래핑
│       ├── page.tsx            # 홈 (Hero, 통계, 3키워드, 대표 프로젝트, 스킬, CTA)
│       ├── experience/page.tsx # 경력 3社
│       ├── projects/page.tsx   # 프로젝트 목록 (ProjectsList 렌더)
│       └── education/page.tsx  # 학력, 수상, 자격증 (사이드바 + 메인 그리드)
├── components/
│   ├── Header.tsx              # sticky 네비 + 한/영 스위처 + Contact 버튼 (client)
│   ├── Footer.tsx              # 태그라인, 네비, 연락처(이메일/LinkedIn/카카오톡)
│   ├── ProjectCard.tsx         # 홈의 대표 프로젝트 카드
│   ├── ProjectsList.tsx        # 회사별 필터 탭 + `<details>` 아코디언 (client)
│   └── JsonLd.tsx              # Person 스키마 구조화 데이터
└── lib/
    ├── data.ts                 # 영문 데이터 (Project/Experience 타입, projects, experiences, skills, awards, certifications)
    ├── data-ko.ts              # 국문 데이터 (동일 구조)
    ├── get-data.ts             # lang에 따라 data / data-ko 선택 + featured 프로젝트 지정
    ├── i18n.ts                 # UI 라벨 사전, `Lang` 타입, defaultLocale = "ko"
    └── site.ts                 # SITE_URL, PROFILE_IMAGE_URL 상수
```

## 콘텐츠 현황

| 항목 | 수량 | 비고 |
| --- | --- | --- |
| 경력 | 3 | BIGO Live, ZEISS Vision Korea, SAP Korea |
| 프로젝트 | 32 | ZEISS 14 / SAP 7 / 중앙대학교 11 |
| 대표 프로젝트 | 3 | `zeiss-vts-contract-process`, `sap-customer-advisory`, `sap-global-events` |
| 스킬 카테고리 | 5 | Business Development, Sales Operations, Marketing Operations, Data & Intelligence, Project Management |
| 수상 | 6 | |
| 자격증 | 6 | |

- 프로젝트는 **SARL 구조**(Situation / Problem → Actions → Results → Learning)로 통일되어 있습니다.
- 프로젝트 페이지는 회사 단위 필터 탭을 제공하고, 대학 시절 프로젝트는 하나의 필터로 묶여 있습니다.
- 외부 기업/기관 실명 일부는 익명화 처리되어 있습니다.

## 디자인 시스템

- 웜 베이지 계열 라이트 테마 단일 모드(다크 모드 미지원). 팔레트는 `globals.css`의 `:root` CSS 변수로 관리하고 `@theme inline`으로 Tailwind 색상 토큰(`text-text-secondary`, `bg-surface-warm`, `border-accent` 등)에 매핑합니다.
- 주요 변수: `--bg #FAF9F7`, `--surface #FFFFFF`, `--surface-warm #F5F3F0`, `--accent #7A6143`, `--text #1A1714`, `--highlight #2C2520`
- 레이아웃 컨테이너는 `.site-shell` (max-width 1152px), 반응형 브레이크포인트는 1023px / 640px.
- `DESIGN.md`는 Resend 사이트 디자인을 분석한 **참고용 토큰 스펙(alpha)** 이며, 현재 사이트에 적용된 디자인이 아닙니다. 리디자인 검토용 자료로만 남아 있습니다.

## SEO / 배포 설정

- `layout.tsx`에 title template, description, OpenGraph, Twitter card, robots, `alternates.languages`(en/ko) 설정
- Google Search Console 소유 확인: `layout.tsx`의 `verification.google` 메타 태그
- Naver 웹마스터 소유 확인: `public/naver54fe1402c25231dd629ee9bdc8fd3691.html`
- `sitemap.ts` / `robots.ts`는 `src/lib/site.ts`의 `SITE_URL`을 참조 (하드코딩 제거됨)
- `JsonLd.tsx`로 Person 구조화 데이터 삽입
- `main` 브랜치 push → Vercel 프로덕션 자동 배포

## 개발 현황 (2026-07 기준)

### 완료
- 한/영 2개 언어 전체 페이지 (홈, 경력, 프로젝트, 학력) 및 언어 스위처
- 기본 로케일 한국어(`/ko`)로 고정, 루트 리다이렉트
- 32개 프로젝트 SARL 구조 정리, 시간순 정렬, 접이식 상세, 회사별 필터 탭
- 커스텀 도메인(`brasleybyun.com`) 연결 및 프로덕션 배포
- sitemap / robots / OG / JSON-LD / Google·Naver 소유 확인 등 SEO 기본기
- 연락처 3채널(이메일, LinkedIn, 카카오톡) 노출

### 최근 반영 (2026-07-27, `077977b`)
- `src/lib/site.ts` 신설: `SITE_URL` / `PROFILE_IMAGE_URL`을 한 곳에 모으고, 6곳에 `brasley-byun.vercel.app`으로 하드코딩돼 있던 상수를 제거. canonical / sitemap / robots / JSON-LD가 모두 `https://www.brasleybyun.com`을 가리키도록 정정
- `globals.css`: 접근성 대비 개선 (`--accent`, `--border-strong`, `--text-tertiary`를 더 진하게)
- `i18n.ts`: 홈 Hero의 role / tagline 문구를 한·영 모두 재작성
- `[lang]/page.tsx`: Hero에 "연락하기(Get in Touch)" 버튼 추가
- `Footer.tsx`: 연락처 아이콘 링크 3개에 `aria-label` 추가

### 미구현 / 향후 과제
- 다크 모드
- 자동 테스트 없음 (`npm run lint`만 존재, CI 워크플로 없음)
- 프로젝트 개별 상세 페이지 없음 (목록 내 아코디언으로만 제공)
- 이력서 PDF 다운로드, 블로그/글 섹션 없음
- OG 이미지가 `profile.jpeg` 정적 파일 (페이지별 동적 OG 이미지 미적용)
- 콘텐츠가 `data.ts` / `data-ko.ts` 두 파일에 중복 관리되어, 한쪽만 수정하면 언어별 불일치가 발생할 수 있음

## 콘텐츠 수정 가이드

1. 프로젝트/경력/수상/자격증 추가는 `src/lib/data.ts`(영문)와 `src/lib/data-ko.ts`(국문)를 **둘 다** 수정합니다. `slug`는 두 파일에서 동일하게 유지해야 필터·대표 프로젝트 지정이 깨지지 않습니다.
2. 대표 프로젝트 교체는 `src/lib/data.ts`의 `getFeaturedProjects()`와 `src/lib/get-data.ts`의 ko 분기 slug 배열을 함께 수정합니다.
3. 버튼·헤딩 등 UI 문구는 `src/lib/i18n.ts`에서 수정합니다.
4. 색상 변경은 `src/app/globals.css`의 `:root` 변수만 수정하면 전체에 반영됩니다.

## 저장소 메모

- `.gitignore`에서 `screenshot*.png`, `ss-*.png`, `screenshot.mjs`, `.vercel`을 제외하고 있습니다. 로컬에만 있는 스크린샷 파일들은 커밋되지 않습니다.
- `AGENTS.md` / `CLAUDE.md`: Next.js 16이 학습 데이터와 다를 수 있으므로 `node_modules/next/dist/docs/`를 먼저 확인하라는 AI 에이전트용 지침입니다.
