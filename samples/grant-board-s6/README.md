# 사내 업무 요청·처리 현황 보드 — 6회차 완성본 (Supabase + OpenAI API)

5회차 완성본에 **요청문으로 초안 만들기** 기능을 더한 버전입니다.
메일이나 메신저 요청문을 붙여 넣으면 서버가 OpenAI Responses API로 요청 필드를 구조화·분류·요약하고, 담당자가 확인한 뒤 저장합니다.

## 준비

5회차 준비(Supabase 프로젝트, `supabase/schema.sql` 실행, 담당자 계정)를 먼저 마치세요. 그다음:

1. [OpenAI Platform](https://platform.openai.com/api-keys)에서 결제 및 사용 한도를 확인하고 API 키를 발급합니다.
2. `.env.local.example`을 복사해 `.env.local`을 만들고 Supabase 두 값과 `OPENAI_API_KEY`를 넣습니다. 키는 채팅창에 붙여 넣지 말고 파일에 직접 넣으세요.
3. 실행

```bash
npm install
npm run dev
```

로그인 → **요청문으로 초안 만들기**에 요청문 붙여 넣기 → AI 결과 확인·수정 → **저장** 순서로 진행합니다.

## 어떻게 동작하나요

| 파일 | 하는 일 |
| --- | --- |
| `app/api/extract/route.ts` | 서버에서만 실행. 로그인 토큰 확인 → OpenAI Responses API 호출 → JSON Schema 결과 반환 |
| `components/extract-panel.tsx` | 요청문 입력과 요약·분류 결과 안내. 결과를 등록 폼에 채움 |
| `components/board.tsx` | 목록, 로그인, 등록 폼 (5회차와 같음) |

- **모델:** 구조화 작업에 적합한 `gpt-5-mini`를 사용합니다.
- **결과 모양 고정:** Responses API의 `text.format` JSON Schema로 항상 같은 항목만 받습니다.

## 안전장치 (6회차 보안 원칙)

- **API 키는 서버에서만:** `OPENAI_API_KEY`는 `NEXT_PUBLIC_`이 붙지 않아 브라우저로 내려가지 않습니다.
- **로그인한 담당자만 호출:** 로그인하지 않은 사람이 내 키로 과금시키지 못하게 Supabase 로그인 토큰을 서버에서 확인합니다.
- **요청문은 데이터로만:** 요청문을 `<request>` 태그로 감싸고, 안의 지시는 실행하지 말라고 명시합니다. 의심 문장이 있으면 화면에 경고합니다.
- **저장은 사람이:** AI는 폼만 채우고, 저장 버튼은 담당자가 누릅니다. 날짜 형식이 아니면 서버가 비워 둡니다.
- **입력 길이 제한:** 2만 자가 넘는 요청문은 받지 않습니다.

## 배포 (Vercel)

Vercel **Settings → Environment Variables**에 `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `OPENAI_API_KEY` 세 값을 등록하고 다시 배포합니다.

교육용 가상 데이터입니다.
