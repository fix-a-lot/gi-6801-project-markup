# HANDOFF-v0

v0 채팅 세션 전용 인수인계 문서. `docs/HANDOFF.md`는 Claude Code(CLI) 세션이 쓰는 문서라 v0 채팅에서는 이 파일을 대신 갱신한다. 프로젝트 배경/API 스펙 등 공통 맥락은 여전히 `docs/HANDOFF.md`와 `AGENTS.md`를 먼저 읽을 것.

🗓️ 2026-08-30: 원래 프로젝트에서 마크업 개발에 필요한 파일만 분리/추출 되었음

## 이 채팅에서 한 일

- 메인 페이지(`app/lostark/page.tsx` + `components/*`) 최초 구현. LOAWA 디자인 참고 자료를 그대로 복제하지 않고 구조는 재구성했으나, 색상/타이포는 사용자 요청으로 참고 자료(퍼플 `#b48ff5` 키 컬러, 모노스페이스 위주 타이포)에 맞춰 재조정함.
- `/` 인덱스 페이지(`app/page.tsx`)를 추가하고 로스트아크 링크를 `/lostark`에 연결함. 루트 리다이렉트 설정도 제거함.
- 사이트 이름을 `lib/site-config.ts`의 `SITE_NAME` 전역 상수(`Project L-6801`)로 통일함. 헤더, 푸터, 메타데이터, 공지, 검색 문구, mock 데이터에 적용함.
- 사이트 공지 제목 클릭 시 중앙 레이어 팝업이 열리도록 `components/sidebar-site-notices.tsx`를 확장함. 오버레이 클릭, 닫기 버튼, Escape 키 닫기를 지원함.
- 디자인 토큰에 `secondary`(`#5cc7e0`, 시안) 추가. 적용 위치: 주간 일정 "항해" 카테고리, 정보 탭 "업데이트" 배지.
- `site-header.tsx` 내비게이션 활성 상태를 `i === 0` 하드코딩 → `usePathname()` 기반으로 수정 (`next.config.ts`의 `/` → `/lostark` 임시 리다이렉트를 고려해 `isNavItemActive` 헬퍼로 두 경로 모두 홈으로 인식).
- `app/globals.css`의 미사용 토큰(`--radius-lg`) 제거.
- `ui-pattern-collection` 스킬에 따라 개발용 UI 패턴 모음 페이지(`app/dev/ui-patterns/page.tsx`)를 추가함. 컴포넌트 레지스트리는 `lib/ui-pattern-registry.ts`, 개별 컴포넌트를 렌더링하는 격리 프리뷰 라우트는 `app/dev/ui-patterns/preview/[slug]/page.tsx`, 뷰포트별(PC Large 1440 / PC Standard 1280 / Mobile 375) 스케일 미리보기는 `components/dev/ui-pattern-viewport-preview.tsx`(iframe + CSS `transform: scale`)로 구현함. `NODE_ENV === 'production'`이면 두 라우트 모두 `notFound()` 처리해 프로덕션에 노출되지 않음. `site-header.tsx`에 개발 전용("UI 패턴") 버튼을 추가해 진입 경로를 만듦(데스크톱 헤더에서만 노출, `lg:flex`).
- `site-header.tsx`에서 개발 전용 "UI 패턴" 버튼을 사이트 로고 오른쪽에서 헤더 최좌측으로 이동함.
- UI 패턴 버튼을 헤더 flex 흐름에서 분리해 `absolute`로 배치함. 기존 제목·내비게이션·우측 요소의 정렬과 위치를 유지하면서 제목 좌측에 표시되도록 조정함.
- 기존 UI 패턴 컬렉션/iframe 프리뷰 페이지를 삭제하고, 우선 Mobile 독립 페이지(`app/dev/ui-patterns/mobile/page.tsx`)만 재구현함. 본문 너비를 `375px`로 고정하고 기존 UI 패턴 전체를 동일한 컴포넌트로 렌더링하며, 상단에 Mobile/PC Standard/PC Large 이동 링크를 배치함. 헤더의 개발용 링크는 Mobile 페이지를 가리키도록 수정함.

## 알려진 이슈 (해결됨)

~~`lib/db/client.ts`가 모듈 최상단에서 `neon(process.env.DATABASE_URL!)`을 즉시 호출해 `DATABASE_URL` 없이 빌드가 실패하던 문제~~ — Claude Code 세션에서 `getDb()` 지연 초기화로 재수정 완료 (`code-update-by-agent` 브랜치, `DATABASE_URL` 없이 빌드 통과 확인함). `db`를 직접 import하던 `lib/lostark-api.ts`, `lib/sync/lostark/news.ts`도 `getDb()` 호출로 갱신됨. 이전에도 한 번 고쳤다가 하드 리셋으로 되돌아간 이력이 있으니, `git reset --hard` 등을 할 때는 이 수정이 다시 사라지지 않는지 확인할 것.

## 브랜치/Git 관련 참고

- 이 저장소는 partial clone(blob:none)이라 `git reset --hard`, `fetch` 등이 매번 GitHub에서 blob을 새로 받아와서 일반 저장소보다 느리다. 정상 동작이니 별다른 조치 불필요.
- v0 채팅의 배포/프리뷰는 채팅에 연결된 특정 브랜치(현재 `v0/by-fix-a-lot`)만 본다. 다른 브랜치를 만들어도 자동으로 반영되지 않는다.
- `AGENTS.md`의 Version Control 규칙(`code-update-by-agent` 브랜치)은 Claude Code(배치 세션) 전용 워크플로우로 보임 — v0 채팅은 자체 브랜치(`v0/...`)를 쓰므로 해당 규칙과는 별개로 동작한다. 혼동 방지용으로 기록.
