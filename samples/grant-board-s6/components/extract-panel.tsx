'use client';
import { useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import type { RequestItem } from '@/lib/supabase';

type Result = Pick<RequestItem, 'title' | 'requester_department' | 'assignee_department' | 'priority' | 'status' | 'requested_at' | 'desired_due_date' | 'details'> & {
  summary: string;
  suspicious: boolean;
  suspicious_text: string;
};

/** 요청문을 붙여 넣으면 서버가 OpenAI API로 구조화한 초안을 만든다. 저장은 사람이 확인 후 진행한다. */
export function ExtractPanel({ session, onExtract }: { session: Session; onExtract: (g: Partial<RequestItem>) => void }) {
  const [text, setText] = useState('');
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');

  return (
    <div className="form">
      <strong>요청문으로 초안 만들기</strong>
      <span className="meta">메일이나 메신저의 요청문을 붙여 넣으면 AI가 요청 필드를 구조화·분류·요약합니다. 저장 전에 꼭 확인하세요.</span>
      <textarea value={text} onChange={(e) => setText(e.target.value)} placeholder="업무 요청문을 여기에 붙여 넣으세요" />
      <button
        disabled={busy || !text.trim()}
        onClick={async () => {
          setBusy(true);
          setError('');
          setResult(null);
          const res = await fetch('/api/extract', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${session.access_token}` },
            body: JSON.stringify({ text }),
          });
          const data = await res.json();
          setBusy(false);
          if (!res.ok) return setError(data.error ?? '실패했어요.');
          setResult(data);
          onExtract(data);
        }}
      >
        {busy ? 'AI가 읽는 중…' : 'AI로 요청 초안 만들기'}
      </button>
      {error && <span className="error">{error}</span>}
      {result && (
        <div className="notice">
          {result.suspicious && (
            <p className="error">
              ⚠ 요청문에 AI에게 보내는 지시문으로 보이는 문장이 있어요. 원문을 확인하세요: “{result.suspicious_text}”
            </p>
          )}
          <p>요약: {result.summary || '(요약 없음)'}</p>
          <p>분류: {result.priority} · {result.status} · 담당 {result.assignee_department || '(확인 필요)'}</p>
          {!result.desired_due_date && <p className="error">희망 완료일을 확실히 찾지 못했어요. 직접 입력하세요.</p>}
          <p className="meta">아래 등록 폼의 값을 확인·수정한 뒤 [저장]을 누르세요.</p>
        </div>
      )}
    </div>
  );
}
