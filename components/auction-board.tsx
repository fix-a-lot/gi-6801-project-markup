'use client';

import {useMemo, useState} from 'react';
import {ChevronDown, ChevronLeft, ChevronRight, FileSearch, RotateCcw, Search} from 'lucide-react';
import {GRADE_STYLE, auctionListings, type AuctionCategory, type ItemGrade} from '@/lib/mock-data';

const ALL = '전체' as const;
type FilterCategory = AuctionCategory | typeof ALL;
type GradeFilter = ItemGrade | typeof ALL;

const EQUIPMENT_GROUPS = [
  {label: '장비', children: ['전체', '무기', '투구', '상의', '하의', '장갑', '어깨']},
  {label: '어빌리티 스톤', children: []},
  {label: '장신구', children: []},
  {label: '보석', children: []}
] as const;

const GRADES: GradeFilter[] = [ALL, '고급', '희귀', '영웅', '전설', '유물', '고대'];

function parseRemaining(remaining: string) {
  const hourMatch = remaining.match(/(\d+)시간/);
  const minMatch = remaining.match(/(\d+)분/);
  return (hourMatch ? Number(hourMatch[1]) : 0) * 60 + (minMatch ? Number(minMatch[1]) : 0);
}

function SelectBox({label, value, options, onChange}: {label: string; value: string; options: string[]; onChange: (value: string) => void}) {
  return (
    <label className="flex min-w-0 items-center gap-3">
      <span className="w-16 shrink-0 text-[13px] font-bold text-foreground">{label}</span>
      <span className="relative min-w-0 flex-1">
        <select value={value} onChange={event => onChange(event.target.value)} className="h-9 w-full appearance-none rounded-sm border border-border bg-surface px-3 text-[13px] text-foreground outline-none focus:border-primary">
          {options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
        <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
      </span>
    </label>
  );
}

export function AuctionBoard() {
  const [category, setCategory] = useState<FilterCategory>(ALL);
  const [grade, setGrade] = useState<GradeFilter>(ALL);
  const [itemName, setItemName] = useState('');
  const [minLevel, setMinLevel] = useState('0');
  const [maxLevel, setMaxLevel] = useState('1800');
  const [tier, setTier] = useState('전체 티어');
  const [job, setJob] = useState('전체 직업');
  const [openGroup, setOpenGroup] = useState('장비');

  const listings = useMemo(() => auctionListings.filter(item => {
    const matchesCategory = category === ALL || item.category === category;
    const matchesGrade = grade === ALL || item.grade === grade;
    const matchesName = item.name.includes(itemName.trim());
    return matchesCategory && matchesGrade && matchesName;
  }).sort((a, b) => parseRemaining(a.remaining) - parseRemaining(b.remaining)), [category, grade, itemName]);

  const reset = () => {
    setCategory(ALL); setGrade(ALL); setItemName(''); setMinLevel('0'); setMaxLevel('1800'); setTier('전체 티어'); setJob('전체 직업');
  };

  return (
    <section data-component="경매장게시판" aria-labelledby="auction-board-heading" className="flex flex-col gap-4">
      <h2 id="auction-board-heading" className="sr-only">경매장 검색</h2>
      <div className="flex flex-col gap-4 lg:flex-row">
        <aside className="w-full shrink-0 bg-panel lg:w-[210px]">
          <button type="button" onClick={() => setCategory(ALL)} className={`flex h-9 w-full items-center px-4 text-left text-[13px] font-bold ${category === ALL ? 'bg-foreground text-background' : 'text-foreground'}`}>전체</button>
          {EQUIPMENT_GROUPS.map(group => {
            const expanded = openGroup === group.label;
            return (
              <div key={group.label}>
                <button type="button" onClick={() => setOpenGroup(expanded ? '' : group.label)} className={`flex h-9 w-full items-center justify-between border-t border-border px-4 text-left text-[13px] font-bold ${expanded ? 'bg-primary text-primary-foreground' : 'text-foreground'}`}>
                  {group.label}<ChevronDown className={`size-4 transition-transform ${expanded ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {expanded && group.children.length > 0 && <div className="bg-background py-2">{group.children.map(child => <button key={child} type="button" onClick={() => child === '전체' ? setCategory(ALL) : setCategory(child === '무기' ? '무기' : '방어구')} className={`block w-full px-5 py-1 text-left text-[12px] text-muted hover:text-foreground ${((child === '전체' && category === ALL) || category === child) ? 'font-bold text-primary' : ''}`}>- {child}</button>)}</div>}
              </div>
            );
          })}
        </aside>

        <div className="min-w-0 flex-1">
          <div className="grid gap-x-6 gap-y-2 bg-panel p-4 sm:grid-cols-2 lg:grid-cols-3">
            <label className="flex items-center gap-3 sm:col-span-2 lg:col-span-1"><span className="w-16 shrink-0 text-[13px] font-bold">아이템 명</span><input value={itemName} onChange={event => setItemName(event.target.value)} placeholder="아이템 명을 입력해주세요." className="h-9 min-w-0 flex-1 rounded-sm border border-border bg-surface px-3 text-[13px] text-foreground outline-none placeholder:text-muted focus:border-primary" /></label>
            <SelectBox label="직업" value={job} options={['전체 직업', '전사', '마법사', '헌터', '무도가']} onChange={setJob} />
            <SelectBox label="아이템 등급" value={grade} options={GRADES} onChange={value => setGrade(value as GradeFilter)} />
            <label className="flex items-center gap-3"><span className="w-16 shrink-0 text-[13px] font-bold">아이템 레벨</span><span className="flex min-w-0 flex-1 items-center gap-2"><input value={minLevel} onChange={event => setMinLevel(event.target.value)} className="h-9 w-full min-w-0 rounded-sm border border-border bg-surface px-3 text-center text-[13px] text-foreground outline-none focus:border-primary" /><span className="text-muted">~</span><input value={maxLevel} onChange={event => setMaxLevel(event.target.value)} className="h-9 w-full min-w-0 rounded-sm border border-border bg-surface px-3 text-center text-[13px] text-foreground outline-none focus:border-primary" /></span></label>
            <SelectBox label="아이템 티어" value={tier} options={['전체 티어', '1 티어', '2 티어', '3 티어']} onChange={setTier} />
            <div className="flex items-center gap-2 sm:col-span-2 lg:col-span-1"><button type="button" onClick={() => undefined} className="h-9 flex-1 bg-primary text-[13px] font-bold text-primary-foreground hover:bg-primary/90"><Search className="mr-1 inline size-4" aria-hidden="true" />검색</button><button type="button" onClick={() => undefined} aria-label="상세 검색" className="h-9 w-14 bg-primary/80 text-primary-foreground hover:bg-primary"><FileSearch className="mx-auto size-4" aria-hidden="true" /></button><button type="button" onClick={reset} aria-label="검색 초기화" className="h-9 w-14 bg-primary/70 text-primary-foreground hover:bg-primary"><RotateCcw className="mx-auto size-4" aria-hidden="true" /></button></div>
          </div>

          <p className="border-b-2 border-foreground py-3 text-[13px] text-muted">최신 데이터 반영은 <strong className="text-primary">최대 10분</strong> 정도 소요될 수 있어, 게임과 다소 차이가 있을 수 있으니 양해 부탁드립니다.</p>
          <div className="overflow-x-auto"><table className="w-full min-w-[760px] border-collapse text-[13px]"><thead><tr className="border-b border-border bg-surface text-foreground"><th className="px-3 py-3 text-left font-normal">등급</th><th className="px-3 py-3 text-left font-normal">아이템레벨</th><th className="px-3 py-3 text-left font-normal">품질</th><th className="px-3 py-3 text-left font-normal">남은 시간</th><th className="px-3 py-3 text-left font-normal">최소 입찰가</th><th className="px-3 py-3 text-left font-normal">즉시 구매가</th><th className="px-3 py-3 text-left font-normal">입찰 / 구매</th></tr></thead><tbody>{listings.map(item => <tr key={item.id} className="border-b border-border/70 hover:bg-surface"><td className="px-3 py-3"><div className="flex items-center gap-2"><span className={`size-3 rounded-sm ${GRADE_STYLE[item.grade]}`} aria-hidden="true" /><span>{item.name}</span></div><span className="ml-5 text-[11px] text-muted">{item.detail}</span></td><td className="px-3 py-3 font-mono">{item.category === '보석' ? '-' : '1,620'}</td><td className="px-3 py-3">{item.quality ?? '-'}</td><td className="px-3 py-3 text-fall">{item.remaining}</td><td className="px-3 py-3 font-mono">{Math.floor(item.buyPrice * 0.8).toLocaleString('ko-KR')}</td><td className="px-3 py-3 font-mono font-bold">{item.buyPrice.toLocaleString('ko-KR')}</td><td className="px-3 py-3"><div className="flex gap-1"><button type="button" className="rounded-sm border border-border px-2 py-1 text-[11px] text-muted hover:text-foreground">입찰</button><button type="button" className="rounded-sm bg-primary px-2 py-1 text-[11px] text-primary-foreground">구매</button></div></td></tr>)}</tbody></table></div>
          {listings.length === 0 && <p className="py-12 text-center text-[13px] text-muted">등록된 매물이 없어요</p>}
          <div className="flex items-center justify-center gap-2 py-5"><button type="button" aria-label="이전 페이지" className="text-muted hover:text-foreground"><ChevronLeft className="size-4" /></button><span className="rounded-sm bg-primary px-2.5 py-1 text-[12px] text-primary-foreground">1</span><button type="button" aria-label="다음 페이지" className="text-muted hover:text-foreground"><ChevronRight className="size-4" /></button></div>
        </div>
      </div>
    </section>
  );
}
