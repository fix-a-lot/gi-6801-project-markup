import Link from 'next/link';
import {Search} from 'lucide-react';
import {SITE_NAME} from '@/lib/site-config';

const POPULAR_SEARCHES = ['은빛부검사', '카제하야', '무명의창잡이', '달빛서포터', '칼바람소서리스', '붉은칼날데모닉'];

const SERVERS = ['전체 서버', '루페온', '실리안', '아만', '카마인', '니나브', '카제로스'];

export function HeroSearch() {
  return (
    <section data-component="메인검색" className="border-b border-border bg-surface">
      <div className="mx-auto max-w-[1280px] px-4 py-6 lg:px-6 lg:py-8">
        <h1 className="break-keep text-[19px] font-bold tracking-tight text-foreground text-balance">
          아르케시아의 모든 데이터, {SITE_NAME}에서 한번에
        </h1>
        <p className="mt-1 break-keep text-[13px] text-muted">
          캐릭터 검색 한 번으로 전투력, 장비, 각인, 보석까지 확인하세요
        </p>

        <form className="mt-4 flex flex-col gap-2 sm:flex-row" role="search">
          <label htmlFor="server-select" className="sr-only">
            서버 선택
          </label>
          <select
            id="server-select"
            className="h-11 rounded-sm border border-border bg-background px-3 text-[13px] text-foreground focus:border-primary/60 focus:outline-none sm:w-40"
            defaultValue={SERVERS[0]}
          >
            {SERVERS.map(server => (
              <option key={server} value={server}>
                {server}
              </option>
            ))}
          </select>

          <label htmlFor="character-search" className="sr-only">
            캐릭터명으로 검색
          </label>
          <div className="flex h-11 flex-1 items-center gap-2 rounded-sm border border-border bg-background px-3 focus-within:border-primary/60">
            <Search className="h-4 w-4 shrink-0 text-muted" aria-hidden="true" />
            <input
              id="character-search"
              type="text"
              placeholder="캐릭터명으로 검색 (예: 은빛부검사)"
              className="w-full bg-transparent font-mono text-[14px] text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="h-11 shrink-0 rounded-sm bg-primary px-6 text-[13px] font-bold text-primary-foreground transition-opacity hover:opacity-90"
          >
            검색
          </button>
        </form>

        <div className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-1.5 text-[12px]">
          <span className="text-muted">인기 검색어</span>
          {POPULAR_SEARCHES.map(name => (
            <Link
              key={name}
              href={`/character/${encodeURIComponent(name)}`}
              className="rounded-sm border border-border px-2 py-0.5 font-mono text-muted transition-colors hover:border-primary/60 hover:text-foreground"
            >
              {name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
