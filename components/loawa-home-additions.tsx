import {CalendarDays, Clapperboard, Copy, Megaphone, Server, Ticket} from 'lucide-react';

const events = [
  {title: '아크-베이스', date: '8.19 ~ 10.28', tone: 'bg-primary/20'},
  {title: '뿔가르던 정복전', date: '8.5 ~ 9.16', tone: 'bg-secondary/20'},
  {title: '네리아의 드레스룸 with 로아', date: '7.22 ~ 9.2', tone: 'bg-fall/20'},
  {title: '던 월드 이벤트', date: '7.8 ~ 9.2', tone: 'bg-primary/15'},
  {title: '차월술사 UPDATE', date: '7.8 ~ 10.14', tone: 'bg-secondary/15'}
];

const streamers = ['이다', '쫀지', '도읍지', '세코코', '노가루루', '로마러', '김상드', '주제', '방토라', '리니링', '망플이', '숩아'];
const serverStats = [
  ['등록된 길드', '106,445개'],
  ['등록된 원정대', '713,901개'],
  ['등록된 캐릭터', '4,857,679명'],
  ['니나브', '511,720'],
  ['루페온', '803,963'],
  ['실리안', '582,241'],
  ['아만', '585,796'],
  ['아브렐슈드', '604,574'],
  ['카단', '596,731']
];

function SectionTitle({icon: Icon, children}: {icon: typeof Megaphone; children: React.ReactNode}) {
  return (
    <div className="flex items-center gap-2 border-b border-border px-3 py-2.5">
      <Icon className="size-4 text-primary" aria-hidden="true" />
      <h2 className="text-[13px] font-bold text-foreground">{children}</h2>
    </div>
  );
}

export function LoawaHomeAdditions() {
  return (
    <section data-component="로아와추가영역" className="mt-4 grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)_260px]">
      <div className="flex flex-col gap-4">
        <section data-component="진행중이벤트" className="rounded-md border border-border bg-surface">
          <SectionTitle icon={CalendarDays}>진행중인 이벤트</SectionTitle>
          <ul className="flex flex-col">
            {events.map(event => (
              <li key={event.title} className="flex items-center gap-2 border-b border-border px-3 py-2 last:border-b-0">
                <span className={`flex size-8 shrink-0 items-center justify-center rounded-sm text-[10px] font-bold text-foreground ${event.tone}`}>EVENT</span>
                <div className="min-w-0">
                  <p className="truncate text-[12px] font-medium text-foreground">{event.title}</p>
                  <p className="font-mono text-[11px] text-muted">{event.date}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
        <section data-component="쿠폰코드" className="rounded-md border border-border bg-surface">
          <SectionTitle icon={Ticket}>쿠폰코드</SectionTitle>
          <div className="flex flex-col gap-2 p-3">
            <p className="text-[12px] font-bold text-foreground">2026 LOAON SUMMER 쿠폰코드</p>
            <div className="flex items-center justify-between rounded-sm bg-surface-2 px-2 py-1.5 font-mono text-[11px] text-muted">
              <span>2026로아온썸머감사선물</span><Copy className="size-3.5" aria-label="쿠폰 복사" />
            </div>
            <div className="flex items-center justify-between text-[11px] text-muted"><span>2026.09.16 05:59</span><span className="rounded-sm bg-primary/15 px-1.5 py-1 text-primary">D-17</span></div>
          </div>
        </section>
      </div>

      <section data-component="치지직스트리머" className="rounded-md border border-border bg-surface">
        <SectionTitle icon={Clapperboard}>치지직 스트리머</SectionTitle>
        <div className="grid grid-cols-2 gap-2 p-3 sm:grid-cols-3">
          {streamers.map(streamer => (
            <div key={streamer} className="flex min-h-20 flex-col justify-between rounded-sm border border-border bg-surface-2 p-2">
              <span className="w-fit rounded-sm bg-fall px-1 py-0.5 text-[9px] font-bold text-primary-foreground">LIVE</span>
              <p className="truncate text-[12px] font-medium text-foreground">{streamer}</p>
              <p className="text-[10px] text-muted">Lost Ark 방송 중</p>
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-col gap-4">
        <section data-component="로아와공지" className="rounded-md border border-border bg-surface">
          <SectionTitle icon={Megaphone}>로아와 공지</SectionTitle>
          <ul className="flex flex-col gap-2 p-3 text-[12px] text-muted"><li className="flex justify-between gap-2"><span>도표, 사진첩, 칭호 이관 작업 진행중</span><span className="shrink-0 font-mono text-[10px]">5개월 전</span></li><li className="flex justify-between gap-2"><span>리뉴얼 로아와 테스트 오픈</span><span className="shrink-0 font-mono text-[10px]">6개월 전</span></li></ul>
        </section>
        <section data-component="로아와서버정보" className="rounded-md border border-border bg-surface">
          <SectionTitle icon={Server}>로아와 서버정보</SectionTitle>
          <div className="grid grid-cols-2">{serverStats.map(([label, value]) => <div key={label} className="flex flex-col gap-1 border-b border-border px-3 py-2 last:border-b-0"><span className="text-[11px] text-muted">{label}</span><strong className="text-right text-[12px] text-foreground">{value}</strong></div>)}</div>
          <p className="border-t border-border px-3 py-2 text-[10px] text-primary">등록된 캐릭터 정보는 매일 자동으로 갱신하고 있습니다.</p>
        </section>
      </div>
    </section>
  );
}
