'use client';

import {useMemo, useState} from 'react';
import {Search} from 'lucide-react';
import {GRADE_STYLE, MARKET_CATEGORIES, marketItems, type MarketCategory} from '@/lib/mock-data';

const ALL = '전체' as const;
type FilterCategory = MarketCategory | typeof ALL;

function ChangeBadge({value}: {value: number}) {
  const isFlat = value === 0;
  const isUp = value > 0;
  return (
    <span
      className={`font-mono text-[12px] font-medium tabular-nums ${
        isFlat ? 'text-muted' : isUp ? 'text-rise' : 'text-fall'
      }`}
    >
      {isFlat ? '0.0%' : `${isUp ? '+' : ''}${value.toFixed(1)}%`}
    </span>
  );
}

export function MarketBoard() {
  const [category, setCategory] = useState<FilterCategory>(ALL);
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return marketItems.filter(item => {
      if (category !== ALL && item.category !== category) return false;
      if (query.trim() && !item.name.includes(query.trim())) return false;
      return true;
    });
  }, [category, query]);

  return (
    <section data-component="시세게시판" aria-labelledby="market-board-heading" className="flex flex-col gap-3">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label="시세 카테고리" className="no-scrollbar flex gap-1 overflow-x-auto">
          {[ALL, ...MARKET_CATEGORIES].map(c => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={category === c}
              onClick={() => setCategory(c)}
              className={`shrink-0 rounded-sm px-3 py-1.5 text-[13px] font-medium transition-colors ${
                category === c
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-surface text-muted hover:border-primary/50 hover:text-foreground'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <label className="flex h-9 w-full items-center gap-2 rounded-sm border border-border bg-surface px-2.5 text-muted focus-within:border-primary/60 sm:w-56">
          <Search className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="sr-only">아이템명으로 검색</span>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="아이템명 검색"
            className="w-full bg-transparent text-[13px] text-foreground placeholder:text-muted focus:outline-none"
          />
        </label>
      </div>

      <div className="rounded-md border border-border bg-surface">
        <div className="flex items-center gap-3 border-b border-border px-3 py-2 text-[11px] text-muted">
          <h2 id="market-board-heading" className="flex-1">
            아이템명
          </h2>
          <span className="w-24 shrink-0 text-right">현재가</span>
          <span className="w-16 shrink-0 text-right">전일대비</span>
          <span className="hidden w-20 shrink-0 text-right sm:block">거래량</span>
        </div>

        <ul className="divide-y divide-border">
          {filtered.map(item => (
            <li key={item.id} className="flex items-center gap-3 px-3 py-2.5 hover:bg-surface-2">
              <div className="flex min-w-0 flex-1 items-center gap-2.5">
                <span className={`h-4 w-4 shrink-0 rounded-[3px] ${GRADE_STYLE[item.grade]}`} aria-hidden="true" />
                <span className="truncate text-[13px] text-foreground">{item.name}</span>
                <span className="hidden shrink-0 text-[11px] text-muted sm:inline">{item.grade}</span>
              </div>
              <span className="w-24 shrink-0 text-right font-mono text-[13px] text-foreground tabular-nums">
                {item.price.toLocaleString('ko-KR')}
              </span>
              <span className="w-16 shrink-0 text-right">
                <ChangeBadge value={item.changePercent} />
              </span>
              <span className="hidden w-20 shrink-0 text-right font-mono text-[11px] text-muted sm:block">
                {item.volume.toLocaleString('ko-KR')}
              </span>
            </li>
          ))}

          {filtered.length === 0 && (
            <li className="px-3 py-8 text-center text-[13px] text-muted">검색 결과가 없어요</li>
          )}
        </ul>
      </div>

      <p className="text-[11px] text-muted">
        표시된 골드 시세는 로아 API 갱신 주기를 기준으로 한 목데이터이며, 실제 거래소 가격과 다를 수 있어요.
      </p>
    </section>
  );
}
