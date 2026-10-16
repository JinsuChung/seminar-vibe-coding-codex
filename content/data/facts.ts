/**
 * 바뀔 수 있는 사실 정보는 모두 여기서 관리합니다.
 * 학기 시작 전에 출처를 열어 값과 checked 날짜를 갱신하세요.
 */
export type Fact = { value: string; checked: string; source: string };

export const facts = {
  'claude.plan': {
    value: 'ChatGPT Codex 사용 가능 플랜과 한도는 공식 문서에서 확인',
    checked: '2026-10-16',
    source: 'https://developers.openai.com/codex/',
  },
  'claude.install.mac': {
    value: '지원 운영체제와 최신 설치 방법은 OpenAI Codex 공식 문서에서 확인',
    checked: '2026-10-16',
    source: 'https://developers.openai.com/codex/',
  },
  'claude.install.win': {
    value: '지원 운영체제와 최신 설치 방법은 OpenAI Codex 공식 문서에서 확인',
    checked: '2026-10-16',
    source: 'https://developers.openai.com/codex/',
  },
  'vercel.hobby': {
    value: '허용 용도와 최신 한도는 Vercel 공식 플랜 문서에서 확인',
    checked: '2026-10-16',
    source: 'https://vercel.com/docs/plans',
  },
  'vercel.pro': {
    value: '최신 가격과 포함 기능은 Vercel 공식 플랜 문서에서 확인',
    checked: '2026-10-16',
    source: 'https://vercel.com/docs/plans',
  },
  'supabase.free': {
    value: '프로젝트·저장공간·비활성 정책은 Supabase 공식 가격 문서에서 확인',
    checked: '2026-10-16',
    source: 'https://supabase.com/pricing',
  },
  'supabase.pro': { value: '최신 가격과 포함 기능은 Supabase 공식 가격 문서에서 확인', checked: '2026-10-16', source: 'https://supabase.com/pricing' },
  'neon.free': {
    value: '프로젝트·저장공간·절전 정책은 Neon 공식 가격 문서에서 확인',
    checked: '2026-10-16',
    source: 'https://neon.com/pricing',
  },
} satisfies Record<string, Fact>;

export type FactKey = keyof typeof facts;

/** 계산기 UI 계약용 값. 실제 사용 전 공식 가격 문서의 최신 단가로 갱신한다. */
export const modelPricing = [
  { id: 'openai-low-cost', name: 'OpenAI 경량 모델', input: 0, output: 0, note: '단순 분류·추출용. 공식 가격 문서에서 모델과 단가 확인' },
  { id: 'openai-balanced', name: 'OpenAI 균형 모델', input: 0, output: 0, note: '일반 업무용. 공식 가격 문서에서 모델과 단가 확인' },
  { id: 'openai-reasoning', name: 'OpenAI 추론 모델', input: 0, output: 0, note: '복잡한 분석용. 공식 가격 문서에서 모델과 단가 확인' },
] as const;
export const pricingChecked = '사용 전 확인 필요';
export const pricingSource = 'https://openai.com/api/pricing/';
