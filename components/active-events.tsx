import {CalendarDays} from 'lucide-react';

const events = [
  {title: '아크-베이스', date: '8.19 ~ 10.28', tone: 'bg-primary/20'},
  {title: '뿔가르던 정복전', date: '8.5 ~ 9.16', tone: 'bg-secondary/20'},
  {title: '네리아의 드레스룸 with 로아', date: '7.22 ~ 9.2', tone: 'bg-fall/20'},
  {title: '던 월드 이벤트', date: '7.8 ~ 9.2', tone: 'bg-primary/15'},
  {title: '차월술사 UPDATE', date: '7.8 ~ 10.14', tone: 'bg-secondary/15'}
];

export function OngoingEvents() {
  return (
    <section data-component="진행중인이벤트" className="rounded-md border border-border bg-surface">
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
        <CalendarDays className="size-4 text-primary" aria-hidden="true" />
        <h2 className="text-[13px] font-bold text-foreground">진행중인 이벤트</h2>
      </div>
      <ul className="flex flex-col">
        {events.map(event => (
          <li key={event.title} className="flex items-center gap-2 border-b border-border px-3 py-2 last:border-b-0">
            <span
              className={`flex size-8 shrink-0 items-center justify-center rounded-sm text-[10px] font-bold text-foreground ${event.tone}`}
            >
              EVENT
            </span>
            <div className="min-w-0">
              <p className="truncate text-[12px] font-medium text-foreground">{event.title}</p>
              <p className="font-mono text-[11px] text-muted">{event.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default OngoingEvents;
