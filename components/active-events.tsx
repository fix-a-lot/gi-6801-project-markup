import {CalendarDays} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const events = [
  {title: '아크-베이스', date: '8.19 ~ 10.28', image: '/images/events/arc-base.png'},
  {title: '뿔가르던 정복전', date: '8.5 ~ 9.16', image: '/images/events/horn-garden-conquest.png'},
  {title: '네리아의 드레스룸 with 로아', date: '7.22 ~ 9.2', image: '/images/events/neria-dressroom.png'},
  {title: '던 월드 이벤트', date: '7.8 ~ 9.2', image: '/images/events/dawn-world-event.png'},
  {title: '차월술사 UPDATE', date: '7.8 ~ 10.14', image: '/images/events/moon-mage-update.png'}
];

export function OngoingEvents() {
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
      <ul className="no-scrollbar flex gap-2 overflow-x-auto p-3">
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
    </section>
  );
}

export default OngoingEvents;
