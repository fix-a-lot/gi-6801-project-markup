import {siteStats} from '@/lib/mock-data';

export function SidebarSiteStats() {
  return (
    <section
      data-component="사이트통계"
      aria-labelledby="site-stats-heading"
      className="rounded-md border border-border bg-surface p-3"
    >
      <h2 id="site-stats-heading" className="mb-2.5 text-[13px] font-bold text-foreground">
        사이트 통계
      </h2>
      <dl className="grid grid-cols-2 gap-2">
        {siteStats.map(stat => (
          <div key={stat.label} className="rounded-sm bg-surface-2 px-2.5 py-2">
            <dt className="truncate text-[11px] text-muted">{stat.label}</dt>
            <dd className="mt-0.5 font-mono text-[14px] font-bold text-foreground">
              {stat.value}
              {stat.unit && <span className="ml-1 text-[10px] font-normal text-muted">{stat.unit}</span>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
