export type CheckItem = { id: string; label: string; hint?: string; href?: string };
export type CheckList = { id: string; title: string; items: CheckItem[] };

export const checklists: Record<string, CheckList> = {
  'prep-1': {
    id: 'prep-1',
    title: '1회차 전에 준비할 것',
    items: [
      { id: 'laptop', label: '인터넷에 연결된 회사 또는 개인 노트북', hint: '지원 운영체제는 OpenAI Codex 공식 문서에서 확인' },
      {
        id: 'claude-pro',
        label: 'ChatGPT 계정과 Codex 사용 가능 여부 확인',
        hint: '플랜별 제공 범위는 바뀔 수 있으므로 OpenAI 공식 문서를 확인하세요.',
        href: 'https://chatgpt.com',
      },
      { id: 'desktop-app', label: 'ChatGPT Codex 앱 설치', href: '/start/setup' },
      { id: 'sample-1', label: '1회차 실습 자료 내려받아 압축 풀기', href: '/downloads' },
    ],
  },
  'prep-2': {
    id: 'prep-2',
    title: '2회차 전에 준비할 것',
    items: [
      { id: 'homework-1', label: '1회차 과제: 내 업무의 반복 작업 3가지 적어 오기', href: '/sessions/1#과제' },
      {
        id: 'python',
        label: 'Python 설치 확인 (엑셀 처리용)',
        hint: 'Codex에게 "Python이 설치돼 있는지 확인해줘"라고 요청하면 됩니다.',
        href: '/start/setup#python',
      },
      { id: 'sample-2', label: '2회차 실습 자료 내려받기', href: '/downloads' },
    ],
  },
  'prep-3': {
    id: 'prep-3',
    title: '3회차 전에 준비할 것',
    items: [
      { id: 'github', label: 'GitHub 계정 가입 (업무용 이메일 권장)', href: 'https://github.com/signup' },
      { id: 'git', label: 'Git 설치 확인', hint: 'Windows는 Git for Windows 설치', href: '/start/setup#git' },
      { id: '2fa', label: 'GitHub 2단계 인증용 휴대폰 준비' },
    ],
  },
  'prep-4': {
    id: 'prep-4',
    title: '4회차 전에 준비할 것',
    items: [
      { id: 'node', label: 'Node.js LTS 설치', href: '/start/setup#nodejs' },
      { id: 'vercel', label: 'Vercel 가입 ("Continue with GitHub")', href: 'https://vercel.com/signup' },
    ],
  },
  'prep-5': {
    id: 'prep-5',
    title: '5회차 전에 준비할 것',
    items: [
      { id: 'supabase', label: 'Supabase 가입 (GitHub 계정으로)', href: 'https://supabase.com' },
      { id: 'supabase-slots', label: '현재 플랜의 프로젝트 한도 확인', hint: 'Supabase 공식 가격 문서에서 최신 한도를 확인하세요.' },
      { id: 'session4-done', label: '4회차 업무 요청 보드가 배포돼 있음 (없으면 자료실 완성본 사용)', href: '/downloads' },
    ],
  },
  'prep-6': {
    id: 'prep-6',
    title: '6회차 전에 준비할 것',
    items: [
      { id: 'console', label: 'OpenAI API 계정, 결제·사용 한도 설정', href: 'https://platform.openai.com' },
      { id: 'supabase-wake', label: 'Supabase 프로젝트 상태와 정책 확인' },
      { id: 'session5-done', label: '5회차 DB 업무 요청 보드가 동작함 (없으면 완성본 사용)', href: '/downloads' },
      { id: 'sample-6', label: '6회차 가상 업무 요청·회의록 자료 내려받기', href: '/downloads' },
    ],
  },
  'self-1': {
    id: 'self-1',
    title: '스스로 점검 · 이번 주가 끝나면 이렇게 말할 수 있어요',
    items: [
      { id: 'a', label: 'ChatGPT Codex에서 폴더를 열고 파일을 파악해 달라고 요청할 수 있다' },
      { id: 'b', label: '"아직 실행하지 말고 계획만"을 넣거나 플랜 모드를 켜서 계획부터 받을 수 있다' },
      { id: 'c', label: '권한 승인 창을 읽고 허용·거부를 판단할 수 있다' },
      { id: 'd', label: '변경 내역과 Git을 이용해 잘못된 작업을 되돌릴 수 있다' },
      { id: 'e', label: '같은 일을 아쉬운 지시와 좋은 지시로 시켜 보고 차이를 설명할 수 있다' },
      { id: 'f', label: '안내문이나 보고서 같은 문서도 Codex에 맡겨 파일로 받을 수 있다' },
    ],
  },
  'self-2': {
    id: 'self-2',
    title: '스스로 점검 · 이번 주가 끝나면 이렇게 말할 수 있어요',
    items: [
      { id: 'a', label: '요청할 때 목적·입력·출력·조건·검증 다섯 칸을 채울 수 있다' },
      { id: 'b', label: '"검산 결과를 보여줘"처럼 AI가 스스로 확인할 기준을 줄 수 있다' },
      { id: 'c', label: '엑셀 이상값 찾기, 집계표, 추이 보고서를 혼자 만들어 봤다' },
      { id: 'd', label: '한 번 만든 도구를 다음 달에 다시 쓰는 방법을 안다' },
      { id: 'e', label: '내 업무 도구 기획서를 완성했다' },
    ],
  },
  'self-3': {
    id: 'self-3',
    title: '스스로 점검 · 이번 주가 끝나면 이렇게 말할 수 있어요',
    items: [
      { id: 'a', label: '저장소·커밋·푸시·.gitignore를 내 말로 설명할 수 있다' },
      { id: 'b', label: '기능 하나를 마칠 때마다 커밋하는 습관이 생겼다 (커밋 5개 이상)' },
      { id: 'c', label: '되돌리는 방법 세 가지(대화 되돌리기, 커밋으로 되돌리기, 특정 파일만)를 구분한다' },
      { id: 'd', label: 'GitHub 웹에서 커밋 이력과 파일 변경을 볼 수 있다' },
      { id: 'e', label: '저장소에 README를 써 두었다' },
    ],
  },
  'self-4': {
    id: 'self-4',
    title: '스스로 점검 · 이번 주가 끝나면 이렇게 말할 수 있어요',
    items: [
      { id: 'a', label: '수업 도움 없이 GitHub → Vercel 배포를 처음부터 끝까지 해 봤다' },
      { id: 'b', label: '가상 업무 요청 데이터로 보드를 채웠다' },
      { id: 'c', label: '보드에 기능을 하나 이상 붙이고 푸시해서 반영했다' },
      { id: 'd', label: 'Vercel 대시보드에서 배포 목록, 빌드 로그, 접근 제한 위치를 안다' },
    ],
  },
  'self-5': {
    id: 'self-5',
    title: '스스로 점검 · 이번 주가 끝나면 이렇게 말할 수 있어요',
    items: [
      { id: 'a', label: 'SELECT·INSERT·UPDATE·WHERE가 들어간 SQL을 읽고 뜻을 말할 수 있다' },
      { id: 'b', label: 'RLS 정책을 읽고 "누가 무엇을 할 수 있는지" 설명할 수 있다' },
      { id: 'c', label: '두 계정으로 시험해 남의 데이터를 지울 수 없는 것을 확인했다' },
      { id: 'd', label: '테이블에 항목을 하나 추가하고 화면과 SQL 파일까지 반영했다' },
      { id: 'e', label: '보안 점검 프롬프트로 앱을 점검하고 지적 사항을 확인했다' },
    ],
  },
};
