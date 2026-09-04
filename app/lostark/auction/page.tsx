import {SiteHeader} from '@/components/game-header';
import {SiteFooter} from '@/components/site-footer';
import {AuctionBoard} from '@/components/auction-board';

export default function AuctionPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto max-w-[1280px] px-4 py-4 lg:px-6 lg:py-5">
        <div className="mb-4">
          <h1 className="text-[19px] font-bold tracking-tight text-foreground">경매장</h1>
          <p className="mt-1 text-[13px] text-muted">
            장비, 악세서리, 보석 등 아르케시아 경매장의 등록 매물을 살펴보세요
          </p>
        </div>

        <AuctionBoard />
      </main>

      <SiteFooter />
    </div>
  );
}
