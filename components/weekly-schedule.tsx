'use client';

import {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type {ScheduleCategory} from '@/lib/mock-data';
import {weeklySchedule} from '@/lib/mock-data';

const CATEGORY_COLOR: Record<ScheduleCategory, string> = {
  모험섬: 'text-primary',
  필드보스: 'text-fall',
  항해: 'text-secondary',
  카오스던전: 'text-muted',
  가디언토벌: 'text-fall'
};

export function WeeklySchedule() {
  const todayIndex = weeklySchedule.findIndex(d => d.isToday);
  const [activeDay, setActiveDay] = useState(todayIndex >= 0 ? todayIndex : 0);
  const selected = weeklySchedule[activeDay];

  return (
    <section
      data-component="주간일정"
      aria-labelledby="schedule-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
        <h2 id="schedule-heading" className="text-[13px] font-bold text-foreground">
          주간 게임 일정
        </h2>
        <Link href="/schedule" className="text-[12px] text-muted hover:text-foreground">
          전체 일정
        </Link>
      </div>

      <div
        role="tablist"
        aria-label="요일 선택"
        className="no-scrollbar flex gap-1 overflow-x-auto border-b border-border px-3 py-2"
      >
        {weeklySchedule.map((d, i) => (
          <button
            key={d.date}
            type="button"
            role="tab"
            aria-selected={activeDay === i}
            onClick={() => setActiveDay(i)}
            className={`flex shrink-0 flex-col items-center rounded-sm px-3 py-1.5 text-center transition-colors ${
              activeDay === i
                ? 'bg-primary text-primary-foreground'
                : 'text-muted hover:bg-surface-2 hover:text-foreground'
            }`}
          >
            <span className="text-[12px] font-bold">{d.day}</span>
            <span className="font-mono text-[10px] opacity-80">{d.date}</span>
          </button>
        ))}
      </div>

      <ul className="no-scrollbar flex gap-2 overflow-x-auto px-3 py-3">
        {selected.events.map(event => (
          <li
            key={event.id}
            className="flex w-48 shrink-0 flex-col gap-2 rounded-sm border border-border bg-surface-2 p-3"
          >
            <div className="flex items-center gap-1.5">
              <Image
                src={event.iconUrl}
                alt=""
                width={16}
                height={16}
                className="h-4 w-4 shrink-0 rounded-[3px] object-cover"
              />
              <span className={`text-[11px] font-medium ${CATEGORY_COLOR[event.category]}`}>{event.category}</span>
            </div>
            <p className="truncate text-[13px] font-medium text-foreground">{event.name}</p>
            <div className="flex items-center justify-between text-[11px] text-muted">
              <span className="font-mono">{event.time}</span>
              {event.server && <span>{event.server}</span>}
            </div>
            {event.note && <p className="truncate text-[11px] text-muted">{event.note}</p>}
          </li>
        ))}
      </ul>
    </section>
  );
}
