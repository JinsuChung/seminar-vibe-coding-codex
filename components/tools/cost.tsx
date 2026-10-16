'use client';
import { useMemo, useState } from 'react';

/** A4 1장 ≈ 1,500토큰(한국어), 응답 500토큰 기준의 어림 계산 */
const TOKENS_PER_PAGE = 1500;

function won(usd: number, rate: number) {
  const v = usd * rate;
  if (v < 10) return `${v.toFixed(1)}원`;
  return `${Math.round(v).toLocaleString('ko-KR')}원`;
}

export function CostTable() {
  return (
    <div className="not-prose my-5 rounded-xl border p-4 text-sm">
      <p className="font-semibold">가격은 직접 입력하세요.</p>
      <p className="mt-1 text-fd-muted-foreground">
        모델 가격은 바뀔 수 있습니다. 계산 전에{' '}
        <a href="https://openai.com/api/pricing/" target="_blank" rel="noreferrer" className="underline">
          OpenAI 공식 가격표
        </a>
        에서 현재 입력·출력 100만 토큰당 가격과 기준일을 확인하세요.
      </p>
    </div>
  );
}

export function CostCalculator() {
  const [pages, setPages] = useState(2);
  const [outTokens, setOutTokens] = useState(500);
  const [perDay, setPerDay] = useState(20);
  const [days, setDays] = useState(21);
  const [rate, setRate] = useState(1400);
  const [inputPrice, setInputPrice] = useState(0.25);
  const [outputPrice, setOutputPrice] = useState(2);

  const calc = useMemo(() => {
    const inTok = pages * TOKENS_PER_PAGE;
    const one = (inTok * inputPrice + outTokens * outputPrice) / 1e6;
    return { one, month: one * perDay * days };
  }, [pages, outTokens, perDay, days, inputPrice, outputPrice]);

  const num = (label: string, value: number, set: (n: number) => void, opts: { min?: number; max?: number; step?: number; unit?: string }) => (
    <label className="flex flex-col gap-1 text-sm">
      <span className="font-medium text-fd-muted-foreground">{label}</span>
      <span className="flex items-center gap-2">
        <input
          type="number"
          value={value}
          min={opts.min ?? 0}
          max={opts.max}
          step={opts.step ?? 1}
          onChange={(e) => set(Math.max(opts.min ?? 0, Number(e.target.value) || 0))}
          className="w-full rounded-lg border bg-fd-background px-3 py-2 tabular-nums outline-none focus:ring-2 focus:ring-fd-ring"
        />
        {opts.unit && <span className="shrink-0 text-fd-muted-foreground">{opts.unit}</span>}
      </span>
    </label>
  );

  return (
    <div className="not-prose my-6 rounded-2xl border bg-fd-card p-5">
      <p className="mb-3 text-lg font-bold">API 비용 계산기</p>
      <div className="grid gap-3 sm:grid-cols-3">
        {num('입력 가격', inputPrice, setInputPrice, { min: 0, step: 0.01, unit: '$/100만 토큰' })}
        {num('출력 가격', outputPrice, setOutputPrice, { min: 0, step: 0.01, unit: '$/100만 토큰' })}
        {num('1건 입력 분량', pages, setPages, { min: 0.5, step: 0.5, unit: 'A4장' })}
        {num('1건 응답 길이', outTokens, setOutTokens, { min: 50, step: 50, unit: '토큰' })}
        {num('하루 건수', perDay, setPerDay, { min: 1, unit: '건' })}
        {num('한 달 근무일', days, setDays, { min: 1, max: 31, unit: '일' })}
        {num('환율', rate, setRate, { min: 1, step: 10, unit: '원/$' })}
      </div>
      <div className="mt-5 grid gap-4 rounded-xl bg-fd-background p-4 sm:grid-cols-2">
        <div>
          <p className="text-sm text-fd-muted-foreground">1건당</p>
          <p className="text-2xl font-bold tabular-nums">{won(calc.one, rate)}</p>
          <p className="mt-2 text-sm text-fd-muted-foreground">한 달 ({perDay}건 × {days}일)</p>
          <p className="text-3xl font-bold tabular-nums text-fd-primary">{won(calc.month, rate)}</p>
          <p className="text-xs text-fd-muted-foreground tabular-nums">${calc.month.toFixed(2)}</p>
        </div>
      </div>
      <p className="mt-3 text-xs leading-5 text-fd-muted-foreground">
        한국어 A4 1장을 약 {TOKENS_PER_PAGE.toLocaleString()}토큰으로 어림한 값입니다. 실제 비용과 최신 가격은 OpenAI 공식 가격표와 사용량 화면에서 확인하세요.
      </p>
    </div>
  );
}
