export type RequestItem = {
  id: number;
  title: string;
  requesterDepartment: string;
  assigneeDepartment: string;
  priority: '긴급' | '높음' | '보통' | '낮음';
  status: '접수' | '검토 중' | '처리 중' | '완료';
  requestedAt: string;
  desiredDueDate: string;
  details: string;
};

// 교육용 가상 회사 업무 데이터
export const requests: RequestItem[] = [
  { id: 1, title: '신규 입사자 계정 발급', requesterDepartment: '인사팀', assigneeDepartment: 'IT운영팀', priority: '높음', status: '처리 중', requestedAt: '2026-10-12', desiredDueDate: '2026-10-19', details: '10월 입사자 3명의 업무 계정과 기본 권한을 발급해 주세요.' },
  { id: 2, title: '회의실 프로젝터 점검', requesterDepartment: '영업팀', assigneeDepartment: '총무팀', priority: '보통', status: '접수', requestedAt: '2026-10-14', desiredDueDate: '2026-10-21', details: '3층 대회의실 화면이 간헐적으로 끊깁니다.' },
  { id: 3, title: '고객사 월간 리포트 자료 요청', requesterDepartment: '고객성공팀', assigneeDepartment: '데이터팀', priority: '긴급', status: '검토 중', requestedAt: '2026-10-15', desiredDueDate: '2026-10-17', details: '9월 이용률과 주요 기능별 통계를 추출해 주세요.' },
  { id: 4, title: '법인카드 한도 조정', requesterDepartment: '마케팅팀', assigneeDepartment: '재무팀', priority: '높음', status: '처리 중', requestedAt: '2026-10-13', desiredDueDate: '2026-10-20', details: '전시회 집행을 위해 이번 달 한도를 임시 조정해 주세요.' },
  { id: 5, title: '신제품 소개 페이지 게시', requesterDepartment: '제품팀', assigneeDepartment: '웹운영팀', priority: '보통', status: '접수', requestedAt: '2026-10-10', desiredDueDate: '2026-10-24', details: '승인된 원고와 이미지를 회사 홈페이지에 게시해 주세요.' },
  { id: 6, title: '사무용 의자 교체', requesterDepartment: '개발팀', assigneeDepartment: '총무팀', priority: '낮음', status: '완료', requestedAt: '2026-10-02', desiredDueDate: '2026-10-16', details: '파손된 의자 2개를 교체해 주세요.' },
];
