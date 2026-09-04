import {SiteHeader} from '@/components/game-header';
import {SiteFooter} from '@/components/site-footer';
import {MarketBoard} from '@/components/market-board';

export default function MarketPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-[1280px] px-4 py-4 lg:px-6 lg:py-5">
        <div className="mb-4">
          <h1 className="text-[19px] font-bold tracking-tight text-foreground">시세</h1>
          <p className="mt-1 text-[13px] text-muted">재련 재료, 각인서, 보석의 실시간 거래소 시세를 확인하세요</p>
        </div>

        <MarketBoard />
      </main>

      <SiteFooter />
    </div>
  );
}
