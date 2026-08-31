import Link from 'next/link';
import {ArrowUpRight, Swords} from 'lucide-react';
import {SITE_NAME} from '@/lib/constants';

export default function Home() {
  return (
    <div data-component="게임선택페이지" className="flex min-h-screen items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-sans text-2xl font-bold tracking-tight text-foreground">{SITE_NAME}</h1>
          <p className="mt-2 text-sm text-muted">이용할 게임을 선택하세요</p>
        </div>

        <Link
          href="/lostark"
          className="group flex items-center gap-4 rounded-md border border-border bg-surface px-5 py-4 transition-colors hover:border-primary hover:bg-surface-2"
        >
          <span className="flex size-11 shrink-0 items-center justify-center rounded-md bg-surface-2 text-primary">
            <Swords className="size-5" />
          </span>
          <span className="flex-1">
            <span className="block text-sm font-bold text-foreground">로스트아크</span>
            <span className="block text-xs text-muted">캐릭터 검색, 랭킹, 통계, 시세, 일정</span>
          </span>
          <ArrowUpRight className="size-4 text-muted transition-colors group-hover:text-primary" />
        </Link>
      </div>
    </div>
  );
}
