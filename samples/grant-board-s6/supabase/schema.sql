-- 사내 업무 요청·처리 현황 테이블
-- Supabase 대시보드 → SQL Editor 에 통째로 붙여 넣고 Run 하세요.

create table if not exists public.work_requests (
  id          bigint generated always as identity primary key,
  title       text not null,
  requester_department text not null,
  assignee_department text not null,
  priority    text not null check (priority in ('긴급', '높음', '보통', '낮음')),
  status      text not null default '접수' check (status in ('접수', '검토 중', '처리 중', '완료')),
  requested_at date not null default current_date,
  desired_due_date date not null,
  details     text not null,
  created_by  uuid default auth.uid(),       -- 등록한 사람 (로그인 사용자 id, 자동)
  created_at  timestamptz not null default now()
);

-- 행 수준 보안(RLS) 켜기: 켜지 않으면 공개 키만으로 누구나 모든 행을 고치고 지울 수 있다
alter table public.work_requests enable row level security;

-- 정책 1: 누구나 읽기
create policy "누구나 읽기" on public.work_requests
  for select to anon, authenticated using (true);

-- 정책 2: 로그인한 직원만 추가
create policy "로그인한 직원만 추가" on public.work_requests
  for insert to authenticated with check (created_by = auth.uid());

-- 정책 3: 등록한 본인만 수정
create policy "등록한 본인만 수정" on public.work_requests
  for update to authenticated using (created_by = auth.uid()) with check (created_by = auth.uid());

-- 정책 4: 등록한 본인만 삭제
create policy "등록한 본인만 삭제" on public.work_requests
  for delete to authenticated using (created_by = auth.uid());

-- 교육용 가상 데이터 10건 (SQL Editor는 관리자 권한으로 실행되므로 RLS와 상관없이 들어감)
insert into public.work_requests
  (title, requester_department, assignee_department, priority, status, requested_at, desired_due_date, details) values
  ('신규 입사자 계정 발급', '인사팀', 'IT운영팀', '높음', '처리 중', '2026-10-12', '2026-10-19', '10월 입사자 3명의 업무 계정과 기본 권한을 발급해 주세요.'),
  ('회의실 프로젝터 점검', '영업팀', '총무팀', '보통', '접수', '2026-10-14', '2026-10-21', '3층 대회의실 화면이 간헐적으로 끊깁니다.'),
  ('고객사 월간 리포트 자료 요청', '고객성공팀', '데이터팀', '긴급', '검토 중', '2026-10-15', '2026-10-17', '9월 이용률과 주요 기능별 통계를 추출해 주세요.'),
  ('법인카드 한도 조정', '마케팅팀', '재무팀', '높음', '처리 중', '2026-10-13', '2026-10-20', '전시회 집행을 위해 이번 달 한도를 임시 조정해 주세요.'),
  ('신제품 소개 페이지 게시', '제품팀', '웹운영팀', '보통', '접수', '2026-10-10', '2026-10-24', '승인된 원고와 이미지를 회사 홈페이지에 게시해 주세요.');
