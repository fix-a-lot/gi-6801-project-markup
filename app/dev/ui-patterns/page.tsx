import {notFound} from 'next/navigation';
import {UiPatternViewportPreview} from '@/components/dev/ui-pattern-viewport-preview';
import {UI_PATTERNS} from '@/lib/ui-pattern-registry';

const VIEWPORTS = [
  {key: 'pc-large', label: 'PC Large', width: 1440},
  {key: 'pc-standard', label: 'PC Standard', width: 1280},
  {key: 'mobile', label: 'Mobile', width: 375}
] as const;

export default function UiPatternsPage() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border px-4 py-4 lg:px-6">
        <h1 className="text-lg font-bold text-foreground">UI 패턴 모음</h1>
        <p className="mt-1 text-[13px] text-muted">
          웹 서비스에서 자주 쓰이는 작은 UI 패턴 모음 페이지입니다. (development only)
        </p>
      </header>

      <main className="mx-auto flex max-w-[1280px] flex-col gap-8 px-4 py-6 lg:px-6">
        {UI_PATTERNS.map(entry => (
          <section key={entry.slug} className="flex flex-col gap-3">
            <div>
              <h2 className="text-[14px] font-bold text-foreground">{entry.name}</h2>
              <p className="font-mono text-[11px] text-muted">/{entry.path}</p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {VIEWPORTS.map(viewport => (
                <UiPatternViewportPreview
                  key={viewport.key}
                  slug={entry.slug}
                  label={viewport.label}
                  deviceWidth={viewport.width}
                />
              ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
