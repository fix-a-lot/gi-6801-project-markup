import {notFound} from 'next/navigation';
import Link from 'next/link';
import {UI_PATTERNS} from '@/lib/ui-pattern-registry';

export default function MobileUiPatternsPage() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') notFound();

  return (
    <div className="min-h-screen bg-background">
      <aside className="fixed left-[calc(50%-342px)] top-6 hidden w-44 lg:block" aria-label="UI 패턴 목차">
        <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-muted">목차</p>
        <nav className="flex flex-col gap-1 border-l border-border pl-3">
          {UI_PATTERNS.map(({slug, name}) => (
            <a
              key={slug}
              href={`#${slug}`}
              className="truncate py-1 text-[12px] text-muted transition-colors hover:text-foreground"
            >
              {name}
            </a>
          ))}
        </nav>
      </aside>
      <div className="mx-auto w-[375px] max-w-full">
        <header className="border-b border-border px-4 py-4">
          <nav className="flex flex-wrap gap-1.5" aria-label="UI 패턴 페이지">
            <Link
              href="/dev/ui-patterns/pc-large"
              className="rounded-sm border border-border px-2 py-1 text-[11px] font-medium text-muted hover:text-foreground"
            >
              PC(넓음)
            </Link>
            <Link
              href="/dev/ui-patterns/pc-standard"
              className="rounded-sm border border-border px-2 py-1 text-[11px] font-medium text-muted hover:text-foreground"
            >
              PC(표준)
            </Link>
            <Link
              href="/dev/ui-patterns/mobile"
              aria-current="page"
              className="rounded-sm bg-primary px-2 py-1 text-[11px] font-medium text-primary-foreground"
            >
              모바일
            </Link>
          </nav>
          <h1 className="mt-4 text-lg font-bold text-foreground">UI 패턴 모음 · Mobile</h1>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">375px 고정 본문에서 실제 컴포넌트를 확인한다.</p>
        </header>

        <main className="flex flex-col gap-8 px-4 py-6">
          {UI_PATTERNS.map(({slug, name, path, Component}) => (
            <section id={slug} key={slug} data-component="UI패턴항목" className="flex scroll-mt-6 flex-col gap-3">
              <div>
                <h2 className="text-[14px] font-bold text-foreground">{name}</h2>
                <p className="font-mono text-[14px] text-muted">{path.split('/').pop()}</p>
              </div>
              <div className="min-w-0 overflow-hidden rounded-sm border border-border bg-background p-3">
                <Component />
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}
