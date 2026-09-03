import {HeroSearch} from '@/components/character-search';
import {InfoTabs} from '@/components/game-notices-tabs';
import {QuickLinks} from '@/components/quick-links';
import {SidebarPopularCharacters} from '@/components/popular-search-characters';
import {SidebarServerStats} from '@/components/server-character-count';
import {SidebarSiteNotices} from '@/components/site-notices';
import {SidebarSiteStats} from '@/components/site-activity';
import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/game-header';
import {WeeklySchedule} from '@/components/weekly-schedule';
import {ChzzkStreamers} from '@/components/chzzk-streamers';
import {CouponCode} from '@/components/coupon-codes';
import {LoawaServerInfo} from '@/components/registered-communities';
import {OngoingEvents} from '@/components/active-events';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <HeroSearch />

      <main className="mx-auto max-w-[1280px] px-4 py-4 lg:px-6 lg:py-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex flex-col gap-4">
            <QuickLinks />
            <OngoingEvents />
            <InfoTabs />
            <WeeklySchedule />
          </div>

          <aside className="flex flex-col gap-4">
            <SidebarPopularCharacters />
            <SidebarServerStats />
            <SidebarSiteStats />
            <SidebarSiteNotices />
          </aside>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)_260px]">
          <div className="flex flex-col gap-4">
            <CouponCode />
          </div>
          <ChzzkStreamers />
          <LoawaServerInfo />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
