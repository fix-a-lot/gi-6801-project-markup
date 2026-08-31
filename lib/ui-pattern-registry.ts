import type {ComponentType} from 'react';
import {HeroSearch} from '@/components/character-search';
import {InfoTabs} from '@/components/game-notices-tabs';
import {ChzzkStreamers} from '@/components/chzzk-streamers';
import {CouponCode} from '@/components/coupon-codes';
import {LoawaServerInfo} from '@/components/registered-communities';
import {OngoingEvents} from '@/components/active-events';
import {QuickLinks} from '@/components/quick-links';
import {SidebarPopularCharacters} from '@/components/popular-search-characters';
import {SidebarServerStats} from '@/components/server-character-count';
import {SidebarSiteNotices} from '@/components/site-notices';
import {SidebarSiteStats} from '@/components/site-activity';
import {SiteFooter} from '@/components/site-footer';
import {SiteHeader} from '@/components/game-header';
import {WeeklySchedule} from '@/components/weekly-schedule';

export type UiPatternEntry = {
  slug: string;
  name: string;
  path: string;
  Component: ComponentType;
};

export const UI_PATTERNS: UiPatternEntry[] = [
  {slug: 'game-header', name: '게임헤더', path: 'components/game-header.tsx', Component: SiteHeader},
  {slug: 'character-search', name: '캐릭터검색', path: 'components/character-search.tsx', Component: HeroSearch},
  {slug: 'quick-links', name: '퀵링크', path: 'components/quick-links.tsx', Component: QuickLinks},
  {slug: 'game-notices-tabs', name: '게임공지탭', path: 'components/game-notices-tabs.tsx', Component: InfoTabs},
  {slug: 'weekly-schedule', name: '주간일정', path: 'components/weekly-schedule.tsx', Component: WeeklySchedule},
  {
    slug: 'popular-search-characters',
    name: '인기검색캐릭터',
    path: 'components/popular-search-characters.tsx',
    Component: SidebarPopularCharacters
  },
  {
    slug: 'server-character-count',
    name: '서버별캐릭터수',
    path: 'components/server-character-count.tsx',
    Component: SidebarServerStats
  },
  {
    slug: 'site-activity',
    name: '사이트활동',
    path: 'components/site-activity.tsx',
    Component: SidebarSiteStats
  },
  {
    slug: 'site-notices',
    name: '사이트공지',
    path: 'components/site-notices.tsx',
    Component: SidebarSiteNotices
  },
  {slug: 'active-events', name: '진행중인이벤트', path: 'components/active-events.tsx', Component: OngoingEvents},
  {slug: 'coupon-codes', name: '쿠폰코드', path: 'components/coupon-codes.tsx', Component: CouponCode},
  {slug: 'chzzk-streamers', name: '치지직스트리머', path: 'components/chzzk-streamers.tsx', Component: ChzzkStreamers},
  {
    slug: 'registered-communities',
    name: '등록된커뮤니티정보',
    path: 'components/registered-communities.tsx',
    Component: LoawaServerInfo
  },
  {slug: 'site-footer', name: '푸터', path: 'components/site-footer.tsx', Component: SiteFooter}
];

export function getUiPatternBySlug(slug: string) {
  return UI_PATTERNS.find(entry => entry.slug === slug);
}
