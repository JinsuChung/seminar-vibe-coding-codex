import { requests } from '@/data/grants';

// 오늘 날짜 기준 D-day를 매번 새로 계산하도록 요청마다 렌더링
export const dynamic = 'force-dynamic';

function dday(deadline: string) {
  const today = new Date(new Date().toISOString().slice(0, 10));
  return Math.round((Date.parse(deadline) - today.getTime()) / 86_400_000);
}

export default function Page() {
  const list = [...requests].sort((a, b) => a.desiredDueDate.localeCompare(b.desiredDueDate));
  return (
    <main>
      <h1>사내 업무 요청·처리 현황 보드</h1>
      <div className="grid">
        {list.map((item) => {
          const d = dday(item.desiredDueDate);
          return (
            <article key={item.id} className={`card ${item.priority === '긴급' ? 'urgent' : ''} ${item.status === '완료' ? 'past' : ''}`}>
              <div className="dday">{item.status} · {d < 0 ? '기한 경과' : d === 0 ? '오늘까지' : `D-${d}`}</div>
              <strong>{item.title}</strong>
              <div className="meta">{item.requesterDepartment} → {item.assigneeDepartment} · 우선순위 {item.priority}</div>
              <div className="meta">요청일 {item.requestedAt} · 희망 완료일 {item.desiredDueDate}</div>
              <p>{item.details}</p>
            </article>
          );
        })}
      </div>
      <p className="meta">교육용 가상 회사 업무 데이터 · 4회차 정적 버전</p>
    </main>
  );
}
