import Link from 'next/link';
import {SITE_NAME} from '@/lib/site-config';

export function SiteFooter() {
  return (
    <footer data-component="푸터" className="border-t border-border">
      <div className="mx-auto max-w-[1280px] px-4 py-6 lg:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-5 w-5 items-center justify-center rounded-sm bg-primary text-[10px] font-bold text-primary-foreground font-mono">
                L
              </span>
              <span className="text-[13px] font-bold text-foreground">{SITE_NAME}</span>
            </div>
            {process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production' && (
              <nav className="relative flex items-center gap-1" aria-label="UI 패턴 페이지">
                <Link
                  href="/dev/ui-patterns/pc-large"
                  className="rounded-sm border border-border px-2 py-1 text-[11px] text-muted hover:border-primary/60 hover:text-foreground"
                >
                  PC(넓음)
                </Link>
                <Link
                  href="/dev/ui-patterns/pc-standard"
                  className="rounded-sm border border-border px-2 py-1 text-[11px] text-muted hover:border-primary/60 hover:text-foreground"
                >
                  PC(표준)
                </Link>
                <Link
                  href="/dev/ui-patterns/mobile"
                  className="rounded-sm border border-border px-2 py-1 text-[11px] text-muted hover:border-primary/60 hover:text-foreground"
                >
                  모바일
                </Link>
              </nav>
            )}
          </div>
          <nav className="flex gap-4 text-[12px] text-muted">
            <Link href="/about" className="hover:text-foreground">
              사이트 소개
            </Link>
            <Link href="/notice" className="hover:text-foreground">
              공지사항
            </Link>
            <Link href="/contact" className="hover:text-foreground">
              문의하기
            </Link>
            <Link href="/terms" className="hover:text-foreground">
              이용약관
            </Link>
          </nav>
        </div>
        <p className="mt-4 text-[11px] leading-relaxed text-muted">
          {SITE_NAME}는 Lost Ark Open API 및 자체 수집 데이터를 기반으로 제공되는 비공식 정보 서비스이며, 스마일게이트
          RPG와 무관합니다. 게임 내 데이터는 실제와 차이가 있을 수 있습니다.
        </p>
        <p className="mt-1 text-[11px] text-muted">© 2026 {SITE_NAME}. All rights reserved.</p>
      </div>
    </footer>
  );
}
