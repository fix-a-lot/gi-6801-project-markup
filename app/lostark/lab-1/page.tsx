import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/game-header';
import {
  ClassSettingStats,
  FieldContentCountdown,
  GuildSearchRanking,
  MultiSearchCompare,
  TopRankingBoard,
  TravelingMerchantBoard
} from '@/components/lab-discovery-panels';

export default function Lab1Page() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <main className="mx-auto flex max-w-[1280px] flex-col gap-6 px-4 py-4 lg:px-6 lg:py-5">
        <div>
          <h1 className="text-lg font-bold text-foreground">실험실1 · 랭킹 · 탐색</h1>
          <p className="mt-1 text-[12px] text-muted">
            경쟁 사이트에서 확인된 랭킹 · 검색 · 실시간 정보 유형의 컴포넌트를 카테고리별로 모아봤어요.
          </p>
        </div>

        <section className="flex flex-col gap-3">
          <h2 className="text-[13px] font-bold text-muted">랭킹 · 비교</h2>
          <div className="flex flex-col gap-4">
            <TopRankingBoard />
            <MultiSearchCompare />
            <GuildSearchRanking />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[13px] font-bold text-muted">세팅 · 통계</h2>
          <ClassSettingStats />
        </section>

        <section className="flex flex-col gap-3">
          <h2 className="text-[13px] font-bold text-muted">실시간 정보</h2>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <TravelingMerchantBoard />
            <FieldContentCountdown />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
