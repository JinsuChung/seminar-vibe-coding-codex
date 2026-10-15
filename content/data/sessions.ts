export type SessionMeta = {
  n: number;
  slug: string;
  title: string;
  short: string;
  minutes: number;
  stage: string;
  oneLiner: string;
  goals: string[];
  output: string;
  tools: string[];
  color: string;
};

export const sessions: SessionMeta[] = [
  {
    n: 1,
    slug: '/sessions/1',
    title: '바이브 코딩에서 에이전틱 엔지니어링으로',
    short: '개념과 첫 만남',
    minutes: 35,
    stage: '개념',
    oneLiner: '이제 소프트웨어는 사는 것이 아니라, 말로 주문해서 쓰고 버리는 것이 된다.',
    goals: [
      '바이브 코딩과 에이전틱 엔지니어링의 차이를 내 말로 설명할 수 있다',
      '챗봇(웹 채팅)과 에이전트(Claude Code)의 차이를 안다',
      'Claude Code를 설치하고 내 폴더에서 첫 작업을 시킨다',
    ],
    output: 'Claude Code 설치, 산단 공유폴더 팀별 정리와 현황 보고서',
    tools: ['Claude Code 데스크톱 앱'],
    color: '#0b4a9e',
  },
  {
    n: 2,
    slug: '/sessions/2',
    title: '인스턴트 소프트웨어: 쓰고 지우는 내 업무 도구',
    short: '내 PC에서 만들기',
    minutes: 40,
    stage: '로컬',
    oneLiner: '기획이 곧 프롬프트이고, 프롬프트가 곧 프로그램이다.',
    goals: [
      '탐색 → 계획 → 실행 → 검증 4단계로 Claude Code에 일을 시킨다',
      '업무 프롬프트 5요소(목적·입력·출력·조건·검증)로 요청을 쓴다',
      'CLAUDE.md로 "우리 팀 규칙"을 AI에게 알려 둔다',
    ],
    output: '엑셀 취합기, 파일 일괄 정리, 한 장짜리 HTML 도구',
    tools: ['Claude Code', '플랜 모드', 'CLAUDE.md'],
    color: '#0e7490',
  },
  {
    n: 3,
    slug: '/sessions/3',
    title: 'Git과 GitHub: AI와 일할 때의 안전망',
    short: '되돌리기와 저장',
    minutes: 35,
    stage: '안전망',
    oneLiner: 'Git은 게임의 세이브 포인트, GitHub는 그 세이브를 올려두는 클라우드다.',
    goals: [
      '저장소·커밋·푸시·.gitignore 4가지 개념을 설명할 수 있다',
      'Claude Code에게 "커밋해줘", "어제 상태로 되돌려줘"를 시켜 본다',
      '2회차에 만든 도구를 GitHub 비공개 저장소에 올린다',
    ],
    output: '커밋 이력이 있는 내 프로젝트, GitHub 저장소',
    tools: ['Git', 'GitHub'],
    color: '#6d28d9',
  },
  {
    n: 4,
    slug: '/sessions/4',
    title: '웹앱으로 키우고 Vercel로 배포하기',
    short: '링크로 공유하기',
    minutes: 40,
    stage: '서버',
    oneLiner: '내 PC에만 있던 도구가 링크 하나로 동료에게 간다.',
    goals: [
      '로컬 도구와 서버에 올린 도구의 차이를 안다',
      'Claude Code로 웹앱을 만들고 내 PC에서 띄워 본다 (localhost)',
      'GitHub → Vercel 연결로 배포하고, 수정이 자동 반영되는 것을 확인한다',
    ],
    output: '동료에게 링크로 공유하는 웹 도구',
    tools: ['Next.js', 'Vercel'],
    color: '#047857',
  },
  {
    n: 5,
    slug: '/sessions/5',
    title: '데이터베이스 붙이기: 접수·신청형 업무 앱',
    short: '데이터 저장하기',
    minutes: 40,
    stage: '데이터',
    oneLiner: '데이터베이스는 여러 사람이 동시에 쓰는 공유 엑셀이다. 단, 문단속을 해야 한다.',
    goals: [
      '테이블·행·열을 엑셀에 빗대어 설명할 수 있다',
      'Supabase 프로젝트를 만들고 웹앱과 연결한다',
      '환경변수와 행 수준 보안(RLS)이 왜 필요한지 안다',
    ],
    output: '화면에서 추가·수정되는 공모 보드 (또는 행사 신청 앱)',
    tools: ['Supabase', 'Neon(대안)'],
    color: '#b45309',
  },
  {
    n: 6,
    slug: '/sessions/6',
    title: 'AI API로 지능형 업무 도구 만들기 + 안전하게 쓰기',
    short: 'AI 기능 넣기',
    minutes: 40,
    stage: 'AI',
    oneLiner: 'Claude Code는 만드는 AI, Claude API는 내 앱 안에서 일하는 AI다.',
    goals: [
      'Claude Code와 Claude API의 역할 차이를 안다',
      'API 키를 안전하게 발급·보관하고, 비용을 어림잡을 수 있다',
      '업무 앱에 요약·추출·분류 기능을 넣는다',
      '기관에서 AI 도구를 운영할 때의 보안·거버넌스 기준을 안다',
    ],
    output: '공고문 자동 추출·등록 기능',
    tools: ['Claude API', '환경변수'],
    color: '#be123c',
  },
];

export const getSession = (n: number) => sessions.find((s) => s.n === n)!;

/** 회차 사이 혼자 공부하는 과정 (n.5) */
export type SelfStudyMeta = {
  n: number;
  slug: string;
  title: string;
  short: string;
  minutes: number;
  focus: string;
  plan: { day: string; minutes: number; what: string; href: string }[];
};

export const selfStudies: SelfStudyMeta[] = [
  {
    n: 1.5,
    slug: '/sessions/self-1',
    title: '1.5 · 혼자 해 보기: Claude Code와 친해지기',
    short: 'Claude Code와 친해지기',
    minutes: 90,
    focus: '지시하는 법, 계획 보기, 되돌리기를 손에 익히고 문서 작성도 맡겨 봅니다.',
    plan: [
      { day: '1일차', minutes: 15, what: '1회차 복습과 Claude Code 화면 다시 보기', href: '#1일차-복습과-화면-익히기' },
      { day: '2일차', minutes: 20, what: '좋은 지시 vs 아쉬운 지시 직접 비교', href: '#2일차-지시를-바꾸면-결과가-바뀐다' },
      { day: '3일차', minutes: 20, what: '플랜 모드와 되돌리기 연습', href: '#3일차-계획-보기와-되돌리기' },
      { day: '4일차', minutes: 20, what: '문서 작성 맡기기 (안내문·보고서)', href: '#4일차-문서도-맡겨-보기' },
      { day: '5일차', minutes: 15, what: '내 업무 반복 작업 구체화, 2회차 준비', href: '#5일차-내-업무-정리와-2회차-준비' },
    ],
  },
  {
    n: 2.5,
    slug: '/sessions/self-2',
    title: '2.5 · 혼자 해 보기: 엑셀·파일 도구 더 만들기',
    short: '엑셀·파일 도구 더 만들기',
    minutes: 90,
    focus: '검증 기준을 스스로 쓰고, 2회차와 다른 엑셀 작업 4가지를 혼자 만들어 봅니다.',
    plan: [
      { day: '1일차', minutes: 15, what: '2회차 복습, AI가 엑셀을 다루는 원리', href: '#1일차-ai는-엑셀을-어떻게-다루나' },
      { day: '2일차', minutes: 20, what: '이상값 찾기와 검증 기준 쓰기', href: '#2일차-검증-기준을-내가-쓴다' },
      { day: '3일차', minutes: 20, what: '집계표·추이 보고서 만들기', href: '#3일차-집계와-보고서' },
      { day: '4일차', minutes: 25, what: '내 업무 도구 기획서 완성과 첫 버전', href: '#4일차-내-업무-도구-첫-버전' },
      { day: '5일차', minutes: 10, what: 'CLAUDE.md 다듬기, 3회차 준비', href: '#5일차-claudemd-다듬기와-3회차-준비' },
    ],
  },
  {
    n: 3.5,
    slug: '/sessions/self-3',
    title: '3.5 · 혼자 해 보기: 커밋하는 습관 들이기',
    short: '커밋하는 습관 들이기',
    minutes: 80,
    focus: '내 도구를 저장소로 관리하고, 되돌리는 세 가지 방법과 GitHub 화면에 익숙해집니다.',
    plan: [
      { day: '1일차', minutes: 15, what: '3회차 복습, Git이 기록하는 것', href: '#1일차-git은-무엇을-기록하나' },
      { day: '2일차', minutes: 20, what: '2.5 도구들을 저장소로, 커밋 쌓기', href: '#2일차-커밋을-쌓아-보자' },
      { day: '3일차', minutes: 20, what: '되돌리는 세 가지 방법', href: '#3일차-되돌리는-세-가지-방법' },
      { day: '4일차', minutes: 15, what: 'README 쓰기와 GitHub 화면 둘러보기', href: '#4일차-readme와-github-화면' },
      { day: '5일차', minutes: 10, what: '4회차 준비 (Node.js, Vercel)', href: '#5일차-4회차-준비' },
    ],
  },
  {
    n: 4.5,
    slug: '/sessions/self-4',
    title: '4.5 · 혼자 해 보기: 공모 보드 키우기',
    short: '공모 보드 키우기',
    minutes: 100,
    focus: '혼자 배포를 한 번 더 해 보고, 1회차에 만든 마감 일정표로 보드를 채우고 기능을 붙입니다.',
    plan: [
      { day: '1일차', minutes: 15, what: '4회차 복습, 웹앱의 구조', href: '#1일차-웹앱은-어떻게-생겼나' },
      { day: '2일차', minutes: 25, what: '완성본으로 혼자 처음부터 배포', href: '#2일차-혼자서-처음부터-배포' },
      { day: '3일차', minutes: 25, what: '1회차 마감 일정표로 보드 채우기', href: '#3일차-내-데이터로-채우기' },
      { day: '4일차', minutes: 25, what: '기능 3개 붙이기, Vercel 대시보드 익히기', href: '#4일차-기능-붙이기와-vercel-대시보드' },
      { day: '5일차', minutes: 10, what: '5회차 준비 (Supabase)', href: '#5일차-5회차-준비' },
    ],
  },
  {
    n: 5.5,
    slug: '/sessions/self-5',
    title: '5.5 · 혼자 해 보기: 데이터와 보안 손에 익히기',
    short: '데이터와 보안 손에 익히기',
    minutes: 100,
    focus: 'SQL과 RLS 정책을 읽는 눈을 기르고, 컬럼 추가·권한 시험·내보내기를 혼자 해 봅니다.',
    plan: [
      { day: '1일차', minutes: 15, what: '5회차 복습, SQL 네 문장 읽기', href: '#1일차-sql-네-문장만-읽자' },
      { day: '2일차', minutes: 20, what: 'RLS 정책 읽고 두 계정으로 시험', href: '#2일차-rls를-직접-시험한다' },
      { day: '3일차', minutes: 25, what: '컬럼 추가하고 화면까지 반영', href: '#3일차-항목-하나-추가하기' },
      { day: '4일차', minutes: 25, what: '질문으로 데이터 보기, CSV 내보내기', href: '#4일차-데이터에-질문하기' },
      { day: '5일차', minutes: 15, what: '보안 점검, 6회차 준비 (API 키·한도)', href: '#5일차-보안-점검과-6회차-준비' },
    ],
  },
  {
    n: 6.5,
    slug: '/sessions/self-6',
    title: '6.5 · 과정 이후 4주 로드맵',
    short: '과정 이후 4주 로드맵',
    minutes: 120,
    focus: '수료 후 4주 동안 내 업무 도구 하나를 실제로 완성하고, 팀과 나누는 단계까지 갑니다.',
    plan: [
      { day: '1주차', minutes: 30, what: '도구 하나 고르고 기획서 쓰기', href: '#1주차-하나만-고른다' },
      { day: '2주차', minutes: 40, what: '첫 버전 만들고 가상 데이터로 검증', href: '#2주차-첫-버전과-검증' },
      { day: '3주차', minutes: 30, what: '동료 1명에게 써 보게 하고 고치기', href: '#3주차-동료에게-써-보게-하기' },
      { day: '4주차', minutes: 20, what: '운영 판단과 팀 공유', href: '#4주차-계속-쓸지-정하기' },
    ],
  },
];

export const getSelfStudy = (n: number) => selfStudies.find((s) => s.n === n);

/** 진도 합계에 쓰는 모든 과정 번호 (회차 + n.5) */
export const allTracks = [...sessions.map((s) => s.n), ...selfStudies.map((s) => s.n)].sort((a, b) => a - b);
