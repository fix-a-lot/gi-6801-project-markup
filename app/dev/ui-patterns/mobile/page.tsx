import {notFound} from 'next/navigation';
import Link from 'next/link';
import {UI_PATTERNS} from '@/lib/ui-pattern-registry';

export default function MobileUiPatternsPage() {
  if (process.env.NEXT_PUBLIC_VERCEL_ENV === 'production') notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-[375px] max-w-full">
        <header className="border-b border-border px-4 py-4">
          <nav className="flex flex-wrap gap-1.5" aria-label="UI 패턴 페이지">
            <Link href="/dev/ui-patterns/mobile" aria-current="page" className="rounded-sm bg-primary px-2 py-1 text-[11px] font-medium text-primary-foreground">
              UI 패턴(모바일)
            </Link>
            <Link href="/dev/ui-patterns/pc-standard" className="rounded-sm border border-border px-2 py-1 text-[11px] font-medium text-muted hover:text-foreground">
              PC 표준
            </Link>
            <Link href="/dev/ui-patterns/pc-large" className="rounded-sm border border-border px-2 py-1 text-[11px] font-medium text-muted hover:text-foreground">
              PC 넓음
            </Link>
          </nav>
          <h1 className="mt-4 text-lg font-bold text-foreground">UI 패턴 모음 · Mobile</h1>
          <p className="mt-1 text-[13px] leading-relaxed text-muted">375px 고정 본문에서 실제 컴포넌트를 확인한다.</p>
        </header>

        <main className="flex flex-col gap-8 px-4 py-6">
          {UI_PATTERNS.map(({slug, name, path, Component}) => (
            <section key={slug} data-component="UI패턴항목" className="flex flex-col gap-3">
              <div>
                <h2 className="text-[14px] font-bold text-foreground">{name}</h2>
                <p className="font-mono text-[11px] text-muted">/{path}</p>
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
