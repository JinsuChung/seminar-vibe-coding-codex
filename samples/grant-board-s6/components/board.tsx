'use client';
import { useCallback, useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';
import { supabase, supabaseConfigured, type RequestItem } from '@/lib/supabase';
import { ExtractPanel } from '@/components/extract-panel';

function dday(deadline: string) {
  const today = new Date(new Date().toISOString().slice(0, 10));
  return Math.round((Date.parse(deadline) - today.getTime()) / 86_400_000);
}

export function Board() {
  const [requests, setRequests] = useState<RequestItem[]>([]);
  const [session, setSession] = useState<Session | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [draft, setDraft] = useState<Partial<RequestItem> | undefined>();

  // 목록 불러오기 (누구나 읽기 정책)
  const load = useCallback(async () => {
    const { data, error } = await supabase.from('work_requests').select('*').order('desired_due_date');
    if (error) setError(`목록을 불러오지 못했어요: ${error.message}`);
    else setRequests(data ?? []);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!supabaseConfigured) {
      setLoading(false);
      return;
    }
    load();
    supabase.auth.getSession().then(({ data }) => setSession(data.session));
    const { data: sub } = supabase.auth.onAuthStateChange((_e, s) => setSession(s));
    return () => sub.subscription.unsubscribe();
  }, [load]);

  if (!supabaseConfigured) {
    return (
      <p className="notice">
        Supabase 연결 정보가 없어요. <code>.env.local.example</code>을 복사해 <code>.env.local</code>을 만들고 값을 넣은 뒤 개발 서버를 다시
        시작하세요.
      </p>
    );
  }

  return (
    <>
      <AuthPanel session={session} />
      {session && <ExtractPanel session={session} onExtract={setDraft} />}
      {session && <RequestForm onSaved={load} initial={draft} />}
      {error && <p className="notice error">{error}</p>}
      {loading ? (
        <p className="meta">불러오는 중…</p>
      ) : (
        <div className="grid">
          {requests.map((item) => {
            const d = dday(item.desired_due_date);
            return (
              <article key={item.id} className={`card ${item.priority === '긴급' ? 'urgent' : ''} ${item.status === '완료' ? 'past' : ''}`}>
                <div className="dday">{item.status} · {d < 0 ? '기한 경과' : d === 0 ? '오늘까지' : `D-${d}`}</div>
                <strong>{item.title}</strong>
                <div className="meta">{item.requester_department} → {item.assignee_department} · 우선순위 {item.priority}</div>
                <div className="meta">요청일 {item.requested_at} · 희망 완료일 {item.desired_due_date}</div>
                <p>{item.details}</p>
                {session && (
                  <button
                    className="link"
                    onClick={async () => {
                      if (!confirm(`"${item.title}" 요청을 삭제할까요?`)) return;
                      const { error, count } = await supabase.from('work_requests').delete({ count: 'exact' }).eq('id', item.id);
                      if (error) alert(error.message);
                      else if (count === 0) alert('본인이 등록한 요청만 삭제할 수 있어요 (RLS 정책).');
                      load();
                    }}
                  >
                    삭제
                  </button>
                )}
              </article>
            );
          })}
        </div>
      )}
    </>
  );
}

/** 담당자 로그인: 계정은 Supabase 대시보드 Authentication → Users 에서 미리 만들어 둔다 */
function AuthPanel({ session }: { session: Session | null }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  if (session) {
    return (
      <div className="bar">
        <span>{session.user.email} 로그인 중 · 업무 요청을 등록할 수 있어요</span>
        <button className="secondary" onClick={() => supabase.auth.signOut()}>
          로그아웃
        </button>
      </div>
    );
  }
  return (
    <form
      className="bar"
      onSubmit={async (e) => {
        e.preventDefault();
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        setMsg(error ? '로그인 실패: 이메일과 비밀번호를 확인하세요.' : '');
      }}
    >
      <span>담당자 로그인</span>
      <input type="email" placeholder="이메일" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">로그인</button>
      {msg && <span className="error">{msg}</span>}
    </form>
  );
}

/** 업무 요청 등록 폼 (로그인한 직원만 추가 정책) */
export function RequestForm({ onSaved, initial }: { onSaved: () => void; initial?: Partial<RequestItem> }) {
  const [form, setForm] = useState({
    title: '', requester_department: '', assignee_department: '', priority: '보통', status: '접수',
    requested_at: new Date().toISOString().slice(0, 10), desired_due_date: '', details: '', ...clean(initial),
  });
  const [saving, setSaving] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    if (initial) setForm((f) => ({ ...f, ...clean(initial) }));
  }, [initial]);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement>) => setForm({ ...form, [k]: e.target.value });

  return (
    <form
      className="form"
      onSubmit={async (e) => {
        e.preventDefault();
        setSaving(true);
        const { error } = await supabase.from('work_requests').insert(form);
        setSaving(false);
        if (error) setMsg(`저장 실패: ${error.message}`);
        else {
          setMsg('저장했어요.');
          setForm({ title: '', requester_department: '', assignee_department: '', priority: '보통', status: '접수', requested_at: new Date().toISOString().slice(0, 10), desired_due_date: '', details: '' });
          onSaved();
        }
      }}
    >
      <strong>업무 요청 등록</strong>
      <input placeholder="요청 제목 (필수)" value={form.title} onChange={set('title')} required />
      <input placeholder="요청 부서" value={form.requester_department} onChange={set('requester_department')} required />
      <input placeholder="담당 부서" value={form.assignee_department} onChange={set('assignee_department')} required />
      <input placeholder="우선순위 (긴급/높음/보통/낮음)" value={form.priority} onChange={set('priority')} required />
      <input placeholder="상태 (접수/검토 중/처리 중/완료)" value={form.status} onChange={set('status')} required />
      <label>
        요청일 <input type="date" value={form.requested_at} onChange={set('requested_at')} required />
      </label>
      <label>
        희망 완료일 <input type="date" value={form.desired_due_date} onChange={set('desired_due_date')} required />
      </label>
      <input placeholder="요청 내용" value={form.details} onChange={set('details')} required />
      <button type="submit" disabled={saving}>
        {saving ? '저장 중…' : '저장'}
      </button>
      {msg && <span className="meta">{msg}</span>}
    </form>
  );
}

function clean(g?: Partial<RequestItem>) {
  if (!g) return {};
  return {
    ...(g.title != null && { title: g.title }),
    ...(g.requester_department != null && { requester_department: g.requester_department }),
    ...(g.assignee_department != null && { assignee_department: g.assignee_department }),
    ...(g.priority != null && { priority: g.priority }),
    ...(g.status != null && { status: g.status }),
    ...(g.requested_at != null && { requested_at: g.requested_at }),
    ...(g.desired_due_date != null && { desired_due_date: g.desired_due_date }),
    ...(g.details != null && { details: g.details }),
  };
}
