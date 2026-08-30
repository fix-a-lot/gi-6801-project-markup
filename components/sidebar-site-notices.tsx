'use client';

import {useState} from 'react';
import {Bell, X} from 'lucide-react';
import {siteAnnouncements} from '@/lib/mock-data';
import {SITE_NAME} from '@/lib/site-config';

const announcementDetails: Record<string, string[]> = {
  sa1: ['안녕하세요. Project L-6801 운영팀입니다.', '서비스 안정성과 검색 성능을 개선하기 위해 시세 정보 갱신 주기를 기존보다 30분 단축했습니다.', '보다 정확한 정보를 제공할 수 있도록 계속해서 서비스를 개선하겠습니다.'],
  sa2: ['안녕하세요. Project L-6801 운영팀입니다.', '캐릭터 검색 서버 증설 작업이 완료되었습니다. 이제 더 안정적으로 캐릭터 정보를 확인할 수 있습니다.', '이용 중 불편한 점이 있다면 언제든지 의견을 남겨주세요.'],
  sa3: ['안녕하세요. Project L-6801 운영팀입니다.', '통계 페이지의 화면 구성을 새롭게 개편할 예정입니다.', '더 편리한 정보 탐색을 위해 노력하겠습니다.']
};

export function SidebarSiteNotices() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selectedNotice = siteAnnouncements.find(notice => notice.id === selectedId);

  return (
    <>
      <section data-component="사이트공지" aria-labelledby="site-notices-heading" className="rounded-md border border-border bg-surface p-3">
        <h2 id="site-notices-heading" className="mb-2 flex items-center gap-2 text-[13px] font-bold text-foreground">
          <Bell aria-hidden="true" className="size-3.5 text-primary" />
          {SITE_NAME} 공지
        </h2>
        <ul className="flex flex-col gap-1.5">
          {siteAnnouncements.map(notice => (
            <li key={notice.id}>
              <button type="button" onClick={() => setSelectedId(notice.id)} className="flex w-full items-center gap-2 py-0.5 text-left text-[12px] text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                <span className="truncate">{notice.title}</span>
                <span className="ml-auto shrink-0 font-mono text-[11px]">{notice.date}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      {selectedNotice && (
        <div data-component="공지팝업" role="presentation" className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 px-4 backdrop-blur-[1px]" onMouseDown={event => event.target === event.currentTarget && setSelectedId(null)}>
          <article role="dialog" aria-modal="true" aria-labelledby="notice-dialog-title" className="w-full max-w-lg overflow-hidden rounded-md border border-border bg-surface shadow-2xl">
            <header className="flex items-start justify-between gap-4 border-b border-border px-4 py-3">
              <div className="min-w-0">
                <h3 id="notice-dialog-title" className="text-[15px] font-bold text-foreground">{selectedNotice.title}</h3>
                <p className="mt-1 text-[11px] text-muted">{selectedNotice.date}</p>
              </div>
              <button type="button" aria-label="공지 닫기" onClick={() => setSelectedId(null)} className="shrink-0 rounded-sm p-1 text-muted hover:bg-muted/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary">
                <X aria-hidden="true" className="size-4" />
              </button>
            </header>
            <div className="flex flex-col gap-5 px-4 py-5 text-[13px] font-medium leading-6 text-foreground">
              {(announcementDetails[selectedNotice.id] ?? ['공지 내용을 준비 중입니다.']).map((paragraph, index) => <p key={index}>{paragraph}</p>)}
            </div>
          </article>
        </div>
      )}
    </>
  );
}
