import {HeroSearch} from '@/components/hero-search';
import {InfoTabs} from '@/components/info-tabs';
import {QuickLinks} from '@/components/quick-links';
import {SidebarPopularCharacters} from '@/components/sidebar-popular-characters';
import {SidebarServerStats} from '@/components/sidebar-server-stats';
import {SidebarSiteNotices} from '@/components/sidebar-site-notices';
import {SidebarSiteStats} from '@/components/sidebar-site-stats';
import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/site-header';
import {WeeklySchedule} from '@/components/weekly-schedule';
import {LoawaHomeAdditions} from '@/components/loawa-home-additions';

export default function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <HeroSearch />

      <main className="mx-auto max-w-[1280px] px-4 py-4 lg:px-6 lg:py-5">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[minmax(0,1fr)_320px]">
          <div className="flex flex-col gap-4">
            <QuickLinks />
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
        <LoawaHomeAdditions />
      </main>

      <SiteFooter />
    </div>
  );
}
