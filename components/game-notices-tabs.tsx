'use client';

import {useState} from 'react';
import Link from 'next/link';
import type {NoticeCategory} from '@/lib/mock-data';
import {noticeItems} from '@/lib/mock-data';

const CATEGORIES: NoticeCategory[] = ['공지', '이벤트', '쿠폰', '업데이트'];

const BADGE_STYLES: Record<NoticeCategory, string> = {
  공지: 'text-muted bg-surface-2',
  이벤트: 'text-primary bg-primary/10',
  쿠폰: 'text-rise bg-rise/10',
  업데이트: 'text-secondary bg-secondary/10'
};

export function InfoTabs() {
  const [active, setActive] = useState<NoticeCategory>('공지');

  const items = noticeItems.filter(item => item.category === active).slice(0, 6);

  return (
    <section
      data-component="게임공지탭"
      aria-labelledby="info-tabs-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="flex items-center justify-between border-b border-border px-3">
        <div role="tablist" aria-label="게임 정보 카테고리" className="flex gap-1">
          {CATEGORIES.map(category => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={active === category}
              onClick={() => setActive(category)}
              className={`relative px-3 py-2.5 text-[13px] font-bold transition-colors ${
                active === category ? 'text-foreground' : 'text-muted hover:text-foreground'
              }`}
            >
              {category}
              {active === category && (
                <span className="absolute inset-x-2 bottom-0 h-[2px] rounded-full bg-primary" aria-hidden="true" />
              )}
            </button>
          ))}
        </div>
        <Link
          href={`/notice?tab=${encodeURIComponent(active)}`}
          className="hidden text-[12px] text-muted hover:text-foreground sm:inline"
        >
          더보기
        </Link>
      </div>

      <h2 id="info-tabs-heading" className="sr-only">
        게임 공지, 이벤트, 쿠폰, 업데이트
      </h2>

      <ul className="divide-y divide-border">
        {items.map(item => (
          <li key={item.id}>
            <Link
              href={`/notice/${item.id}`}
              className="flex items-center gap-3 px-3 py-2.5 text-[13px] hover:bg-surface-2"
            >
              <span
                className={`shrink-0 rounded-sm px-1.5 py-0.5 text-[11px] font-medium ${BADGE_STYLES[item.category]}`}
              >
                {item.category}
              </span>
              <span className="min-w-0 flex-1 truncate text-foreground">{item.title}</span>
              {item.isNew && (
                <span className="shrink-0 rounded-sm bg-primary px-1 py-0.5 text-[10px] font-bold text-primary-foreground">
                  N
                </span>
              )}
              <span className="shrink-0 font-mono text-[12px] text-muted">{item.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
