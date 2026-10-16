import { Board } from '@/components/board';

export default function Page() {
  return (
    <main>
      <h1>사내 업무 요청·처리 현황 보드</h1>
      <Board />
      <p className="meta">교육용 가상 회사 업무 데이터 · 5회차 완성본 (Supabase + RLS)</p>
    </main>
  );
}
