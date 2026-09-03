'use client';

import {useRef} from 'react';
import {CalendarDays, ChevronLeft, ChevronRight} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const SCROLL_AMOUNT = 232; // 카드 너비(224px) + gap(8px) 만큼 한 번에 스크롤

const events = [
  {title: '벨가르딘 정복전', date: '8.5 ~ 9.16', image: '/images/events/belgardin-conquest.jpg'},
  {title: '모코코 베이스 캠프', date: '6.24 ~ 10.14', image: '/images/events/mokoko-base-camp.jpg'},
  {title: '마하라카 썸머 캠프', date: '6.24 ~ 10.14', image: '/images/events/maharaka-summer-camp.jpg'},
  {title: '로스트아크 치지직 DROPS 이벤트', date: '8.5 ~ 9.6', image: '/images/events/chzzk-drops.jpg'},
  {title: '2026 썸머 PC방 PARTY TIME', date: '6.24 ~ 9.9', image: '/images/events/pc-room-party-time.jpg'}
];

export function OngoingEvents() {
  const listRef = useRef<HTMLUListElement>(null);

  function scrollByAmount(direction: 'left' | 'right') {
    listRef.current?.scrollBy({left: direction === 'left' ? -SCROLL_AMOUNT : SCROLL_AMOUNT, behavior: 'smooth'});
  }

  return (
    <section data-component="진행중인이벤트" className="rounded-md border border-border bg-surface">
      <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
        <div className="flex items-center gap-2">
          <CalendarDays className="size-4 text-primary" aria-hidden="true" />
          <h2 className="text-[13px] font-bold text-foreground">진행중인 이벤트</h2>
        </div>
        <Link href="/notice?tab=이벤트" className="text-[12px] text-muted hover:text-foreground">
          더보기
        </Link>
      </div>
      <div className="group relative">
        <ul ref={listRef} className="no-scrollbar flex gap-2 overflow-x-auto scroll-smooth p-3">
          {events.map(event => (
            <li key={event.title} className="w-56 shrink-0">
              <Link href="#" className="group block overflow-hidden rounded-sm border border-border bg-surface-2">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    sizes="224px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="px-2 py-1.5">
                  <p className="truncate text-[12px] font-medium text-foreground">{event.title}</p>
                  <p className="font-mono text-[11px] text-muted">{event.date}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label="이전 이벤트 보기"
          onClick={() => scrollByAmount('left')}
          className="absolute left-1 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-surface/90 p-1 text-foreground opacity-0 shadow-sm transition-opacity hover:bg-surface-2 group-hover:opacity-100 sm:block"
        >
          <ChevronLeft className="size-4" aria-hidden="true" />
        </button>
        <button
          type="button"
          aria-label="다음 이벤트 보기"
          onClick={() => scrollByAmount('right')}
          className="absolute right-1 top-1/2 hidden -translate-y-1/2 rounded-full border border-border bg-surface/90 p-1 text-foreground opacity-0 shadow-sm transition-opacity hover:bg-surface-2 group-hover:opacity-100 sm:block"
        >
          <ChevronRight className="size-4" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}

export default OngoingEvents;
