'use client';

import {useMemo, useState} from 'react';
import {
  AUCTION_FEE_RATE,
  braceletOptions,
  dpsTierList,
  priceTrendItems,
  refineStages,
  simulatorSliders,
  type BraceletTier,
  type DpsTier
} from '@/lib/mock-data';

const TIER_COLOR: Record<BraceletTier | DpsTier, string> = {
  S: 'text-primary',
  A: 'text-secondary',
  B: 'text-foreground',
  C: 'text-muted'
};

/** 재련 단계를 고르면 예상 재료 비용과 성공률을 보여주는 재련 계산기. */
export function RefinementCalculator() {
  const [stageIndex, setStageIndex] = useState(0);
  const stage = refineStages[stageIndex];

  const materialCost = stage.materials.reduce((sum, m) => sum + m.count * m.unitPrice, 0);
  const totalCost = materialCost + stage.additionalGoldCost;

  return (
    <section
      data-component="재련계산기"
      aria-labelledby="refine-calculator-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="refine-calculator-heading" className="text-[13px] font-bold text-foreground">
          재련 계산기
        </h2>
      </div>

      <div role="tablist" aria-label="재련 단계" className="no-scrollbar flex gap-1 overflow-x-auto px-3 py-2">
        {refineStages.map((s, i) => (
          <button
            key={s.stage}
            type="button"
            role="tab"
            aria-selected={stageIndex === i}
            onClick={() => setStageIndex(i)}
            className={`shrink-0 rounded-sm px-2.5 py-1 font-mono text-[12px] font-bold transition-colors ${
              stageIndex === i
                ? 'bg-primary text-primary-foreground'
                : 'border border-border bg-surface-2 text-muted hover:text-foreground'
            }`}
          >
            {s.stage}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-3 px-3 pb-3 sm:grid-cols-[minmax(0,1fr)_160px]">
        <ul className="divide-y divide-border rounded-sm border border-border bg-surface-2">
          {stage.materials.map(m => (
            <li key={m.name} className="flex items-center justify-between px-2.5 py-1.5 text-[12px]">
              <span className="truncate text-foreground">{m.name}</span>
              <span className="shrink-0 font-mono text-muted">
                {m.count.toLocaleString('ko-KR')}개 × {m.unitPrice.toLocaleString('ko-KR')}
              </span>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-2 rounded-sm border border-border bg-surface-2 p-2.5">
          <div className="flex items-center justify-between text-[11px] text-muted">
            <span>성공률</span>
            <span className="font-mono text-foreground">{stage.successRate}%</span>
          </div>
          <div className="flex items-center justify-between text-[11px] text-muted">
            <span>부가 골드</span>
            <span className="font-mono text-foreground">{stage.additionalGoldCost.toLocaleString('ko-KR')}</span>
          </div>
          <div className="mt-1 border-t border-border pt-2">
            <p className="text-[11px] text-muted">예상 총 비용</p>
            <p className="font-mono text-[16px] font-bold text-primary">{totalCost.toLocaleString('ko-KR')}골드</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 팔찌 옵션을 최대 3개 선택해 합산 효율 점수와 티어를 계산하는 계산기. */
export function BraceletEfficiencyCalculator() {
  const [selected, setSelected] = useState<string[]>([braceletOptions[0].id, braceletOptions[1].id]);

  function toggle(id: string) {
    setSelected(prev => {
      if (prev.includes(id)) return prev.filter(v => v !== id);
      if (prev.length >= 3) return prev;
      return [...prev, id];
    });
  }

  const chosen = braceletOptions.filter(o => selected.includes(o.id));
  const totalScore = chosen.reduce((sum, o) => sum + o.score, 0);
  const resultTier: BraceletTier = totalScore >= 60 ? 'S' : totalScore >= 40 ? 'A' : totalScore >= 20 ? 'B' : 'C';

  return (
    <section
      data-component="팔찌효율계산기"
      aria-labelledby="bracelet-calculator-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="bracelet-calculator-heading" className="text-[13px] font-bold text-foreground">
          팔찌 효율 계산기
        </h2>
        <p className="mt-0.5 text-[11px] text-muted">특옵을 최대 3개까지 선택해 효율을 확인해요</p>
      </div>

      <ul className="grid grid-cols-1 gap-1.5 p-3 sm:grid-cols-2">
        {braceletOptions.map(o => (
          <li key={o.id}>
            <button
              type="button"
              aria-pressed={selected.includes(o.id)}
              onClick={() => toggle(o.id)}
              className={`flex w-full items-center justify-between gap-2 rounded-sm border px-2.5 py-1.5 text-left text-[12px] transition-colors ${
                selected.includes(o.id)
                  ? 'border-primary/60 bg-primary/10 text-foreground'
                  : 'border-border bg-surface-2 text-muted hover:text-foreground'
              }`}
            >
              <span className="truncate">{o.name}</span>
              <span className={`shrink-0 font-mono text-[11px] font-bold ${TIER_COLOR[o.tier]}`}>{o.tier}</span>
            </button>
          </li>
        ))}
      </ul>

      <div className="flex items-center justify-between border-t border-border px-3 py-2.5">
        <span className="text-[11px] text-muted">합산 효율 점수</span>
        <div className="flex items-center gap-2">
          <span className="font-mono text-[15px] font-bold text-foreground">{totalScore}점</span>
          <span className={`font-mono text-[13px] font-bold ${TIER_COLOR[resultTier]}`}>{resultTier}등급</span>
        </div>
      </div>
    </section>
  );
}

/** 판매가를 입력하면 경매 수수료와 실수령 골드를 즉시 계산해주는 계산기. */
export function AuctionFeeCalculator() {
  const [price, setPrice] = useState(100000);

  const fee = Math.round(price * AUCTION_FEE_RATE);
  const net = price - fee;

  return (
    <section
      data-component="경매수수료계산기"
      aria-labelledby="fee-calculator-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="fee-calculator-heading" className="text-[13px] font-bold text-foreground">
          경매 · 우편 수수료 계산기
        </h2>
      </div>

      <div className="flex flex-col gap-3 p-3">
        <label className="flex flex-col gap-1.5">
          <span className="text-[11px] text-muted">판매가 (골드)</span>
          <input
            type="number"
            min={0}
            value={price}
            onChange={e => setPrice(Math.max(0, Number(e.target.value) || 0))}
            className="rounded-sm border border-border bg-surface-2 px-2.5 py-1.5 font-mono text-[13px] text-foreground focus:border-primary/60 focus:outline-none"
          />
        </label>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-sm border border-border bg-surface-2 p-2.5">
            <p className="text-[11px] text-muted">수수료 ({(AUCTION_FEE_RATE * 100).toFixed(0)}%)</p>
            <p className="font-mono text-[15px] font-bold text-fall">-{fee.toLocaleString('ko-KR')}</p>
          </div>
          <div className="rounded-sm border border-border bg-surface-2 p-2.5">
            <p className="text-[11px] text-muted">실수령 골드</p>
            <p className="font-mono text-[15px] font-bold text-rise">{net.toLocaleString('ko-KR')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 직업별 DPS 등급을 S/A/B 카드로 정리한 티어 리스트. */
export function DpsTierList() {
  const tiers: DpsTier[] = ['S', 'A', 'B'];

  return (
    <section
      data-component="DPS티어리스트"
      aria-labelledby="dps-tier-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="dps-tier-heading" className="text-[13px] font-bold text-foreground">
          DPS 티어 리스트
        </h2>
      </div>
      <div className="flex flex-col gap-3 p-3">
        {tiers.map(tier => (
          <div key={tier} className="flex gap-3">
            <span className={`w-6 shrink-0 pt-0.5 font-mono text-[15px] font-bold ${TIER_COLOR[tier]}`}>{tier}</span>
            <ul className="grid flex-1 grid-cols-1 gap-1.5 sm:grid-cols-2">
              {dpsTierList
                .filter(d => d.tier === tier)
                .map(d => (
                  <li
                    key={d.className}
                    className="flex flex-col gap-0.5 rounded-sm border border-border bg-surface-2 px-2.5 py-1.5"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[12px] font-medium text-foreground">{d.className}</span>
                      <span className="text-[10px] text-muted">{d.role}</span>
                    </div>
                    <p className="truncate text-[11px] text-muted">{d.note}</p>
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/** 슬라이더로 스탯을 조정하면 예상 대미지 지수가 실시간으로 갱신되는 시뮬레이터. */
export function DamageSimulator() {
  const [values, setValues] = useState<Record<string, number>>(() =>
    Object.fromEntries(simulatorSliders.map(s => [s.key, s.defaultValue]))
  );

  const estimatedDamage = useMemo(() => {
    const critChance = values.critChance ?? 0;
    const critDamage = values.critDamage ?? 100;
    const extraDamage = values.extraDamage ?? 0;
    const weaponAttack = values.weaponAttack ?? 1000;
    const critMultiplier = 1 + (critChance / 100) * ((critDamage - 100) / 100);
    const extraMultiplier = 1 + extraDamage / 100;
    return Math.round(weaponAttack * critMultiplier * extraMultiplier);
  }, [values]);

  return (
    <section
      data-component="대미지시뮬레이터"
      aria-labelledby="damage-simulator-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="border-b border-border px-3 py-2.5">
        <h2 id="damage-simulator-heading" className="text-[13px] font-bold text-foreground">
          대미지 시뮬레이터
        </h2>
      </div>

      <div className="flex flex-col gap-3 p-3">
        {simulatorSliders.map(s => (
          <label key={s.key} className="flex flex-col gap-1.5">
            <span className="flex items-center justify-between text-[11px] text-muted">
              <span>{s.label}</span>
              <span className="font-mono text-foreground">
                {values[s.key]}
                {s.unit}
              </span>
            </span>
            <input
              type="range"
              min={s.min}
              max={s.max}
              step={s.step}
              value={values[s.key]}
              onChange={e => setValues(prev => ({...prev, [s.key]: Number(e.target.value)}))}
              className="h-1.5 w-full cursor-pointer accent-primary"
            />
          </label>
        ))}

        <div className="mt-1 rounded-sm border border-border bg-surface-2 p-3 text-center">
          <p className="text-[11px] text-muted">예상 대미지 지수</p>
          <p className="font-mono text-[20px] font-bold text-primary">{estimatedDamage.toLocaleString('ko-KR')}</p>
        </div>
      </div>
    </section>
  );
}

/** 선택한 아이템의 최근 시세 추이를 라인 그래프로 보여주는 차트. */
export function PriceTrendChart() {
  const [itemId, setItemId] = useState(priceTrendItems[0].id);
  const item = priceTrendItems.find(i => i.id === itemId) ?? priceTrendItems[0];

  const {points, min, max} = useMemo(() => {
    const prices = item.history.map(h => h.price);
    return {points: item.history, min: Math.min(...prices), max: Math.max(...prices)};
  }, [item]);

  const width = 280;
  const height = 80;
  const range = max - min || 1;
  const path = points
    .map((p, i) => {
      const x = (i / (points.length - 1)) * width;
      const y = height - ((p.price - min) / range) * height;
      return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(' ');

  const first = points[0].price;
  const last = points[points.length - 1].price;
  const changePercent = ((last - first) / first) * 100;

  return (
    <section
      data-component="시세추이차트"
      aria-labelledby="price-trend-heading"
      className="rounded-md border border-border bg-surface"
    >
      <div className="flex items-center justify-between border-b border-border px-3 py-2.5">
        <h2 id="price-trend-heading" className="text-[13px] font-bold text-foreground">
          시세 추이
        </h2>
        <select
          value={itemId}
          onChange={e => setItemId(e.target.value)}
          className="rounded-sm border border-border bg-surface-2 px-2 py-1 text-[12px] text-foreground focus:outline-none"
        >
          {priceTrendItems.map(i => (
            <option key={i.id} value={i.id} className="bg-surface text-foreground">
              {i.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-3 p-3">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[18px] font-bold text-foreground">{last.toLocaleString('ko-KR')}</span>
          <span className={`font-mono text-[12px] font-medium ${changePercent >= 0 ? 'text-rise' : 'text-fall'}`}>
            {changePercent >= 0 ? '+' : ''}
            {changePercent.toFixed(1)}%
          </span>
        </div>

        <svg viewBox={`0 0 ${width} ${height}`} className="h-20 w-full overflow-visible" aria-hidden="true">
          <path d={path} fill="none" stroke="var(--color-primary)" strokeWidth={2} />
        </svg>

        <div className="flex justify-between text-[10px] text-muted">
          <span>{points[0].date}</span>
          <span>{points[points.length - 1].date}</span>
        </div>
      </div>
    </section>
  );
}
