import type { ReactNode } from 'react';
import './globals.css';

export const metadata = { title: '사내 업무 요청·처리 현황 보드', description: '부서 간 업무 요청의 접수와 처리 현황을 확인하는 교육용 보드' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
