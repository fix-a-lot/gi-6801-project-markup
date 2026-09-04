import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/game-header';
import {
  AuctionFeeCalculator,
  BraceletEfficiencyCalculator,
  DamageSimulator,
  DpsTierList,
  PriceTrendChart,
  RefinementCalculator
} from '@/components/lab-tool-panels';

export default function Lab2Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-4 lg:px-6 lg:py-5">
        <div>
          <h1 className="text-lg font-bold text-foreground">실험실2 · 계산기 · 시뮬레이션</h1>
          <p className="mt-1 text-[12px] text-muted">
            경쟁 사이트에서 확인된 계산 · 시뮬레이션 유형의 도구 컴포넌트를 카테고리별로 모아봤어요.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-[13px] font-bold text-muted">재화 계산</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <RefinementCalculator />
            <AuctionFeeCalculator />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[13px] font-bold text-muted">세팅 · 티어 분석</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <BraceletEfficiencyCalculator />
            <DpsTierList />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[13px] font-bold text-muted">시뮬레이터</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <DamageSimulator />
            <PriceTrendChart />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
