import Link from "next/link";
import { popularCharacters } from "@/lib/mock-data";

export function SidebarPopularCharacters() {
  return (
    <section
      data-component="인기캐릭터"
      aria-labelledby="popular-characters-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
        <h2 id="popular-characters-heading" className="text-[13px] font-bold text-foreground">
          인기 검색 캐릭터
        </h2>
        <span className="text-[11px] text-muted">TOP 10</span>
      </div>
      <ol className="divide-y divide-border">
        {popularCharacters.map((c) => (
          <li key={c.rank}>
            <Link href={`/character/${encodeURIComponent(c.name)}`} className="flex items-center gap-2.5 px-3 py-2 hover:bg-surface-2">
              <span
                className={`w-4 shrink-0 text-center font-mono text-[12px] font-bold ${
                  c.rank <= 3 ? "text-primary" : "text-muted"
                }`}
              >
                {c.rank}
              </span>
              <span className="min-w-0 flex-1 truncate text-[13px] text-foreground">{c.name}</span>
              <span className="shrink-0 text-[11px] text-muted">{c.className}</span>
              <span className="shrink-0 font-mono text-[12px] text-primary">{c.itemLevel}</span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}
