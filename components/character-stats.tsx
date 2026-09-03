import type {CharacterProfile} from '@/lib/mock-data';

export function CharacterStats({character}: {character: CharacterProfile}) {
  const max = Math.max(...character.stats.map(s => s.value));

  return (
    <section
      data-component="캐릭터특성"
      aria-labelledby="character-stats-heading"
      className="rounded-md border border-border bg-surface p-3"
    >
      <h2 id="character-stats-heading" className="mb-2.5 text-[13px] font-bold text-foreground">
        전투 특성
      </h2>
      <ul className="flex flex-col gap-2">
        {character.stats.map(stat => (
          <li key={stat.label} className="flex items-center gap-2">
            <span className="w-9 shrink-0 text-[12px] text-muted">{stat.label}</span>
            <span className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-surface-2">
              <span
                className="absolute inset-y-0 left-0 rounded-full bg-primary"
                style={{width: `${(stat.value / max) * 100}%`}}
              />
            </span>
            <span className="w-12 shrink-0 text-right font-mono text-[12px] text-foreground">
              {stat.value.toLocaleString('ko-KR')}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
