import type {Metadata, Viewport} from 'next';
import {Noto_Sans_KR, Nanum_Gothic_Coding} from 'next/font/google';
import {SITE_NAME} from '@/lib/constants';
import './globals.css';

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto-sans-kr'
});

const nanumGothicCoding = Nanum_Gothic_Coding({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-nanum-gothic-coding'
});

export const metadata: Metadata = {
  title: `${SITE_NAME} — 로스트아크 정보 포털`,
  description: `로스트아크 캐릭터 검색, 랭킹, 통계, 시세, 게임 일정까지 한눈에 확인하는 정보 포털 ${SITE_NAME}`
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0a0a0b'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${notoSansKr.variable} ${nanumGothicCoding.variable} bg-background`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
