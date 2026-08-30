"use client";

import { useState } from "react";
import Link from "next/link";
import { Compass, Flag, Ship, Skull, Swords } from "lucide-react";
import type { ScheduleCategory } from "@/lib/mock-data";
import { weeklySchedule } from "@/lib/mock-data";

const CATEGORY_ICON: Record<ScheduleCategory, typeof Compass> = {
  모험섬: Compass,
  필드보스: Flag,
  항해: Ship,
  카오스던전: Swords,
  가디언토벌: Skull,
};

const CATEGORY_COLOR: Record<ScheduleCategory, string> = {
  모험섬: "text-primary",
  필드보스: "text-fall",
  항해: "text-secondary",
  카오스던전: "text-muted",
  가디언토벌: "text-fall",
};

export function WeeklySchedule() {
  const todayIndex = weeklySchedule.findIndex((d) => d.isToday);
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
              activeDay === i ? "bg-primary text-primary-foreground" : "text-muted hover:bg-surface-2 hover:text-foreground"
            }`}
          >
            <span className="text-[12px] font-bold">{d.day}</span>
            <span className="font-mono text-[10px] opacity-80">{d.date}</span>
          </button>
        ))}
      </div>

      <ul className="no-scrollbar flex gap-2 overflow-x-auto px-3 py-3">
        {selected.events.map((event) => {
          const Icon = CATEGORY_ICON[event.category];
          return (
            <li
              key={event.id}
              className="flex w-48 shrink-0 flex-col gap-2 rounded-sm border border-border bg-surface-2 p-3"
            >
              <div className="flex items-center gap-1.5">
                <Icon className={`h-3.5 w-3.5 shrink-0 ${CATEGORY_COLOR[event.category]}`} aria-hidden="true" />
                <span className={`text-[11px] font-medium ${CATEGORY_COLOR[event.category]}`}>{event.category}</span>
              </div>
              <p className="truncate text-[13px] font-medium text-foreground">{event.name}</p>
              <div className="flex items-center justify-between text-[11px] text-muted">
                <span className="font-mono">{event.time}</span>
                {event.server && <span>{event.server}</span>}
              </div>
              {event.note && <p className="truncate text-[11px] text-muted">{event.note}</p>}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
