import type { ReactNode } from 'react';
import './globals.css';

export const metadata = { title: '사내 업무 요청·처리 현황 보드', description: 'Supabase와 RLS로 보호하는 부서 간 업무 요청 보드' };

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
