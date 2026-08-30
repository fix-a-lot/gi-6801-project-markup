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

## 알려진 이슈 (해결됨)

~~`lib/db/client.ts`가 모듈 최상단에서 `neon(process.env.DATABASE_URL!)`을 즉시 호출해 `DATABASE_URL` 없이 빌드가 실패하던 문제~~ — Claude Code 세션에서 `getDb()` 지연 초기화로 재수정 완료 (`code-update-by-agent` 브랜치, `DATABASE_URL` 없이 빌드 통과 확인함). `db`를 직접 import하던 `lib/lostark-api.ts`, `lib/sync/lostark/news.ts`도 `getDb()` 호출로 갱신됨. 이전에도 한 번 고쳤다가 하드 리셋으로 되돌아간 이력이 있으니, `git reset --hard` 등을 할 때는 이 수정이 다시 사라지지 않는지 확인할 것.

## 브랜치/Git 관련 참고

- 이 저장소는 partial clone(blob:none)이라 `git reset --hard`, `fetch` 등이 매번 GitHub에서 blob을 새로 받아와서 일반 저장소보다 느리다. 정상 동작이니 별다른 조치 불필요.
- v0 채팅의 배포/프리뷰는 채팅에 연결된 특정 브랜치(현재 `v0/by-fix-a-lot`)만 본다. 다른 브랜치를 만들어도 자동으로 반영되지 않는다.
- `AGENTS.md`의 Version Control 규칙(`code-update-by-agent` 브랜치)은 Claude Code(배치 세션) 전용 워크플로우로 보임 — v0 채팅은 자체 브랜치(`v0/...`)를 쓰므로 해당 규칙과는 별개로 동작한다. 혼동 방지용으로 기록.

## 이 문서 갱신 규칙

- 작업을 시작하기 전에 원격 `main`을 `git fetch origin main`으로 확인한다.
- 이후 모든 작업 내용과 중요한 변경사항을 이 문서에 짧게 기록한다.
- 바뀐 부분만 짧게 고친다.
