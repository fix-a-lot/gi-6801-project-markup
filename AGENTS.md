<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# AGENTS.md

이 저장소는 `project-l-6801` 원본에서 v0 / Claude Design 작업에 필요한 마크업·디자인 관련 파일만 추출한 서브셋이다. DB, API 연동, 크론잡 등 백엔드 로직은 포함하지 않는다.

## Documentation

- 모든 문서는 문어체 + 반말로 작성한다.

## Domain Context

- Lost Ark Open API를 활용하는 로스트아크 정보 사이트를 만든다.
- 이 저장소에서는 실제 API 연동 없이 `lib/mock-data.ts`의 mock 데이터로 화면을 구현한다.

## Terms

- **로아 API**: 로스트아크가 제공하는 공식 Open API
- **로아 데이터**: Open API가 제공하는 데이터

### 경쟁 사이트

- [로아와](https://loawa.com/)
- [로아지지](https://loagg.com/)
- [일로아](https://iloa.gg/)
- [클로아](https://kloa.gg/)
- [로스트빌드](https://lostbuilds.com/)

## Design & Markup

- [`docs/agents/design.md`](docs/agents/design.md) — 디자인 원칙, 구현 원칙, 페이지 작업 규칙.
- [`docs/references/loawa-DESIGN-by-design-extractor.md`](docs/references/loawa-DESIGN-by-design-extractor.md), `docs/references/loawa-capture-index.jpg` — 디자인 참고 자료.
