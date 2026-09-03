'use client';

import {useMemo, useState} from 'react';
import {ArrowUpDown} from 'lucide-react';
import {AUCTION_CATEGORIES, GRADE_STYLE, auctionListings, type AuctionCategory} from '@/lib/mock-data';

const ALL = '전체' as const;
type FilterCategory = AuctionCategory | typeof ALL;
type SortKey = 'price-asc' | 'price-desc' | 'remaining';

const SORT_LABEL: Record<SortKey, string> = {
  'price-asc': '가격 낮은순',
  'price-desc': '가격 높은순',
  remaining: '마감 임박순'
};

function parseRemaining(remaining: string) {
  const hourMatch = remaining.match(/(\d+)시간/);
  const minMatch = remaining.match(/(\d+)분/);
  const hours = hourMatch ? Number(hourMatch[1]) : 0;
  const minutes = minMatch ? Number(minMatch[1]) : 0;
  return hours * 60 + minutes;
}

export function AuctionBoard() {
  const [category, setCategory] = useState<FilterCategory>(ALL);
  const [sort, setSort] = useState<SortKey>('remaining');

  const listings = useMemo(() => {
    const filtered = auctionListings.filter(item => category === ALL || item.category === category);
    return [...filtered].sort((a, b) => {
      if (sort === 'price-asc') return a.buyPrice - b.buyPrice;
      if (sort === 'price-desc') return b.buyPrice - a.buyPrice;
      return parseRemaining(a.remaining) - parseRemaining(b.remaining);
    });
  }, [category, sort]);

  return (
    <section data-component="경매장게시판" aria-labelledby="auction-board-heading" className="flex flex-col gap-3">
      <h2 id="auction-board-heading" className="sr-only">
        경매장 매물 목록
      </h2>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div role="tablist" aria-label="경매장 카테고리" className="no-scrollbar flex gap-1 overflow-x-auto">
          {[ALL, ...AUCTION_CATEGORIES].map(c => (
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

        <label className="flex h-9 w-full items-center gap-2 rounded-sm border border-border bg-surface px-2.5 text-muted focus-within:border-primary/60 sm:w-44">
          <ArrowUpDown className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="sr-only">정렬 기준</span>
          <select
            value={sort}
            onChange={e => setSort(e.target.value as SortKey)}
            className="w-full bg-transparent text-[13px] text-foreground focus:outline-none"
          >
            {Object.entries(SORT_LABEL).map(([key, label]) => (
              <option key={key} value={key} className="bg-surface text-foreground">
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        {listings.map(item => (
          <li key={item.id} className="flex flex-col gap-2 rounded-md border border-border bg-surface p-3">
            <div className="flex items-start gap-2.5">
              <span className={`h-4 w-4 shrink-0 rounded-[3px] ${GRADE_STYLE[item.grade]}`} aria-hidden="true" />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline gap-1.5">
                  <p className="truncate text-[13px] font-medium text-foreground">{item.name}</p>
                  {typeof item.quality === 'number' && (
                    <span
                      className={`shrink-0 font-mono text-[11px] font-bold ${
                        item.quality >= 90 ? 'text-primary' : 'text-muted'
                      }`}
                    >
                      {item.quality}%
                    </span>
                  )}
                </div>
                <p className="mt-0.5 truncate text-[11px] text-muted">{item.detail}</p>
              </div>
            </div>

            <div className="flex items-center justify-between border-t border-border pt-2">
              <span className="text-[11px] text-fall">{item.remaining} 남음</span>
              <span className="font-mono text-[13px] font-bold text-foreground">
                {item.buyPrice.toLocaleString('ko-KR')}골드
              </span>
            </div>
          </li>
        ))}

        {listings.length === 0 && (
          <li className="col-span-full px-3 py-8 text-center text-[13px] text-muted">등록된 매물이 없어요</li>
        )}
      </ul>

      <p className="text-[11px] text-muted">
        경매장 매물은 캐릭터별 실시간 등록 정보를 반영하지 않는 목데이터이며, 실제 매물과 다를 수 있어요.
      </p>
    </section>
  );
}
