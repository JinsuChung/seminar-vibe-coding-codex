# 작업 규칙

- 이 저장소는 비개발자 대상 OpenAI Codex 실습 사이트다. 본문은 한국어 존댓말, 버튼과 안내는 자연스러운 해요체를 쓴다.
- 프롬프트는 `content/data/prompts.ts`를 단일 출처로 관리한다.
- 바뀔 수 있는 요금·한도·버전은 `content/data/facts.ts`에 두고 공식 출처와 확인일을 함께 갱신한다.
- 실습 데이터와 예시는 모두 가상 회사 업무로 작성하며 실제 개인정보나 기관 내부 정보를 넣지 않는다.
- 비밀 키는 서버 환경변수에만 두고 `NEXT_PUBLIC_` 접두사를 붙이지 않는다.
- 변경 후 `pnpm build`가 통과하는지 확인한다.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
