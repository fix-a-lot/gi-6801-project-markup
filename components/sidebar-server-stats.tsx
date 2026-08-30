import {serverStats} from '@/lib/mock-data';

export function SidebarServerStats() {
  const max = Math.max(...serverStats.map(s => s.characterCount));

  return (
    <section
      data-component="서버통계"
      aria-labelledby="server-stats-heading"
      className="rounded-md border border-border bg-surface p-3"
    >
      <h2 id="server-stats-heading" className="mb-2.5 text-[13px] font-bold text-foreground">
        서버별 캐릭터 수
      </h2>
      <ul className="flex flex-col gap-2">
        {serverStats.map(s => (
          <li key={s.server} className="flex items-center gap-2">
            <span className="w-14 shrink-0 text-[12px] text-muted">{s.server}</span>
            <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-primary"
                style={{width: `${(s.characterCount / max) * 100}%`}}
              />
            </span>
            <span className="w-16 shrink-0 text-right font-mono text-[11px] text-muted">
              {s.characterCount.toLocaleString('ko-KR')}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
