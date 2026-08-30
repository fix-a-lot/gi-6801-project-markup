import Link from "next/link";
import { siteAnnouncements } from "@/lib/mock-data";

export function SidebarSiteNotices() {
  return (
    <section
      data-component="사이트공지"
      aria-labelledby="site-notices-heading"
      className="rounded-md border border-border bg-surface p-3"
    >
      <h2 id="site-notices-heading" className="mb-2 text-[13px] font-bold text-foreground">
        ARKDEX 공지
      </h2>
      <ul className="flex flex-col gap-1.5">
        {siteAnnouncements.map((notice) => (
          <li key={notice.id}>
            <Link
              href={`/notice/site/${notice.id}`}
              className="flex items-center gap-2 py-0.5 text-[12px] text-muted hover:text-foreground"
            >
              <span className="truncate">{notice.title}</span>
              <span className="ml-auto shrink-0 font-mono text-[11px]">{notice.date}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
