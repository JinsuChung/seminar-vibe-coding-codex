import type { ReactNode } from 'react';
import './globals.css';

export const metadata = { title: '사내 업무 요청·처리 현황 보드', description: 'OpenAI로 요청문을 구조화하고 사람이 확인해 저장하는 업무 보드' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
