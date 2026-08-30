import {notFound} from 'next/navigation';
import Link from 'next/link';
import {UI_PATTERNS} from '@/lib/ui-pattern-registry';

export default function PcStandardUiPatternsPage() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-[1232px] max-w-full">
        <header className="border-b border-border px-6 py-4">
          <nav className="flex flex-wrap gap-1.5" aria-label="UI 패턴 페이지">
            <Link
              href="/dev/ui-patterns/pc-large"
              className="rounded-sm border border-border px-2 py-1 text-[11px] font-medium text-muted hover:text-foreground"
            >
              PC(넓음)
            </Link>
            <Link
              href="/dev/ui-patterns/pc-standard"
              aria-current="page"
              className="rounded-sm bg-primary px-2 py-1 text-[11px] font-medium text-primary-foreground"
            >
              PC(표준)
            </Link>
            <Link
              href="/dev/ui-patterns/mobile"
              className="rounded-sm border border-border px-2 py-1 text-[11px] font-medium text-muted hover:text-foreground"
            >
              모바일
            </Link>
          </nav>
          <h1 className="mt-4 text-lg font-bold text-foreground">UI 패턴 모음 · PC Standard</h1>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">1232px 고정 본문에서 실제 컴포넌트를 확인한다.</p>
        </header>
        <main className="flex items-start gap-6 px-6 py-6">
          <aside className="sticky top-6 hidden w-44 shrink-0 lg:block" aria-label="UI 패턴 목차">
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
          <div className="flex min-w-0 flex-1 flex-col gap-8">
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
          </div>
        </main>
      </div>
    </div>
  );
}
