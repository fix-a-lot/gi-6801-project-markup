'use client';

import {useEffect, useMemo, useState} from 'react';
import {Search} from 'lucide-react';
import {
  RANKING_METRICS,
  RANKING_ROLES,
  classSettingStats,
  compareCharacterPool,
  fieldCountdowns,
  guildRankings,
  rankingCharacters,
  travelingMerchants,
  type FieldCountdownEntry,
  type RankingMetric,
  type RankingRole
} from '@/lib/mock-data';

const METRIC_KEY: Record<RankingMetric, keyof (typeof rankingCharacters)[number]> = {
  전투력: 'combatPower',
  낙원력: 'paradisePower',
  팔찌효율: 'braceletEfficiency',
  젬효율: 'gemEfficiency'
};

const METRIC_UNIT: Record<RankingMetric, string> = {
  전투력: '',
  낙원력: '',
  팔찌효율: '%',
  젬효율: '%'
};

function formatMetricValue(metric: RankingMetric, value: number) {
  if (metric === '팔찌효율' || metric === '젬효율') return value.toFixed(1);
  return value.toLocaleString('ko-KR');
}

/** 지표 탭 + 역할군 필터가 있는 TOP 랭킹 카드 그리드. 로아지지의 종합 랭킹 화면을 재해석했다. */
export function TopRankingBoard() {
  const [metric, setMetric] = useState<RankingMetric>('전투력');
  const [role, setRole] = useState<RankingRole>('전체');

  const ranked = useMemo(() => {
    const filtered = rankingCharacters.filter(c => role === '전체' || c.role === role);
    const key = METRIC_KEY[metric];
    return [...filtered].sort((a, b) => (b[key] as number) - (a[key] as number)).slice(0, 5);
  }, [metric, role]);

  return (
    <section
      data-component="랭킹카드보드"
      aria-labelledby="top-ranking-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="flex flex-col gap-2.5 border-b border-border px-3 py-2.5 sm:flex-row sm:items-center sm:justify-between">
        <h2 id="top-ranking-heading" className="text-[13px] font-bold text-foreground">
          TOP 랭킹
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          <div role="tablist" aria-label="랭킹 지표" className="no-scrollbar flex gap-1 overflow-x-auto">
            {RANKING_METRICS.map(m => (
              <button
                key={m}
                type="button"
                role="tab"
                aria-selected={metric === m}
                onClick={() => setMetric(m)}
                className={`shrink-0 rounded-sm px-2.5 py-1 text-[12px] font-medium transition-colors ${
                  metric === m
                    ? 'bg-primary text-primary-foreground'
                    : 'border border-border bg-surface-2 text-muted hover:text-foreground'
                }`}
              >
                {m}
              </button>
            ))}
          </div>
          <div role="tablist" aria-label="역할군 필터" className="flex gap-1">
            {RANKING_ROLES.map(r => (
              <button
                key={r}
                type="button"
                role="tab"
                aria-selected={role === r}
                onClick={() => setRole(r)}
                className={`shrink-0 rounded-sm px-2.5 py-1 text-[12px] font-medium transition-colors ${
                  role === r
                    ? 'bg-secondary text-secondary-foreground'
                    : 'border border-border bg-surface-2 text-muted hover:text-foreground'
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-5">
        {ranked.map((c, i) => (
          <li
            key={c.name}
            className="flex flex-col gap-1.5 rounded-sm border border-border bg-surface-2 p-2.5 text-center"
          >
            <span className={`font-mono text-[12px] font-bold ${i === 0 ? 'text-primary' : 'text-muted'}`}>
              {i + 1}위
            </span>
            <span className="truncate text-[13px] font-medium text-foreground">{c.name}</span>
            <span className="truncate text-[11px] text-muted">
              {c.server} · {c.className}
            </span>
            <span className="font-mono text-[13px] font-bold text-primary">
              {formatMetricValue(metric, c[METRIC_KEY[metric]] as number)}
              {METRIC_UNIT[metric]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

/** 캐릭터 여러 명을 열로 나열해 스펙을 나란히 비교하는 멀티서치 테이블. */
export function MultiSearchCompare() {
  const [selected, setSelected] = useState<string[]>(compareCharacterPool.slice(0, 3).map(c => c.name));

  function toggle(name: string) {
    setSelected(prev => {
      if (prev.includes(name)) return prev.filter(n => n !== name);
      if (prev.length >= 3) return [prev[1], prev[2], name];
      return [...prev, name];
    });
  }

  const columns = compareCharacterPool.filter(c => selected.includes(c.name));

  return (
    <section
      data-component="멀티서치비교"
      aria-labelledby="multi-search-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="multi-search-heading" className="text-[13px] font-bold text-foreground">
          멀티 서치 비교
        </h2>
        <p className="mt-0.5 text-[11px] text-muted">최대 3명까지 선택해 스펙을 나란히 비교해요</p>
      </div>

      <div className="no-scrollbar flex gap-1.5 overflow-x-auto border-b border-border px-3 py-2">
        {compareCharacterPool.map(c => (
          <button
            key={c.name}
            type="button"
            aria-pressed={selected.includes(c.name)}
            onClick={() => toggle(c.name)}
            className={`shrink-0 rounded-sm px-2.5 py-1 text-[12px] font-medium transition-colors ${
              selected.includes(c.name)
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-surface-2 text-muted hover:text-foreground'
            }`}
          >
            {c.name}
          </button>
        ))}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[520px] text-left">
          <tbody>
            <tr className="border-b border-border">
              <th scope="row" className="w-24 px-3 py-2 text-[11px] font-normal text-muted">
                캐릭터
              </th>
              {columns.map(c => (
                <td key={c.name} className="px-3 py-2 text-[13px] font-medium text-foreground">
                  {c.name}
                </td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <th scope="row" className="px-3 py-2 text-[11px] font-normal text-muted">
                서버 · 직업
              </th>
              {columns.map(c => (
                <td key={c.name} className="px-3 py-2 text-[12px] text-muted">
                  {c.server} · {c.className}
                </td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <th scope="row" className="px-3 py-2 text-[11px] font-normal text-muted">
                아이템 레벨
              </th>
              {columns.map(c => (
                <td key={c.name} className="px-3 py-2 font-mono text-[13px] text-foreground">
                  {c.itemLevel}
                </td>
              ))}
            </tr>
            <tr className="border-b border-border">
              <th scope="row" className="px-3 py-2 text-[11px] font-normal text-muted">
                전투력
              </th>
              {columns.map(c => (
                <td key={c.name} className="px-3 py-2 font-mono text-[13px] font-bold text-primary">
                  {c.combatPower.toLocaleString('ko-KR')}
                </td>
              ))}
            </tr>
            <tr>
              <th scope="row" className="px-3 py-2 align-top text-[11px] font-normal text-muted">
                각인
              </th>
              {columns.map(c => (
                <td key={c.name} className="px-3 py-2 align-top">
                  <ul className="flex flex-col gap-0.5">
                    {c.engravings.map(e => (
                      <li key={e} className="text-[11px] text-muted">
                        {e}
                      </li>
                    ))}
                  </ul>
                </td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

/** 길드명 검색과 대표 전투력 기준 랭킹을 함께 보여주는 길드 검색 랭킹 패널. */
export function GuildSearchRanking() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim();
    if (!q) return guildRankings;
    return guildRankings.filter(g => g.name.includes(q) || g.server.includes(q));
  }, [query]);

  return (
    <section
      data-component="길드검색랭킹"
      aria-labelledby="guild-ranking-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="flex items-center justify-between gap-3 border-b border-border px-3 py-2.5">
        <h2 id="guild-ranking-heading" className="text-[13px] font-bold text-foreground">
          길드 검색 랭킹
        </h2>
        <label className="flex h-8 w-40 items-center gap-1.5 rounded-sm border border-border bg-surface-2 px-2 text-muted focus-within:border-primary/60">
          <Search className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
          <span className="sr-only">길드명 검색</span>
          <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="길드명 검색"
            className="w-full bg-transparent text-[12px] text-foreground placeholder:text-muted focus:outline-none"
          />
        </label>
      </div>

      <ol className="divide-y divide-border">
        {filtered.map(g => (
          <li key={g.name} className="flex items-center gap-2.5 px-3 py-2">
            <span
              className={`w-5 shrink-0 text-center font-mono text-[12px] font-bold ${
                g.rank <= 3 ? 'text-primary' : 'text-muted'
              }`}
            >
              {g.rank}
            </span>
            <span className="min-w-0 flex-1 truncate text-[13px] text-foreground">{g.name}</span>
            <span className="shrink-0 text-[11px] text-muted">{g.server}</span>
            <span className="w-16 shrink-0 text-right text-[11px] text-muted">{g.memberCount}명</span>
            <span className="w-20 shrink-0 text-right font-mono text-[12px] font-bold text-primary">
              {g.representativePower.toLocaleString('ko-KR')}
            </span>
          </li>
        ))}

        {filtered.length === 0 && (
          <li className="px-3 py-8 text-center text-[13px] text-muted">검색 결과가 없어요</li>
        )}
      </ol>
    </section>
  );
}

/** 직업을 고르면 인기 각인 · 보석 조합의 채택률을 막대로 보여주는 세팅 통계 패널. */
export function ClassSettingStats() {
  const [className, setClassName] = useState(classSettingStats[0].className);
  const stat = classSettingStats.find(s => s.className === className) ?? classSettingStats[0];

  return (
    <section
      data-component="세팅통계"
      aria-labelledby="setting-stats-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
        <h2 id="setting-stats-heading" className="text-[13px] font-bold text-foreground">
          세팅 통계
        </h2>
        <select
          value={className}
          onChange={e => setClassName(e.target.value)}
          className="rounded-sm border border-border bg-surface-2 px-2 py-1 text-[12px] text-foreground focus:outline-none"
        >
          {classSettingStats.map(s => (
            <option key={s.className} value={s.className} className="bg-surface text-foreground">
              {s.className}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4 p-3 sm:grid-cols-2">
        <div>
          <h3 className="mb-2 text-[12px] font-medium text-muted">각인 조합 채택률</h3>
          <ul className="flex flex-col gap-2">
            {stat.engravingCombos.map(e => (
              <li key={e.combo} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-[11px] text-foreground">
                  <span className="truncate">{e.combo}</span>
                  <span className="font-mono text-muted">{e.rate.toFixed(1)}%</span>
                </div>
                <span className="relative h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <span className="absolute inset-y-0 left-0 rounded-full bg-primary" style={{width: `${e.rate}%`}} />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="mb-2 text-[12px] font-medium text-muted">보석 조합 채택률</h3>
          <ul className="flex flex-col gap-2">
            {stat.gemCombos.map(g => (
              <li key={g.combo} className="flex flex-col gap-1">
                <div className="flex items-center justify-between text-[11px] text-foreground">
                  <span className="truncate">{g.combo}</span>
                  <span className="font-mono text-muted">{g.rate.toFixed(1)}%</span>
                </div>
                <span className="relative h-1.5 overflow-hidden rounded-full bg-surface-2">
                  <span
                    className="absolute inset-y-0 left-0 rounded-full bg-secondary"
                    style={{width: `${g.rate}%`}}
                  />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** 서버별 떠돌이 상인의 등장 위치와 판매 품목을 보여주는 안내판. */
export function TravelingMerchantBoard() {
  return (
    <section
      data-component="떠돌이상인안내판"
      aria-labelledby="merchant-board-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="merchant-board-heading" className="text-[13px] font-bold text-foreground">
          떠돌이 상인
        </h2>
      </div>
      <ul className="divide-y divide-border">
        {travelingMerchants.map(m => (
          <li key={`${m.server}-${m.location}`} className="flex flex-col gap-1.5 px-3 py-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[13px] font-medium text-foreground">{m.server}</span>
              <span className="font-mono text-[11px] text-fall">{m.remaining} 남음</span>
            </div>
            <p className="text-[12px] text-muted">{m.location}</p>
            <div className="flex flex-wrap gap-1">
              {m.items.map(item => (
                <span key={item} className="rounded-sm border border-border bg-surface-2 px-1.5 py-0.5 text-[11px] text-foreground">
                  {item}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function formatCountdown(totalSeconds: number) {
  const clamped = Math.max(0, totalSeconds);
  const h = Math.floor(clamped / 3600);
  const m = Math.floor((clamped % 3600) / 60);
  const s = clamped % 60;
  return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
}

/** 필드보스 · 모험섬 등 필드 컨텐츠 등장까지 남은 시간을 실시간으로 보여주는 카운트다운. */
export function FieldContentCountdown() {
  const [entries, setEntries] = useState<FieldCountdownEntry[]>(fieldCountdowns);

  useEffect(() => {
    const timer = setInterval(() => {
      setEntries(prev =>
        prev.map(e => ({...e, remainingSeconds: e.remainingSeconds > 0 ? e.remainingSeconds - 1 : 0}))
      );
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      data-component="필드컨텐츠카운트다운"
      aria-labelledby="field-countdown-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="field-countdown-heading" className="text-[13px] font-bold text-foreground">
          필드 컨텐츠 카운트다운
        </h2>
      </div>
      <ul className="grid grid-cols-1 gap-2 p-3 sm:grid-cols-3">
        {entries.map(e => (
          <li key={e.id} className="flex flex-col gap-1 rounded-sm border border-border bg-surface-2 p-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] text-muted">{e.category}</span>
              <span className="text-[11px] text-muted">{e.server}</span>
            </div>
            <p className="truncate text-[13px] font-medium text-foreground">{e.name}</p>
            <span
              className={`font-mono text-[15px] font-bold tabular-nums ${
                e.remainingSeconds <= 300 ? 'text-fall' : 'text-primary'
              }`}
            >
              {formatCountdown(e.remainingSeconds)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
