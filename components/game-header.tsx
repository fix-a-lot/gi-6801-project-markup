'use client';

import {useState} from 'react';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import {Menu, Search, Settings, X} from 'lucide-react';
import {SITE_NAME} from '@/lib/site-config';

const NAV_ITEMS = [
  {label: '홈', href: '/'},
  {label: '캐릭터', href: '/character'},
  {label: '랭킹', href: '/ranking'},
  {label: '통계', href: '/stats'},
  {label: '시세', href: '/market'},
  {label: '도구', href: '/tools'}
];

// next.config.ts가 "/" → "/lostark"로 임시 리다이렉트하는 동안
// 홈 네비게이션 항목은 두 경로 모두를 활성 상태로 인식해야 함.
function isNavItemActive(pathname: string | null, href: string) {
  if (href === '/') return pathname === '/' || pathname === '/lostark';
  return pathname === href;
}

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      data-component="게임헤더"
      className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur"
    >
      <div className="relative mx-auto flex h-14 max-w-[1280px] items-center gap-4 px-4 lg:px-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex h-6 w-6 items-center justify-center rounded-sm bg-primary text-[11px] font-bold text-primary-foreground font-mono">
            L
          </span>
          <span className="text-[15px] font-bold tracking-tight text-foreground">{SITE_NAME}</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map(item => {
            const isActive = isNavItemActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-sm px-3 py-1.5 text-[13px] font-medium transition-colors ${
                  isActive ? 'text-foreground bg-surface-2' : 'text-muted hover:bg-surface-2 hover:text-foreground'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex flex-1 items-center justify-end gap-2 lg:flex-none">
          <div className="hidden w-56 items-center gap-2 rounded-sm border border-border bg-surface px-2.5 py-1.5 text-muted transition-colors focus-within:border-primary/60 md:flex">
            <Search className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <input
              type="text"
              placeholder="캐릭터명 검색"
              className="w-full bg-transparent text-[13px] text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>

          <button
            type="button"
            aria-label="설정"
            className="hidden h-8 w-8 items-center justify-center rounded-sm text-muted hover:bg-surface-2 hover:text-foreground lg:flex"
          >
            <Settings className="h-4 w-4" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label={mobileOpen ? '메뉴 닫기' : '메뉴 열기'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(v => !v)}
            className="flex h-8 w-8 items-center justify-center rounded-sm text-foreground hover:bg-surface-2 lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background px-4 py-3 lg:hidden">
          <div className="mb-3 flex items-center gap-2 rounded-sm border border-border bg-surface px-2.5 py-2 text-muted">
            <Search className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <input
              type="text"
              placeholder="캐릭터명 검색"
              className="w-full bg-transparent text-[13px] text-foreground placeholder:text-muted focus:outline-none"
            />
          </div>
          <nav className="flex flex-col gap-0.5">
            {NAV_ITEMS.map(item => {
              const isActive = isNavItemActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`rounded-sm px-3 py-2 text-[13px] font-medium ${
                    isActive ? 'bg-surface-2 text-foreground' : 'text-muted hover:bg-surface-2 hover:text-foreground'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
