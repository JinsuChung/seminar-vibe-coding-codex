import type { Metadata } from 'next';
import { Download, FileArchive, GitBranch } from 'lucide-react';
import { Callout } from 'fumadocs-ui/components/callout';
import { PageShell } from '@/components/ui/page-shell';
import { ProgressTransfer } from '@/components/library/progress-transfer';
import { gitConfig } from '@/lib/shared';

export const metadata: Metadata = { title: '자료실', description: '실습 자료, 교안 PDF, 회차별 완성본, 진도 옮기기.' };

const files = [
  { name: '1회차 실습 자료', file: '/downloads/session1-practice.zip', desc: '정리 안 된 가상 회사 공유폴더: 기획·영업·재무·구매·인사·IT운영 자료 (PDF, 엑셀, 워드, 사진)', icon: FileArchive },
  { name: '2회차 실습 자료', file: '/downloads/session2-practice.zip', desc: '집행내역 엑셀 10개(양식 조금씩 다름), 증빙 파일 20개, 증빙목록, 협약서 PDF', icon: FileArchive },
  { name: '3회차 시작 자료 · 출장비 계산기', file: '/downloads/session3-expense-calculator.zip', desc: '2회차 실습 2-3의 완성본. 2회차 결과물이 없으면 이것으로 시작', icon: FileArchive },
  { name: '4회차 완성본 · 사내 업무 요청 보드', file: '/downloads/session4-request-board.zip', desc: 'Next.js 정적 업무 요청·처리 현황 보드 (가상 회사 데이터)', icon: FileArchive },
  { name: '5회차 완성본 · 업무 요청 보드 + Supabase', file: '/downloads/session5-request-board.zip', desc: 'DB 연결, 직원 로그인, 요청 등록 폼, RLS 정책 SQL 포함', icon: FileArchive },
  { name: '6회차 완성본 · 요청문 자동 구조화', file: '/downloads/session6-request-board.zip', desc: '5회차 + OpenAI Responses API로 요청문 구조화·분류·요약, 사람이 확인 후 저장', icon: FileArchive },
  { name: '6회차 실습 자료', file: '/downloads/session6-practice.zip', desc: '가상 회사 요청문 3개(1개는 숨은 지시문 포함), 회의록 5개, 문의 메일 8개', icon: FileArchive },
];

export default function Page() {
  return (
    <PageShell title="자료실" description="실습 자료는 모두 교육용 가상 데이터입니다. 실제 기관·인물과 관계없습니다." full={false}>
      <div className="not-prose grid gap-3">
        {files.map((f) => {
          const Icon = f.icon;
          return (
            <a
              key={f.file}
              href={f.file}
              download
              className="flex items-center gap-4 rounded-xl border bg-fd-card p-4 transition-colors hover:border-fd-primary"
            >
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary">
                <Icon className="size-5" />
              </span>
              <span className="flex-1">
                <span className="block font-semibold">{f.name}</span>
                <span className="block text-sm text-fd-muted-foreground">{f.desc}</span>
              </span>
              <Download className="size-4 text-fd-muted-foreground" />
            </a>
          );
        })}
        <a
          href={`https://github.com/${gitConfig.user}/${gitConfig.repo}`}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-xl border bg-fd-card p-4 transition-colors hover:border-fd-primary"
        >
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-fd-primary/10 text-fd-primary">
            <GitBranch className="size-5" />
          </span>
          <span className="flex-1">
            <span className="block font-semibold">이 사이트의 소스 (GitHub)</span>
            <span className="block text-sm text-fd-muted-foreground">이 강의 사이트도 Codex로 만들었습니다. 복제해서 직접 고쳐 보세요.</span>
          </span>
        </a>
      </div>

      <Callout type="info" title="압축 풀기 (Windows)">
        zip 파일을 오른쪽 클릭 → <b>모두 압축 풀기</b>를 누르세요. 한국어 Windows 기본 압축 풀기에서 한글 파일명이 깨지지 않게 만들었고, 반디집·7-Zip·macOS에서도 정상으로 보입니다. 압축을 푼 폴더를 Codex 작업 경로로 열면 됩니다. zip 안에서 파일을 바로 열지 말고 꼭 압축을 먼저 푸세요.
      </Callout>

      <h2 id="진도-옮기기">진도 옮기기</h2>
      <p>진도는 이 브라우저에만 저장됩니다. 다른 PC나 브라우저로 옮기려면 코드를 복사해 그쪽에서 붙여 넣으세요.</p>
      <ProgressTransfer />
    </PageShell>
  );
}
