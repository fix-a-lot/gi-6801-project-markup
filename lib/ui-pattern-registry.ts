import type {ComponentType} from 'react';
import {HeroSearch} from '@/components/hero-search';
import {InfoTabs} from '@/components/info-tabs';
import {ChzzkStreamers} from '@/components/chzzk-streamers';
import {CouponCode} from '@/components/coupon-code';
import {LoawaNotices} from '@/components/loawa-notices';
import {OngoingEvents} from '@/components/ongoing-events';
import {QuickLinks} from '@/components/quick-links';
import {SidebarPopularCharacters} from '@/components/sidebar-popular-characters';
import {SidebarServerStats} from '@/components/sidebar-server-stats';
import {SidebarSiteNotices} from '@/components/sidebar-site-notices';
import {SidebarSiteStats} from '@/components/sidebar-site-stats';
import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/site-header';
import {WeeklySchedule} from '@/components/weekly-schedule';

export type UiPatternEntry = {
  slug: string;
  name: string;
  path: string;
  Component: ComponentType;
};

export const UI_PATTERNS: UiPatternEntry[] = [
  {slug: 'site-header', name: '사이트헤더', path: 'components/site-header.tsx', Component: SiteHeader},
  {slug: 'hero-search', name: '메인검색', path: 'components/hero-search.tsx', Component: HeroSearch},
  {slug: 'quick-links', name: '바로가기', path: 'components/quick-links.tsx', Component: QuickLinks},
  {slug: 'info-tabs', name: '공지탭', path: 'components/info-tabs.tsx', Component: InfoTabs},
  {slug: 'weekly-schedule', name: '주간일정', path: 'components/weekly-schedule.tsx', Component: WeeklySchedule},
  {
    slug: 'sidebar-popular-characters',
    name: '인기캐릭터',
    path: 'components/sidebar-popular-characters.tsx',
    Component: SidebarPopularCharacters
  },
  {
    slug: 'sidebar-server-stats',
    name: '서버통계',
    path: 'components/sidebar-server-stats.tsx',
    Component: SidebarServerStats
  },
  {
    slug: 'sidebar-site-stats',
    name: '사이트통계',
    path: 'components/sidebar-site-stats.tsx',
    Component: SidebarSiteStats
  },
  {
    slug: 'sidebar-site-notices',
    name: '사이트공지',
    path: 'components/sidebar-site-notices.tsx',
    Component: SidebarSiteNotices
  },
  {slug: 'ongoing-events', name: '진행중이벤트', path: 'components/ongoing-events.tsx', Component: OngoingEvents},
  {slug: 'coupon-code', name: '쿠폰코드', path: 'components/coupon-code.tsx', Component: CouponCode},
  {slug: 'chzzk-streamers', name: '치지직스트리머', path: 'components/chzzk-streamers.tsx', Component: ChzzkStreamers},
  {slug: 'loawa-notices', name: '로아와공지', path: 'components/loawa-notices.tsx', Component: LoawaNotices},
  {slug: 'site-footer', name: '푸터', path: 'components/site-footer.tsx', Component: SiteFooter}
];

export function getUiPatternBySlug(slug: string) {
  return UI_PATTERNS.find(entry => entry.slug === slug);
}
